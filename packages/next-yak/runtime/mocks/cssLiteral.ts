import { CSSProperties } from "react";
import type { YakTheme } from "../index.d.ts";
import { yakComponentSymbol } from "../cssLiteral.js";

type ComponentStyles<TProps> = (props: TProps) => {
  className: string;
  style?: {
    [key: string]: string;
  };
};

export type StaticCSSProp = {
  className: string;
  style?: CSSProperties;
};

export type CSSInterpolation<TProps> =
  | string
  | number
  | undefined
  | null
  | false
  | ComponentStyles<TProps>
  | StaticCSSProp
  | {
      // type only identifier to allow targeting components
      // e.g. styled.svg`${Button}:hover & { fill: red; }`
      [yakComponentSymbol]: any;
    }
  | ((props: TProps) => CSSInterpolation<TProps>);

type CSSStyles<TProps = {}> = {
  style: { [key: string]: string | ((props: TProps) => string) };
};

type CSSFunction = <TProps = {}>(
  styles: TemplateStringsArray,
  ...values: CSSInterpolation<TProps & { theme: YakTheme }>[]
) => ComponentStyles<TProps>;

type PropsToClassNameFn = (props: unknown) =>
  | {
      className?: string;
      style?: Record<string, string>;
    }
  | PropsToClassNameFn;

/**
 * Allows to use CSS styles in a styled or css block
 *
 * e.g.
 *
 * ```tsx
 * const Component = styled.div`
 *  color: black;
 *  ${({$active}) => $active && css`color: red;`}
 * `;
 * ```
 */
export function css(styles: TemplateStringsArray, ...values: []): StaticCSSProp;
export function css<TProps = {}>(
  styles: TemplateStringsArray,
  ...values: CSSInterpolation<TProps & { theme: YakTheme }>[]
): ComponentStyles<TProps>;
export function css<TProps>(
  styles: TemplateStringsArray,
  ...args: CSSInterpolation<TProps & { theme: YakTheme }>[]
): StaticCSSProp | ComponentStyles<TProps> {
  const dynamicCssFunctions: PropsToClassNameFn[] = [];
  for (const arg of args as Array<string | CSSFunction | CSSStyles<any>>) {
    // Dynamic CSS e.g.
    // css`${props => props.active && css`color: red;`}`
    // compiled -> css((props: { active: boolean }) => props.active && css("yak31e4"))
    if (typeof arg === "function") {
      dynamicCssFunctions.push(arg as unknown as PropsToClassNameFn);
    }
  }
  if (dynamicCssFunctions.length === 0) {
    return {
      className: "",
      style: undefined,
    };
  }
  return (<T>(props: T) => {
    for (let i = 0; i < dynamicCssFunctions.length; i++) {
      // run the dynamic expressions and ignore the return value
      // the execution is important to ensure that the user code is executed
      // the same way as in the real runtime
      executeDynamicExpressionRecursively(props, dynamicCssFunctions[i]);
    }
    return {
      className: "",
      style: undefined,
    };
  }) as ComponentStyles<TProps>;
}

function executeDynamicExpressionRecursively(
  props: unknown,
  expression: PropsToClassNameFn,
) {
  let result = expression(props);
  while (typeof result === "function") {
    result = result(props);
  }
  return result;
}
