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
                return (_props) => {
                    const newProps = typeof attrsProps === "function"
                        ? //@ts-expect-error
                            attrsProps(_props)
                        : attrsProps;
                    let props = {};
                    if ("$__zzAttrs" in _props) {
                        props = {
                            ...removeUndefined(newProps),
                            ..._props,
                            className: mergeClassNames(_props.className, newProps.className),
                            style: { ...(_props.style || {}), ...(newProps.style || {}) },
                            $__zzAttrs: true,
                        };
                    }
                    else {
                        props = {
                            ..._props,
                            ...removeUndefined(newProps),
                            className: mergeClassNames(_props.className, newProps.className),
                            style: { ...(_props.style || {}), ...(newProps.style || {}) },
                            $__zzAttrs: true,
                        };
                    }
                    const runtimeStyles = css(styles, ...values)(props);
                    const filteredProps = typeof Component === "string"
                        ? removePrefixedProperties(props)
                        : props;
                    return (React.createElement(Component, { ...filteredProps, style: { ...(props.style || {}), ...runtimeStyles.style }, className: mergeClassNames(props.className, runtimeStyles.className) }));
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
//# sourceMappingURL=styled.js.map