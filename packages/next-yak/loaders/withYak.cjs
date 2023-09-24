// @ts-check
/// <reference types="node" />
/** @typedef {import("./withYak.d.ts").YakConfigOptions} YakConfigOptions */

/**
 Add a Yak to a Next.js app
 @param {YakConfigOptions} yakOptions
 @param {any} nextConfig
*/
const addYak = (yakOptions, nextConfig) => {
  const previousConfig = nextConfig.webpack;
  nextConfig.webpack = (webpackConfig, options) => {
    if (previousConfig) {
      webpackConfig = previousConfig(webpackConfig, options);
    }
    webpackConfig.module.rules.push({
      test: /\.tsx?$/,
      loader: require.resolve("./tsloader.cjs"),
      options: yakOptions,
    });
    webpackConfig.module.rules.push({
      test: /\.yak\.module\.css$/,
      loader: require.resolve("./cssloader.cjs"),
      options: yakOptions,
    });

    return webpackConfig;
  };
  return nextConfig;
};

module.exports = {
  // Wrapper to allow sync, async, and function configuration of Next.js
  withYak: (yakOptions, nextConfig) => {
    if (typeof nextConfig === "function") {
      return (...args) => {
        const config = nextConfig(...args);
        if (config.then) {
          return config.then((config) => addYak(yakOptions, config));
        }
        return addYak(yakOptions, config);
      };
    }
    return addYak(yakOptions, nextConfig);
  },
};
