/**
 * Extracts the css unit from a css string and checks if it is a valid CSS unit
 *
 * @param {babel.types.TemplateElement} nextQuasi
 * @param {babel.types.Expression} expression
 * @param {import("@babel/types")} t
 */
const handleCssUnitInExpression = (nextQuasi, expression, t) => {
  const cssUnit = nextQuasi && extractCssUnit(nextQuasi.value.raw);
  if (
    expression.type === "NumericLiteral" ||
    expression.type === "Identifier"
  ) {
    const cssUnit = nextQuasi && extractCssUnit(nextQuasi.value.raw);
    if (cssUnit) {
      const cssUnitLiteral = t.stringLiteral(cssUnit);
      const binaryExpression = t.binaryExpression(
        "+",
        expression,
        cssUnitLiteral
      );
      return {
        needsUnitPostFixImport: false,
        expression: binaryExpression,
      };
    }
  } else if (expression.type === "ArrowFunctionExpression") {
    const cssUnit = nextQuasi && extractCssUnit(nextQuasi.value.raw);
    if (cssUnit) {
      const callExpression = t.callExpression(
        t.identifier("__yak_unitPostFix"), // helperFn function name
        [expression, t.stringLiteral(cssUnit)]
      );
      return {
        needsUnitPostFixImport: true,
        expression: callExpression,
      };
    }
  } else if (cssUnit) {
    const cssUnitLiteral = t.stringLiteral(cssUnit);
    const binaryExpression = t.binaryExpression(
      "+",
      expression,
      cssUnitLiteral
    );
    return {
      needsUnitPostFixImport: false,
      expression: binaryExpression,
    };
  }

  // no unit found
  return {
    needsUnitPostFixImport: false,
    expression,
  };
};

/**
 * Extracts the css unit from a css string and checks if it is a valid CSS unit
 *
 * @param {string} quasi
 */
function extractCssUnit(quasi) {
  // Regex to match units composed of [a-z] or exactly "%"
  const regex = /^([a-z]+|%)/;

  // Clean the input string by removing whitespace, line breaks, and semicolons
  const [firstCssString] = quasi.trim().split(";");

  // Check if the cleaned input is a valid CSS unit
  const match = firstCssString.match(regex);

  if (match && match[1]) {
    // Return the found unit
    return match[1];
  }

  return null;
}

module.exports = handleCssUnitInExpression;
