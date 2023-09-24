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
 * @param {Record<string, Record<string, string>>} replaces
 * @param {import("@babel/types")} t
 */
module.exports = function replaceTokensInQuasiExpressions(quasi, replaces, t) {
  for (let i = 0; i < quasi.expressions.length; i++) {
    const expression = quasi.expressions[i];
    if (!t.isMemberExpression(expression)) {
      continue;
    }
    const object = expression.object;
    if (!t.isIdentifier(object)) {
      continue;
    }
    const property = expression.property;
    if (!t.isIdentifier(property)) {
      continue;
    }
    const objectName = object.name;
    const propertyName = property.name;
    const replacement = replaces[objectName]?.[propertyName];
    if (!replacement) {
      continue;
    }
    // delete expression and append replacement to quasi value
    quasi.expressions.splice(i, 1);
    quasi.quasis[i].value.raw += replacement + quasi.quasis[i + 1].value.raw;
    quasi.quasis[i].value.cooked +=
      replacement + quasi.quasis[i + 1].value.cooked;
    // delete next quasi
    quasi.quasis.splice(i + 1, 1);
    i--;
  }
};
