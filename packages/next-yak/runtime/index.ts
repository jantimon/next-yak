export { css, type StaticCSSProp } from "./cssLiteral.js";
export { styled } from "./styled.js";
export { atoms } from "./atoms.js";
export { keyframes } from "./keyframes.js";

// the following export is not relative as "next-yak/context"
// links to one file for react server components and
// to another file for classic react components
export { useTheme, YakThemeProvider } from "next-yak/context";

export type { YakTheme } from "./context/index.d.ts";
