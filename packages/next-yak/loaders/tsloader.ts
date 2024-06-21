// we need this import like this, because Vite's DEV server doesn't handle it properly https://github.com/vitejs/vite/issues/16435
import * as babel from "@babel/core";
import type { BabelFileResult } from "@babel/core";
// This let's vite bundle this dependency correctly (used for the playground)
// @ts-expect-error - this should be a dynamic import
import babelPlugin from "@babel/plugin-syntax-typescript";
import getYakImports from "./lib/getYakImports.js";
import YakBabelPlugin, { InvalidPositionError } from "./babel-yak-plugin.js";
import type { LoaderContext } from "webpack";
import { YakConfigOptions } from "../withYak/index.js";

/**
 * Loader for typescript files that use yak, it replaces the css template literal with a call to the 'styled' function
 */
export default async function tsloader(
  this: LoaderContext<YakConfigOptions>,
  source: string,
): Promise<string | void> {
  // ignore files if they don't use yak
  if (!source.includes("next-yak")) {
    return source;
  }
  const callback = this.async();
  const { rootContext, resourcePath } = this;

  /** .yak files are constant definition files */
  const isYakFile = /\.yak\.(j|t)sx?$/.test(resourcePath);
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
    }),
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
        [babelPlugin, { isTSX: this.resourcePath.endsWith(".tsx") }],
        [
          YakBabelPlugin,
          {
            replaces,
            rootContext,
            devMode: this.mode === "development",
            crossFile: this.getOptions().experiments?.crossFileSelectors ?? false,
          },
        ],
      ],
    });
  } catch (error) {
    if (error instanceof InvalidPositionError) {
      return callback(new Error(error.message));
    }
    return callback(
      error instanceof Error ? error : new Error("babel transform failed"),
    );
  }
  if (!result?.code) {
    return callback(new Error("babel transform failed"));
  }
  return callback(null, result.code, result.map ?? undefined);
}
