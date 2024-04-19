import { useEffect, useState } from "react";

// hack to get the current theme when we don't have access to the theme that is toggled in the vocs button
export const useVocsTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return undefined;
    if (localStorage.getItem("vocs.theme")) {
      const storedTheme = localStorage.getItem("vocs.theme");
      if (storedTheme) return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (!document) return;
    const htmlElement = document.getElementsByTagName("html")?.[0];
    if (htmlElement) {
      const observer = new MutationObserver((e) => {
        if (e[0].attributeName === "class") {
          const darkMode = htmlElement.classList.contains("dark");
          setTheme(darkMode ? "dark" : "light");
        }
      });
      observer.observe(htmlElement, { attributes: true });
      return () => observer.disconnect();
    }
  }, []);

  return theme;
};