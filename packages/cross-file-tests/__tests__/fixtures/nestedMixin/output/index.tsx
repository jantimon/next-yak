import { styled } from "next-yak/internal";
import __styleYak from "./index.yak.module.css!=!./index?./index.yak.module.css";
import { buttonMixin } from './mixin';
var Button = /*YAK Extracted CSS:
.Button {
  --yak-css-import: url("./mixin:buttonMixin");
}
*/ /*#__PURE__*/ styled.button(__styleYak.Button, buttonMixin);
export default Button;