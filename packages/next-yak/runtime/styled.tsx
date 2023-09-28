import { FunctionComponent } from "react";
import { CSSInterpolation, css } from "./cssLiteral";
import React from "react";

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
): {
  attrs: <TProps extends Record<string, unknown>>(
    attrsProps:
      | ((
          props: TProps & JSX.IntrinsicElements[THtmlTag]
        ) => Record<string, unknown> & JSX.IntrinsicElements[THtmlTag])
      | (Record<string, unknown> & JSX.IntrinsicElements[THtmlTag])
  ) => <TResultProps extends Record<string, unknown>>(
    styles: TemplateStringsArray,
    ...values: CSSInterpolation<TResultProps>[]
  ) => FunctionComponent<JSX.IntrinsicElements[THtmlTag] & TProps>;

  <TProps extends Record<string, unknown>>(
    styles: TemplateStringsArray,
    ...values: CSSInterpolation<TProps>[]
  ): FunctionComponent<JSX.IntrinsicElements[THtmlTag] & TProps>;
};

function StyledFactory(Component: string | FunctionComponent<any>) {
  const C = <TProps extends Record<string, unknown>>(
    styles: TemplateStringsArray,
    ...values: CSSInterpolation<TProps>[]
  ) => {
    return (props: TProps) => {
      const runtimeStyles = css(styles, ...values)(props as any);
      const filteredProps =
        typeof Component === "string" ? removePrefixedProperties(props) : props;
      return (
        <Component
          {...filteredProps}
          style={{ ...(props.style || {}), ...runtimeStyles.style }}
          className={
            (props.className ? props.className + " " : "") +
            runtimeStyles.className
          }
        />
      );
    };
  };

  const attrs = (attrsProps: any) => {
    return <TProps extends Record<string, unknown>>(
      styles: TemplateStringsArray,
      ...values: CSSInterpolation<TProps>[]
    ) => {
      return (_props: TProps) => {
        const newProps =
          typeof attrsProps === "function"
            ? attrsProps(_props as any)
            : attrsProps;
        const props = {
          ...newProps,
          children: _props.children,
          className: _props.className,
          style: _props.style,
        };
        const runtimeStyles = css(styles, ...values)(props as any);
        const filteredProps =
          typeof Component === "string"
            ? removePrefixedProperties(props)
            : props;
        return (
          <Component
            {...filteredProps}
            style={{ ...(props.style || {}), ...runtimeStyles.style }}
            className={
              (props.className ? props.className + " " : "") +
              runtimeStyles.className
            }
          />
        );
      };
    };
  };

  C.attrs = attrs;
  return C;
}

type StyledComponent = <TBaseProps extends {}>(
  Component: FunctionComponent<TBaseProps>
) => {
  attrs: <TProps extends Record<string, unknown>>(
    attrsProps:
      | ((props: TProps & TBaseProps) => Record<string, unknown> & TBaseProps)
      | (Record<string, unknown> & TBaseProps)
  ) => <TResultProps extends Record<string, unknown>>(
    styles: TemplateStringsArray,
    ...values: CSSInterpolation<TResultProps>[]
  ) => FunctionComponent<TBaseProps & TProps>;
  <TProps extends {}>(
    styles: TemplateStringsArray,
    ...values: CSSInterpolation<TProps>[]
  ): FunctionComponent<TBaseProps & TProps>;
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
}) as unknown as StyledComponent & {
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
