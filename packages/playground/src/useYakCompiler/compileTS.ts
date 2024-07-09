import tsLoader from "next-yak/ts-loader";
import type { Compilation, LoaderContext } from "webpack";

export const compileTS = async (code: string): Promise<string> => {
  const loaderContext = {
    _compilation: {} as any as Compilation,
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
  return (await tsLoader.call(loaderContext as any, code))!;
};