import { styled, keyframes } from "next-yak/internal";
import "./input.yak.module.css!=!./input?./input.yak.module.css";
const fadeIn = /*YAK Extracted CSS:
// cssmodules-pure-ignore
@keyframes :global(fadeIn_m7uBBu) {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
*/ /*#__PURE__*/ keyframes("fadeIn_m7uBBu");
export const FadeInText = /*YAK Extracted CSS:
// cssmodules-pure-ignore
:global(.FadeInText_m7uBBu) {
  animation: global(fadeIn_m7uBBu) 1s ease-in;
  font-size: 18px;
  color: #333;
}
*/ /*#__PURE__*/ styled.p("FadeInText_m7uBBu");
