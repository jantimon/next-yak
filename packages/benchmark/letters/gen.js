const fs = require("fs");

// Function to generate the content of JapaneseLetterComponent.tsx for Kanji characters
function generateKanjiComponentFile() {
  const startCodePoint = 0x4e00; // Start of Unicode block for Kanji characters
  const endCodePoint = startCodePoint + 2500; // Generating components for the first 500 Kanji characters

  const kanjiCharacters = Array.from(
    { length: endCodePoint - startCodePoint },
    (_, index) => String.fromCodePoint(startCodePoint + index)
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
      lib === "next-yak" ? `{ styled as ${styled} }` : styled
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
`
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

export const KanjiLetterComponent${
      lib === "next-yak" ? "Yak" : "Styled"
    }: FunctionComponent = () => {
  return (
    <Wrapper>
      ${kanjiCharacters
        .map((_, index) => `<Kanji${index + 1}Character />`)
        .join("\n      ")}
    </Wrapper>
  );
};
`;

    fs.writeFile(`KanjiLetterComponent.${lib}.tsx`, fileContent, (err) => {
      if (err) throw err;
      console.log(
        `KanjiLetterComponent.${lib}.tsx has been created successfully.`
      );
    });
  }
}

generateKanjiComponentFile();
