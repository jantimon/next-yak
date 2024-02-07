/**
 * Extracts the css unit from a css string and checks if it is a valid CSS unit
 *
 * @param {string} inputStr
 */
function extractCssUnit(inputStr) {
  // Regex to match units composed of [a-z] or exactly "%"
  const regex = /^([a-z]+|%$)/;

  // Clean the input string by removing whitespace, line breaks, and semicolons
  const [firstCssExpression] = inputStr.trim().split(";");

  // Check if the cleaned input is a valid CSS unit
  const match = firstCssExpression.match(regex);

  if (match && match[1]) {
    // Return the found unit
    return match[1];
  }

  return null;
}

module.exports = extractCssUnit;
