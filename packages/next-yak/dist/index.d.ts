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

type Merge<T, U> = Omit<Partial<T>, keyof U> & Omit<Partial<U>, keyof T> & Partial<U & T>;
type YakAttributes<T> = <TNew = {}>(attrs: ((props: TNew & T) => Partial<TNew & T>) | (T & TNew)) => YakTemplateString<Merge<T, TNew>>;
type YakTemplateString<T> = <TCSSProps extends Record<string, unknown> = {}>(styles: TemplateStringsArray, ...values: Array<CSSInterpolation<T & TCSSProps & {
    theme: YakTheme;
}>>) => FunctionComponent<TCSSProps & T>;
type YakWithAttributes<T> = {
    <TCSSProps extends Record<string, unknown> = {}>(styles: TemplateStringsArray, ...values: Array<CSSInterpolation<T & TCSSProps & {
        theme: YakTheme;
    }>>): FunctionComponent<TCSSProps & T>;
    attrs: YakAttributes<T>;
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
declare const styled: (<T>(Component: keyof JSX.IntrinsicElements | FunctionComponent<T>) => (<TCSSProps extends Record<string, unknown> = {}>(styles: TemplateStringsArray, ...values: CSSInterpolation<T & TCSSProps & {
    theme: YakTheme;
}>[]) => FunctionComponent<Merge<T & TCSSProps, unknown>>) & {
    attrs: <TNew>(attrs?: (T & TNew) | ((props: TNew & T) => Partial<TNew & T>) | undefined) => <TCSSProps_1 extends Record<string, unknown> = {}>(styles: TemplateStringsArray, ...values: CSSInterpolation<T & TCSSProps_1 & {
        theme: YakTheme;
    }>[]) => FunctionComponent<Merge<T & TCSSProps_1, TNew>>;
}) & {
    symbol: YakWithAttributes<React.SVGProps<SVGSymbolElement>>;
    object: YakWithAttributes<React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>>;
    style: YakWithAttributes<React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>>;
    search: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    big: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    link: YakWithAttributes<React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>>;
    small: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    sub: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    sup: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    a: YakWithAttributes<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>;
    abbr: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    address: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    area: YakWithAttributes<React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>>;
    article: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    aside: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    audio: YakWithAttributes<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>>;
    b: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    base: YakWithAttributes<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>>;
    bdi: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    bdo: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    blockquote: YakWithAttributes<React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>>;
    body: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>>;
    br: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>>;
    button: YakWithAttributes<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;
    canvas: YakWithAttributes<React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>>;
    caption: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    center: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    cite: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    code: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    col: YakWithAttributes<React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>>;
    colgroup: YakWithAttributes<React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>>;
    data: YakWithAttributes<React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>>;
    datalist: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>>;
    dd: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    del: YakWithAttributes<React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>>;
    details: YakWithAttributes<React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>>;
    dfn: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    dialog: YakWithAttributes<React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>>;
    div: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
    dl: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>>;
    dt: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    em: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    embed: YakWithAttributes<React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>>;
    fieldset: YakWithAttributes<React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>>;
    figcaption: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    figure: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    footer: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    form: YakWithAttributes<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>>;
    h1: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
    h2: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
    h3: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
    h4: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
    h5: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
    h6: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
    head: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>>;
    header: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    hgroup: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    hr: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>>;
    html: YakWithAttributes<React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>>;
    i: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    iframe: YakWithAttributes<React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>>;
    img: YakWithAttributes<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>>;
    input: YakWithAttributes<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>;
    ins: YakWithAttributes<React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>>;
    kbd: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    keygen: YakWithAttributes<React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>>;
    label: YakWithAttributes<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>>;
    legend: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>>;
    li: YakWithAttributes<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>>;
    main: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    map: YakWithAttributes<React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>>;
    mark: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    menu: YakWithAttributes<React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>>;
    menuitem: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    meta: YakWithAttributes<React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>>;
    meter: YakWithAttributes<React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>>;
    nav: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    noindex: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    noscript: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    ol: YakWithAttributes<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>>;
    optgroup: YakWithAttributes<React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>>;
    option: YakWithAttributes<React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>>;
    output: YakWithAttributes<React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>>;
    p: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>>;
    param: YakWithAttributes<React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>>;
    picture: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    pre: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>>;
    progress: YakWithAttributes<React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>>;
    q: YakWithAttributes<React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>>;
    rp: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    rt: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    ruby: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    s: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    samp: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    slot: YakWithAttributes<React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>>;
    script: YakWithAttributes<React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>>;
    section: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    select: YakWithAttributes<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>>;
    source: YakWithAttributes<React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>>;
    span: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
    strong: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    summary: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    table: YakWithAttributes<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>>;
    template: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>>;
    tbody: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>>;
    td: YakWithAttributes<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>>;
    textarea: YakWithAttributes<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>>;
    tfoot: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>>;
    th: YakWithAttributes<React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>>;
    thead: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>>;
    time: YakWithAttributes<React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>>;
    title: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>>;
    tr: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>>;
    track: YakWithAttributes<React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>>;
    u: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    ul: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>>;
    var: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    video: YakWithAttributes<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>>;
    wbr: YakWithAttributes<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    webview: YakWithAttributes<React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>>;
    svg: YakWithAttributes<React.SVGProps<SVGSVGElement>>;
    animate: YakWithAttributes<React.SVGProps<SVGElement>>;
    animateMotion: YakWithAttributes<React.SVGProps<SVGElement>>;
    animateTransform: YakWithAttributes<React.SVGProps<SVGElement>>;
    circle: YakWithAttributes<React.SVGProps<SVGCircleElement>>;
    clipPath: YakWithAttributes<React.SVGProps<SVGClipPathElement>>;
    defs: YakWithAttributes<React.SVGProps<SVGDefsElement>>;
    desc: YakWithAttributes<React.SVGProps<SVGDescElement>>;
    ellipse: YakWithAttributes<React.SVGProps<SVGEllipseElement>>;
    feBlend: YakWithAttributes<React.SVGProps<SVGFEBlendElement>>;
    feColorMatrix: YakWithAttributes<React.SVGProps<SVGFEColorMatrixElement>>;
    feComponentTransfer: YakWithAttributes<React.SVGProps<SVGFEComponentTransferElement>>;
    feComposite: YakWithAttributes<React.SVGProps<SVGFECompositeElement>>;
    feConvolveMatrix: YakWithAttributes<React.SVGProps<SVGFEConvolveMatrixElement>>;
    feDiffuseLighting: YakWithAttributes<React.SVGProps<SVGFEDiffuseLightingElement>>;
    feDisplacementMap: YakWithAttributes<React.SVGProps<SVGFEDisplacementMapElement>>;
    feDistantLight: YakWithAttributes<React.SVGProps<SVGFEDistantLightElement>>;
    feDropShadow: YakWithAttributes<React.SVGProps<SVGFEDropShadowElement>>;
    feFlood: YakWithAttributes<React.SVGProps<SVGFEFloodElement>>;
    feFuncA: YakWithAttributes<React.SVGProps<SVGFEFuncAElement>>;
    feFuncB: YakWithAttributes<React.SVGProps<SVGFEFuncBElement>>;
    feFuncG: YakWithAttributes<React.SVGProps<SVGFEFuncGElement>>;
    feFuncR: YakWithAttributes<React.SVGProps<SVGFEFuncRElement>>;
    feGaussianBlur: YakWithAttributes<React.SVGProps<SVGFEGaussianBlurElement>>;
    feImage: YakWithAttributes<React.SVGProps<SVGFEImageElement>>;
    feMerge: YakWithAttributes<React.SVGProps<SVGFEMergeElement>>;
    feMergeNode: YakWithAttributes<React.SVGProps<SVGFEMergeNodeElement>>;
    feMorphology: YakWithAttributes<React.SVGProps<SVGFEMorphologyElement>>;
    feOffset: YakWithAttributes<React.SVGProps<SVGFEOffsetElement>>;
    fePointLight: YakWithAttributes<React.SVGProps<SVGFEPointLightElement>>;
    feSpecularLighting: YakWithAttributes<React.SVGProps<SVGFESpecularLightingElement>>;
    feSpotLight: YakWithAttributes<React.SVGProps<SVGFESpotLightElement>>;
    feTile: YakWithAttributes<React.SVGProps<SVGFETileElement>>;
    feTurbulence: YakWithAttributes<React.SVGProps<SVGFETurbulenceElement>>;
    filter: YakWithAttributes<React.SVGProps<SVGFilterElement>>;
    foreignObject: YakWithAttributes<React.SVGProps<SVGForeignObjectElement>>;
    g: YakWithAttributes<React.SVGProps<SVGGElement>>;
    image: YakWithAttributes<React.SVGProps<SVGImageElement>>;
    line: YakWithAttributes<React.SVGLineElementAttributes<SVGLineElement>>;
    linearGradient: YakWithAttributes<React.SVGProps<SVGLinearGradientElement>>;
    marker: YakWithAttributes<React.SVGProps<SVGMarkerElement>>;
    mask: YakWithAttributes<React.SVGProps<SVGMaskElement>>;
    metadata: YakWithAttributes<React.SVGProps<SVGMetadataElement>>;
    mpath: YakWithAttributes<React.SVGProps<SVGElement>>;
    path: YakWithAttributes<React.SVGProps<SVGPathElement>>;
    pattern: YakWithAttributes<React.SVGProps<SVGPatternElement>>;
    polygon: YakWithAttributes<React.SVGProps<SVGPolygonElement>>;
    polyline: YakWithAttributes<React.SVGProps<SVGPolylineElement>>;
    radialGradient: YakWithAttributes<React.SVGProps<SVGRadialGradientElement>>;
    rect: YakWithAttributes<React.SVGProps<SVGRectElement>>;
    stop: YakWithAttributes<React.SVGProps<SVGStopElement>>;
    switch: YakWithAttributes<React.SVGProps<SVGSwitchElement>>;
    text: YakWithAttributes<React.SVGTextElementAttributes<SVGTextElement>>;
    textPath: YakWithAttributes<React.SVGProps<SVGTextPathElement>>;
    tspan: YakWithAttributes<React.SVGProps<SVGTSpanElement>>;
    use: YakWithAttributes<React.SVGProps<SVGUseElement>>;
    view: YakWithAttributes<React.SVGProps<SVGViewElement>>;
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
