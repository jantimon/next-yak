"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

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
var init_stripCssComments = __esm({
  "loaders/lib/stripCssComments.ts"() {
    "use strict";
  }
});

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
var init_quasiClassifier = __esm({
  "loaders/lib/quasiClassifier.ts"() {
    "use strict";
    init_stripCssComments();
  }
});

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
var init_replaceQuasiExpressionTokens = __esm({
  "loaders/lib/replaceQuasiExpressionTokens.ts"() {
    "use strict";
  }
});

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
var init_hash = __esm({
  "loaders/lib/hash.ts"() {
    "use strict";
  }
});

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
var init_localIdent = __esm({
  "loaders/lib/localIdent.ts"() {
    "use strict";
  }
});

// loaders/lib/getStyledComponentName.ts
var getStyledComponentName, getStyledComponentName_default;
var init_getStyledComponentName = __esm({
  "loaders/lib/getStyledComponentName.ts"() {
    "use strict";
    getStyledComponentName = (taggedTemplateExpressionPath) => {
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
    getStyledComponentName_default = getStyledComponentName;
  }
});

// loaders/lib/appendCssUnitToExpressionValue.ts
var appendCssUnitToExpressionValue, appendCssUnitToExpressionValue_default;
var init_appendCssUnitToExpressionValue = __esm({
  "loaders/lib/appendCssUnitToExpressionValue.ts"() {
    "use strict";
    appendCssUnitToExpressionValue = (cssUnit, expression, runtimeInternalHelpers, t) => {
      if (expression.type === "ArrowFunctionExpression") {
        if (expression.body.type !== "BlockStatement") {
          const newBody = t.binaryExpression(
            "+",
            t.parenthesizedExpression(expression.body),
            t.stringLiteral(cssUnit)
          );
          const newArrowFunction = t.arrowFunctionExpression(
            expression.params,
            newBody
          );
          return newArrowFunction;
        }
      } else if (expression.type === "NumericLiteral" || expression.type === "BinaryExpression" || expression.type === "Identifier") {
        const cssUnitLiteral = t.stringLiteral(cssUnit);
        const binaryExpression = t.binaryExpression(
          "+",
          expression,
          cssUnitLiteral
        );
        return binaryExpression;
      }
      const callExpression = t.callExpression(t.identifier("__yak_unitPostFix"), [
        expression,
        t.stringLiteral(cssUnit)
      ]);
      runtimeInternalHelpers.add("__yak_unitPostFix");
      return callExpression;
    };
    appendCssUnitToExpressionValue_default = appendCssUnitToExpressionValue;
  }
});

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
var getStyledComponentName2;
var init_getCssName = __esm({
  "loaders/lib/getCssName.ts"() {
    "use strict";
    getStyledComponentName2 = (taggedTemplateExpressionPath) => {
      const variableDeclaratorPath = taggedTemplateExpressionPath.findParent(
        (path) => path.isVariableDeclarator()
      );
      if (!variableDeclaratorPath || !("id" in variableDeclaratorPath.node) || variableDeclaratorPath.node.id?.type !== "Identifier") {
        return null;
      }
      return variableDeclaratorPath.node.id.name;
    };
  }
});

// loaders/lib/getConstantValues.ts
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
var getConstantName;
var init_getConstantValues = __esm({
  "loaders/lib/getConstantValues.ts"() {
    "use strict";
    getConstantName = (expression, t) => {
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
  }
});

// loaders/babel-yak-plugin.ts
var babel_yak_plugin_exports = {};
__export(babel_yak_plugin_exports, {
  InvalidPositionError: () => InvalidPositionError,
  default: () => babel_yak_plugin_default
});
function babel_yak_plugin_default(babel2, options) {
  const { replaces } = options;
  const rootContext = options.rootContext || process.cwd();
  const { types: t } = babel2;
  const hashedFilePaths = /* @__PURE__ */ new WeakMap();
  const getHashedFilePath = (file) => {
    const fromCache = hashedFilePaths.get(file);
    if (fromCache) {
      return fromCache;
    }
    const resourcePath = file.opts.filename;
    if (!resourcePath) {
      throw new Error("resourcePath is undefined");
    }
    const relativePath = (0, import_node_path.relative)(
      rootContext,
      (0, import_node_path.resolve)(rootContext, resourcePath)
    );
    const hashedFilePath = murmurhash2_32_gc(relativePath);
    hashedFilePaths.set(file, hashedFilePath);
    return hashedFilePath;
  };
  const getYakExpressionType = (tag, localVarNames) => {
    if (t.isIdentifier(tag)) {
      if (tag.name === localVarNames.css) {
        return "cssLiteral";
      }
      if (tag.name === localVarNames.keyframes) {
        return "keyframesLiteral";
      }
    }
    if (t.isMemberExpression(tag) && t.isIdentifier(tag.object) && tag.object.name === localVarNames.styled) {
      return "styledLiteral";
    }
    if (t.isCallExpression(tag) && t.isIdentifier(tag.callee) && tag.callee.name === localVarNames.styled) {
      return "styledCall";
    }
    if (t.isCallExpression(tag) && t.isMemberExpression(tag.callee) && t.isIdentifier(tag.callee.property) && tag.callee.property.name === "attrs") {
      return "attrsCall";
    }
    return "unknown";
  };
  return {
    name: "next-yak",
    pre() {
      this.localVarNames = {
        css: void 0,
        styled: void 0,
        keyframes: void 0
      };
      this.isImportedInCurrentFile = false;
      this.classNameCount = 0;
      this.varIndex = 0;
      this.variableNameToStyledCall = /* @__PURE__ */ new Map();
      this.topLevelConstBindings = /* @__PURE__ */ new Map();
      this.runtimeInternalHelpers = /* @__PURE__ */ new Set();
    },
    visitor: {
      Program: {
        enter(path, state) {
          this.topLevelConstBindings = getConstantValues(path, t);
        },
        exit(path, state) {
          if (this.runtimeInternalHelpers.size && this.yakImportPath) {
            const newImport = t.importDeclaration(
              [...this.runtimeInternalHelpers].map(
                (helper) => t.importSpecifier(t.identifier(helper), t.identifier(helper))
              ),
              t.stringLiteral("next-yak/runtime-internals")
            );
            this.yakImportPath.insertAfter(newImport);
          }
        }
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
        const fileName = (0, import_node_path.basename)(filePath).replace(/\.tsx?/, "");
        path.insertAfter(
          t.importDeclaration(
            [t.importDefaultSpecifier(t.identifier("__styleYak"))],
            t.stringLiteral(
              `./${fileName}.yak.module.css!=!./${fileName}?./${fileName}.yak.module.css`
            )
          )
        );
        this.yakImportPath = path;
        node.specifiers.forEach((specifier) => {
          if (!("imported" in specifier) || !specifier.imported || !t.isIdentifier(specifier.imported)) {
            return;
          }
          const importSpecifier = specifier.imported;
          const localSpecifier = specifier.local || importSpecifier;
          if (importSpecifier.name === "styled" || importSpecifier.name === "css" || importSpecifier.name === "keyframes") {
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
        const expressionType = getYakExpressionType(tag, this.localVarNames);
        if (expressionType === "unknown") {
          return;
        }
        const styledApi = expressionType === "styledLiteral" || expressionType === "styledCall" || expressionType === "attrsCall";
        replaceTokensInQuasiExpressions(
          path.node.quasi,
          (name) => {
            if (name in replaces) {
              return replaces[name];
            }
            const styledCall2 = this.variableNameToStyledCall.get(name);
            if (styledCall2) {
              const { wasAdded, className, astNode } = styledCall2;
              if (!wasAdded) {
                styledCall2.wasAdded = true;
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
        const variableName = styledApi || expressionType === "keyframesLiteral" ? getStyledComponentName_default(path) : expressionType === "cssLiteral" ? getCssName(path) : null;
        const identifier = localIdent(
          variableName || "_yak",
          variableName && expressionType !== "cssLiteral" ? null : this.classNameCount++,
          expressionType === "keyframesLiteral" ? "animation" : "className"
        );
        let literalSelectorWasUsed = false;
        const classNameExpression = t.memberExpression(
          t.identifier("__styleYak"),
          t.identifier(identifier)
        );
        const newArguments = /* @__PURE__ */ new Set();
        const quasis = path.node.quasi.quasis;
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
          (expression) => t.isExpression(expression)
        );
        let cssVariablesInlineStyle;
        if (quasiTypes.length > 1 || quasiTypes.length === 1 && !quasiTypes[0].empty) {
          newArguments.add(classNameExpression);
          literalSelectorWasUsed = true;
        }
        let wasInsideCssValue = false;
        for (let i = 0; i < quasis.length; i++) {
          const expression = expressions[i];
          const type = quasiTypes[i];
          if (type.unknownSelector) {
            const expression2 = expressions[i - 1];
            if (!expression2) {
              throw new Error(`Invalid css "${quasis[i].value.raw}"`);
            }
            throw new InvalidPositionError(
              "Expressions are not allowed as selectors",
              expression2,
              this.file
            );
          }
          if (expression && (type.unknownSelector || type.insideCssValue || type.empty && wasInsideCssValue)) {
            wasInsideCssValue = true;
            const variableName2 = getConstantName(expression, t);
            if (variableName2 && this.topLevelConstBindings.has(variableName2)) {
              const value = this.topLevelConstBindings.get(variableName2);
              if (value !== null) {
                continue;
              }
              throw new InvalidPositionError(
                "Possible constant used as runtime value for a css variable\nPlease move the constant to a .yak import or use an arrow function\ne.g.:\n|   import { primaryColor } from './foo.yak'\n|   const MyStyledDiv = styled.div`color: ${primaryColor};`",
                expression,
                this.file
              );
            }
            if (!cssVariablesInlineStyle) {
              cssVariablesInlineStyle = t.objectExpression([]);
            }
            const cssVariableName = `--\u{1F9AC}${getHashedFilePath(state.file)}${this.varIndex++}`;
            const cssUnit = quasis[i + 1]?.value.raw.match(/^([a-z]+|%)/i)?.[0];
            const transformedExpression = cssUnit ? appendCssUnitToExpressionValue_default(
              cssUnit,
              expression,
              this.runtimeInternalHelpers,
              t
            ) : expression;
            cssVariablesInlineStyle.properties.push(
              t.objectProperty(
                t.stringLiteral(cssVariableName),
                transformedExpression
              )
            );
          } else {
            wasInsideCssValue = false;
            if (expression) {
              if (quasiTypes[i].currentNestingScopes.length > 0) {
                const isReferenceToMixin = t.isIdentifier(expression) || t.isCallExpression(expression);
                if (isReferenceToMixin) {
                  throw new InvalidPositionError(
                    `Mixins are not allowed inside nested selectors`,
                    expression,
                    this.file,
                    "Use an inline css literal instead or move the selector into the mixin"
                  );
                }
              }
              newArguments.add(expression);
            }
          }
        }
        if (cssVariablesInlineStyle) {
          newArguments.add(
            t.objectExpression([
              t.objectProperty(
                t.stringLiteral(`style`),
                cssVariablesInlineStyle
              )
            ])
          );
        }
        const styledCall = t.callExpression(tag, [...newArguments]);
        path.replaceWith(styledCall);
        if (styledApi && variableName) {
          this.variableNameToStyledCall.set(variableName, {
            wasAdded: literalSelectorWasUsed,
            className: identifier,
            astNode: styledCall
          });
        }
      }
    }
  };
}
var import_node_path, InvalidPositionError;
var init_babel_yak_plugin = __esm({
  "loaders/babel-yak-plugin.ts"() {
    "use strict";
    init_quasiClassifier();
    init_replaceQuasiExpressionTokens();
    init_hash();
    import_node_path = require("path");
    init_localIdent();
    init_getStyledComponentName();
    init_appendCssUnitToExpressionValue();
    init_getCssName();
    init_getConstantValues();
    InvalidPositionError = class extends Error {
      /**
       * Add the expression code that caused the error to the message
       * for better debugging
       */
      constructor(message, expression, file, recommendedFix) {
        let errorText = message;
        const line = expression.loc?.start.line ?? -1;
        if (line !== -1) {
          errorText = `line ${line}: ${errorText}`;
        }
        if (expression.start && expression.end) {
          errorText += `
found: \${${file.code.slice(
            expression.start,
            expression.end
          )}}`;
        }
        if (recommendedFix) {
          errorText += `
${recommendedFix}`;
        }
        super(errorText);
      }
    };
  }
});

// loaders/tsloader.ts
var tsloader_exports = {};
__export(tsloader_exports, {
  default: () => tsloader
});
module.exports = __toCommonJS(tsloader_exports);
var import_core = __toESM(require("@babel/core"), 1);

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

// loaders/tsloader.ts
init_babel_yak_plugin();
async function tsloader(source) {
  if (!source.includes("next-yak")) {
    return source;
  }
  const callback = this.async();
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
  let result = null;
  try {
    result = import_core.default.transformSync(source, {
      filename: resourcePath,
      configFile: false,
      plugins: [
        [
          "@babel/plugin-syntax-typescript",
          { isTSX: this.resourcePath.endsWith(".tsx") }
        ],
        [
          await Promise.resolve().then(() => (init_babel_yak_plugin(), babel_yak_plugin_exports)).then((m) => m.default),
          {
            replaces,
            rootContext
          }
        ]
      ]
    });
  } catch (error) {
    if (error instanceof InvalidPositionError) {
      return callback(new Error(error.message));
    }
    return callback(new Error("babel transform failed"));
  }
  if (!result?.code) {
    return callback(new Error("babel transform failed"));
  }
  return callback(null, result.code, result.map);
}
//# sourceMappingURL=tsloader.cjs.map