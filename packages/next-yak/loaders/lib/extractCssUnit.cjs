/**
 * Extracts the css unit from a css string and checks if it is a valid CSS unit
 *
 * @param {string} quasi
 */
function extractCssUnit(quasi) {
  const match = quasi.match(/\s|([a-z%]+)(?=;|\s|\))/);
  return match && match[1] ? match[1] : null;
}

module.exports = extractCssUnit;
