import type { LoaderContext } from "webpack";
import { resolveCrossFileSelectors } from "./lib/resolveCrossFileSelectors.js";
/**
 * Transform typescript to css
 *
 * This loader takes the cached result from the yak tsloader
 * and extracts the css from the generated comments
 */
export default async function cssExtractLoader(
  this: LoaderContext<{}>,
  // Instead of the source code, we receive the extracted css
  // from the ts-loader transformation
  _code: string,
  sourceMap: string | undefined,
): Promise<string | void> {
  const callback = this.async();
  // Load the module from the original typescript request (without !=! and the query)
  return this.loadModule(this.resourcePath, (err, source) => {
    if (err) {
      return callback(err);
    }
    const css = extractCss(source);
    return resolveCrossFileSelectors(this, css).then((result) =>  callback(null, result, sourceMap), callback);
  });
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
