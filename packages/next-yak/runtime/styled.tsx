import { FunctionComponent } from "react";
import { css } from "./cssLiteral";
import React from "react";
import { HtmlTags, YakAttributes, YakStyled, YakTemplateString } from "./types";

//
// The `styled()` and `styled.` API
//
// The API design is inspired by styled-components:
// https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/constructors/styled.tsx
// https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/models/StyledComponent.ts
//

function StyledFactory<T>(Component: HtmlTags | FunctionComponent<T>) {
  return Object.assign<YakTemplateString<T>, { attrs: YakAttributes<T> }>(
    (styles, ...values) => {
      const yak = (props: any, ref: unknown) => {
        const runtimeStyles = css(styles, ...values)(props as any);
        const filteredProps =
          typeof Component === "string"
            ? removePrefixedProperties(props)
            : props;
        const mergedProps = {
          ...filteredProps,
          style: { ...(props.style || {}), ...runtimeStyles.style },
          className:
            (props.className ? props.className + " " : "") +
            runtimeStyles.className,
        };
        // if the styled(Component) syntax is used and the component is a yak component
        // we can call the yak function directly to avoid an unnecessary wrapper with an additional
        // forwardRef call
        if (
          typeof Component !== "string" &&
          "yak" in
            (Component as FunctionComponent<any> & {
              yak?: FunctionComponent<any>;
            })
        ) {
          return (
            Component as FunctionComponent<any> & {
              yak: FunctionComponent<any>;
            }
          ).yak(mergedProps, ref);
        }
        // @ts-expect-error
        return <Component ref={ref as any} {...mergedProps} />;
      };
      return Object.assign(React.forwardRef(yak), { yak });
    },
    {
      attrs: (attrsProps) => {
        return (styles, ...values) => {
          return (props) => {
            const newProps =
              typeof attrsProps === "function"
                ? (attrsProps as Function)(props)
                : attrsProps;

            const combinedProps = combineProps(props, newProps);

            const runtimeStyles = css(styles, ...values)(combinedProps);
            const filteredProps =
              typeof Component === "string"
                ? removePrefixedProperties(combinedProps)
                : combinedProps;
            return (
              <Component
                {...filteredProps}
                style={{
                  ...(combinedProps.style || {}),
                  ...runtimeStyles.style,
                }}
                className={mergeClassNames(
                  combinedProps.className as string,
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
