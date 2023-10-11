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
}

export type YakConfigOptions = { configPath?: string }
