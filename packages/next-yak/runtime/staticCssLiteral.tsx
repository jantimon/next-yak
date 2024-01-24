import type { YakTheme } from "./index.d.ts";

type ComponentStyles<TProps = {}> = (props: TProps) => {
  className: string;
  style?: {
    [key: string]: string;
  };
};

export type CSSInterpolation<TProps = {}> =
  | string
  | number
  | undefined
  | null
  | false
  | ComponentStyles<TProps>
  | {
      // type only identifier to allow targeting components
      // e.g. styled.svg`${Button}:hover & { fill: red; }`
      __yak: true;
    }
  | ((props: TProps) => CSSInterpolation<TProps>);

export type CSSStyles<TProps = {}> = {
  style: { [key: string]: string | ((props: TProps) => string) };
};

export type CSSFunction = <TProps = {}>(
  styles: TemplateStringsArray,
  ...values: CSSInterpolation<TProps & { theme: YakTheme }>[]
) => ComponentStyles<TProps>;

export type PropsToClassNameFn = (props: unknown) =>
  | {
      className?: string;
      style?: Record<string, string>;
    }
  | PropsToClassNameFn;

/**
 * A stub that allows us to use the `css()` (css literal function) inside of *.yak files.
 *
 * This is mainly used for tooling like stylelint and typechecking inside css of *.yak files.
 * It works similar to String.raw but filters out undefined, null and false values to allow for conditionals.
 *
 * @example
 * ```tsx
 * // inside of example.yak.ts
 * import { css } from "next-yak";
 * import { data } from "./another.yak.ts";
 *
 * const styles = css`
 *   .foo {
 *     color: red;
 *     ${data.isBar && css`
 *       background: blue;
 *     `}
 *   }
 * `
 * ```
 */
const staticCss = (
  strings: TemplateStringsArray,
  ...values: Array<string | number | boolean | null | undefined>
): string =>
  String.raw(
    strings,
    ...values.map((value) =>
      // filter out everything but strings and numbers
      {
        const type = typeof value;
        return type === "number" || type === "string" ? value : "";
      }
    )
  ).trim();

export const css = staticCss as unknown as CSSFunction;
