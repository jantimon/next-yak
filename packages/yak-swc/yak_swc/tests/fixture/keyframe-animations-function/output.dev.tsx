import { styled, css, keyframes } from "next-yak/internal";
import "./input.yak.module.css!=!./input?./input.yak.module.css";
export const FadeInText = /*YAK Extracted CSS:
:global(.FadeInText__$reverse_m7uBBu) {
  animation: fadeOut_m7uBBu 1s ease-in;
}
:global(.FadeInText__not_$reverse_m7uBBu) {
  animation: fadeIn_m7uBBu 1s ease-in;
}
:global(.FadeInText_m7uBBu) {
  font-size: 18px;
  color: #333;
}
*/ /*#__PURE__*/ styled.p("FadeInText_m7uBBu", ({ $reverse })=>$reverse ? /*#__PURE__*/ css("FadeInText__$reverse_m7uBBu") : /*#__PURE__*/ css("FadeInText__not_$reverse_m7uBBu"));
const fadeIn = /*YAK Extracted CSS:
@keyframes :global(fadeIn_m7uBBu) {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
*/ /*#__PURE__*/ keyframes("fadeIn_m7uBBu");
const fadeOut = /*YAK Extracted CSS:
@keyframes :global(fadeOut_m7uBBu) {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
*/ /*#__PURE__*/ keyframes("fadeOut_m7uBBu");
