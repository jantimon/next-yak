import { styled, css } from "next-yak/internal";
import "./input.yak.module.css!=!./input?./input.yak.module.css";
export const ThemedButton = /*YAK Extracted CSS:
:global(.ym7uBBu) {
  &:hover {
    color: black;
  }
}
:global(.ym7uBBu1) {
  &:hover {
    color: red;
  }
}
*/ /*#__PURE__*/ styled.button("ym7uBBu", ({ $active })=>$active && /*#__PURE__*/ css("ym7uBBu1"));
