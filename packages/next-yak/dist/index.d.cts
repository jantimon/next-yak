import React, { ReactNode, FunctionComponent } from 'react';

type ComponentStyles<TProps = {}> = (props: TProps) => {
    className: string;
    style?: {
        [key: string]: string;
    };
};
type CSSInterpolation<TProps = {}> = string | number | undefined | null | false | ComponentStyles<TProps> | ((props: TProps) => CSSInterpolation<TProps>);
type CSSFunction = <TProps = {}>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps & {
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

/**
 * Attrs can be used to add additional props to a styled component.
 */
type Attrs<TProps, TNew> = ((props: TNew & TProps) => Partial<TNew & TProps>) | (TProps & TNew);
/**
 * Merge two types, but make sure that properties that are present in one of the types
 * are optional in the merged type.
 */
type Merge<T, U> = Omit<Partial<T>, keyof U> & Omit<Partial<U>, keyof T> & Partial<U & T>;
/**
 * Type for the proxy object returned by `styled` that allows to
 * access all html tags as properties.
 */
type StyledLiteral<T> = <TCSSProps extends Record<string, unknown> = {}>(styles: TemplateStringsArray, ...values: Array<CSSInterpolation<T & TCSSProps & {
    theme: YakTheme;
}>>) => FunctionComponent<TCSSProps & T>;
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
declare const styled: (<T>(Component: keyof JSX.IntrinsicElements | FunctionComponent<T>) => (<TCSSProps extends Record<string, unknown> = {}>(styles: TemplateStringsArray, ...values: CSSInterpolation<T & TCSSProps & {
    theme: YakTheme;
}>[]) => FunctionComponent<Merge<T & TCSSProps, unknown>>) & {
    attrs: <TNew>(attrs?: Attrs<T, TNew> | undefined) => <TCSSProps_1 extends Record<string, unknown> = {}>(styles: TemplateStringsArray, ...values: CSSInterpolation<T & TCSSProps_1 & {
        theme: YakTheme;
    }>[]) => FunctionComponent<Merge<T & TCSSProps_1, TNew>>;
}) & {
    symbol: StyledLiteral<React.SVGProps<SVGSymbolElement>> & {
        attrs: <TNew_1 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGSymbolElement>, TNew_1>) => StyledLiteral<Merge<React.SVGProps<SVGSymbolElement>, TNew_1>>;
    };
    object: StyledLiteral<React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>> & {
        attrs: <TNew_2 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, TNew_2>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, TNew_2>>;
    };
    style: StyledLiteral<React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>> & {
        attrs: <TNew_3 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, TNew_3>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, TNew_3>>;
    };
    search: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_4 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_4>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_4>>;
    };
    big: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_5 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_5>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_5>>;
    };
    link: StyledLiteral<React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>> & {
        attrs: <TNew_6 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, TNew_6>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, TNew_6>>;
    };
    small: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_7 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_7>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_7>>;
    };
    sub: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_8 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_8>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_8>>;
    };
    sup: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_9 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_9>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_9>>;
    };
    a: StyledLiteral<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> & {
        attrs: <TNew_10 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, TNew_10>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, TNew_10>>;
    };
    abbr: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_11 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_11>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_11>>;
    };
    address: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_12 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_12>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_12>>;
    };
    area: StyledLiteral<React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>> & {
        attrs: <TNew_13 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, TNew_13>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, TNew_13>>;
    };
    article: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_14 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_14>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_14>>;
    };
    aside: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_15 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_15>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_15>>;
    };
    audio: StyledLiteral<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>> & {
        attrs: <TNew_16 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, TNew_16>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, TNew_16>>;
    };
    b: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_17 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_17>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_17>>;
    };
    base: StyledLiteral<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>> & {
        attrs: <TNew_18 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, TNew_18>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, TNew_18>>;
    };
    bdi: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_19 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_19>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_19>>;
    };
    bdo: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_20 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_20>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_20>>;
    };
    blockquote: StyledLiteral<React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>> & {
        attrs: <TNew_21 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, TNew_21>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, TNew_21>>;
    };
    body: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>> & {
        attrs: <TNew_22 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, TNew_22>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, TNew_22>>;
    };
    br: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>> & {
        attrs: <TNew_23 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>, TNew_23>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>, TNew_23>>;
    };
    button: StyledLiteral<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> & {
        attrs: <TNew_24 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, TNew_24>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, TNew_24>>;
    };
    canvas: StyledLiteral<React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>> & {
        attrs: <TNew_25 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, TNew_25>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, TNew_25>>;
    };
    caption: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_26 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_26>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_26>>;
    };
    center: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_27 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_27>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_27>>;
    };
    cite: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_28 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_28>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_28>>;
    };
    code: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_29 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_29>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_29>>;
    };
    col: StyledLiteral<React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>> & {
        attrs: <TNew_30 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, TNew_30>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, TNew_30>>;
    };
    colgroup: StyledLiteral<React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>> & {
        attrs: <TNew_31 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, TNew_31>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, TNew_31>>;
    };
    data: StyledLiteral<React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>> & {
        attrs: <TNew_32 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, TNew_32>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, TNew_32>>;
    };
    datalist: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>> & {
        attrs: <TNew_33 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, TNew_33>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, TNew_33>>;
    };
    dd: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_34 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_34>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_34>>;
    };
    del: StyledLiteral<React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>> & {
        attrs: <TNew_35 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>, TNew_35>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>, TNew_35>>;
    };
    details: StyledLiteral<React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>> & {
        attrs: <TNew_36 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, TNew_36>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, TNew_36>>;
    };
    dfn: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_37 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_37>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_37>>;
    };
    dialog: StyledLiteral<React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>> & {
        attrs: <TNew_38 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, TNew_38>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, TNew_38>>;
    };
    div: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> & {
        attrs: <TNew_39 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TNew_39>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TNew_39>>;
    };
    dl: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>> & {
        attrs: <TNew_40 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, TNew_40>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, TNew_40>>;
    };
    dt: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_41 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_41>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_41>>;
    };
    em: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_42 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_42>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_42>>;
    };
    embed: StyledLiteral<React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>> & {
        attrs: <TNew_43 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, TNew_43>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, TNew_43>>;
    };
    fieldset: StyledLiteral<React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>> & {
        attrs: <TNew_44 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, TNew_44>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, TNew_44>>;
    };
    figcaption: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_45 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_45>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_45>>;
    };
    figure: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_46 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_46>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_46>>;
    };
    footer: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_47 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_47>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_47>>;
    };
    form: StyledLiteral<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>> & {
        attrs: <TNew_48 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, TNew_48>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, TNew_48>>;
    };
    h1: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> & {
        attrs: <TNew_49 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TNew_49>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TNew_49>>;
    };
    h2: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> & {
        attrs: <TNew_50 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TNew_50>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TNew_50>>;
    };
    h3: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> & {
        attrs: <TNew_51 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TNew_51>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TNew_51>>;
    };
    h4: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> & {
        attrs: <TNew_52 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TNew_52>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TNew_52>>;
    };
    h5: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> & {
        attrs: <TNew_53 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TNew_53>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TNew_53>>;
    };
    h6: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> & {
        attrs: <TNew_54 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TNew_54>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TNew_54>>;
    };
    head: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>> & {
        attrs: <TNew_55 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>, TNew_55>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>, TNew_55>>;
    };
    header: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_56 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_56>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_56>>;
    };
    hgroup: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_57 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_57>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_57>>;
    };
    hr: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>> & {
        attrs: <TNew_58 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, TNew_58>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, TNew_58>>;
    };
    html: StyledLiteral<React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>> & {
        attrs: <TNew_59 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, TNew_59>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, TNew_59>>;
    };
    i: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_60 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_60>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_60>>;
    };
    iframe: StyledLiteral<React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>> & {
        attrs: <TNew_61 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, TNew_61>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, TNew_61>>;
    };
    img: StyledLiteral<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> & {
        attrs: <TNew_62 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, TNew_62>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, TNew_62>>;
    };
    input: StyledLiteral<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> & {
        attrs: <TNew_63 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, TNew_63>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, TNew_63>>;
    };
    ins: StyledLiteral<React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>> & {
        attrs: <TNew_64 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>, TNew_64>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>, TNew_64>>;
    };
    kbd: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_65 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_65>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_65>>;
    };
    keygen: StyledLiteral<React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_66 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>, TNew_66>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>, TNew_66>>;
    };
    label: StyledLiteral<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>> & {
        attrs: <TNew_67 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, TNew_67>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, TNew_67>>;
    };
    legend: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>> & {
        attrs: <TNew_68 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, TNew_68>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, TNew_68>>;
    };
    li: StyledLiteral<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>> & {
        attrs: <TNew_69 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, TNew_69>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, TNew_69>>;
    };
    main: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_70 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_70>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_70>>;
    };
    map: StyledLiteral<React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>> & {
        attrs: <TNew_71 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, TNew_71>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, TNew_71>>;
    };
    mark: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_72 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_72>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_72>>;
    };
    menu: StyledLiteral<React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_73 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>, TNew_73>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>, TNew_73>>;
    };
    menuitem: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_74 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_74>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_74>>;
    };
    meta: StyledLiteral<React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>> & {
        attrs: <TNew_75 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, TNew_75>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, TNew_75>>;
    };
    meter: StyledLiteral<React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>> & {
        attrs: <TNew_76 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, TNew_76>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, TNew_76>>;
    };
    nav: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_77 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_77>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_77>>;
    };
    noindex: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_78 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_78>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_78>>;
    };
    noscript: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_79 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_79>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_79>>;
    };
    ol: StyledLiteral<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>> & {
        attrs: <TNew_80 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, TNew_80>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, TNew_80>>;
    };
    optgroup: StyledLiteral<React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>> & {
        attrs: <TNew_81 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, TNew_81>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, TNew_81>>;
    };
    option: StyledLiteral<React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>> & {
        attrs: <TNew_82 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, TNew_82>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, TNew_82>>;
    };
    output: StyledLiteral<React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>> & {
        attrs: <TNew_83 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>, TNew_83>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>, TNew_83>>;
    };
    p: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>> & {
        attrs: <TNew_84 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, TNew_84>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, TNew_84>>;
    };
    param: StyledLiteral<React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>> & {
        attrs: <TNew_85 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>, TNew_85>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>, TNew_85>>;
    };
    picture: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_86 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_86>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_86>>;
    };
    pre: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>> & {
        attrs: <TNew_87 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, TNew_87>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, TNew_87>>;
    };
    progress: StyledLiteral<React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>> & {
        attrs: <TNew_88 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, TNew_88>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, TNew_88>>;
    };
    q: StyledLiteral<React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>> & {
        attrs: <TNew_89 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, TNew_89>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, TNew_89>>;
    };
    rp: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_90 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_90>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_90>>;
    };
    rt: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_91 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_91>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_91>>;
    };
    ruby: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_92 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_92>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_92>>;
    };
    s: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_93 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_93>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_93>>;
    };
    samp: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_94 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_94>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_94>>;
    };
    slot: StyledLiteral<React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>> & {
        attrs: <TNew_95 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>, TNew_95>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>, TNew_95>>;
    };
    script: StyledLiteral<React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>> & {
        attrs: <TNew_96 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, TNew_96>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, TNew_96>>;
    };
    section: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_97 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_97>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_97>>;
    };
    select: StyledLiteral<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>> & {
        attrs: <TNew_98 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, TNew_98>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, TNew_98>>;
    };
    source: StyledLiteral<React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>> & {
        attrs: <TNew_99 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, TNew_99>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, TNew_99>>;
    };
    span: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>> & {
        attrs: <TNew_100 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, TNew_100>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, TNew_100>>;
    };
    strong: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_101 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_101>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_101>>;
    };
    summary: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_102 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_102>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_102>>;
    };
    table: StyledLiteral<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>> & {
        attrs: <TNew_103 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, TNew_103>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, TNew_103>>;
    };
    template: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>> & {
        attrs: <TNew_104 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>, TNew_104>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>, TNew_104>>;
    };
    tbody: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>> & {
        attrs: <TNew_105 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TNew_105>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TNew_105>>;
    };
    td: StyledLiteral<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>> & {
        attrs: <TNew_106 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, TNew_106>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, TNew_106>>;
    };
    textarea: StyledLiteral<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>> & {
        attrs: <TNew_107 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, TNew_107>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, TNew_107>>;
    };
    tfoot: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>> & {
        attrs: <TNew_108 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TNew_108>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TNew_108>>;
    };
    th: StyledLiteral<React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>> & {
        attrs: <TNew_109 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, TNew_109>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, TNew_109>>;
    };
    thead: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>> & {
        attrs: <TNew_110 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TNew_110>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TNew_110>>;
    };
    time: StyledLiteral<React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>> & {
        attrs: <TNew_111 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, TNew_111>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, TNew_111>>;
    };
    title: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>> & {
        attrs: <TNew_112 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, TNew_112>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, TNew_112>>;
    };
    tr: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>> & {
        attrs: <TNew_113 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, TNew_113>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, TNew_113>>;
    };
    track: StyledLiteral<React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>> & {
        attrs: <TNew_114 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, TNew_114>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, TNew_114>>;
    };
    u: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_115 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_115>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_115>>;
    };
    ul: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>> & {
        attrs: <TNew_116 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, TNew_116>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, TNew_116>>;
    };
    var: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_117 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_117>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_117>>;
    };
    video: StyledLiteral<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>> & {
        attrs: <TNew_118 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, TNew_118>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, TNew_118>>;
    };
    wbr: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TNew_119 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_119>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TNew_119>>;
    };
    webview: StyledLiteral<React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>> & {
        attrs: <TNew_120 extends Record<string, unknown> = {}>(attrs: Attrs<React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>, TNew_120>) => StyledLiteral<Merge<React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>, TNew_120>>;
    };
    svg: StyledLiteral<React.SVGProps<SVGSVGElement>> & {
        attrs: <TNew_121 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGSVGElement>, TNew_121>) => StyledLiteral<Merge<React.SVGProps<SVGSVGElement>, TNew_121>>;
    };
    animate: StyledLiteral<React.SVGProps<SVGElement>> & {
        attrs: <TNew_122 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGElement>, TNew_122>) => StyledLiteral<Merge<React.SVGProps<SVGElement>, TNew_122>>;
    };
    animateMotion: StyledLiteral<React.SVGProps<SVGElement>> & {
        attrs: <TNew_123 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGElement>, TNew_123>) => StyledLiteral<Merge<React.SVGProps<SVGElement>, TNew_123>>;
    };
    animateTransform: StyledLiteral<React.SVGProps<SVGElement>> & {
        attrs: <TNew_124 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGElement>, TNew_124>) => StyledLiteral<Merge<React.SVGProps<SVGElement>, TNew_124>>;
    };
    circle: StyledLiteral<React.SVGProps<SVGCircleElement>> & {
        attrs: <TNew_125 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGCircleElement>, TNew_125>) => StyledLiteral<Merge<React.SVGProps<SVGCircleElement>, TNew_125>>;
    };
    clipPath: StyledLiteral<React.SVGProps<SVGClipPathElement>> & {
        attrs: <TNew_126 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGClipPathElement>, TNew_126>) => StyledLiteral<Merge<React.SVGProps<SVGClipPathElement>, TNew_126>>;
    };
    defs: StyledLiteral<React.SVGProps<SVGDefsElement>> & {
        attrs: <TNew_127 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGDefsElement>, TNew_127>) => StyledLiteral<Merge<React.SVGProps<SVGDefsElement>, TNew_127>>;
    };
    desc: StyledLiteral<React.SVGProps<SVGDescElement>> & {
        attrs: <TNew_128 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGDescElement>, TNew_128>) => StyledLiteral<Merge<React.SVGProps<SVGDescElement>, TNew_128>>;
    };
    ellipse: StyledLiteral<React.SVGProps<SVGEllipseElement>> & {
        attrs: <TNew_129 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGEllipseElement>, TNew_129>) => StyledLiteral<Merge<React.SVGProps<SVGEllipseElement>, TNew_129>>;
    };
    feBlend: StyledLiteral<React.SVGProps<SVGFEBlendElement>> & {
        attrs: <TNew_130 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFEBlendElement>, TNew_130>) => StyledLiteral<Merge<React.SVGProps<SVGFEBlendElement>, TNew_130>>;
    };
    feColorMatrix: StyledLiteral<React.SVGProps<SVGFEColorMatrixElement>> & {
        attrs: <TNew_131 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFEColorMatrixElement>, TNew_131>) => StyledLiteral<Merge<React.SVGProps<SVGFEColorMatrixElement>, TNew_131>>;
    };
    feComponentTransfer: StyledLiteral<React.SVGProps<SVGFEComponentTransferElement>> & {
        attrs: <TNew_132 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFEComponentTransferElement>, TNew_132>) => StyledLiteral<Merge<React.SVGProps<SVGFEComponentTransferElement>, TNew_132>>;
    };
    feComposite: StyledLiteral<React.SVGProps<SVGFECompositeElement>> & {
        attrs: <TNew_133 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFECompositeElement>, TNew_133>) => StyledLiteral<Merge<React.SVGProps<SVGFECompositeElement>, TNew_133>>;
    };
    feConvolveMatrix: StyledLiteral<React.SVGProps<SVGFEConvolveMatrixElement>> & {
        attrs: <TNew_134 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFEConvolveMatrixElement>, TNew_134>) => StyledLiteral<Merge<React.SVGProps<SVGFEConvolveMatrixElement>, TNew_134>>;
    };
    feDiffuseLighting: StyledLiteral<React.SVGProps<SVGFEDiffuseLightingElement>> & {
        attrs: <TNew_135 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFEDiffuseLightingElement>, TNew_135>) => StyledLiteral<Merge<React.SVGProps<SVGFEDiffuseLightingElement>, TNew_135>>;
    };
    feDisplacementMap: StyledLiteral<React.SVGProps<SVGFEDisplacementMapElement>> & {
        attrs: <TNew_136 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFEDisplacementMapElement>, TNew_136>) => StyledLiteral<Merge<React.SVGProps<SVGFEDisplacementMapElement>, TNew_136>>;
    };
    feDistantLight: StyledLiteral<React.SVGProps<SVGFEDistantLightElement>> & {
        attrs: <TNew_137 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFEDistantLightElement>, TNew_137>) => StyledLiteral<Merge<React.SVGProps<SVGFEDistantLightElement>, TNew_137>>;
    };
    feDropShadow: StyledLiteral<React.SVGProps<SVGFEDropShadowElement>> & {
        attrs: <TNew_138 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFEDropShadowElement>, TNew_138>) => StyledLiteral<Merge<React.SVGProps<SVGFEDropShadowElement>, TNew_138>>;
    };
    feFlood: StyledLiteral<React.SVGProps<SVGFEFloodElement>> & {
        attrs: <TNew_139 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFEFloodElement>, TNew_139>) => StyledLiteral<Merge<React.SVGProps<SVGFEFloodElement>, TNew_139>>;
    };
    feFuncA: StyledLiteral<React.SVGProps<SVGFEFuncAElement>> & {
        attrs: <TNew_140 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFEFuncAElement>, TNew_140>) => StyledLiteral<Merge<React.SVGProps<SVGFEFuncAElement>, TNew_140>>;
    };
    feFuncB: StyledLiteral<React.SVGProps<SVGFEFuncBElement>> & {
        attrs: <TNew_141 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFEFuncBElement>, TNew_141>) => StyledLiteral<Merge<React.SVGProps<SVGFEFuncBElement>, TNew_141>>;
    };
    feFuncG: StyledLiteral<React.SVGProps<SVGFEFuncGElement>> & {
        attrs: <TNew_142 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFEFuncGElement>, TNew_142>) => StyledLiteral<Merge<React.SVGProps<SVGFEFuncGElement>, TNew_142>>;
    };
    feFuncR: StyledLiteral<React.SVGProps<SVGFEFuncRElement>> & {
        attrs: <TNew_143 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFEFuncRElement>, TNew_143>) => StyledLiteral<Merge<React.SVGProps<SVGFEFuncRElement>, TNew_143>>;
    };
    feGaussianBlur: StyledLiteral<React.SVGProps<SVGFEGaussianBlurElement>> & {
        attrs: <TNew_144 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFEGaussianBlurElement>, TNew_144>) => StyledLiteral<Merge<React.SVGProps<SVGFEGaussianBlurElement>, TNew_144>>;
    };
    feImage: StyledLiteral<React.SVGProps<SVGFEImageElement>> & {
        attrs: <TNew_145 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFEImageElement>, TNew_145>) => StyledLiteral<Merge<React.SVGProps<SVGFEImageElement>, TNew_145>>;
    };
    feMerge: StyledLiteral<React.SVGProps<SVGFEMergeElement>> & {
        attrs: <TNew_146 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFEMergeElement>, TNew_146>) => StyledLiteral<Merge<React.SVGProps<SVGFEMergeElement>, TNew_146>>;
    };
    feMergeNode: StyledLiteral<React.SVGProps<SVGFEMergeNodeElement>> & {
        attrs: <TNew_147 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFEMergeNodeElement>, TNew_147>) => StyledLiteral<Merge<React.SVGProps<SVGFEMergeNodeElement>, TNew_147>>;
    };
    feMorphology: StyledLiteral<React.SVGProps<SVGFEMorphologyElement>> & {
        attrs: <TNew_148 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFEMorphologyElement>, TNew_148>) => StyledLiteral<Merge<React.SVGProps<SVGFEMorphologyElement>, TNew_148>>;
    };
    feOffset: StyledLiteral<React.SVGProps<SVGFEOffsetElement>> & {
        attrs: <TNew_149 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFEOffsetElement>, TNew_149>) => StyledLiteral<Merge<React.SVGProps<SVGFEOffsetElement>, TNew_149>>;
    };
    fePointLight: StyledLiteral<React.SVGProps<SVGFEPointLightElement>> & {
        attrs: <TNew_150 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFEPointLightElement>, TNew_150>) => StyledLiteral<Merge<React.SVGProps<SVGFEPointLightElement>, TNew_150>>;
    };
    feSpecularLighting: StyledLiteral<React.SVGProps<SVGFESpecularLightingElement>> & {
        attrs: <TNew_151 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFESpecularLightingElement>, TNew_151>) => StyledLiteral<Merge<React.SVGProps<SVGFESpecularLightingElement>, TNew_151>>;
    };
    feSpotLight: StyledLiteral<React.SVGProps<SVGFESpotLightElement>> & {
        attrs: <TNew_152 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFESpotLightElement>, TNew_152>) => StyledLiteral<Merge<React.SVGProps<SVGFESpotLightElement>, TNew_152>>;
    };
    feTile: StyledLiteral<React.SVGProps<SVGFETileElement>> & {
        attrs: <TNew_153 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFETileElement>, TNew_153>) => StyledLiteral<Merge<React.SVGProps<SVGFETileElement>, TNew_153>>;
    };
    feTurbulence: StyledLiteral<React.SVGProps<SVGFETurbulenceElement>> & {
        attrs: <TNew_154 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFETurbulenceElement>, TNew_154>) => StyledLiteral<Merge<React.SVGProps<SVGFETurbulenceElement>, TNew_154>>;
    };
    filter: StyledLiteral<React.SVGProps<SVGFilterElement>> & {
        attrs: <TNew_155 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGFilterElement>, TNew_155>) => StyledLiteral<Merge<React.SVGProps<SVGFilterElement>, TNew_155>>;
    };
    foreignObject: StyledLiteral<React.SVGProps<SVGForeignObjectElement>> & {
        attrs: <TNew_156 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGForeignObjectElement>, TNew_156>) => StyledLiteral<Merge<React.SVGProps<SVGForeignObjectElement>, TNew_156>>;
    };
    g: StyledLiteral<React.SVGProps<SVGGElement>> & {
        attrs: <TNew_157 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGGElement>, TNew_157>) => StyledLiteral<Merge<React.SVGProps<SVGGElement>, TNew_157>>;
    };
    image: StyledLiteral<React.SVGProps<SVGImageElement>> & {
        attrs: <TNew_158 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGImageElement>, TNew_158>) => StyledLiteral<Merge<React.SVGProps<SVGImageElement>, TNew_158>>;
    };
    line: StyledLiteral<React.SVGLineElementAttributes<SVGLineElement>> & {
        attrs: <TNew_159 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGLineElementAttributes<SVGLineElement>, TNew_159>) => StyledLiteral<Merge<React.SVGLineElementAttributes<SVGLineElement>, TNew_159>>;
    };
    linearGradient: StyledLiteral<React.SVGProps<SVGLinearGradientElement>> & {
        attrs: <TNew_160 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGLinearGradientElement>, TNew_160>) => StyledLiteral<Merge<React.SVGProps<SVGLinearGradientElement>, TNew_160>>;
    };
    marker: StyledLiteral<React.SVGProps<SVGMarkerElement>> & {
        attrs: <TNew_161 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGMarkerElement>, TNew_161>) => StyledLiteral<Merge<React.SVGProps<SVGMarkerElement>, TNew_161>>;
    };
    mask: StyledLiteral<React.SVGProps<SVGMaskElement>> & {
        attrs: <TNew_162 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGMaskElement>, TNew_162>) => StyledLiteral<Merge<React.SVGProps<SVGMaskElement>, TNew_162>>;
    };
    metadata: StyledLiteral<React.SVGProps<SVGMetadataElement>> & {
        attrs: <TNew_163 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGMetadataElement>, TNew_163>) => StyledLiteral<Merge<React.SVGProps<SVGMetadataElement>, TNew_163>>;
    };
    mpath: StyledLiteral<React.SVGProps<SVGElement>> & {
        attrs: <TNew_164 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGElement>, TNew_164>) => StyledLiteral<Merge<React.SVGProps<SVGElement>, TNew_164>>;
    };
    path: StyledLiteral<React.SVGProps<SVGPathElement>> & {
        attrs: <TNew_165 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGPathElement>, TNew_165>) => StyledLiteral<Merge<React.SVGProps<SVGPathElement>, TNew_165>>;
    };
    pattern: StyledLiteral<React.SVGProps<SVGPatternElement>> & {
        attrs: <TNew_166 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGPatternElement>, TNew_166>) => StyledLiteral<Merge<React.SVGProps<SVGPatternElement>, TNew_166>>;
    };
    polygon: StyledLiteral<React.SVGProps<SVGPolygonElement>> & {
        attrs: <TNew_167 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGPolygonElement>, TNew_167>) => StyledLiteral<Merge<React.SVGProps<SVGPolygonElement>, TNew_167>>;
    };
    polyline: StyledLiteral<React.SVGProps<SVGPolylineElement>> & {
        attrs: <TNew_168 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGPolylineElement>, TNew_168>) => StyledLiteral<Merge<React.SVGProps<SVGPolylineElement>, TNew_168>>;
    };
    radialGradient: StyledLiteral<React.SVGProps<SVGRadialGradientElement>> & {
        attrs: <TNew_169 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGRadialGradientElement>, TNew_169>) => StyledLiteral<Merge<React.SVGProps<SVGRadialGradientElement>, TNew_169>>;
    };
    rect: StyledLiteral<React.SVGProps<SVGRectElement>> & {
        attrs: <TNew_170 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGRectElement>, TNew_170>) => StyledLiteral<Merge<React.SVGProps<SVGRectElement>, TNew_170>>;
    };
    stop: StyledLiteral<React.SVGProps<SVGStopElement>> & {
        attrs: <TNew_171 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGStopElement>, TNew_171>) => StyledLiteral<Merge<React.SVGProps<SVGStopElement>, TNew_171>>;
    };
    switch: StyledLiteral<React.SVGProps<SVGSwitchElement>> & {
        attrs: <TNew_172 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGSwitchElement>, TNew_172>) => StyledLiteral<Merge<React.SVGProps<SVGSwitchElement>, TNew_172>>;
    };
    text: StyledLiteral<React.SVGTextElementAttributes<SVGTextElement>> & {
        attrs: <TNew_173 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGTextElementAttributes<SVGTextElement>, TNew_173>) => StyledLiteral<Merge<React.SVGTextElementAttributes<SVGTextElement>, TNew_173>>;
    };
    textPath: StyledLiteral<React.SVGProps<SVGTextPathElement>> & {
        attrs: <TNew_174 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGTextPathElement>, TNew_174>) => StyledLiteral<Merge<React.SVGProps<SVGTextPathElement>, TNew_174>>;
    };
    tspan: StyledLiteral<React.SVGProps<SVGTSpanElement>> & {
        attrs: <TNew_175 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGTSpanElement>, TNew_175>) => StyledLiteral<Merge<React.SVGProps<SVGTSpanElement>, TNew_175>>;
    };
    use: StyledLiteral<React.SVGProps<SVGUseElement>> & {
        attrs: <TNew_176 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGUseElement>, TNew_176>) => StyledLiteral<Merge<React.SVGProps<SVGUseElement>, TNew_176>>;
    };
    view: StyledLiteral<React.SVGProps<SVGViewElement>> & {
        attrs: <TNew_177 extends Record<string, unknown> = {}>(attrs: Attrs<React.SVGProps<SVGViewElement>, TNew_177>) => StyledLiteral<Merge<React.SVGProps<SVGViewElement>, TNew_177>>;
    };
};

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
