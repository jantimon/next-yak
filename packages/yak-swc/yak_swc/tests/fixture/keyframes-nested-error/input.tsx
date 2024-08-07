import { styled, keyframes } from "next-yak";

export const Button = styled.button`
  ${keyframes`
    from {
      opacity: 0;
      }
      to {
        opacity: 1;
      }
    `};
`;
