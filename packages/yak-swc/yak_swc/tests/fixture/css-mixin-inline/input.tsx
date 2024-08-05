import { styled, css } from "next-yak";

export const ThemedButton = styled.button`
  &:hover {
    ${css`
      color: black;
      ${({ $active }) =>
        $active &&
        css`
          color: red;
        `}
    `}
  }
`;
