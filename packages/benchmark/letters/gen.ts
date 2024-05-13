import { writeFile } from "fs";
import tsLoader from "../../next-yak/loaders/tsloader";

// Function to generate the content of JapaneseLetterComponent.tsx for Kanji characters
async function generateKanjiComponentFile() {
  const startCodePoint = 0x4e00; // Start of Unicode block for Kanji characters
  const endCodePoint = startCodePoint + 2500; // Generating components for the first 500 Kanji characters

  const kanjiCharacters = Array.from(
    { length: endCodePoint - startCodePoint },
    (_, index) => String.fromCodePoint(startCodePoint + index),
  );
  const libs = {
    "next-yak": "styledYak",
    "styled-components": "styled",
  };

  for (const lib in libs) {
    const styled = libs[lib];

    const fileContent = `
"use client";    
import React, { type FunctionComponent } from 'react';
import ${
      lib === "next-yak" ? `{ styled as ${styled}, css }` : `{ ${styled}, css }`
    } from '${lib}';

const JapaneseCard = ${styled}.div\`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: box-shadow 0.3s;
    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
\`;

${kanjiCharacters
  .map(
    (kanji, index) => `
const Kanji${index + 1}Character = ${styled}(JapaneseCard)\`
  &:before {
    display: block;
    font-size: 2em;
    color: #333;
    content: '${kanji}';
  }
\`;
`,
  )
  .join("")}

const Wrapper = ${styled}.div\`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #eee;
    gap: 1rem;
    padding: 1rem;
\`;

const baseButtonStyles = css\`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
\`;


const BaseButton = ${styled}.button\`
  \${baseButtonStyles}
\`;

const RerenderButton = ${styled}.button<{ $count: number }>\`
  \${baseButtonStyles}
  \${({ $count }) => {
    switch ($count % 3) {
      case 0:
        return css\`
          color: #333;
          background-color: #fff;
        \`;
      case 1:
        return css\`
          color: #fff;
          background-color: #333;
        \`;
      case 2:
      default:
        return css\`
          color: #333;
          background-color: #ff0;
        \`;
      }
    }
  }
\`;

const RerenderButtonMedia = ${styled}.button<{ $count: number }>\`
  \${baseButtonStyles}
  @media (min-width: 1px) {
    \${({ $count }) => {
      switch ($count % 3) {
        case 0:
          return css\`
            color: #333;
            background-color: #fff;
          \`;
        case 1:
          return css\`
            color: #fff;
            background-color: #333;
          \`;
        case 2:
        default:
          return css\`
            color: #333;
            background-color: #ff0;
          \`;
        }
      }
    }
  }
\`;

const RenderButtonDynamic = ${styled}.button<{ $count: number }>\`
  \${baseButtonStyles}
  transform: rotate(\${({ $count }) => $count}deg);
\`;

const RenderButtonDynamicMedia = ${styled}.button<{ $count: number }>\`
  \${baseButtonStyles}
  @media (min-width: 1px) {
    transform: rotate(\${({ $count }) => $count}deg);
  }
\`;

const LibHeader = ${styled}.h1\`
  text-align: center;
  font-size: 2em;
  color: #333;
  font-family: 'Arial', sans-serif;
\`;

const ButtonWrapper = ${styled}.div\`
  display: flex;
  gap: 1rem;
  min-width: 100%;
\`;

export const KanjiLetterComponent${
      lib === "next-yak" ? "Yak" : "Styled"
    }: FunctionComponent = () => {

  const [count0, setCount0] = React.useState(0);
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = React.useState(0);
  const [count4, setCount4] = React.useState(0);

  return (
    <>
    <LibHeader onClick={() => document.location.href = "${
      lib === "next-yak" ? "/styled" : "/yak"
    }"  }>${lib}</LibHeader>
    <Wrapper style={{ 
      // @ts-ignore
      "--count0": count0 
    }}>

      <ButtonWrapper>
        <BaseButton title="updates css variable on wrapper" onClick={() => {
          performance.mark("BaseButtonClick - ${lib}");
          setCount0(count0 + 1)
        }}>{count0}</BaseButton>

        <RerenderButton title="changes color" onClick={() => {
          performance.mark("RerenderButtonClick - ${lib}");
          setCount1(count1 + 1)
        }} $count={count1}>{count1}</RerenderButton>

        <RerenderButtonMedia title="changes color in @media" onClick={() => {
          performance.mark("RerenderButtonMediaClick - ${lib}");
          setCount2(count2 + 1)
        }} $count={count2}>{count2}</RerenderButtonMedia>

        <RenderButtonDynamic title="changes dynamic" onClick={() => {
          performance.mark("RenderButtonDynamicClick - ${lib}");
          setCount3(count3 + 1)
        }} $count={count3}>{count3}</RenderButtonDynamic>

        <RenderButtonDynamicMedia title="changes dynamic in @media" onClick={() => {
          performance.mark("RenderButtonDynamicMediaClick - ${lib}");
          setCount4(count4 + 1)
        }} $count={count4}>{count4}</RenderButtonDynamicMedia>
      </ButtonWrapper>

      ${kanjiCharacters
        .map((_, index) => `<Kanji${index + 1}Character />`)
        .join("\n      ")}
    </Wrapper>
    
        <a href="https://github.com/jantimon/next-yak/">next-yak</a>
    </>
  );
};
`;

    writeFile(`${__dirname}/KanjiLetterComponent.${lib}.tsx`, fileContent, (err) => {
      if (err) throw err;
      console.log(
        `KanjiLetterComponent.${lib}.tsx has been created successfully.`
      );
    });

    // Precompile yak similar to how it would be compiled by our loader
    if (lib === "next-yak") {
      const loaderContext = {
        resourcePath: "/some/special/path/page.tsx",
        rootContext: "/some",
        mode: "development",
        importModule: () => {
          return {
            replaces: {
              queries: {
                sm: "@media (min-width: 640px)",
                md: "@media (min-width: 768px)",
                lg: "@media (min-width: 1024px)",
                xl: "@media (min-width: 1280px)",
                xxl: "@media (min-width: 1536px)",
              },
            },
          };
        },
        getOptions: () => ({
          configPath: "/some/special/path/config",
        }),
        async: () => (err, result) => {
          if (err) {
            throw err;
          }
          return result;
        },
      };
      let i = 0;
      const compiled = "// @ts-nocheck\n" + (await tsLoader.call(loaderContext,fileContent))
      // Remove __styleYak import
      .replace(
        /import __styleYak from "[^"]+";/,
        ""
      )
      // Replace __styleYak usage to a string
      .replace(
        /`__styleYak.(\S+)`/g,
        (_, content) => `("$1")`
      );
      writeFile(
        `${__dirname}/KanjiLetterComponent.${lib}.compiled.tsx`,
        compiled,
        (err) => {
          if (err) throw err;
          console.log(
            `KanjiLetterComponent.${lib}.compiled.tsx has been created successfully.`,
          );
        },
      );
    }
  }
}

generateKanjiComponentFile();
