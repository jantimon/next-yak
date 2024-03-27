import type { types as babelTypes } from "@babel/core";

/**
 * Extracts the css unit from a css string and checks if it is a valid CSS unit
 */
const appendCssUnitToExpressionValue = (
  cssUnit: string,
  expression: babelTypes.Expression,
  runtimeInternalHelpers: Set<string>,
  t: typeof babelTypes
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

export default appendCssUnitToExpressionValue;
