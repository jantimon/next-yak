import type { NodePath, types as babelTypes } from "@babel/core";

/**
 * Replace tokens with predefined values e.g.
 *
 * ```js
 *  css`
 *    color: red;
 *    ${query.xs} {
 *      color: blue;
 *   }
 * `
 *
 * ```
 * becomes
 * ```js
 * css`
 *  color: red;
 *  @media (min-width: 0px) {
 *    color: blue;
 * }
 * `
 * ```
 */
export default function replaceTokensInQuasiExpressions(
  quasi: babelTypes.TemplateLiteral,
  replacer: (name: string) => unknown,
  t: typeof babelTypes
) {
  // Iterate over the expressions in reverse order
  // so removing items won't affect the index of the next item
  for (let i = quasi.expressions.length - 1; i >= 0; i--) {
    const expression = quasi.expressions[i];
    // break the expression into parts
    // e.g. x.y.z -> ["x", "y", "z"]
    const parts = getExpressionParts(expression, t);
    // find the replacement for the expression
    const replacement = parts && replacer(parts[0]);
    // if it is a nested value, find the value of the expression
    // e.g. x.y.z -> find the value of z
    const replacementValue =
      replacement && getReplacementValue(replacement, parts);
    if (replacementValue !== false && replacementValue !== null) {
      replaceExpressionAndMergeQuasis(quasi, i, replacementValue);
    }
  }
}

/**
 * Replace tokens with predefined values
 */
function replaceExpressionAndMergeQuasis(
  quasi: babelTypes.TemplateLiteral,
  expressionIndex: number,
  replacement: unknown
) {
  const stringReplacement =
    typeof replacement === "string"
      ? replacement
      : replacement == null
      ? ""
      : JSON.stringify(replacement);
  quasi.expressions.splice(expressionIndex, 1);
  quasi.quasis[expressionIndex].value.raw +=
    stringReplacement + quasi.quasis[expressionIndex + 1].value.raw;
  quasi.quasis[expressionIndex].value.cooked +=
    stringReplacement + quasi.quasis[expressionIndex + 1].value.cooked;
  quasi.quasis.splice(expressionIndex + 1, 1);
}

/**
 * Find the replacement for the expression
 *
 * searches for:
 *   - `x` -> ["x"]
 *   - `x.y` -> ["x", "y"]
 *   - `x[0]` -> ["x", 0]
 *   - `x()` -> ["x"]
 *   - `x.y()` -> ["x", "y"]
 *   - (1 + 2) -> null
 */
function getExpressionParts(
  expression: babelTypes.Expression | babelTypes.TSType,
  t: typeof babelTypes
) {
  let currentExpression = expression;
  /** @type {string[]} */
  const tokens = [];
  while (currentExpression) {
    // e.g. x
    if (t.isIdentifier(currentExpression)) {
      tokens.unshift(currentExpression.name);
      break;
    }
    // e.g. x.y
    if (t.isMemberExpression(currentExpression)) {
      if (
        currentExpression.computed === false &&
        t.isIdentifier(currentExpression.property)
      ) {
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

/**
 * Get the value of the replacement
 *
 * e.g. for `replacement.x.y[0]` and `replacement = { x: { y: [42] } }`
 * parts = ["replacement", "x", "y", 0]
 * --> 42
 */
function getReplacementValue(replacement: any, parts: string[]) {
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
