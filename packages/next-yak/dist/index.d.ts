import React, { FunctionComponent } from 'react';
import { DefaultTheme } from 'next-yak/context';
export { YakThemeProvider, useTheme } from 'next-yak/context';

type ComponentStyles<TProps extends Record<string, unknown>> = (props: TProps) => {
    className: string;
    style?: {
        [key: string]: string;
    };
};
type CSSInterpolation<TProps extends Record<string, unknown>> = string | number | undefined | null | false | ComponentStyles<TProps> | ((props: TProps) => CSSInterpolation<TProps>);
type CSSFunction = <TProps extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps>[]) => ComponentStyles<TProps>;
declare const css: CSSFunction;

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
declare const styled: (<TBaseProps extends {}>(Component: FunctionComponent<TBaseProps>) => <TProps extends {}>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps & {
    theme: DefaultTheme;
}>[]) => FunctionComponent<TBaseProps & TProps>) & {
    symbol: <TProps_1 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_1 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGSymbolElement> & TProps_1>;
    object: <TProps_2 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_2 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLObjectElement> & React.ObjectHTMLAttributes<HTMLObjectElement> & TProps_2>;
    style: <TProps_3 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_3 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLStyleElement> & React.StyleHTMLAttributes<HTMLStyleElement> & TProps_3>;
    search: <TProps_4 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_4 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_4>;
    big: <TProps_5 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_5 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_5>;
    link: <TProps_6 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_6 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLLinkElement> & React.LinkHTMLAttributes<HTMLLinkElement> & TProps_6>;
    small: <TProps_7 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_7 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_7>;
    sub: <TProps_8 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_8 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_8>;
    sup: <TProps_9 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_9 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_9>;
    a: <TProps_10 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_10 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & TProps_10>;
    abbr: <TProps_11 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_11 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_11>;
    address: <TProps_12 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_12 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_12>;
    area: <TProps_13 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_13 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLAreaElement> & React.AreaHTMLAttributes<HTMLAreaElement> & TProps_13>;
    article: <TProps_14 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_14 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_14>;
    aside: <TProps_15 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_15 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_15>;
    audio: <TProps_16 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_16 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLAudioElement> & React.AudioHTMLAttributes<HTMLAudioElement> & TProps_16>;
    b: <TProps_17 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_17 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_17>;
    base: <TProps_18 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_18 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLBaseElement> & React.BaseHTMLAttributes<HTMLBaseElement> & TProps_18>;
    bdi: <TProps_19 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_19 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_19>;
    bdo: <TProps_20 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_20 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_20>;
    blockquote: <TProps_21 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_21 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLQuoteElement> & React.BlockquoteHTMLAttributes<HTMLQuoteElement> & TProps_21>;
    body: <TProps_22 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_22 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLBodyElement> & React.HTMLAttributes<HTMLBodyElement> & TProps_22>;
    br: <TProps_23 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_23 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLBRElement> & React.HTMLAttributes<HTMLBRElement> & TProps_23>;
    button: <TProps_24 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_24 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & TProps_24>;
    canvas: <TProps_25 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_25 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement> & TProps_25>;
    caption: <TProps_26 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_26 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_26>;
    center: <TProps_27 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_27 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_27>;
    cite: <TProps_28 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_28 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_28>;
    code: <TProps_29 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_29 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_29>;
    col: <TProps_30 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_30 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLTableColElement> & React.ColHTMLAttributes<HTMLTableColElement> & TProps_30>;
    colgroup: <TProps_31 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_31 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLTableColElement> & React.ColgroupHTMLAttributes<HTMLTableColElement> & TProps_31>;
    data: <TProps_32 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_32 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLDataElement> & React.DataHTMLAttributes<HTMLDataElement> & TProps_32>;
    datalist: <TProps_33 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_33 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLDataListElement> & React.HTMLAttributes<HTMLDataListElement> & TProps_33>;
    dd: <TProps_34 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_34 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_34>;
    del: <TProps_35 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_35 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLModElement> & React.DelHTMLAttributes<HTMLModElement> & TProps_35>;
    details: <TProps_36 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_36 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLDetailsElement> & React.DetailsHTMLAttributes<HTMLDetailsElement> & TProps_36>;
    dfn: <TProps_37 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_37 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_37>;
    dialog: <TProps_38 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_38 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLDialogElement> & React.DialogHTMLAttributes<HTMLDialogElement> & TProps_38>;
    div: <TProps_39 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_39 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & TProps_39>;
    dl: <TProps_40 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_40 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLDListElement> & React.HTMLAttributes<HTMLDListElement> & TProps_40>;
    dt: <TProps_41 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_41 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_41>;
    em: <TProps_42 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_42 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_42>;
    embed: <TProps_43 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_43 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLEmbedElement> & React.EmbedHTMLAttributes<HTMLEmbedElement> & TProps_43>;
    fieldset: <TProps_44 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_44 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLFieldSetElement> & React.FieldsetHTMLAttributes<HTMLFieldSetElement> & TProps_44>;
    figcaption: <TProps_45 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_45 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_45>;
    figure: <TProps_46 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_46 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_46>;
    footer: <TProps_47 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_47 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_47>;
    form: <TProps_48 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_48 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLFormElement> & React.FormHTMLAttributes<HTMLFormElement> & TProps_48>;
    h1: <TProps_49 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_49 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_49>;
    h2: <TProps_50 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_50 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_50>;
    h3: <TProps_51 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_51 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_51>;
    h4: <TProps_52 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_52 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_52>;
    h5: <TProps_53 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_53 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_53>;
    h6: <TProps_54 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_54 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_54>;
    head: <TProps_55 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_55 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadElement> & React.HTMLAttributes<HTMLHeadElement> & TProps_55>;
    header: <TProps_56 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_56 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_56>;
    hgroup: <TProps_57 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_57 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_57>;
    hr: <TProps_58 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_58 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLHRElement> & React.HTMLAttributes<HTMLHRElement> & TProps_58>;
    html: <TProps_59 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_59 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLHtmlElement> & React.HtmlHTMLAttributes<HTMLHtmlElement> & TProps_59>;
    i: <TProps_60 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_60 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_60>;
    iframe: <TProps_61 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_61 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLIFrameElement> & React.IframeHTMLAttributes<HTMLIFrameElement> & TProps_61>;
    img: <TProps_62 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_62 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement> & TProps_62>;
    input: <TProps_63 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_63 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & TProps_63>;
    ins: <TProps_64 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_64 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLModElement> & React.InsHTMLAttributes<HTMLModElement> & TProps_64>;
    kbd: <TProps_65 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_65 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_65>;
    keygen: <TProps_66 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_66 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.KeygenHTMLAttributes<HTMLElement> & TProps_66>;
    label: <TProps_67 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_67 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLLabelElement> & React.LabelHTMLAttributes<HTMLLabelElement> & TProps_67>;
    legend: <TProps_68 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_68 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLLegendElement> & React.HTMLAttributes<HTMLLegendElement> & TProps_68>;
    li: <TProps_69 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_69 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLLIElement> & React.LiHTMLAttributes<HTMLLIElement> & TProps_69>;
    main: <TProps_70 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_70 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_70>;
    map: <TProps_71 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_71 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLMapElement> & React.MapHTMLAttributes<HTMLMapElement> & TProps_71>;
    mark: <TProps_72 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_72 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_72>;
    menu: <TProps_73 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_73 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.MenuHTMLAttributes<HTMLElement> & TProps_73>;
    menuitem: <TProps_74 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_74 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_74>;
    meta: <TProps_75 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_75 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLMetaElement> & React.MetaHTMLAttributes<HTMLMetaElement> & TProps_75>;
    meter: <TProps_76 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_76 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLMeterElement> & React.MeterHTMLAttributes<HTMLMeterElement> & TProps_76>;
    nav: <TProps_77 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_77 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_77>;
    noindex: <TProps_78 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_78 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_78>;
    noscript: <TProps_79 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_79 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_79>;
    ol: <TProps_80 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_80 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLOListElement> & React.OlHTMLAttributes<HTMLOListElement> & TProps_80>;
    optgroup: <TProps_81 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_81 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLOptGroupElement> & React.OptgroupHTMLAttributes<HTMLOptGroupElement> & TProps_81>;
    option: <TProps_82 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_82 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLOptionElement> & React.OptionHTMLAttributes<HTMLOptionElement> & TProps_82>;
    output: <TProps_83 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_83 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLOutputElement> & React.OutputHTMLAttributes<HTMLOutputElement> & TProps_83>;
    p: <TProps_84 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_84 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement> & TProps_84>;
    param: <TProps_85 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_85 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLParamElement> & React.ParamHTMLAttributes<HTMLParamElement> & TProps_85>;
    picture: <TProps_86 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_86 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_86>;
    pre: <TProps_87 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_87 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLPreElement> & React.HTMLAttributes<HTMLPreElement> & TProps_87>;
    progress: <TProps_88 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_88 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLProgressElement> & React.ProgressHTMLAttributes<HTMLProgressElement> & TProps_88>;
    q: <TProps_89 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_89 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLQuoteElement> & React.QuoteHTMLAttributes<HTMLQuoteElement> & TProps_89>;
    rp: <TProps_90 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_90 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_90>;
    rt: <TProps_91 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_91 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_91>;
    ruby: <TProps_92 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_92 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_92>;
    s: <TProps_93 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_93 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_93>;
    samp: <TProps_94 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_94 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_94>;
    slot: <TProps_95 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_95 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLSlotElement> & React.SlotHTMLAttributes<HTMLSlotElement> & TProps_95>;
    script: <TProps_96 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_96 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLScriptElement> & React.ScriptHTMLAttributes<HTMLScriptElement> & TProps_96>;
    section: <TProps_97 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_97 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_97>;
    select: <TProps_98 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_98 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLSelectElement> & React.SelectHTMLAttributes<HTMLSelectElement> & TProps_98>;
    source: <TProps_99 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_99 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLSourceElement> & React.SourceHTMLAttributes<HTMLSourceElement> & TProps_99>;
    span: <TProps_100 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_100 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement> & TProps_100>;
    strong: <TProps_101 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_101 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_101>;
    summary: <TProps_102 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_102 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_102>;
    table: <TProps_103 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_103 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLTableElement> & React.TableHTMLAttributes<HTMLTableElement> & TProps_103>;
    template: <TProps_104 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_104 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLTemplateElement> & React.HTMLAttributes<HTMLTemplateElement> & TProps_104>;
    tbody: <TProps_105 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_105 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement> & TProps_105>;
    td: <TProps_106 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_106 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLTableDataCellElement> & React.TdHTMLAttributes<HTMLTableDataCellElement> & TProps_106>;
    textarea: <TProps_107 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_107 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLTextAreaElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement> & TProps_107>;
    tfoot: <TProps_108 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_108 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement> & TProps_108>;
    th: <TProps_109 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_109 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLTableHeaderCellElement> & React.ThHTMLAttributes<HTMLTableHeaderCellElement> & TProps_109>;
    thead: <TProps_110 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_110 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement> & TProps_110>;
    time: <TProps_111 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_111 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLTimeElement> & React.TimeHTMLAttributes<HTMLTimeElement> & TProps_111>;
    title: <TProps_112 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_112 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLTitleElement> & React.HTMLAttributes<HTMLTitleElement> & TProps_112>;
    tr: <TProps_113 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_113 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement> & TProps_113>;
    track: <TProps_114 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_114 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLTrackElement> & React.TrackHTMLAttributes<HTMLTrackElement> & TProps_114>;
    u: <TProps_115 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_115 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_115>;
    ul: <TProps_116 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_116 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLUListElement> & React.HTMLAttributes<HTMLUListElement> & TProps_116>;
    var: <TProps_117 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_117 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_117>;
    video: <TProps_118 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_118 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLVideoElement> & React.VideoHTMLAttributes<HTMLVideoElement> & TProps_118>;
    wbr: <TProps_119 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_119 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_119>;
    webview: <TProps_120 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_120 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.ClassAttributes<HTMLWebViewElement> & React.WebViewHTMLAttributes<HTMLWebViewElement> & TProps_120>;
    svg: <TProps_121 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_121 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGSVGElement> & TProps_121>;
    animate: <TProps_122 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_122 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGElement> & TProps_122>;
    animateMotion: <TProps_123 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_123 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGElement> & TProps_123>;
    animateTransform: <TProps_124 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_124 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGElement> & TProps_124>;
    circle: <TProps_125 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_125 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGCircleElement> & TProps_125>;
    clipPath: <TProps_126 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_126 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGClipPathElement> & TProps_126>;
    defs: <TProps_127 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_127 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGDefsElement> & TProps_127>;
    desc: <TProps_128 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_128 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGDescElement> & TProps_128>;
    ellipse: <TProps_129 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_129 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGEllipseElement> & TProps_129>;
    feBlend: <TProps_130 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_130 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFEBlendElement> & TProps_130>;
    feColorMatrix: <TProps_131 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_131 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFEColorMatrixElement> & TProps_131>;
    feComponentTransfer: <TProps_132 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_132 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFEComponentTransferElement> & TProps_132>;
    feComposite: <TProps_133 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_133 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFECompositeElement> & TProps_133>;
    feConvolveMatrix: <TProps_134 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_134 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFEConvolveMatrixElement> & TProps_134>;
    feDiffuseLighting: <TProps_135 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_135 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFEDiffuseLightingElement> & TProps_135>;
    feDisplacementMap: <TProps_136 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_136 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFEDisplacementMapElement> & TProps_136>;
    feDistantLight: <TProps_137 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_137 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFEDistantLightElement> & TProps_137>;
    feDropShadow: <TProps_138 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_138 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFEDropShadowElement> & TProps_138>;
    feFlood: <TProps_139 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_139 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFEFloodElement> & TProps_139>;
    feFuncA: <TProps_140 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_140 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFEFuncAElement> & TProps_140>;
    feFuncB: <TProps_141 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_141 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFEFuncBElement> & TProps_141>;
    feFuncG: <TProps_142 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_142 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFEFuncGElement> & TProps_142>;
    feFuncR: <TProps_143 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_143 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFEFuncRElement> & TProps_143>;
    feGaussianBlur: <TProps_144 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_144 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFEGaussianBlurElement> & TProps_144>;
    feImage: <TProps_145 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_145 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFEImageElement> & TProps_145>;
    feMerge: <TProps_146 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_146 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFEMergeElement> & TProps_146>;
    feMergeNode: <TProps_147 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_147 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFEMergeNodeElement> & TProps_147>;
    feMorphology: <TProps_148 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_148 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFEMorphologyElement> & TProps_148>;
    feOffset: <TProps_149 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_149 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFEOffsetElement> & TProps_149>;
    fePointLight: <TProps_150 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_150 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFEPointLightElement> & TProps_150>;
    feSpecularLighting: <TProps_151 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_151 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFESpecularLightingElement> & TProps_151>;
    feSpotLight: <TProps_152 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_152 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFESpotLightElement> & TProps_152>;
    feTile: <TProps_153 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_153 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFETileElement> & TProps_153>;
    feTurbulence: <TProps_154 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_154 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFETurbulenceElement> & TProps_154>;
    filter: <TProps_155 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_155 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGFilterElement> & TProps_155>;
    foreignObject: <TProps_156 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_156 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGForeignObjectElement> & TProps_156>;
    g: <TProps_157 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_157 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGGElement> & TProps_157>;
    image: <TProps_158 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_158 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGImageElement> & TProps_158>;
    line: <TProps_159 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_159 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGLineElementAttributes<SVGLineElement> & TProps_159>;
    linearGradient: <TProps_160 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_160 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGLinearGradientElement> & TProps_160>;
    marker: <TProps_161 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_161 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGMarkerElement> & TProps_161>;
    mask: <TProps_162 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_162 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGMaskElement> & TProps_162>;
    metadata: <TProps_163 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_163 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGMetadataElement> & TProps_163>;
    mpath: <TProps_164 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_164 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGElement> & TProps_164>;
    path: <TProps_165 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_165 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGPathElement> & TProps_165>;
    pattern: <TProps_166 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_166 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGPatternElement> & TProps_166>;
    polygon: <TProps_167 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_167 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGPolygonElement> & TProps_167>;
    polyline: <TProps_168 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_168 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGPolylineElement> & TProps_168>;
    radialGradient: <TProps_169 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_169 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGRadialGradientElement> & TProps_169>;
    rect: <TProps_170 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_170 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGRectElement> & TProps_170>;
    stop: <TProps_171 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_171 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGStopElement> & TProps_171>;
    switch: <TProps_172 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_172 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGSwitchElement> & TProps_172>;
    text: <TProps_173 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_173 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGTextElementAttributes<SVGTextElement> & TProps_173>;
    textPath: <TProps_174 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_174 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGTextPathElement> & TProps_174>;
    tspan: <TProps_175 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_175 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGTSpanElement> & TProps_175>;
    use: <TProps_176 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_176 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGUseElement> & TProps_176>;
    view: <TProps_177 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_177 & {
        theme: DefaultTheme;
    }>[]) => FunctionComponent<React.SVGProps<SVGViewElement> & TProps_177>;
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

export { atoms, css, keyframes, styled };
