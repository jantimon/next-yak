import { styled, css, keyframes } from "next-yak/internal";
import "./input.yak.module.css!=!./input?./input.yak.module.css";
export const FadeInText = /*YAK Extracted CSS:
:global(.ym7uBBu1) {
  animation: ym7uBBu2 1s ease-in;
}
:global(.ym7uBBu3) {
  animation: ym7uBBu4 1s ease-in;
}
:global(.ym7uBBu) {
  font-size: 18px;
  color: #333;
}
*/ /*#__PURE__*/ styled.p("ym7uBBu", ({ $reverse })=>$reverse ? /*#__PURE__*/ css("ym7uBBu1") : /*#__PURE__*/ css("ym7uBBu3"));
const fadeIn = /*YAK Extracted CSS:
@keyframes :global(ym7uBBu4) {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
*/ /*#__PURE__*/ keyframes("ym7uBBu4");
const fadeOut = /*YAK Extracted CSS:
@keyframes :global(ym7uBBu2) {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
*/ /*#__PURE__*/ keyframes("ym7uBBu2");
