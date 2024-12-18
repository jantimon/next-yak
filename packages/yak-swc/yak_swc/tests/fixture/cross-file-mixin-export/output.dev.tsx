import { css, styled } from "next-yak/internal";
import { typogaphyMixin } from "./typography";
import "./input.yak.module.css!=!./input?./input.yak.module.css";
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
:global(.Button_m7uBBu) {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
:global(.Button___m7uBBu) {
  &:hover {
    font-size: 16px;
    color: black;
  }
}
:global(.Button_m7uBBu) {
  &:focus {
    font-size: 16px;
    color: black;
    font-size: 16px;
    color: black;
  }
}
*/ /*#__PURE__*/ styled.button("Button_m7uBBu", ({ $isSet })=>$isSet && true && true && true && /*#__PURE__*/ css("Button___m7uBBu"));
export const aspectRatios = {
    base: /*YAK EXPORTED MIXIN:aspectRatios:base
padding-top: 100%;
*/ /*#__PURE__*/ css(),
    "16:9": /*YAK EXPORTED MIXIN:aspectRatios:16%3A9
padding-top: 56.25%;
*/ /*#__PURE__*/ css(),
    "4:3": /*YAK EXPORTED MIXIN:aspectRatios:4%3A3
padding-top: 75%;
*/ /*#__PURE__*/ css()
};
