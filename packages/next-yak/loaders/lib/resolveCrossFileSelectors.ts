import path from "path";
import babel from "@babel/core";
// This let's vite bundle this dependency correctly (used for the playground)
// @ts-expect-error - this should be a dynamic import
import babelPlugin from "@babel/plugin-syntax-typescript";
import type { Compilation, LoaderContext } from "webpack";
import { getCssModuleLocalIdent } from "next/dist/build/webpack/config/blocks/css/loaders/getCssModuleLocalIdent.js";

export async function resolveCrossFileSelectors(
  loader: LoaderContext<{}>,
  css: string,
): Promise<string> {
  // Search for :module-selector-import(FOO from 'bar')
  // generated by the yak babel plugin
  const moduleSelectorRegex =
    /:module-selector-import\(([^)]+) from '([^']+)'\)/g;
  const matches = [...css.matchAll(moduleSelectorRegex)];
  const firstMatchPosition = matches[0]?.index;
  if (firstMatchPosition === undefined) {
    return css;
  }
  let result = "";
  for (let i = matches.length - 1; i >= 0; i--) {
    const match = matches[i];
    const index = match.index;
    if (index === undefined) {
      throw new Error("Match index is undefined");
    }
    const namedExport = match[1];
    const importPath = match[2];

    const resolved = await resolveIdentifier(
      loader,
      loader.context,
      importPath,
      namedExport,
    );
    if (resolved.type === "unsupported") {
      throw new Error(
        `yak could not import ${namedExport} from ${importPath} - only styled-components, strings and numbers are supported`,
      );
    }

    const replacement =
      resolved.type === "styled-component"
        ? `:global(.${getCssModuleLocalIdent(
            {
              rootContext: loader.rootContext,
              resourcePath: resolved.from,
            },
            null,
            resolved.name,
            {},
          )})`
        : resolved.value;

    // should be the internal namedExport identifier not the exported one
    result =
      String(replacement) +
      css.slice(index + match[0].length, matches[i + 1]?.index) +
      result;
  }
  result = css.slice(0, firstMatchPosition) + result;
  return result;
}

/**
 * Recursively follows the import chain to resolve the identifiers
 * type, name and value.
 *
 * Currently only supports named exports
 */
async function resolveIdentifier(
  loader: LoaderContext<{}>,
  context: string,
  sourcePath: string,
  identifier: string,
): Promise<
  | {
      type: "styled-component";
      from: string;
      name: string;
    }
  | {
      type: "unsupported";
      name: string;
    }
  | {
      type: "constant";
      value: string | number;
    }
> {
  const resolved = await new Promise<string>((resolve, reject) => {
    loader.resolve(context, sourcePath, (err, result) => {
      if (err) {
        return reject(err);
      }
      if (!result) {
        return reject(new Error(`Could not resolve ${sourcePath}`));
      }
      resolve(result);
    });
  });
  loader.addDependency(resolved);
  const exports = await getAllExports(
    loader,
    resolved,
    resolved.endsWith(".tsx"),
  );
  const exportForIdentifier = exports[identifier];
  if (!exportForIdentifier) {
    throw new Error(`Could not find export ${identifier} in ${resolved}
Currently only named exports are supported.
Available exports: ${Object.keys(exports).join(", ")}`);
  }
  if (exportForIdentifier.type === "styled-component") {
    return {
      type: "styled-component",
      from: resolved,
      name: exportForIdentifier.name,
    };
  }
  return exportForIdentifier.type !== "named-export"
    ? exportForIdentifier
    : resolveIdentifier(
        loader,
        path.dirname(resolved),
        exportForIdentifier.from,
        exportForIdentifier.name,
      );
}

type ResolvedExport =
  | {
      type: "unsupported";
      name: string;
    }
  | {
      type: "styled-component";
      name: string;
    }
  | {
      type: "constant";
      value: string | number;
    }
  | {
      type: "named-export";
      name: string;
      from: string;
    };

/**
 *  Cache the exports per file name to avoid parsing the same file multiple times
 */
const exportsCache = new WeakMap<
  Compilation,
  Map<string, Record<string, ResolvedExport>>
>();

/**
 * Use babel together with the "@babel/plugin-syntax-typescript" to extract all exports from a typescript file
 */
async function getAllExports(
  loader: LoaderContext<{}>,
  source: string,
  isTSX: boolean,
): Promise<{ [key: string]: ResolvedExport }> {
  const compilationCache =
    loader._compilation && exportsCache.get(loader._compilation)?.get(source);
  if (compilationCache) {
    return compilationCache;
  }

  const sourceContents = await new Promise<string>((resolve, reject) =>
    loader.fs.readFile(source, "utf-8", (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result || "");
    }),
  );

  let result: { [key: string]: ResolvedExport } = {};
  babel.transformSync(sourceContents, {
    configFile: false,
    plugins: [
      [babelPlugin, { isTSX }],
      [
        (): babel.PluginObj => ({
          visitor: {
            ExportNamedDeclaration({ node }) {
              // reexports e.g. export { Baz as Bar } from "./foo"
              if (node.source) {
                node.specifiers.forEach((specifier) => {
                  const exportSource = node.source?.value;
                  if (
                    specifier.exported.type === "Identifier" &&
                    specifier.exported.name &&
                    specifier.type === "ExportSpecifier" &&
                    specifier.local.type === "Identifier" &&
                    specifier.local.name &&
                    exportSource
                  ) {
                    result[specifier.exported.name] = {
                      type: "named-export",
                      name: specifier.local.name,
                      from: exportSource,
                    };
                  }
                });
              } // named export e.g. export const Foo = 1
              else if (node.declaration?.type === "VariableDeclaration") {
                node.declaration.declarations.forEach((declaration) => {
                  if (
                    declaration.id.type === "Identifier" &&
                    declaration.id.name &&
                    declaration.init
                  ) {
                    // TODO: check if this is a styled component, or constant, or sth unsupported
                    if (
                      declaration.init.type === "CallExpression" ||
                      declaration.init.type === "TaggedTemplateExpression"
                    ) {
                      result[declaration.id.name] = {
                        type: "styled-component",
                        name: declaration.id.name,
                      };
                    } else if (
                      declaration.init.type === "StringLiteral" ||
                      declaration.init.type === "NumericLiteral"
                    ) {
                      result[declaration.id.name] = {
                        type: "constant",
                        value: declaration.init.value,
                      };
                    } else {
                      result[declaration.id.name] = {
                        type: "unsupported",
                        name: declaration.id.name,
                      };
                    }
                  }
                });
              }
            },
            ExportDefaultDeclaration() {
              // TODO: add support for default exports
            },
          },
        }),
      ],
    ],
  });
  if (loader._compilation) {
    const compilationCache = exportsCache.get(loader._compilation);
    const exportsPerFile = compilationCache || new Map();
    exportsPerFile.set(source, result);
    if (!compilationCache) {
      exportsCache.set(loader._compilation, exportsPerFile);
    }
  }
  return result;
}
