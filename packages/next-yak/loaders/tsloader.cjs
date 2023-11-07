/// @ts-check
const babel = require("@babel/core");
const getYakImports = require("./lib/getYakImports.cjs");

/**
 * Loader for typescript files that use yak, it replaces the css template literal with a call to the 'styled' function
 * @param {string} source
 * @this {any}
 * @returns {Promise<string | void>}
 */
module.exports = async function tsloader(source) {
  // ignore files if they don't use yak
  if (!source.includes("next-yak")) {
    return source;
  }
  const callback = this.async();

  /** .yak files are constant definition files */
  const isYakFile = this.resourcePath.matches(/\.yak\.(j|t)sx?$/);
  // The user may import constants from a .yak file
  // e.g. import { primary } from './colors.yak'
  // 
  // However .yak files inside .yak files are not be compiled
  // to avoid performance overhead
  const importedYakConstantNames = isYakFile ? [] : getYakImports(source).map(({ imports }) => imports.map(({ localName }) => localName)).flat(2);
  const replaces = Object.fromEntries(importedYakConstantNames.map((name) => [name, null]));

  const { rootContext, resourcePath } = this;
  // Compile the typescript file with babel - this will:
  // - inject the import to the css-module (with .yak.module.css extension)
  // - replace the css template literal with styles from the css-module
  const result = babel.transformSync(source, {
    filename: resourcePath,
    configFile: false,
    plugins: [
      [
        "@babel/plugin-syntax-typescript",
        { isTSX: this.resourcePath.endsWith(".tsx") },
      ],
      [
        require.resolve("./babel-yak-plugin.cjs"),
        {
          replaces,
          rootContext,
        },
      ],
    ],
  });
  if (!result?.code) {
    throw new Error("babel transform failed");
  }
  return callback(null, result.code, result.map);
};
