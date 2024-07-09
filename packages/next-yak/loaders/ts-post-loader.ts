import type { LoaderContext } from "webpack";
import { resolveCrossFileSelectors } from "./lib/resolveCrossFileSelectors.js";
import { writeTsLoaderResultToCache } from "./lib/loaderCompilationCache.js";

/**
 * Transform typescript to css and store the result in memory
 *
 * This loader takes the code from the yak tsloader
 * and extracts the css from the generated comments
 *
 * As resolving cross file selectors might add additional dependencies
 * so it has access to `code` and can write it properly to the cache
 * for the css loader
 */
export default async function tsPostLoader(
  this: LoaderContext<{}>,
  code: string,
  sourceMap: string | undefined,
): Promise<string | void> {
  const callback = this.async();
  const css = extractCss(code);
  return resolveCrossFileSelectors(this, css).then((result) => {
    writeTsLoaderResultToCache(this, result);
    return callback(null, code, sourceMap);
  }, callback);
}

function extractCss(code: string): string {
  const codeParts = code.split("/*YAK Extracted CSS:\n");
  let result = "";
  for (let i = 1; i < codeParts.length; i++) {
    const codeUntilEnd = codeParts[i].split("*/")[0];
    result += codeUntilEnd;
  }
  return result;
}
