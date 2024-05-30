/**
 * This is an internal helper function to merge relevant props of a native element with a css prop.
 * It's automatically added when using the `css` prop in a JSX element.
 * e.g.:
 * ```tsx
 * <p
 *  className="foo"
 *  css={css`
 *   color: green;
 * `}
 * {...{ style: { padding: "30px" }}}
 * />
 */
export const mergeCssProp = (
  relevantProps: Record<string, unknown>,
  cssProp: {
    className: string;
    style?: Record<string, unknown>;
  },
) => {
  return {
    className: relevantProps.className
      ? relevantProps.className + " " + cssProp.className
      : cssProp.className,
    style: { ...(relevantProps.style ?? {}), ...cssProp.style },
  };
};
