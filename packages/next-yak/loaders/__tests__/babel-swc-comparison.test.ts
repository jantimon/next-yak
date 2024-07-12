import { it, describe, expect } from "vitest";
import fs from "fs";
import path from "path";
import { glob } from "glob";
import tsloader from "../ts-loader";
import * as prettier from "prettier";

describe("should work", () => {
  const inputFiles = glob.sync("../yak-swc/**/input.tsx", {
    absolute: true,
    ignore: "node_modules/**",
  });
  inputFiles.forEach((inputFile) => {
    it(`processing ${inputFile
      .split(path.sep)
      .at(-2)} should match output`, async () => {
      const input = fs.readFileSync(inputFile, "utf8");
      const output = await tsloader.call(
        {
          _compilation: {},
          resourcePath: inputFile,
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
        input
      );

      const outputFile = path.join(path.dirname(inputFile), "output.tsx");
      const expectedOutput = fs.readFileSync(outputFile, "utf8");
      expect(await prettify(output)).toEqual(await prettify(expectedOutput));
    });
  });
});

const prettify = async (code: string) => {
  const prettified = await prettier.format(code, {
    parser: "typescript",
  });

  return (
    prettified
      // replace the newlines and spaces before comments
      .replace(/\s*\/\*/g, "/*")
      // replace the newlines and spaces after comments
      .replace(/\s*\*\//g, "*/")
      // replace empty lines
      .replace(/(^|\n)\n+/g, "$1")
  );
};
