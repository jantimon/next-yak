import { styled, css, keyframes } from "next-yak/internal";
import "./input.yak.module.css!=!./input?./input.yak.module.css";
export const FadeInText = /*YAK Extracted CSS:
// cssmodules-pure-ignore
:global(.ym7uBBu1) {
  animation: fadeOut 1s ease-in;
}
// cssmodules-pure-ignore
:global(.ym7uBBu2) {
  animation: fadeIn 1s ease-in;
}
// cssmodules-pure-ignore
:global(.ym7uBBu) {
  font-size: 18px;
  color: #333;
}
*/ /*#__PURE__*/ styled.p("ym7uBBu", ({ $reverse })=>$reverse ? /*#__PURE__*/ css("ym7uBBu1") : /*#__PURE__*/ css("ym7uBBu2"));
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
