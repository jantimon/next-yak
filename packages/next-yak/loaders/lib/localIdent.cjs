/**
 * Generates local names used in the generated CSS.
 * It is also used in the js code to reference the generated CSS.
 * 
 * E.g.:
 * ```ts
 * localIdent(1, "selector") // ".yak-1"
 * localIdent(1, "className") // "yak-1"
 * localIdent(1, "keyframes") // "@keyframes yak-animation-1"
 * localIdent(1, "animation") // "yak-animation-1"
 * ```
 * 
 * @param {number} i 
 * @param {"selector" | "className" | "keyframes" | "animation"} kind 
 */
function localIdent(i, kind) {
    switch (kind) {
        case "selector":
            return `.yak_${i}`;
        case "className":
            return `yak_${i}`;
        case "keyframes":
            return `@keyframes yak_animation_${i}`;
        case "animation":
            return `yak_animation_${i}`;
        default:
            throw new Error("unknown kind");
    }
}

module.exports = localIdent;