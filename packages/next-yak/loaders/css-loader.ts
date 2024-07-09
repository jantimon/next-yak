import type { LoaderContext } from "webpack";
import { getTsLoaderResultFromCache } from "./lib/loaderCompilationCache.js";

/**
 * Transform typescript to css
 *
 * This loader reuses the yak tsloader and extracts the css from the generated comments
 */
export default async function cssloader(
  this: LoaderContext<{}>,
): Promise<string | void> {
  return getTsLoaderResultFromCache(this)
}
