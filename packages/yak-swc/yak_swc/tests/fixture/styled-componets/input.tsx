// @ts-ignore
import styled from "styled-components";
import { styled as styledYak, css } from "next-yak";

const buttonStyles = css`
  padding: 10px 20px;
`;

export const ThemedButton = styledYak.button`
   ${buttonStyles}
`;

// Should be transformed as it is yak
export const CustomThemedButton = styledYak.button`
  color: blue;
   ${buttonStyles}
`; 

// Should not be transformed as it is NOT yak
export const StyledComponent = styled.button`
  color: red;
`