import { styled } from "next-yak";
// @ts-ignore
import { Icon } from "./Icon";
const primary = "green";
export const Button = /*YAK Extracted CSS:
.Button {
  font-size: 1rem;
  color: green;
  ::module-selector-import(Icon './Icon') {
    color: red;
  }
}
*/ /*#__PURE__*/ styled.button("Button");
