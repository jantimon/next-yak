import React, { ReactNode } from 'react';

interface DefaultTheme {
}
declare const useTheme: () => DefaultTheme;
declare const YakThemeProvider: ({ children, theme, }: {
    children: ReactNode;
    theme?: {} | undefined;
}) => React.JSX.Element;

export { DefaultTheme, YakThemeProvider, useTheme };
