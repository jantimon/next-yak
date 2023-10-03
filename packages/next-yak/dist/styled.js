import { css } from "./cssLiteral";
import React from "react";
function StyledFactory(Component) {
    return (styles, ...values) => {
        return (props) => {
            const runtimeStyles = css(styles, ...values)(props);
            const filteredProps = typeof Component === "string" ? removePrefixedProperties(props) : props;
            return (React.createElement(Component, { ...filteredProps, style: { ...(props.style || {}), ...runtimeStyles.style }, className: (props.className ? props.className + " " : "") +
                    runtimeStyles.className }));
        };
    };
}
;
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
//# sourceMappingURL=styled.js.map