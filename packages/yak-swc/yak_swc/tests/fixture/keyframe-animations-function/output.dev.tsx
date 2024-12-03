import { styled, css, keyframes } from "next-yak/internal";
import "./input.yak.module.css!=!./input?./input.yak.module.css";
export const FadeInText = /*YAK Extracted CSS:
// cssmodules-pure-ignore
:global(.FadeInText__$reverse_m7uBBu) {
  animation: fadeOut 1s ease-in;
}
// cssmodules-pure-ignore
:global(.FadeInText__not_$reverse_m7uBBu) {
  animation: fadeIn 1s ease-in;
}
// cssmodules-pure-ignore
:global(.FadeInText_m7uBBu) {
  font-size: 18px;
  color: #333;
}
*/ /*#__PURE__*/ styled.p("FadeInText_m7uBBu", ({ $reverse })=>$reverse ? /*#__PURE__*/ css("FadeInText__$reverse_m7uBBu") : /*#__PURE__*/ css("FadeInText__not_$reverse_m7uBBu"));
const fadeIn = /*YAK Extracted CSS:
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
*/ /*#__PURE__*/ keyframes("fadeIn");
const fadeOut = /*YAK Extracted CSS:
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
*/ /*#__PURE__*/ keyframes("fadeOut");
