import { styled } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
// @ts-ignore
import { Icon } from "./Icon";
const primary = "green";
export const Button = /*YAK Extracted CSS:
.Button {
  font-size: 1rem;
  color: green;
  --yak-css-import: url("./Icon:selector:Icon") {
    color: red;
  }
  --yak-css-import: url("./Icon:selector:Icon") --yak-css-import: url("./Icon:selector:Icon") {
    color: blue;
  }
}
*/ /*#__PURE__*/ styled.button(__styleYak.Button);
