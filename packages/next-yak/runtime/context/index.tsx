"use client";
//
// This file is the client component (browser & ssr) version of index.server.tsx
//
import React, {
  ReactNode,
  createContext,
  useContext,
} from "react";
import { getYakThemeContext } from "./baseContext.js";

export interface DefaultTheme { }

const YakContext = createContext<DefaultTheme>(getYakThemeContext());

export const useTheme = (): DefaultTheme => useContext(YakContext);
export const YakThemeProvider = ({
  children,
  theme = getYakThemeContext(),
}: {
  children: ReactNode;
  theme?: ReturnType<typeof getYakThemeContext>;
}) => <YakContext.Provider value={theme}>{children}</YakContext.Provider>;
