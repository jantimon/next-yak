// loaders/lib/getYakImports.ts
var getYakImports = (code) => {
  const codeWithoutComments = code.replace(/\/\*[\s\S]*?\*\//g, "");
  const allImports = codeWithoutComments.matchAll(
    /(^|\n|;)\s*import\s+(?:(\w+(?:\s+as\s+\w+)?)\s*,?\s*)?(?:{([^}]*)})?\s+from\s+["']([^'"]+\.yak)["'](;|\n)/g
  );
  return [...allImports].map(([, , defaultImport, namedImports, from]) => {
    const imports = namedImports?.split(",").map((namedImport) => {
      const [importedName, localName = importedName] = namedImport.replace(/^type\s+/, "").trim().split(/\s+as\s+/);
      return { localName, importedName };
    }) ?? [];
    if (defaultImport) {
      imports.push(parseDefaultImport(defaultImport));
    }
    return { imports, from };
  });
};
function parseDefaultImport(defaultImport) {
  const defaultImportArray = defaultImport.split(/\s+as\s+/);
  return {
    localName: defaultImportArray[1] ?? defaultImportArray[0],
    importedName: defaultImportArray[0]
  };
}
var getYakImports_default = getYakImports;

// loaders/cssloader.ts
import babel from "@babel/core";

// loaders/lib/stripCssComments.ts
function stripCssComments(cssString) {
  let isInsideString = false;
  let currentCharacter = "";
  let comment = "";
  let returnValue = "";
  for (let index = 0; index < cssString.length; index++) {
    currentCharacter = cssString[index];
    if (cssString[index - 1] !== "\\" && (currentCharacter === '"' || currentCharacter === "'")) {
      if (isInsideString === currentCharacter) {
        isInsideString = false;
      } else if (!isInsideString) {
        isInsideString = currentCharacter;
      }
    }
    if (!isInsideString && currentCharacter === "/" && cssString[index + 1] === "*") {
      let index2 = index + 2;
      for (; index2 < cssString.length; index2++) {
        if (cssString[index2] === "*" && cssString[index2 + 1] === "/") {
          if (cssString[index2 + 2] === "\n") {
            index2++;
          } else if (cssString[index2 + 2] + cssString[index2 + 3] === "\r\n") {
            index2 += 2;
          }
          comment = "";
          break;
        }
        comment += cssString[index2];
      }
      index = index2 + 1;
      continue;
    }
    returnValue += currentCharacter;
  }
  return returnValue;
}

// loaders/lib/quasiClassifier.ts
function quasiClassifier(quasiValue, currentNestingScopes) {
  const trimmedCssString = stripCssComments(quasiValue).trim();
  if (trimmedCssString === "") {
    return {
      empty: true,
      unknownSelector: false,
      insideCssValue: false,
      currentNestingScopes
    };
  }
  let isInsideString = false;
  let currentCharacter = "";
  let newNestingLevel = [...currentNestingScopes];
  let currentSelector = "";
  for (let index = 0; index < trimmedCssString.length; index++) {
    currentCharacter = trimmedCssString[index];
    if (trimmedCssString[index - 1] !== "\\" && (currentCharacter === '"' || currentCharacter === "'")) {
      if (isInsideString === currentCharacter) {
        isInsideString = false;
      } else if (!isInsideString) {
        isInsideString = currentCharacter;
      }
    }
    if (isInsideString) {
      continue;
    }
    if (currentCharacter === "{") {
      const selector = currentSelector.trim();
      if (selector !== "") {
        newNestingLevel.push(selector);
      }
      currentSelector = "";
    } else if (currentCharacter === "}") {
      newNestingLevel.pop();
      currentSelector = "";
    } else if (currentCharacter === ";") {
      currentSelector = "";
    } else {
      currentSelector += currentCharacter;
    }
  }
  return {
    empty: false,
    unknownSelector: trimmedCssString[0] === "{" || trimmedCssString[0] === ",",
    insideCssValue: currentCharacter !== "{" && currentCharacter !== "}" && currentCharacter !== ";",
    currentNestingScopes: newNestingLevel
  };
}

// loaders/lib/localIdent.ts
function localIdent(variableName, i, kind) {
  switch (kind) {
    case "selector":
      return `.${variableName}${i === null ? "" : `_${i}`}`;
    case "className":
    case "animation":
      return `${variableName}${i === null ? "" : `_${i}`}`;
    case "keyframes":
      return `@keyframes ${variableName}${i === null ? "" : `_${i}`}`;
    default:
      throw new Error("unknown kind");
  }
}

// loaders/lib/replaceQuasiExpressionTokens.ts
function replaceTokensInQuasiExpressions(quasi, replacer, t) {
  for (let i = quasi.expressions.length - 1; i >= 0; i--) {
    const expression = quasi.expressions[i];
    const parts = getExpressionParts(expression, t);
    const replacement = parts && replacer(parts[0]);
    const replacementValue = replacement && getReplacementValue(replacement, parts);
    if (replacementValue !== false && replacementValue !== null) {
      replaceExpressionAndMergeQuasis(quasi, i, replacementValue);
    }
  }
}
function replaceExpressionAndMergeQuasis(quasi, expressionIndex, replacement) {
  const stringReplacement = typeof replacement === "string" ? replacement : replacement == null ? "" : JSON.stringify(replacement);
  quasi.expressions.splice(expressionIndex, 1);
  quasi.quasis[expressionIndex].value.raw += stringReplacement + quasi.quasis[expressionIndex + 1].value.raw;
  quasi.quasis[expressionIndex].value.cooked += stringReplacement + quasi.quasis[expressionIndex + 1].value.cooked;
  quasi.quasis.splice(expressionIndex + 1, 1);
}
function getExpressionParts(expression, t) {
  let currentExpression = expression;
  const tokens = [];
  while (currentExpression) {
    if (t.isIdentifier(currentExpression)) {
      tokens.unshift(currentExpression.name);
      break;
    }
    if (t.isMemberExpression(currentExpression)) {
      if (currentExpression.computed === false && t.isIdentifier(currentExpression.property)) {
        tokens.unshift(currentExpression.property.name);
      } else if (t.isStringLiteral(currentExpression.property)) {
        tokens.unshift(currentExpression.property.value);
      } else if (t.isNumericLiteral(currentExpression.property)) {
        tokens.unshift(String(currentExpression.property.value));
      } else {
        return null;
      }
      currentExpression = currentExpression.object;
    } else if (t.isCallExpression(currentExpression)) {
      if (!t.isExpression(currentExpression.callee)) {
        return null;
      }
      currentExpression = currentExpression.callee;
    } else {
      return null;
    }
  }
  return tokens;
}
function getReplacementValue(replacement, parts) {
  let currentReplacement = replacement;
  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    if (currentReplacement == null || typeof currentReplacement !== "object") {
      return false;
    }
    currentReplacement = currentReplacement[part];
  }
  return currentReplacement;
}

// loaders/lib/getStyledComponentName.ts
var getStyledComponentName = (taggedTemplateExpressionPath) => {
  const variableDeclaratorPath = taggedTemplateExpressionPath.findParent(
    (path) => path.isVariableDeclarator()
  );
  if (!variableDeclaratorPath || !("id" in variableDeclaratorPath.node) || variableDeclaratorPath.node.id?.type !== "Identifier") {
    throw new Error(
      "Could not find variable declaration for styled component at " + taggedTemplateExpressionPath.node.loc
    );
  }
  return variableDeclaratorPath.node.id.name;
};
var getStyledComponentName_default = getStyledComponentName;

// loaders/lib/getCssName.ts
function extractConditions(path) {
  const conditions = [];
  const visitedNodes = /* @__PURE__ */ new Set();
  const getConditions = (node, previousNode, isNegated = false) => {
    if (visitedNodes.has(node))
      return;
    visitedNodes.add(node);
    if (node.type === "LogicalExpression") {
      if (node.operator === "&&") {
        getConditions(node.right, previousNode, isNegated);
        conditions.push("and");
        getConditions(node.left, previousNode, isNegated);
      } else if (node.operator === "||") {
        getConditions(node.right, previousNode, isNegated);
        conditions.push("or");
        getConditions(node.left, previousNode, isNegated);
      }
    } else if (node.type === "ConditionalExpression") {
      conditions.push("and");
      getConditions(node.test, previousNode, node.alternate === previousNode);
    } else if (node.type === "UnaryExpression" && node.operator === "!") {
      getConditions(node.argument, previousNode, !isNegated);
    } else if (node.type === "CallExpression" && node.callee.type === "Identifier" && node.callee.name === "Boolean") {
      getConditions(node.arguments[0], previousNode, isNegated);
    } else if (node.type === "Identifier") {
      conditions.push((isNegated ? "not_" : "") + node.name);
    } else if (node.type === "MemberExpression") {
      conditions.push(
        (isNegated ? "not_" : "") + getMemberExpressionName(node)
      );
    }
  };
  let currentPath = path;
  let previousPath = path;
  while (currentPath) {
    getConditions(currentPath.node, previousPath.node);
    previousPath = currentPath;
    currentPath = currentPath.parentPath;
  }
  if (conditions[0] === "or" || conditions[0] === "and") {
    conditions.shift();
  }
  return conditions.reverse();
}
var getStyledComponentName2 = (taggedTemplateExpressionPath) => {
  const variableDeclaratorPath = taggedTemplateExpressionPath.findParent(
    (path) => path.isVariableDeclarator()
  );
  if (!variableDeclaratorPath || !("id" in variableDeclaratorPath.node) || variableDeclaratorPath.node.id?.type !== "Identifier") {
    return null;
  }
  return variableDeclaratorPath.node.id.name;
};
function getMemberExpressionName(node) {
  if (!node.object || !node.property || node.object.type !== "Identifier" && node.object.type !== "MemberExpression") {
    return "";
  }
  const objectName = node.object.type === "Identifier" ? node.object.name : getMemberExpressionName(node.object);
  const property = node.property;
  let propertyName = "";
  if (property.type === "Identifier") {
    propertyName = property.name;
  } else if (property.type === "StringLiteral") {
    propertyName = property.value;
  }
  if (!propertyName) {
    return "";
  }
  return objectName + propertyName[0].toUpperCase() + propertyName.slice(1);
}
function getCssName(literal) {
  const conditions = extractConditions(literal);
  if (conditions.length === 0) {
    const mixinName = getStyledComponentName2(literal);
    return mixinName ? mixinName : "yak";
  }
  return conditions.join("_").replace(/\$/g, "");
}

// loaders/lib/hash.ts
function murmurhash2_32_gc(str) {
  let l = str.length;
  let h = l;
  let i = 0;
  let k;
  while (l >= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = (k & 65535) * 1540483477 + (((k >>> 16) * 1540483477 & 65535) << 16);
    k ^= k >>> 24;
    k = (k & 65535) * 1540483477 + (((k >>> 16) * 1540483477 & 65535) << 16);
    h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16) ^ k;
    l -= 4;
    ++i;
  }
  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16);
  }
  h ^= h >>> 13;
  h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

// loaders/cssloader.ts
import { relative } from "path";

// loaders/lib/getConstantValues.ts
var getConstantName = (expression, t) => {
  if (t.isIdentifier(expression)) {
    return expression.name;
  } else if (t.isMemberExpression(expression) && t.isIdentifier(expression.object)) {
    return expression.object.name;
  } else if (t.isCallExpression(expression) && t.isIdentifier(expression.callee)) {
    return expression.callee.name;
  } else if (t.isCallExpression(expression) && t.isMemberExpression(expression.callee) && t.isIdentifier(expression.callee.object)) {
    return expression.callee.object.name;
  } else {
    return null;
  }
};
function getConstantValues(path, t) {
  const topLevelConstBindings = /* @__PURE__ */ new Map();
  const bindings = Object.entries(path.scope.bindings);
  for (const [name, binding] of bindings) {
    if (binding.kind === "module") {
      topLevelConstBindings.set(name, null);
      continue;
    }
    if (binding.kind === "let" || binding.kind === "var" || binding.kind === "const") {
      if (!("init" in binding.path.node) || t.isFunctionDeclaration(binding.path.node.init) || t.isArrowFunctionExpression(binding.path.node.init)) {
        topLevelConstBindings.set(name, null);
        continue;
      }
      const value = binding.path.node.init;
      topLevelConstBindings.set(
        name,
        t.isStringLiteral(value) || t.isNumericLiteral(value) ? value.value : null
      );
    }
  }
  return topLevelConstBindings;
}

// loaders/cssloader.ts
async function cssLoader(source) {
  const { rootContext, resourcePath } = this;
  const isYakFile = /\.yak\.(j|t)sx?$/.test(resourcePath.matches);
  const importedYakConstants = isYakFile ? [] : getYakImports_default(source);
  const replaces = {};
  await Promise.all(
    importedYakConstants.map(async ({ imports, from }) => {
      const constantValues = await this.importModule(from, {
        layer: "yak-importModule"
      });
      imports.forEach(({ localName, importedName }) => {
        replaces[localName] = constantValues[importedName];
      });
    })
  );
  const ast = babel.parseSync(source, {
    filename: this.resourcePath,
    configFile: false,
    plugins: [
      [
        "@babel/plugin-syntax-typescript",
        { isTSX: this.resourcePath.endsWith(".tsx") }
      ]
    ]
  });
  if (ast === null) {
    return "";
  }
  const { types: t } = babel;
  const localVarNames = {
    css: void 0,
    styled: void 0,
    attrs: "attrs",
    keyframes: void 0
  };
  const cssParts = /* @__PURE__ */ new Map();
  let index = 0;
  let varIndex = 0;
  let hashedFile = null;
  const variableNameToStyledClassName = /* @__PURE__ */ new Map();
  let topLevelConstBindings = /* @__PURE__ */ new Map();
  babel.traverse(ast, {
    Program(path) {
      topLevelConstBindings = getConstantValues(path, t);
    },
    ImportDeclaration(path) {
      const node = path.node;
      if (node.source.value !== "next-yak") {
        return;
      }
      node.specifiers.forEach((specifier) => {
        if (!("imported" in specifier) || !specifier.imported || !t.isIdentifier(specifier.imported)) {
          return;
        }
        const importSpecifier = (
          /** @type {babel.types.Identifier} */
          specifier.imported
        );
        const localSpecifier = specifier.local || importSpecifier;
        if (importSpecifier.name === "styled" || importSpecifier.name === "css" || importSpecifier.name === "keyframes") {
          localVarNames[importSpecifier.name] = localSpecifier.name;
        }
      });
    },
    /**
     * @param {import("@babel/core").NodePath<import("@babel/types").TaggedTemplateExpression>} path
     */
    TaggedTemplateExpression(path) {
      const tag = path.node.tag;
      const isCssLiteral = t.isIdentifier(tag) && /** @type {babel.types.Identifier} */
      tag.name === localVarNames.css;
      const isKeyFrameLiteral = t.isIdentifier(tag) && /** @type {babel.types.Identifier} */
      tag.name === localVarNames.keyframes;
      const isStyledLiteral = t.isMemberExpression(tag) && t.isIdentifier(
        /** @type {babel.types.MemberExpression} */
        tag.object
      ) && /** @type {babel.types.Identifier} */
      /** @type {babel.types.MemberExpression} */
      tag.object.name === localVarNames.styled;
      const isStyledCall = t.isCallExpression(tag) && t.isIdentifier(
        /** @type {babel.types.CallExpression} */
        tag.callee
      ) && /** @type {babel.types.Identifier} */
      /** @type {babel.types.CallExpression} */
      tag.callee.name === localVarNames.styled;
      const isAttrsCall = t.isCallExpression(tag) && t.isMemberExpression(tag.callee) && tag.callee.property.name === "attrs";
      if (!isCssLiteral && !isKeyFrameLiteral && !isStyledLiteral && !isStyledCall && !isAttrsCall) {
        return;
      }
      replaceTokensInQuasiExpressions(
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
      const variableName = isStyledLiteral || isStyledCall || isAttrsCall || isKeyFrameLiteral ? getStyledComponentName_default(path) : isCssLiteral ? getCssName(path) : null;
      const literalSelector = localIdent(
        variableName || "_yak",
        variableName && !isCssLiteral ? null : index++,
        isKeyFrameLiteral ? "keyframes" : "selector"
      );
      const currentCssParts = {
        quasiCode: [],
        cssPartExpressions: [],
        selector: !parentLocation ? literalSelector : `&:where(${literalSelector})`,
        hasParent: Boolean(parentLocation)
      };
      const parentCssParts = parentLocation && cssParts.get(
        parentLocation.parent
      );
      cssParts.set(path, currentCssParts);
      if (parentCssParts) {
        parentCssParts.cssPartExpressions[parentLocation.currentIndex] ||= [];
        parentCssParts.cssPartExpressions[parentLocation.currentIndex].push(
          currentCssParts
        );
      }
      const quasis = path.node.quasi.quasis;
      const quasiTypes = quasis.map(
        (quasi) => quasiClassifier(quasi.value.raw, [])
      );
      let wasInsideCssValue = false;
      let removeCssUnit = false;
      for (let i = 0; i < quasis.length; i++) {
        const quasi = quasis[i];
        const expression = path.node.quasi.expressions[i];
        const type = quasiTypes[i];
        let code = unEscapeCssCode(quasi.value.raw);
        if (removeCssUnit) {
          code = code.replace(/^([a-z]+|%)/i, "");
          removeCssUnit = false;
        }
        if (expression && (type.unknownSelector || type.insideCssValue || type.empty && wasInsideCssValue)) {
          wasInsideCssValue = true;
          if (!hashedFile) {
            const relativePath = relative(rootContext, resourcePath);
            hashedFile = murmurhash2_32_gc(relativePath);
          }
          const variableName2 = t.isExpression(expression) && getConstantName(expression, t);
          const variableConstValue = variableName2 && topLevelConstBindings.get(variableName2);
          if (variableConstValue === null || variableConstValue === void 0) {
            currentCssParts.quasiCode.push({
              insideCssValue: true,
              code: code + // replace the expression with a css variable
              `var(--\u{1F9AC}${hashedFile}${varIndex++})`
            });
            removeCssUnit = true;
          } else {
            currentCssParts.quasiCode.push({
              insideCssValue: true,
              code: code + String(variableConstValue)
            });
          }
        } else {
          wasInsideCssValue = false;
          currentCssParts.quasiCode.push({
            code,
            insideCssValue: false
          });
        }
      }
      if (variableName && (isStyledLiteral || isStyledCall || isAttrsCall)) {
        variableNameToStyledClassName.set(variableName, literalSelector);
      }
    }
  });
  const rootCssParts = [...cssParts.values()].filter(
    ({ hasParent }) => !hasParent
  );
  return mergeCssPartExpression(rootCssParts).trim();
}
var unEscapeCssCode = (code) => code.replace(/\\\\/gi, "\\");
var getClosestTemplateLiteralExpressionParentPath = (path, { css, styled }) => {
  let grandChild = path;
  let child = path;
  let parent = path.parentPath;
  const t = babel.types;
  while (parent) {
    if (t.isTaggedTemplateExpression(parent.node)) {
      const tag = parent.node.tag;
      const isCssLiteral = t.isIdentifier(tag) && /** @type {babel.types.Identifier} */
      tag.name === css;
      const isStyledLiteral = t.isMemberExpression(tag) && t.isIdentifier(
        /** @type {babel.types.MemberExpression} */
        tag.object
      ) && /** @type {babel.types.Identifier} */
      /** @type {babel.types.MemberExpression} */
      tag.object.name === styled;
      const isStyledCall = t.isCallExpression(tag) && t.isIdentifier(
        /** @type {babel.types.CallExpression} */
        tag.callee
      ) && /** @type {babel.types.Identifier} */
      /** @type {babel.types.CallExpression} */
      tag.callee.name === styled;
      const isAttrsCall = t.isCallExpression(tag) && t.isMemberExpression(tag.callee) && tag.callee.property.name === "attrs";
      if (isCssLiteral || isStyledLiteral || isStyledCall || isAttrsCall) {
        if (!t.isTemplateLiteral(child.node) || !t.isExpression(grandChild.node)) {
          throw new Error("Broken AST");
        }
        const currentIndex = child.node.expressions.indexOf(grandChild.node);
        return {
          parent: (
            /** @type {import("@babel/core").NodePath<import("@babel/types").TaggedTemplateExpression>} */
            parent
          ),
          currentIndex
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
var mergeCssPartExpression = (cssPartExpression, level = 0) => {
  let css = "";
  for (const { quasiCode, cssPartExpressions, selector } of cssPartExpression) {
    let cssPart = "";
    for (let i = 0; i < quasiCode.length; i++) {
      const quasi = quasiCode[i];
      cssPart += trimNewLines(quasi.code);
      const childCssParts = cssPartExpressions[i];
      if (childCssParts) {
        cssPart += `
${trimNewLines(
          mergeCssPartExpression(childCssParts, level + 1)
        )}
`;
      }
    }
    const indent = quasiCode[0]?.code.match(/^\n(  |\t)(\s*)/)?.[2] ?? "    ".repeat(level);
    const hasCss = Boolean(cssPart.trim());
    css += !hasCss ? "" : `${indent}${selector} {
${trimNewLines(cssPart)}
${indent}}
`;
  }
  return css;
};
var trimNewLines = (str) => str.replace(/^\s*\n+|\s+$/g, "");
export {
  cssLoader as default
};
//# sourceMappingURL=cssloader.js.map