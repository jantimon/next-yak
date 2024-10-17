import { styled } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
// @ts-ignore
import { colors } from "./colors";
// @ts-ignore
import { fonts } from "./fonts";
// @ts-ignore
import { sizes } from "./sizes";
export const Button = /*YAK Extracted CSS:
.Button {
  font-size: --yak-css-import: url("./fonts:fonts:sm",mixin);
  color: --yak-css-import: url("./colors:colors:dark:primary",mixin);
  background-color: --yak-css-import: url("./colors:colors:light:full%20opacity",mixin);
  height: --yak-css-import: url("./sizes:sizes:0",mixin);
}
*/ /*#__PURE__*/ styled.button(__styleYak.Button);
