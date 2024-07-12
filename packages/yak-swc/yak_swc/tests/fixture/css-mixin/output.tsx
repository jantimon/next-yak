import { styled, css } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
const buttonStyles = /*YAK Extracted CSS:
.buttonStyles {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.buttonStyles__$active {
  background-color: #f0f0f0;
  max-width: var(--buttonStyles__max-width_o1wkyu)px;
}
.buttonStyles {
  width: var(--buttonStyles__width_o1wkyu)px;
}
*/ /*#__PURE__*/ css(__styleYak.buttonStyles, ({ $active })=>$active && /*#__PURE__*/ css(__styleYak.buttonStyles__$active, {
        "style": {
            "--buttonStyles__max-width_o1wkyu": ({ $letters })=>$letters * 15
        }
    }), {
    "style": {
        "--buttonStyles__width_o1wkyu": ({ $letters })=>$letters * 10
    }
});
export const ThemedButton = /*#__PURE__*/ styled.button(buttonStyles);
export const CustomThemedButton = /*YAK Extracted CSS:
.CustomThemedButton {
  color: red;
}
*/ /*#__PURE__*/ styled.button(__styleYak.CustomThemedButton, buttonStyles);
