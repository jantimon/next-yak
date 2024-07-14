import * as babelTypes from "@babel/types";
import type { BabelFile, NodePath, PluginObj, PluginPass } from "@babel/core";
import { TaggedTemplateExpression } from "@babel/types";
import { basename, relative, resolve } from "node:path";
import { getConstantName, getConstantValues } from "./lib/getConstantValues.js";
import murmurhash2_32_gc from "./lib/hash.js";
import replaceQuasiExpressionTokens from "./lib/replaceQuasiExpressionTokens.js";
import getStyledComponentName from "./lib/getStyledComponentName.js";
import getCssName from "./lib/getCssName.js";
import { Declaration, ParserState, parseCss } from "./lib/parseCss.js";
import { toCss } from "./lib/toCss.js";
import appendCssUnitToExpressionValue from "./lib/appendCssUnitToExpressionValue.js";
import { transpileCssProp } from "./lib/transpileCssProp.js";

type YakBabelPluginOptions = {
  replaces: Record<string, unknown>;
  rootContext?: string;
  devMode?: boolean;
  crossFile: boolean;
};

type YakLocalIdentifierNames = {
  css: string | undefined;
  styled: string | undefined;
  keyframes: string | undefined;
};

// `YakTemplateLiteral` is an AST node for a `style` or `css` usage in the user code with its css code and expressions
type YakTemplateLiteral = {
  name: string;
  path: NodePath<babelTypes.TaggedTemplateExpression>;
  hasParent: boolean;
  cssPartQuasis: string[];
  cssPartExpressions: { [key: number]: YakTemplateLiteral[] };
  referencedBy: Set<YakTemplateLiteral>;
  type:
    | "cssLiteral"
    | "keyframesLiteral"
    | "styledLiteral"
    | "styledCall"
    | "attrsCall";
};

/**
 * Babel plugin for typescript files that use yak - it will do things:
 * - inject the import to the css-module (with .yak.module.css extension)
 * - replace the css template literal with styles from the css-module
 */
export default function (
  babel: { types: typeof babelTypes },
  options: YakBabelPluginOptions,
): PluginObj<
  PluginPass & {
    localVarNames: YakLocalIdentifierNames;
    isImportedInCurrentFile: boolean;
    topLevelConstBindings: ReturnType<typeof getConstantValues>;
    variableNameToStyledCall: Map<
      string,
      {
        wasAdded: boolean;
        className: string;
        astNode: babelTypes.CallExpression;
      }
    >;
    yakImportPath?: NodePath<babelTypes.ImportDeclaration>;
    yakTemplateExpressionsByPath: Map<
      NodePath<babelTypes.TaggedTemplateExpression>,
      YakTemplateLiteral
    >;
    yakTemplateExpressionsByName: Map<string, YakTemplateLiteral>;
    runtimeInternalHelpers: Set<string>;
  }
> {
  const { replaces } = options;
  const rootContext = options.rootContext || "./";
  const { types: t } = babel;

  /**
   * A unique prefix for each file to avoid collisions
   * (generated on first use by hashing the relative file path)
   */
  const hashedFilePaths = new WeakMap<BabelFile, string>();
  const getHashedFilePath = (file: BabelFile) => {
    const fromCache = hashedFilePaths.get(file);
    if (fromCache) {
      return fromCache;
    }
    const resourcePath = file.opts.filename;
    if (!resourcePath) {
      throw new Error("resourcePath is undefined");
    }
    const relativePath = relative(
      rootContext,
      resolve(rootContext, resourcePath),
    );
    const hashedFilePath = murmurhash2_32_gc(relativePath);
    hashedFilePaths.set(file, hashedFilePath);
    return hashedFilePath;
  };

  /**
   * Returns wether the given tag is matching a yak import
   *
   * e.g.:
   * - css`...` -> cssLiteral
   * - styled.div`...` -> styledLiteral
   * - styled(Component)`...` -> styledCall
   * - styled.div.attrs({})`...` -> attrsCall
   * - keyframes`...` -> keyframesLiteral
   */
  const getYakExpressionType = (
    tag: babelTypes.Expression,
    localVarNames: YakLocalIdentifierNames,
  ) => {
    if (t.isIdentifier(tag)) {
      if (tag.name === localVarNames.css) {
        return "cssLiteral";
      }
      if (tag.name === localVarNames.keyframes) {
        return "keyframesLiteral";
      }
    }
    if (
      t.isMemberExpression(tag) &&
      t.isIdentifier(tag.object) &&
      tag.object.name === localVarNames.styled
    ) {
      return "styledLiteral";
    }
    if (
      t.isCallExpression(tag) &&
      t.isIdentifier(tag.callee) &&
      tag.callee.name === localVarNames.styled
    ) {
      return "styledCall";
    }
    if (
      t.isCallExpression(tag) &&
      t.isMemberExpression(tag.callee) &&
      t.isIdentifier(tag.callee.property) &&
      tag.callee.property.name === "attrs"
    ) {
      return "attrsCall";
    }
    return "unknown";
  };

  return {
    name: "next-yak",
    pre() {
      // Initialize state variables
      this.localVarNames = {
        css: undefined,
        styled: undefined,
        keyframes: undefined,
      };
      this.isImportedInCurrentFile = false;
      this.variableNameToStyledCall = new Map();
      this.topLevelConstBindings = new Map();
      this.yakTemplateExpressionsByPath = new Map();
      this.yakTemplateExpressionsByName = new Map();
      this.runtimeInternalHelpers = new Set();
    },
    visitor: {
      Program: {
        enter(path) {
          this.topLevelConstBindings = getConstantValues(path, t);
        },
        exit(_path, state) {
          if (!this.isImportedInCurrentFile) {
            return;
          }
          const devMode = options.devMode || false;
          // Util to create a unique identifiers per file name
          const existingNames = new Set<string>();
          const createUniqueName = (name: string, hash?: boolean) => {
            let i = 0;
            const baseName = hash
              ? // Hashes will only be used for identifiers which can not be minified
                // therefore the readable name will only be used if development is enabled
                `${devMode ? `${name}_` : ""}${getHashedFilePath(state.file)}`
              : name;
            let uniqueName = baseName;
            while (existingNames.has(uniqueName)) {
              i++;
              uniqueName = devMode
                ? `${baseName}_${i}`
                : `${baseName}${i.toString(32)}`;
            }
            existingNames.add(uniqueName);
            return uniqueName;
          };
          // Iteratate and transform all found yak template literals
          visitYakExpression(
            this.yakTemplateExpressionsByPath,
            (expression, rootExpression, cssParserState, visitChildren) => {
              transformYakExpressions(
                expression,
                rootExpression,
                cssParserState,
                visitChildren,
                createUniqueName,
                this.runtimeInternalHelpers,
                getComponentTypes(this.yakTemplateExpressionsByPath),
                this.topLevelConstBindings,
                state.file,
                options.crossFile,
              );
            },
          );

          // Add used runtime helpers to the import
          if (this.runtimeInternalHelpers.size && this.yakImportPath) {
            const newImport = t.importDeclaration(
              [...this.runtimeInternalHelpers].map((helper) =>
                t.importSpecifier(t.identifier(helper), t.identifier(helper)),
              ),
              t.stringLiteral("next-yak/runtime-internals"),
            );
            this.yakImportPath.insertAfter(newImport);
          }
        },
      },
      JSXElement(path) {
        if (!this.isImportedInCurrentFile || !this.yakImportPath) {
          return;
        }
        transpileCssProp(t, path, this.runtimeInternalHelpers, this.file);
      },
      /**
       * Store the name of the imported 'css' and 'styled' variables e.g.:
       * - `import { css, styled } from 'next-yak'` -> { css: 'css', styled: 'styled' }
       * - `import { css as yakCss, styled as yakStyled } from 'next-yak'` -> { css: 'yakCss', styled: 'yakStyled' }
       *
       * Inject the import to the css-module (with .yak.module.css extension)
       * e.g. `import './App.yak.module.css!=!./App?./App.yak.module.css'`
       */
      ImportDeclaration(path, state) {
        const node = path.node;
        if (node.source.value !== "next-yak") {
          return;
        }
        node.source.value = "next-yak/internal";
        const filePath = state.file.opts.filename;
        if (!filePath) {
          throw new Error("filePath is undefined");
        }
        const fileName = basename(filePath).replace(/\.tsx?/, "");
        // Import 'next-yak' styles and assign to '__styleYak'
        // use webpacks !=! syntax to pretend that the typescript file is actually a css-module
        path.insertAfter(
          t.importDeclaration(
            [t.importDefaultSpecifier(t.identifier("__styleYak"))],
            t.stringLiteral(
              `./${fileName}.yak.module.css!=!./${fileName}?./${fileName}.yak.module.css`,
            ),
          ),
        );
        this.yakImportPath = path;

        // Process import specifiers
        node.specifiers.forEach((specifier) => {
          if (
            !("imported" in specifier) ||
            !specifier.imported ||
            !t.isIdentifier(specifier.imported)
          ) {
            return;
          }

          const importSpecifier = specifier.imported;
          const localSpecifier = specifier.local || importSpecifier;

          if (
            importSpecifier.name === "styled" ||
            importSpecifier.name === "css" ||
            importSpecifier.name === "keyframes"
          ) {
            this.localVarNames[importSpecifier.name] = localSpecifier.name;
            this.isImportedInCurrentFile = true;
          }
        });
      },
      /**
       * Replace the tagged template expression
       *  - css`...`
       * - styled.div`...`
       * - styled(Component)`...`
       * - styled.div.attrs({})`...`
       * - keyframes`...`
       */
      TaggedTemplateExpression(path) {
        if (!this.isImportedInCurrentFile) {
          return;
        }
        const tag = path.node.tag;

        // Check if the tag name matches the imported 'css' or 'styled' variable
        const expressionType = getYakExpressionType(tag, this.localVarNames);
        if (expressionType === "unknown") {
          return;
        }

        replaceQuasiExpressionTokens(
          path.node.quasi,
          (name) => {
            // Replace constants from .yak files and
            if (name in replaces) {
              return replaces[name];
            }
            // Replace expressions by the className of the styled component
            // e.g.
            // const MyStyledDiv = styled.div`${FOO} { color: red; }`
            // ->
            // const MyStyledDiv = styled.div`.selector0 { color: red; }`
            const styledCall = this.variableNameToStyledCall.get(name);
            if (styledCall) {
              const { wasAdded, className, astNode } = styledCall;
              // on first usage of another styled component, ensure that
              // the className of the target component will be added to the DOM
              if (!wasAdded) {
                styledCall.wasAdded = true;
                astNode.arguments.unshift(
                  t.memberExpression(
                    t.identifier("__styleYak"),
                    t.identifier(className),
                  ),
                );
              }
              return className;
            }
            return false;
          },
          t,
        );

        const parentPosition = getClosestTemplateLiteralExpressionParentPath(
          path,
          this.yakTemplateExpressionsByPath,
        );

        const name = !parentPosition
          ? // root name e.g. const MyButton = styled.div`...` -> "MyButton"
            getStyledComponentName(path)
          : // nested name e.g. `... ${({$active}) => $active && css`color:red`} ...` -> "active"
            getCssName(path);

        const yakTemplateExpression: YakTemplateLiteral = {
          name,
          path,
          cssPartQuasis: path.node.quasi.quasis.map((quasi) => quasi.value.raw),
          cssPartExpressions: {},
          hasParent: Boolean(parentPosition?.parent),
          type: expressionType,
          referencedBy: new Set(),
        };

        const referencedIdentifiers = getIdentifierNamesUsedInExpression(path);
        referencedIdentifiers.forEach((referencedIdentifier) => {
          const referencedExpression =
            this.yakTemplateExpressionsByName.get(referencedIdentifier);
          if (referencedExpression) {
            referencedExpression.referencedBy.add(yakTemplateExpression);
          }
        });

        const parent =
          parentPosition?.parent &&
          this.yakTemplateExpressionsByPath.get(parentPosition.parent);
        if (parent) {
          parent.cssPartExpressions[parentPosition.currentIndex] ||= [];
          parent.cssPartExpressions[parentPosition.currentIndex].push(
            yakTemplateExpression,
          );
        }

        this.yakTemplateExpressionsByPath.set(path, yakTemplateExpression);
        this.yakTemplateExpressionsByName.set(name, yakTemplateExpression);
      },
    },
  };
}

export class InvalidPositionError extends Error {
  /**
   * Add the expression code that caused the error to the message
   * for better debugging
   */
  constructor(
    message: string,
    expression: babelTypes.Expression,
    file: BabelFile,
    recommendedFix?: string,
  ) {
    let errorText = message;
    const line = expression.loc?.start.line ?? -1;
    if (line !== -1) {
      errorText = `line ${line}: ${errorText}`;
    }
    if (expression.start && expression.end) {
      errorText += `\nfound: \${${file.code.slice(
        expression.start,
        expression.end,
      )}}`;
    }
    if (recommendedFix) {
      errorText += `\n${recommendedFix}`;
    }
    super(errorText);
  }
}

/**
 * Searches the closest parent TaggedTemplateExpression using a name from localNames
 * Returns the location inside this parent
 */
const getClosestTemplateLiteralExpressionParentPath = (
  path: NodePath<TaggedTemplateExpression>,
  knownParents: Map<
    import("@babel/core").NodePath<babelTypes.TaggedTemplateExpression>,
    unknown
  >,
) => {
  let grandChild: NodePath = path;
  let child: NodePath = path;
  let parent = path.parentPath;
  while (parent) {
    if (
      babelTypes.isTaggedTemplateExpression(parent.node) &&
      knownParents.has(parent as NodePath<babelTypes.TaggedTemplateExpression>)
    ) {
      if (
        !babelTypes.isTemplateLiteral(child.node) ||
        !babelTypes.isExpression(grandChild.node)
      ) {
        throw new Error(
          "Unexpected Error - This AST structure is unexpected - please open an issue in the repository",
        );
      }
      const currentIndex = child.node.expressions.indexOf(grandChild.node);
      return {
        parent: parent as NodePath<babelTypes.TaggedTemplateExpression>,
        currentIndex,
      };
    }
    if (!parent.parentPath) {
      return null;
    }
    grandChild = child;
    child = parent;
    parent = parent.parentPath;
  }
  return null;
};

function getIdentifierNamesUsedInExpression(
  path: NodePath<TaggedTemplateExpression>,
) {
  const names = new Set<string>();
  for (const node of path.node.quasi.expressions) {
    if (babelTypes.isIdentifier(node)) {
      names.add(node.name);
    }
  }
  return names;
}

function visitYakExpression(
  yakTemplateExpressions: Map<
    NodePath<babelTypes.TaggedTemplateExpression>,
    YakTemplateLiteral
  >,
  visitor: (
    expression: YakTemplateLiteral,
    rootExpression: YakTemplateLiteral,
    cssParserState: ParserState,
    visitChildren: (quasiIndex: number, cssParserState: ParserState) => void,
  ) => void,
) {
  const rootYakTemplateExpressions = Array.from(
    yakTemplateExpressions.values(),
  ).filter((expression) => !expression.hasParent);
  const recursiveVisitor = (
    expression: YakTemplateLiteral,
    rootExpression: YakTemplateLiteral,
    cssParserState: ParserState,
  ) => {
    visitor(
      expression,
      rootExpression,
      cssParserState,
      (quasiIndex, cssParserState) => {
        expression.cssPartExpressions[quasiIndex]?.forEach(
          (childExpression) => {
            recursiveVisitor(childExpression, rootExpression, cssParserState);
          },
        );
      },
    );
  };
  rootYakTemplateExpressions.forEach((expression) => {
    const initialParserState = parseCss("");
    recursiveVisitor(expression, expression, initialParserState.state);
  });
}

const rootExpressionCssDeclarations = new WeakMap<
  YakTemplateLiteral,
  Declaration[]
>();
function transformYakExpressions(
  expression: YakTemplateLiteral,
  rootExpression: YakTemplateLiteral,
  cssParserState: ParserState,
  visitChildren: (quasiIndex: number, cssParserState: ParserState) => void,
  createUniqueName: (name: string, hash?: boolean) => string,
  runtimeInternalHelpers: Set<string>,
  componentTypeMapping: Record<string, YakTemplateLiteral["type"]>,
  constantValues: ReturnType<typeof getConstantValues>,
  file: BabelFile,
  crossFileSelectors: boolean,
) {
  // Get className / keyframes name
  const identifier = createUniqueName(
    expression === rootExpression
      ? expression.name
      : `${rootExpression.name}__${expression.name}`,
  );

  // Initialize Declarations
  const rootDeclarations =
    rootExpressionCssDeclarations.get(rootExpression) || [];
  if (rootExpression === expression) {
    rootExpressionCssDeclarations.set(rootExpression, rootDeclarations);
  }

  // Arguments for the replaced styled call
  const newArguments = new Set<babelTypes.Expression>();
  const cssVariables: Record<string, babelTypes.Expression> = {};
  let addedOwnClassName = false;
  let currentCssParserState = cssParserState;
  // Iterate over the css parts
  for (let i = 0; i < expression.cssPartQuasis.length; i++) {
    let cssChunk = expression.cssPartQuasis[i].replace(/\\\\/g, "\\");
    const quasiExpression = expression.path.node.quasi.expressions[i];

    // Merge Component References directly into the css code before parsing
    // e.g.:
    // const Icon = styled.div``
    // const Button = styled.button`&:${Icon} { color: red; }`
    if (babelTypes.isIdentifier(quasiExpression)) {
      let replaceValue: string | null = null;
      // Component References
      if (componentTypeMapping[quasiExpression.name]) {
        if (componentTypeMapping[quasiExpression.name] === "keyframesLiteral") {
          // Keyframes can be used as is e.g. animation: ${keyframes} 1s infinite;
          replaceValue = quasiExpression.name;
        } else if (
          componentTypeMapping[quasiExpression.name] === "styledLiteral" ||
          componentTypeMapping[quasiExpression.name] === "styledCall" ||
          componentTypeMapping[quasiExpression.name] === "attrsCall"
        ) {
          // Styled components are referenced by their className
          replaceValue = `.${quasiExpression.name}`;
        }
      }
      // Constant values
      else if (constantValues.has(quasiExpression.name)) {
        const constantValue = constantValues.get(quasiExpression.name);
        if (
          !constantValue ||
          (constantValue.type === "variable" && constantValue.value === null)
        ) {
          throw new InvalidPositionError(
            `Could not resolve value for ${quasiExpression.name}`,
            quasiExpression,
            file,
          );
        } else if (constantValue.type === "function") {
          throw new InvalidPositionError(
            `Function constants are not supported yet`,
            quasiExpression,
            file,
          );
        } else if (constantValue.type === "module") {
          if (!crossFileSelectors) {
            throw new InvalidPositionError(
              `Module constants are not allowed in this context`,
              quasiExpression,
              file,
              `Use the 'experiments.crossFileSelectors' option to enable cross file selectors`,
            );
          }
          if (constantValue.source === null) {
            throw new InvalidPositionError(
              `Module constant could not be resolved`,
              quasiExpression,
              file,
            );
          }
          replaceValue = `:module-selector-import(${constantValue.name} from '${constantValue.source}')`;
        } else {
          replaceValue = String(constantValue?.value);
        }
      }
      // Identifier without program scope definition
      // e.g.
      // const Button = styled.button`$({$size}) => {
      //    const ident = $size * 2 + "px";
      //    return css`width: ${ident}`
      // }`;
      else {
        // Allow the usage of the identifier for now
      }
      // Merge into next css chunk
      if (replaceValue !== null) {
        expression.cssPartQuasis[i + 1] =
          expression.cssPartQuasis[i] +
          replaceValue +
          (expression.cssPartQuasis[i + 1] || "");
        continue;
      }
    }

    const parsedCss = parseCss(cssChunk, currentCssParserState);
    currentCssParserState = parsedCss.state;

    if (babelTypes.isTSType(quasiExpression)) {
      throw new Error(
        "Type annotations are not allowed in css template literals",
      );
    }

    // If the styled component has any top-level css declarations
    // the className must be added to the react component
    if (parsedCss.declarations.length > 0 && !addedOwnClassName) {
      newArguments.add(
        babelTypes.memberExpression(
          babelTypes.identifier("__styleYak"),
          babelTypes.identifier(identifier),
        ),
      );
      addedOwnClassName = true;
    }
    // Add a scope of the current css class name
    const scopedDeclarations = parsedCss.declarations.map((declaration) => ({
      ...declaration,
      scope: [
        expression.type === "keyframesLiteral"
          ? { name: `@keyframes ${identifier}`, type: "at-rule" as const }
          : { name: `.${identifier}`, type: "selector" as const },
        ...declaration.scope,
      ],
    }));

    // Handle expressions inside the css template literal
    if (quasiExpression) {
      // Convert expressions inside property values to css variables
      // e.g.
      // css`color: ${({$primary}) => $primary ? 'red' : 'blue'}`
      if (currentCssParserState.isInsidePropertyValue) {
        // Imported constants are not allowed inside property values
        // technically this is supported however it is a bad practice
        // as it creates the overhead of a css variable although the value
        // is a constant
        const constantName = getConstantName(quasiExpression, babelTypes);
        if (
          !babelTypes.isArrowFunctionExpression(quasiExpression) &&
          // On top level only arrow functions are allowed as css prop values
          (!expression.hasParent ||
            // Is using root constant inside for a css prop value:
            // const primary = 'red';
            // const Button = styled.button`color: ${({$primary}) => $primary && primaryColor}`
            (constantName && constantValues.has(constantName)))
        ) {
          throw new InvalidPositionError(
            "Possible constant used as runtime value for a css variable",
            quasiExpression,
            file,
            `Please move the constant to a .yak import or use an arrow function
e.g.:
|   import { primaryColor } from './foo.yak'
|   const MyStyledDiv = styled.div\`color: \${primaryColor};\``,
          );
        }

        const cssVarName = createUniqueName(
          `${identifier}__${parsedCss.state.currentDeclaration.property}`,
          true,
        );
        cssVariables[`--${cssVarName}`] = quasiExpression;
        currentCssParserState.currentDeclaration.value += `var(--${cssVarName})`;

        // In styled components, css units can be after the expression
        // e.g.:
        // const MyButton = styled.button`width: ${({$width}) => $width}px`
        // translating that to css variables would be: `width: var(--width)px`
        // Unfortunately, this is not valid CSS, so we need to move the unit to the expression
        const cssUnit =
          expression.cssPartQuasis[i + 1]?.match(/^([a-z]+|%)/i)?.[0];
        if (cssUnit) {
          cssVariables[`--${cssVarName}`] = appendCssUnitToExpressionValue(
            cssUnit,
            quasiExpression,
            runtimeInternalHelpers,
            babelTypes,
          );
          expression.cssPartQuasis[i + 1] = expression.cssPartQuasis[
            i + 1
          ].substring(cssUnit.length);
        }

        // The declaration is not closed yet so it should not be added to the rootDeclarations
        scopedDeclarations.pop();
      }
      // Keep Mixin logic in js code
      // e.g.:
      // const mixin = ${({$primary}) => $primary ? css`color: red` : css`color: blue`};
      else {
        // Right now we can't recieve the value of imported mixin values
        // This becomes a problem in nested selector scopes as we would have to merge
        // the scopes and the css code
        if (
          currentCssParserState.currentScopes.length > 0 &&
          quasiExpression.type !== "TaggedTemplateExpression" &&
          quasiExpression.type !== "ArrowFunctionExpression"
        ) {
          throw new InvalidPositionError(
            "Mixins are not allowed inside nested selectors",
            quasiExpression,
            file,
            "Use an inline css literal instead or move the selector into the mixin",
          );
        }

        // Add the expression to the arguments of the styled call
        newArguments.add(quasiExpression);
        // Remove semicolon from the following css part
        // e.g.: css`color: ${({$primary}) => $primary ? 'red' : 'blue'};`
        if (expression.cssPartQuasis[i + 1]?.startsWith(";")) {
          expression.cssPartQuasis[i + 1] =
            expression.cssPartQuasis[i + 1].substring(1);
        }
      }
    }
    // Store all css declarions for the rootDeclaration comment
    rootDeclarations.push(...scopedDeclarations);
    // Transform nested css`` literals
    visitChildren(i, parsedCss.state);
  }

  // Merge all CSS Variables in one single object to reduce code size
  // e.g.: { style: { "--var": expression, "--var2": expression } }
  if (Object.keys(cssVariables).length) {
    newArguments.add(
      babelTypes.objectExpression([
        babelTypes.objectProperty(
          babelTypes.stringLiteral(`style`),
          babelTypes.objectExpression(
            Object.entries(cssVariables).map(([key, value]) =>
              babelTypes.objectProperty(babelTypes.stringLiteral(key), value),
            ),
          ),
        ),
      ]),
    );
  }

  // Unused Yak Components, Yak Mixins and Keyframes are save to be removed
  // as yak has no side effects
  // https://stackoverflow.com/questions/68187576/whats-the-meaning-of-pure-in-some-javascript-source-code
  expression.path.addComment("leading", "#__PURE__");

  // The root expression is the styled component or keyframes or root mixin
  if (rootExpression === expression) {
    let cssCode = toCss(rootDeclarations).trimStart();
    const isReferencedByOtherYakComponents = expression.referencedBy.size > 0;
    // If another component is using the component as selector it must
    // have a className to be targetable
    if (addedOwnClassName === false && isReferencedByOtherYakComponents) {
      newArguments.add(
        babelTypes.memberExpression(
          babelTypes.identifier("__styleYak"),
          babelTypes.identifier(identifier),
        ),
      );
      cssCode = `.${identifier} {}\n${cssCode}`;
    }
    if (cssCode) {
      // Prepand the css as a comment to the styled component
      // for later debugging and extraction
      expression.path.addComment("leading", "YAK Extracted CSS:\n" + cssCode);
    }
  }

  // Replace the css template literal with a function call
  // to match the runtime api
  expression.path.replaceWith(
    babelTypes.callExpression(expression.path.node.tag, [...newArguments]),
  );
}

function getComponentTypes(
  yakTemplateExpressions: Map<
    NodePath<babelTypes.TaggedTemplateExpression>,
    YakTemplateLiteral
  >,
) {
  const nameTypeMap = Array.from(yakTemplateExpressions.values())
    .filter((expression) => !expression.hasParent)
    .map((expression) => [expression.name, expression.type] as const);
  return Object.fromEntries(nameTypeMap);
}
