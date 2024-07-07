import { styled, keyframes } from "next-yak";
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
export const FadeInText = /*YAK Extracted CSS:
.FadeInText {
  animation: fadeIn 1s ease-in;
  font-size: 18px;
  color: #333;
}
*/ /*#__PURE__*/ styled.p("FadeInText");
