/// @ts-check
const babel = require("@babel/core");
const quasiClassifier = require("./lib/quasiClassifier.cjs");
const replaceQuasiExpressionTokens = require("./lib/replaceQuasiExpressionTokens.cjs");
const murmurhash2_32_gc = require("./lib/hash.cjs");
const { relative, resolve } = require("path");

/**
 * @param {string} source
 * @this {any}
 * @returns {Promise<string>}
 */
module.exports = async function cssLoader(source) {
  // Config for replacing tokens in css template literals
  // can be based on a typescript file
  const options = this.getOptions();
  const config = options.configPath ? await this.importModule(resolve(this.rootContext, options.configPath), { 
    layer: "yak-importModule",
  }) : {};
  const replaces = config.replaces || {};

  // parse source with babel
  const ast = babel.parseSync(source, {
    filename: this.resourcePath,
    plugins: [
      [
        "@babel/plugin-syntax-typescript",
        { isTSX: this.resourcePath.endsWith(".tsx") },
      ],
    ],
  });

  if (ast === null) {
    return "";
  }

  const { types: t } = babel;

  /** @type {{css?: string, styled?: string}} */
  const localVarNames = {
    css: undefined,
    styled: undefined,
  };

  let index = 0;
  let varIndex = 0;
  /** @type {string | null} */
  let hashedFile = null;
  const { rootContext, resourcePath } = this;

  /**
   * find all css template literals in ast
   * @type {{ code: string, loc: number }[]}
   */
  const cssCode = [];
  babel.traverse(ast, {
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
          localVarNames[importSpecifier.name] = localSpecifier.name;
        }
      });
    },
    /**
     * @param {import("@babel/traverse").NodePath<import("@babel/types").TaggedTemplateExpression>} path
     */
    TaggedTemplateExpression(path) {
      // Check if the tag name matches the imported 'css' or 'styled' variable
      const tag = path.node.tag;

      const isCssLiteral =
        t.isIdentifier(tag) &&
        /** @type {babel.types.Identifier} */ (tag).name === localVarNames.css;
      const isStyledLiteral =
        t.isMemberExpression(tag) &&
        t.isIdentifier(
          /** @type {babel.types.MemberExpression} */ (tag).object
        ) &&
        /** @type {babel.types.Identifier} */ (
          /** @type {babel.types.MemberExpression} */ (tag).object
        ).name === localVarNames.styled;

      const isStyledCall =
        t.isCallExpression(tag) &&
        t.isIdentifier(
          /** @type {babel.types.CallExpression} */ (tag).callee
        ) &&
        /** @type {babel.types.Identifier} */ (
          /** @type {babel.types.CallExpression} */ (tag).callee
        ).name === localVarNames.styled;

      if (!isCssLiteral && !isStyledLiteral && !isStyledCall) {
        return;
      }

      replaceQuasiExpressionTokens(path.node.quasi, replaces, t);

      // Keep the same selector for all quasis belonging to the same css block
      const literalSelector = `.style${index++}`;

      // Replace the tagged template expression with a call to the 'styled' function
      const quasis = path.node.quasi.quasis;
      const quasiTypes = quasis.map((quasi) =>
        quasiClassifier(quasi.value.raw)
      );

      for (let i = 0; i < quasis.length; i++) {
        const quasi = quasis[i];
        // skip empty quasis
        if (quasiTypes[i].empty) {
          continue;
        }
        let code = quasi.value.raw;
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
            if (!hashedFile) {
              const relativePath = relative(rootContext, resourcePath);
              hashedFile = murmurhash2_32_gc(relativePath);
            }
            // replace the expression with a css variable
            code += `var(--🦬${hashedFile}${varIndex++})`;
            // as we are after the css block, we need to increment i
            // to get the very next quasi
            i++;
            code += quasis[i].value.raw;
          } else if (type.empty) {
            // empty quasis are also added to keep spacings
            // e.g. `transition: color ${duration} ${easing};`
            i++;
            code += quasis[i].value.raw;
          } else {
            break;
          }
        }

        cssCode.push({
          code: `${literalSelector} { ${code} }`,
          loc: quasi.loc?.start.line || 0,
        });
      }
    },
  });

  // sort by loc
  cssCode.sort((a, b) => a.loc - b.loc);

  return cssCode.map((code) => code.code).join("\n\n");
};
