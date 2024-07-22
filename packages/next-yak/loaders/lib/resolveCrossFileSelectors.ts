import path from "path";
import babel from "@babel/core";
// @ts-expect-error - this is used by babel directly so we ignore that it is not typed
import babelPlugin from "@babel/plugin-syntax-typescript";
import type { Compilation, LoaderContext } from "webpack";
import { getCssModuleLocalIdent } from "next/dist/build/webpack/config/blocks/css/loaders/getCssModuleLocalIdent.js";

const yakCssImportRegex = /--yak-css-import\:\s*url\("([^"]+)"\)/g;

export async function resolveCrossFileSelectors(
  loader: LoaderContext<{}>,
  css: string,
): Promise<string> {
  let fileBasedResolveCache = new Map<string, ReturnType<typeof resolveIdentifier>>();
  // Find cross-file-imports
  const matches = [...css.matchAll(yakCssImportRegex)].map((match) => {
    const [fullMatch, encodedArguments] = match;
    const [moduleSpecifier, ...specifier] = encodedArguments
      .split(":")
      .map((entry) => decodeURIComponent(entry));
    const position = match.index!;
    if (specifier.length === 0) {
      throw new Error(
        `Invalid module import selector ${fullMatch} - no specifier provided`,
      );
    }
    return {
      moduleSpecifier,
      specifier,
      position,
      size: fullMatch.length,
    };
  });
  const firstMatchPosition = matches[0]?.position;
  if (firstMatchPosition === undefined) {
    return css;
  }
  // Replace the imports with the resolved values
  let result = "";
  for (let i = matches.length - 1; i >= 0; i--) {
    const { moduleSpecifier, specifier, position, size } = matches[i];
    const resolved = await resolveCrossFileValue(moduleSpecifier, specifier, fileBasedResolveCache, loader);
    if (resolved.type === "unsupported") {
      throw new Error(
        `yak could not import ${specifier.join(
          ".",
        )} from ${moduleSpecifier} - only styled-components, strings and numbers are supported`,
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
        : getConstantFromResolvedValue(resolved.value, specifier.slice(1));

    // should be the internal namedExport identifier not the exported one
    result =
      String(replacement) +
      css.slice(position + size, matches[i + 1]?.position) +
      result;
  }
  result = css.slice(0, firstMatchPosition) + result;
  return result;
}

const getConstantFromResolvedValue = (
  record: RecursiveRecord | string | number,
  specifier: string[],
): string | number => {
  let current: string | number | RecursiveRecord = record;
  for (const key of specifier) {
    if (typeof current === "string" || typeof current === "number") {
      throw new Error(
        `Could not resolve ${specifier.join(".")} in ${JSON.stringify(record)}`,
      );
    }
    current = current[key];
  }
  if (typeof current === "string" || typeof current === "number") {
    return current;
  }
  throw new Error(
    `Could not resolve ${specifier.join(".")} in ${JSON.stringify(record)}`,
  );
};

 /**
  * Resolve the value of from a cross-file-import
  * 
  * For regular files the specifier is resolved with resolveIdentifier
  * For .yak files the entire module is resolved and evaluated with resolveYakModule
  */
 async function resolveCrossFileValue (moduleSpecifier: string, specifier: string[], resolveCache: Map<string, ReturnType<typeof resolveIdentifier>>, loader: LoaderContext<{}>) {
  const isYak = moduleSpecifier.endsWith(".yak");
  let resolvedModule: ReturnType<typeof resolveIdentifier>;
  if (!isYak) {
    // For non .yak files only the specifier is resolved
    // therfore only the specifier can be cached
    const resolveKey = `${moduleSpecifier} : ${specifier[0]}`;
    let resolvedFromCache = resolveCache.get(resolveKey);
    resolvedModule = resolvedFromCache || resolveIdentifier(loader, loader.context, moduleSpecifier, specifier[0]);
    if (!resolvedFromCache) {
      resolveCache.set(resolveKey, resolvedModule);
    }
  } else {
    // For yak files the entire module is executed with node (which is slower) and returned
    // therefore the entire module can be cached as record
    let resolvedFromCache = resolveCache.get(moduleSpecifier);
    resolvedModule = resolvedFromCache || resolveYakModule(loader, moduleSpecifier);
    if (!resolvedFromCache) {
      resolveCache.set(moduleSpecifier, resolvedModule);
    }
    // To align the return value with the non-yak case, we need to resolve the specifier
    resolvedModule = resolvedModule.then((moduleValues) => {
      if (moduleValues.type !== "record") {
        throw new Error("resolveYakModule returns always a record");
      }
      const value = moduleValues.value[specifier[0]];
      if (typeof value === "string" || typeof value === "number") {
        return {
          type: "constant" as const,
          value,
        };
      }
      if (value && (Array.isArray(value) || typeof value === "object")) {
        return {
          type: "record" as const,
          value,
        };
      }
        throw new Error(
          `Could not find export ${specifier[0]} in ${moduleSpecifier}`
        );
    });
  }
  return resolvedModule;
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
      type: "record";
      value: RecursiveRecord;
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

type RecursiveRecord = {
  [key: string]: RecursiveRecord | number | string;
};

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
      type: "record";
      value: RecursiveRecord;
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
                    } else if (
                      declaration.init.type === "TemplateLiteral" &&
                      declaration.init.quasis.length === 1
                    ) {
                      result[declaration.id.name] = {
                        type: "constant",
                        value: declaration.init.quasis[0].value.raw,
                      };
                    } else if (declaration.init.type === "ObjectExpression") {
                      result[declaration.id.name] = {
                        type: "record",
                        value: parseObjectExpression(declaration.init),
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

function parseObjectExpression(
  node: babel.types.ObjectExpression,
): RecursiveRecord {
  let result: RecursiveRecord = {};
  for (const property of node.properties) {
    if (
      property.type === "ObjectProperty" &&
      property.key.type === "Identifier"
    ) {
      const key = property.key.name;
      if (
        property.value.type === "StringLiteral" ||
        property.value.type === "NumericLiteral"
      ) {
        result[key] = property.value.value;
      } else if (
        property.value.type === "TemplateLiteral" &&
        property.value.quasis.length === 1
      ) {
        result[key] = property.value.quasis[0].value.raw;
      } else if (property.value.type === "ObjectExpression") {
        result[key] = parseObjectExpression(property.value);
      }
    }
  }
  return result;
}

function resolveYakModule(loader: LoaderContext<{}>, moduleSpecifier: string) {
  return loader.importModule(moduleSpecifier).then((module) => (
    {
      type: "record" as const,
      value: module as RecursiveRecord,
    }
  ));
}