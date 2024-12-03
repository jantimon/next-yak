import { styled } from "next-yak/internal";
// @ts-ignore
import { Icon } from "./Icon";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
const primary = "green";
export const Button = /*YAK Extracted CSS:
.Button {
  font-size: 1rem;
  color: green;
  --yak-css-import: url("./Icon:Icon",selector) {
    color: red;
  }
  --yak-css-import: url("./Icon:Icon",selector) --yak-css-import: url("./Icon:Icon",selector) {
    color: blue;
  }
}
*/ /*#__PURE__*/ styled.button(__styleYak.Button);
