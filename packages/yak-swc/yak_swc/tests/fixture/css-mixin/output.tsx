import { styled, css } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
const buttonStyles = /*YAK Extracted CSS:
.buttonStyles {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.buttonStyles--$active {
  background-color: #f0f0f0;
  max-width: var(--buttonStyles\#0-max-width_d617d)px;
}
.buttonStyles {
  width: var(--buttonStyles\#0-width_d617d)px;
}
*/ /*#__PURE__*/ css(__styleYak["buttonStyles"], ({ $active })=>$active && /*#__PURE__*/ css(__styleYak["buttonStyles--$active"], {
        "style": {
            "--buttonStyles\\#0-max-width_d617d": ({ $letters })=>$letters * 15
        }
    }), {
    "style": {
        "--buttonStyles\\#0-width_d617d": ({ $letters })=>$letters * 10
    }
});
export const ThemedButton = /*#__PURE__*/ styled.button(buttonStyles);
export const CustomThemedButton = /*YAK Extracted CSS:
.CustomThemedButton {
  color: red;
}
*/ /*#__PURE__*/ styled.button(__styleYak["CustomThemedButton"], buttonStyles);
