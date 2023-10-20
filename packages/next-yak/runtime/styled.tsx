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
  component: ForwardRefRenderFunction<any, TProps>
) => FunctionComponent<TProps> = (component) =>
  Object.assign(React.forwardRef(component), { component }) as any;

/**
 * Attrs can be used to add additional props to a styled component.
 */
type Attrs<TProps, TNew> =
  | ((props: TNew & TProps) => Partial<TNew & TProps>)
  | (TProps & TNew);

/**
 * All valid html tags
 */
type HtmlTags = keyof JSX.IntrinsicElements;

/**
 * Merge two types, but make sure that properties that are present in one of the types
 * are optional in the merged type.
 */

// type Merge<T, U> = Omit<T, keyof U> & U;
type Merge<T, U> = Omit<Partial<T>, keyof U> &
  Omit<Partial<U>, keyof T> &
  Partial<U & T>;

//
// The `styled()` and `styled.` API
//
// The API design is inspired by styled-components:
// https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/constructors/styled.tsx
// https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/models/StyledComponent.ts
//

const StyledFactory = <T,>(Component: HtmlTags | FunctionComponent<T>) =>
  Object.assign(yakStyled(Component), {
    attrs: <TNew,>(attrs?: Attrs<T, TNew>) =>
      yakStyled<T, TNew>(Component, attrs),
  });

const yakStyled = <T, TNew>(
  Component: FunctionComponent<T> | HtmlTags,
  attrs?: Attrs<T, TNew>
) => {
  return <TCSSProps extends Record<string, unknown> = {}>(
    styles: TemplateStringsArray,
    ...values: Array<CSSInterpolation<T & TCSSProps & { theme: YakTheme }>>
  ) => {
    const yak = (props: Merge<T & TCSSProps, TNew>, ref: unknown) => {
      let combinedProps = { ...props, theme: useTheme() };
      if (attrs) {
        const newProps =
          typeof attrs === "function" ? (attrs as Function)(props) : attrs;
        combinedProps = combineProps(props, newProps);
      }

      const runtimeStyles = css(styles, ...values)(combinedProps as any);

      const filteredProps =
        typeof Component === "string"
          ? removePrefixedProperties(combinedProps)
          : combinedProps;

      const mergedProps = {
        ...filteredProps,
        style: {
          ...((combinedProps as { style?: Record<string, unknown> }).style ||
            {}),
          ...runtimeStyles.style,
        },
        className: mergeClassNames(
          (combinedProps as { className?: string }).className,
          runtimeStyles.className as string
        ),
      };

      // if the styled(Component) syntax is used and the component is a yak component
      // we can call the yak function directly to avoid an unnecessary wrapper with an additional
      // forwardRef call
      if (typeof Component !== "string" && "yak" in Component) {
        return (
          Component as typeof Component & {
            yak: FunctionComponent<typeof mergedProps>;
          }
        ).yak(mergedProps, ref);
      }

      // @ts-expect-error too complex
      return <Component ref={ref as any} {...(mergedProps as any)} />;
    };
    return yakForwardRef(yak);
  };
};

/**
 * Type for the proxy object returned by `styled` that allows to
 * access all html tags as properties.
 */
type StyledLiteral<T> = <TCSSProps extends Record<string, unknown> = {}>(
  styles: TemplateStringsArray,
  ...values: Array<CSSInterpolation<T & TCSSProps & { theme: YakTheme }>>
) => FunctionComponent<TCSSProps & T>;

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
      attrs: <TNew extends Record<string, unknown> = {}>(
        attrs: Attrs<JSX.IntrinsicElements[Tag], TNew>
      ) => StyledLiteral<Merge<JSX.IntrinsicElements[Tag], TNew>>;
    };
  },
  {
    get(target, TagName: keyof JSX.IntrinsicElements) {
      return target(TagName);
    },
  }
);

// Remove all entries that start with a $ sign
function removePrefixedProperties<T extends Record<string, unknown>>(obj: T) {
  const result = {} as T;
  for (const key in obj) {
    if (!key.startsWith("$") && key !== "theme") {
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
  }
>(
  props: T,
  newProps: T
) => {
  let combinedProps = {} as T;
  if ("$__attrs" in props) {
    // allow overriding props when attrs was used previously
    combinedProps = {
      ...removeUndefined(newProps),
      ...props,
    };
  } else {
    combinedProps = {
      ...props,
      ...removeUndefined(newProps),
    };
  }

  return {
    ...combinedProps,
    className: mergeClassNames(
      props.className as string,
      newProps.className as string
    ),
    style: { ...(props.style || {}), ...(newProps.style || {}) },
    $__attrs: true,
  };
};
