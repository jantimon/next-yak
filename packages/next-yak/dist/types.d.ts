import { FunctionComponent } from "react";
import { CSSInterpolation } from "./cssLiteral";
export type HtmlTags = keyof JSX.IntrinsicElements;
export type Merge<T, U> = Omit<Partial<T>, keyof U> & Omit<Partial<U>, keyof T> & Partial<U & T>;
export type YakAttributes<T> = <TNew = {}>(attrs: ((props: TNew & T) => Partial<TNew & T>) | (T & TNew)) => YakTemplateString<Merge<T, TNew>>;
export type YakOptionalAttributes<T> = <TNew = {}>(attrs?: ((props: TNew & T) => Partial<TNew & T>) | (T & TNew)) => YakTemplateString<Merge<T, TNew>>;
export type YakTemplateString<T> = <TCSSProps extends Record<string, unknown> = {}>(styles: TemplateStringsArray, ...values: Array<CSSInterpolation<TCSSProps>>) => FunctionComponent<TCSSProps & T>;
export type YakWithAttributes<T> = {
    <TCSSProps extends Record<string, unknown> = {}>(styles: TemplateStringsArray, ...values: Array<CSSInterpolation<TCSSProps>>): FunctionComponent<TCSSProps & T>;
    attrs: YakAttributes<T>;
};
export type YakLiteralComponents = {
    [Tag in HtmlTags]: YakWithAttributes<JSX.IntrinsicElements[Tag]>;
};
export type YakStyledComponentFunction = <T>(component: FunctionComponent<T>) => YakWithAttributes<T>;
export type YakStyled = YakStyledComponentFunction & YakLiteralComponents;
//# sourceMappingURL=types.d.ts.map