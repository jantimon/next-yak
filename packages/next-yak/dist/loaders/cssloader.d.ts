/**
 * Loader for typescript files that use yak, it replaces the css template literal with a call to the 'styled' function
 */
declare function cssloader(this: any, source: string): Promise<string | void>;

export { cssloader as default };
