import React from 'react';
import { styled } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
const ThemedComponent = /*YAK Extracted CSS:
.ThemedComponent {
  background-color: var(--ThemedComponent__background-color_d617d);
  color: var(--ThemedComponent__color_d617d);
  padding: 20px;
  border-radius: 8px;
}
*/ /*#__PURE__*/ styled.div(__styleYak.ThemedComponent, {
    "style": {
        "--ThemedComponent__background-color_d617d": (props)=>props.theme.background,
        "--ThemedComponent__color_d617d": (props)=>props.theme.text
    }
});
