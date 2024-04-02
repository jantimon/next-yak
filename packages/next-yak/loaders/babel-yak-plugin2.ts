import type babelCore from "@babel/core";
import {
  BabelFile,
  NodePath,
  PluginObj,
  PluginPass,
  types as babelTypes,
} from "@babel/core";
import { TaggedTemplateExpression } from "@babel/types";
import { basename, relative, resolve } from "node:path";
import { getConstantValues } from "./lib/getConstantValues.js";
import murmurhash2_32_gc from "./lib/hash.js";
import replaceQuasiExpressionTokens from "./lib/replaceQuasiExpressionTokens.js";
import getStyledComponentName from "./lib/getStyledComponentName.js";
import getCssName from "./lib/getCssName.js";
import { Declaration, ParserState, parseCss } from "./lib/parseCss.js";
import { toCss } from "./lib/toCss.js";
import appendCssUnitToExpressionValue from "./lib/appendCssUnitToExpressionValue.js";

type YakBabelPluginOptions = {
  replaces: Record<string, unknown>;
  rootContext?: string;
};

type YakLocalIdentifierNames = {
  css: string | undefined;
  styled: string | undefined;
  keyframes: string | undefined;
};

// A CssPartExpression is the css code block for each tagged template expression
type YakTemplateLiteral = {
  name: string;
  path: NodePath<babelTypes.TaggedTemplateExpression>;
  hasParent: boolean;
  cssPartQuasis: string[];
  cssPartExpressions: { [key: number]: YakTemplateLiteral[] };
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
  babel: typeof babelCore,
  options: YakBabelPluginOptions
): PluginObj<
  PluginPass & {
    localVarNames: YakLocalIdentifierNames;
    isImportedInCurrentFile: boolean;
    topLevelConstBindings: Map<string, number | string | null>;
    variableNameToStyledCall: Map<
      string,
      {
        wasAdded: boolean;
        className: string;
        astNode: babelTypes.CallExpression;
      }
    >;
    yakImportPath?: NodePath<babelTypes.ImportDeclaration>;
    yakTemplateExpressions: Map<
      babelCore.NodePath<babelTypes.TaggedTemplateExpression>,
      YakTemplateLiteral
    >;
  }
> {
  const { replaces } = options;
  const rootContext = options.rootContext || process.cwd();
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
      resolve(rootContext, resourcePath)
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
    localVarNames: YakLocalIdentifierNames
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
      this.yakTemplateExpressions = new Map();
    },
    visitor: {
      Program: {
        enter(path) {
          this.topLevelConstBindings = getConstantValues(path, t);
        },
        exit(path, state) {
          if (!this.isImportedInCurrentFile) {
            return;
          }
          const runtimeInternalHelpers = new Set<string>();
          // Util to create a unique identifiers per file name
          const existingNames = new Set<string>();
          const createUniqueName = (name: string, hash?: boolean) => {
            let i = 0;
            let uniqueName = name;
            while (existingNames.has(uniqueName)) {
              i++;
              uniqueName = `${name}_${i}`;
            }
            existingNames.add(uniqueName);
            return hash
              ? uniqueName + "_" + getHashedFilePath(state.file)
              : uniqueName;
          };
          // Iteratate and transform all found yak template literals
          visitYakExpression(
            this.yakTemplateExpressions,
            (expression, rootExpression, cssParserState, visitChildren) => {
              transformYakExpressions(
                expression,
                rootExpression,
                cssParserState,
                visitChildren,
                createUniqueName,
                runtimeInternalHelpers
              );
            }
          );

          // Add used runtime helpers to the import
          if (runtimeInternalHelpers.size && this.yakImportPath) {
            const newImport = t.importDeclaration(
              [...runtimeInternalHelpers].map((helper) =>
                t.importSpecifier(t.identifier(helper), t.identifier(helper))
              ),
              t.stringLiteral("next-yak/runtime-internals")
            );
            this.yakImportPath.insertAfter(newImport);
          }
        },
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
              `./${fileName}.yak.module.css!=!./${fileName}?./${fileName}.yak.module.css`
            )
          )
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
      TaggedTemplateExpression(path, state) {
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
                    t.identifier(className)
                  )
                );
              }
              return className;
            }
            return false;
          },
          t
        );

        const parentPosition = getClosestTemplateLiteralExpressionParentPath(
          path,
          this.yakTemplateExpressions
        );

        const name = !parentPosition
          ? // root name e.g. const MyButton = styled.div`...` -> "MyButton"
            getStyledComponentName(path)
          : // nested name e.g. `... ${({$active}) => $active && css`color:red`} ...` -> "active"
            getCssName(path);

        const takTemplateExpression: YakTemplateLiteral = {
          name,
          path,
          cssPartQuasis: path.node.quasi.quasis.map((quasi) => quasi.value.raw),
          cssPartExpressions: {},
          hasParent: Boolean(parentPosition?.parent),
          type: expressionType,
        };

        const parent =
          parentPosition?.parent &&
          this.yakTemplateExpressions.get(parentPosition.parent);
        if (parent) {
          parent.cssPartExpressions[parentPosition.currentIndex] ||= [];
          parent.cssPartExpressions[parentPosition.currentIndex].push(
            takTemplateExpression
          );
        }

        this.yakTemplateExpressions.set(path, takTemplateExpression);
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
    recommendedFix?: string
  ) {
    let errorText = message;
    const line = expression.loc?.start.line ?? -1;
    if (line !== -1) {
      errorText = `line ${line}: ${errorText}`;
    }
    if (expression.start && expression.end) {
      errorText += `\nfound: \${${file.code.slice(
        expression.start,
        expression.end
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
  >
) => {
  let grandChild: NodePath = path;
  let child: NodePath = path;
  let parent = path.parentPath;
  while (parent) {
    if (
      babelTypes.isTaggedTemplateExpression(parent.node) &&
      knownParents.has(
        parent as babelCore.NodePath<babelTypes.TaggedTemplateExpression>
      )
    ) {
      if (
        !babelTypes.isTemplateLiteral(child.node) ||
        !babelTypes.isExpression(grandChild.node)
      ) {
        throw new Error("Broken AST");
      }
      const currentIndex = child.node.expressions.indexOf(grandChild.node);
      return {
        parent:
          parent as babelCore.NodePath<babelTypes.TaggedTemplateExpression>,
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

function visitYakExpression(
  yakTemplateExpressions: Map<
    babelCore.NodePath<babelTypes.TaggedTemplateExpression>,
    YakTemplateLiteral
  >,
  visitor: (
    expression: YakTemplateLiteral,
    rootExpression: YakTemplateLiteral,
    cssParserState: ParserState,
    visitChildren: (quasiIndex: number, cssParserState: ParserState) => void
  ) => void
) {
  const rootYakTemplateExpressions = Array.from(
    yakTemplateExpressions.values()
  ).filter((expression) => !expression.hasParent);
  const recursiveVisitor = (
    expression: YakTemplateLiteral,
    rootExpression: YakTemplateLiteral,
    cssParserState: ParserState
  ) => {
    visitor(
      expression,
      rootExpression,
      cssParserState,
      (quasiIndex, cssParserState) => {
        expression.cssPartExpressions[quasiIndex]?.forEach(
          (childExpression) => {
            recursiveVisitor(childExpression, rootExpression, cssParserState);
          }
        );
      }
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
  runtimeInternalHelpers: Set<string>
) {
  // Get className / keyframes name
  const identifier = createUniqueName(
    expression === rootExpression
      ? expression.name
      : `${rootExpression.name}__${expression.name}`
  );

  // Initialize Declarations
  const rootDeclarations =
    rootExpressionCssDeclarations.get(rootExpression) || [];
  if (rootExpression === expression) {
    rootExpressionCssDeclarations.set(rootExpression, rootDeclarations);
  }

  // Arguments for the replaced styled call
  const newArguments = new Set<babelTypes.Expression>();
  const cssVariables: Record<string, babelCore.types.Expression> = {};
  let addedOwnClassName = false;

  let currentCssParserState = cssParserState;
  // Iterate over the css parts
  for (let i = 0; i < expression.cssPartQuasis.length; i++) {
    const parsedCss = parseCss(
      expression.cssPartQuasis[i],
      currentCssParserState
    );
    currentCssParserState = parsedCss.state;
    const quasiExpression = expression.path.node.quasi.expressions[i];

    if (babelTypes.isTSType(quasiExpression)) {
      throw new Error(
        "Type annotations are not allowed in css template literals"
      );
    }

    // If the styled component has any top-level css declarations
    // the className must be added to the react component
    if (parsedCss.declarations.length > 0 && !addedOwnClassName) {
      newArguments.add(
        babelTypes.memberExpression(
          babelTypes.identifier("__styleYak"),
          babelTypes.identifier(identifier)
        )
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
        const cssVarName = createUniqueName(
          `${identifier}-${parsedCss.state.currentDeclaration.property}`,
          true
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
            babelTypes
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
        // Add the expression to the arguments of the styled call
        newArguments.add(quasiExpression);
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
              babelTypes.objectProperty(babelTypes.stringLiteral(key), value)
            )
          )
        ),
      ])
    );
  }

  // Replace the css template literal with a function call
  // to match the runtime api
  expression.path.replaceWith(
    babelTypes.callExpression(expression.path.node.tag, [...newArguments])
  );
  // Prepand the css as a comment to the styled component
  // for later debugging and extraction
  if (rootExpression === expression) {
    const cssCode = toCss(rootDeclarations).trimStart();
    if (cssCode) {
    expression.path.addComment(
      "leading",
      "YAK Extracted CSS:\n" + cssCode
    );
    }
  }
}
