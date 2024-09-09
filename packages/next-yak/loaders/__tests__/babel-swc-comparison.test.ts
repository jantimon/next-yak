import { it, describe, expect } from "vitest";
import fs from "fs";
import path from "path";
import { glob } from "fast-glob";
import tsloader from "../ts-loader";
import * as prettier from "prettier";

describe("should work", () => {
  const inputFiles = glob.sync("../yak-swc/**/input.tsx", {
    absolute: true,
    ignore: "node_modules/**",
  });
  inputFiles.forEach((inputFile) => {
    const testName = `processing ${inputFile.split(path.sep).at(-2)}`;
    const skipReason = fs.existsSync(path.resolve(inputFile, "../skip"));
    const testFn = skipReason ? it.fails : it;
    testFn(testName, async () => {
      const input = fs.readFileSync(inputFile, "utf8");
      const output = await tsloader
        .call(
          {
            _compilation: {},
            resourcePath: "/some/path/input.tsx",
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
              experiments: {
                crossFileSelectors: true,
              },
            }),
            async: () => (err, result) => {
              if (err) {
                throw err;
              }
              return result;
            },
          },
          input,
        )
        .then((result) => result)
        .catch((err) => ({
          error: err.toString(),
        }));

      if (!output || output.error) {
        expect(fs.existsSync(path.resolve(inputFile, "../output.stderr"))).toBe(
          true,
        );
      } else {
        const outputFile = path.join(path.dirname(inputFile), "output.tsx");
        const expectedOutput = fs.readFileSync(outputFile, "utf8");
        expect(await prettify(output)).toEqual(await prettify(expectedOutput));
      }
    });
  });
});

/** Helper to format SWC and Babel compile outputs the same way */
const prettify = async (code: string) =>
  await prettier.format(
    code
      // replace the newlines and spaces before comments
      .replace(/\s*\/\*/g, "/*")
      // replace the newlines and spaces after comments
      .replace(/\s*\*\//g, "*/")
      // replace the newlines after comments
      .replace(/\*\/\s*/g, "*/\n")
      // remove ts ignore comments
      .replace(/\/\/\s*@ts-ignore/g, "")
      // replace empty lines
      .replace(/\n\n+/g, "\n")
      .trim(),
    {
      parser: "typescript",
    },
  );
