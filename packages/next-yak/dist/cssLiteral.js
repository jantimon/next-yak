const internalImplementation = (...args) => {
    const classNames = [];
    const dynamicCssFunctions = [];
    const style = {};
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (typeof arg === "string") {
            classNames.push(arg);
        }
        else if (typeof arg === "function") {
            dynamicCssFunctions.push(arg);
        }
        else if (typeof arg === "object" && "style" in arg) {
            for (const key in arg.style) {
                const value = arg.style[key];
                if (typeof value === "function") {
                    dynamicCssFunctions.push((props) => ({
                        style: { [key]: String(recursivePropExecution(props, value)) },
                    }));
                }
                else {
                    style[key] = value;
                }
            }
        }
    }
    // Non Dynamic CSS
    if (dynamicCssFunctions.length === 0) {
        const className = classNames.join(" ");
        return () => ({ className, style });
    }
    // Dynamic CSS with runtime logic
    const unwrapProps = (props, fn, classNames, style) => {
        const result = fn(props);
        if (typeof result === "function") {
            unwrapProps(props, result, classNames, style);
        }
        else if (typeof result === "object") {
            if ("className" in result && result.className) {
                classNames.push(result.className);
            }
            if ("style" in result && result.style) {
                for (const key in result.style) {
                    const value = result.style[key];
                    style[key] = value;
                }
            }
        }
    };
    return (props) => {
        const allClassNames = [...classNames];
        const allStyles = { ...style };
        for (let i = 0; i < dynamicCssFunctions.length; i++) {
            unwrapProps(props, dynamicCssFunctions[i], allClassNames, allStyles);
        }
        return {
            className: allClassNames.join(" "),
            style: allStyles,
        };
    };
};
const recursivePropExecution = (props, fn) => {
    const result = fn(props);
    if (typeof result === "function") {
        return recursivePropExecution(props, result);
    }
    if (process.env.NODE_ENV === "development") {
        if (typeof result !== "string" &&
            typeof result !== "number" &&
            !(result instanceof String)) {
            throw new Error(`Dynamic CSS functions must return a string or number but returned ${JSON.stringify(result)}`);
        }
    }
    return result;
};
export const css = internalImplementation;
//# sourceMappingURL=cssLiteral.js.map