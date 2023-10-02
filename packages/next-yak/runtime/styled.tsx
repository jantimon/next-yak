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

type Merge<T, U> = Omit<T, keyof U>;

type YakAttributes<T> = <TNew extends Record<string, unknown>>(
  attrArgs: ((props: T & TNew) => TNew & T) | (TNew & T)
) => YakTemplateString<Merge<T, TNew>>;

type YakTemplateString<T> = <TCSSProps extends Record<string, unknown>>(
  styles: TemplateStringsArray,
  ...values: Array<CSSInterpolation<TCSSProps>>
) => FunctionComponent<TCSSProps & T>;

type YakWithAttributes<T> = {
  <TCSSProps extends Record<string, unknown>>(
    styles: TemplateStringsArray,
    ...values: Array<CSSInterpolation<TCSSProps>>
  ): FunctionComponent<TCSSProps & T>;
  attrs: YakAttributes<T>;
};

type YakLiteralComponents = {
  [Tag in HtmlTags]: YakWithAttributes<JSX.IntrinsicElements[Tag]>;
};

type YakStyledComponentFunction = <T extends {}>(
  component: FunctionComponent<T>
) => YakWithAttributes<T>;

type YakStyled = YakStyledComponentFunction & YakLiteralComponents;

function StyledFactory<T>(
  Component: FunctionComponent<T>
): YakWithAttributes<T>;
function StyledFactory<T extends HtmlTags>(
  Component: T
): YakWithAttributes<JSX.IntrinsicElements[T]>;
function StyledFactory<T>(Component: HtmlTags | FunctionComponent<T>) {
  return Object.assign<YakTemplateString<T>, { attrs: YakAttributes<T> }>(
    (styles, ...values) => {
      return (props) => {
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
    },
    {
      attrs: (attrsProps) => {
        return (styles, ...values) => {
          return (_props) => {
            const newProps =
              typeof attrsProps === "function"
                ? //@ts-expect-error
                  attrsProps(_props)
                : attrsProps;
            const props = {
              ..._props,
              ...newProps,
              className: mergeClassNames(
                _props.className as string,
                newProps.className as string
              ),
              style: { ...(_props.style || {}), ...(newProps.style || {}) },
              // children: _props.children,
              // className: _props.className,
              // style: _props.style,
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
                className={mergeClassNames(
                  props.className as string,
                  runtimeStyles.className as string
                )}
              />
            );
          };
        };
      },
    }
  );
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
}) as YakStyled;

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
