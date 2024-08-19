import { css } from "next-yak/internal";
import { Icon } from './icon';
var buttonTextMixin = /*#__PURE__*/ css(function(param) {
    var $disabled = param.$disabled;
    return $disabled && /*#__PURE__*/ css(__styleYak.buttonTextMixin__$disabled);
});
export var buttonMixin = /*YAK EXPORTED MIXIN:buttonMixin
color: black;
opacity: 0.5;
--yak-css-import: url("./icon:Icon") {
  color: black;
  opacity: 0.5;
}
*/ /*#__PURE__*/ css(function(param) {
    var $disabled = param.$disabled;
    return $disabled && /*#__PURE__*/ css(__styleYak.buttonMixin__$disabled);
}, function(param) {
    var $hasIcon = param.$hasIcon;
    return $hasIcon && /*#__PURE__*/ css(__styleYak.buttonMixin__$hasIcon, function(param) {
        var $disabled = param.$disabled;
        return $disabled && /*#__PURE__*/ css(__styleYak["buttonMixin__$hasIcon-and-$disabled"]);
    });
});