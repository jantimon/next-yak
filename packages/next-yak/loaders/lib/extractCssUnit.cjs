const validCssUnits = {
  absolute: ["cm", "mm", "Q", "in", "pc", "pt", "px"],
  relative: [
    "em",
    "ex",
    "ch",
    "rem",
    "lh",
    "rlh",
    "vw",
    "vh",
    "vmin",
    "vmax",
    "vb",
    "vi",
  ],
  percentage: ["%"],
  flexible: ["fr"],
  other: ["cap", "ic"],
};

/**
 * Extracts the css unit from a css string and checks if it is a valid CSS unit
 *
 * @param {string} inputStr
 */
function extractCssUnit(inputStr) {
  const allValidUnits = Object.values(validCssUnits).flat();

  // Clean the input string by removing whitespace, line breaks, and semicolons
  const cleanedInput = inputStr.trim().replace(/;|\n/g, "");

  // Check if the cleaned input is a valid CSS unit
  const foundUnit = allValidUnits.find((unit) => cleanedInput === unit);

  if (foundUnit) {
    return foundUnit;
  }

  return null;
}

module.exports = extractCssUnit;
