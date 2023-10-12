/// <reference types="node" />
import { NextConfig } from "../../example/node_modules/next/dist/server/config.js";

export type YakConfigOptions = { configPath?: string }

const addYak = (yakOptions: YakConfigOptions, nextConfig: NextConfig) => {
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
/**
 * Add Yak to your Next.js app
 * 
 * @usage
 *
 * ```ts
 * // next.config.js
 * const { withYak } = require("next-yak/withYak");
 * const nextConfig = {
 *   // your next config here
 * };
 * module.exports = withYak(nextConfig);
 * ```
 * 
 * With a custom yakConfig
 *
 * ```ts
 * // next.config.js
 * const { withYak } = require("next-yak/withYak");
 * const nextConfig = {
 *   // your next config here
 * };
 * const yakConfig = {
 *   // your yak config
 * };
 * module.exports = withYak(yakConfig, nextConfig);
 * ```
 */
export const withYak: {
  <T extends 
    (
      Record<string, any>
      |
      ((...args: any[]) => Record<string, any>)
      |
      ((...args: any[]) => Promise<Record<string, any>>)
    )
  >(yakOptions: YakConfigOptions, nextConfig: T): T;
  // no yakConfig
  <T extends 
    (
      Record<string, any>
      |
      ((...args: any[]) => Record<string, any>)
      |
      ((...args: any[]) => Promise<Record<string, any>>)
    )
  >(nextConfig: T, _?: undefined): T;
} = (
  maybeYakOptions,
  nextConfig
) => {
  if (nextConfig === undefined) {
    return withYak({}, maybeYakOptions);
  }
  // If the second parameter is present the first parameter must be a YakConfigOptions
  const yakOptions = maybeYakOptions as YakConfigOptions;
  if (typeof nextConfig === "function") {
    /**
     * A NextConfig can be a sync or async function
     * https://nextjs.org/docs/pages/api-reference/next-config-js
     * @param {any[]} args
     */
    return (...args) => {
      /** Dynamic Next Configs can be async or sync */
      const config = nextConfig(...args) as NextConfig | Promise<NextConfig>;
      return config instanceof Promise
        ? config.then((config) => addYak(yakOptions, config))
        : addYak(yakOptions, config);
    };
  }
  return addYak(yakOptions, nextConfig);
};
