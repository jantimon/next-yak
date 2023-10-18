import React, { ReactNode } from 'react';

interface YakTheme {
}
/**
 * Returns the current yak theme context
 *
 * @see https://github.com/jantimon/next-yak/blob/main/packages/next-yak/runtime/context/README.md
 */
declare const useTheme: () => YakTheme;
/**
 * Yak theme context provider
 *
 * @see https://github.com/jantimon/next-yak/blob/main/packages/next-yak/runtime/context/README.md
 */
declare const YakThemeProvider: ({ children, theme, }: {
    children: ReactNode;
    theme?: YakTheme | undefined;
}) => React.JSX.Element;

export { YakTheme, YakThemeProvider, useTheme };
