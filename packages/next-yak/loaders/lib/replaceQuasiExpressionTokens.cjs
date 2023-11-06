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
 *
 * @param {import("@babel/types").TemplateLiteral} quasi
 * @param {Record<string, unknown>} replaces
 * @param {import("@babel/types")} t
 */
module.exports = function replaceTokensInQuasiExpressions(quasi, replaces, t) {
  for (let i = 0; i < quasi.expressions.length; i++) {
    const expression = quasi.expressions[i];
    // replace direct identifiers e.g. ${query}
    if (t.isIdentifier(expression)) {
      if (!(expression.name in replaces)) {
        continue;
      }
      const replacement = replaces[expression.name];
      replaceExpressionAndMergeQuasis(quasi, i, replacement);
      i--;
    } 
    // replace member expressions e.g. ${query.xs}
    // replace deeply nested member expressions e.g. ${query.xs.min}
    else if (t.isMemberExpression(expression) && t.isIdentifier(expression.object)) {
      if (!(expression.object.name in replaces)) {
        continue;
      }
      /** @type {import("@babel/types").Expression} */
      let object = expression;
      /** @type {any} */
      let value = replaces[expression.object.name];
      while (t.isMemberExpression(object)) {
        if (!t.isIdentifier(object.property)) {
          break;
        }
        if (typeof value !== "object" || value === null) {
          break;
        }
        value = value[object.property.name];
        object = object.object;
      }
      replaceExpressionAndMergeQuasis(quasi, i, value);
      i--;
    }
  }
}

/**
 * Replace tokens with predefined values
 * @param {import("@babel/types").TemplateLiteral} quasi
 * @param {number} expressionIndex
 * @param {unknown} replacement
 */
function replaceExpressionAndMergeQuasis(quasi, expressionIndex, replacement) {
  const stringReplacement = typeof replacement === "string" ? replacement : replacement == null ? "" : JSON.stringify(replacement);
  quasi.expressions.splice(expressionIndex, 1);
  quasi.quasis[expressionIndex].value.raw += stringReplacement + quasi.quasis[expressionIndex + 1].value.raw;
  quasi.quasis[expressionIndex].value.cooked += stringReplacement + quasi.quasis[expressionIndex + 1].value.cooked;
  quasi.quasis.splice(expressionIndex + 1, 1);
}