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
  max-width: var(--max-width-d617d)px;
}
.buttonStyles {
  width: var(--width-d617d)px;
}
*/ /*#__PURE__*/ css(__styleYak["buttonStyles"], ({ $active })=>$active && /*#__PURE__*/ css(__styleYak["buttonStyles--$active"], {
        "style": {
            "--max-width-d617d": ({ $letters })=>$letters * 15
        }
    }), {
    "style": {
        "--width-d617d": ({ $letters })=>$letters * 10
    }
});
export const ThemedButton = /*#__PURE__*/ styled.button(buttonStyles);
export const CustomThemedButton = /*YAK Extracted CSS:
.CustomThemedButton {
  color: red;
}
*/ /*#__PURE__*/ styled.button(__styleYak["CustomThemedButton"], buttonStyles);
