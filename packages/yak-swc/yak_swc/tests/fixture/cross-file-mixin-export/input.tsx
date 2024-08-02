import { css } from "next-yak";

const textStyles = css`
  font-size: 16px;
  color: black;
`;

export const buttonStyles = css`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  ${textStyles};
`;
