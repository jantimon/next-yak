import { css, styled } from "next-yak";
import type { ReactNode } from "react";
import styles from "./page.module.css";
import { queries } from "@/theme";
import { Clock } from "./Clock";

const headline = css<{ $primary?: boolean }>`
  font-size: 2rem;
  font-weight: bold;
  color: blue;
  background: linear-gradient(
    149deg,
    #ae52eb 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0px 0px 1px #fff);

  ${queries.sm} {
    font-size: 1.5rem;
  }

  &:hover {
    color: red;
  }
  ${({ $primary }) =>
    $primary &&
    css`
      color: green;
    `}
`;

const Headline = styled.h1<{ $primary?: boolean; children: ReactNode }>`
  ${headline}
`;

const Button = styled.button<{ $primary?: boolean; children: ReactNode }>`
  color: #009688;
  background: #fff;
  border: 1px solid currentColor;
  font-size: 17px;
  padding: 7px 12px;
  font-weight: normal;
  margin: 6px 0;
  margin-right: 12px;
  display: inline-block;
  font-family: "Open Sans", sans-serif;
  min-width: 120px;
  ${({ $primary }) =>
    $primary &&
    css`
      border-width: 2px;
    `}
`;

const FancyButton = styled(Button)`
  color: #fff;
  background: linear-gradient(
    149deg,
    #ae52eb 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
`;

const SyledLink = styled.a`
  background: linear-gradient(
    149deg,
    #ae52eb 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  filter: drop-shadow(0px 0px 1px #fff);
  font-weight: bold;
  border-bottom: 2px solid red;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-position: 100% 0;
    border-bottom-color: #9d0a0a;
  }
`;

export default function Home() {
  return (
    <main className={styles.main}>
      <Headline>Hello world</Headline>
      <Button>Ghost</Button>
      <Button $primary>Primary Ghost</Button>
      <FancyButton $primary>Fancy Ghost</FancyButton>
      <Clock />
      <SyledLink href="https://github.com/jantimon/yacijs/tree/poc/app">
        view code
      </SyledLink>
    </main>
  );
}
