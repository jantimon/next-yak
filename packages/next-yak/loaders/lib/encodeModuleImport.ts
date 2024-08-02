/**
 * This function generates a CSS custom property that represents an import from another module,
 * encoding the module path and imported properties.
 *
 * @param modulePath - The path to the module being imported
 * @param importChain - An array of strings representing the chain of properties to access in the imported module
 * @returns A string containing the encoded module import as a CSS custom property
 *
 * @example
 * // Let's say we want to create a module import for breakpoints["<xs"].min from "./styles/media"
 * const importProperty = encodeModuleImport("./styles/media", ["breakpoints", "<xs", "min"]);
 * console.log(importProperty); // "--yak-css-import: url("./styles/media:breakpoints:%3Cxs:min")"
 *
 * @notes
 * - The function uses URL encoding for the import chain to handle special characters
 * - The resulting string is meant to be processed and resolved by the yak css loader
 * - The custom property can be used in CSS to reference values from imported modules
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
