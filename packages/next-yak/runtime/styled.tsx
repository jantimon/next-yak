import React, { type FunctionComponent, forwardRef } from "react";
import { CSSInterpolation, css } from "./cssLiteral.js";

// the following export is not relative as "next-yak/context"
// links to one file for react server components and
// to another file for classic react components
import { useTheme } from "next-yak/context";
import type { YakTheme } from "./context/index.d.ts";

//
// The `styled()` and `styled.` API
//
// The API design is inspired by styled-components:
// https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/constructors/styled.tsx
// https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/models/StyledComponent.ts
//

type HtmlTags = keyof JSX.IntrinsicElements;

function StyledFactory<THtmlTag extends HtmlTags>(
  Component: THtmlTag
): <TProps extends Record<string, unknown>>(
  styles: TemplateStringsArray,
  ...values: CSSInterpolation<TProps & { theme: YakTheme }>[]
) => FunctionComponent<JSX.IntrinsicElements[THtmlTag] & TProps>;
function StyledFactory(Component: string | FunctionComponent<any>) {
  return <TProps extends Record<string, unknown>>(
    styles: TemplateStringsArray,
    ...values: CSSInterpolation<TProps>[]
  ) => {
    const getRuntimeStyles = css(styles, ...values);

    const Yak = (props: TProps, ref: unknown) => {
      const runtimeStyles = getRuntimeStyles(
        // if the css component does not require arguments
        // it can be call without arguments and skip calling useTheme()
        //
        // this is NOT against the rule of hooks as
        // getRuntimeStyles is a constant defined outside of the component
        //
        // for example
        //
        // const Button = styled.button`color: red;`
        //       ^ does not need to have access to theme
        //
        // const Button = styled.button`${({ theme }) => css`color: ${theme.color};`}`
        //       ^ must be have acces to theme
        (getRuntimeStyles.length
          ? { ...props, theme: useTheme() }
          : {}) as TProps
      );
      // props includes all values for the css and for the html
      // however if Component is a string e.g. "div" only the html props should be passed
      // 
      // similar to styled-components 6.0.0 all props that start with a $ sign are removed
      const filteredProps =
        typeof Component === "string" ? removePrefixedProperties(props) : props;
      // merge the users props with the generated runtime className and style
      const mergedProps = {
        ...filteredProps,
        style: { ...props.style as {}, ...runtimeStyles.style },
        className:
          (props.className ? props.className + " " : "") +
          runtimeStyles.className,
      };
      // if the styled(Component) syntax is used and the component is a yak component
      // we can call the yak function directly to avoid an unnecessary wrapper with an additional
      // forwardRef call
      if (
        typeof Component !== "string" &&
        "Yak" in
          (Component as FunctionComponent<any> & {
            Yak?: FunctionComponent<any>;
          })
      ) {
        return (
          Component as FunctionComponent<any> & { Yak: FunctionComponent<any> }
        ).Yak(mergedProps, ref);
      }
      return <Component ref={ref as any} {...mergedProps} />;
    };
    return Object.assign(forwardRef(Yak), { Yak });
  };
}

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
export const styled = new Proxy(StyledFactory, {
  get(target, TagName) {
    if (typeof TagName !== "string") {
      throw new Error("Only string tags are supported");
    }
    return target(TagName as keyof JSX.IntrinsicElements);
  },
}) as (<TBaseProps extends {}>(
  Component: FunctionComponent<TBaseProps>
) => <TProps extends {}>(
  styles: TemplateStringsArray,
  ...values: CSSInterpolation<TProps & { theme: YakTheme }>[]
) => FunctionComponent<TBaseProps & TProps>) & {
  [TagName in HtmlTags]: ReturnType<typeof StyledFactory<TagName>>;
};

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
