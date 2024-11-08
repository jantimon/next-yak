"use client";
import { useTheme } from "next-themes";

export default function YakIcon() {
  const { theme } = useTheme();
  return (
    <img
      src={theme === "dark" ? "/yak-icon-dark.svg" : "/yak-icon-light.svg"}
      alt="Next Yak"
      width="20"
      style={{ width: "20px", height: "20px", aspectRatio: "1" }}
    />
  );
}
