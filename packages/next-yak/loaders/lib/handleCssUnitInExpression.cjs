/**
 * Extracts the css unit from a css string and checks if it is a valid CSS unit
 *
 * @param {string} cssUnit
 * @param {babel.types.Expression} expression
 * @param {Set<string>} runtimeInternalHelpers
 * @param {import("@babel/types")} t
 */
const handleCssUnitInExpression = (
  cssUnit,
  expression,
  runtimeInternalHelpers,
  t
) => {
  if (
    expression.type === "ArrowFunctionExpression" ||
    expression.type === "NumericLiteral" ||
    expression.type === "BinaryExpression" ||
    expression.type === "Identifier"
  ) {
    if (expression.type === "ArrowFunctionExpression") {
      /**
       * Functions that are not directly returing a value are wrapped with a helper function:
       * (originalFunction, unit) => (...args) => originalFunction(...args) + unit;
       */
      if (expression.body.type === "BlockStatement") {
        const callExpression = t.callExpression(
          t.identifier("__yak_unitPostFix"),
          [expression, t.stringLiteral(cssUnit)]
        );
        runtimeInternalHelpers.add("__yak_unitPostFix");
        return callExpression;
      } else {
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
    }

    const cssUnitLiteral = t.stringLiteral(cssUnit);
    const binaryExpression = t.binaryExpression(
      "+",
      expression,
      cssUnitLiteral
    );
    return binaryExpression;
  }

  // No unit found
  return expression;
};

module.exports = handleCssUnitInExpression;
