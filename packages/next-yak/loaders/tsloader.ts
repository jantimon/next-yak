import babel, { BabelFileResult } from "@babel/core";
import getYakImports from "./lib/getYakImports.js";
import { InvalidPositionError } from "./babel-yak-plugin.js";

/**
 * Loader for typescript files that use yak, it replaces the css template literal with a call to the 'styled' function
 */
export default async function tsloader(
  this: any,
  source: string
): Promise<string | void> {
  // ignore files if they don't use yak
  if (!source.includes("next-yak")) {
    return source;
  }
  const callback = this.async();
  const { rootContext, resourcePath } = this;

  /** .yak files are constant definition files */
  const isYakFile = /\.yak\.(j|t)sx?$/.test(resourcePath.matches);
  // The user may import constants from a .yak file
  // e.g. import { primary } from './colors.yak'
  //
  // However .yak files inside .yak files are not be compiled
  // to avoid performance overhead
  const importedYakConstants = isYakFile ? [] : getYakImports(source);
  const replaces: Record<string, unknown> = {};
  await Promise.all(
    importedYakConstants.map(async ({ imports, from }) => {
      const constantValues = await this.importModule(from, {
        layer: "yak-importModule",
      });
      imports.forEach(({ localName, importedName }) => {
        replaces[localName] = constantValues[importedName];
      });
    })
  );

  let result: BabelFileResult | null = null;
  try {
    // Compile the typescript file with babel - this will:
    // - inject the import to the css-module (with .yak.module.css extension)
    // - replace the css template literal with styles from the css-module
    result = babel.transformSync(source, {
      filename: resourcePath,
      configFile: false,
      plugins: [
        [
          "@babel/plugin-syntax-typescript",
          { isTSX: this.resourcePath.endsWith(".tsx") },
        ],
        [
          await import("./babel-yak-plugin.js").then((m) => m.default),
          {
            replaces,
            rootContext,
          },
        ],
      ],
    });
  } catch (error) {
    if (error instanceof InvalidPositionError) {
      return callback(new Error(error.message));
    }
    return callback(new Error("babel transform failed"));
  }
  if (!result?.code) {
    return callback(new Error("babel transform failed"));
  }
  return callback(null, result.code, result.map);
}
