/// @ts-check
const getYakImports = require("./lib/getYakImports.cjs");
const babel = require("@babel/core");
const quasiClassifier = require("./lib/quasiClassifier.cjs");
const localIdent = require("./lib/localIdent.cjs");
const replaceQuasiExpressionTokens = require("./lib/replaceQuasiExpressionTokens.cjs");
const getStyledComponentName = require("./lib/getStyledComponentName.cjs");
const getCssName = require("./lib/getCssName.cjs");
const murmurhash2_32_gc = require("./lib/hash.cjs");
const { relative } = require("path");
const {
  getConstantName,
  getConstantValues,
} = require("./lib/getConstantValues.cjs");

/**
 * @typedef {{ selector: string, hasParent: boolean, quasiCode: Array<{ insideCssValue: boolean, code: string }>, cssPartExpressions: { [key: number]: CssPartExpression[]} }} CssPartExpression
 * A CssPartExpression is the css code block for each tagged template expression
 */

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
    })
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

  /**
   * find all css template literals in the ast
   *
   * Babel iterates over the full TaggedLiteralExpression before it iterates over their children
   * To keep the order as written in the original code the code fragments are stored in an ordered map
   * @type {Map<import("@babel/core").NodePath<import("@babel/types").TaggedTemplateExpression>, CssPartExpression>}
   */
  const cssParts = new Map();

  let index = 0;
  let varIndex = 0;
  /** @type {string | null} */
  let hashedFile = null;

  /** @type {Map<string, string>} */
  const variableNameToStyledClassName = new Map();

  /** @type {Map<string, number | string | null>} */
  let topLevelConstBindings = new Map();

  babel.traverse(ast, {
    Program(path) {
      topLevelConstBindings = getConstantValues(path, t);
    },
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
        t
      );

      const parentLocation = getClosestTemplateLiteralExpressionParentPath(
        path,
        localVarNames
      );

      // Store class name for the created variable for later replacements
      // e.g. const MyStyledDiv = styled.div`color: red;`
      // "MyStyledDiv" -> "selector-0"
      const variableName =
        isStyledLiteral || isStyledCall || isAttrsCall || isKeyFrameLiteral
          ? getStyledComponentName(path)
          : isCssLiteral
          ? getCssName(path)
          : null;

      const literalSelector = localIdent(
        variableName || "_yak",
        variableName && !isCssLiteral ? null : index++,
        isKeyFrameLiteral ? "keyframes" : "selector"
      );

      /** @type {CssPartExpression} */
      const currentCssParts = {
        quasiCode: [],
        cssPartExpressions: [],
        selector: !parentLocation
          ? literalSelector
          : `&:where(${literalSelector})`,
        hasParent: Boolean(parentLocation),
      };
      const parentCssParts =
        parentLocation && cssParts.get(parentLocation.parent);
      cssParts.set(path, currentCssParts);
      if (parentCssParts) {
        parentCssParts.cssPartExpressions[parentLocation.currentIndex] ||= [];
        parentCssParts.cssPartExpressions[parentLocation.currentIndex].push(
          currentCssParts
        );
      }

      // Replace the tagged template expression with a call to the 'styled' function
      const quasis = path.node.quasi.quasis;
      const quasiTypes = quasis.map((quasi) =>
        quasiClassifier(quasi.value.raw, [])
      );

      let wasInsideCssValue = false;
      let removeCssUnit = false;
      for (let i = 0; i < quasis.length; i++) {
        const quasi = quasis[i];
        const expression = path.node.quasi.expressions[i];
        // loop over all quasis belonging to the same css block
        const type = quasiTypes[i];

        let code = unEscapeCssCode(quasi.value.raw);
        if (removeCssUnit) {
          // a quasi might start with a css unit e.g. css`margin: ${value}px 0;`
          // the css unit will be part of the typescript runtime code and must
          // must be removed from the css code as `var(--foo)px` would be invalid css
          code = code.replace(/^([a-z]+|%)/i, "");
          removeCssUnit = false;
        }

        // expressions after a partial css are converted into css variables
        if (
          expression &&
          (type.unknownSelector ||
            type.insideCssValue ||
            (type.empty && wasInsideCssValue))
        ) {
          wasInsideCssValue = true;
          if (!hashedFile) {
            const relativePath = relative(rootContext, resourcePath);
            hashedFile = murmurhash2_32_gc(relativePath);
          }
          const variableName =
            t.isExpression(expression) && getConstantName(expression, t);
          const variableConstValue =
            variableName && topLevelConstBindings.get(variableName);
          if (variableConstValue === null || variableConstValue === undefined) {
            currentCssParts.quasiCode.push({
              insideCssValue: true,
              code:
                code +
                // replace the expression with a css variable
                `var(--🦬${hashedFile}${varIndex++})`,
            });
            removeCssUnit = true;
          } else {
            currentCssParts.quasiCode.push({
              insideCssValue: true,
              code: code + String(variableConstValue),
            });
          }
        } else {
          wasInsideCssValue = false;
          // code is added
          // empty quasis are also added to keep spacings
          // e.g. `transition: color ${duration} ${easing};`
          currentCssParts.quasiCode.push({
            code,
            insideCssValue: false,
          });
        }
      }

      // Store class name of the created variable for later selector replacements
      // e.g.
      // const MyStyledDiv = styled.div`color: red;`
      // const Bar = styled.div` ${MyStyledDiv} { color: blue }`
      // "${MyStyledDiv} {" -> ".selector-0 {"
      if (variableName && (isStyledLiteral || isStyledCall || isAttrsCall)) {
        variableNameToStyledClassName.set(variableName, literalSelector);
      }
    },
  });
  const rootCssParts = [...cssParts.values()].filter(
    ({ hasParent }) => !hasParent
  );

  return mergeCssPartExpression(rootCssParts).trim();
};

/**
 * In jscode slashes are escaped however in css code they are not
 * e.g. in javascript `:before { content: "\\f0c9"; }` would be `:before { content: "\f0c9"; }` in css
 * slashes are still possible with `:before { content: "\\\\"; }`
 * @param {string} code
 */
const unEscapeCssCode = (code) => code.replace(/\\\\/gi, "\\");

/**
 * Searches the closest parent TaggedTemplateExpression using a name from localNames
 * Returns the location inside this parent
 *
 * @param {import("@babel/core").NodePath<import("@babel/types").TaggedTemplateExpression>} path
 * @param {{ css?: string , styled?: string }} localNames
 */
const getClosestTemplateLiteralExpressionParentPath = (
  path,
  { css, styled }
) => {
  /** @type {import("@babel/core").NodePath} */
  let grandChild = path;
  /** @type {import("@babel/core").NodePath} */
  let child = path;
  let parent = path.parentPath;
  const t = babel.types;
  while (parent) {
    if (t.isTaggedTemplateExpression(parent.node)) {
      const tag = parent.node.tag;
      const isCssLiteral =
        t.isIdentifier(tag) &&
        /** @type {babel.types.Identifier} */ (tag).name === css;
      const isStyledLiteral =
        t.isMemberExpression(tag) &&
        t.isIdentifier(
          /** @type {babel.types.MemberExpression} */ (tag).object
        ) &&
        /** @type {babel.types.Identifier} */ (
          /** @type {babel.types.MemberExpression} */ (tag).object
        ).name === styled;
      const isStyledCall =
        t.isCallExpression(tag) &&
        t.isIdentifier(
          /** @type {babel.types.CallExpression} */ (tag).callee
        ) &&
        /** @type {babel.types.Identifier} */ (
          /** @type {babel.types.CallExpression} */ (tag).callee
        ).name === styled;
      const isAttrsCall =
        t.isCallExpression(tag) &&
        t.isMemberExpression(tag.callee) &&
        /** @type {babel.types.Identifier} */ (tag.callee.property).name ===
          "attrs";
      if (isCssLiteral || isStyledLiteral || isStyledCall || isAttrsCall) {
        if (
          !t.isTemplateLiteral(child.node) ||
          !t.isExpression(grandChild.node)
        ) {
          throw new Error("Broken AST");
        }
        const currentIndex = child.node.expressions.indexOf(grandChild.node);
        return {
          parent:
            /** @type {import("@babel/core").NodePath<import("@babel/types").TaggedTemplateExpression>} */ (
              parent
            ),
          currentIndex,
        };
      }
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

/**
 * depthFirst traversal of the css parts
 * @param {CssPartExpression[]} cssPartExpression
 * @param {number} [level]
 * @returns
 */
const mergeCssPartExpression = (cssPartExpression, level = 0) => {
  let css = "";
  for (const { quasiCode, cssPartExpressions, selector } of cssPartExpression) {
    let cssPart = "";
    for (let i = 0; i < quasiCode.length; i++) {
      const quasi = quasiCode[i];
      cssPart += trimNewLines(quasi.code);
      // Add expressions from child css literals
      const childCssParts = cssPartExpressions[i];
      if (childCssParts) {
        cssPart += `\n${trimNewLines(
          mergeCssPartExpression(childCssParts, level + 1)
        )}\n`;
      }
    }
    // Try to keep the same indentation as the original code
    const indent =
      quasiCode[0]?.code.match(/^\n(  |\t)(\s*)/)?.[2] ?? "    ".repeat(level);
    const hasCss = Boolean(cssPart.trim());
    css += !hasCss
      ? ""
      : `${indent}${selector} {\n${trimNewLines(cssPart)}\n${indent}}\n`;
  }
  return css;
};

/**
 * @param {string} str
 */
const trimNewLines = (str) => str.replace(/^\s*\n+|\s+$/g, "");
