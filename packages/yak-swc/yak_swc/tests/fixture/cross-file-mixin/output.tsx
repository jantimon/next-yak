import { styled } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
// @ts-ignore
import { fonts } from "./fonts";
// @ts-ignore
import { fancy } from "./fancy";
// @ts-ignore
import { yakMixin } from "./constants.yak";
export const Button = /*YAK Extracted CSS:
.Button {
  --yak-css-import: url("./fonts:fonts:h1");
}
*/ /*#__PURE__*/ styled.button(__styleYak.Button);
export const Button2 = /*#__PURE__*/ styled.button(fonts.h1);
export const Button3 = /*YAK Extracted CSS:
.Button3 {
  color: green;
}
*/ /*#__PURE__*/ styled.button(__styleYak.Button3, fonts.h1);
export const Button4 = /*YAK Extracted CSS:
.Button4 {
  --yak-css-import: url("./fonts:fonts:h1")
;
  color: green;
}
*/ /*#__PURE__*/ styled.button(__styleYak.Button4, fonts.underline);
export const Button5 = /*YAK Extracted CSS:
.Button5 {
  color: green;
}
*/ /*#__PURE__*/ styled.button(__styleYak.Button5, fonts.h1, fancy);
export const Button6 = /*YAK Extracted CSS:
.Button6 {
  &:hover {
    --yak-css-import: url("./constants.yak:yakMixin");
  }
  color: green;
}
*/ /*#__PURE__*/ styled.button(__styleYak.Button6);
