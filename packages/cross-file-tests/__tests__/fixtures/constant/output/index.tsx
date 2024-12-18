import { styled, css } from "next-yak/internal";
import { colors, negative, siteMaxWidth } from "./constants";
import "./index.yak.module.css!=!./index?./index.yak.module.css";
export var Button = /*YAK Extracted CSS:
:global(.Button_wIxfWW) {
  color: red;
  height: --yak-css-import: url("./constants:siteMaxWidth",mixin)px;
  color: --yak-css-import: url("./constants:colors:primary",mixin);
  background-color: --yak-css-import: url("./constants:colors:secondary",mixin);
  z-index: --yak-css-import: url("./constants:negative",mixin);
}
:global(.Button___wIxfWW) {
  color: --yak-css-import: url("./constants:colors:secondary",mixin);
  background-color: --yak-css-import: url("./constants:colors:primary",mixin);
}
*/ /*#__PURE__*/ styled.button("Button_wIxfWW", function(param) {
    var $variant = param.$variant;
    return $variant === "secondary" && /*#__PURE__*/ css("Button___wIxfWW");
});