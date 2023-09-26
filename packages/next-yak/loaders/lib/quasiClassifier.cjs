/// @ts-check
const stripCssComments = require("./stripCssComments.cjs");

/**
 * Checks a quasiValue and returns its type
 * 
 * - empty: no expressions, no text
 * - partialStart: starts with a `{`
 * - partialEnd: does not end with a `}` or `;`
 * 
 * @param {string} quasiValue 
 * @returns {{
 *  empty: boolean,
 *  partialStart: boolean,
 *  partialEnd: boolean,
 * }}
 */
module.exports = function quasiClassifier(quasiValue) {
    const trimmed = stripCssComments(quasiValue).trim();
    if (trimmed === "") {
        return {
            empty: true,
            partialStart: false,
            partialEnd: false,
        }
    }

    return {
        empty: false,
        partialStart: trimmed.startsWith("{"),
        partialEnd: !trimmed.endsWith("}") && !trimmed.endsWith(";"),
    }
}