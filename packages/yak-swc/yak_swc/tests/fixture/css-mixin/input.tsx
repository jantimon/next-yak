import { styled, css } from "next-yak";

export const ThemedButton = styled.button`
   ${({ $active }) => $active && css`
      background-color: #f0f0f0;
   `}
`;