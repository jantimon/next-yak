/**
 * Generates local names used in the generated CSS.
 * It is also used in the js code to reference the generated CSS.
 *
 * E.g.:
 * ```ts
 * localIdent("myVariableName", 1, "selector") // ".myVariableName_1"
 * localIdent("myVariableName", 1, "className") // "myVariableName_1"
 * localIdent("myVariableName", 1, "keyframes") // "@keyframes myVariableName_1"
 * localIdent("myVariableName", 1, "animation") // "myVariableName_1"
 * ```
 *
 * @param {string} variableName
 * @param {number} i
 * @param {"selector" | "className" | "keyframes" | "animation"} kind
 */
function localIdent(variableName, i, kind) {
  switch (kind) {
    case "selector":
      return `.${variableName}_${i}`;
    case "className":
    case "animation":
      return `${variableName}_${i}`;
    case "keyframes":
      return `@keyframes ${variableName}_${i}`;
    default:
      throw new Error("unknown kind");
  }
}

module.exports = localIdent;
