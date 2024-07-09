import cssLoader from "next-yak/css-loader";
import tsLoader from "next-yak/ts-loader";
import tsPostLoader from "next-yak/ts-post-loader";

export const compileCSS = async (code: string): Promise<string> => {
  const loaderContext = {
    _compilation: {},
    resourcePath: "/some/path/to/file.tsx",
    rootContext: "/some",
    importModule: () => {
      return {
        queries: {
          sm: "@media (min-width: 640px)",
          md: "@media (min-width: 768px)",
          lg: "@media (min-width: 1024px)",
          xl: "@media (min-width: 1280px)",
          xxl: "@media (min-width: 1536px)",
        },
      };
    },
    async: () => (err: unknown, result: unknown) => {
      if (err) {
        throw err;
      }
      return result;
    },
  } as any;
  // TsPostLoader will add a cache to _compilation
  await tsPostLoader.call(loaderContext, await tsLoader.call(loaderContext, code) || "", undefined);
  // CssLoader will read the cache from _compilation and return the css
  return (await cssLoader.call(loaderContext))!;
};
