import React from 'react';
import { styled } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
const ThemedComponent = /*YAK Extracted CSS:
.ThemedComponent {
  background-color: var(--ym7uBBu);
  color: var(--ym7uBBu1);
  padding: 20px;
  border-radius: 8px;
}
*/ /*#__PURE__*/ styled.div(__styleYak.ThemedComponent, {
    "style": {
        "--ym7uBBu": (props)=>props.theme.background,
        "--ym7uBBu1": (props)=>props.theme.text
    }
});
