/**
 * Extracts the css unit from a css string and checks if it is a valid CSS unit
 *
 * @param {string} cssUnit
 * @param {babel.types.Expression} expression
 * @param {Set<string>} runtimeInternalHelpers
 * @param {import("@babel/types")} t
 */
const appendCssUnitToExpressionValue = (
  cssUnit,
  expression,
  runtimeInternalHelpers,
  t
) => {
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
  } else if (
    expression.type === "NumericLiteral" ||
    expression.type === "BinaryExpression" ||
    expression.type === "Identifier"
  ) {
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
    t.stringLiteral(cssUnit),
  ]);
  runtimeInternalHelpers.add("__yak_unitPostFix");
  return callExpression;
};

module.exports = appendCssUnitToExpressionValue;
