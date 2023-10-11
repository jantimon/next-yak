// @ts-check
/// <reference types="node" />
/** @typedef {import("./index.d.ts").YakConfigOptions} YakConfigOptions */
/** @typedef {import("../../example/node_modules/next/dist/server/config.js").NextConfig} NextConfig */

/**
 Add a Yak to a Next.js app
 @param {YakConfigOptions} yakOptions
 @param {NextConfig} nextConfig
*/
const addYak = (yakOptions, nextConfig) => {
  const previousConfig = nextConfig.webpack;
  nextConfig.webpack = (webpackConfig, options) => {
    if (previousConfig) {
      webpackConfig = previousConfig(webpackConfig, options);
    }
    webpackConfig.module.rules.push({
      test: /\.tsx?$/,
      loader: require.resolve("../loaders/tsloader.cjs"),
      options: yakOptions,
      issuerLayer: {
        // prevent recursions when calling this.importModule
        // in the tsloader
        not: ["yak-importModule"],
      },
    });
    webpackConfig.module.rules.push({
      test: /\.yak\.module\.css$/,
      loader: require.resolve("../loaders/cssloader.cjs"),
      options: yakOptions,
    });

    return webpackConfig;
  };
  return nextConfig;
};

// Wrapper to allow sync, async, and function configuration of Next.js
/** @type {typeof import("./index.d.ts")["withYak"]} */
const withYak = (
  maybeYakOptions,
  nextConfig
) => {
  if (nextConfig === undefined) {
    return withYak({}, maybeYakOptions);
  }
  // If the second parameter is present the first parameter must be a YakConfigOptions
  const yakOptions = /** @type {YakConfigOptions} */(maybeYakOptions);
  if (typeof nextConfig === "function") {
    /**
     * A NextConfig can be a sync or async function
     * https://nextjs.org/docs/pages/api-reference/next-config-js
     * @param {any[]} args
     */
    return (...args) => {
      /** @type {NextConfig | Promise<NextConfig>} Dynamic Next Configs can be async or sync */
      const config = nextConfig(...args);
      return config instanceof Promise
        ? config.then((config) => addYak(yakOptions, config))
        : addYak(yakOptions, config);
    };
  }
  return addYak(yakOptions, nextConfig);
};

module.exports = {
  withYak,
};
