/**
 * Extracts the css unit from a css string and checks if it is a valid CSS unit
 *
 * @param {string} quasi
 */
function extractCssUnit(quasi) {
  // Regex to match units composed of [a-z] or exactly "%"
  const regex = /^([a-z]+|%$)/;

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

module.exports = extractCssUnit;
