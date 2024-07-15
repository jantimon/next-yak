import type babelTypes from "@babel/types";

/**
 * Extracts the css unit from a css string and checks if it is a valid CSS unit
 */
const appendCssUnitToExpressionValue = (
  cssUnit: string,
  expression: babelTypes.Expression,
  runtimeInternalHelpers: Set<string>,
  t: typeof babelTypes,
) => {
  if (
    expression.type === "NumericLiteral" ||
    expression.type === "StringLiteral"
  ) {
    const cssUnitLiteral = t.stringLiteral(cssUnit);
    const binaryExpression = t.binaryExpression(
      "+",
      expression,
      cssUnitLiteral,
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
