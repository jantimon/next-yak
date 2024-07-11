// @ts-ignore
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
import styled from "styled-components";
import { styled as styledYak, css } from "next-yak/internal";
const buttonStyles = /*YAK Extracted CSS:
.buttonStyles {
  padding: 10px 20px;
}
*/ /*#__PURE__*/ css(__styleYak["buttonStyles"]);
export const ThemedButton = /*#__PURE__*/ styledYak.button(buttonStyles);
// Should be transformed as it is yak
export const CustomThemedButton = /*YAK Extracted CSS:
.CustomThemedButton {
  color: blue;
}
*/ /*#__PURE__*/ styledYak.button(__styleYak["CustomThemedButton"], buttonStyles);
// Should not be transformed as it is NOT yak
export const StyledComponent = styled.button`
  color: red;
`;
