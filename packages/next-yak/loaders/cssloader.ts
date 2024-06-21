import path from "path";
import tsloader from "./tsloader.js";
import fs from "fs/promises";
import babel from "@babel/core";
// This let's vite bundle this dependency correctly (used for the playground)
// @ts-expect-error - this should be a dynamic import
import babelPlugin from "@babel/plugin-syntax-typescript";


import { getCssModuleLocalIdent } from "next/dist/build/webpack/config/blocks/css/loaders/getCssModuleLocalIdent.js"

/**
 * Transform typescript to css
 *
 * This loader reuses the yak tsloader and extracts the css from the generated comments
 */
export default async function cssloader(
  this: any,
  source: string,
): Promise<string | void> {
  const callback = this.async();

  return tsloader.call(
    {
      ...this,
      async: () => (err: unknown | null, code?: string) => {
        if (err || !code) {
          return callback(err || new Error("No code returned"));
        }
        const css =  extractCss(code);
        resolveExternalImports(this, css)
          .then((result) => callback(null, result), callback);
      },
    },
    source,
  );
}

function extractCss(code: string): string {
  const codeParts = code.split("/*YAK Extracted CSS:\n");
  let result = "";
  for (let i = 1; i < codeParts.length; i++) {
    const codeUntilEnd = codeParts[i].split("*/")[0];
    result += codeUntilEnd;
  }
  // TODO: REMOVE!!
  if (result.includes("display: whatever;")) {
    result += "\n.foo:module-selector-import(ClockHands from '../Test') { color: red; }"
    }
  return result;
}

async function resolveExternalImports(loader: any, css: string): Promise<string> {
  // Search for :module-selector-import(FOO from 'bar')
  const moduleSelectorRegex = /:module-selector-import\(([^)]+) from '([^']+)'\)/g;
  const matches = [...css.matchAll(moduleSelectorRegex)]
  // Reverse itereate to replace from the end
  for (let i = matches.length - 1; i >= 0; i--) {
    const match = matches[i];
    const index = match.index;
    if (index === undefined) {
      throw new Error("Match index is undefined");
    }
    const namedExport = match[1];
    const importPath = match[2];
    
    const resolved = await resolveIdentifier(loader, loader.context, importPath, namedExport);
    // should be the internal namedExport identifier not the exported one
    console.log("resolved", resolved, { namedExport, importPath })
    const selector = `:global(.${getCssModuleLocalIdent({
      rootContext: loader.rootContext,
      resourcePath: resolved.from,
    }, null, resolved.name, {  })})`;
    css = css.substring(0, index) + selector + css.substring(index + match[0].length);
  }
  return css;
}

async function resolveIdentifier(loader: any, context: string, sourcePath: string, identifier: string): Promise<{
  name: string,
  from: string,
}
> {
  const resolved = await new Promise<string>((resolve, reject) => {
    loader.resolve(context, sourcePath, (err: unknown, result: string) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
  loader.addDependency(resolved);
  // todo use webpack fs instead of fs
  const fileContents = await fs.readFile(resolved, "utf-8");
  const exports = getAllExports(fileContents, resolved.endsWith(".tsx"));
  const exportForIdentifier = exports[identifier];
  console.log("exports", exports, { context, identifier,  sourcePath, resolved });
  if (!exportForIdentifier) {
    throw new Error(`Could not find export ${identifier} in ${resolved}`);
  }
  if (typeof exportForIdentifier === "string") {
    return {
      name: exportForIdentifier,
      from: resolved,
    }
  }
  return resolveIdentifier(loader, path.dirname(resolved), exportForIdentifier.from, exportForIdentifier.name);
}


/**
 * Use babel together with the "@babel/plugin-syntax-typescript" to extract all exports from a typescript file
 */
function getAllExports(source: string, isTSX: boolean): { [key: string]: string | { name: string, from: string } } {
  let result: { [key: string]: string | { name: string, from: string } } = {};
  babel.transformSync(source, {
    configFile: false,
    plugins: [
      [babelPlugin, { isTSX }],
      [
        () => ({  visitor: {
          ExportNamedDeclaration(path: any) {
            // reexports e.g. export { Baz as Bar } from "./foo"
            if (path.node.source) {
              result[path.node.specifiers[0].exported.name] = {
                name: path.node.specifiers[0].local.name,
                from: path.node.source.value,
              };
            } // named export e.g. export const Foo = 1
            else if (path.node.declaration.declarations) {
              if (path.node.declaration.declarations[0].id.type === "Identifier") {
                result[path.node.declaration.declarations[0].id.name] = path.node.declaration.declarations[0].id.name;
              }
            }
          },
          ExportDefaultDeclaration(path: any) {
            // default exports e.g. export default Foo
            result.default = "default"
          }
        }}),
      ],
    ],
  });
  return result;
}