import path from "path";
import babel from "@babel/core";
// @ts-expect-error - this is used by babel directly so we ignore that it is not typed
import babelPlugin from "@babel/plugin-syntax-typescript";
import type { Compilation, LoaderContext } from "webpack";
import { getCssModuleLocalIdent } from "next/dist/build/webpack/config/blocks/css/loaders/getCssModuleLocalIdent.js";

const yakCssImportRegex = /--yak-css-import\:\s*url\("([^"]+)"\)/g;

const compilationCache = new WeakMap<
  Compilation,
  Map<string, Promise<ParsedFile>>
>();

/**
 * Resolves cross-file selectors in css files
 *
 * e.g.:
 * theme.ts:
 * ```ts
 * export const colors = {
 *   primary: "#ff0000",
 *   secondary: "#00ff00",
 * };
 * ```
 *
 * styles.ts:
 * ```ts
 * import { colors } from "./theme";
 * export const button = css`
 *  background-color: ${colors.primary};
 * `;
 */
export async function resolveCrossFileSelectors(
  loader: LoaderContext<{}>,
  css: string,
): Promise<string> {
  // Search for --yak-css-import: url("path/to/module") in the css
  const matches = [...css.matchAll(yakCssImportRegex)].map((match) => {
    const [fullMatch, encodedArguments] = match;
    const [moduleSpecifier, ...specifier] = encodedArguments
      .split(":")
      .map((entry) => decodeURIComponent(entry));
    return {
      encodedArguments,
      moduleSpecifier,
      specifier,
      position: match.index!,
      size: fullMatch.length,
    };
  });
  if (matches.length === 0) return css;

  try {
    // Resolve all imports concurrently
    const exportCache = new Map<string, Promise<ResolvedExport>>();
    const resolvedValues = await Promise.all(
      matches.map(({ moduleSpecifier, specifier, encodedArguments }) => {
        // The cache prevents resolving the same specifier multiple times
        // e.g.:
        // const a = css`
        //   color: ${colors.primary};
        //   border-color: ${colors.primary};
        // `;
        const resolvedFromCache = exportCache.get(encodedArguments);
        const resolvedValue =
          resolvedFromCache ||
          parseModule(loader, moduleSpecifier, loader.context).then(
            (parsedModule) =>
              resolveModuleSpecifierRecursively(
                loader,
                parsedModule,
                specifier,
              ),
          );
        if (!resolvedFromCache) {
          exportCache.set(encodedArguments, resolvedValue);
        }
        return resolvedValue;
      }),
    );

    // Replace the imports with the resolved values
    let result = css;
    for (let i = matches.length - 1; i >= 0; i--) {
      const { position, size } = matches[i];
      const resolved = resolvedValues[i];

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

      result =
        result.slice(0, position) +
        String(replacement) +
        result.slice(position + size);
    }

    return result;
  } catch (error) {
    throw new Error(
      `Error resolving cross-file selectors: ${
        (error as Error).message
      }\nFile: ${loader.resourcePath}`,
    );
  }
}

/**
 * Resolves a module specifier to a parsed file
 *
 * e.g.:
 * ```
 * parseModule(loader, "./theme", "/path/to/styles.ts")
 * // -> { type: 'regular', secondary: { type: 'constant', value: '#00ff00' } } }, filePath: '/path/to/theme.ts' }
 * ```
 */
async function parseModule(
  loader: LoaderContext<{}>,
  moduleSpecifier: string,
  context: string,
): Promise<ParsedFile> {
  const compilation = loader._compilation;
  if (!compilation) {
    throw new Error("Webpack compilation object not available");
  }
  let cache = compilationCache.get(compilation);
  if (!cache) {
    cache = new Map();
    compilationCache.set(compilation, cache);
  }
  // The cache key is valid for the entire project so it can be reused
  // for different source files
  const cacheKey = path.resolve(context, moduleSpecifier);
  let filePromise = cache.get(cacheKey);
  if (!filePromise) {
    filePromise = (async () => {
      const resolved = await new Promise<string>((resolve, reject) => {
        loader.resolve(context, moduleSpecifier, (err, result) => {
          if (err) return reject(err);
          if (!result)
            return reject(new Error(`Could not resolve ${moduleSpecifier}`));
          resolve(result);
        });
      });
      return parseFile(loader, resolved);
    })();
    cache.set(cacheKey, filePromise);
  }
  // on file change, invalidate the cache
  loader.addDependency((await filePromise).filePath);
  return filePromise;
}

async function parseFile(
  loader: LoaderContext<{}>,
  filePath: string,
): Promise<ParsedFile> {
  const isYak =
    filePath.endsWith(".yak.ts") ||
    filePath.endsWith(".yak.tsx") ||
    filePath.endsWith(".yak.js") ||
    filePath.endsWith(".yak.jsx");
  const isTSX = filePath.endsWith(".tsx");

  try {
    if (isYak) {
      const module: Record<string, unknown> =
        await loader.importModule(filePath);
      const mappedModule = Object.fromEntries(
        Object.entries(module).map(([key, value]): [string, ParsedExport] => {
          if (typeof value === "string" || typeof value === "number") {
            return [key, { type: "constant" as const, value }];
          } else if (
            value &&
            (typeof value === "object" || Array.isArray(value))
          ) {
            return [key, { type: "record" as const, value }];
          } else {
            return [key, { type: "unsupported" as const }];
          }
        }),
      );
      return { type: "yak", exports: mappedModule, filePath };
    }
    const sourceContents = await new Promise<string>((resolve, reject) =>
      loader.fs.readFile(filePath, "utf-8", (err, result) => {
        if (err) return reject(err);
        resolve(result || "");
      }),
    );

    const exports = await parseExports(sourceContents, isTSX);
    return { type: "regular", exports, filePath };
  } catch (error) {
    throw new Error(
      `Error parsing file ${filePath}: ${(error as Error).message}`,
    );
  }
}

async function parseExports(
  sourceContents: string,
  isTSX: boolean,
): Promise<Record<string, ParsedExport>> {
  let exports: Record<string, ParsedExport> = {};

  try {
    babel.transformSync(sourceContents, {
      configFile: false,
      plugins: [
        [babelPlugin, { isTSX }],
        [
          (): babel.PluginObj => ({
            visitor: {
              ExportNamedDeclaration({ node }) {
                if (node.source) {
                  node.specifiers.forEach((specifier) => {
                    if (
                      specifier.type === "ExportSpecifier" &&
                      specifier.exported.type === "Identifier" &&
                      specifier.local.type === "Identifier"
                    ) {
                      exports[specifier.exported.name] = {
                        type: "re-export",
                        from: node.source!.value,
                        imported: specifier.local.name,
                      };
                    }
                  });
                } else if (node.declaration?.type === "VariableDeclaration") {
                  node.declaration.declarations.forEach((declaration) => {
                    if (
                      declaration.id.type === "Identifier" &&
                      declaration.init
                    ) {
                      exports[declaration.id.name] = parseExportValueExpression(
                        declaration.init,
                      );
                    }
                  });
                }
              },
              ExportAllDeclaration({ node }) {
                if (Object.keys(exports).length === 0) {
                  exports["*"] ||= {
                    type: "star-export",
                    from: [],
                  };
                  if (exports["*"].type !== "star-export") {
                    throw new Error("Invalid star export state");
                  }
                  exports["*"].from.push(node.source.value);
                }
              },
            },
          }),
        ],
      ],
    });

    return exports;
  } catch (error) {
    throw new Error(`Error parsing exports: ${(error as Error).message}`);
  }
}

function parseExportValueExpression(
  node: babel.types.Expression,
): ParsedExport {
  if (
    node.type === "CallExpression" ||
    node.type === "TaggedTemplateExpression"
  ) {
    return { type: "styled-component" };
  } else if (node.type === "StringLiteral" || node.type === "NumericLiteral") {
    return { type: "constant", value: node.value };
  } else if (node.type === "TemplateLiteral" && node.quasis.length === 1) {
    return { type: "constant", value: node.quasis[0].value.raw };
  } else if (node.type === "ObjectExpression") {
    return { type: "record", value: parseObjectExpression(node) };
  }
  return { type: "unsupported" };
}

function parseObjectExpression(
  node: babel.types.ObjectExpression,
): Record<string, any> {
  let result: Record<string, any> = {};
  for (const property of node.properties) {
    if (
      property.type === "ObjectProperty" &&
      property.key.type === "Identifier"
    ) {
      const key = property.key.name;
      result[key] = parseExportValueExpression(
        property.value as babel.types.Expression,
      );
    }
  }
  return result;
}

/**
 * Follows a specifier recursively until it finds its constant value
 * for example here it follows "colors.primary"
 *
 * ```
 * resolveModuleSpecifierRecursively(loader, "@/theme", ["colors", "primary"], "colors:primary")`
 * // -> { type: 'constant', value: '#ff0000' }
 * ```
 *
 * example structure:
 *
 * styles.ts:
 * ```
 * import { colors } from "@/theme";
 * export const button = css`color: ${colors.primary}`;
 * ```
 *
 * theme.ts:
 * ```
 * export { colors } from "./colors";
 * ```
 *
 * colors.ts:
 * ```
 * export const colors = { primary: "#ff0000" };
 * ```
 *
 */
async function resolveModuleSpecifierRecursively(
  loader: LoaderContext<{}>,
  module: ParsedFile,
  specifier: string[],
): Promise<ResolvedExport> {
  try {
    const exportName = specifier[0];
    let exportValue = module.exports[exportName];
    // Follow star exports if there is only a single one
    // and the export does not exist in the current module
    if (exportValue === undefined) {
      const starExport = module.exports["*"];
      if (starExport?.type === "star-export") {
        if (starExport.from.length > 1) {
          throw new Error(
            `Could not resolve ${specifier.join(".")} in module ${
              module.filePath
            } - Multiple star exports are not supported for performance reasons`,
          );
        }
        exportValue = {
          type: "re-export" as const,
          from: starExport.from[0],
          imported: exportName,
        };
      } else {
        throw new Error(
          `Could not resolve "${specifier.join(".")}" in module ${
            module.filePath
          }`,
        );
      }
    }
    // Follow reexport
    if (exportValue.type === "re-export") {
      const importedModule = await parseModule(
        loader,
        exportValue.from,
        path.dirname(module.filePath),
      );
      return resolveModuleSpecifierRecursively(loader, importedModule, [
        exportValue.imported,
        ...specifier.slice(1),
      ]);
    }

    if (exportValue.type === "styled-component") {
      return {
        type: "styled-component",
        from: module.filePath,
        name: specifier[specifier.length - 1],
      };
    } else if (exportValue.type === "constant") {
      return { type: "constant", value: exportValue.value };
    } else if (exportValue.type === "record") {
      let current: any = exportValue.value;
      let depth = 0;
      /// Drill down the specifier e.g. colors.primary
      do {
        if (typeof current === "string" || typeof current === "number") {
          return {
            type: "constant" as const,
            value: current,
          };
        } else if (
          !current ||
          (typeof current !== "object" && !Array.isArray(current))
        ) {
          throw new Error(
            `Error unpacking Record/Array "${exportName}".\nKey "${
              specifier[depth]
            }" was of type "${typeof current}" but only String and Number are supported`,
          );
        }
        depth++;
        current = current[specifier[depth]];
      } while (current);
    }
    throw new Error(`Error unpacking Record/Array for unkown reason`);
  } catch (error) {
    throw new Error(
      `Error resolving from module ${module.filePath}: ${
        (error as Error).message
      }`,
    );
  }
}

type ParsedFile =
  | { type: "regular"; exports: Record<string, ParsedExport>; filePath: string }
  | { type: "yak"; exports: Record<string, ParsedExport>; filePath: string };

type ParsedExport =
  | { type: "styled-component" }
  | { type: "constant"; value: string | number }
  | { type: "record"; value: {} }
  | { type: "unsupported" }
  | { type: "re-export"; from: string; imported: string }
  | { type: "star-export"; from: string[] };

type ResolvedExport =
  | { type: "styled-component"; from: string; name: string }
  | { type: "constant"; value: string | number };
