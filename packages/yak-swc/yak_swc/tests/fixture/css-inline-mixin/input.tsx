import { styled, css } from "next-yak";

const buttonStyles = css`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ThemedButton = styled.button`
   ${buttonStyles}
`;

export const CustomThemedButton = styled.button`
  color: red;
   ${buttonStyles}
`;