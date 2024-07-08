import React from 'react';
import { styled } from "next-yak";
const ThemedComponent = /*YAK Extracted CSS:
.ThemedComponent {
  background-color: ;
  color: ;
  padding: 20px;
  border-radius: 8px;
}
*/ /*#__PURE__*/ styled.div("ThemedComponent", (props)=>props.theme.background, (props)=>props.theme.text);
