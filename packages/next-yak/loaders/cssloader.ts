import type { LoaderContext } from "webpack";
import { resolveCrossFileSelectors } from "./lib/resolveCrossFileSelectors.js";
import { getTsLoaderResultFromCache } from "./lib/loaderCompilationCache.js";

/**
 * Transform typescript to css
 *
 * This loader reuses the yak tsloader and extracts the css from the generated comments
 */
export default async function cssloader(
  this: LoaderContext<{}>,
): Promise<string | void> {
  const callback = this.async();
  const typescriptCode = getTsLoaderResultFromCache(this);
  const css = extractCss(typescriptCode);
  return resolveCrossFileSelectors(this, css).then(
    (result) => callback(null, result),
    callback
  );
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
