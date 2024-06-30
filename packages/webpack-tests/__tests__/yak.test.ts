import { describe, expect, test } from "vitest";
import { compile } from "./utils/testCompiler";

describe("Yak Webpack e2e tests", () => {
  test("should compile constants from yak files", async () => {
    const compiledCode = await compile({
      "./src/index.tsx": `
      import { styled } from "next-yak";
      import { siteMaxWidth } from "./constants.yak";
      export const Button = styled.button\`
        color: red;
        height: \${siteMaxWidth}px;
      \`;
    `,
      "./src/constants.yak.ts": `
      export const siteMaxWidth = 10;
    `,
    });
    expect(JSON.stringify(compiledCode)).toContain("height: 10px;");
  });
});
