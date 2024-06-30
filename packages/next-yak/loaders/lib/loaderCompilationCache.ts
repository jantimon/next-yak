/*
 * A dangerous way to cache the result of the ts-loader
 * 
 * This is dangerous because we rely on the webpack internals and loader execution
 * to cache the result of the ts-loader but it is the only way to avoid compiling the typescript
 * code twice
 */
import type { LoaderContext } from "webpack";
const cacheKey = "__next_yak_cache__";

type LoaderContextWithCompilation = LoaderContext<unknown> & {
  _compilation: { __next_yak_cache__?: Map<string, string> };
};

/**
 * Usually loaders are stateless and cached by webpack.
 * However our css-loader will always be executed AFTER the file was processed by the tsloader
 *
 * By caching the result of the tsloader we can reuse the result in the cssloader and therefore
 * avoid running the tsloader twice
 */
export const writeTsLoaderResultToCache = (
  loaderContext: LoaderContext<unknown>,
  code: string
) => {
  const cacheMap = ((
    loaderContext as LoaderContextWithCompilation
  )._compilation[cacheKey] ||= new Map());
  cacheMap.set(loaderContext.resourcePath, code);
};

/**
 * Usually loaders are stateless and cached by webpack.
 * However our css-loader will always be executed AFTER the file was processed by the tsloader
 *
 * By caching the result of the tsloader we can reuse the result in the cssloader and therefore
 * avoid running the tsloader twice
 */
export const getTsLoaderResultFromCache = (
  loaderContext: LoaderContext<unknown>
) => {
  const preCompiled = (
    loaderContext as LoaderContextWithCompilation
  )._compilation[cacheKey]?.get(loaderContext.resourcePath);
  if (!preCompiled) {
    throw new Error(
      "The file was processed by the css-loader before the ts-loader which should never happen"
    );
  }
  return preCompiled;
};
