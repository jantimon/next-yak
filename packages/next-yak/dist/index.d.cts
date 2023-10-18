import React, { ReactNode, FunctionComponent } from 'react';

type ComponentStyles<TProps extends Record<string, unknown>> = (props: TProps) => {
    className: string;
    style?: {
        [key: string]: string;
    };
};
type CSSInterpolation<TProps extends Record<string, unknown>> = string | number | undefined | null | false | ComponentStyles<TProps> | ((props: TProps) => CSSInterpolation<TProps>);
type CSSFunction = <TProps extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps & {
    theme: YakTheme;
}>[]) => ComponentStyles<TProps>;
declare const css: CSSFunction;

interface YakTheme {
}
/**
 * Returns the current yak theme context
 *
 * @see https://github.com/jantimon/next-yak/blob/main/packages/next-yak/runtime/context/README.md
 */
declare const useTheme: () => YakTheme;
/**
 * Yak theme context provider
 *
 * @see https://github.com/jantimon/next-yak/blob/main/packages/next-yak/runtime/context/README.md
 */
declare const YakThemeProvider: ({ children, theme, }: {
    children: ReactNode;
    theme?: YakTheme | undefined;
}) => React.JSX.Element;

type HtmlTags = keyof JSX.IntrinsicElements;
type Merge<T, U> = Omit<Partial<T>, keyof U> & Omit<Partial<U>, keyof T> & Partial<U & T>;
type YakAttributes<T> = <TNew = {}>(attrs: ((props: TNew & T) => Partial<TNew & T>) | (T & TNew)) => YakTemplateString<Merge<T, TNew>>;
type YakTemplateString<T> = <TCSSProps extends Record<string, unknown> = {}>(styles: TemplateStringsArray, ...values: Array<CSSInterpolation<TCSSProps & {
    theme: YakTheme;
}>>) => FunctionComponent<TCSSProps & T>;
type YakWithAttributes<T> = {
    <TCSSProps extends Record<string, unknown> = {}>(styles: TemplateStringsArray, ...values: Array<CSSInterpolation<TCSSProps & {
        theme: YakTheme;
    }>>): FunctionComponent<TCSSProps & T>;
    attrs: YakAttributes<T>;
};
type YakLiteralComponents = {
    [Tag in HtmlTags]: YakWithAttributes<JSX.IntrinsicElements[Tag]>;
};
type YakStyledComponentFunction = <T>(component: FunctionComponent<T>) => YakWithAttributes<T>;
type YakStyled = YakStyledComponentFunction & YakLiteralComponents;

/**
 * The `styled` method works perfectly on all of your own or any third-party component,
 * as long as they attach the passed className prop to a DOM element.
 *
 * @usage
 *
 * ```tsx
 * const StyledLink = styled(Link)`
 *  color: #BF4F74;
 *  font-weight: bold;
 * `;
 * ```
 */
declare const styled: YakStyled;

/**
 * Allows to use atomic CSS classes in a styled or css block
 *
 * @usage
 *
 * ```tsx
 * import { styled, atoms } from "next-yak";
 *
 * const Button = styled.button<{ $primary?: boolean }>`
 *  ${atoms("text-teal-600", "text-base", "rounded-md")}
 *  ${props => props.$primary && atoms("shadow-md")}
 * `;
 * ```
 */
declare const atoms: (...atoms: string[]) => () => {
    className: string;
};

/**
 * Allows to use CSS keyframe animations in a styled or css block
 *
 * @usage
 *
 * ```tsx
 * import { styled, keyframes } from "next-yak";
 *
 * const rotate = keyframes`
 *  from {
 *   transform: rotate(0deg);
 *  }
 *  to {
 *   transform: rotate(360deg);
 *  }
 * `;
 *
 * const Spinner = styled.div`
 *   animation: ${rotate} 1s linear infinite;
 * `;
 * ```
 */
declare const keyframes: (styles: TemplateStringsArray, ...dynamic: never[]) => string;

export { YakTheme, YakThemeProvider, atoms, css, keyframes, styled, useTheme };
