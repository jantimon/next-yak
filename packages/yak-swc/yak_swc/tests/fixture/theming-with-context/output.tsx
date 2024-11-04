import React from 'react';
import { styled } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
const ThemedComponent = /*YAK Extracted CSS:
.ThemedComponent {
  background-color: var(--ThemedComponent__background-color_pMS1gk);
  color: var(--ThemedComponent__color_pMS1gk);
  padding: 20px;
  border-radius: 8px;
}
*/ /*#__PURE__*/ styled.div(__styleYak.ThemedComponent, {
    "style": {
        "--ThemedComponent__background-color_pMS1gk": (props)=>props.theme.background,
        "--ThemedComponent__color_pMS1gk": (props)=>props.theme.text
    }
});
