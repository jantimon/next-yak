import { ForwardRefRenderFunction, FunctionComponent } from "react";
import { CSSInterpolation, css } from "./cssLiteral.js";
import React from "react";

// the following export is not relative as "next-yak/context"
// links to one file for react server components and
// to another file for classic react components
import { useTheme } from "next-yak/context";
import type { YakTheme } from "./context/index.d.ts";

/**
 * Hack to hide .yak from the type definition and to deal with ExoticComponents
 */
const yakForwardRef: <TProps>(
  component: ForwardRefRenderFunction<any, TProps>,
) => FunctionComponent<TProps> & {
  // type only identifier to allow targeting components
  // e.g. styled.svg`${Button}:hover & { fill: red; }`
  // warning: `__yak` is undefined during runtime
  __yak: true;
} = (component) =>
  Object.assign(React.forwardRef(component), { component }) as any;

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
 * The attrs function allows to add additional props to a styled component.
 * The props can be specified as an object or as a function that receives the
 * current props as argument.
 */
type Attrs<
  TBaseProps,
  TIn extends object = {},
  TOut extends AttrsMerged<TBaseProps, TIn> = AttrsMerged<TBaseProps, TIn>,
> =
  | Partial<TOut>
  | ((p: Substitute<TBaseProps & { theme: YakTheme }, TIn>) => Partial<TOut>);

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

const yakStyled = <
  T,
  TAttrsIn extends object = {},
  TAttrsOut extends AttrsMerged<T, TAttrsIn> = AttrsMerged<T, TAttrsIn>,
>(
  Component: FunctionComponent<T> | HtmlTags,
  attrs?: Attrs<T, TAttrsIn, TAttrsOut>,
) => {
  return <TCSSProps extends object = {}>(
    styles: TemplateStringsArray,
    ...values: Array<CSSInterpolation<T & TCSSProps & { theme: YakTheme }>>
  ) => {
    const getRuntimeStyles = css(styles, ...values);
    const processAttrs = (props: Substitute<TCSSProps & T, TAttrsIn>) =>
      combineProps(
        props,
        typeof attrs === "function" ? (attrs as Function)(props) : attrs,
      );
    const yak = (props: Substitute<TCSSProps & T, TAttrsIn>, ref: unknown) => {
      // if the css component does not require arguments
      // it can be call without arguments and skip calling useTheme()
      //
      // `__yak` is NOT against the rule of hooks as
      // getRuntimeStyles is a constant defined outside of the component
      //
      // for example
      //
      // const Button = styled.button`color: red;`
      //       ^ does not need to have access to theme
      //
      // const Button = styled.button`${({ theme }) => css`color: ${theme.color};`}`
      //       ^ must be have acces to theme
      const theme = attrs || getRuntimeStyles.length ? useTheme() : undefined;
      /** The combined props are passed into the styled`` literal functions */
      const combinedProps: Substitute<TCSSProps & T, TAttrsIn> = processAttrs({
        theme,
        ...props,
      } as Substitute<TCSSProps & T, TAttrsIn>);
      // execute all functions inside the style literal
      // e.g. styled.button`color: ${props => props.color};`
      const runtimeStyles = getRuntimeStyles(combinedProps as any);

      // delete the yak theme from the props
      // this must happen after the runtimeStyles are calculated
      // prevents passing the theme prop to the DOM element of a styled component
      const { theme: themeAfterAttr, ...combinedPropsWithoutTheme } =
        combinedProps as { theme?: unknown };

      // remove all props that start with a $ sign for string components e.g. "button" or "div"
      // so that they are not passed to the DOM element
      const filteredProps =
        typeof Component === "string"
          ? removePrefixedProperties(combinedPropsWithoutTheme)
          : themeAfterAttr === theme
          ? combinedPropsWithoutTheme
          : combinedProps;

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
      if (typeof Component !== "string" && "yak" in Component) {
        return (
          Component as typeof Component & {
            yak: FunctionComponent<typeof filteredProps>;
          }
        ).yak(filteredProps, ref);
      }

      (filteredProps as { ref?: unknown }).ref = ref;
      return <Component {...(filteredProps as any)} />;
    };
    return yakForwardRef(yak);
  };
};

/**
 * Type for the proxy object returned by `styled` that allows to
 * access all html tags as properties.
 */
type StyledLiteral<T> = <TCSSProps = {}>(
  styles: TemplateStringsArray,
  ...values: Array<CSSInterpolation<T & TCSSProps & { theme: YakTheme }>>
) => FunctionComponent<TCSSProps & T> & {
  // type only identifier to allow targeting components
  // e.g. styled.svg`${Button}:hover & { fill: red; }`
  // warning: this is undefined during runtime
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
function removePrefixedProperties<T extends Record<string, unknown>>(obj: T) {
  const result = {} as T;
  for (const key in obj) {
    if (!key.startsWith("$")) {
      result[key] = obj[key];
    }
  }
  return result;
}

const mergeClassNames = (a?: string, b?: string) => {
  if (!a) return b;
  if (!b) return a;
  return a + " " + b;
};

const removeUndefined = <T,>(obj: T) => {
  const result = {} as T;
  for (const key in obj) {
    if (obj[key] !== undefined) {
      result[key] = obj[key];
    }
  }
  return result;
};

const combineProps = <
  T extends {
    className?: string;
    style?: React.CSSProperties;
  },
>(
  props: T,
  newProps: T,
) => {
  if (!newProps) return props;
  const combinedProps: T =
    "$__attrs" in props
      ? // allow overriding props when attrs was used previously
        {
          ...removeUndefined(newProps),
          ...props,
        }
      : {
          ...props,
          ...removeUndefined(newProps),
        };
  return {
    ...combinedProps,
    className: mergeClassNames(
      props.className as string,
      newProps.className as string,
    ),
    style: { ...(props.style || {}), ...(newProps.style || {}) },
    $__attrs: true,
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
