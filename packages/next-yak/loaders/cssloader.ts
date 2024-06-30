import tsloader from "./tsloader.js";
import type { LoaderContext } from "webpack";
import { resolveCrossFileSelectors } from "./lib/resolveCrossFileSelectors.js";

/**
 * Transform typescript to css
 *
 * This loader reuses the yak tsloader and extracts the css from the generated comments
 */
export default async function cssloader(
  this: LoaderContext<{}>,
  source: string,
): Promise<string | void> {
  const callback = this.async();

  return tsloader.call(
    {
      ...this,
      async: () => (err, code) => {
        if (err || !code) {
          return callback(
            err && err instanceof Error ? err : new Error("No code returned"),
          );
        }
        const css = extractCss(String(code));
        return resolveCrossFileSelectors(this, css).then(
          (result) => callback(null, result),
          callback,
        );
      },
    },
    source,
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
