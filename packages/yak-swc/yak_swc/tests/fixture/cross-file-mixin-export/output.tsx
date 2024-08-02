import { css } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
const textStyles = /*#__PURE__*/ css(__styleYak.textStyles);
export const buttonStyles = /*YAK Extracted MIXIN:buttonStyles
.buttonStyles {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
*/ /*#__PURE__*/ css(__styleYak.buttonStyles, textStyles);
