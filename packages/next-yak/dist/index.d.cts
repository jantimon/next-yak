import React, { ReactNode, FunctionComponent } from 'react';

type ComponentStyles<TProps extends {}> = (props: TProps) => {
    className: string;
    style?: {
        [key: string]: string;
    };
};
type CSSInterpolation<TProps extends {}> = string | number | undefined | null | false | ComponentStyles<TProps> | ((props: TProps) => CSSInterpolation<TProps>);
type CSSFunction = <TProps extends {}>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps & {
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

type PropsOf<TComponent extends FunctionComponent<any>> = TComponent extends FunctionComponent<infer TProps> ? TProps : never;
type StyledLiteral<TBaseProps extends {}> = <TProps extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TBaseProps & TProps & {
    theme: YakTheme;
}>[]) => FunctionComponent<TBaseProps & TProps>;
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
declare const styled: (<TComponent extends FunctionComponent<any> | keyof JSX.IntrinsicElements>(Component: TComponent) => StyledLiteral<TComponent extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[TComponent] : TComponent extends FunctionComponent<{}> ? PropsOf<TComponent> : never>) & {
    symbol: StyledLiteral<React.SVGProps<SVGSymbolElement>>;
    object: StyledLiteral<React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>>;
    style: StyledLiteral<React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>>;
    search: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    big: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    link: StyledLiteral<React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>>;
    small: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    sub: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    sup: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    a: StyledLiteral<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>;
    abbr: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    address: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    area: StyledLiteral<React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>>;
    article: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    aside: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    audio: StyledLiteral<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>>;
    b: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    base: StyledLiteral<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>>;
    bdi: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    bdo: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    blockquote: StyledLiteral<React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>>;
    body: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>>;
    br: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>>;
    button: StyledLiteral<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;
    canvas: StyledLiteral<React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>>;
    caption: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    center: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    cite: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    code: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    col: StyledLiteral<React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>>;
    colgroup: StyledLiteral<React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>>;
    data: StyledLiteral<React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>>;
    datalist: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>>;
    dd: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    del: StyledLiteral<React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>>;
    details: StyledLiteral<React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>>;
    dfn: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    dialog: StyledLiteral<React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>>;
    div: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
    dl: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>>;
    dt: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    em: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    embed: StyledLiteral<React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>>;
    fieldset: StyledLiteral<React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>>;
    figcaption: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    figure: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    footer: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    form: StyledLiteral<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>>;
    h1: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
    h2: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
    h3: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
    h4: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
    h5: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
    h6: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>>;
    head: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>>;
    header: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    hgroup: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    hr: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>>;
    html: StyledLiteral<React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>>;
    i: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    iframe: StyledLiteral<React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>>;
    img: StyledLiteral<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>>;
    input: StyledLiteral<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>;
    ins: StyledLiteral<React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>>;
    kbd: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    keygen: StyledLiteral<React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>>;
    label: StyledLiteral<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>>;
    legend: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>>;
    li: StyledLiteral<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>>;
    main: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    map: StyledLiteral<React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>>;
    mark: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    menu: StyledLiteral<React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>>;
    menuitem: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    meta: StyledLiteral<React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>>;
    meter: StyledLiteral<React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>>;
    nav: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    noindex: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    noscript: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    ol: StyledLiteral<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>>;
    optgroup: StyledLiteral<React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>>;
    option: StyledLiteral<React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>>;
    output: StyledLiteral<React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>>;
    p: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>>;
    param: StyledLiteral<React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>>;
    picture: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    pre: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>>;
    progress: StyledLiteral<React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>>;
    q: StyledLiteral<React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>>;
    rp: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    rt: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    ruby: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    s: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    samp: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    slot: StyledLiteral<React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>>;
    script: StyledLiteral<React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>>;
    section: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    select: StyledLiteral<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>>;
    source: StyledLiteral<React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>>;
    span: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
    strong: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    summary: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    table: StyledLiteral<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>>;
    template: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>>;
    tbody: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>>;
    td: StyledLiteral<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>>;
    textarea: StyledLiteral<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>>;
    tfoot: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>>;
    th: StyledLiteral<React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>>;
    thead: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>>;
    time: StyledLiteral<React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>>;
    title: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>>;
    tr: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>>;
    track: StyledLiteral<React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>>;
    u: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    ul: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>>;
    var: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    video: StyledLiteral<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>>;
    wbr: StyledLiteral<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
    webview: StyledLiteral<React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>>;
    svg: StyledLiteral<React.SVGProps<SVGSVGElement>>;
    animate: StyledLiteral<React.SVGProps<SVGElement>>;
    animateMotion: StyledLiteral<React.SVGProps<SVGElement>>;
    animateTransform: StyledLiteral<React.SVGProps<SVGElement>>;
    circle: StyledLiteral<React.SVGProps<SVGCircleElement>>;
    clipPath: StyledLiteral<React.SVGProps<SVGClipPathElement>>;
    defs: StyledLiteral<React.SVGProps<SVGDefsElement>>;
    desc: StyledLiteral<React.SVGProps<SVGDescElement>>;
    ellipse: StyledLiteral<React.SVGProps<SVGEllipseElement>>;
    feBlend: StyledLiteral<React.SVGProps<SVGFEBlendElement>>;
    feColorMatrix: StyledLiteral<React.SVGProps<SVGFEColorMatrixElement>>;
    feComponentTransfer: StyledLiteral<React.SVGProps<SVGFEComponentTransferElement>>;
    feComposite: StyledLiteral<React.SVGProps<SVGFECompositeElement>>;
    feConvolveMatrix: StyledLiteral<React.SVGProps<SVGFEConvolveMatrixElement>>;
    feDiffuseLighting: StyledLiteral<React.SVGProps<SVGFEDiffuseLightingElement>>;
    feDisplacementMap: StyledLiteral<React.SVGProps<SVGFEDisplacementMapElement>>;
    feDistantLight: StyledLiteral<React.SVGProps<SVGFEDistantLightElement>>;
    feDropShadow: StyledLiteral<React.SVGProps<SVGFEDropShadowElement>>;
    feFlood: StyledLiteral<React.SVGProps<SVGFEFloodElement>>;
    feFuncA: StyledLiteral<React.SVGProps<SVGFEFuncAElement>>;
    feFuncB: StyledLiteral<React.SVGProps<SVGFEFuncBElement>>;
    feFuncG: StyledLiteral<React.SVGProps<SVGFEFuncGElement>>;
    feFuncR: StyledLiteral<React.SVGProps<SVGFEFuncRElement>>;
    feGaussianBlur: StyledLiteral<React.SVGProps<SVGFEGaussianBlurElement>>;
    feImage: StyledLiteral<React.SVGProps<SVGFEImageElement>>;
    feMerge: StyledLiteral<React.SVGProps<SVGFEMergeElement>>;
    feMergeNode: StyledLiteral<React.SVGProps<SVGFEMergeNodeElement>>;
    feMorphology: StyledLiteral<React.SVGProps<SVGFEMorphologyElement>>;
    feOffset: StyledLiteral<React.SVGProps<SVGFEOffsetElement>>;
    fePointLight: StyledLiteral<React.SVGProps<SVGFEPointLightElement>>;
    feSpecularLighting: StyledLiteral<React.SVGProps<SVGFESpecularLightingElement>>;
    feSpotLight: StyledLiteral<React.SVGProps<SVGFESpotLightElement>>;
    feTile: StyledLiteral<React.SVGProps<SVGFETileElement>>;
    feTurbulence: StyledLiteral<React.SVGProps<SVGFETurbulenceElement>>;
    filter: StyledLiteral<React.SVGProps<SVGFilterElement>>;
    foreignObject: StyledLiteral<React.SVGProps<SVGForeignObjectElement>>;
    g: StyledLiteral<React.SVGProps<SVGGElement>>;
    image: StyledLiteral<React.SVGProps<SVGImageElement>>;
    line: StyledLiteral<React.SVGLineElementAttributes<SVGLineElement>>;
    linearGradient: StyledLiteral<React.SVGProps<SVGLinearGradientElement>>;
    marker: StyledLiteral<React.SVGProps<SVGMarkerElement>>;
    mask: StyledLiteral<React.SVGProps<SVGMaskElement>>;
    metadata: StyledLiteral<React.SVGProps<SVGMetadataElement>>;
    mpath: StyledLiteral<React.SVGProps<SVGElement>>;
    path: StyledLiteral<React.SVGProps<SVGPathElement>>;
    pattern: StyledLiteral<React.SVGProps<SVGPatternElement>>;
    polygon: StyledLiteral<React.SVGProps<SVGPolygonElement>>;
    polyline: StyledLiteral<React.SVGProps<SVGPolylineElement>>;
    radialGradient: StyledLiteral<React.SVGProps<SVGRadialGradientElement>>;
    rect: StyledLiteral<React.SVGProps<SVGRectElement>>;
    stop: StyledLiteral<React.SVGProps<SVGStopElement>>;
    switch: StyledLiteral<React.SVGProps<SVGSwitchElement>>;
    text: StyledLiteral<React.SVGTextElementAttributes<SVGTextElement>>;
    textPath: StyledLiteral<React.SVGProps<SVGTextPathElement>>;
    tspan: StyledLiteral<React.SVGProps<SVGTSpanElement>>;
    use: StyledLiteral<React.SVGProps<SVGUseElement>>;
    view: StyledLiteral<React.SVGProps<SVGViewElement>>;
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
