// @ts-ignore
import styled from "styled-components";
import { styled as styledYak, css } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
const buttonStyles = /*#__PURE__*/ css(__styleYak.buttonStyles);
export const ThemedButton = /*YAK Extracted CSS:
.ThemedButton {
  padding: 10px 20px;
}
*/ /*#__PURE__*/ styledYak.button(__styleYak.ThemedButton);
// Should be transformed as it is yak
export const CustomThemedButton = /*YAK Extracted CSS:
.CustomThemedButton {
  color: blue;
  padding: 10px 20px;
}
*/ /*#__PURE__*/ styledYak.button(__styleYak.CustomThemedButton);
// Should not be transformed as it is NOT yak
export const StyledComponent = styled.button`
  color: red;
`;
