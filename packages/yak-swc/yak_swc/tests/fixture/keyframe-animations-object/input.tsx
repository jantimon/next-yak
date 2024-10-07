import { styled, css, keyframes } from "next-yak";

export const FadeInText = styled.p<{ $reverse?: boolean }>`
  ${({ $reverse }) =>
    $reverse
      ? css`
          animation: ${animations.fadeOut} 1s ease-in;
        `
      : css`
          animation: ${animations.fadeIn} 1s ease-in;
        `}

  font-size: 18px;
  color: #333;
`;

const animations = {
  fadeIn: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`,
  fadeOut: keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
`,
};
