import { css, styled } from "next-yak";
import { typogaphyMixin } from "./typography";

const textColor = css`
  color: black;
`;

const textStyles = css`
  font-size: 16px;
  ${textColor};
`;

export const buttonStyles = css`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  ${textStyles};
  ${typogaphyMixin};
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    ${({ $isSet }) => $isSet && true && true && true && textStyles};
  }
  &:focus {
    ${textStyles};
    ${textStyles};
  }
`;
