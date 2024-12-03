import { styled } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
export const ThemedButton = /*YAK Extracted CSS:
.ThemedButton {
  background-color: var(--primary-color);
  color: #fff;
  font-size: var(--font-size-base);
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: var(--secondary-color);
  }
}
*/ /*#__PURE__*/ styled.button(__styleYak.ThemedButton);
export const ThemeProvider = /*YAK Extracted CSS:
.ThemeProvider {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-size-base: 16px;
}
*/ /*#__PURE__*/ styled.div(__styleYak.ThemeProvider);
