/// @ts-check
const babel = require("@babel/core");
const { resolve } = require("path");

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

  // Config for replacing tokens in css template literals
  // can be based on a typescript file
  const options = this.getOptions();
  const config = options.configPath
    ? await this.importModule(resolve(this.rootContext, options.configPath), {
        layer: "yak-importModule",
      })
    : {};
  const replaces = config.replaces || {};
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
  return callback( 
    null,
    result.code,
    result.map
  )
};
