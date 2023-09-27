import { css } from "./cssLiteral";
import React from "react";
function StyledFactory(Component) {
    const C = (styles, ...values) => {
        return (props) => {
            const runtimeStyles = css(styles, ...values)(props);
            const filteredProps = typeof Component === "string" ? removePrefixedProperties(props) : props;
            return (React.createElement(Component, { ...filteredProps, style: { ...(props.style || {}), ...runtimeStyles.style }, className: (props.className ? props.className + " " : "") +
                    runtimeStyles.className }));
        };
    };
    const attrs = (attrsProps) => {
        return (styles, ...values) => {
            return (_props) => {
                const newProps = typeof attrsProps === "function"
                    ? attrsProps(_props)
                    : attrsProps;
                const props = {
                    ...newProps,
                    children: _props.children,
                    className: _props.className,
                    style: _props.style,
                };
                const runtimeStyles = css(styles, ...values)(props);
                const filteredProps = typeof Component === "string"
                    ? removePrefixedProperties(props)
                    : props;
                return (React.createElement(Component, { ...filteredProps, style: { ...(props.style || {}), ...runtimeStyles.style }, className: (props.className ? props.className + " " : "") +
                        runtimeStyles.className }));
            };
        };
    };
    C.attrs = attrs;
    return C;
}
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
//# sourceMappingURL=styled.js.map