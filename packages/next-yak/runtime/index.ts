/**
 * By default, the runtime exports the staticCss
 * function for all css`` literals.
 *
 * For all non-*.yak files the babel plugin will replace the
 * css`` literal with the actual cssLiteral() function
 */
export { __cssYak } from "./cssLiteral.js";
export type __cssYak = never;
export { css } from "./staticCssLiteral.js";

export { styled } from "./styled.js";
export { atoms } from "./atoms.js";
export { keyframes } from "./keyframes.js";

// the following export is not relative as "next-yak/context"
// links to one file for react server components and
// to another file for classic react components
export { useTheme, YakThemeProvider } from "next-yak/context";

export type { YakTheme } from "./context/index.d.ts";
