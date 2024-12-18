import React from 'react';
import { styled } from "next-yak/internal";
import "./input.yak.module.css!=!./input?./input.yak.module.css";
const ThemedComponent = /*YAK Extracted CSS:
:global(.ThemedComponent_m7uBBu) {
  background-color: var(--ThemedComponent__background-color_m7uBBu);
  color: var(--ThemedComponent__color_m7uBBu);
  padding: 20px;
  border-radius: 8px;
}
*/ /*#__PURE__*/ styled.div("ThemedComponent_m7uBBu", {
    "style": {
        "--ThemedComponent__background-color_m7uBBu": (props)=>props.theme.background,
        "--ThemedComponent__color_m7uBBu": (props)=>props.theme.text
    }
});
