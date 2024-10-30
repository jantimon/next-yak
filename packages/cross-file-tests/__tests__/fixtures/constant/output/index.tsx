import { styled, css } from "next-yak/internal";
import __styleYak from "./index.yak.module.css!=!./index?./index.yak.module.css";
import { colors, negative, siteMaxWidth } from "./constants";
export var Button = /*YAK Extracted CSS:
.Button {
  color: red;
  height: --yak-css-import: url("./constants:siteMaxWidth",mixin)px;
  color: --yak-css-import: url("./constants:colors:primary",mixin);
  background-color: --yak-css-import: url("./constants:colors:secondary",mixin);
  z-index: --yak-css-import: url("./constants:negative",mixin);
}
.Button__ {
  color: --yak-css-import: url("./constants:colors:secondary",mixin);
  background-color: --yak-css-import: url("./constants:colors:primary",mixin);
}
*/ /*#__PURE__*/ styled.button(__styleYak.Button, function(param) {
    var $variant = param.$variant;
    return $variant === "secondary" && /*#__PURE__*/ css(__styleYak.Button__);
});