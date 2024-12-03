import { styled, css, keyframes } from "next-yak/internal";
import "./input.yak.module.css!=!./input?./input.yak.module.css";
export const FadeInText = /*YAK Extracted CSS:
// cssmodules-pure-ignore
:global(.ym7uBBu1) {
  animation: animations_fadeOut 1s ease-in;
}
// cssmodules-pure-ignore
:global(.ym7uBBu2) {
  animation: animations_fadeIn 1s ease-in;
}
// cssmodules-pure-ignore
:global(.ym7uBBu) {
  font-size: 18px;
  color: #333;
}
*/ /*#__PURE__*/ styled.p("ym7uBBu", ({ $reverse })=>$reverse ? /*#__PURE__*/ css("ym7uBBu1") : /*#__PURE__*/ css("ym7uBBu2"));
const animations = {
    fadeIn: /*YAK Extracted CSS:
@keyframes animations_fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
*/ /*#__PURE__*/ keyframes("animations_fadeIn"),
    fadeOut: /*YAK Extracted CSS:
@keyframes animations_fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
*/ /*#__PURE__*/ keyframes("animations_fadeOut")
};
const slides = {
    200: /*YAK Extracted CSS:
@keyframes slides_200 {
  to {
    transform: translate(200px, 200px);
  }
}
*/ /*#__PURE__*/ keyframes("slides_200"),
    "x400": /*YAK Extracted CSS:
@keyframes slides_x400 {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(400px);
  }
}
*/ /*#__PURE__*/ keyframes("slides_x400")
};
export const FancyButton = /*YAK Extracted CSS:
// cssmodules-pure-ignore
:global(.ym7uBBu3) {
  background-color: #f00;
  animation: global(slides_x400) 1s ease-in-out, global(animations_fadeIn) 1s ease-in;
  &:hover {
    animation: global(slides_200) 1s ease-in-out, global(animations_fadeOut) 1s ease-in;
  }
}
*/ /*#__PURE__*/ styled.button("ym7uBBu3");
