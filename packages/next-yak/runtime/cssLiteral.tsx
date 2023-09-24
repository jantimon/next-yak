type ComponentStyles<TProps extends Record<string, unknown>> = (
  props: TProps
) => {
  className: string;
  style?: {
    [key: string]: string;
  };
};

export type CSSInterpolation<TProps extends Record<string, unknown>> =
  | string
  | number
  | undefined
  | null
  | false
  | ComponentStyles<TProps>
  | ((props: TProps) => CSSInterpolation<TProps>);

type CSSStyles<TProps extends Record<string, unknown>> = {
  style: { [key: string]: string | ((props: TProps) => string) };
};

type CSSFunction = <TProps extends Record<string, unknown>>(
  styles: TemplateStringsArray,
  ...values: CSSInterpolation<TProps>[]
) => ComponentStyles<TProps>;

const internalImplementation = (
  ...args: Array<string | CSSFunction | CSSStyles<any>>
): ComponentStyles<any> => {
  type PropsToClassNameFn = (props: unknown) => {
    className?: string;
    style?: Record<string, string>;
  };
  const classNames: string[] = [];
  const dynamicCssFunctions: PropsToClassNameFn[] = [];
  const style: Record<string, string> = {};
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (typeof arg === "string") {
      classNames.push(arg);
    } else if (typeof arg === "function") {
      dynamicCssFunctions.push(arg as unknown as PropsToClassNameFn);
    } else if (typeof arg === "object" && "style" in arg) {
      for (const key in arg.style) {
        const value = arg.style[key];
        if (typeof value === "function") {
          dynamicCssFunctions.push((props: unknown) => ({
            style: { [key]: value(props) },
          }));
        } else {
          style[key] = value;
        }
      }
    }
  }

  // Non Dynamic CSS
  if (dynamicCssFunctions.length === 0) {
    const className = classNames.join(" ");
    return () => ({ className, style });
  }

  // Dynamic CSS with runtime logic
  const unwrapProps = (
    props: unknown,
    fn: PropsToClassNameFn,
    classNames: string[],
    style: Record<string, string>
  ) => {
    const result = fn(props);
    if (typeof result === "function") {
      unwrapProps(props, result, classNames, style);
    } else if (typeof result === "object") {
      if ("className" in result && result.className) {
        classNames.push(result.className);
      }
      if ("style" in result && result.style) {
        for (const key in result.style) {
          const value = result.style[key];
          style[key] = value;
        }
      }
    }
  };

  return (props: unknown) => {
    const allClassNames: string[] = [...classNames];
    const allStyles: Record<string, string> = { ...style };
    for (let i = 0; i < dynamicCssFunctions.length; i++) {
      unwrapProps(props, dynamicCssFunctions[i], allClassNames, allStyles);
    }
    return {
      className: allClassNames.join(" "),
      style: allStyles,
    };
  };
};

export const css = internalImplementation as any as CSSFunction;
