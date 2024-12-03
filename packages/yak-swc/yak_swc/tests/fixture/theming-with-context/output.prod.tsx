import React from 'react';
import { styled } from "next-yak/internal";
import "./input.yak.module.css!=!./input?./input.yak.module.css";
const ThemedComponent = /*YAK Extracted CSS:
// cssmodules-pure-ignore
:global(.ym7uBBu) {
  background-color: var(--ym7uBBu1);
  color: var(--ym7uBBu2);
  padding: 20px;
  border-radius: 8px;
}
*/ /*#__PURE__*/ styled.div("ym7uBBu", {
    "style": {
        "--ym7uBBu1": (props)=>props.theme.background,
        "--ym7uBBu2": (props)=>props.theme.text
    }
});
