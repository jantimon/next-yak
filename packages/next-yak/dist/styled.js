import { css } from "./cssLiteral";
import React from "react";
function StyledFactory(Component) {
    return (styles, ...values) => {
        const yak = (props, ref) => {
            const runtimeStyles = css(styles, ...values)(props);
            const filteredProps = typeof Component === "string" ? removePrefixedProperties(props) : props;
            const mergedProps = {
                ...filteredProps,
                style: { ...(props.style || {}), ...runtimeStyles.style },
                className: (props.className ? props.className + " " : "") +
                    runtimeStyles.className,
            };
            // if the styled(Component) syntax is used and the component is a yak component
            // we can call the yak function directly to avoid an unnecessary wrapper with an additional
            // forwardRef call
            if (typeof Component !== "string" && "yak" in Component) {
                return Component.yak(mergedProps, ref);
            }
            return (React.createElement(Component, { ref: ref, ...mergedProps }));
        };
        return Object.assign(React.forwardRef(yak), { yak });
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