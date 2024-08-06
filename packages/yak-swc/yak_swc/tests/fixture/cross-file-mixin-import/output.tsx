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
export const Button2 = /*YAK Extracted CSS:
.Button2 {
  --yak-css-import: url("./fonts:fonts:h1");
}
*/ /*#__PURE__*/ styled.button(__styleYak.Button2, fonts.h1);
export const Button3 = /*YAK Extracted CSS:
.Button3 {
  --yak-css-import: url("./fonts:fonts:h1");
  color: green;
}
*/ /*#__PURE__*/ styled.button(__styleYak.Button3, fonts.h1);
export const Button4 = /*YAK Extracted CSS:
.Button4 {
  --yak-css-import: url("./fonts:fonts:h1")
--yak-css-import: url("./fonts:fonts:underline");
  color: green;
}
*/ /*#__PURE__*/ styled.button(__styleYak.Button4, fonts.underline);
export const Button5 = /*YAK Extracted CSS:
.Button5 {
  --yak-css-import: url("./fonts:fonts:h1");
  --yak-css-import: url("./fancy:fancy:fancy:mixins:specialEffect");
  color: green;
}
*/ /*#__PURE__*/ styled.button(__styleYak.Button5, fonts.h1, fancy.mixins.specialEffect);
export const Button6 = /*YAK Extracted CSS:
.Button6 {
  &:hover {
    --yak-css-import: url("./constants.yak:yakMixin");
  }
  --yak-css-import: url("./fancy:fancy:fancy:mixins:specialEffect")
;
  color: green;
}
*/ /*#__PURE__*/ styled.button(__styleYak.Button6, fancy.mixins.specialEffect);