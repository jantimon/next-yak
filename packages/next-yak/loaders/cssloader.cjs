/// @ts-check
const getYakImports = require("./lib/getYakImports.cjs");
const babel = require("@babel/core");
const quasiClassifier = require("./lib/quasiClassifier.cjs");
const localIdent = require("./lib/localIdent.cjs");
const replaceQuasiExpressionTokens = require("./lib/replaceQuasiExpressionTokens.cjs");
const getStyledComponentName = require("./lib/getStyledComponentName.cjs");
const murmurhash2_32_gc = require("./lib/hash.cjs");
const { relative } = require("path");

/**
 * @param {string} source
 * @this {any}
 * @returns {Promise<string>}
 */
module.exports = async function cssLoader(source) {
  const { rootContext, resourcePath } = this;

  /** .yak files are constant definition files */
  const isYakFile = /\.yak\.(j|t)sx?$/.test(resourcePath.matches);
  // The user may import constants from a yak file
  // e.g. import { primary } from './colors.yak'
  //
  // However .yak files inside .yak files are not be compiled
  // to avoid performance overhead
  const importedYakConstants = isYakFile ? [] : getYakImports(source);
  /** @type {Record<string, unknown>} */
  const replaces = {};
  await Promise.all(
    importedYakConstants.map(async ({ imports, from }) => {
      const constantValues = await this.importModule(from, {
        layer: "yak-importModule",
      });
      imports.forEach(({ localName, importedName }) => {
        replaces[localName] = constantValues[importedName];
      });
    }),
  );

  // parse source with babel
  const ast = babel.parseSync(source, {
    filename: this.resourcePath,
    configFile: false,
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

  /** @type {{css?: string, styled?: string, attrs?: "attrs", keyframes?: string}} */
  const localVarNames = {
    css: undefined,
    styled: undefined,
    attrs: "attrs",
    keyframes: undefined,
  };

  let index = 0;
  let varIndex = 0;
  /** @type {string | null} */
  let hashedFile = null;

  /** @type {Map<string, string>} */
  const variableNameToStyledClassName = new Map();

  /**
   * find all css template literals in ast
   * @type {{ code: string, loc: number }[]}
   */
  const cssCode = [];
  babel.traverse(ast, {
    /**
     * @param {import("@babel/core").NodePath<import("@babel/types").ImportDeclaration>} path
     */
    ImportDeclaration(path) {
      const node = path.node;
      if (node.source.value !== "next-yak") {
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
          importSpecifier.name === "css" ||
          importSpecifier.name === "keyframes"
        ) {
          localVarNames[importSpecifier.name] = localSpecifier.name;
        }
      });
    },
    /**
     * @param {import("@babel/core").NodePath<import("@babel/types").TaggedTemplateExpression>} path
     */
    TaggedTemplateExpression(path) {
      // Check if the tag name matches the imported 'css' or 'styled' variable
      const tag = path.node.tag;

      const isCssLiteral =
        t.isIdentifier(tag) &&
        /** @type {babel.types.Identifier} */ (tag).name === localVarNames.css;

      const isKeyFrameLiteral =
        t.isIdentifier(tag) &&
        /** @type {babel.types.Identifier} */ (tag).name ===
          localVarNames.keyframes;

      const isStyledLiteral =
        t.isMemberExpression(tag) &&
        t.isIdentifier(
          /** @type {babel.types.MemberExpression} */ (tag).object,
        ) &&
        /** @type {babel.types.Identifier} */ (
          /** @type {babel.types.MemberExpression} */ (tag).object
        ).name === localVarNames.styled;

      const isStyledCall =
        t.isCallExpression(tag) &&
        t.isIdentifier(
          /** @type {babel.types.CallExpression} */ (tag).callee,
        ) &&
        /** @type {babel.types.Identifier} */ (
          /** @type {babel.types.CallExpression} */ (tag).callee
        ).name === localVarNames.styled;

      const isAttrsCall =
        t.isCallExpression(tag) &&
        t.isMemberExpression(tag.callee) &&
        /** @type {babel.types.Identifier} */ (tag.callee.property).name ===
          "attrs";

      if (
        !isCssLiteral &&
        !isKeyFrameLiteral &&
        !isStyledLiteral &&
        !isStyledCall &&
        !isAttrsCall
      ) {
        return;
      }
      // Store class name for the created variable for later replacements
      // e.g. const MyStyledDiv = styled.div`color: red;`
      // "MyStyledDiv" -> "selector-0"
      const variableName =
        isStyledLiteral || isStyledCall || isAttrsCall || isKeyFrameLiteral
          ? getStyledComponentName(path)
          : "_yak";

      replaceQuasiExpressionTokens(
        path.node.quasi,
        (name) => {
          if (name in replaces) {
            return replaces[name];
          }
          if (variableNameToStyledClassName.has(name)) {
            return variableNameToStyledClassName.get(name);
          }
          return false;
        },
        t,
      );

      // Keep the same selector for all quasis belonging to the same css block
      const literalSelectorIndex = index++;
      const literalSelector = localIdent(
        variableName,
        literalSelectorIndex,
        isKeyFrameLiteral ? "keyframes" : "selector",
      );

      // Replace the tagged template expression with a call to the 'styled' function
      const quasis = path.node.quasi.quasis;
      const quasiTypes = quasis.map((quasi) => quasiClassifier(quasi.value.raw, []));

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
            type.unknownSelector ||
            type.insideCssValue ||
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
          code: `${literalSelector} { ${unEscapeCssCode(code)} }`,
          loc: quasi.loc?.start.line || 0,
        });
      }

      // Store class name for the created variable for later replacements
      // e.g. const MyStyledDiv = styled.div`color: red;`
      // "MyStyledDiv" -> "selector-0"
      if (isStyledLiteral || isStyledCall || isAttrsCall) {
        variableNameToStyledClassName.set(
          variableName,
          localIdent(variableName, literalSelectorIndex, "selector"),
        );
      }
    },
  });

  // sort by loc
  cssCode.sort((a, b) => a.loc - b.loc);

  return cssCode.map((code) => code.code).join("\n\n");
};

/**
 * In jscode slashes are escaped however in css code they are not
 * e.g. in javascript `:before { content: "\\f0c9"; }` would be `:before { content: "\f0c9"; }` in css
 * slashes are still possible with `:before { content: "\\\\"; }`
 * @param {string} code
 */
const unEscapeCssCode = (code) => code.replace(/\\\\/gi, "\\");
