// @ts-ignore
import styled from "styled-components";
import { styled as styledYak } from "next-yak/internal";
import "./input.yak.module.css!=!./input?./input.yak.module.css";
const textColor = "red";
// Should be transformed as it is yak
export const CustomThemedButton = /*YAK Extracted CSS:
:global(.ym7uBBu) {
  color: blue;
}
*/ /*#__PURE__*/ styledYak.button("ym7uBBu");
// Should not be transformed as it is NOT yak
export const StyledComponent = styled.button`
  color: ${textColor};
`;
