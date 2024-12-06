import { styled } from "next-yak/internal";
import { buttonMixin } from './mixin';
import { primaryButtonMixin } from './helper/anotherMixin';
import "./index.yak.module.css!=!./index?./index.yak.module.css";
export var Button = /*YAK Extracted CSS:
// cssmodules-pure-ignore
:global(.Button_oPtJMe) {
  --yak-css-import: url("./mixin:buttonMixin",mixin);
}
*/ /*#__PURE__*/ styled.button("Button_oPtJMe");
export var PrimaryButton = /*YAK Extracted CSS:
// cssmodules-pure-ignore
:global(.PrimaryButton_oPtJMe) {
  --yak-css-import: url("./helper/anotherMixin:primaryButtonMixin",mixin);
}
*/ /*#__PURE__*/ styled(Button)("PrimaryButton_oPtJMe");