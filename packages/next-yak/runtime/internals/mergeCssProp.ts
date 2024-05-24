import { CSSProperties } from "react";

export const mergeCssProp = (
  ...args: { className?: string; style?: CSSProperties }[]
) => {
  return args.reduce(
    (acc, { className, style }) => {
      return {
        className: className ? acc.className + " " + className : acc.className,
        style: { ...acc.style, ...style },
      };
    },
    { className: "", style: {} },
  );
};
