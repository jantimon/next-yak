import { YakThemeProvider, css, styled } from "next-yak";
import { queries, colors } from "@/theme/constants.yak";

const Headline = styled.h1<{ $primary?: boolean }>`
  color: orange;
  ${queries.sm} {
    ${({ $primary }) => $primary && css`
      font-size: 2rem
    `}
    ${({ $primary }) => $primary && css`
      transform: rotate(10deg)
        translateY(10px)
    `}
  }
`;

export default function Home() {
  return (
    <YakThemeProvider>
      <Headline $primary>Hello World</Headline>
    </YakThemeProvider>
  );
}
