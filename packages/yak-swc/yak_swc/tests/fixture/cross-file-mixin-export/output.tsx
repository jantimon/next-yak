import { css, styled } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
const textColor = /*#__PURE__*/ css(__styleYak.textColor);
const textStyles = /*#__PURE__*/ css(__styleYak.textStyles);
export const buttonStyles = /*YAK Extracted MIXIN:buttonStyles
padding: 10px 20px;
border: none;
border-radius: 5px;
cursor: pointer;
font-size: 16px;
color: black;
*/ /*#__PURE__*/ css(__styleYak.buttonStyles);
export const Button = /*YAK Extracted CSS:
.Button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.Button__ {
  &:hover {
    font-size: 16px;
    color: black;
  }
}
.Button {
  &:focus {
    font-size: 16px;
    color: black;
    font-size: 16px;
    color: black;
  }
}
*/ /*#__PURE__*/ styled.button(__styleYak.Button, ({ $isSet })=>$isSet && true && true && true && /*#__PURE__*/ css(__styleYak.Button__));
