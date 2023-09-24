/// @ts-check
const path = require("path");
const babel = require("@babel/core");
const quasiClassifier = require("./lib/quasiClassifier.cjs");
const replaceQuasiExpressionTokens = require("./lib/replaceQuasiExpressionTokens.cjs");
const loadConfigOnce = require("./lib/loadConfigOnce.cjs");
const murmurhash2_32_gc = require("./lib/hash.cjs");
const { relative, resolve } = require("path");

/**
 * Loader for typescript files that use yacijs, it replaces the css template literal with a call to the 'styled' function
 * @param {string} source
 * @this {any}
 * @returns {Promise<string>}
 */
module.exports = async function tsloader(source) {
  // ignore files if they don't use yacijs
  if (!source.includes("next-yak")) {
    return source;
  }

  // Config for replacing tokens in css template literals
  // can be based on a typescript file
  const options = this.getOptions();
  const config = options.configPath ? await loadConfigOnce(
    async () => await this.importModule(resolve(this.rootContext, options.configPath))
  ) : {};
  const replaces = config.replaces || {};

  /** @type {string | null} */
  let hashedFile = null;
  const { rootContext, resourcePath } = this;

  const { types: t } = babel;
  const fileName = path.basename(this.resourcePath).replace(/\.tsx?/, "");
  // parse source with babel
  const { code } = babel.transformSync(source, {
    filename: this.resourcePath,
    // Only for parsing - will be removed once moved to a swc or babel plugin
    plugins: [
      [
        "@babel/plugin-syntax-typescript",
        { isTSX: this.resourcePath.endsWith(".tsx") },
      ],
      /**
       * @returns {import("@babel/core").PluginObj<import("@babel/core").PluginPass & {localVarNames: {css?: string, styled?: string}, isImportedInCurrentFile: boolean, classNameCount: number, varIndex: number}>}
       */
      function () {
        return {
          name: "next-yak",
          pre() {
            // Initialize state variables
            this.localVarNames = {
              css: undefined,
              styled: undefined,
            };
            this.isImportedInCurrentFile = false;
            this.classNameCount = 0;
            this.varIndex = 0;
          },
          visitor: {
            /**
             * @param {import("@babel/traverse").NodePath<import("@babel/types").ImportDeclaration>} path
             */
            ImportDeclaration(path) {
              const node = path.node;
              if (
                node.source.value !== "next-yak"
              ) {
                return;
              }

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
                  importSpecifier.name === "css"
                ) {
                  this.localVarNames[importSpecifier.name] =
                    localSpecifier.name;
                  this.isImportedInCurrentFile = true;
                }
              });
            },
            TaggedTemplateExpression(path) {
              if (!this.isImportedInCurrentFile) {
                return;
              }
              // Check if the tag name matches the imported 'css' or 'styled' variable
              const tag = path.node.tag;

              const isCssLiteral =
                t.isIdentifier(tag) &&
                /** @type {babel.types.Identifier} */ (tag).name ===
                  this.localVarNames.css;
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

              if (!isCssLiteral && !isStyledLiteral && !isStyledCall) {
                return;
              }

              replaceQuasiExpressionTokens(path.node.quasi, replaces, t);

              // Keep the same selector for all quasis belonging to the same css block
              const classNameExpression = t.memberExpression(
                t.identifier("__styleYak"),
                t.identifier(`style${this.classNameCount++}`)
              );

              // Replace the tagged template expression with a call to the 'styled' function
              const newArguments = new Set();
              const quasis = path.node.quasi.quasis;
              const quasiTypes = quasis.map((quasi) =>
                quasiClassifier(quasi.value.raw)
              );
              const expressions = path.node.quasi.expressions;

              let cssVariablesInlineStyle;

              for (let i = 0; i < quasis.length; i++) {
                if (quasiTypes[i].empty) {
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

                let isMerging = false;
                // loop over all quasis belonging to the same css block
                while (i < quasis.length - 1) {
                  const type = quasiTypes[i];
                  // expressions after a partial css are converted into css variables
                  if (
                    type.partialStart ||
                    type.partialEnd ||
                    (isMerging && type.empty)
                  ) {
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
                      const relativePath = relative(rootContext, resourcePath);
                      hashedFile = murmurhash2_32_gc(relativePath);
                    }

                    cssVariablesInlineStyle.properties.push(
                      t.objectProperty(
                        t.stringLiteral(`--🦬${hashedFile}${this.varIndex++}`),
                        expression
                      )
                    );
                  } else if (type.empty) {
                    // empty quasis can be ignored
                    // e.g. `transition: color ${duration} ${easing};`
                  } else {
                    if (expressions[i]) {
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
            },
          },
        };
      },
    ],
  });

  return code;
};
