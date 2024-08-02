import { css, styled } from "next-yak";

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
