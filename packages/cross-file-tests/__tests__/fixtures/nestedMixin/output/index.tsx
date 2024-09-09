import { styled } from "next-yak/internal";
import __styleYak from "./index.yak.module.css!=!./index?./index.yak.module.css";
import { buttonMixin } from './mixin';
import { primaryButtonMixin } from './helper/anotherMixin';
export var Button = /*YAK Extracted CSS:
.Button {
  --yak-css-import: url("./mixin:buttonMixin",mixin);
}
*/ /*#__PURE__*/ styled.button(__styleYak.Button);
export var PrimaryButton = /*YAK Extracted CSS:
.PrimaryButton {
  --yak-css-import: url("./helper/anotherMixin:primaryButtonMixin",mixin);
}
*/ /*#__PURE__*/ styled(Button)(__styleYak.PrimaryButton);