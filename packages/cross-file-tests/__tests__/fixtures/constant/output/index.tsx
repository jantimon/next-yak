import { styled } from "next-yak/internal";
import __styleYak from "./index.yak.module.css!=!./index?./index.yak.module.css";
import { colors, siteMaxWidth } from "./constants";
export var Button = /*YAK Extracted CSS:
.Button {
  color: red;
  height: --yak-css-import: url("./constants:siteMaxWidth",mixin)px;
  color: --yak-css-import: url("./constants:colors:primary",mixin);
  background-color: --yak-css-import: url("./constants:colors:secondary",mixin);
}
*/ /*#__PURE__*/ styled.button(__styleYak.Button);