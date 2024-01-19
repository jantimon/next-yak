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
 * @param {number | null} i
 * @param {"selector" | "className" | "keyframes" | "animation"} kind
 */
function localIdent(variableName, i, kind) {
  switch (kind) {
    case "selector":
      return `.${variableName}${i === null ? "" : `_${unreadableNumber(i)}`}`;
    case "className":
    case "animation":
      return `${variableName}${i === null ? "" : `_${unreadableNumber(i)}`}`;
    case "keyframes":
      return `@keyframes ${variableName}${i === null ? "" : `_${unreadableNumber(i)}`}`;
    default:
      throw new Error("unknown kind");
  }
}

/**
 * Generates a non readable number to not distract from the actual class name.
 * @param {number} i
 */
function unreadableNumber(i) {
  return i.toString(25).replace(/\d/g, (m) => (Number(m)+26).toString(36));
}

module.exports = localIdent;
