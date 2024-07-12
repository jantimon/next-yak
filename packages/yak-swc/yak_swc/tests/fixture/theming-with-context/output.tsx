import React from 'react';
import { styled } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
const ThemedComponent = /*YAK Extracted CSS:
.ThemedComponent {
  background-color: var(--background-color-d617d);
  color: var(--color-d617d);
  padding: 20px;
  border-radius: 8px;
}
*/ /*#__PURE__*/ styled.div(__styleYak["ThemedComponent"], {
    "style": {
        "--background-color-d617d": (props)=>props.theme.background,
        "--color-d617d": (props)=>props.theme.text
    }
});
