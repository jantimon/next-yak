import tsloader from "./tsloader.js";

/**
 * Transform typescript to css
 *
 * This loader reuses the yak tsloader and extracts the css from the generated comments
 */
export default async function cssloader(
  this: any,
  source: string
): Promise<string | void> {
  const callback = this.async();
  return tsloader.call(
    {
      ...this,
      async: () => (err: unknown | null, code?: string) => {
        if (err || !code) {
          return callback(err || new Error("No code returned"));
        }
        return callback(null, extractCss(code));
      },
    },
    source
  );
}

function extractCss(code: string): string {
  const codeParts = code.split("/*YAK Extracted CSS:\n");
  let result = "";
  for (let i = 1; i < codeParts.length; i++) {
    const codeUntilEnd = codeParts[i].split("*/")[0];
    result += codeUntilEnd;
  }
  return result;
}
