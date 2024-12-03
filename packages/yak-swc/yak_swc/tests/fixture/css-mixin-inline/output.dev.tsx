import { styled, css } from "next-yak/internal";
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
*/ /*#__PURE__*/ styled.button(__styleYak.ThemedButton, ({ $active })=>$active && /*#__PURE__*/ css(__styleYak.ThemedButton__$active));
