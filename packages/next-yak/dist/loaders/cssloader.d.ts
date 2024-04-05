/**
 * Transform typescript to css
 *
 * This loader reuses the yak tsloader and extracts the css from the generated comments
 */
declare function cssloader(this: any, source: string): Promise<string | void>;

export { cssloader as default };
