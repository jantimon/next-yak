import { FunctionComponent } from "react";
import { CSSInterpolation } from "./cssLiteral";
type HtmlTags = keyof JSX.IntrinsicElements;
type Merge<T, U> = Omit<Partial<T>, keyof U> & Omit<Partial<U>, keyof T> & Partial<U & T>;
type YakAttributes<T> = <TNew = {}>(attrArgs: ((props: TNew & T) => Partial<TNew & T>) | (T & TNew)) => YakTemplateString<Merge<T, TNew>>;
type YakTemplateString<T> = <TCSSProps extends Record<string, unknown> = {}>(styles: TemplateStringsArray, ...values: Array<CSSInterpolation<TCSSProps>>) => FunctionComponent<TCSSProps & T>;
type YakWithAttributes<T> = {
    <TCSSProps extends Record<string, unknown> = {}>(styles: TemplateStringsArray, ...values: Array<CSSInterpolation<TCSSProps>>): FunctionComponent<TCSSProps & T>;
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
export declare const styled: YakStyled;
export {};
//# sourceMappingURL=styled.d.ts.map