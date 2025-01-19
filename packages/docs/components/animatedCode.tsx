"use client";
import { use, useEffect, useState } from "react";
import { ShikiMagicMove } from "shiki-magic-move/react";
import { highlighterPromise } from "@/lib/shiki";
import { useTheme } from "next-themes";

import "shiki-magic-move/dist/style.css";
import { styled } from "next-yak";
import { breakpoints, colors, theme } from "@/lib/utils/constants";

export const AnimatedCode = () => {
  const [code, setCode] = useState({
    start: true,
    input: inputStart,
    output: outputStart,
    css: cssStart,
  });
  const highlighter = use(highlighterPromise);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (playing) {
      interval = setInterval(() => {
        setCode((prev) => {
          if (prev.start) {
            return {
              start: false,
              input: inputEnd,
              output: outputEnd,
              css: cssEnd,
            };
          } else {
            return {
              start: true,
              input: inputStart,
              output: outputStart,
              css: cssStart,
            };
          }
        });
      }, 5000);
    } else {
      if (interval) {
        clearInterval(interval);
      }
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [playing]);

  // don't use any theme on SSR
  let shikiTheme = "none";
  if (mounted) {
    shikiTheme = theme === "dark" ? "vitesse-dark" : "vitesse-light";
  }

  return (
    <ResponsiveCode>
      <AnimationWrapper>
        <CodeWrapper>
          <ShikiMagicMove
            key={`${shikiTheme}-input`}
            lang="tsx"
            theme={shikiTheme}
            highlighter={highlighter}
            code={code.input}
            options={{ duration: 800, stagger: 1, lineNumbers: false }}
          />
          <OutputWrapper>
            <ShikiMagicMove
              key={`${shikiTheme}-output`}
              lang="tsx"
              theme={shikiTheme}
              highlighter={highlighter}
              code={code.output}
              options={{ duration: 800, stagger: 1, lineNumbers: false }}
            />
            <ShikiMagicMove
              key={`${shikiTheme}-css`}
              lang="css"
              theme={shikiTheme}
              highlighter={highlighter}
              code={code.css}
              options={{ duration: 800, stagger: 1, lineNumbers: false }}
            />
          </OutputWrapper>
        </CodeWrapper>
        <AnimationButton onClick={() => setPlaying((p) => !p)}>
          {playing ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="14" y="4" width="4" height="16" rx="1" />
              <rect x="6" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          )}
        </AnimationButton>
      </AnimationWrapper>
      <video
        src="https://github.com/jantimon/next-yak/assets/4113649/f5a220fc-2a0f-46be-a8e7-c855f7faa337"
        controls
      />
    </ResponsiveCode>
  );
};

const CodeWrapper = styled.div`
  display: grid;
  grid-autoflow: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 15px;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  ${colors.secondaryStatic};

  background: #fff;
  ${theme.dark} {
    background: rgb(18, 18, 18);
  }
`;

const OutputWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-flow: row;
  grid-template-rows: 2fr 1fr;
  width: 100%;
  min-height: 700px;
`;

const AnimationWrapper = styled.div`
  position: relative;
`;

const AnimationButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  ${colors.secondary};
  border-radius: 50%;
`;

const ResponsiveCode = styled.div`
  font-size: 0.9rem;
  & ${AnimationWrapper} {
    display: none;
  }

  ${breakpoints.md} {
    & ${AnimationWrapper} {
      display: block;
    }
    & video {
      display: none;
    }
  }
`;

const inputStart = `import styled from "styled-components";

const Title = styled.h1\`
  font-size: 1.5em;
  color: palevioletred;
  &:hover {
    color: red;
  }
\`;

const App = () => (
  <Title>
    Hello World
  </Title>
);`;

const inputEnd = `import {styled} from "next-yak"

const Title = styled.h1\`
  font-size: 1.5em;
  color: palevioletred;
  &:hover {
    color: red;
  }
\`;

const App = () => (
  <Title>
    Hello World
  </Title>
);`;

const outputStart = `//JS output

const Title = styled.h1.withConfig({
  componentId: "sc-1289dod-0"
})\`
  font-size: 1.5em;
  color: palevioletred;
  &:hover {
    color: red;
  }
\`;

const App = () => (
  <Title>
    Hello World
  </Title>
);`;

const outputEnd = `//JS output

const Title = styled('h1',
  "Title-1289do1");

const App = () => (
  <Title>
    Hello World
  </Title>
);`;

const cssStart = `/*CSS output*/`;
const cssEnd = `/*CSS output*/

.Title-1289do1 {
  font-size: 1.5em;
  color: palevioletred;
  &:hover {
    color: red;
  }
}`;
