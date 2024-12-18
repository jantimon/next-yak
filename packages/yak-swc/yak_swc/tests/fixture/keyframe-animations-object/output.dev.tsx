import { styled, css, keyframes } from "next-yak/internal";
import "./input.yak.module.css!=!./input?./input.yak.module.css";
export const FadeInText = /*YAK Extracted CSS:
:global(.FadeInText__$reverse_m7uBBu) {
  animation: animations_fadeOut_m7uBBu 1s ease-in;
}
:global(.FadeInText__not_$reverse_m7uBBu) {
  animation: animations_fadeIn_m7uBBu 1s ease-in;
}
:global(.FadeInText_m7uBBu) {
  font-size: 18px;
  color: #333;
}
*/ /*#__PURE__*/ styled.p("FadeInText_m7uBBu", ({ $reverse })=>$reverse ? /*#__PURE__*/ css("FadeInText__$reverse_m7uBBu") : /*#__PURE__*/ css("FadeInText__not_$reverse_m7uBBu"));
const animations = {
    fadeIn: /*YAK Extracted CSS:
@keyframes :global(animations_fadeIn_m7uBBu) {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
*/ /*#__PURE__*/ keyframes("animations_fadeIn_m7uBBu"),
    fadeOut: /*YAK Extracted CSS:
@keyframes :global(animations_fadeOut_m7uBBu) {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
*/ /*#__PURE__*/ keyframes("animations_fadeOut_m7uBBu")
};
const slides = {
    200: /*YAK Extracted CSS:
@keyframes :global(slides_200_m7uBBu) {
  to {
    transform: translate(200px, 200px);
  }
}
*/ /*#__PURE__*/ keyframes("slides_200_m7uBBu"),
    "x400": /*YAK Extracted CSS:
@keyframes :global(slides_x400_m7uBBu) {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(400px);
  }
}
*/ /*#__PURE__*/ keyframes("slides_x400_m7uBBu")
};
export const FancyButton = /*YAK Extracted CSS:
:global(.FancyButton_m7uBBu) {
  background-color: #f00;
  animation: global(slides_x400_m7uBBu) 1s ease-in-out, global(animations_fadeIn_m7uBBu) 1s ease-in;
  &:hover {
    animation: global(slides_200_m7uBBu) 1s ease-in-out, global(animations_fadeOut_m7uBBu) 1s ease-in;
  }
}
*/ /*#__PURE__*/ styled.button("FancyButton_m7uBBu");
