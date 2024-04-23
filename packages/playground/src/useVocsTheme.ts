import { useEffect, useState } from "react";
import { getStoredTheme } from "./getStoredTheme";

// hack to get the current theme when we don't have access to the theme that is toggled in the vocs button
export const useVocsTheme = () => {
  const [theme, setTheme] = useState(getStoredTheme);

  useEffect(() => {
    const htmlElement = document.documentElement;
    const observer = new MutationObserver(({0: {attributeName}}) => {
      if (attributeName === "class") {
        const darkMode = htmlElement.classList.contains("dark");
        setTheme(darkMode ? "dark" : "light");
      }
    });
    observer.observe(htmlElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return theme;
};