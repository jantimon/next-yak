import React, { ReactNode, FunctionComponent } from 'react';

type ComponentStyles<TProps = {}> = (props: TProps) => {
    className: string;
    style?: {
        [key: string]: string;
    };
};
type CSSInterpolation<TProps = {}> = string | number | undefined | null | false | ComponentStyles<TProps> | {
    __yak: true;
} | ((props: TProps) => CSSInterpolation<TProps>);
type CSSStyles<TProps = {}> = {
    style: {
        [key: string]: string | ((props: TProps) => string);
    };
};
type CSSFunction = <TProps = {}>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps & {
    theme: YakTheme;
}>[]) => ComponentStyles<TProps>;
declare const css: CSSFunction;

/**
 * css() runtime factory of css``
 *
 * /!\ next-yak transpiles css`` and styled``
 *
 * This changes the typings of the css`` and styled`` functions.
 * During development the user of next-yak wants to work with the
 * typings BEFORE compilation.
 *
 * Therefore this is only an internal function only and it must be cast to any
 * before exported to the user.
 */
declare const __cssYak: (...args: Array<string | CSSFunction | CSSStyles<any>>) => (props: unknown) => {
    className: string;
    style: Record<string, string>;
};

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
 * Return type of the provided props merged with the initial props
 * where the specified props are optional
 */
type AttrsMerged<TBaseProps, TIn extends object = {}> = Substitute<TBaseProps & {
    theme: YakTheme;
}, TIn>;
/**
 * The attrs function allows to add additional props to a styled component.
 * The props can be specified as an object or as a function that receives the
 * current props as argument.
 */
type Attrs<TBaseProps, TIn extends object = {}, TOut extends AttrsMerged<TBaseProps, TIn> = AttrsMerged<TBaseProps, TIn>> = Partial<TOut> | ((p: Substitute<TBaseProps & {
    theme: YakTheme;
}, TIn>) => Partial<TOut>);
/**
 * Type for the proxy object returned by `styled` that allows to
 * access all html tags as properties.
 */
type StyledLiteral<T> = <TCSSProps = {}>(styles: TemplateStringsArray, ...values: Array<CSSInterpolation<T & TCSSProps & {
    theme: YakTheme;
}>>) => FunctionComponent<TCSSProps & T> & {
    __yak: true;
};
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
declare const styled: (<T>(Component: keyof JSX.IntrinsicElements | FunctionComponent<T>) => (<TCSSProps extends object = {}>(styles: TemplateStringsArray, ...values: CSSInterpolation<T & TCSSProps & {
    theme: YakTheme;
}>[]) => FunctionComponent<FastOmit<TCSSProps & T, never>> & {
    __yak: true;
}) & {
    attrs: <TAttrsIn extends object = {}, TAttrsOut extends AttrsMerged<T, TAttrsIn> = AttrsMerged<T, TAttrsIn>>(attrs: Attrs<T, TAttrsIn, TAttrsOut>) => <TCSSProps_1 extends object = {}>(styles: TemplateStringsArray, ...values: CSSInterpolation<T & TCSSProps_1 & {
        theme: YakTheme;
    }>[]) => FunctionComponent<Substitute<TCSSProps_1 & T, TAttrsIn>> & {
        __yak: true;
    };
}) & {
    symbol: StyledLiteral<React.SVGProps<SVGSymbolElement>> & {
        attrs: <TAttrsIn_1 extends object = {}, TAttrsOut_1 extends AttrsMerged<React.SVGProps<SVGSymbolElement>, TAttrsIn_1> = AttrsMerged<React.SVGProps<SVGSymbolElement>, TAttrsIn_1>>(attrs: Attrs<React.SVGProps<SVGSymbolElement>, TAttrsIn_1, TAttrsOut_1>) => StyledLiteral<Substitute<React.SVGProps<SVGSymbolElement>, TAttrsIn_1>>;
    };
    object: StyledLiteral<React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>> & {
        attrs: <TAttrsIn_2 extends object = {}, TAttrsOut_2 extends AttrsMerged<React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, TAttrsIn_2> = AttrsMerged<React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, TAttrsIn_2>>(attrs: Attrs<React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, TAttrsIn_2, TAttrsOut_2>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, TAttrsIn_2>>;
    };
    style: StyledLiteral<React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>> & {
        attrs: <TAttrsIn_3 extends object = {}, TAttrsOut_3 extends AttrsMerged<React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, TAttrsIn_3> = AttrsMerged<React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, TAttrsIn_3>>(attrs: Attrs<React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, TAttrsIn_3, TAttrsOut_3>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, TAttrsIn_3>>;
    };
    search: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_4 extends object = {}, TAttrsOut_4 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_4> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_4>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_4, TAttrsOut_4>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_4>>;
    };
    big: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_5 extends object = {}, TAttrsOut_5 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_5> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_5>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_5, TAttrsOut_5>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_5>>;
    };
    link: StyledLiteral<React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>> & {
        attrs: <TAttrsIn_6 extends object = {}, TAttrsOut_6 extends AttrsMerged<React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, TAttrsIn_6> = AttrsMerged<React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, TAttrsIn_6>>(attrs: Attrs<React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, TAttrsIn_6, TAttrsOut_6>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, TAttrsIn_6>>;
    };
    small: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_7 extends object = {}, TAttrsOut_7 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_7> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_7>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_7, TAttrsOut_7>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_7>>;
    };
    sub: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_8 extends object = {}, TAttrsOut_8 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_8> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_8>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_8, TAttrsOut_8>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_8>>;
    };
    sup: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_9 extends object = {}, TAttrsOut_9 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_9> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_9>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_9, TAttrsOut_9>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_9>>;
    };
    a: StyledLiteral<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> & {
        attrs: <TAttrsIn_10 extends object = {}, TAttrsOut_10 extends AttrsMerged<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, TAttrsIn_10> = AttrsMerged<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, TAttrsIn_10>>(attrs: Attrs<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, TAttrsIn_10, TAttrsOut_10>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, TAttrsIn_10>>;
    };
    abbr: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_11 extends object = {}, TAttrsOut_11 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_11> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_11>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_11, TAttrsOut_11>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_11>>;
    };
    address: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_12 extends object = {}, TAttrsOut_12 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_12> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_12>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_12, TAttrsOut_12>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_12>>;
    };
    area: StyledLiteral<React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>> & {
        attrs: <TAttrsIn_13 extends object = {}, TAttrsOut_13 extends AttrsMerged<React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, TAttrsIn_13> = AttrsMerged<React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, TAttrsIn_13>>(attrs: Attrs<React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, TAttrsIn_13, TAttrsOut_13>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, TAttrsIn_13>>;
    };
    article: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_14 extends object = {}, TAttrsOut_14 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_14> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_14>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_14, TAttrsOut_14>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_14>>;
    };
    aside: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_15 extends object = {}, TAttrsOut_15 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_15> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_15>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_15, TAttrsOut_15>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_15>>;
    };
    audio: StyledLiteral<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>> & {
        attrs: <TAttrsIn_16 extends object = {}, TAttrsOut_16 extends AttrsMerged<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, TAttrsIn_16> = AttrsMerged<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, TAttrsIn_16>>(attrs: Attrs<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, TAttrsIn_16, TAttrsOut_16>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, TAttrsIn_16>>;
    };
    b: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_17 extends object = {}, TAttrsOut_17 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_17> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_17>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_17, TAttrsOut_17>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_17>>;
    };
    base: StyledLiteral<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>> & {
        attrs: <TAttrsIn_18 extends object = {}, TAttrsOut_18 extends AttrsMerged<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, TAttrsIn_18> = AttrsMerged<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, TAttrsIn_18>>(attrs: Attrs<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, TAttrsIn_18, TAttrsOut_18>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, TAttrsIn_18>>;
    };
    bdi: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_19 extends object = {}, TAttrsOut_19 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_19> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_19>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_19, TAttrsOut_19>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_19>>;
    };
    bdo: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_20 extends object = {}, TAttrsOut_20 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_20> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_20>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_20, TAttrsOut_20>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_20>>;
    };
    blockquote: StyledLiteral<React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>> & {
        attrs: <TAttrsIn_21 extends object = {}, TAttrsOut_21 extends AttrsMerged<React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, TAttrsIn_21> = AttrsMerged<React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, TAttrsIn_21>>(attrs: Attrs<React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, TAttrsIn_21, TAttrsOut_21>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, TAttrsIn_21>>;
    };
    body: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>> & {
        attrs: <TAttrsIn_22 extends object = {}, TAttrsOut_22 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, TAttrsIn_22> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, TAttrsIn_22>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, TAttrsIn_22, TAttrsOut_22>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, TAttrsIn_22>>;
    };
    br: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>> & {
        attrs: <TAttrsIn_23 extends object = {}, TAttrsOut_23 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>, TAttrsIn_23> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>, TAttrsIn_23>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>, TAttrsIn_23, TAttrsOut_23>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>, TAttrsIn_23>>;
    };
    button: StyledLiteral<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> & {
        attrs: <TAttrsIn_24 extends object = {}, TAttrsOut_24 extends AttrsMerged<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, TAttrsIn_24> = AttrsMerged<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, TAttrsIn_24>>(attrs: Attrs<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, TAttrsIn_24, TAttrsOut_24>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, TAttrsIn_24>>;
    };
    canvas: StyledLiteral<React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>> & {
        attrs: <TAttrsIn_25 extends object = {}, TAttrsOut_25 extends AttrsMerged<React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, TAttrsIn_25> = AttrsMerged<React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, TAttrsIn_25>>(attrs: Attrs<React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, TAttrsIn_25, TAttrsOut_25>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, TAttrsIn_25>>;
    };
    caption: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_26 extends object = {}, TAttrsOut_26 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_26> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_26>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_26, TAttrsOut_26>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_26>>;
    };
    center: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_27 extends object = {}, TAttrsOut_27 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_27> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_27>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_27, TAttrsOut_27>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_27>>;
    };
    cite: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_28 extends object = {}, TAttrsOut_28 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_28> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_28>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_28, TAttrsOut_28>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_28>>;
    };
    code: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_29 extends object = {}, TAttrsOut_29 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_29> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_29>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_29, TAttrsOut_29>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_29>>;
    };
    col: StyledLiteral<React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>> & {
        attrs: <TAttrsIn_30 extends object = {}, TAttrsOut_30 extends AttrsMerged<React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, TAttrsIn_30> = AttrsMerged<React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, TAttrsIn_30>>(attrs: Attrs<React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, TAttrsIn_30, TAttrsOut_30>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, TAttrsIn_30>>;
    };
    colgroup: StyledLiteral<React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>> & {
        attrs: <TAttrsIn_31 extends object = {}, TAttrsOut_31 extends AttrsMerged<React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, TAttrsIn_31> = AttrsMerged<React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, TAttrsIn_31>>(attrs: Attrs<React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, TAttrsIn_31, TAttrsOut_31>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, TAttrsIn_31>>;
    };
    data: StyledLiteral<React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>> & {
        attrs: <TAttrsIn_32 extends object = {}, TAttrsOut_32 extends AttrsMerged<React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, TAttrsIn_32> = AttrsMerged<React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, TAttrsIn_32>>(attrs: Attrs<React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, TAttrsIn_32, TAttrsOut_32>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, TAttrsIn_32>>;
    };
    datalist: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>> & {
        attrs: <TAttrsIn_33 extends object = {}, TAttrsOut_33 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, TAttrsIn_33> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, TAttrsIn_33>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, TAttrsIn_33, TAttrsOut_33>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, TAttrsIn_33>>;
    };
    dd: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_34 extends object = {}, TAttrsOut_34 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_34> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_34>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_34, TAttrsOut_34>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_34>>;
    };
    del: StyledLiteral<React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>> & {
        attrs: <TAttrsIn_35 extends object = {}, TAttrsOut_35 extends AttrsMerged<React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>, TAttrsIn_35> = AttrsMerged<React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>, TAttrsIn_35>>(attrs: Attrs<React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>, TAttrsIn_35, TAttrsOut_35>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>, TAttrsIn_35>>;
    };
    details: StyledLiteral<React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>> & {
        attrs: <TAttrsIn_36 extends object = {}, TAttrsOut_36 extends AttrsMerged<React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, TAttrsIn_36> = AttrsMerged<React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, TAttrsIn_36>>(attrs: Attrs<React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, TAttrsIn_36, TAttrsOut_36>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, TAttrsIn_36>>;
    };
    dfn: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_37 extends object = {}, TAttrsOut_37 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_37> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_37>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_37, TAttrsOut_37>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_37>>;
    };
    dialog: StyledLiteral<React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>> & {
        attrs: <TAttrsIn_38 extends object = {}, TAttrsOut_38 extends AttrsMerged<React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, TAttrsIn_38> = AttrsMerged<React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, TAttrsIn_38>>(attrs: Attrs<React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, TAttrsIn_38, TAttrsOut_38>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, TAttrsIn_38>>;
    };
    div: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> & {
        attrs: <TAttrsIn_39 extends object = {}, TAttrsOut_39 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TAttrsIn_39> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TAttrsIn_39>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TAttrsIn_39, TAttrsOut_39>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, TAttrsIn_39>>;
    };
    dl: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>> & {
        attrs: <TAttrsIn_40 extends object = {}, TAttrsOut_40 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, TAttrsIn_40> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, TAttrsIn_40>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, TAttrsIn_40, TAttrsOut_40>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, TAttrsIn_40>>;
    };
    dt: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_41 extends object = {}, TAttrsOut_41 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_41> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_41>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_41, TAttrsOut_41>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_41>>;
    };
    em: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_42 extends object = {}, TAttrsOut_42 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_42> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_42>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_42, TAttrsOut_42>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_42>>;
    };
    embed: StyledLiteral<React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>> & {
        attrs: <TAttrsIn_43 extends object = {}, TAttrsOut_43 extends AttrsMerged<React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, TAttrsIn_43> = AttrsMerged<React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, TAttrsIn_43>>(attrs: Attrs<React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, TAttrsIn_43, TAttrsOut_43>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, TAttrsIn_43>>;
    };
    fieldset: StyledLiteral<React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>> & {
        attrs: <TAttrsIn_44 extends object = {}, TAttrsOut_44 extends AttrsMerged<React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, TAttrsIn_44> = AttrsMerged<React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, TAttrsIn_44>>(attrs: Attrs<React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, TAttrsIn_44, TAttrsOut_44>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, TAttrsIn_44>>;
    };
    figcaption: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_45 extends object = {}, TAttrsOut_45 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_45> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_45>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_45, TAttrsOut_45>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_45>>;
    };
    figure: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_46 extends object = {}, TAttrsOut_46 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_46> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_46>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_46, TAttrsOut_46>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_46>>;
    };
    footer: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_47 extends object = {}, TAttrsOut_47 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_47> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_47>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_47, TAttrsOut_47>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_47>>;
    };
    form: StyledLiteral<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>> & {
        attrs: <TAttrsIn_48 extends object = {}, TAttrsOut_48 extends AttrsMerged<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, TAttrsIn_48> = AttrsMerged<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, TAttrsIn_48>>(attrs: Attrs<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, TAttrsIn_48, TAttrsOut_48>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, TAttrsIn_48>>;
    };
    h1: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> & {
        attrs: <TAttrsIn_49 extends object = {}, TAttrsOut_49 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_49> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_49>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_49, TAttrsOut_49>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_49>>;
    };
    h2: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> & {
        attrs: <TAttrsIn_50 extends object = {}, TAttrsOut_50 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_50> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_50>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_50, TAttrsOut_50>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_50>>;
    };
    h3: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> & {
        attrs: <TAttrsIn_51 extends object = {}, TAttrsOut_51 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_51> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_51>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_51, TAttrsOut_51>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_51>>;
    };
    h4: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> & {
        attrs: <TAttrsIn_52 extends object = {}, TAttrsOut_52 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_52> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_52>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_52, TAttrsOut_52>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_52>>;
    };
    h5: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> & {
        attrs: <TAttrsIn_53 extends object = {}, TAttrsOut_53 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_53> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_53>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_53, TAttrsOut_53>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_53>>;
    };
    h6: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> & {
        attrs: <TAttrsIn_54 extends object = {}, TAttrsOut_54 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_54> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_54>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_54, TAttrsOut_54>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, TAttrsIn_54>>;
    };
    head: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>> & {
        attrs: <TAttrsIn_55 extends object = {}, TAttrsOut_55 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>, TAttrsIn_55> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>, TAttrsIn_55>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>, TAttrsIn_55, TAttrsOut_55>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>, TAttrsIn_55>>;
    };
    header: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_56 extends object = {}, TAttrsOut_56 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_56> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_56>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_56, TAttrsOut_56>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_56>>;
    };
    hgroup: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_57 extends object = {}, TAttrsOut_57 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_57> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_57>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_57, TAttrsOut_57>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_57>>;
    };
    hr: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>> & {
        attrs: <TAttrsIn_58 extends object = {}, TAttrsOut_58 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, TAttrsIn_58> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, TAttrsIn_58>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, TAttrsIn_58, TAttrsOut_58>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, TAttrsIn_58>>;
    };
    html: StyledLiteral<React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>> & {
        attrs: <TAttrsIn_59 extends object = {}, TAttrsOut_59 extends AttrsMerged<React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, TAttrsIn_59> = AttrsMerged<React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, TAttrsIn_59>>(attrs: Attrs<React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, TAttrsIn_59, TAttrsOut_59>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, TAttrsIn_59>>;
    };
    i: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_60 extends object = {}, TAttrsOut_60 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_60> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_60>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_60, TAttrsOut_60>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_60>>;
    };
    iframe: StyledLiteral<React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>> & {
        attrs: <TAttrsIn_61 extends object = {}, TAttrsOut_61 extends AttrsMerged<React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, TAttrsIn_61> = AttrsMerged<React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, TAttrsIn_61>>(attrs: Attrs<React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, TAttrsIn_61, TAttrsOut_61>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, TAttrsIn_61>>;
    };
    img: StyledLiteral<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> & {
        attrs: <TAttrsIn_62 extends object = {}, TAttrsOut_62 extends AttrsMerged<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, TAttrsIn_62> = AttrsMerged<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, TAttrsIn_62>>(attrs: Attrs<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, TAttrsIn_62, TAttrsOut_62>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, TAttrsIn_62>>;
    };
    input: StyledLiteral<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> & {
        attrs: <TAttrsIn_63 extends object = {}, TAttrsOut_63 extends AttrsMerged<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, TAttrsIn_63> = AttrsMerged<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, TAttrsIn_63>>(attrs: Attrs<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, TAttrsIn_63, TAttrsOut_63>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, TAttrsIn_63>>;
    };
    ins: StyledLiteral<React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>> & {
        attrs: <TAttrsIn_64 extends object = {}, TAttrsOut_64 extends AttrsMerged<React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>, TAttrsIn_64> = AttrsMerged<React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>, TAttrsIn_64>>(attrs: Attrs<React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>, TAttrsIn_64, TAttrsOut_64>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>, TAttrsIn_64>>;
    };
    kbd: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_65 extends object = {}, TAttrsOut_65 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_65> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_65>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_65, TAttrsOut_65>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_65>>;
    };
    keygen: StyledLiteral<React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_66 extends object = {}, TAttrsOut_66 extends AttrsMerged<React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_66> = AttrsMerged<React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_66>>(attrs: Attrs<React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_66, TAttrsOut_66>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_66>>;
    };
    label: StyledLiteral<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>> & {
        attrs: <TAttrsIn_67 extends object = {}, TAttrsOut_67 extends AttrsMerged<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, TAttrsIn_67> = AttrsMerged<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, TAttrsIn_67>>(attrs: Attrs<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, TAttrsIn_67, TAttrsOut_67>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, TAttrsIn_67>>;
    };
    legend: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>> & {
        attrs: <TAttrsIn_68 extends object = {}, TAttrsOut_68 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, TAttrsIn_68> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, TAttrsIn_68>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, TAttrsIn_68, TAttrsOut_68>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, TAttrsIn_68>>;
    };
    li: StyledLiteral<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>> & {
        attrs: <TAttrsIn_69 extends object = {}, TAttrsOut_69 extends AttrsMerged<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, TAttrsIn_69> = AttrsMerged<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, TAttrsIn_69>>(attrs: Attrs<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, TAttrsIn_69, TAttrsOut_69>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, TAttrsIn_69>>;
    };
    main: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_70 extends object = {}, TAttrsOut_70 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_70> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_70>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_70, TAttrsOut_70>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_70>>;
    };
    map: StyledLiteral<React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>> & {
        attrs: <TAttrsIn_71 extends object = {}, TAttrsOut_71 extends AttrsMerged<React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, TAttrsIn_71> = AttrsMerged<React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, TAttrsIn_71>>(attrs: Attrs<React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, TAttrsIn_71, TAttrsOut_71>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, TAttrsIn_71>>;
    };
    mark: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_72 extends object = {}, TAttrsOut_72 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_72> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_72>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_72, TAttrsOut_72>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_72>>;
    };
    menu: StyledLiteral<React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_73 extends object = {}, TAttrsOut_73 extends AttrsMerged<React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_73> = AttrsMerged<React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_73>>(attrs: Attrs<React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_73, TAttrsOut_73>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_73>>;
    };
    menuitem: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_74 extends object = {}, TAttrsOut_74 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_74> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_74>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_74, TAttrsOut_74>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_74>>;
    };
    meta: StyledLiteral<React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>> & {
        attrs: <TAttrsIn_75 extends object = {}, TAttrsOut_75 extends AttrsMerged<React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, TAttrsIn_75> = AttrsMerged<React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, TAttrsIn_75>>(attrs: Attrs<React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, TAttrsIn_75, TAttrsOut_75>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, TAttrsIn_75>>;
    };
    meter: StyledLiteral<React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>> & {
        attrs: <TAttrsIn_76 extends object = {}, TAttrsOut_76 extends AttrsMerged<React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, TAttrsIn_76> = AttrsMerged<React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, TAttrsIn_76>>(attrs: Attrs<React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, TAttrsIn_76, TAttrsOut_76>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, TAttrsIn_76>>;
    };
    nav: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_77 extends object = {}, TAttrsOut_77 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_77> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_77>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_77, TAttrsOut_77>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_77>>;
    };
    noindex: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_78 extends object = {}, TAttrsOut_78 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_78> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_78>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_78, TAttrsOut_78>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_78>>;
    };
    noscript: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_79 extends object = {}, TAttrsOut_79 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_79> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_79>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_79, TAttrsOut_79>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_79>>;
    };
    ol: StyledLiteral<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>> & {
        attrs: <TAttrsIn_80 extends object = {}, TAttrsOut_80 extends AttrsMerged<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, TAttrsIn_80> = AttrsMerged<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, TAttrsIn_80>>(attrs: Attrs<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, TAttrsIn_80, TAttrsOut_80>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, TAttrsIn_80>>;
    };
    optgroup: StyledLiteral<React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>> & {
        attrs: <TAttrsIn_81 extends object = {}, TAttrsOut_81 extends AttrsMerged<React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, TAttrsIn_81> = AttrsMerged<React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, TAttrsIn_81>>(attrs: Attrs<React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, TAttrsIn_81, TAttrsOut_81>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, TAttrsIn_81>>;
    };
    option: StyledLiteral<React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>> & {
        attrs: <TAttrsIn_82 extends object = {}, TAttrsOut_82 extends AttrsMerged<React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, TAttrsIn_82> = AttrsMerged<React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, TAttrsIn_82>>(attrs: Attrs<React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, TAttrsIn_82, TAttrsOut_82>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, TAttrsIn_82>>;
    };
    output: StyledLiteral<React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>> & {
        attrs: <TAttrsIn_83 extends object = {}, TAttrsOut_83 extends AttrsMerged<React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>, TAttrsIn_83> = AttrsMerged<React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>, TAttrsIn_83>>(attrs: Attrs<React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>, TAttrsIn_83, TAttrsOut_83>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>, TAttrsIn_83>>;
    };
    p: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>> & {
        attrs: <TAttrsIn_84 extends object = {}, TAttrsOut_84 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, TAttrsIn_84> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, TAttrsIn_84>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, TAttrsIn_84, TAttrsOut_84>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, TAttrsIn_84>>;
    };
    param: StyledLiteral<React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>> & {
        attrs: <TAttrsIn_85 extends object = {}, TAttrsOut_85 extends AttrsMerged<React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>, TAttrsIn_85> = AttrsMerged<React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>, TAttrsIn_85>>(attrs: Attrs<React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>, TAttrsIn_85, TAttrsOut_85>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>, TAttrsIn_85>>;
    };
    picture: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_86 extends object = {}, TAttrsOut_86 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_86> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_86>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_86, TAttrsOut_86>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_86>>;
    };
    pre: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>> & {
        attrs: <TAttrsIn_87 extends object = {}, TAttrsOut_87 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, TAttrsIn_87> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, TAttrsIn_87>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, TAttrsIn_87, TAttrsOut_87>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, TAttrsIn_87>>;
    };
    progress: StyledLiteral<React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>> & {
        attrs: <TAttrsIn_88 extends object = {}, TAttrsOut_88 extends AttrsMerged<React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, TAttrsIn_88> = AttrsMerged<React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, TAttrsIn_88>>(attrs: Attrs<React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, TAttrsIn_88, TAttrsOut_88>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, TAttrsIn_88>>;
    };
    q: StyledLiteral<React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>> & {
        attrs: <TAttrsIn_89 extends object = {}, TAttrsOut_89 extends AttrsMerged<React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, TAttrsIn_89> = AttrsMerged<React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, TAttrsIn_89>>(attrs: Attrs<React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, TAttrsIn_89, TAttrsOut_89>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, TAttrsIn_89>>;
    };
    rp: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_90 extends object = {}, TAttrsOut_90 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_90> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_90>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_90, TAttrsOut_90>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_90>>;
    };
    rt: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_91 extends object = {}, TAttrsOut_91 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_91> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_91>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_91, TAttrsOut_91>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_91>>;
    };
    ruby: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_92 extends object = {}, TAttrsOut_92 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_92> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_92>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_92, TAttrsOut_92>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_92>>;
    };
    s: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_93 extends object = {}, TAttrsOut_93 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_93> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_93>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_93, TAttrsOut_93>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_93>>;
    };
    samp: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_94 extends object = {}, TAttrsOut_94 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_94> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_94>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_94, TAttrsOut_94>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_94>>;
    };
    slot: StyledLiteral<React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>> & {
        attrs: <TAttrsIn_95 extends object = {}, TAttrsOut_95 extends AttrsMerged<React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>, TAttrsIn_95> = AttrsMerged<React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>, TAttrsIn_95>>(attrs: Attrs<React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>, TAttrsIn_95, TAttrsOut_95>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>, TAttrsIn_95>>;
    };
    script: StyledLiteral<React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>> & {
        attrs: <TAttrsIn_96 extends object = {}, TAttrsOut_96 extends AttrsMerged<React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, TAttrsIn_96> = AttrsMerged<React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, TAttrsIn_96>>(attrs: Attrs<React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, TAttrsIn_96, TAttrsOut_96>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, TAttrsIn_96>>;
    };
    section: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_97 extends object = {}, TAttrsOut_97 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_97> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_97>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_97, TAttrsOut_97>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_97>>;
    };
    select: StyledLiteral<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>> & {
        attrs: <TAttrsIn_98 extends object = {}, TAttrsOut_98 extends AttrsMerged<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, TAttrsIn_98> = AttrsMerged<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, TAttrsIn_98>>(attrs: Attrs<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, TAttrsIn_98, TAttrsOut_98>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, TAttrsIn_98>>;
    };
    source: StyledLiteral<React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>> & {
        attrs: <TAttrsIn_99 extends object = {}, TAttrsOut_99 extends AttrsMerged<React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, TAttrsIn_99> = AttrsMerged<React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, TAttrsIn_99>>(attrs: Attrs<React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, TAttrsIn_99, TAttrsOut_99>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, TAttrsIn_99>>;
    };
    span: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>> & {
        attrs: <TAttrsIn_100 extends object = {}, TAttrsOut_100 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, TAttrsIn_100> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, TAttrsIn_100>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, TAttrsIn_100, TAttrsOut_100>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, TAttrsIn_100>>;
    };
    strong: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_101 extends object = {}, TAttrsOut_101 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_101> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_101>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_101, TAttrsOut_101>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_101>>;
    };
    summary: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_102 extends object = {}, TAttrsOut_102 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_102> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_102>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_102, TAttrsOut_102>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_102>>;
    };
    table: StyledLiteral<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>> & {
        attrs: <TAttrsIn_103 extends object = {}, TAttrsOut_103 extends AttrsMerged<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, TAttrsIn_103> = AttrsMerged<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, TAttrsIn_103>>(attrs: Attrs<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, TAttrsIn_103, TAttrsOut_103>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, TAttrsIn_103>>;
    };
    template: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>> & {
        attrs: <TAttrsIn_104 extends object = {}, TAttrsOut_104 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>, TAttrsIn_104> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>, TAttrsIn_104>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>, TAttrsIn_104, TAttrsOut_104>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>, TAttrsIn_104>>;
    };
    tbody: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>> & {
        attrs: <TAttrsIn_105 extends object = {}, TAttrsOut_105 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TAttrsIn_105> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TAttrsIn_105>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TAttrsIn_105, TAttrsOut_105>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TAttrsIn_105>>;
    };
    td: StyledLiteral<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>> & {
        attrs: <TAttrsIn_106 extends object = {}, TAttrsOut_106 extends AttrsMerged<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, TAttrsIn_106> = AttrsMerged<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, TAttrsIn_106>>(attrs: Attrs<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, TAttrsIn_106, TAttrsOut_106>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, TAttrsIn_106>>;
    };
    textarea: StyledLiteral<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>> & {
        attrs: <TAttrsIn_107 extends object = {}, TAttrsOut_107 extends AttrsMerged<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, TAttrsIn_107> = AttrsMerged<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, TAttrsIn_107>>(attrs: Attrs<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, TAttrsIn_107, TAttrsOut_107>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, TAttrsIn_107>>;
    };
    tfoot: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>> & {
        attrs: <TAttrsIn_108 extends object = {}, TAttrsOut_108 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TAttrsIn_108> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TAttrsIn_108>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TAttrsIn_108, TAttrsOut_108>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TAttrsIn_108>>;
    };
    th: StyledLiteral<React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>> & {
        attrs: <TAttrsIn_109 extends object = {}, TAttrsOut_109 extends AttrsMerged<React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, TAttrsIn_109> = AttrsMerged<React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, TAttrsIn_109>>(attrs: Attrs<React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, TAttrsIn_109, TAttrsOut_109>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, TAttrsIn_109>>;
    };
    thead: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>> & {
        attrs: <TAttrsIn_110 extends object = {}, TAttrsOut_110 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TAttrsIn_110> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TAttrsIn_110>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TAttrsIn_110, TAttrsOut_110>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, TAttrsIn_110>>;
    };
    time: StyledLiteral<React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>> & {
        attrs: <TAttrsIn_111 extends object = {}, TAttrsOut_111 extends AttrsMerged<React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, TAttrsIn_111> = AttrsMerged<React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, TAttrsIn_111>>(attrs: Attrs<React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, TAttrsIn_111, TAttrsOut_111>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, TAttrsIn_111>>;
    };
    title: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>> & {
        attrs: <TAttrsIn_112 extends object = {}, TAttrsOut_112 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, TAttrsIn_112> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, TAttrsIn_112>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, TAttrsIn_112, TAttrsOut_112>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, TAttrsIn_112>>;
    };
    tr: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>> & {
        attrs: <TAttrsIn_113 extends object = {}, TAttrsOut_113 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, TAttrsIn_113> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, TAttrsIn_113>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, TAttrsIn_113, TAttrsOut_113>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, TAttrsIn_113>>;
    };
    track: StyledLiteral<React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>> & {
        attrs: <TAttrsIn_114 extends object = {}, TAttrsOut_114 extends AttrsMerged<React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, TAttrsIn_114> = AttrsMerged<React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, TAttrsIn_114>>(attrs: Attrs<React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, TAttrsIn_114, TAttrsOut_114>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, TAttrsIn_114>>;
    };
    u: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_115 extends object = {}, TAttrsOut_115 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_115> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_115>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_115, TAttrsOut_115>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_115>>;
    };
    ul: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>> & {
        attrs: <TAttrsIn_116 extends object = {}, TAttrsOut_116 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, TAttrsIn_116> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, TAttrsIn_116>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, TAttrsIn_116, TAttrsOut_116>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, TAttrsIn_116>>;
    };
    var: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_117 extends object = {}, TAttrsOut_117 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_117> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_117>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_117, TAttrsOut_117>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_117>>;
    };
    video: StyledLiteral<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>> & {
        attrs: <TAttrsIn_118 extends object = {}, TAttrsOut_118 extends AttrsMerged<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, TAttrsIn_118> = AttrsMerged<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, TAttrsIn_118>>(attrs: Attrs<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, TAttrsIn_118, TAttrsOut_118>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, TAttrsIn_118>>;
    };
    wbr: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & {
        attrs: <TAttrsIn_119 extends object = {}, TAttrsOut_119 extends AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_119> = AttrsMerged<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_119>>(attrs: Attrs<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_119, TAttrsOut_119>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, TAttrsIn_119>>;
    };
    webview: StyledLiteral<React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>> & {
        attrs: <TAttrsIn_120 extends object = {}, TAttrsOut_120 extends AttrsMerged<React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>, TAttrsIn_120> = AttrsMerged<React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>, TAttrsIn_120>>(attrs: Attrs<React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>, TAttrsIn_120, TAttrsOut_120>) => StyledLiteral<Substitute<React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>, TAttrsIn_120>>;
    };
    svg: StyledLiteral<React.SVGProps<SVGSVGElement>> & {
        attrs: <TAttrsIn_121 extends object = {}, TAttrsOut_121 extends AttrsMerged<React.SVGProps<SVGSVGElement>, TAttrsIn_121> = AttrsMerged<React.SVGProps<SVGSVGElement>, TAttrsIn_121>>(attrs: Attrs<React.SVGProps<SVGSVGElement>, TAttrsIn_121, TAttrsOut_121>) => StyledLiteral<Substitute<React.SVGProps<SVGSVGElement>, TAttrsIn_121>>;
    };
    animate: StyledLiteral<React.SVGProps<SVGElement>> & {
        attrs: <TAttrsIn_122 extends object = {}, TAttrsOut_122 extends AttrsMerged<React.SVGProps<SVGElement>, TAttrsIn_122> = AttrsMerged<React.SVGProps<SVGElement>, TAttrsIn_122>>(attrs: Attrs<React.SVGProps<SVGElement>, TAttrsIn_122, TAttrsOut_122>) => StyledLiteral<Substitute<React.SVGProps<SVGElement>, TAttrsIn_122>>;
    };
    animateMotion: StyledLiteral<React.SVGProps<SVGElement>> & {
        attrs: <TAttrsIn_123 extends object = {}, TAttrsOut_123 extends AttrsMerged<React.SVGProps<SVGElement>, TAttrsIn_123> = AttrsMerged<React.SVGProps<SVGElement>, TAttrsIn_123>>(attrs: Attrs<React.SVGProps<SVGElement>, TAttrsIn_123, TAttrsOut_123>) => StyledLiteral<Substitute<React.SVGProps<SVGElement>, TAttrsIn_123>>;
    };
    animateTransform: StyledLiteral<React.SVGProps<SVGElement>> & {
        attrs: <TAttrsIn_124 extends object = {}, TAttrsOut_124 extends AttrsMerged<React.SVGProps<SVGElement>, TAttrsIn_124> = AttrsMerged<React.SVGProps<SVGElement>, TAttrsIn_124>>(attrs: Attrs<React.SVGProps<SVGElement>, TAttrsIn_124, TAttrsOut_124>) => StyledLiteral<Substitute<React.SVGProps<SVGElement>, TAttrsIn_124>>;
    };
    circle: StyledLiteral<React.SVGProps<SVGCircleElement>> & {
        attrs: <TAttrsIn_125 extends object = {}, TAttrsOut_125 extends AttrsMerged<React.SVGProps<SVGCircleElement>, TAttrsIn_125> = AttrsMerged<React.SVGProps<SVGCircleElement>, TAttrsIn_125>>(attrs: Attrs<React.SVGProps<SVGCircleElement>, TAttrsIn_125, TAttrsOut_125>) => StyledLiteral<Substitute<React.SVGProps<SVGCircleElement>, TAttrsIn_125>>;
    };
    clipPath: StyledLiteral<React.SVGProps<SVGClipPathElement>> & {
        attrs: <TAttrsIn_126 extends object = {}, TAttrsOut_126 extends AttrsMerged<React.SVGProps<SVGClipPathElement>, TAttrsIn_126> = AttrsMerged<React.SVGProps<SVGClipPathElement>, TAttrsIn_126>>(attrs: Attrs<React.SVGProps<SVGClipPathElement>, TAttrsIn_126, TAttrsOut_126>) => StyledLiteral<Substitute<React.SVGProps<SVGClipPathElement>, TAttrsIn_126>>;
    };
    defs: StyledLiteral<React.SVGProps<SVGDefsElement>> & {
        attrs: <TAttrsIn_127 extends object = {}, TAttrsOut_127 extends AttrsMerged<React.SVGProps<SVGDefsElement>, TAttrsIn_127> = AttrsMerged<React.SVGProps<SVGDefsElement>, TAttrsIn_127>>(attrs: Attrs<React.SVGProps<SVGDefsElement>, TAttrsIn_127, TAttrsOut_127>) => StyledLiteral<Substitute<React.SVGProps<SVGDefsElement>, TAttrsIn_127>>;
    };
    desc: StyledLiteral<React.SVGProps<SVGDescElement>> & {
        attrs: <TAttrsIn_128 extends object = {}, TAttrsOut_128 extends AttrsMerged<React.SVGProps<SVGDescElement>, TAttrsIn_128> = AttrsMerged<React.SVGProps<SVGDescElement>, TAttrsIn_128>>(attrs: Attrs<React.SVGProps<SVGDescElement>, TAttrsIn_128, TAttrsOut_128>) => StyledLiteral<Substitute<React.SVGProps<SVGDescElement>, TAttrsIn_128>>;
    };
    ellipse: StyledLiteral<React.SVGProps<SVGEllipseElement>> & {
        attrs: <TAttrsIn_129 extends object = {}, TAttrsOut_129 extends AttrsMerged<React.SVGProps<SVGEllipseElement>, TAttrsIn_129> = AttrsMerged<React.SVGProps<SVGEllipseElement>, TAttrsIn_129>>(attrs: Attrs<React.SVGProps<SVGEllipseElement>, TAttrsIn_129, TAttrsOut_129>) => StyledLiteral<Substitute<React.SVGProps<SVGEllipseElement>, TAttrsIn_129>>;
    };
    feBlend: StyledLiteral<React.SVGProps<SVGFEBlendElement>> & {
        attrs: <TAttrsIn_130 extends object = {}, TAttrsOut_130 extends AttrsMerged<React.SVGProps<SVGFEBlendElement>, TAttrsIn_130> = AttrsMerged<React.SVGProps<SVGFEBlendElement>, TAttrsIn_130>>(attrs: Attrs<React.SVGProps<SVGFEBlendElement>, TAttrsIn_130, TAttrsOut_130>) => StyledLiteral<Substitute<React.SVGProps<SVGFEBlendElement>, TAttrsIn_130>>;
    };
    feColorMatrix: StyledLiteral<React.SVGProps<SVGFEColorMatrixElement>> & {
        attrs: <TAttrsIn_131 extends object = {}, TAttrsOut_131 extends AttrsMerged<React.SVGProps<SVGFEColorMatrixElement>, TAttrsIn_131> = AttrsMerged<React.SVGProps<SVGFEColorMatrixElement>, TAttrsIn_131>>(attrs: Attrs<React.SVGProps<SVGFEColorMatrixElement>, TAttrsIn_131, TAttrsOut_131>) => StyledLiteral<Substitute<React.SVGProps<SVGFEColorMatrixElement>, TAttrsIn_131>>;
    };
    feComponentTransfer: StyledLiteral<React.SVGProps<SVGFEComponentTransferElement>> & {
        attrs: <TAttrsIn_132 extends object = {}, TAttrsOut_132 extends AttrsMerged<React.SVGProps<SVGFEComponentTransferElement>, TAttrsIn_132> = AttrsMerged<React.SVGProps<SVGFEComponentTransferElement>, TAttrsIn_132>>(attrs: Attrs<React.SVGProps<SVGFEComponentTransferElement>, TAttrsIn_132, TAttrsOut_132>) => StyledLiteral<Substitute<React.SVGProps<SVGFEComponentTransferElement>, TAttrsIn_132>>;
    };
    feComposite: StyledLiteral<React.SVGProps<SVGFECompositeElement>> & {
        attrs: <TAttrsIn_133 extends object = {}, TAttrsOut_133 extends AttrsMerged<React.SVGProps<SVGFECompositeElement>, TAttrsIn_133> = AttrsMerged<React.SVGProps<SVGFECompositeElement>, TAttrsIn_133>>(attrs: Attrs<React.SVGProps<SVGFECompositeElement>, TAttrsIn_133, TAttrsOut_133>) => StyledLiteral<Substitute<React.SVGProps<SVGFECompositeElement>, TAttrsIn_133>>;
    };
    feConvolveMatrix: StyledLiteral<React.SVGProps<SVGFEConvolveMatrixElement>> & {
        attrs: <TAttrsIn_134 extends object = {}, TAttrsOut_134 extends AttrsMerged<React.SVGProps<SVGFEConvolveMatrixElement>, TAttrsIn_134> = AttrsMerged<React.SVGProps<SVGFEConvolveMatrixElement>, TAttrsIn_134>>(attrs: Attrs<React.SVGProps<SVGFEConvolveMatrixElement>, TAttrsIn_134, TAttrsOut_134>) => StyledLiteral<Substitute<React.SVGProps<SVGFEConvolveMatrixElement>, TAttrsIn_134>>;
    };
    feDiffuseLighting: StyledLiteral<React.SVGProps<SVGFEDiffuseLightingElement>> & {
        attrs: <TAttrsIn_135 extends object = {}, TAttrsOut_135 extends AttrsMerged<React.SVGProps<SVGFEDiffuseLightingElement>, TAttrsIn_135> = AttrsMerged<React.SVGProps<SVGFEDiffuseLightingElement>, TAttrsIn_135>>(attrs: Attrs<React.SVGProps<SVGFEDiffuseLightingElement>, TAttrsIn_135, TAttrsOut_135>) => StyledLiteral<Substitute<React.SVGProps<SVGFEDiffuseLightingElement>, TAttrsIn_135>>;
    };
    feDisplacementMap: StyledLiteral<React.SVGProps<SVGFEDisplacementMapElement>> & {
        attrs: <TAttrsIn_136 extends object = {}, TAttrsOut_136 extends AttrsMerged<React.SVGProps<SVGFEDisplacementMapElement>, TAttrsIn_136> = AttrsMerged<React.SVGProps<SVGFEDisplacementMapElement>, TAttrsIn_136>>(attrs: Attrs<React.SVGProps<SVGFEDisplacementMapElement>, TAttrsIn_136, TAttrsOut_136>) => StyledLiteral<Substitute<React.SVGProps<SVGFEDisplacementMapElement>, TAttrsIn_136>>;
    };
    feDistantLight: StyledLiteral<React.SVGProps<SVGFEDistantLightElement>> & {
        attrs: <TAttrsIn_137 extends object = {}, TAttrsOut_137 extends AttrsMerged<React.SVGProps<SVGFEDistantLightElement>, TAttrsIn_137> = AttrsMerged<React.SVGProps<SVGFEDistantLightElement>, TAttrsIn_137>>(attrs: Attrs<React.SVGProps<SVGFEDistantLightElement>, TAttrsIn_137, TAttrsOut_137>) => StyledLiteral<Substitute<React.SVGProps<SVGFEDistantLightElement>, TAttrsIn_137>>;
    };
    feDropShadow: StyledLiteral<React.SVGProps<SVGFEDropShadowElement>> & {
        attrs: <TAttrsIn_138 extends object = {}, TAttrsOut_138 extends AttrsMerged<React.SVGProps<SVGFEDropShadowElement>, TAttrsIn_138> = AttrsMerged<React.SVGProps<SVGFEDropShadowElement>, TAttrsIn_138>>(attrs: Attrs<React.SVGProps<SVGFEDropShadowElement>, TAttrsIn_138, TAttrsOut_138>) => StyledLiteral<Substitute<React.SVGProps<SVGFEDropShadowElement>, TAttrsIn_138>>;
    };
    feFlood: StyledLiteral<React.SVGProps<SVGFEFloodElement>> & {
        attrs: <TAttrsIn_139 extends object = {}, TAttrsOut_139 extends AttrsMerged<React.SVGProps<SVGFEFloodElement>, TAttrsIn_139> = AttrsMerged<React.SVGProps<SVGFEFloodElement>, TAttrsIn_139>>(attrs: Attrs<React.SVGProps<SVGFEFloodElement>, TAttrsIn_139, TAttrsOut_139>) => StyledLiteral<Substitute<React.SVGProps<SVGFEFloodElement>, TAttrsIn_139>>;
    };
    feFuncA: StyledLiteral<React.SVGProps<SVGFEFuncAElement>> & {
        attrs: <TAttrsIn_140 extends object = {}, TAttrsOut_140 extends AttrsMerged<React.SVGProps<SVGFEFuncAElement>, TAttrsIn_140> = AttrsMerged<React.SVGProps<SVGFEFuncAElement>, TAttrsIn_140>>(attrs: Attrs<React.SVGProps<SVGFEFuncAElement>, TAttrsIn_140, TAttrsOut_140>) => StyledLiteral<Substitute<React.SVGProps<SVGFEFuncAElement>, TAttrsIn_140>>;
    };
    feFuncB: StyledLiteral<React.SVGProps<SVGFEFuncBElement>> & {
        attrs: <TAttrsIn_141 extends object = {}, TAttrsOut_141 extends AttrsMerged<React.SVGProps<SVGFEFuncBElement>, TAttrsIn_141> = AttrsMerged<React.SVGProps<SVGFEFuncBElement>, TAttrsIn_141>>(attrs: Attrs<React.SVGProps<SVGFEFuncBElement>, TAttrsIn_141, TAttrsOut_141>) => StyledLiteral<Substitute<React.SVGProps<SVGFEFuncBElement>, TAttrsIn_141>>;
    };
    feFuncG: StyledLiteral<React.SVGProps<SVGFEFuncGElement>> & {
        attrs: <TAttrsIn_142 extends object = {}, TAttrsOut_142 extends AttrsMerged<React.SVGProps<SVGFEFuncGElement>, TAttrsIn_142> = AttrsMerged<React.SVGProps<SVGFEFuncGElement>, TAttrsIn_142>>(attrs: Attrs<React.SVGProps<SVGFEFuncGElement>, TAttrsIn_142, TAttrsOut_142>) => StyledLiteral<Substitute<React.SVGProps<SVGFEFuncGElement>, TAttrsIn_142>>;
    };
    feFuncR: StyledLiteral<React.SVGProps<SVGFEFuncRElement>> & {
        attrs: <TAttrsIn_143 extends object = {}, TAttrsOut_143 extends AttrsMerged<React.SVGProps<SVGFEFuncRElement>, TAttrsIn_143> = AttrsMerged<React.SVGProps<SVGFEFuncRElement>, TAttrsIn_143>>(attrs: Attrs<React.SVGProps<SVGFEFuncRElement>, TAttrsIn_143, TAttrsOut_143>) => StyledLiteral<Substitute<React.SVGProps<SVGFEFuncRElement>, TAttrsIn_143>>;
    };
    feGaussianBlur: StyledLiteral<React.SVGProps<SVGFEGaussianBlurElement>> & {
        attrs: <TAttrsIn_144 extends object = {}, TAttrsOut_144 extends AttrsMerged<React.SVGProps<SVGFEGaussianBlurElement>, TAttrsIn_144> = AttrsMerged<React.SVGProps<SVGFEGaussianBlurElement>, TAttrsIn_144>>(attrs: Attrs<React.SVGProps<SVGFEGaussianBlurElement>, TAttrsIn_144, TAttrsOut_144>) => StyledLiteral<Substitute<React.SVGProps<SVGFEGaussianBlurElement>, TAttrsIn_144>>;
    };
    feImage: StyledLiteral<React.SVGProps<SVGFEImageElement>> & {
        attrs: <TAttrsIn_145 extends object = {}, TAttrsOut_145 extends AttrsMerged<React.SVGProps<SVGFEImageElement>, TAttrsIn_145> = AttrsMerged<React.SVGProps<SVGFEImageElement>, TAttrsIn_145>>(attrs: Attrs<React.SVGProps<SVGFEImageElement>, TAttrsIn_145, TAttrsOut_145>) => StyledLiteral<Substitute<React.SVGProps<SVGFEImageElement>, TAttrsIn_145>>;
    };
    feMerge: StyledLiteral<React.SVGProps<SVGFEMergeElement>> & {
        attrs: <TAttrsIn_146 extends object = {}, TAttrsOut_146 extends AttrsMerged<React.SVGProps<SVGFEMergeElement>, TAttrsIn_146> = AttrsMerged<React.SVGProps<SVGFEMergeElement>, TAttrsIn_146>>(attrs: Attrs<React.SVGProps<SVGFEMergeElement>, TAttrsIn_146, TAttrsOut_146>) => StyledLiteral<Substitute<React.SVGProps<SVGFEMergeElement>, TAttrsIn_146>>;
    };
    feMergeNode: StyledLiteral<React.SVGProps<SVGFEMergeNodeElement>> & {
        attrs: <TAttrsIn_147 extends object = {}, TAttrsOut_147 extends AttrsMerged<React.SVGProps<SVGFEMergeNodeElement>, TAttrsIn_147> = AttrsMerged<React.SVGProps<SVGFEMergeNodeElement>, TAttrsIn_147>>(attrs: Attrs<React.SVGProps<SVGFEMergeNodeElement>, TAttrsIn_147, TAttrsOut_147>) => StyledLiteral<Substitute<React.SVGProps<SVGFEMergeNodeElement>, TAttrsIn_147>>;
    };
    feMorphology: StyledLiteral<React.SVGProps<SVGFEMorphologyElement>> & {
        attrs: <TAttrsIn_148 extends object = {}, TAttrsOut_148 extends AttrsMerged<React.SVGProps<SVGFEMorphologyElement>, TAttrsIn_148> = AttrsMerged<React.SVGProps<SVGFEMorphologyElement>, TAttrsIn_148>>(attrs: Attrs<React.SVGProps<SVGFEMorphologyElement>, TAttrsIn_148, TAttrsOut_148>) => StyledLiteral<Substitute<React.SVGProps<SVGFEMorphologyElement>, TAttrsIn_148>>;
    };
    feOffset: StyledLiteral<React.SVGProps<SVGFEOffsetElement>> & {
        attrs: <TAttrsIn_149 extends object = {}, TAttrsOut_149 extends AttrsMerged<React.SVGProps<SVGFEOffsetElement>, TAttrsIn_149> = AttrsMerged<React.SVGProps<SVGFEOffsetElement>, TAttrsIn_149>>(attrs: Attrs<React.SVGProps<SVGFEOffsetElement>, TAttrsIn_149, TAttrsOut_149>) => StyledLiteral<Substitute<React.SVGProps<SVGFEOffsetElement>, TAttrsIn_149>>;
    };
    fePointLight: StyledLiteral<React.SVGProps<SVGFEPointLightElement>> & {
        attrs: <TAttrsIn_150 extends object = {}, TAttrsOut_150 extends AttrsMerged<React.SVGProps<SVGFEPointLightElement>, TAttrsIn_150> = AttrsMerged<React.SVGProps<SVGFEPointLightElement>, TAttrsIn_150>>(attrs: Attrs<React.SVGProps<SVGFEPointLightElement>, TAttrsIn_150, TAttrsOut_150>) => StyledLiteral<Substitute<React.SVGProps<SVGFEPointLightElement>, TAttrsIn_150>>;
    };
    feSpecularLighting: StyledLiteral<React.SVGProps<SVGFESpecularLightingElement>> & {
        attrs: <TAttrsIn_151 extends object = {}, TAttrsOut_151 extends AttrsMerged<React.SVGProps<SVGFESpecularLightingElement>, TAttrsIn_151> = AttrsMerged<React.SVGProps<SVGFESpecularLightingElement>, TAttrsIn_151>>(attrs: Attrs<React.SVGProps<SVGFESpecularLightingElement>, TAttrsIn_151, TAttrsOut_151>) => StyledLiteral<Substitute<React.SVGProps<SVGFESpecularLightingElement>, TAttrsIn_151>>;
    };
    feSpotLight: StyledLiteral<React.SVGProps<SVGFESpotLightElement>> & {
        attrs: <TAttrsIn_152 extends object = {}, TAttrsOut_152 extends AttrsMerged<React.SVGProps<SVGFESpotLightElement>, TAttrsIn_152> = AttrsMerged<React.SVGProps<SVGFESpotLightElement>, TAttrsIn_152>>(attrs: Attrs<React.SVGProps<SVGFESpotLightElement>, TAttrsIn_152, TAttrsOut_152>) => StyledLiteral<Substitute<React.SVGProps<SVGFESpotLightElement>, TAttrsIn_152>>;
    };
    feTile: StyledLiteral<React.SVGProps<SVGFETileElement>> & {
        attrs: <TAttrsIn_153 extends object = {}, TAttrsOut_153 extends AttrsMerged<React.SVGProps<SVGFETileElement>, TAttrsIn_153> = AttrsMerged<React.SVGProps<SVGFETileElement>, TAttrsIn_153>>(attrs: Attrs<React.SVGProps<SVGFETileElement>, TAttrsIn_153, TAttrsOut_153>) => StyledLiteral<Substitute<React.SVGProps<SVGFETileElement>, TAttrsIn_153>>;
    };
    feTurbulence: StyledLiteral<React.SVGProps<SVGFETurbulenceElement>> & {
        attrs: <TAttrsIn_154 extends object = {}, TAttrsOut_154 extends AttrsMerged<React.SVGProps<SVGFETurbulenceElement>, TAttrsIn_154> = AttrsMerged<React.SVGProps<SVGFETurbulenceElement>, TAttrsIn_154>>(attrs: Attrs<React.SVGProps<SVGFETurbulenceElement>, TAttrsIn_154, TAttrsOut_154>) => StyledLiteral<Substitute<React.SVGProps<SVGFETurbulenceElement>, TAttrsIn_154>>;
    };
    filter: StyledLiteral<React.SVGProps<SVGFilterElement>> & {
        attrs: <TAttrsIn_155 extends object = {}, TAttrsOut_155 extends AttrsMerged<React.SVGProps<SVGFilterElement>, TAttrsIn_155> = AttrsMerged<React.SVGProps<SVGFilterElement>, TAttrsIn_155>>(attrs: Attrs<React.SVGProps<SVGFilterElement>, TAttrsIn_155, TAttrsOut_155>) => StyledLiteral<Substitute<React.SVGProps<SVGFilterElement>, TAttrsIn_155>>;
    };
    foreignObject: StyledLiteral<React.SVGProps<SVGForeignObjectElement>> & {
        attrs: <TAttrsIn_156 extends object = {}, TAttrsOut_156 extends AttrsMerged<React.SVGProps<SVGForeignObjectElement>, TAttrsIn_156> = AttrsMerged<React.SVGProps<SVGForeignObjectElement>, TAttrsIn_156>>(attrs: Attrs<React.SVGProps<SVGForeignObjectElement>, TAttrsIn_156, TAttrsOut_156>) => StyledLiteral<Substitute<React.SVGProps<SVGForeignObjectElement>, TAttrsIn_156>>;
    };
    g: StyledLiteral<React.SVGProps<SVGGElement>> & {
        attrs: <TAttrsIn_157 extends object = {}, TAttrsOut_157 extends AttrsMerged<React.SVGProps<SVGGElement>, TAttrsIn_157> = AttrsMerged<React.SVGProps<SVGGElement>, TAttrsIn_157>>(attrs: Attrs<React.SVGProps<SVGGElement>, TAttrsIn_157, TAttrsOut_157>) => StyledLiteral<Substitute<React.SVGProps<SVGGElement>, TAttrsIn_157>>;
    };
    image: StyledLiteral<React.SVGProps<SVGImageElement>> & {
        attrs: <TAttrsIn_158 extends object = {}, TAttrsOut_158 extends AttrsMerged<React.SVGProps<SVGImageElement>, TAttrsIn_158> = AttrsMerged<React.SVGProps<SVGImageElement>, TAttrsIn_158>>(attrs: Attrs<React.SVGProps<SVGImageElement>, TAttrsIn_158, TAttrsOut_158>) => StyledLiteral<Substitute<React.SVGProps<SVGImageElement>, TAttrsIn_158>>;
    };
    line: StyledLiteral<React.SVGLineElementAttributes<SVGLineElement>> & {
        attrs: <TAttrsIn_159 extends object = {}, TAttrsOut_159 extends AttrsMerged<React.SVGLineElementAttributes<SVGLineElement>, TAttrsIn_159> = AttrsMerged<React.SVGLineElementAttributes<SVGLineElement>, TAttrsIn_159>>(attrs: Attrs<React.SVGLineElementAttributes<SVGLineElement>, TAttrsIn_159, TAttrsOut_159>) => StyledLiteral<Substitute<React.SVGLineElementAttributes<SVGLineElement>, TAttrsIn_159>>;
    };
    linearGradient: StyledLiteral<React.SVGProps<SVGLinearGradientElement>> & {
        attrs: <TAttrsIn_160 extends object = {}, TAttrsOut_160 extends AttrsMerged<React.SVGProps<SVGLinearGradientElement>, TAttrsIn_160> = AttrsMerged<React.SVGProps<SVGLinearGradientElement>, TAttrsIn_160>>(attrs: Attrs<React.SVGProps<SVGLinearGradientElement>, TAttrsIn_160, TAttrsOut_160>) => StyledLiteral<Substitute<React.SVGProps<SVGLinearGradientElement>, TAttrsIn_160>>;
    };
    marker: StyledLiteral<React.SVGProps<SVGMarkerElement>> & {
        attrs: <TAttrsIn_161 extends object = {}, TAttrsOut_161 extends AttrsMerged<React.SVGProps<SVGMarkerElement>, TAttrsIn_161> = AttrsMerged<React.SVGProps<SVGMarkerElement>, TAttrsIn_161>>(attrs: Attrs<React.SVGProps<SVGMarkerElement>, TAttrsIn_161, TAttrsOut_161>) => StyledLiteral<Substitute<React.SVGProps<SVGMarkerElement>, TAttrsIn_161>>;
    };
    mask: StyledLiteral<React.SVGProps<SVGMaskElement>> & {
        attrs: <TAttrsIn_162 extends object = {}, TAttrsOut_162 extends AttrsMerged<React.SVGProps<SVGMaskElement>, TAttrsIn_162> = AttrsMerged<React.SVGProps<SVGMaskElement>, TAttrsIn_162>>(attrs: Attrs<React.SVGProps<SVGMaskElement>, TAttrsIn_162, TAttrsOut_162>) => StyledLiteral<Substitute<React.SVGProps<SVGMaskElement>, TAttrsIn_162>>;
    };
    metadata: StyledLiteral<React.SVGProps<SVGMetadataElement>> & {
        attrs: <TAttrsIn_163 extends object = {}, TAttrsOut_163 extends AttrsMerged<React.SVGProps<SVGMetadataElement>, TAttrsIn_163> = AttrsMerged<React.SVGProps<SVGMetadataElement>, TAttrsIn_163>>(attrs: Attrs<React.SVGProps<SVGMetadataElement>, TAttrsIn_163, TAttrsOut_163>) => StyledLiteral<Substitute<React.SVGProps<SVGMetadataElement>, TAttrsIn_163>>;
    };
    mpath: StyledLiteral<React.SVGProps<SVGElement>> & {
        attrs: <TAttrsIn_164 extends object = {}, TAttrsOut_164 extends AttrsMerged<React.SVGProps<SVGElement>, TAttrsIn_164> = AttrsMerged<React.SVGProps<SVGElement>, TAttrsIn_164>>(attrs: Attrs<React.SVGProps<SVGElement>, TAttrsIn_164, TAttrsOut_164>) => StyledLiteral<Substitute<React.SVGProps<SVGElement>, TAttrsIn_164>>;
    };
    path: StyledLiteral<React.SVGProps<SVGPathElement>> & {
        attrs: <TAttrsIn_165 extends object = {}, TAttrsOut_165 extends AttrsMerged<React.SVGProps<SVGPathElement>, TAttrsIn_165> = AttrsMerged<React.SVGProps<SVGPathElement>, TAttrsIn_165>>(attrs: Attrs<React.SVGProps<SVGPathElement>, TAttrsIn_165, TAttrsOut_165>) => StyledLiteral<Substitute<React.SVGProps<SVGPathElement>, TAttrsIn_165>>;
    };
    pattern: StyledLiteral<React.SVGProps<SVGPatternElement>> & {
        attrs: <TAttrsIn_166 extends object = {}, TAttrsOut_166 extends AttrsMerged<React.SVGProps<SVGPatternElement>, TAttrsIn_166> = AttrsMerged<React.SVGProps<SVGPatternElement>, TAttrsIn_166>>(attrs: Attrs<React.SVGProps<SVGPatternElement>, TAttrsIn_166, TAttrsOut_166>) => StyledLiteral<Substitute<React.SVGProps<SVGPatternElement>, TAttrsIn_166>>;
    };
    polygon: StyledLiteral<React.SVGProps<SVGPolygonElement>> & {
        attrs: <TAttrsIn_167 extends object = {}, TAttrsOut_167 extends AttrsMerged<React.SVGProps<SVGPolygonElement>, TAttrsIn_167> = AttrsMerged<React.SVGProps<SVGPolygonElement>, TAttrsIn_167>>(attrs: Attrs<React.SVGProps<SVGPolygonElement>, TAttrsIn_167, TAttrsOut_167>) => StyledLiteral<Substitute<React.SVGProps<SVGPolygonElement>, TAttrsIn_167>>;
    };
    polyline: StyledLiteral<React.SVGProps<SVGPolylineElement>> & {
        attrs: <TAttrsIn_168 extends object = {}, TAttrsOut_168 extends AttrsMerged<React.SVGProps<SVGPolylineElement>, TAttrsIn_168> = AttrsMerged<React.SVGProps<SVGPolylineElement>, TAttrsIn_168>>(attrs: Attrs<React.SVGProps<SVGPolylineElement>, TAttrsIn_168, TAttrsOut_168>) => StyledLiteral<Substitute<React.SVGProps<SVGPolylineElement>, TAttrsIn_168>>;
    };
    radialGradient: StyledLiteral<React.SVGProps<SVGRadialGradientElement>> & {
        attrs: <TAttrsIn_169 extends object = {}, TAttrsOut_169 extends AttrsMerged<React.SVGProps<SVGRadialGradientElement>, TAttrsIn_169> = AttrsMerged<React.SVGProps<SVGRadialGradientElement>, TAttrsIn_169>>(attrs: Attrs<React.SVGProps<SVGRadialGradientElement>, TAttrsIn_169, TAttrsOut_169>) => StyledLiteral<Substitute<React.SVGProps<SVGRadialGradientElement>, TAttrsIn_169>>;
    };
    rect: StyledLiteral<React.SVGProps<SVGRectElement>> & {
        attrs: <TAttrsIn_170 extends object = {}, TAttrsOut_170 extends AttrsMerged<React.SVGProps<SVGRectElement>, TAttrsIn_170> = AttrsMerged<React.SVGProps<SVGRectElement>, TAttrsIn_170>>(attrs: Attrs<React.SVGProps<SVGRectElement>, TAttrsIn_170, TAttrsOut_170>) => StyledLiteral<Substitute<React.SVGProps<SVGRectElement>, TAttrsIn_170>>;
    };
    stop: StyledLiteral<React.SVGProps<SVGStopElement>> & {
        attrs: <TAttrsIn_171 extends object = {}, TAttrsOut_171 extends AttrsMerged<React.SVGProps<SVGStopElement>, TAttrsIn_171> = AttrsMerged<React.SVGProps<SVGStopElement>, TAttrsIn_171>>(attrs: Attrs<React.SVGProps<SVGStopElement>, TAttrsIn_171, TAttrsOut_171>) => StyledLiteral<Substitute<React.SVGProps<SVGStopElement>, TAttrsIn_171>>;
    };
    switch: StyledLiteral<React.SVGProps<SVGSwitchElement>> & {
        attrs: <TAttrsIn_172 extends object = {}, TAttrsOut_172 extends AttrsMerged<React.SVGProps<SVGSwitchElement>, TAttrsIn_172> = AttrsMerged<React.SVGProps<SVGSwitchElement>, TAttrsIn_172>>(attrs: Attrs<React.SVGProps<SVGSwitchElement>, TAttrsIn_172, TAttrsOut_172>) => StyledLiteral<Substitute<React.SVGProps<SVGSwitchElement>, TAttrsIn_172>>;
    };
    text: StyledLiteral<React.SVGTextElementAttributes<SVGTextElement>> & {
        attrs: <TAttrsIn_173 extends object = {}, TAttrsOut_173 extends AttrsMerged<React.SVGTextElementAttributes<SVGTextElement>, TAttrsIn_173> = AttrsMerged<React.SVGTextElementAttributes<SVGTextElement>, TAttrsIn_173>>(attrs: Attrs<React.SVGTextElementAttributes<SVGTextElement>, TAttrsIn_173, TAttrsOut_173>) => StyledLiteral<Substitute<React.SVGTextElementAttributes<SVGTextElement>, TAttrsIn_173>>;
    };
    textPath: StyledLiteral<React.SVGProps<SVGTextPathElement>> & {
        attrs: <TAttrsIn_174 extends object = {}, TAttrsOut_174 extends AttrsMerged<React.SVGProps<SVGTextPathElement>, TAttrsIn_174> = AttrsMerged<React.SVGProps<SVGTextPathElement>, TAttrsIn_174>>(attrs: Attrs<React.SVGProps<SVGTextPathElement>, TAttrsIn_174, TAttrsOut_174>) => StyledLiteral<Substitute<React.SVGProps<SVGTextPathElement>, TAttrsIn_174>>;
    };
    tspan: StyledLiteral<React.SVGProps<SVGTSpanElement>> & {
        attrs: <TAttrsIn_175 extends object = {}, TAttrsOut_175 extends AttrsMerged<React.SVGProps<SVGTSpanElement>, TAttrsIn_175> = AttrsMerged<React.SVGProps<SVGTSpanElement>, TAttrsIn_175>>(attrs: Attrs<React.SVGProps<SVGTSpanElement>, TAttrsIn_175, TAttrsOut_175>) => StyledLiteral<Substitute<React.SVGProps<SVGTSpanElement>, TAttrsIn_175>>;
    };
    use: StyledLiteral<React.SVGProps<SVGUseElement>> & {
        attrs: <TAttrsIn_176 extends object = {}, TAttrsOut_176 extends AttrsMerged<React.SVGProps<SVGUseElement>, TAttrsIn_176> = AttrsMerged<React.SVGProps<SVGUseElement>, TAttrsIn_176>>(attrs: Attrs<React.SVGProps<SVGUseElement>, TAttrsIn_176, TAttrsOut_176>) => StyledLiteral<Substitute<React.SVGProps<SVGUseElement>, TAttrsIn_176>>;
    };
    view: StyledLiteral<React.SVGProps<SVGViewElement>> & {
        attrs: <TAttrsIn_177 extends object = {}, TAttrsOut_177 extends AttrsMerged<React.SVGProps<SVGViewElement>, TAttrsIn_177> = AttrsMerged<React.SVGProps<SVGViewElement>, TAttrsIn_177>>(attrs: Attrs<React.SVGProps<SVGViewElement>, TAttrsIn_177, TAttrsOut_177>) => StyledLiteral<Substitute<React.SVGProps<SVGViewElement>, TAttrsIn_177>>;
    };
};
type FastOmit<T extends object, U extends string | number | symbol> = {
    [K in keyof T as K extends U ? never : K]: T[K];
};
type Substitute<A extends object, B extends object> = FastOmit<A, keyof B> & B;

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

export { YakTheme, YakThemeProvider, __cssYak, atoms, css, keyframes, styled, useTheme };
