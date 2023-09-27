import { FunctionComponent } from "react";
import { CSSInterpolation } from "./cssLiteral";
import React from "react";
type StyledComponent = <TBaseProps extends {}>(Component: FunctionComponent<TBaseProps>) => <TProps extends {}>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps>[]) => FunctionComponent<TBaseProps & TProps>;
export declare const styled: StyledComponent & {
    symbol: {
        <TProps extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps>[]): FunctionComponent<React.SVGProps<SVGSymbolElement> & TProps>;
        attrs: <TProps_1 extends Record<string, unknown>>(callback: (props: TProps_1 & React.SVGProps<SVGSymbolElement>) => Record<string, unknown> & React.SVGProps<SVGSymbolElement>) => <TResultProps extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps>[]) => FunctionComponent<React.SVGProps<SVGSymbolElement> & TProps_1>;
    };
    object: {
        <TProps_2 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_2>[]): FunctionComponent<React.ClassAttributes<HTMLObjectElement> & React.ObjectHTMLAttributes<HTMLObjectElement> & TProps_2>;
        attrs: <TProps_3 extends Record<string, unknown>>(callback: (props: TProps_3 & React.ClassAttributes<HTMLObjectElement> & React.ObjectHTMLAttributes<HTMLObjectElement>) => Record<string, unknown> & React.ClassAttributes<HTMLObjectElement> & React.ObjectHTMLAttributes<HTMLObjectElement>) => <TResultProps_1 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_1>[]) => FunctionComponent<React.ClassAttributes<HTMLObjectElement> & React.ObjectHTMLAttributes<HTMLObjectElement> & TProps_3>;
    };
    style: {
        <TProps_4 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_4>[]): FunctionComponent<React.ClassAttributes<HTMLStyleElement> & React.StyleHTMLAttributes<HTMLStyleElement> & TProps_4>;
        attrs: <TProps_5 extends Record<string, unknown>>(callback: (props: TProps_5 & React.ClassAttributes<HTMLStyleElement> & React.StyleHTMLAttributes<HTMLStyleElement>) => Record<string, unknown> & React.ClassAttributes<HTMLStyleElement> & React.StyleHTMLAttributes<HTMLStyleElement>) => <TResultProps_2 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_2>[]) => FunctionComponent<React.ClassAttributes<HTMLStyleElement> & React.StyleHTMLAttributes<HTMLStyleElement> & TProps_5>;
    };
    a: {
        <TProps_6 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_6>[]): FunctionComponent<React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & TProps_6>;
        attrs: <TProps_7 extends Record<string, unknown>>(callback: (props: TProps_7 & React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>) => Record<string, unknown> & React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>) => <TResultProps_3 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_3>[]) => FunctionComponent<React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & TProps_7>;
    };
    abbr: {
        <TProps_8 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_8>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_8>;
        attrs: <TProps_9 extends Record<string, unknown>>(callback: (props: TProps_9 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_4 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_4>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_9>;
    };
    address: {
        <TProps_10 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_10>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_10>;
        attrs: <TProps_11 extends Record<string, unknown>>(callback: (props: TProps_11 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_5 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_5>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_11>;
    };
    area: {
        <TProps_12 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_12>[]): FunctionComponent<React.ClassAttributes<HTMLAreaElement> & React.AreaHTMLAttributes<HTMLAreaElement> & TProps_12>;
        attrs: <TProps_13 extends Record<string, unknown>>(callback: (props: TProps_13 & React.ClassAttributes<HTMLAreaElement> & React.AreaHTMLAttributes<HTMLAreaElement>) => Record<string, unknown> & React.ClassAttributes<HTMLAreaElement> & React.AreaHTMLAttributes<HTMLAreaElement>) => <TResultProps_6 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_6>[]) => FunctionComponent<React.ClassAttributes<HTMLAreaElement> & React.AreaHTMLAttributes<HTMLAreaElement> & TProps_13>;
    };
    article: {
        <TProps_14 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_14>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_14>;
        attrs: <TProps_15 extends Record<string, unknown>>(callback: (props: TProps_15 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_7 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_7>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_15>;
    };
    aside: {
        <TProps_16 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_16>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_16>;
        attrs: <TProps_17 extends Record<string, unknown>>(callback: (props: TProps_17 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_8 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_8>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_17>;
    };
    audio: {
        <TProps_18 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_18>[]): FunctionComponent<React.ClassAttributes<HTMLAudioElement> & React.AudioHTMLAttributes<HTMLAudioElement> & TProps_18>;
        attrs: <TProps_19 extends Record<string, unknown>>(callback: (props: TProps_19 & React.ClassAttributes<HTMLAudioElement> & React.AudioHTMLAttributes<HTMLAudioElement>) => Record<string, unknown> & React.ClassAttributes<HTMLAudioElement> & React.AudioHTMLAttributes<HTMLAudioElement>) => <TResultProps_9 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_9>[]) => FunctionComponent<React.ClassAttributes<HTMLAudioElement> & React.AudioHTMLAttributes<HTMLAudioElement> & TProps_19>;
    };
    b: {
        <TProps_20 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_20>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_20>;
        attrs: <TProps_21 extends Record<string, unknown>>(callback: (props: TProps_21 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_10 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_10>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_21>;
    };
    base: {
        <TProps_22 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_22>[]): FunctionComponent<React.ClassAttributes<HTMLBaseElement> & React.BaseHTMLAttributes<HTMLBaseElement> & TProps_22>;
        attrs: <TProps_23 extends Record<string, unknown>>(callback: (props: TProps_23 & React.ClassAttributes<HTMLBaseElement> & React.BaseHTMLAttributes<HTMLBaseElement>) => Record<string, unknown> & React.ClassAttributes<HTMLBaseElement> & React.BaseHTMLAttributes<HTMLBaseElement>) => <TResultProps_11 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_11>[]) => FunctionComponent<React.ClassAttributes<HTMLBaseElement> & React.BaseHTMLAttributes<HTMLBaseElement> & TProps_23>;
    };
    bdi: {
        <TProps_24 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_24>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_24>;
        attrs: <TProps_25 extends Record<string, unknown>>(callback: (props: TProps_25 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_12 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_12>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_25>;
    };
    bdo: {
        <TProps_26 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_26>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_26>;
        attrs: <TProps_27 extends Record<string, unknown>>(callback: (props: TProps_27 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_13 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_13>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_27>;
    };
    big: {
        <TProps_28 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_28>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_28>;
        attrs: <TProps_29 extends Record<string, unknown>>(callback: (props: TProps_29 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_14 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_14>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_29>;
    };
    blockquote: {
        <TProps_30 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_30>[]): FunctionComponent<React.ClassAttributes<HTMLQuoteElement> & React.BlockquoteHTMLAttributes<HTMLQuoteElement> & TProps_30>;
        attrs: <TProps_31 extends Record<string, unknown>>(callback: (props: TProps_31 & React.ClassAttributes<HTMLQuoteElement> & React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => Record<string, unknown> & React.ClassAttributes<HTMLQuoteElement> & React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => <TResultProps_15 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_15>[]) => FunctionComponent<React.ClassAttributes<HTMLQuoteElement> & React.BlockquoteHTMLAttributes<HTMLQuoteElement> & TProps_31>;
    };
    body: {
        <TProps_32 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_32>[]): FunctionComponent<React.ClassAttributes<HTMLBodyElement> & React.HTMLAttributes<HTMLBodyElement> & TProps_32>;
        attrs: <TProps_33 extends Record<string, unknown>>(callback: (props: TProps_33 & React.ClassAttributes<HTMLBodyElement> & React.HTMLAttributes<HTMLBodyElement>) => Record<string, unknown> & React.ClassAttributes<HTMLBodyElement> & React.HTMLAttributes<HTMLBodyElement>) => <TResultProps_16 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_16>[]) => FunctionComponent<React.ClassAttributes<HTMLBodyElement> & React.HTMLAttributes<HTMLBodyElement> & TProps_33>;
    };
    br: {
        <TProps_34 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_34>[]): FunctionComponent<React.ClassAttributes<HTMLBRElement> & React.HTMLAttributes<HTMLBRElement> & TProps_34>;
        attrs: <TProps_35 extends Record<string, unknown>>(callback: (props: TProps_35 & React.ClassAttributes<HTMLBRElement> & React.HTMLAttributes<HTMLBRElement>) => Record<string, unknown> & React.ClassAttributes<HTMLBRElement> & React.HTMLAttributes<HTMLBRElement>) => <TResultProps_17 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_17>[]) => FunctionComponent<React.ClassAttributes<HTMLBRElement> & React.HTMLAttributes<HTMLBRElement> & TProps_35>;
    };
    button: {
        <TProps_36 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_36>[]): FunctionComponent<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & TProps_36>;
        attrs: <TProps_37 extends Record<string, unknown>>(callback: (props: TProps_37 & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => Record<string, unknown> & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => <TResultProps_18 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_18>[]) => FunctionComponent<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & TProps_37>;
    };
    canvas: {
        <TProps_38 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_38>[]): FunctionComponent<React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement> & TProps_38>;
        attrs: <TProps_39 extends Record<string, unknown>>(callback: (props: TProps_39 & React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement>) => Record<string, unknown> & React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement>) => <TResultProps_19 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_19>[]) => FunctionComponent<React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement> & TProps_39>;
    };
    caption: {
        <TProps_40 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_40>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_40>;
        attrs: <TProps_41 extends Record<string, unknown>>(callback: (props: TProps_41 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_20 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_20>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_41>;
    };
    center: {
        <TProps_42 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_42>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_42>;
        attrs: <TProps_43 extends Record<string, unknown>>(callback: (props: TProps_43 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_21 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_21>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_43>;
    };
    cite: {
        <TProps_44 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_44>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_44>;
        attrs: <TProps_45 extends Record<string, unknown>>(callback: (props: TProps_45 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_22 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_22>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_45>;
    };
    code: {
        <TProps_46 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_46>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_46>;
        attrs: <TProps_47 extends Record<string, unknown>>(callback: (props: TProps_47 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_23 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_23>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_47>;
    };
    col: {
        <TProps_48 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_48>[]): FunctionComponent<React.ClassAttributes<HTMLTableColElement> & React.ColHTMLAttributes<HTMLTableColElement> & TProps_48>;
        attrs: <TProps_49 extends Record<string, unknown>>(callback: (props: TProps_49 & React.ClassAttributes<HTMLTableColElement> & React.ColHTMLAttributes<HTMLTableColElement>) => Record<string, unknown> & React.ClassAttributes<HTMLTableColElement> & React.ColHTMLAttributes<HTMLTableColElement>) => <TResultProps_24 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_24>[]) => FunctionComponent<React.ClassAttributes<HTMLTableColElement> & React.ColHTMLAttributes<HTMLTableColElement> & TProps_49>;
    };
    colgroup: {
        <TProps_50 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_50>[]): FunctionComponent<React.ClassAttributes<HTMLTableColElement> & React.ColgroupHTMLAttributes<HTMLTableColElement> & TProps_50>;
        attrs: <TProps_51 extends Record<string, unknown>>(callback: (props: TProps_51 & React.ClassAttributes<HTMLTableColElement> & React.ColgroupHTMLAttributes<HTMLTableColElement>) => Record<string, unknown> & React.ClassAttributes<HTMLTableColElement> & React.ColgroupHTMLAttributes<HTMLTableColElement>) => <TResultProps_25 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_25>[]) => FunctionComponent<React.ClassAttributes<HTMLTableColElement> & React.ColgroupHTMLAttributes<HTMLTableColElement> & TProps_51>;
    };
    data: {
        <TProps_52 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_52>[]): FunctionComponent<React.ClassAttributes<HTMLDataElement> & React.DataHTMLAttributes<HTMLDataElement> & TProps_52>;
        attrs: <TProps_53 extends Record<string, unknown>>(callback: (props: TProps_53 & React.ClassAttributes<HTMLDataElement> & React.DataHTMLAttributes<HTMLDataElement>) => Record<string, unknown> & React.ClassAttributes<HTMLDataElement> & React.DataHTMLAttributes<HTMLDataElement>) => <TResultProps_26 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_26>[]) => FunctionComponent<React.ClassAttributes<HTMLDataElement> & React.DataHTMLAttributes<HTMLDataElement> & TProps_53>;
    };
    datalist: {
        <TProps_54 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_54>[]): FunctionComponent<React.ClassAttributes<HTMLDataListElement> & React.HTMLAttributes<HTMLDataListElement> & TProps_54>;
        attrs: <TProps_55 extends Record<string, unknown>>(callback: (props: TProps_55 & React.ClassAttributes<HTMLDataListElement> & React.HTMLAttributes<HTMLDataListElement>) => Record<string, unknown> & React.ClassAttributes<HTMLDataListElement> & React.HTMLAttributes<HTMLDataListElement>) => <TResultProps_27 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_27>[]) => FunctionComponent<React.ClassAttributes<HTMLDataListElement> & React.HTMLAttributes<HTMLDataListElement> & TProps_55>;
    };
    dd: {
        <TProps_56 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_56>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_56>;
        attrs: <TProps_57 extends Record<string, unknown>>(callback: (props: TProps_57 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_28 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_28>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_57>;
    };
    del: {
        <TProps_58 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_58>[]): FunctionComponent<React.ClassAttributes<HTMLModElement> & React.DelHTMLAttributes<HTMLModElement> & TProps_58>;
        attrs: <TProps_59 extends Record<string, unknown>>(callback: (props: TProps_59 & React.ClassAttributes<HTMLModElement> & React.DelHTMLAttributes<HTMLModElement>) => Record<string, unknown> & React.ClassAttributes<HTMLModElement> & React.DelHTMLAttributes<HTMLModElement>) => <TResultProps_29 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_29>[]) => FunctionComponent<React.ClassAttributes<HTMLModElement> & React.DelHTMLAttributes<HTMLModElement> & TProps_59>;
    };
    details: {
        <TProps_60 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_60>[]): FunctionComponent<React.ClassAttributes<HTMLDetailsElement> & React.DetailsHTMLAttributes<HTMLDetailsElement> & TProps_60>;
        attrs: <TProps_61 extends Record<string, unknown>>(callback: (props: TProps_61 & React.ClassAttributes<HTMLDetailsElement> & React.DetailsHTMLAttributes<HTMLDetailsElement>) => Record<string, unknown> & React.ClassAttributes<HTMLDetailsElement> & React.DetailsHTMLAttributes<HTMLDetailsElement>) => <TResultProps_30 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_30>[]) => FunctionComponent<React.ClassAttributes<HTMLDetailsElement> & React.DetailsHTMLAttributes<HTMLDetailsElement> & TProps_61>;
    };
    dfn: {
        <TProps_62 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_62>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_62>;
        attrs: <TProps_63 extends Record<string, unknown>>(callback: (props: TProps_63 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_31 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_31>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_63>;
    };
    dialog: {
        <TProps_64 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_64>[]): FunctionComponent<React.ClassAttributes<HTMLDialogElement> & React.DialogHTMLAttributes<HTMLDialogElement> & TProps_64>;
        attrs: <TProps_65 extends Record<string, unknown>>(callback: (props: TProps_65 & React.ClassAttributes<HTMLDialogElement> & React.DialogHTMLAttributes<HTMLDialogElement>) => Record<string, unknown> & React.ClassAttributes<HTMLDialogElement> & React.DialogHTMLAttributes<HTMLDialogElement>) => <TResultProps_32 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_32>[]) => FunctionComponent<React.ClassAttributes<HTMLDialogElement> & React.DialogHTMLAttributes<HTMLDialogElement> & TProps_65>;
    };
    div: {
        <TProps_66 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_66>[]): FunctionComponent<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & TProps_66>;
        attrs: <TProps_67 extends Record<string, unknown>>(callback: (props: TProps_67 & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) => Record<string, unknown> & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) => <TResultProps_33 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_33>[]) => FunctionComponent<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & TProps_67>;
    };
    dl: {
        <TProps_68 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_68>[]): FunctionComponent<React.ClassAttributes<HTMLDListElement> & React.HTMLAttributes<HTMLDListElement> & TProps_68>;
        attrs: <TProps_69 extends Record<string, unknown>>(callback: (props: TProps_69 & React.ClassAttributes<HTMLDListElement> & React.HTMLAttributes<HTMLDListElement>) => Record<string, unknown> & React.ClassAttributes<HTMLDListElement> & React.HTMLAttributes<HTMLDListElement>) => <TResultProps_34 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_34>[]) => FunctionComponent<React.ClassAttributes<HTMLDListElement> & React.HTMLAttributes<HTMLDListElement> & TProps_69>;
    };
    dt: {
        <TProps_70 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_70>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_70>;
        attrs: <TProps_71 extends Record<string, unknown>>(callback: (props: TProps_71 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_35 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_35>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_71>;
    };
    em: {
        <TProps_72 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_72>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_72>;
        attrs: <TProps_73 extends Record<string, unknown>>(callback: (props: TProps_73 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_36 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_36>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_73>;
    };
    embed: {
        <TProps_74 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_74>[]): FunctionComponent<React.ClassAttributes<HTMLEmbedElement> & React.EmbedHTMLAttributes<HTMLEmbedElement> & TProps_74>;
        attrs: <TProps_75 extends Record<string, unknown>>(callback: (props: TProps_75 & React.ClassAttributes<HTMLEmbedElement> & React.EmbedHTMLAttributes<HTMLEmbedElement>) => Record<string, unknown> & React.ClassAttributes<HTMLEmbedElement> & React.EmbedHTMLAttributes<HTMLEmbedElement>) => <TResultProps_37 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_37>[]) => FunctionComponent<React.ClassAttributes<HTMLEmbedElement> & React.EmbedHTMLAttributes<HTMLEmbedElement> & TProps_75>;
    };
    fieldset: {
        <TProps_76 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_76>[]): FunctionComponent<React.ClassAttributes<HTMLFieldSetElement> & React.FieldsetHTMLAttributes<HTMLFieldSetElement> & TProps_76>;
        attrs: <TProps_77 extends Record<string, unknown>>(callback: (props: TProps_77 & React.ClassAttributes<HTMLFieldSetElement> & React.FieldsetHTMLAttributes<HTMLFieldSetElement>) => Record<string, unknown> & React.ClassAttributes<HTMLFieldSetElement> & React.FieldsetHTMLAttributes<HTMLFieldSetElement>) => <TResultProps_38 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_38>[]) => FunctionComponent<React.ClassAttributes<HTMLFieldSetElement> & React.FieldsetHTMLAttributes<HTMLFieldSetElement> & TProps_77>;
    };
    figcaption: {
        <TProps_78 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_78>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_78>;
        attrs: <TProps_79 extends Record<string, unknown>>(callback: (props: TProps_79 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_39 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_39>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_79>;
    };
    figure: {
        <TProps_80 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_80>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_80>;
        attrs: <TProps_81 extends Record<string, unknown>>(callback: (props: TProps_81 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_40 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_40>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_81>;
    };
    footer: {
        <TProps_82 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_82>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_82>;
        attrs: <TProps_83 extends Record<string, unknown>>(callback: (props: TProps_83 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_41 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_41>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_83>;
    };
    form: {
        <TProps_84 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_84>[]): FunctionComponent<React.ClassAttributes<HTMLFormElement> & React.FormHTMLAttributes<HTMLFormElement> & TProps_84>;
        attrs: <TProps_85 extends Record<string, unknown>>(callback: (props: TProps_85 & React.ClassAttributes<HTMLFormElement> & React.FormHTMLAttributes<HTMLFormElement>) => Record<string, unknown> & React.ClassAttributes<HTMLFormElement> & React.FormHTMLAttributes<HTMLFormElement>) => <TResultProps_42 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_42>[]) => FunctionComponent<React.ClassAttributes<HTMLFormElement> & React.FormHTMLAttributes<HTMLFormElement> & TProps_85>;
    };
    h1: {
        <TProps_86 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_86>[]): FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_86>;
        attrs: <TProps_87 extends Record<string, unknown>>(callback: (props: TProps_87 & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) => Record<string, unknown> & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) => <TResultProps_43 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_43>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_87>;
    };
    h2: {
        <TProps_88 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_88>[]): FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_88>;
        attrs: <TProps_89 extends Record<string, unknown>>(callback: (props: TProps_89 & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) => Record<string, unknown> & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) => <TResultProps_44 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_44>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_89>;
    };
    h3: {
        <TProps_90 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_90>[]): FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_90>;
        attrs: <TProps_91 extends Record<string, unknown>>(callback: (props: TProps_91 & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) => Record<string, unknown> & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) => <TResultProps_45 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_45>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_91>;
    };
    h4: {
        <TProps_92 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_92>[]): FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_92>;
        attrs: <TProps_93 extends Record<string, unknown>>(callback: (props: TProps_93 & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) => Record<string, unknown> & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) => <TResultProps_46 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_46>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_93>;
    };
    h5: {
        <TProps_94 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_94>[]): FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_94>;
        attrs: <TProps_95 extends Record<string, unknown>>(callback: (props: TProps_95 & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) => Record<string, unknown> & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) => <TResultProps_47 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_47>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_95>;
    };
    h6: {
        <TProps_96 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_96>[]): FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_96>;
        attrs: <TProps_97 extends Record<string, unknown>>(callback: (props: TProps_97 & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) => Record<string, unknown> & React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement>) => <TResultProps_48 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_48>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & TProps_97>;
    };
    head: {
        <TProps_98 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_98>[]): FunctionComponent<React.ClassAttributes<HTMLHeadElement> & React.HTMLAttributes<HTMLHeadElement> & TProps_98>;
        attrs: <TProps_99 extends Record<string, unknown>>(callback: (props: TProps_99 & React.ClassAttributes<HTMLHeadElement> & React.HTMLAttributes<HTMLHeadElement>) => Record<string, unknown> & React.ClassAttributes<HTMLHeadElement> & React.HTMLAttributes<HTMLHeadElement>) => <TResultProps_49 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_49>[]) => FunctionComponent<React.ClassAttributes<HTMLHeadElement> & React.HTMLAttributes<HTMLHeadElement> & TProps_99>;
    };
    header: {
        <TProps_100 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_100>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_100>;
        attrs: <TProps_101 extends Record<string, unknown>>(callback: (props: TProps_101 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_50 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_50>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_101>;
    };
    hgroup: {
        <TProps_102 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_102>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_102>;
        attrs: <TProps_103 extends Record<string, unknown>>(callback: (props: TProps_103 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_51 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_51>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_103>;
    };
    hr: {
        <TProps_104 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_104>[]): FunctionComponent<React.ClassAttributes<HTMLHRElement> & React.HTMLAttributes<HTMLHRElement> & TProps_104>;
        attrs: <TProps_105 extends Record<string, unknown>>(callback: (props: TProps_105 & React.ClassAttributes<HTMLHRElement> & React.HTMLAttributes<HTMLHRElement>) => Record<string, unknown> & React.ClassAttributes<HTMLHRElement> & React.HTMLAttributes<HTMLHRElement>) => <TResultProps_52 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_52>[]) => FunctionComponent<React.ClassAttributes<HTMLHRElement> & React.HTMLAttributes<HTMLHRElement> & TProps_105>;
    };
    html: {
        <TProps_106 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_106>[]): FunctionComponent<React.ClassAttributes<HTMLHtmlElement> & React.HtmlHTMLAttributes<HTMLHtmlElement> & TProps_106>;
        attrs: <TProps_107 extends Record<string, unknown>>(callback: (props: TProps_107 & React.ClassAttributes<HTMLHtmlElement> & React.HtmlHTMLAttributes<HTMLHtmlElement>) => Record<string, unknown> & React.ClassAttributes<HTMLHtmlElement> & React.HtmlHTMLAttributes<HTMLHtmlElement>) => <TResultProps_53 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_53>[]) => FunctionComponent<React.ClassAttributes<HTMLHtmlElement> & React.HtmlHTMLAttributes<HTMLHtmlElement> & TProps_107>;
    };
    i: {
        <TProps_108 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_108>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_108>;
        attrs: <TProps_109 extends Record<string, unknown>>(callback: (props: TProps_109 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_54 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_54>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_109>;
    };
    iframe: {
        <TProps_110 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_110>[]): FunctionComponent<React.ClassAttributes<HTMLIFrameElement> & React.IframeHTMLAttributes<HTMLIFrameElement> & TProps_110>;
        attrs: <TProps_111 extends Record<string, unknown>>(callback: (props: TProps_111 & React.ClassAttributes<HTMLIFrameElement> & React.IframeHTMLAttributes<HTMLIFrameElement>) => Record<string, unknown> & React.ClassAttributes<HTMLIFrameElement> & React.IframeHTMLAttributes<HTMLIFrameElement>) => <TResultProps_55 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_55>[]) => FunctionComponent<React.ClassAttributes<HTMLIFrameElement> & React.IframeHTMLAttributes<HTMLIFrameElement> & TProps_111>;
    };
    img: {
        <TProps_112 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_112>[]): FunctionComponent<React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement> & TProps_112>;
        attrs: <TProps_113 extends Record<string, unknown>>(callback: (props: TProps_113 & React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement>) => Record<string, unknown> & React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement>) => <TResultProps_56 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_56>[]) => FunctionComponent<React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement> & TProps_113>;
    };
    input: {
        <TProps_114 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_114>[]): FunctionComponent<React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & TProps_114>;
        attrs: <TProps_115 extends Record<string, unknown>>(callback: (props: TProps_115 & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>) => Record<string, unknown> & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>) => <TResultProps_57 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_57>[]) => FunctionComponent<React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & TProps_115>;
    };
    ins: {
        <TProps_116 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_116>[]): FunctionComponent<React.ClassAttributes<HTMLModElement> & React.InsHTMLAttributes<HTMLModElement> & TProps_116>;
        attrs: <TProps_117 extends Record<string, unknown>>(callback: (props: TProps_117 & React.ClassAttributes<HTMLModElement> & React.InsHTMLAttributes<HTMLModElement>) => Record<string, unknown> & React.ClassAttributes<HTMLModElement> & React.InsHTMLAttributes<HTMLModElement>) => <TResultProps_58 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_58>[]) => FunctionComponent<React.ClassAttributes<HTMLModElement> & React.InsHTMLAttributes<HTMLModElement> & TProps_117>;
    };
    kbd: {
        <TProps_118 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_118>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_118>;
        attrs: <TProps_119 extends Record<string, unknown>>(callback: (props: TProps_119 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_59 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_59>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_119>;
    };
    keygen: {
        <TProps_120 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_120>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.KeygenHTMLAttributes<HTMLElement> & TProps_120>;
        attrs: <TProps_121 extends Record<string, unknown>>(callback: (props: TProps_121 & React.ClassAttributes<HTMLElement> & React.KeygenHTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.KeygenHTMLAttributes<HTMLElement>) => <TResultProps_60 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_60>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.KeygenHTMLAttributes<HTMLElement> & TProps_121>;
    };
    label: {
        <TProps_122 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_122>[]): FunctionComponent<React.ClassAttributes<HTMLLabelElement> & React.LabelHTMLAttributes<HTMLLabelElement> & TProps_122>;
        attrs: <TProps_123 extends Record<string, unknown>>(callback: (props: TProps_123 & React.ClassAttributes<HTMLLabelElement> & React.LabelHTMLAttributes<HTMLLabelElement>) => Record<string, unknown> & React.ClassAttributes<HTMLLabelElement> & React.LabelHTMLAttributes<HTMLLabelElement>) => <TResultProps_61 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_61>[]) => FunctionComponent<React.ClassAttributes<HTMLLabelElement> & React.LabelHTMLAttributes<HTMLLabelElement> & TProps_123>;
    };
    legend: {
        <TProps_124 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_124>[]): FunctionComponent<React.ClassAttributes<HTMLLegendElement> & React.HTMLAttributes<HTMLLegendElement> & TProps_124>;
        attrs: <TProps_125 extends Record<string, unknown>>(callback: (props: TProps_125 & React.ClassAttributes<HTMLLegendElement> & React.HTMLAttributes<HTMLLegendElement>) => Record<string, unknown> & React.ClassAttributes<HTMLLegendElement> & React.HTMLAttributes<HTMLLegendElement>) => <TResultProps_62 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_62>[]) => FunctionComponent<React.ClassAttributes<HTMLLegendElement> & React.HTMLAttributes<HTMLLegendElement> & TProps_125>;
    };
    li: {
        <TProps_126 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_126>[]): FunctionComponent<React.ClassAttributes<HTMLLIElement> & React.LiHTMLAttributes<HTMLLIElement> & TProps_126>;
        attrs: <TProps_127 extends Record<string, unknown>>(callback: (props: TProps_127 & React.ClassAttributes<HTMLLIElement> & React.LiHTMLAttributes<HTMLLIElement>) => Record<string, unknown> & React.ClassAttributes<HTMLLIElement> & React.LiHTMLAttributes<HTMLLIElement>) => <TResultProps_63 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_63>[]) => FunctionComponent<React.ClassAttributes<HTMLLIElement> & React.LiHTMLAttributes<HTMLLIElement> & TProps_127>;
    };
    link: {
        <TProps_128 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_128>[]): FunctionComponent<React.ClassAttributes<HTMLLinkElement> & React.LinkHTMLAttributes<HTMLLinkElement> & TProps_128>;
        attrs: <TProps_129 extends Record<string, unknown>>(callback: (props: TProps_129 & React.ClassAttributes<HTMLLinkElement> & React.LinkHTMLAttributes<HTMLLinkElement>) => Record<string, unknown> & React.ClassAttributes<HTMLLinkElement> & React.LinkHTMLAttributes<HTMLLinkElement>) => <TResultProps_64 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_64>[]) => FunctionComponent<React.ClassAttributes<HTMLLinkElement> & React.LinkHTMLAttributes<HTMLLinkElement> & TProps_129>;
    };
    main: {
        <TProps_130 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_130>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_130>;
        attrs: <TProps_131 extends Record<string, unknown>>(callback: (props: TProps_131 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_65 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_65>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_131>;
    };
    map: {
        <TProps_132 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_132>[]): FunctionComponent<React.ClassAttributes<HTMLMapElement> & React.MapHTMLAttributes<HTMLMapElement> & TProps_132>;
        attrs: <TProps_133 extends Record<string, unknown>>(callback: (props: TProps_133 & React.ClassAttributes<HTMLMapElement> & React.MapHTMLAttributes<HTMLMapElement>) => Record<string, unknown> & React.ClassAttributes<HTMLMapElement> & React.MapHTMLAttributes<HTMLMapElement>) => <TResultProps_66 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_66>[]) => FunctionComponent<React.ClassAttributes<HTMLMapElement> & React.MapHTMLAttributes<HTMLMapElement> & TProps_133>;
    };
    mark: {
        <TProps_134 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_134>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_134>;
        attrs: <TProps_135 extends Record<string, unknown>>(callback: (props: TProps_135 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_67 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_67>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_135>;
    };
    menu: {
        <TProps_136 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_136>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.MenuHTMLAttributes<HTMLElement> & TProps_136>;
        attrs: <TProps_137 extends Record<string, unknown>>(callback: (props: TProps_137 & React.ClassAttributes<HTMLElement> & React.MenuHTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.MenuHTMLAttributes<HTMLElement>) => <TResultProps_68 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_68>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.MenuHTMLAttributes<HTMLElement> & TProps_137>;
    };
    menuitem: {
        <TProps_138 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_138>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_138>;
        attrs: <TProps_139 extends Record<string, unknown>>(callback: (props: TProps_139 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_69 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_69>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_139>;
    };
    meta: {
        <TProps_140 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_140>[]): FunctionComponent<React.ClassAttributes<HTMLMetaElement> & React.MetaHTMLAttributes<HTMLMetaElement> & TProps_140>;
        attrs: <TProps_141 extends Record<string, unknown>>(callback: (props: TProps_141 & React.ClassAttributes<HTMLMetaElement> & React.MetaHTMLAttributes<HTMLMetaElement>) => Record<string, unknown> & React.ClassAttributes<HTMLMetaElement> & React.MetaHTMLAttributes<HTMLMetaElement>) => <TResultProps_70 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_70>[]) => FunctionComponent<React.ClassAttributes<HTMLMetaElement> & React.MetaHTMLAttributes<HTMLMetaElement> & TProps_141>;
    };
    meter: {
        <TProps_142 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_142>[]): FunctionComponent<React.ClassAttributes<HTMLMeterElement> & React.MeterHTMLAttributes<HTMLMeterElement> & TProps_142>;
        attrs: <TProps_143 extends Record<string, unknown>>(callback: (props: TProps_143 & React.ClassAttributes<HTMLMeterElement> & React.MeterHTMLAttributes<HTMLMeterElement>) => Record<string, unknown> & React.ClassAttributes<HTMLMeterElement> & React.MeterHTMLAttributes<HTMLMeterElement>) => <TResultProps_71 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_71>[]) => FunctionComponent<React.ClassAttributes<HTMLMeterElement> & React.MeterHTMLAttributes<HTMLMeterElement> & TProps_143>;
    };
    nav: {
        <TProps_144 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_144>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_144>;
        attrs: <TProps_145 extends Record<string, unknown>>(callback: (props: TProps_145 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_72 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_72>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_145>;
    };
    noindex: {
        <TProps_146 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_146>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_146>;
        attrs: <TProps_147 extends Record<string, unknown>>(callback: (props: TProps_147 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_73 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_73>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_147>;
    };
    noscript: {
        <TProps_148 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_148>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_148>;
        attrs: <TProps_149 extends Record<string, unknown>>(callback: (props: TProps_149 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_74 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_74>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_149>;
    };
    ol: {
        <TProps_150 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_150>[]): FunctionComponent<React.ClassAttributes<HTMLOListElement> & React.OlHTMLAttributes<HTMLOListElement> & TProps_150>;
        attrs: <TProps_151 extends Record<string, unknown>>(callback: (props: TProps_151 & React.ClassAttributes<HTMLOListElement> & React.OlHTMLAttributes<HTMLOListElement>) => Record<string, unknown> & React.ClassAttributes<HTMLOListElement> & React.OlHTMLAttributes<HTMLOListElement>) => <TResultProps_75 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_75>[]) => FunctionComponent<React.ClassAttributes<HTMLOListElement> & React.OlHTMLAttributes<HTMLOListElement> & TProps_151>;
    };
    optgroup: {
        <TProps_152 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_152>[]): FunctionComponent<React.ClassAttributes<HTMLOptGroupElement> & React.OptgroupHTMLAttributes<HTMLOptGroupElement> & TProps_152>;
        attrs: <TProps_153 extends Record<string, unknown>>(callback: (props: TProps_153 & React.ClassAttributes<HTMLOptGroupElement> & React.OptgroupHTMLAttributes<HTMLOptGroupElement>) => Record<string, unknown> & React.ClassAttributes<HTMLOptGroupElement> & React.OptgroupHTMLAttributes<HTMLOptGroupElement>) => <TResultProps_76 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_76>[]) => FunctionComponent<React.ClassAttributes<HTMLOptGroupElement> & React.OptgroupHTMLAttributes<HTMLOptGroupElement> & TProps_153>;
    };
    option: {
        <TProps_154 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_154>[]): FunctionComponent<React.ClassAttributes<HTMLOptionElement> & React.OptionHTMLAttributes<HTMLOptionElement> & TProps_154>;
        attrs: <TProps_155 extends Record<string, unknown>>(callback: (props: TProps_155 & React.ClassAttributes<HTMLOptionElement> & React.OptionHTMLAttributes<HTMLOptionElement>) => Record<string, unknown> & React.ClassAttributes<HTMLOptionElement> & React.OptionHTMLAttributes<HTMLOptionElement>) => <TResultProps_77 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_77>[]) => FunctionComponent<React.ClassAttributes<HTMLOptionElement> & React.OptionHTMLAttributes<HTMLOptionElement> & TProps_155>;
    };
    output: {
        <TProps_156 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_156>[]): FunctionComponent<React.ClassAttributes<HTMLOutputElement> & React.OutputHTMLAttributes<HTMLOutputElement> & TProps_156>;
        attrs: <TProps_157 extends Record<string, unknown>>(callback: (props: TProps_157 & React.ClassAttributes<HTMLOutputElement> & React.OutputHTMLAttributes<HTMLOutputElement>) => Record<string, unknown> & React.ClassAttributes<HTMLOutputElement> & React.OutputHTMLAttributes<HTMLOutputElement>) => <TResultProps_78 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_78>[]) => FunctionComponent<React.ClassAttributes<HTMLOutputElement> & React.OutputHTMLAttributes<HTMLOutputElement> & TProps_157>;
    };
    p: {
        <TProps_158 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_158>[]): FunctionComponent<React.ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement> & TProps_158>;
        attrs: <TProps_159 extends Record<string, unknown>>(callback: (props: TProps_159 & React.ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement>) => Record<string, unknown> & React.ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement>) => <TResultProps_79 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_79>[]) => FunctionComponent<React.ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement> & TProps_159>;
    };
    param: {
        <TProps_160 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_160>[]): FunctionComponent<React.ClassAttributes<HTMLParamElement> & React.ParamHTMLAttributes<HTMLParamElement> & TProps_160>;
        attrs: <TProps_161 extends Record<string, unknown>>(callback: (props: TProps_161 & React.ClassAttributes<HTMLParamElement> & React.ParamHTMLAttributes<HTMLParamElement>) => Record<string, unknown> & React.ClassAttributes<HTMLParamElement> & React.ParamHTMLAttributes<HTMLParamElement>) => <TResultProps_80 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_80>[]) => FunctionComponent<React.ClassAttributes<HTMLParamElement> & React.ParamHTMLAttributes<HTMLParamElement> & TProps_161>;
    };
    picture: {
        <TProps_162 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_162>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_162>;
        attrs: <TProps_163 extends Record<string, unknown>>(callback: (props: TProps_163 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_81 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_81>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_163>;
    };
    pre: {
        <TProps_164 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_164>[]): FunctionComponent<React.ClassAttributes<HTMLPreElement> & React.HTMLAttributes<HTMLPreElement> & TProps_164>;
        attrs: <TProps_165 extends Record<string, unknown>>(callback: (props: TProps_165 & React.ClassAttributes<HTMLPreElement> & React.HTMLAttributes<HTMLPreElement>) => Record<string, unknown> & React.ClassAttributes<HTMLPreElement> & React.HTMLAttributes<HTMLPreElement>) => <TResultProps_82 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_82>[]) => FunctionComponent<React.ClassAttributes<HTMLPreElement> & React.HTMLAttributes<HTMLPreElement> & TProps_165>;
    };
    progress: {
        <TProps_166 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_166>[]): FunctionComponent<React.ClassAttributes<HTMLProgressElement> & React.ProgressHTMLAttributes<HTMLProgressElement> & TProps_166>;
        attrs: <TProps_167 extends Record<string, unknown>>(callback: (props: TProps_167 & React.ClassAttributes<HTMLProgressElement> & React.ProgressHTMLAttributes<HTMLProgressElement>) => Record<string, unknown> & React.ClassAttributes<HTMLProgressElement> & React.ProgressHTMLAttributes<HTMLProgressElement>) => <TResultProps_83 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_83>[]) => FunctionComponent<React.ClassAttributes<HTMLProgressElement> & React.ProgressHTMLAttributes<HTMLProgressElement> & TProps_167>;
    };
    q: {
        <TProps_168 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_168>[]): FunctionComponent<React.ClassAttributes<HTMLQuoteElement> & React.QuoteHTMLAttributes<HTMLQuoteElement> & TProps_168>;
        attrs: <TProps_169 extends Record<string, unknown>>(callback: (props: TProps_169 & React.ClassAttributes<HTMLQuoteElement> & React.QuoteHTMLAttributes<HTMLQuoteElement>) => Record<string, unknown> & React.ClassAttributes<HTMLQuoteElement> & React.QuoteHTMLAttributes<HTMLQuoteElement>) => <TResultProps_84 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_84>[]) => FunctionComponent<React.ClassAttributes<HTMLQuoteElement> & React.QuoteHTMLAttributes<HTMLQuoteElement> & TProps_169>;
    };
    rp: {
        <TProps_170 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_170>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_170>;
        attrs: <TProps_171 extends Record<string, unknown>>(callback: (props: TProps_171 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_85 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_85>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_171>;
    };
    rt: {
        <TProps_172 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_172>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_172>;
        attrs: <TProps_173 extends Record<string, unknown>>(callback: (props: TProps_173 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_86 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_86>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_173>;
    };
    ruby: {
        <TProps_174 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_174>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_174>;
        attrs: <TProps_175 extends Record<string, unknown>>(callback: (props: TProps_175 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_87 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_87>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_175>;
    };
    s: {
        <TProps_176 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_176>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_176>;
        attrs: <TProps_177 extends Record<string, unknown>>(callback: (props: TProps_177 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_88 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_88>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_177>;
    };
    samp: {
        <TProps_178 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_178>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_178>;
        attrs: <TProps_179 extends Record<string, unknown>>(callback: (props: TProps_179 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_89 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_89>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_179>;
    };
    search: {
        <TProps_180 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_180>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_180>;
        attrs: <TProps_181 extends Record<string, unknown>>(callback: (props: TProps_181 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_90 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_90>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_181>;
    };
    slot: {
        <TProps_182 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_182>[]): FunctionComponent<React.ClassAttributes<HTMLSlotElement> & React.SlotHTMLAttributes<HTMLSlotElement> & TProps_182>;
        attrs: <TProps_183 extends Record<string, unknown>>(callback: (props: TProps_183 & React.ClassAttributes<HTMLSlotElement> & React.SlotHTMLAttributes<HTMLSlotElement>) => Record<string, unknown> & React.ClassAttributes<HTMLSlotElement> & React.SlotHTMLAttributes<HTMLSlotElement>) => <TResultProps_91 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_91>[]) => FunctionComponent<React.ClassAttributes<HTMLSlotElement> & React.SlotHTMLAttributes<HTMLSlotElement> & TProps_183>;
    };
    script: {
        <TProps_184 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_184>[]): FunctionComponent<React.ClassAttributes<HTMLScriptElement> & React.ScriptHTMLAttributes<HTMLScriptElement> & TProps_184>;
        attrs: <TProps_185 extends Record<string, unknown>>(callback: (props: TProps_185 & React.ClassAttributes<HTMLScriptElement> & React.ScriptHTMLAttributes<HTMLScriptElement>) => Record<string, unknown> & React.ClassAttributes<HTMLScriptElement> & React.ScriptHTMLAttributes<HTMLScriptElement>) => <TResultProps_92 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_92>[]) => FunctionComponent<React.ClassAttributes<HTMLScriptElement> & React.ScriptHTMLAttributes<HTMLScriptElement> & TProps_185>;
    };
    section: {
        <TProps_186 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_186>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_186>;
        attrs: <TProps_187 extends Record<string, unknown>>(callback: (props: TProps_187 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_93 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_93>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_187>;
    };
    select: {
        <TProps_188 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_188>[]): FunctionComponent<React.ClassAttributes<HTMLSelectElement> & React.SelectHTMLAttributes<HTMLSelectElement> & TProps_188>;
        attrs: <TProps_189 extends Record<string, unknown>>(callback: (props: TProps_189 & React.ClassAttributes<HTMLSelectElement> & React.SelectHTMLAttributes<HTMLSelectElement>) => Record<string, unknown> & React.ClassAttributes<HTMLSelectElement> & React.SelectHTMLAttributes<HTMLSelectElement>) => <TResultProps_94 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_94>[]) => FunctionComponent<React.ClassAttributes<HTMLSelectElement> & React.SelectHTMLAttributes<HTMLSelectElement> & TProps_189>;
    };
    small: {
        <TProps_190 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_190>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_190>;
        attrs: <TProps_191 extends Record<string, unknown>>(callback: (props: TProps_191 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_95 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_95>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_191>;
    };
    source: {
        <TProps_192 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_192>[]): FunctionComponent<React.ClassAttributes<HTMLSourceElement> & React.SourceHTMLAttributes<HTMLSourceElement> & TProps_192>;
        attrs: <TProps_193 extends Record<string, unknown>>(callback: (props: TProps_193 & React.ClassAttributes<HTMLSourceElement> & React.SourceHTMLAttributes<HTMLSourceElement>) => Record<string, unknown> & React.ClassAttributes<HTMLSourceElement> & React.SourceHTMLAttributes<HTMLSourceElement>) => <TResultProps_96 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_96>[]) => FunctionComponent<React.ClassAttributes<HTMLSourceElement> & React.SourceHTMLAttributes<HTMLSourceElement> & TProps_193>;
    };
    span: {
        <TProps_194 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_194>[]): FunctionComponent<React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement> & TProps_194>;
        attrs: <TProps_195 extends Record<string, unknown>>(callback: (props: TProps_195 & React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement>) => Record<string, unknown> & React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement>) => <TResultProps_97 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_97>[]) => FunctionComponent<React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement> & TProps_195>;
    };
    strong: {
        <TProps_196 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_196>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_196>;
        attrs: <TProps_197 extends Record<string, unknown>>(callback: (props: TProps_197 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_98 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_98>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_197>;
    };
    sub: {
        <TProps_198 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_198>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_198>;
        attrs: <TProps_199 extends Record<string, unknown>>(callback: (props: TProps_199 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_99 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_99>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_199>;
    };
    summary: {
        <TProps_200 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_200>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_200>;
        attrs: <TProps_201 extends Record<string, unknown>>(callback: (props: TProps_201 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_100 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_100>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_201>;
    };
    sup: {
        <TProps_202 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_202>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_202>;
        attrs: <TProps_203 extends Record<string, unknown>>(callback: (props: TProps_203 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_101 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_101>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_203>;
    };
    table: {
        <TProps_204 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_204>[]): FunctionComponent<React.ClassAttributes<HTMLTableElement> & React.TableHTMLAttributes<HTMLTableElement> & TProps_204>;
        attrs: <TProps_205 extends Record<string, unknown>>(callback: (props: TProps_205 & React.ClassAttributes<HTMLTableElement> & React.TableHTMLAttributes<HTMLTableElement>) => Record<string, unknown> & React.ClassAttributes<HTMLTableElement> & React.TableHTMLAttributes<HTMLTableElement>) => <TResultProps_102 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_102>[]) => FunctionComponent<React.ClassAttributes<HTMLTableElement> & React.TableHTMLAttributes<HTMLTableElement> & TProps_205>;
    };
    template: {
        <TProps_206 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_206>[]): FunctionComponent<React.ClassAttributes<HTMLTemplateElement> & React.HTMLAttributes<HTMLTemplateElement> & TProps_206>;
        attrs: <TProps_207 extends Record<string, unknown>>(callback: (props: TProps_207 & React.ClassAttributes<HTMLTemplateElement> & React.HTMLAttributes<HTMLTemplateElement>) => Record<string, unknown> & React.ClassAttributes<HTMLTemplateElement> & React.HTMLAttributes<HTMLTemplateElement>) => <TResultProps_103 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_103>[]) => FunctionComponent<React.ClassAttributes<HTMLTemplateElement> & React.HTMLAttributes<HTMLTemplateElement> & TProps_207>;
    };
    tbody: {
        <TProps_208 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_208>[]): FunctionComponent<React.ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement> & TProps_208>;
        attrs: <TProps_209 extends Record<string, unknown>>(callback: (props: TProps_209 & React.ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement>) => Record<string, unknown> & React.ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement>) => <TResultProps_104 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_104>[]) => FunctionComponent<React.ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement> & TProps_209>;
    };
    td: {
        <TProps_210 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_210>[]): FunctionComponent<React.ClassAttributes<HTMLTableDataCellElement> & React.TdHTMLAttributes<HTMLTableDataCellElement> & TProps_210>;
        attrs: <TProps_211 extends Record<string, unknown>>(callback: (props: TProps_211 & React.ClassAttributes<HTMLTableDataCellElement> & React.TdHTMLAttributes<HTMLTableDataCellElement>) => Record<string, unknown> & React.ClassAttributes<HTMLTableDataCellElement> & React.TdHTMLAttributes<HTMLTableDataCellElement>) => <TResultProps_105 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_105>[]) => FunctionComponent<React.ClassAttributes<HTMLTableDataCellElement> & React.TdHTMLAttributes<HTMLTableDataCellElement> & TProps_211>;
    };
    textarea: {
        <TProps_212 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_212>[]): FunctionComponent<React.ClassAttributes<HTMLTextAreaElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement> & TProps_212>;
        attrs: <TProps_213 extends Record<string, unknown>>(callback: (props: TProps_213 & React.ClassAttributes<HTMLTextAreaElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => Record<string, unknown> & React.ClassAttributes<HTMLTextAreaElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => <TResultProps_106 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_106>[]) => FunctionComponent<React.ClassAttributes<HTMLTextAreaElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement> & TProps_213>;
    };
    tfoot: {
        <TProps_214 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_214>[]): FunctionComponent<React.ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement> & TProps_214>;
        attrs: <TProps_215 extends Record<string, unknown>>(callback: (props: TProps_215 & React.ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement>) => Record<string, unknown> & React.ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement>) => <TResultProps_107 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_107>[]) => FunctionComponent<React.ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement> & TProps_215>;
    };
    th: {
        <TProps_216 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_216>[]): FunctionComponent<React.ClassAttributes<HTMLTableHeaderCellElement> & React.ThHTMLAttributes<HTMLTableHeaderCellElement> & TProps_216>;
        attrs: <TProps_217 extends Record<string, unknown>>(callback: (props: TProps_217 & React.ClassAttributes<HTMLTableHeaderCellElement> & React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => Record<string, unknown> & React.ClassAttributes<HTMLTableHeaderCellElement> & React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => <TResultProps_108 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_108>[]) => FunctionComponent<React.ClassAttributes<HTMLTableHeaderCellElement> & React.ThHTMLAttributes<HTMLTableHeaderCellElement> & TProps_217>;
    };
    thead: {
        <TProps_218 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_218>[]): FunctionComponent<React.ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement> & TProps_218>;
        attrs: <TProps_219 extends Record<string, unknown>>(callback: (props: TProps_219 & React.ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement>) => Record<string, unknown> & React.ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement>) => <TResultProps_109 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_109>[]) => FunctionComponent<React.ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement> & TProps_219>;
    };
    time: {
        <TProps_220 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_220>[]): FunctionComponent<React.ClassAttributes<HTMLTimeElement> & React.TimeHTMLAttributes<HTMLTimeElement> & TProps_220>;
        attrs: <TProps_221 extends Record<string, unknown>>(callback: (props: TProps_221 & React.ClassAttributes<HTMLTimeElement> & React.TimeHTMLAttributes<HTMLTimeElement>) => Record<string, unknown> & React.ClassAttributes<HTMLTimeElement> & React.TimeHTMLAttributes<HTMLTimeElement>) => <TResultProps_110 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_110>[]) => FunctionComponent<React.ClassAttributes<HTMLTimeElement> & React.TimeHTMLAttributes<HTMLTimeElement> & TProps_221>;
    };
    title: {
        <TProps_222 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_222>[]): FunctionComponent<React.ClassAttributes<HTMLTitleElement> & React.HTMLAttributes<HTMLTitleElement> & TProps_222>;
        attrs: <TProps_223 extends Record<string, unknown>>(callback: (props: TProps_223 & React.ClassAttributes<HTMLTitleElement> & React.HTMLAttributes<HTMLTitleElement>) => Record<string, unknown> & React.ClassAttributes<HTMLTitleElement> & React.HTMLAttributes<HTMLTitleElement>) => <TResultProps_111 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_111>[]) => FunctionComponent<React.ClassAttributes<HTMLTitleElement> & React.HTMLAttributes<HTMLTitleElement> & TProps_223>;
    };
    tr: {
        <TProps_224 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_224>[]): FunctionComponent<React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement> & TProps_224>;
        attrs: <TProps_225 extends Record<string, unknown>>(callback: (props: TProps_225 & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>) => Record<string, unknown> & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>) => <TResultProps_112 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_112>[]) => FunctionComponent<React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement> & TProps_225>;
    };
    track: {
        <TProps_226 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_226>[]): FunctionComponent<React.ClassAttributes<HTMLTrackElement> & React.TrackHTMLAttributes<HTMLTrackElement> & TProps_226>;
        attrs: <TProps_227 extends Record<string, unknown>>(callback: (props: TProps_227 & React.ClassAttributes<HTMLTrackElement> & React.TrackHTMLAttributes<HTMLTrackElement>) => Record<string, unknown> & React.ClassAttributes<HTMLTrackElement> & React.TrackHTMLAttributes<HTMLTrackElement>) => <TResultProps_113 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_113>[]) => FunctionComponent<React.ClassAttributes<HTMLTrackElement> & React.TrackHTMLAttributes<HTMLTrackElement> & TProps_227>;
    };
    u: {
        <TProps_228 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_228>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_228>;
        attrs: <TProps_229 extends Record<string, unknown>>(callback: (props: TProps_229 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_114 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_114>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_229>;
    };
    ul: {
        <TProps_230 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_230>[]): FunctionComponent<React.ClassAttributes<HTMLUListElement> & React.HTMLAttributes<HTMLUListElement> & TProps_230>;
        attrs: <TProps_231 extends Record<string, unknown>>(callback: (props: TProps_231 & React.ClassAttributes<HTMLUListElement> & React.HTMLAttributes<HTMLUListElement>) => Record<string, unknown> & React.ClassAttributes<HTMLUListElement> & React.HTMLAttributes<HTMLUListElement>) => <TResultProps_115 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_115>[]) => FunctionComponent<React.ClassAttributes<HTMLUListElement> & React.HTMLAttributes<HTMLUListElement> & TProps_231>;
    };
    var: {
        <TProps_232 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_232>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_232>;
        attrs: <TProps_233 extends Record<string, unknown>>(callback: (props: TProps_233 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_116 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_116>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_233>;
    };
    video: {
        <TProps_234 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_234>[]): FunctionComponent<React.ClassAttributes<HTMLVideoElement> & React.VideoHTMLAttributes<HTMLVideoElement> & TProps_234>;
        attrs: <TProps_235 extends Record<string, unknown>>(callback: (props: TProps_235 & React.ClassAttributes<HTMLVideoElement> & React.VideoHTMLAttributes<HTMLVideoElement>) => Record<string, unknown> & React.ClassAttributes<HTMLVideoElement> & React.VideoHTMLAttributes<HTMLVideoElement>) => <TResultProps_117 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_117>[]) => FunctionComponent<React.ClassAttributes<HTMLVideoElement> & React.VideoHTMLAttributes<HTMLVideoElement> & TProps_235>;
    };
    wbr: {
        <TProps_236 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_236>[]): FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_236>;
        attrs: <TProps_237 extends Record<string, unknown>>(callback: (props: TProps_237 & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => Record<string, unknown> & React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>) => <TResultProps_118 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_118>[]) => FunctionComponent<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & TProps_237>;
    };
    webview: {
        <TProps_238 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_238>[]): FunctionComponent<React.ClassAttributes<HTMLWebViewElement> & React.WebViewHTMLAttributes<HTMLWebViewElement> & TProps_238>;
        attrs: <TProps_239 extends Record<string, unknown>>(callback: (props: TProps_239 & React.ClassAttributes<HTMLWebViewElement> & React.WebViewHTMLAttributes<HTMLWebViewElement>) => Record<string, unknown> & React.ClassAttributes<HTMLWebViewElement> & React.WebViewHTMLAttributes<HTMLWebViewElement>) => <TResultProps_119 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_119>[]) => FunctionComponent<React.ClassAttributes<HTMLWebViewElement> & React.WebViewHTMLAttributes<HTMLWebViewElement> & TProps_239>;
    };
    svg: {
        <TProps_240 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_240>[]): FunctionComponent<React.SVGProps<SVGSVGElement> & TProps_240>;
        attrs: <TProps_241 extends Record<string, unknown>>(callback: (props: TProps_241 & React.SVGProps<SVGSVGElement>) => Record<string, unknown> & React.SVGProps<SVGSVGElement>) => <TResultProps_120 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_120>[]) => FunctionComponent<React.SVGProps<SVGSVGElement> & TProps_241>;
    };
    animate: {
        <TProps_242 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_242>[]): FunctionComponent<React.SVGProps<SVGElement> & TProps_242>;
        attrs: <TProps_243 extends Record<string, unknown>>(callback: (props: TProps_243 & React.SVGProps<SVGElement>) => Record<string, unknown> & React.SVGProps<SVGElement>) => <TResultProps_121 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_121>[]) => FunctionComponent<React.SVGProps<SVGElement> & TProps_243>;
    };
    animateMotion: {
        <TProps_244 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_244>[]): FunctionComponent<React.SVGProps<SVGElement> & TProps_244>;
        attrs: <TProps_245 extends Record<string, unknown>>(callback: (props: TProps_245 & React.SVGProps<SVGElement>) => Record<string, unknown> & React.SVGProps<SVGElement>) => <TResultProps_122 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_122>[]) => FunctionComponent<React.SVGProps<SVGElement> & TProps_245>;
    };
    animateTransform: {
        <TProps_246 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_246>[]): FunctionComponent<React.SVGProps<SVGElement> & TProps_246>;
        attrs: <TProps_247 extends Record<string, unknown>>(callback: (props: TProps_247 & React.SVGProps<SVGElement>) => Record<string, unknown> & React.SVGProps<SVGElement>) => <TResultProps_123 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_123>[]) => FunctionComponent<React.SVGProps<SVGElement> & TProps_247>;
    };
    circle: {
        <TProps_248 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_248>[]): FunctionComponent<React.SVGProps<SVGCircleElement> & TProps_248>;
        attrs: <TProps_249 extends Record<string, unknown>>(callback: (props: TProps_249 & React.SVGProps<SVGCircleElement>) => Record<string, unknown> & React.SVGProps<SVGCircleElement>) => <TResultProps_124 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_124>[]) => FunctionComponent<React.SVGProps<SVGCircleElement> & TProps_249>;
    };
    clipPath: {
        <TProps_250 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_250>[]): FunctionComponent<React.SVGProps<SVGClipPathElement> & TProps_250>;
        attrs: <TProps_251 extends Record<string, unknown>>(callback: (props: TProps_251 & React.SVGProps<SVGClipPathElement>) => Record<string, unknown> & React.SVGProps<SVGClipPathElement>) => <TResultProps_125 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_125>[]) => FunctionComponent<React.SVGProps<SVGClipPathElement> & TProps_251>;
    };
    defs: {
        <TProps_252 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_252>[]): FunctionComponent<React.SVGProps<SVGDefsElement> & TProps_252>;
        attrs: <TProps_253 extends Record<string, unknown>>(callback: (props: TProps_253 & React.SVGProps<SVGDefsElement>) => Record<string, unknown> & React.SVGProps<SVGDefsElement>) => <TResultProps_126 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_126>[]) => FunctionComponent<React.SVGProps<SVGDefsElement> & TProps_253>;
    };
    desc: {
        <TProps_254 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_254>[]): FunctionComponent<React.SVGProps<SVGDescElement> & TProps_254>;
        attrs: <TProps_255 extends Record<string, unknown>>(callback: (props: TProps_255 & React.SVGProps<SVGDescElement>) => Record<string, unknown> & React.SVGProps<SVGDescElement>) => <TResultProps_127 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_127>[]) => FunctionComponent<React.SVGProps<SVGDescElement> & TProps_255>;
    };
    ellipse: {
        <TProps_256 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_256>[]): FunctionComponent<React.SVGProps<SVGEllipseElement> & TProps_256>;
        attrs: <TProps_257 extends Record<string, unknown>>(callback: (props: TProps_257 & React.SVGProps<SVGEllipseElement>) => Record<string, unknown> & React.SVGProps<SVGEllipseElement>) => <TResultProps_128 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_128>[]) => FunctionComponent<React.SVGProps<SVGEllipseElement> & TProps_257>;
    };
    feBlend: {
        <TProps_258 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_258>[]): FunctionComponent<React.SVGProps<SVGFEBlendElement> & TProps_258>;
        attrs: <TProps_259 extends Record<string, unknown>>(callback: (props: TProps_259 & React.SVGProps<SVGFEBlendElement>) => Record<string, unknown> & React.SVGProps<SVGFEBlendElement>) => <TResultProps_129 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_129>[]) => FunctionComponent<React.SVGProps<SVGFEBlendElement> & TProps_259>;
    };
    feColorMatrix: {
        <TProps_260 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_260>[]): FunctionComponent<React.SVGProps<SVGFEColorMatrixElement> & TProps_260>;
        attrs: <TProps_261 extends Record<string, unknown>>(callback: (props: TProps_261 & React.SVGProps<SVGFEColorMatrixElement>) => Record<string, unknown> & React.SVGProps<SVGFEColorMatrixElement>) => <TResultProps_130 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_130>[]) => FunctionComponent<React.SVGProps<SVGFEColorMatrixElement> & TProps_261>;
    };
    feComponentTransfer: {
        <TProps_262 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_262>[]): FunctionComponent<React.SVGProps<SVGFEComponentTransferElement> & TProps_262>;
        attrs: <TProps_263 extends Record<string, unknown>>(callback: (props: TProps_263 & React.SVGProps<SVGFEComponentTransferElement>) => Record<string, unknown> & React.SVGProps<SVGFEComponentTransferElement>) => <TResultProps_131 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_131>[]) => FunctionComponent<React.SVGProps<SVGFEComponentTransferElement> & TProps_263>;
    };
    feComposite: {
        <TProps_264 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_264>[]): FunctionComponent<React.SVGProps<SVGFECompositeElement> & TProps_264>;
        attrs: <TProps_265 extends Record<string, unknown>>(callback: (props: TProps_265 & React.SVGProps<SVGFECompositeElement>) => Record<string, unknown> & React.SVGProps<SVGFECompositeElement>) => <TResultProps_132 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_132>[]) => FunctionComponent<React.SVGProps<SVGFECompositeElement> & TProps_265>;
    };
    feConvolveMatrix: {
        <TProps_266 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_266>[]): FunctionComponent<React.SVGProps<SVGFEConvolveMatrixElement> & TProps_266>;
        attrs: <TProps_267 extends Record<string, unknown>>(callback: (props: TProps_267 & React.SVGProps<SVGFEConvolveMatrixElement>) => Record<string, unknown> & React.SVGProps<SVGFEConvolveMatrixElement>) => <TResultProps_133 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_133>[]) => FunctionComponent<React.SVGProps<SVGFEConvolveMatrixElement> & TProps_267>;
    };
    feDiffuseLighting: {
        <TProps_268 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_268>[]): FunctionComponent<React.SVGProps<SVGFEDiffuseLightingElement> & TProps_268>;
        attrs: <TProps_269 extends Record<string, unknown>>(callback: (props: TProps_269 & React.SVGProps<SVGFEDiffuseLightingElement>) => Record<string, unknown> & React.SVGProps<SVGFEDiffuseLightingElement>) => <TResultProps_134 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_134>[]) => FunctionComponent<React.SVGProps<SVGFEDiffuseLightingElement> & TProps_269>;
    };
    feDisplacementMap: {
        <TProps_270 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_270>[]): FunctionComponent<React.SVGProps<SVGFEDisplacementMapElement> & TProps_270>;
        attrs: <TProps_271 extends Record<string, unknown>>(callback: (props: TProps_271 & React.SVGProps<SVGFEDisplacementMapElement>) => Record<string, unknown> & React.SVGProps<SVGFEDisplacementMapElement>) => <TResultProps_135 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_135>[]) => FunctionComponent<React.SVGProps<SVGFEDisplacementMapElement> & TProps_271>;
    };
    feDistantLight: {
        <TProps_272 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_272>[]): FunctionComponent<React.SVGProps<SVGFEDistantLightElement> & TProps_272>;
        attrs: <TProps_273 extends Record<string, unknown>>(callback: (props: TProps_273 & React.SVGProps<SVGFEDistantLightElement>) => Record<string, unknown> & React.SVGProps<SVGFEDistantLightElement>) => <TResultProps_136 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_136>[]) => FunctionComponent<React.SVGProps<SVGFEDistantLightElement> & TProps_273>;
    };
    feDropShadow: {
        <TProps_274 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_274>[]): FunctionComponent<React.SVGProps<SVGFEDropShadowElement> & TProps_274>;
        attrs: <TProps_275 extends Record<string, unknown>>(callback: (props: TProps_275 & React.SVGProps<SVGFEDropShadowElement>) => Record<string, unknown> & React.SVGProps<SVGFEDropShadowElement>) => <TResultProps_137 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_137>[]) => FunctionComponent<React.SVGProps<SVGFEDropShadowElement> & TProps_275>;
    };
    feFlood: {
        <TProps_276 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_276>[]): FunctionComponent<React.SVGProps<SVGFEFloodElement> & TProps_276>;
        attrs: <TProps_277 extends Record<string, unknown>>(callback: (props: TProps_277 & React.SVGProps<SVGFEFloodElement>) => Record<string, unknown> & React.SVGProps<SVGFEFloodElement>) => <TResultProps_138 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_138>[]) => FunctionComponent<React.SVGProps<SVGFEFloodElement> & TProps_277>;
    };
    feFuncA: {
        <TProps_278 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_278>[]): FunctionComponent<React.SVGProps<SVGFEFuncAElement> & TProps_278>;
        attrs: <TProps_279 extends Record<string, unknown>>(callback: (props: TProps_279 & React.SVGProps<SVGFEFuncAElement>) => Record<string, unknown> & React.SVGProps<SVGFEFuncAElement>) => <TResultProps_139 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_139>[]) => FunctionComponent<React.SVGProps<SVGFEFuncAElement> & TProps_279>;
    };
    feFuncB: {
        <TProps_280 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_280>[]): FunctionComponent<React.SVGProps<SVGFEFuncBElement> & TProps_280>;
        attrs: <TProps_281 extends Record<string, unknown>>(callback: (props: TProps_281 & React.SVGProps<SVGFEFuncBElement>) => Record<string, unknown> & React.SVGProps<SVGFEFuncBElement>) => <TResultProps_140 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_140>[]) => FunctionComponent<React.SVGProps<SVGFEFuncBElement> & TProps_281>;
    };
    feFuncG: {
        <TProps_282 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_282>[]): FunctionComponent<React.SVGProps<SVGFEFuncGElement> & TProps_282>;
        attrs: <TProps_283 extends Record<string, unknown>>(callback: (props: TProps_283 & React.SVGProps<SVGFEFuncGElement>) => Record<string, unknown> & React.SVGProps<SVGFEFuncGElement>) => <TResultProps_141 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_141>[]) => FunctionComponent<React.SVGProps<SVGFEFuncGElement> & TProps_283>;
    };
    feFuncR: {
        <TProps_284 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_284>[]): FunctionComponent<React.SVGProps<SVGFEFuncRElement> & TProps_284>;
        attrs: <TProps_285 extends Record<string, unknown>>(callback: (props: TProps_285 & React.SVGProps<SVGFEFuncRElement>) => Record<string, unknown> & React.SVGProps<SVGFEFuncRElement>) => <TResultProps_142 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_142>[]) => FunctionComponent<React.SVGProps<SVGFEFuncRElement> & TProps_285>;
    };
    feGaussianBlur: {
        <TProps_286 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_286>[]): FunctionComponent<React.SVGProps<SVGFEGaussianBlurElement> & TProps_286>;
        attrs: <TProps_287 extends Record<string, unknown>>(callback: (props: TProps_287 & React.SVGProps<SVGFEGaussianBlurElement>) => Record<string, unknown> & React.SVGProps<SVGFEGaussianBlurElement>) => <TResultProps_143 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_143>[]) => FunctionComponent<React.SVGProps<SVGFEGaussianBlurElement> & TProps_287>;
    };
    feImage: {
        <TProps_288 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_288>[]): FunctionComponent<React.SVGProps<SVGFEImageElement> & TProps_288>;
        attrs: <TProps_289 extends Record<string, unknown>>(callback: (props: TProps_289 & React.SVGProps<SVGFEImageElement>) => Record<string, unknown> & React.SVGProps<SVGFEImageElement>) => <TResultProps_144 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_144>[]) => FunctionComponent<React.SVGProps<SVGFEImageElement> & TProps_289>;
    };
    feMerge: {
        <TProps_290 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_290>[]): FunctionComponent<React.SVGProps<SVGFEMergeElement> & TProps_290>;
        attrs: <TProps_291 extends Record<string, unknown>>(callback: (props: TProps_291 & React.SVGProps<SVGFEMergeElement>) => Record<string, unknown> & React.SVGProps<SVGFEMergeElement>) => <TResultProps_145 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_145>[]) => FunctionComponent<React.SVGProps<SVGFEMergeElement> & TProps_291>;
    };
    feMergeNode: {
        <TProps_292 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_292>[]): FunctionComponent<React.SVGProps<SVGFEMergeNodeElement> & TProps_292>;
        attrs: <TProps_293 extends Record<string, unknown>>(callback: (props: TProps_293 & React.SVGProps<SVGFEMergeNodeElement>) => Record<string, unknown> & React.SVGProps<SVGFEMergeNodeElement>) => <TResultProps_146 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_146>[]) => FunctionComponent<React.SVGProps<SVGFEMergeNodeElement> & TProps_293>;
    };
    feMorphology: {
        <TProps_294 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_294>[]): FunctionComponent<React.SVGProps<SVGFEMorphologyElement> & TProps_294>;
        attrs: <TProps_295 extends Record<string, unknown>>(callback: (props: TProps_295 & React.SVGProps<SVGFEMorphologyElement>) => Record<string, unknown> & React.SVGProps<SVGFEMorphologyElement>) => <TResultProps_147 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_147>[]) => FunctionComponent<React.SVGProps<SVGFEMorphologyElement> & TProps_295>;
    };
    feOffset: {
        <TProps_296 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_296>[]): FunctionComponent<React.SVGProps<SVGFEOffsetElement> & TProps_296>;
        attrs: <TProps_297 extends Record<string, unknown>>(callback: (props: TProps_297 & React.SVGProps<SVGFEOffsetElement>) => Record<string, unknown> & React.SVGProps<SVGFEOffsetElement>) => <TResultProps_148 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_148>[]) => FunctionComponent<React.SVGProps<SVGFEOffsetElement> & TProps_297>;
    };
    fePointLight: {
        <TProps_298 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_298>[]): FunctionComponent<React.SVGProps<SVGFEPointLightElement> & TProps_298>;
        attrs: <TProps_299 extends Record<string, unknown>>(callback: (props: TProps_299 & React.SVGProps<SVGFEPointLightElement>) => Record<string, unknown> & React.SVGProps<SVGFEPointLightElement>) => <TResultProps_149 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_149>[]) => FunctionComponent<React.SVGProps<SVGFEPointLightElement> & TProps_299>;
    };
    feSpecularLighting: {
        <TProps_300 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_300>[]): FunctionComponent<React.SVGProps<SVGFESpecularLightingElement> & TProps_300>;
        attrs: <TProps_301 extends Record<string, unknown>>(callback: (props: TProps_301 & React.SVGProps<SVGFESpecularLightingElement>) => Record<string, unknown> & React.SVGProps<SVGFESpecularLightingElement>) => <TResultProps_150 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_150>[]) => FunctionComponent<React.SVGProps<SVGFESpecularLightingElement> & TProps_301>;
    };
    feSpotLight: {
        <TProps_302 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_302>[]): FunctionComponent<React.SVGProps<SVGFESpotLightElement> & TProps_302>;
        attrs: <TProps_303 extends Record<string, unknown>>(callback: (props: TProps_303 & React.SVGProps<SVGFESpotLightElement>) => Record<string, unknown> & React.SVGProps<SVGFESpotLightElement>) => <TResultProps_151 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_151>[]) => FunctionComponent<React.SVGProps<SVGFESpotLightElement> & TProps_303>;
    };
    feTile: {
        <TProps_304 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_304>[]): FunctionComponent<React.SVGProps<SVGFETileElement> & TProps_304>;
        attrs: <TProps_305 extends Record<string, unknown>>(callback: (props: TProps_305 & React.SVGProps<SVGFETileElement>) => Record<string, unknown> & React.SVGProps<SVGFETileElement>) => <TResultProps_152 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_152>[]) => FunctionComponent<React.SVGProps<SVGFETileElement> & TProps_305>;
    };
    feTurbulence: {
        <TProps_306 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_306>[]): FunctionComponent<React.SVGProps<SVGFETurbulenceElement> & TProps_306>;
        attrs: <TProps_307 extends Record<string, unknown>>(callback: (props: TProps_307 & React.SVGProps<SVGFETurbulenceElement>) => Record<string, unknown> & React.SVGProps<SVGFETurbulenceElement>) => <TResultProps_153 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_153>[]) => FunctionComponent<React.SVGProps<SVGFETurbulenceElement> & TProps_307>;
    };
    filter: {
        <TProps_308 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_308>[]): FunctionComponent<React.SVGProps<SVGFilterElement> & TProps_308>;
        attrs: <TProps_309 extends Record<string, unknown>>(callback: (props: TProps_309 & React.SVGProps<SVGFilterElement>) => Record<string, unknown> & React.SVGProps<SVGFilterElement>) => <TResultProps_154 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_154>[]) => FunctionComponent<React.SVGProps<SVGFilterElement> & TProps_309>;
    };
    foreignObject: {
        <TProps_310 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_310>[]): FunctionComponent<React.SVGProps<SVGForeignObjectElement> & TProps_310>;
        attrs: <TProps_311 extends Record<string, unknown>>(callback: (props: TProps_311 & React.SVGProps<SVGForeignObjectElement>) => Record<string, unknown> & React.SVGProps<SVGForeignObjectElement>) => <TResultProps_155 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_155>[]) => FunctionComponent<React.SVGProps<SVGForeignObjectElement> & TProps_311>;
    };
    g: {
        <TProps_312 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_312>[]): FunctionComponent<React.SVGProps<SVGGElement> & TProps_312>;
        attrs: <TProps_313 extends Record<string, unknown>>(callback: (props: TProps_313 & React.SVGProps<SVGGElement>) => Record<string, unknown> & React.SVGProps<SVGGElement>) => <TResultProps_156 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_156>[]) => FunctionComponent<React.SVGProps<SVGGElement> & TProps_313>;
    };
    image: {
        <TProps_314 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_314>[]): FunctionComponent<React.SVGProps<SVGImageElement> & TProps_314>;
        attrs: <TProps_315 extends Record<string, unknown>>(callback: (props: TProps_315 & React.SVGProps<SVGImageElement>) => Record<string, unknown> & React.SVGProps<SVGImageElement>) => <TResultProps_157 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_157>[]) => FunctionComponent<React.SVGProps<SVGImageElement> & TProps_315>;
    };
    line: {
        <TProps_316 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_316>[]): FunctionComponent<React.SVGLineElementAttributes<SVGLineElement> & TProps_316>;
        attrs: <TProps_317 extends Record<string, unknown>>(callback: (props: TProps_317 & React.SVGLineElementAttributes<SVGLineElement>) => Record<string, unknown> & React.SVGLineElementAttributes<SVGLineElement>) => <TResultProps_158 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_158>[]) => FunctionComponent<React.SVGLineElementAttributes<SVGLineElement> & TProps_317>;
    };
    linearGradient: {
        <TProps_318 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_318>[]): FunctionComponent<React.SVGProps<SVGLinearGradientElement> & TProps_318>;
        attrs: <TProps_319 extends Record<string, unknown>>(callback: (props: TProps_319 & React.SVGProps<SVGLinearGradientElement>) => Record<string, unknown> & React.SVGProps<SVGLinearGradientElement>) => <TResultProps_159 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_159>[]) => FunctionComponent<React.SVGProps<SVGLinearGradientElement> & TProps_319>;
    };
    marker: {
        <TProps_320 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_320>[]): FunctionComponent<React.SVGProps<SVGMarkerElement> & TProps_320>;
        attrs: <TProps_321 extends Record<string, unknown>>(callback: (props: TProps_321 & React.SVGProps<SVGMarkerElement>) => Record<string, unknown> & React.SVGProps<SVGMarkerElement>) => <TResultProps_160 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_160>[]) => FunctionComponent<React.SVGProps<SVGMarkerElement> & TProps_321>;
    };
    mask: {
        <TProps_322 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_322>[]): FunctionComponent<React.SVGProps<SVGMaskElement> & TProps_322>;
        attrs: <TProps_323 extends Record<string, unknown>>(callback: (props: TProps_323 & React.SVGProps<SVGMaskElement>) => Record<string, unknown> & React.SVGProps<SVGMaskElement>) => <TResultProps_161 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_161>[]) => FunctionComponent<React.SVGProps<SVGMaskElement> & TProps_323>;
    };
    metadata: {
        <TProps_324 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_324>[]): FunctionComponent<React.SVGProps<SVGMetadataElement> & TProps_324>;
        attrs: <TProps_325 extends Record<string, unknown>>(callback: (props: TProps_325 & React.SVGProps<SVGMetadataElement>) => Record<string, unknown> & React.SVGProps<SVGMetadataElement>) => <TResultProps_162 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_162>[]) => FunctionComponent<React.SVGProps<SVGMetadataElement> & TProps_325>;
    };
    mpath: {
        <TProps_326 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_326>[]): FunctionComponent<React.SVGProps<SVGElement> & TProps_326>;
        attrs: <TProps_327 extends Record<string, unknown>>(callback: (props: TProps_327 & React.SVGProps<SVGElement>) => Record<string, unknown> & React.SVGProps<SVGElement>) => <TResultProps_163 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_163>[]) => FunctionComponent<React.SVGProps<SVGElement> & TProps_327>;
    };
    path: {
        <TProps_328 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_328>[]): FunctionComponent<React.SVGProps<SVGPathElement> & TProps_328>;
        attrs: <TProps_329 extends Record<string, unknown>>(callback: (props: TProps_329 & React.SVGProps<SVGPathElement>) => Record<string, unknown> & React.SVGProps<SVGPathElement>) => <TResultProps_164 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_164>[]) => FunctionComponent<React.SVGProps<SVGPathElement> & TProps_329>;
    };
    pattern: {
        <TProps_330 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_330>[]): FunctionComponent<React.SVGProps<SVGPatternElement> & TProps_330>;
        attrs: <TProps_331 extends Record<string, unknown>>(callback: (props: TProps_331 & React.SVGProps<SVGPatternElement>) => Record<string, unknown> & React.SVGProps<SVGPatternElement>) => <TResultProps_165 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_165>[]) => FunctionComponent<React.SVGProps<SVGPatternElement> & TProps_331>;
    };
    polygon: {
        <TProps_332 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_332>[]): FunctionComponent<React.SVGProps<SVGPolygonElement> & TProps_332>;
        attrs: <TProps_333 extends Record<string, unknown>>(callback: (props: TProps_333 & React.SVGProps<SVGPolygonElement>) => Record<string, unknown> & React.SVGProps<SVGPolygonElement>) => <TResultProps_166 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_166>[]) => FunctionComponent<React.SVGProps<SVGPolygonElement> & TProps_333>;
    };
    polyline: {
        <TProps_334 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_334>[]): FunctionComponent<React.SVGProps<SVGPolylineElement> & TProps_334>;
        attrs: <TProps_335 extends Record<string, unknown>>(callback: (props: TProps_335 & React.SVGProps<SVGPolylineElement>) => Record<string, unknown> & React.SVGProps<SVGPolylineElement>) => <TResultProps_167 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_167>[]) => FunctionComponent<React.SVGProps<SVGPolylineElement> & TProps_335>;
    };
    radialGradient: {
        <TProps_336 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_336>[]): FunctionComponent<React.SVGProps<SVGRadialGradientElement> & TProps_336>;
        attrs: <TProps_337 extends Record<string, unknown>>(callback: (props: TProps_337 & React.SVGProps<SVGRadialGradientElement>) => Record<string, unknown> & React.SVGProps<SVGRadialGradientElement>) => <TResultProps_168 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_168>[]) => FunctionComponent<React.SVGProps<SVGRadialGradientElement> & TProps_337>;
    };
    rect: {
        <TProps_338 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_338>[]): FunctionComponent<React.SVGProps<SVGRectElement> & TProps_338>;
        attrs: <TProps_339 extends Record<string, unknown>>(callback: (props: TProps_339 & React.SVGProps<SVGRectElement>) => Record<string, unknown> & React.SVGProps<SVGRectElement>) => <TResultProps_169 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_169>[]) => FunctionComponent<React.SVGProps<SVGRectElement> & TProps_339>;
    };
    stop: {
        <TProps_340 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_340>[]): FunctionComponent<React.SVGProps<SVGStopElement> & TProps_340>;
        attrs: <TProps_341 extends Record<string, unknown>>(callback: (props: TProps_341 & React.SVGProps<SVGStopElement>) => Record<string, unknown> & React.SVGProps<SVGStopElement>) => <TResultProps_170 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_170>[]) => FunctionComponent<React.SVGProps<SVGStopElement> & TProps_341>;
    };
    switch: {
        <TProps_342 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_342>[]): FunctionComponent<React.SVGProps<SVGSwitchElement> & TProps_342>;
        attrs: <TProps_343 extends Record<string, unknown>>(callback: (props: TProps_343 & React.SVGProps<SVGSwitchElement>) => Record<string, unknown> & React.SVGProps<SVGSwitchElement>) => <TResultProps_171 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_171>[]) => FunctionComponent<React.SVGProps<SVGSwitchElement> & TProps_343>;
    };
    text: {
        <TProps_344 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_344>[]): FunctionComponent<React.SVGTextElementAttributes<SVGTextElement> & TProps_344>;
        attrs: <TProps_345 extends Record<string, unknown>>(callback: (props: TProps_345 & React.SVGTextElementAttributes<SVGTextElement>) => Record<string, unknown> & React.SVGTextElementAttributes<SVGTextElement>) => <TResultProps_172 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_172>[]) => FunctionComponent<React.SVGTextElementAttributes<SVGTextElement> & TProps_345>;
    };
    textPath: {
        <TProps_346 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_346>[]): FunctionComponent<React.SVGProps<SVGTextPathElement> & TProps_346>;
        attrs: <TProps_347 extends Record<string, unknown>>(callback: (props: TProps_347 & React.SVGProps<SVGTextPathElement>) => Record<string, unknown> & React.SVGProps<SVGTextPathElement>) => <TResultProps_173 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_173>[]) => FunctionComponent<React.SVGProps<SVGTextPathElement> & TProps_347>;
    };
    tspan: {
        <TProps_348 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_348>[]): FunctionComponent<React.SVGProps<SVGTSpanElement> & TProps_348>;
        attrs: <TProps_349 extends Record<string, unknown>>(callback: (props: TProps_349 & React.SVGProps<SVGTSpanElement>) => Record<string, unknown> & React.SVGProps<SVGTSpanElement>) => <TResultProps_174 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_174>[]) => FunctionComponent<React.SVGProps<SVGTSpanElement> & TProps_349>;
    };
    use: {
        <TProps_350 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_350>[]): FunctionComponent<React.SVGProps<SVGUseElement> & TProps_350>;
        attrs: <TProps_351 extends Record<string, unknown>>(callback: (props: TProps_351 & React.SVGProps<SVGUseElement>) => Record<string, unknown> & React.SVGProps<SVGUseElement>) => <TResultProps_175 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_175>[]) => FunctionComponent<React.SVGProps<SVGUseElement> & TProps_351>;
    };
    view: {
        <TProps_352 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps_352>[]): FunctionComponent<React.SVGProps<SVGViewElement> & TProps_352>;
        attrs: <TProps_353 extends Record<string, unknown>>(callback: (props: TProps_353 & React.SVGProps<SVGViewElement>) => Record<string, unknown> & React.SVGProps<SVGViewElement>) => <TResultProps_176 extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TResultProps_176>[]) => FunctionComponent<React.SVGProps<SVGViewElement> & TProps_353>;
    };
};
export {};
//# sourceMappingURL=styled.d.ts.map