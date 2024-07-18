import type { LoaderContext } from "webpack";
import { resolveCrossFileSelectors } from "./lib/resolveCrossFileSelectors.js";
import type { ResolvedYakConfigOptions } from "../withYak/index.js";
import { relative } from "path";

/**
 * Transform typescript to css
 *
 * This loader takes the cached result from the yak tsloader
 * and extracts the css from the generated comments
 */
export default async function cssExtractLoader(
  this: LoaderContext<ResolvedYakConfigOptions>,
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
    const options = this.getOptions();
    const debugLog = createLogger(this, (typeof options.experiments.debug === "object" && (!options.experiments.debug.filter || options.experiments.debug.filter(this.resourcePath))) && options.experiments.debug.type);

    debugLog("ts", source);
    const css = extractCss(source);
    debugLog("css", css);

    return resolveCrossFileSelectors(this, css).then(
      (result) => {
        debugLog("css resolved", css);
        return callback(null, result, sourceMap);
      },
      callback,
    );
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

function createLogger(loaderContext: LoaderContext<ResolvedYakConfigOptions>, debugType: string | undefined | false) {
  return (messageType: "ts" | "css" | "css resolved", message: string) => {
    if (messageType === debugType || debugType === "all") {
      console.log("🐮 Yak", messageType, "\n", loaderContext._compiler ? relative(loaderContext._compiler.context, loaderContext.resourcePath) : loaderContext.resourcePath, "\n\n", message);
    }
  }
}

