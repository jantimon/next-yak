import { styled, css, __yak_button } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
export const ThemedButton = /*YAK Extracted CSS:
.ThemedButton {
  &:hover {
    color: black;
  }
}
.ThemedButton__$active {
  &:hover {
    color: red;
  }
}
*/ /*#__PURE__*/ __yak_button(__styleYak.ThemedButton, ({ $active })=>$active && /*#__PURE__*/ css(__styleYak.ThemedButton__$active));
