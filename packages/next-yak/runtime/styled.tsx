import { FunctionComponent } from "react";
import { CSSInterpolation, css } from "./cssLiteral.js";
import React from "react";

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

function StyledFactory <THtmlTag extends HtmlTags>(Component: THtmlTag): <TProps extends Record<string, unknown>>(
  styles: TemplateStringsArray,
  ...values: CSSInterpolation<TProps & { theme: YakTheme }>[]
) => FunctionComponent<JSX.IntrinsicElements[THtmlTag] & TProps>;
function StyledFactory (Component: string | FunctionComponent<any>) {
  return <TProps extends Record<string, unknown>>(
    styles: TemplateStringsArray,
    ...values: CSSInterpolation<TProps>[]
  ) => {
    const yak = (props: TProps, ref: unknown) => {
      const propsWithTheme = { ...props, theme: useTheme() };
      const runtimeStyles = css(styles, ...values)(propsWithTheme as any);
      const filteredProps =
        typeof Component === "string" ? removePrefixedProperties(props) : props;
      const mergedProps = {
        ...filteredProps,
        style: { ...(props.style || {}), ...runtimeStyles.style },
        className:
          (props.className ? props.className + " " : "") +
          runtimeStyles.className,
      }
      // if the styled(Component) syntax is used and the component is a yak component
      // we can call the yak function directly to avoid an unnecessary wrapper with an additional
      // forwardRef call
      if (typeof Component !== "string" && "yak" in (Component as (FunctionComponent<any> & {yak?: FunctionComponent<any>}))) {
        return (Component as (FunctionComponent<any> & {yak: FunctionComponent<any>})).yak(mergedProps, ref);
      }
      return (
        <Component
          ref={ref as any}
          {...mergedProps}
        />
      );
    };
    return Object.assign(React.forwardRef(yak), {yak});
  };
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
export const styled = new Proxy(StyledFactory, {
  get(target, TagName) {
    if (typeof TagName !== "string") {
      throw new Error("Only string tags are supported");
    }
    return target(TagName as keyof JSX.IntrinsicElements);
  },
}) as (
  <TBaseProps extends {}>(Component: FunctionComponent<TBaseProps>) => <TProps extends {}>(
    styles: TemplateStringsArray,
    ...values: CSSInterpolation<TProps & { theme: YakTheme }>[]
  ) => FunctionComponent<TBaseProps & TProps>
) & {
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
