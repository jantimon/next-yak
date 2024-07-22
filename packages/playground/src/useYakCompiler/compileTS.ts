// import tsLoader from "next-yak/ts-loader";
import type { LoaderContext } from "webpack";
// @ts-ignore
import * as babel from "@babel/core";
// @ts-ignore
import * as babelTs from "@babel/plugin-syntax-typescript";
// import * as babelTypes from "@babel/types";
import * as path from "path";

const loadedYakVersions = new Map<string, any>();

export const getTsLoader = async (yakVersion: string) => {
  if (!loadedYakVersions.has(yakVersion)) {
    loadedYakVersions.set(
      yakVersion,
      await fetchTsLoader(
        () => babel,
        () => babelTs,
        () => babel.types,
        () => path,
        yakVersion
      )
    );
  }
  return await loadedYakVersions.get(yakVersion).default;
};

export const compileTS = async (
  code: string,
  yakVersion: string
): Promise<string> => {
  const loaderContext = {
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
  const tsLoader = await getTsLoader(yakVersion);
  return tsLoader.call(loaderContext as any, code)!;
};

async function fetchTsLoader(
  getBabelCore: () => any,
  getBabelTs: () => any,
  getBabelTypes: () => any,
  getPath: () => any,
  version?: string
): Promise<any> {
  version = version || "0.2.6";
  console.log(`Fetching ts-loader@${version}`);
  const cdnUrl = `https://unpkg.com/next-yak@${version}/dist/loaders/ts-loader.cjs`;

  const response = await fetch(cdnUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch ts-loader: ${response.statusText}`);
  }

  const code = await response.text();

  // Create a module-like environment
  const module = { exports: {} };
  const require = (dep: string) => {
    if (dep === "@babel/core") return getBabelCore();
    if (dep === "@babel/plugin-syntax-typescript") return getBabelTs();
    if (dep === "@babel/types") return getBabelTypes();
    if (dep === "path") return getPath();
    // Mock any required dependencies here
    // if (dep === 'webpack') return { /* mock webpack object */ };
    throw new Error(`Unmocked dependency: ${dep}`);
  };

  // Evaluate the code
  const fn = new Function("module", "exports", "require", code);
  fn(module, module.exports, require);

  return module.exports;
}
