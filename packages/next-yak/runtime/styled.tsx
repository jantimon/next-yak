import { ForwardRefRenderFunction, FunctionComponent } from "react";
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
type PropsOf<TComponent extends FunctionComponent<any>> = TComponent extends FunctionComponent<infer TProps> ? TProps : never;

type StyledLiteral<TBaseProps extends {}> = <TProps extends Record<string, unknown>>(
  styles: TemplateStringsArray,
  ...values: CSSInterpolation<TBaseProps & TProps & { theme: YakTheme }>[]
) => FunctionComponent<TBaseProps & TProps>

/**
 * Hack to hide .yak from the type definition and to deal with ExoticComponents
 */
const yakForwardRef: <TProps>(component: ForwardRefRenderFunction<any, TProps>) => FunctionComponent<TProps> = (
  component
) => Object.assign(React.forwardRef(component), {component}) as any;

const StyledFactory = <TComponent extends HtmlTags | FunctionComponent<any>>(Component: TComponent) => {
  type Props = TComponent extends HtmlTags ? JSX.IntrinsicElements[TComponent] : TComponent extends FunctionComponent ? PropsOf<TComponent> : never;

  const literal: StyledLiteral<Props> = (
    styles,
    ...values
  ) => {
    const yak = (props: Props, ref: unknown) => {
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
        // @ts-expect-error
        <Component
          ref={ref as any}
          {...mergedProps}
        />
      );
    };
    return yakForwardRef(yak);
  }

  return literal;
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
export const styled = new Proxy(StyledFactory as typeof StyledFactory &
  {
    [TagName in HtmlTags]: ReturnType<typeof StyledFactory<TagName>>;
  }, {
  get(target, TagName: keyof JSX.IntrinsicElements) {
    return target(TagName as keyof JSX.IntrinsicElements);
  },
})

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
