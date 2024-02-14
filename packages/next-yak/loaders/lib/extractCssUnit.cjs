/**
 * Extracts the css unit from the start of a css quasi e.g.:
 *
 * ```js
 *   // in the AST this code would have two quasis: "margin: " and "px 0 14px;"
 *   css`margin: ${size}px 0 14rem;` 
 * ```
 *
 * @param {string} quasi
 */
function extractCssUnit(quasi) {
  const match = quasi.match(/\s|([a-z%]+)(?=;|\s|\))/);
  return match && match[1] ? match[1] : null;
}

module.exports = extractCssUnit;
