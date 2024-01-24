/**
 * A stub that allows us to use the `css()` (css literal function) inside of *.yak files.
 *
 * This is mainly used for tooling like stylelint and typechecking inside css of *.yak files.
 * It works similar to String.raw but filters out undefined, null and false values to allow for conditionals.
 *
 * @example
 * ```tsx
 * // inside of example.yak.ts
 * import { mixin } from "next-yak/static";
 *
 * const styles = mixin.css`
 *   .foo {
 *     color: red;
 *     ${data.isBar && css`
 *       background: blue;
 *     `}
 *   }
 * `
 * ```
 */
declare const css: (strings: TemplateStringsArray, ...values: Array<string | number | boolean | null | undefined | Function>) => string;

declare const staticCssLiteral_css: typeof css;
declare namespace staticCssLiteral {
  export {
    staticCssLiteral_css as css,
  };
}

export { staticCssLiteral as mixin };
