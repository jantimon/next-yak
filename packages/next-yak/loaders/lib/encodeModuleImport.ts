/**
 * This function generates a special CSS selector that represents an import from another module,
 * encoding the module path and imported properties to ensure CSS parser compatibility
 *
 * @param modulePath - The path to the module being imported
 * @param kind - The type of import, either "any" or "inline"
 * @param importChain - The member expression or variable name of the imported property
 * @returns A string containing the encoded module import selector
 *
 * @example
 * // Let's say we want to create a module import for ${breakpoints["<xs"].min} from "./styles/media"
 * const selector = encodeModuleImport("./styles/media", ["breakpoints", "<xs", "min"]);
 * console.log(selector); // ":yak-css-import(./styles/media:breakpoints:%3Cxs:min)"
 *
 * @notes
 * - The function uses URL encoding for the import chain to handle special characters
 * - The resulting string is meant to be processed and resolved by the yak css loader
 * - The kind gives a hint how the import can be used - to provide an error message if the import is not supported
 */
export function encodeModuleImport(
  modulePath: string,
  importChain: string[],
): string {
  const encodedChain = importChain
    .map((part) => encodeURIComponent(part))
    .join(":");

  return `--yak-css-import: url("${modulePath}:${encodedChain}")`;
}
