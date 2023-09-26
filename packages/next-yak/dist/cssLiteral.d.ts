type ComponentStyles<TProps extends Record<string, unknown>> = (props: TProps) => {
    className: string;
    style?: {
        [key: string]: string;
    };
};
export type CSSInterpolation<TProps extends Record<string, unknown>> = string | number | undefined | null | false | ComponentStyles<TProps> | ((props: TProps) => CSSInterpolation<TProps>);
type CSSFunction = <TProps extends Record<string, unknown>>(styles: TemplateStringsArray, ...values: CSSInterpolation<TProps>[]) => ComponentStyles<TProps>;
export declare const css: CSSFunction;
export {};
//# sourceMappingURL=cssLiteral.d.ts.map