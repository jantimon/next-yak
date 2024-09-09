import { css, styled } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
import { typogaphyMixin } from "./typography";
const textColor = /*#__PURE__*/ css();
const textStyles = /*#__PURE__*/ css();
export const buttonStyles = /*YAK EXPORTED MIXIN:buttonStyles
padding: 10px 20px;
border: none;
border-radius: 5px;
cursor: pointer;
font-size: 16px;
color: black;
--yak-css-import: url("./typography:typogaphyMixin",mixin);
*/ /*#__PURE__*/ css();
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
