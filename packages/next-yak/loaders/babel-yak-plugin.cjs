/// @ts-check;
const quasiClassifier = require("./lib/quasiClassifier.cjs");
const replaceQuasiExpressionTokens = require("./lib/replaceQuasiExpressionTokens.cjs");
const murmurhash2_32_gc = require("./lib/hash.cjs");
const { relative, resolve, basename } = require("path");
const localIdent = require("./lib/localIdent.cjs");
const getStyledComponentName = require("./lib/getStyledComponentName.cjs");

/** @typedef {{replaces: Record<string, unknown>, rootContext?: string}} YakBabelPluginOptions */

/**
 * Babel plugin for typescript files that use yak - it will do things:
 * - inject the import to the css-module (with .yak.module.css extension)
 * - replace the css template literal with styles from the css-module
 *
 * @param {import("@babel/core")} babel
 * @param {YakBabelPluginOptions} options
 * @returns {babel.PluginObj<import("@babel/core").PluginPass & {localVarNames: {css?: string, styled?: string, keyframes?: string}, isImportedInCurrentFile: boolean, classNameCount: number, varIndex: number, variableNameToStyledCall: Map<string, {wasAdded: boolean, className: string, astNode: import("@babel/types").CallExpression}>}>}
 */
module.exports = function (babel, options) {
  const { replaces } = options;
  const rootContext = options.rootContext || process.cwd();
  const { types: t } = babel;

  /** @type {string | null} */
  let hashedFile = null;

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
       * @param {import("@babel/core").NodePath<import("@babel/types").ImportDeclaration>} path
       * @param {babel.PluginPass & {localVarNames: {css?: string, styled?: string}, isImportedInCurrentFile: boolean, classNameCount: number, varIndex: number}} state
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
       * @param {import("@babel/core").NodePath<import("@babel/core").types.TaggedTemplateExpression>} path
       * @param {babel.PluginPass & {localVarNames: {css?: string, styled?: string}, isImportedInCurrentFile: boolean, classNameCount: number, varIndex: number}} state
       */
      TaggedTemplateExpression(path, state) {
        if (!this.isImportedInCurrentFile) {
          return;
        }
        // Check if the tag name matches the imported 'css' or 'styled' variable
        const tag = path.node.tag;

        const isCssLiteral =
          t.isIdentifier(tag) &&
          /** @type {babel.types.Identifier} */ (tag).name ===
            this.localVarNames.css;

        const isKeyframesLiteral =
          t.isIdentifier(tag) &&
          /** @type {babel.types.Identifier} */ (tag).name ===
            this.localVarNames.keyframes;

        const isStyledLiteral =
          t.isMemberExpression(tag) &&
          t.isIdentifier(
            /** @type {babel.types.MemberExpression} */ (tag).object
          ) &&
          /** @type {babel.types.Identifier} */ (
            /** @type {babel.types.MemberExpression} */ (tag).object
          ).name === this.localVarNames.styled;
        const isStyledCall =
          t.isCallExpression(tag) &&
          t.isIdentifier(
            /** @type {babel.types.CallExpression} */ (tag).callee
          ) &&
          /** @type {babel.types.Identifier} */ (
            /** @type {babel.types.CallExpression} */ (tag).callee
          ).name === this.localVarNames.styled;

        const isAttrsCall =
          t.isCallExpression(tag) &&
          t.isMemberExpression(tag.callee) &&
          t.isIdentifier(tag.callee.property) &&
          tag.callee.property.name === "attrs";

        if (
          !isCssLiteral &&
          !isStyledLiteral &&
          !isStyledCall &&
          !isKeyframesLiteral &&
          !isAttrsCall
        ) {
          return;
        }

        // Store class name for the created variable for later replacements
        // e.g. const MyStyledDiv = styled.div`color: red;`
        // "MyStyledDiv" -> "selector-0"
        const variableName =
          isStyledLiteral || isStyledCall || isAttrsCall || isKeyframesLiteral
            ? getStyledComponentName(path)
            : "_yak";

        replaceQuasiExpressionTokens(
          path.node.quasi,
          (name) => {
            if (name in replaces) {
              return replaces[name];
            }
            const styledCall = this.variableNameToStyledCall.get(name);
            if (styledCall) {
              const { wasAdded, className, astNode } = styledCall;
              // on first usage of another styled component, add a
              // the className to it so it can be targeted
              if (!wasAdded) {
                styledCall.wasAdded = true;
                astNode.arguments.push(
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

        let literalSelectorWasUsed = false;
        const literalSelectorIndex = this.classNameCount++;
        // Keep the same selector for all quasis belonging to the same css block
        const classNameExpression = t.memberExpression(
          t.identifier("__styleYak"),
          t.identifier(
            localIdent(
              variableName,
              literalSelectorIndex,
              isKeyframesLiteral ? "animation" : "className"
            )
          )
        );

        // Replace the tagged template expression with a call to the 'styled' function
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
        const expressions = path.node.quasi.expressions;

        let cssVariablesInlineStyle;

        for (let i = 0; i < quasis.length; i++) {
          const type = quasiTypes[i];
          if (type.unknownSelector) {
            const expression = expressions[i - 1];
            if (!expression) {
              throw new Error(`Invalid css "${quasis[i].value.raw}"`);
            }
            let errorText = "Expressions are not allowed as selectors";
            const line = expression.loc?.start.line || -1;
            if (expression.start && expression.end) {
              errorText += `:\n${
                line !== -1 ? `line ${line}:` : ""
              } found \${${this.file.code.slice(
                expression.start,
                expression.end
              )}}`;
            }
            throw new InvalidPositionError(errorText);
          }

          if (type.empty) {
            const expression = expressions[i];
            if (expression) {
              newArguments.add(expression);
            }
            continue;
          }

          // create css class name reference as argument
          // e.g. `font-size: 2rem; display: flex;` -> `__styleYak.style1`

          // AutoGenerate a unique className
          newArguments.add(classNameExpression);
          literalSelectorWasUsed = true;

          let isMerging = false;
          // loop over all quasis belonging to the same css block
          while (i < quasis.length - 1) {
            const type = quasiTypes[i];
            // expressions after a partial css are converted into css variables
            if (type.insideCssValue || (isMerging && type.empty)) {
              isMerging = true;
              // expression: `x`
              // { style: { --v0: x}}
              const expression = expressions[i];
              i++;
              if (!expression) {
                continue;
              }
              if (!cssVariablesInlineStyle) {
                cssVariablesInlineStyle = t.objectExpression([]);
              }

              if (!hashedFile) {
                const resourcePath = state.file.opts.filename;
                if (!resourcePath) {
                  throw new Error("resourcePath is undefined");
                }
                const relativePath = relative(
                  rootContext,
                  resolve(rootContext, resourcePath)
                );
                hashedFile = murmurhash2_32_gc(relativePath);
              }

              // expression: `x`
              // { style: { --v0: x}}
              cssVariablesInlineStyle.properties.push(
                t.objectProperty(
                  t.stringLiteral(`--🦬${hashedFile}${this.varIndex++}`),
                  /** @type {babel.types.Expression} */ (expression)
                )
              );
            } else if (type.empty) {
              // empty quasis can be ignored in typescript
              // e.g. `transition: color ${duration} ${easing};`
              //                                    ^
            } else {
              if (expressions[i]) {
                if (quasiTypes[i].currentNestingScopes.length > 0) {
                  const errorExpression = expressions[i];
                  const name =
                    errorExpression.type === "Identifier"
                      ? `"${errorExpression.name}"`
                      : "Expression";
                  const line = errorExpression.loc?.start.line || -1;
                  throw new InvalidPositionError(
                    `Expressions are not allowed inside nested selectors:\n${
                      line !== -1 ? `line ${line}: ` : ""
                    }found ${name} inside "${quasiTypes[
                      i
                    ].currentNestingScopes.join(" { ")} {"`
                  );
                }
                newArguments.add(expressions[i]);
              }
              break;
            }
          }
        }

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

        // Store reference to AST node to allow other components to target the styled literal inside css like
        // e.g. `& ${Button} { ... }`
        if (isStyledLiteral || isStyledCall || isAttrsCall) {
          this.variableNameToStyledCall.set(variableName, {
            wasAdded: literalSelectorWasUsed,
            className: localIdent(
              variableName,
              literalSelectorIndex,
              "className"
            ),
            astNode: styledCall,
          });
        }
      },
    },
  };
};

class InvalidPositionError extends Error {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message);
  }
}

module.exports.InvalidPositionError = InvalidPositionError;
