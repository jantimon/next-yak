export const getStoredTheme = ()=> {
    if (typeof window === "undefined") return undefined;
    if (localStorage.getItem("vocs.theme")) {
      const storedTheme = localStorage.getItem("vocs.theme");
      if (storedTheme) return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
}