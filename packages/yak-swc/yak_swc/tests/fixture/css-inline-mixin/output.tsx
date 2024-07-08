import { styled, css } from "next-yak/internal";
const buttonStyles = /*YAK Extracted CSS:
.buttonStyles {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
*/ /*#__PURE__*/ css("buttonStyles");
export const ThemedButton = /*#__PURE__*/ styled.button("buttonStyles");
export const CustomThemedButton = /*YAK Extracted CSS:
.CustomThemedButton {
  color: red;
}
*/ /*#__PURE__*/ styled.button("CustomThemedButton", "buttonStyles");
