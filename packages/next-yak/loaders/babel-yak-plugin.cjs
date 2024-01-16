/// @ts-check;
const quasiClassifier = require("./lib/quasiClassifier.cjs");
const replaceQuasiExpressionTokens = require("./lib/replaceQuasiExpressionTokens.cjs");
const murmurhash2_32_gc = require("./lib/hash.cjs");
const { relative, resolve, basename } = require("path");
const localIdent = require("./lib/localIdent.cjs");
const getStyledComponentName = require("./lib/getStyledComponentName.cjs");

/** @typedef {{replaces: Record<string, unknown>, rootContext?: string}} YakBabelPluginOptions */
/** @typedef {{ css: string | undefined, styled: string | undefined, keyframes: string | undefined }} YakLocalIdentifierNames */

/**
 * Babel plugin for typescript files that use yak - it will do things:
 * - inject the import to the css-module (with .yak.module.css extension)
 * - replace the css template literal with styles from the css-module
 *
 * @param {import("@babel/core")} babel
 * @param {YakBabelPluginOptions} options
 * @returns {babel.PluginObj<import("@babel/core").PluginPass & {
 *   localVarNames: YakLocalIdentifierNames,
 *   isImportedInCurrentFile: boolean,
 *   classNameCount: number,
 *   varIndex: number,
 *   variableNameToStyledCall: Map<string, {
 *     wasAdded: boolean,
 *     className: string,
 *     astNode: import("@babel/types").CallExpression
 *   }>
 * }>}
 */
module.exports = function (babel, options) {
  const { replaces } = options;
  const rootContext = options.rootContext || process.cwd();
  const { types: t } = babel;

  /**
   * A unique prefix for each file to avoid collisions
   * (generated on first use by hashing the relative file path)
   * @type {WeakMap<import("@babel/core").BabelFile, string>}
   */
  const hashedFilePaths = new WeakMap();
  /**
   * @param {import("@babel/core").BabelFile} file
   */
  const getHashedFilePath = (file) => {
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
   *
   * @param {babel.types.Expression} tag
   * @param {YakLocalIdentifierNames} localVarNames
   * @returns {"cssLiteral" | "keyframesLiteral" | "styledLiteral" | "styledCall" | "attrsCall" | "unknown"}
   */
  const getYakExpressionType = (tag, localVarNames) => {
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
      this.classNameCount = 0;
      this.varIndex = 0;
      this.variableNameToStyledCall = new Map();
    },
    visitor: {
      /**
       * Store the name of the imported 'css' and 'styled' variables e.g.:
       * - `import { css, styled } from 'next-yak'` -> { css: 'css', styled: 'styled' }
       * - `import { css as yakCss, styled as yakStyled } from 'next-yak'` -> { css: 'yakCss', styled: 'yakStyled' }
       *
       * Inject the import to the css-module (with .yak.module.css extension)
       * e.g. `import './App.yak.module.css!=!./App?./App.yak.module.css'`
       *
       * @param {import("@babel/core").NodePath<import("@babel/types").ImportDeclaration>} path
       * @param {babel.PluginPass & {localVarNames: YakLocalIdentifierNames, isImportedInCurrentFile: boolean, classNameCount: number, varIndex: number}} state
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
        // Import 'yacijs' styles and assign to '__styleYak'
        // use webpacks !=! syntax to pretend that the typescript file is actually a css-module
        path.insertAfter(
          t.importDeclaration(
            [t.importDefaultSpecifier(t.identifier("__styleYak"))],
            t.stringLiteral(
              `./${fileName}.yak.module.css!=!./${fileName}?./${fileName}.yak.module.css`
            )
          )
        );

        // Process import specifiers
        node.specifiers.forEach((specifier) => {
          if (
            !("imported" in specifier) ||
            !specifier.imported ||
            !t.isIdentifier(specifier.imported)
          ) {
            return;
          }

          const importSpecifier = /** @type {babel.types.Identifier} */ (
            specifier.imported
          );
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
       *
       * @param {import("@babel/core").NodePath<import("@babel/core").types.TaggedTemplateExpression>} path
       * @param {babel.PluginPass & {localVarNames: YakLocalIdentifierNames, isImportedInCurrentFile: boolean, classNameCount: number, varIndex: number}} state
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

        const styledApi =
          expressionType === "styledLiteral" ||
          expressionType === "styledCall" ||
          expressionType === "attrsCall";

        replaceQuasiExpressionTokens(
          path.node.quasi,
          (name) => {
            // Replace constatns from .yak files and
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

        // Store class name for the created variable for later replacements
        // e.g. const MyStyledDiv = styled.div`color: red;`
        // "MyStyledDiv" -> "selector-0"
        const variableName =
          styledApi || expressionType === "keyframesLiteral"
            ? getStyledComponentName(path)
            : null;

        const identifier = localIdent(
          variableName || "_yak",
          variableName ? null : this.classNameCount++,
          expressionType === "keyframesLiteral" ? "animation" : "className"
        );

        let literalSelectorWasUsed = false;
        // AutoGenerate a unique className for the current template literal
        const classNameExpression = t.memberExpression(
          t.identifier("__styleYak"),
          t.identifier(identifier)
        );

        /**
         * The expression is replaced with a call to the 'styled' or 'css' function
         * e.g. styled.div`` -> styled.div(...)
         * e.g. css`` -> css(...)
         * newArguments is a set of all arguments that will be passed to the function
         */
        const newArguments = new Set();
        const quasis = path.node.quasi.quasis;
        /** @type {string[]} */
        let currentNestingScopes = [];
        const quasiTypes = quasis.map((quasi) => {
          const classification = quasiClassifier(
            quasi.value.raw,
            currentNestingScopes
          );
          currentNestingScopes = classification.currentNestingScopes;
          return classification;
        });

        const expressions = path.node.quasi.expressions.filter(
          /** @type {(expression: babel.types.Expression | babel.types.TSType) => expression is babel.types.Expression} */
          (expression) => t.isExpression(expression)
        );

        let cssVariablesInlineStyle;

        // Add the className if the template literal contains css
        if (
          quasiTypes.length > 1 ||
          (quasiTypes.length === 1 && !quasiTypes[0].empty)
        ) {
          newArguments.add(classNameExpression);
          literalSelectorWasUsed = true;
        }

        let wasInsideCssValue = false;
        for (let i = 0; i < quasis.length; i++) {
          const expression = expressions[i];
          // loop over all quasis belonging to the same css block
          const type = quasiTypes[i];
          if (type.unknownSelector) {
            const expression = expressions[i - 1];
            if (!expression) {
              throw new Error(`Invalid css "${quasis[i].value.raw}"`);
            }
            throw new InvalidPositionError(
              "Expressions are not allowed as selectors",
              expression,
              this.file
            );
          }
          // expressions after a partial css are converted into css variables
          if (
            expression &&
            (type.unknownSelector ||
              type.insideCssValue ||
              (type.empty && wasInsideCssValue))
          ) {
            wasInsideCssValue = true;
            if (!cssVariablesInlineStyle) {
              cssVariablesInlineStyle = t.objectExpression([]);
            }
            if (!cssVariablesInlineStyle) {
              cssVariablesInlineStyle = t.objectExpression([]);
            }
            const cssVariableName = `--🦬${getHashedFilePath(state.file)}${this
              .varIndex++}`;
            // expression: `x`
            // { style: { --v0: x}}
            cssVariablesInlineStyle.properties.push(
              t.objectProperty(
                t.stringLiteral(cssVariableName),
                /** @type {babel.types.Expression} */ (expression)
              )
            );
          } else {
            wasInsideCssValue = false;
            if (expression) {
              if (quasiTypes[i].currentNestingScopes.length > 0) {
                const errorExpression = expression;
                const name =
                  errorExpression.type === "Identifier"
                    ? `"${errorExpression.name}"`
                    : "Expression";
                throw new InvalidPositionError(
                  `Expressions are not allowed inside nested selectors: \n${name} inside "${quasiTypes[
                    i
                  ].currentNestingScopes.join(" { ")} {"`,
                  errorExpression,
                  this.file
                );
              }
              newArguments.add(expression);
            }
          }
        }

        // Add the inline style object to the arguments
        // e.g. styled.div`color: ${x};` -> styled.div({ style: { --yak43: x } })
        if (cssVariablesInlineStyle) {
          newArguments.add(
            t.objectExpression([
              t.objectProperty(
                t.stringLiteral(`style`),
                cssVariablesInlineStyle
              ),
            ])
          );
        }

        const styledCall = t.callExpression(tag, [...newArguments]);
        path.replaceWith(styledCall);

        // Store the AST node of the `styled` node for later selector replacements
        // e.g.
        // const MyStyledDiv = styled.div`color: red;`
        // const Bar = styled.div` ${MyStyledDiv} { color: blue }`
        // "${MyStyledDiv} {" -> ".selector-0 {"
        if (styledApi && variableName) {
          this.variableNameToStyledCall.set(variableName, {
            wasAdded: literalSelectorWasUsed,
            className: identifier,
            astNode: styledCall,
          });
        }
      },
    },
  };
};

class InvalidPositionError extends Error {
  /**
   * Add the expression code that caused the error to the message
   * for better debugging
   * @param {string} message
   * @param {import("@babel/types").Expression} expression
   * @param {import("@babel/core").BabelFile} file
   */
  constructor(message, expression, file) {
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
    super(errorText);
  }
}

module.exports.InvalidPositionError = InvalidPositionError;
