import { ForwardRefRenderFunction, FunctionComponent } from "react";
import { CSSInterpolation, css } from "./cssLiteral.js";
import React from "react";

// the following export is not relative as "next-yak/context"
// links to one file for react server components and
// to another file for classic react components
import { useTheme } from "next-yak/context";
import type { YakTheme } from "./context/index.d.ts";

/** Symbols */
const noTheme = {};
const yakComponentSymbol = Symbol("yak");

/**
 * Hack to hide {[yakComponentSymbol]:[parentComponent, parentAttributeFunction]}
 * from the type definition and to deal with ExoticComponents
 */
const yakForwardRef: <
  TProps,
  TAttrsIn extends object,
  TAttrsOut extends AttrsMerged<TProps, TAttrsIn>,
>(
  component: ForwardRefRenderFunction<any, TProps>,
  attrsFn?: (props: any) => any,
) => YakComponent<TProps, TAttrsIn, TAttrsOut> = (component, attrsFn) =>
  Object.assign(React.forwardRef(component), {
    [yakComponentSymbol]: [component, attrsFn],
  }) as any;

/**
 * All valid html tags
 */
type HtmlTags = keyof JSX.IntrinsicElements;

/**
 * Return type of the provided props merged with the initial props
 * where the specified props are optional
 */
type AttrsMerged<TBaseProps, TIn extends object = {}> = Substitute<
  TBaseProps & { theme: YakTheme },
  TIn
>;

/**
 * The attrs function allows to add additional props in a function that receives
 * the current props as argument.
 */
type AttrsFunction<
  TBaseProps,
  TIn extends object,
  TOut extends AttrsMerged<TBaseProps, TIn> = AttrsMerged<TBaseProps, TIn>,
> = (p: Substitute<TBaseProps & { theme: YakTheme }, TIn>) => Partial<TOut>;

/**
 * The attrs function allows to add additional props to a styled component.
 * The props can be specified as an object or as a function that receives the
 * current props as argument.
 */
type Attrs<
  TBaseProps,
  TIn extends object = {},
  TOut extends AttrsMerged<TBaseProps, TIn> = AttrsMerged<TBaseProps, TIn>,
> = Partial<TOut> | AttrsFunction<TBaseProps, TIn, TOut>;

//
// The `styled()` and `styled.` API
//
// The API design is inspired by styled-components:
// https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/constructors/styled.tsx
// https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/models/StyledComponent.ts
//
const StyledFactory = <T,>(Component: HtmlTags | FunctionComponent<T>) =>
  Object.assign(yakStyled(Component), {
    attrs: <
      TAttrsIn extends object = {},
      TAttrsOut extends AttrsMerged<T, TAttrsIn> = AttrsMerged<T, TAttrsIn>,
    >(
      attrs: Attrs<T, TAttrsIn, TAttrsOut>,
    ) => yakStyled<T, TAttrsIn, TAttrsOut>(Component, attrs),
  });

/**
 * A yak component has a special symbol attached to it that allows to
 * target the component from a child component and to correctly handle the attrs function (if any).
 * e.g. styled.svg`${Button}:hover & { fill: red; }` or styled(Button)`color: red;`
 * warning: `[yakComponentSymbol]` is undefined during runtime
 */
type YakComponent<
  T,
  TAttrsIn extends object,
  TAttrsOut extends AttrsMerged<T, TAttrsIn>,
> = FunctionComponent<T> & {
  [yakComponentSymbol]: [
    FunctionComponent<T>,
    AttrsFunction<T, TAttrsIn, TAttrsOut>,
  ];
};

const yakStyled = <
  T,
  TAttrsIn extends object = {},
  TAttrsOut extends AttrsMerged<T, TAttrsIn> = AttrsMerged<T, TAttrsIn>,
>(
  Component:
    | FunctionComponent<T>
    | YakComponent<T, TAttrsIn, TAttrsOut>
    | HtmlTags,
  attrs?: Attrs<T, TAttrsIn, TAttrsOut>,
) => {
  const isYakComponent =
    typeof Component !== "string" && yakComponentSymbol in Component;

  // if the component that is wrapped is a yak component, we can extract it to render the underlying component directly
  // and we can also extract the attrs function to merge it with the current attrs function so that the sequence of
  // the attrs functions is preserved
  const [parentYakComponent, parentAttrsFn] = isYakComponent
    ? Component[yakComponentSymbol]
    : [];

  const mergedAttrsFn = buildRuntimeAttrsProcessor(attrs, parentAttrsFn);

  // convenience function to process the attrs in a function regardless of whether the current component has attr or not
  const processAttrs = mergedAttrsFn || (() => null);

  return <TCSSProps extends object = {}>(
    styles: TemplateStringsArray,
    ...values: Array<CSSInterpolation<T & TCSSProps & { theme: YakTheme }>>
  ) => {
    const getRuntimeStyles = css(styles, ...values);
    const yak = (props: Substitute<TCSSProps & T, TAttrsIn>, ref: unknown) => {
      // if the css component does not require arguments
      // it can be called without arguments and we skip calling useTheme()
      //
      // `attrsFn || getRuntimeStyles.length` is NOT against the rule of hooks as
      // getRuntimeStyles and attrsFn are constants defined outside of the component
      //
      // for example
      //
      // const Button = styled.button`color: red;`
      //       ^ does not need to have access to theme, so we skip calling useTheme()
      //
      // const Button = styled.button`${({ theme }) => css`color: ${theme.color};`}`
      //       ^ must be have access to theme, so we call useTheme()
      const theme =
        mergedAttrsFn || getRuntimeStyles.length ? useTheme() : noTheme;

      // execute attrs
      const combinedProps =
        "$__attrs" in props
          ? // if the props already contain the $__attrs key, we assume that the props have already been processed
            // and skip processing the attrs again.
            // e.g. const Child = styled(Parent)`color: red;`
            // We process the attrs once in the child (with all attrs functions merged (including the one from the child))
            // and in the subsequent call in the parent we skip processing the attrs again
            props
          : // overwrite and merge the current props with the processed attrs
            combineProps(
              {
                theme,
                ...(props as {
                  className?: string;
                  style?: React.CSSProperties;
                }),
                // mark the props as processed
                $__attrs: true,
              },
              processAttrs({ theme, ...props } as Substitute<
                T & { theme: YakTheme },
                TAttrsIn
              >),
            );
      // execute all functions inside the style literal
      // e.g. styled.button`color: ${props => props.color};`
      const runtimeStyles = getRuntimeStyles(combinedProps as any);

      // delete the yak theme from the props
      // this must happen after the runtimeStyles are calculated
      // prevents passing the theme prop to the DOM element of a styled component
      const { theme: themeAfterAttr, ...combinedPropsWithoutTheme } =
        combinedProps as { theme?: unknown };
      const propsBeforeFiltering =
        themeAfterAttr === theme ? combinedPropsWithoutTheme : combinedProps;

      // remove all props that start with a $ sign for string components e.g. "button" or "div"
      // so that they are not passed to the DOM element
      const filteredProps = !isYakComponent
        ? removePrefixedAndUndefinedProperties(propsBeforeFiltering)
        : propsBeforeFiltering;

      // yak provides a className and style prop that needs to be merged with the
      // user provided className and style prop
      (filteredProps as { className?: string }).className = mergeClassNames(
        (filteredProps as { className?: string }).className,
        runtimeStyles.className as string,
      );
      (filteredProps as { style?: React.CSSProperties }).style =
        "style" in filteredProps
          ? {
              ...(filteredProps as { style?: React.CSSProperties }).style,
              ...runtimeStyles.style,
            }
          : runtimeStyles.style;
      // if the styled(Component) syntax is used and the component is a yak component
      // we can call the yak function directly to avoid an unnecessary wrapper with an additional
      // forwardRef call
      if (parentYakComponent) {
        return parentYakComponent(filteredProps as T, ref);
      }
      (filteredProps as { ref?: unknown }).ref = ref;
      return <Component {...(filteredProps as any)} />;
    };
    return yakForwardRef(yak, mergedAttrsFn);
  };
};

/**
 * Type for the proxy object returned by `styled` that allows to
 * access all html tags as properties.
 */
type StyledLiteral<T> = <TCSSProps>(
  styles: TemplateStringsArray,
  ...values: Array<
    CSSInterpolation<
      T &
        // don't allow inference from types in the tagged template literal
        // additional benefit is that destruction is now typed and provides hints
        NoInfer<TCSSProps> & { theme: YakTheme }
    >
  >
) => FunctionComponent<TCSSProps & T> & {
  // type only identifier to allow targeting components
  // e.g. styled.svg`${Button}:hover & { fill: red; }`
  // warning: this is undefined during runtime
  [yakComponentSymbol]: [FunctionComponent<unknown>, (p: unknown) => unknown];
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
export const styled = new Proxy(
  StyledFactory as typeof StyledFactory & {
    [Tag in HtmlTags]: StyledLiteral<JSX.IntrinsicElements[Tag]> & {
      attrs: <
        TAttrsIn extends object = {},
        TAttrsOut extends AttrsMerged<
          JSX.IntrinsicElements[Tag],
          TAttrsIn
        > = AttrsMerged<JSX.IntrinsicElements[Tag], TAttrsIn>,
      >(
        attrs: Attrs<JSX.IntrinsicElements[Tag], TAttrsIn, TAttrsOut>,
      ) => StyledLiteral<Substitute<JSX.IntrinsicElements[Tag], TAttrsIn>>;
    };
  },
  {
    get(target, TagName: keyof JSX.IntrinsicElements) {
      return target(TagName);
    },
  },
);

// Remove all entries that start with a $ sign
function removePrefixedAndUndefinedProperties<
  T extends Record<string, unknown>,
>(obj: T) {
  const result = {} as T;
  for (const key in obj) {
    if (!key.startsWith("$")) {
      result[key] = obj[key];
    }
  }
  return result;
}

// util function to merge class names, as they are concatenated with a space
const mergeClassNames = (a?: string, b?: string) => {
  if (!a && !b) return undefined;
  if (!a) return b;
  if (!b) return a;
  return a + " " + b;
};

// util function to merge props and processed props (from attributes)
const combineProps = <
  T extends {
    className?: string;
    style?: React.CSSProperties;
  },
  TOther extends {
    className?: string;
    style?: React.CSSProperties;
  } | null,
>(
  props: T,
  newProps: TOther,
) => {
  if (!newProps) return props;
  return {
    ...props,
    ...newProps,
    className: mergeClassNames(
      props.className as string,
      newProps.className as string,
    ),
    style: { ...(props.style || {}), ...(newProps.style || {}) },
  };
};

// util type to remove properties from an object
type FastOmit<T extends object, U extends string | number | symbol> = {
  [K in keyof T as K extends U ? never : K]: T[K];
};

// util type to merge two objects
// if a property is present in both objects the property from B is used
export type Substitute<A extends object, B extends object> = FastOmit<
  A,
  keyof B
> &
  B;

/**
 * Merges the attrs function of the current component with the attrs function of the parent component
 * in order to preserve the sequence of the attrs functions.
 * Note: In theory, the parentAttrsFn can have different types for TAttrsIn and TAttrsOut
 * but as this is only used internally, we can ignore and simplify this case
 * @param attrs The attrs object or function of the current component (if any)
 * @param parentAttrsFn The attrs function of the parent/wrapped component (if any)
 * @returns A function that receives the props and returns the transformed props
 */
const buildRuntimeAttrsProcessor = <
  T,
  TAttrsIn extends object,
  TAttrsOut extends AttrsMerged<T, TAttrsIn>,
>(
  attrs?: Attrs<T, TAttrsIn, TAttrsOut>,
  parentAttrsFn?: AttrsFunction<T, TAttrsIn, TAttrsOut>,
): AttrsFunction<T, TAttrsIn, TAttrsOut> | undefined => {
  const ownAttrsFn =
    attrs && (typeof attrs === "function" ? attrs : () => attrs);

  if (ownAttrsFn && parentAttrsFn) {
    return (props) => {
      const parentProps = parentAttrsFn(props);

      // overwrite and merge the parent props with the props received from the attrs function
      // after they went through the parent attrs function.
      //
      // This makes sure the linearity of the attrs functions is preserved and all attrs function receive
      // the whole props object calculated from the previous attrs functions
      return combineProps(
        parentProps,
        ownAttrsFn(combineProps(props, parentProps)),
      );
    };
  }

  return ownAttrsFn || parentAttrsFn;
};
