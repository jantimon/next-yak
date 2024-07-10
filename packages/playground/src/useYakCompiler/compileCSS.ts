import cssLoader from "next-yak/css-loader";
import tsLoader from "next-yak/ts-loader";
import type { LoaderContext } from "webpack";

export const compileCSS = async (code: string): Promise<string> => {
  const loaderContext = {
    loadModule: (_, cb) => tsLoader.call(loaderContext, code).then((code) => cb(null, code || "", undefined, {} as any)),
    resourcePath: "/some/path/to/file.tsx",
    rootContext: "/some",
    importModule: () => {
      return Promise.resolve({
        queries: {
          sm: "@media (min-width: 640px)",
          md: "@media (min-width: 768px)",
          lg: "@media (min-width: 1024px)",
          xl: "@media (min-width: 1280px)",
          xxl: "@media (min-width: 1536px)",
        },
      });
    },
    async: () => (err: unknown, result: unknown) => {
      if (err) {
        throw err;
      }
      return result;
    },
    getOptions: () => ({}),
  } as Partial<LoaderContext<{}>> as LoaderContext<{}>;
  const cssCode = await cssLoader.call(loaderContext, code, undefined);
  return cssCode || "";
};
