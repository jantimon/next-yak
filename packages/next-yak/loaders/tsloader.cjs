/// @ts-check
const babel = require("@babel/core");
const { resolve } = require("path");

/**
 * Loader for typescript files that use yacijs, it replaces the css template literal with a call to the 'styled' function
 * @param {string} source
 * @this {any}
 * @returns {Promise<string | void>}
 */
module.exports = async function tsloader(source) {
  // ignore files if they don't use yacijs
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
  // Parse source with babel and pass options to the Babel plugin
  const result = babel.transformSync(source, {
    filename: resourcePath,
    configFile: false,
    // Use the Babel plugin you created here and pass the required options
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
