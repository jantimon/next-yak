import { styled, css } from "next-yak/internal";
import "./input.yak.module.css!=!./input?./input.yak.module.css";
export const ThemedButton = /*YAK Extracted CSS:
:global(.ThemedButton_m7uBBu) {
  &:hover {
    color: black;
  }
}
:global(.ThemedButton__$active_m7uBBu) {
  &:hover {
    color: red;
  }
}
*/ /*#__PURE__*/ styled.button("ThemedButton_m7uBBu", ({ $active })=>$active && /*#__PURE__*/ css("ThemedButton__$active_m7uBBu"));
