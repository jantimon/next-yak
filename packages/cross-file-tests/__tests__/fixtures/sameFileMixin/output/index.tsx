import { styled, css } from "next-yak/internal";
import "./index.yak.module.css!=!./index?./index.yak.module.css";
var buttonTextMixin = /*#__PURE__*/ css(function(param) {
    var $disabled = param.$disabled;
    return $disabled && /*#__PURE__*/ css("buttonTextMixin__$disabled_xEUJ1U");
});
var Button = /*YAK Extracted CSS:
// cssmodules-pure-ignore
:global(.Button_xEUJ1U) {
  color: black;
}
// cssmodules-pure-ignore
:global(.Button__$disabled_xEUJ1U) {
  opacity: 0.5;
}
// cssmodules-pure-ignore
:global(.Button__$hasIcon_xEUJ1U) {
  padding-left: 30px;
}
// cssmodules-pure-ignore
:global(.Button__$disabled_xEUJ1U-01) {
  color: gray;
}
*/ /*#__PURE__*/ styled.button("Button_xEUJ1U", function(param) {
    var $disabled = param.$disabled;
    return $disabled && /*#__PURE__*/ css("Button__$disabled_xEUJ1U");
}, function(param) {
    var $hasIcon = param.$hasIcon;
    return $hasIcon && /*#__PURE__*/ css("Button__$hasIcon_xEUJ1U");
}, function(param) {
    var $disabled = param.$disabled;
    return $disabled && /*#__PURE__*/ css("Button__$disabled_xEUJ1U-01");
});
export default Button;