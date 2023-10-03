import { css } from "./cssLiteral";
import React from "react";
function StyledFactory(Component) {
    return Object.assign((styles, ...values) => {
        return (props) => {
            const runtimeStyles = css(styles, ...values)(props);
            const filteredProps = typeof Component === "string"
                ? removePrefixedProperties(props)
                : props;
            return (React.createElement(Component, { ...filteredProps, style: { ...(props.style || {}), ...runtimeStyles.style }, className: (props.className ? props.className + " " : "") +
                    runtimeStyles.className }));
        };
    }, {
        attrs: (attrsProps) => {
            return (styles, ...values) => {
                return (props) => {
                    const newProps = typeof attrsProps === "function"
                        ? attrsProps(props)
                        : attrsProps;
                    const combinedProps = combineProps(props, newProps);
                    const runtimeStyles = css(styles, ...values)(combinedProps);
                    const filteredProps = typeof Component === "string"
                        ? removePrefixedProperties(combinedProps)
                        : combinedProps;
                    return (React.createElement(Component, { ...filteredProps, style: {
                            ...(combinedProps.style || {}),
                            ...runtimeStyles.style,
                        }, className: mergeClassNames(combinedProps.className, runtimeStyles.className) }));
                };
            };
        },
    });
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
        return target(TagName);
    },
});
// Remove all entries that start with a $ sign
function removePrefixedProperties(obj) {
    const result = {};
    for (const key in obj) {
        if (!key.startsWith("$")) {
            result[key] = obj[key];
        }
    }
    return result;
}
const mergeClassNames = (a, b) => {
    if (!a)
        return b;
    if (!b)
        return a;
    return a + " " + b;
};
const removeUndefined = (obj) => {
    const result = {};
    for (const key in obj) {
        if (obj[key] !== undefined) {
            result[key] = obj[key];
        }
    }
    return result;
};
const combineProps = (props, newProps) => {
    let combinedProps = {};
    if ("$__attrs" in props) {
        // allow overriding props when attrs was used previously
        combinedProps = {
            ...removeUndefined(newProps),
            ...props,
        };
    }
    else {
        combinedProps = {
            ...props,
            ...removeUndefined(newProps),
        };
    }
    return {
        ...combinedProps,
        className: mergeClassNames(props.className, newProps.className),
        style: { ...(props.style || {}), ...(newProps.style || {}) },
        $__attrs: true,
    };
};
//# sourceMappingURL=styled.js.map