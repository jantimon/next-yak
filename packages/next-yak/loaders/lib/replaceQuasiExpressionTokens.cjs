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
 * @param {(name: string) => unknown} replacer
 * @param {import("@babel/types")} t
 */
module.exports = function replaceTokensInQuasiExpressions(quasi, replacer, t) {
  for (let i = 0; i < quasi.expressions.length; i++) {
    const expression = quasi.expressions[i];
    // find the value to replace the expression with
    const replacement = getReplacement(expression, replacer, t);
    const replacementValue = replacement && getReplacementValueForExpression(
      expression,
      replacement,
      t
    );
    if (replacementValue !== false) {
      replaceExpressionAndMergeQuasis(quasi, i, replacementValue);
      i--;
    } 
  }
};

/**
 * Replace tokens with predefined values
 * @param {import("@babel/types").TemplateLiteral} quasi
 * @param {number} expressionIndex
 * @param {unknown} replacement
 */
function replaceExpressionAndMergeQuasis(quasi, expressionIndex, replacement) {
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
 *   - `x` -> x
 *   - `x.y` -> x
 *   - `x[0]` -> x
 *   - `x()` -> x
 *   - `x.y()` -> x
 *
 * @param {import("@babel/types").Expression | import("@babel/types").TSType} expression
 * @param {(name: string) => unknown} replacer
 * @param {import("@babel/types")} t
 */
function getReplacement(expression, replacer, t) {
  if (t.isIdentifier(expression)) {
    return replacer(expression.name);
  }
  if (t.isMemberExpression(expression) && t.isIdentifier(expression.object)) {
    return replacer(expression.object.name);
  }
  if (t.isCallExpression(expression) && t.isIdentifier(expression.callee)) {
    return replacer(expression.callee.name);
  }
  if (
    t.isCallExpression(expression) &&
    t.isMemberExpression(expression.callee) &&
    t.isIdentifier(expression.callee.object)
  ) {
    return replacer(expression.callee.object.name);
  }
  return false;
}

/**
 * The value for an expression can be a simple identifier e.g.
 * import { x } from "demo.yak";
 * console.log(x);
 *
 * However it could also be a nested value e.g.
 * import { x } from "demo.yak";
 * console.log(x.persons[0].hobbies["art"].name);
 *
 * This function recursively searches for the value of the expression
 * or returns false if the value is not found
 *
 * @param {import("@babel/types").Expression | import("@babel/types").TSType} expression
 * @param {any} value
 * @param {import("@babel/types")} t
 */
function getReplacementValueForExpression(expression, value, t) {
  if (value === null || value === undefined || typeof value === "boolean") {
    return false;
  }
  if (t.isIdentifier(expression)) {
    if (typeof value === "string" || typeof value === "number") {
      return value;
    }
  }

  if (typeof value === "object" && t.isMemberExpression(expression)) {
    if (expression.computed) {
      // e.g. x[0]
      if (t.isNumericLiteral(expression.property)) {
        return getReplacementValueForExpression(
          expression.object,
          value[expression.property.value],
          t
        );
      }
      // e.g. x["0"]
      else if (t.isStringLiteral(expression.property)) {
        return getReplacementValueForExpression(
          expression.object,
          value[expression.property.value],
          t
        );
      } else {
        // right now we don't support dynamic property names
        // e.g. x[y]
        return false;
      }
    }
    // e.g. x.y
    else if (t.isIdentifier(expression.property)) {
      return getReplacementValueForExpression(
        expression.object,
        value[expression.property.name],
        t
      );
    }
  }
  return false;
}
