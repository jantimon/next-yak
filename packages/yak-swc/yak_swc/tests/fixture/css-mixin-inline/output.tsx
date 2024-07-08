import { styled, css } from "next-yak/internal";
export const ThemedButton = /*YAK Extracted CSS:
.ThemedButton--$active {
  background-color: #f0f0f0;
}
*/ /*#__PURE__*/ styled.button("ThemedButton", ({ $active })=>$active && /*#__PURE__*/ css("ThemedButton--$active"));
