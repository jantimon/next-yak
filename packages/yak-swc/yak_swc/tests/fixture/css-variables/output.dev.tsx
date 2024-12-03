import { styled } from "next-yak/internal";
import "./input.yak.module.css!=!./input?./input.yak.module.css";
export const ThemedButton = /*YAK Extracted CSS:
// cssmodules-pure-ignore
:global(.ThemedButton_m7uBBu) {
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
*/ /*#__PURE__*/ styled.button("ThemedButton_m7uBBu");
export const ThemeProvider = /*YAK Extracted CSS:
// cssmodules-pure-ignore
:global(.ThemeProvider_m7uBBu) {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-size-base: 16px;
}
*/ /*#__PURE__*/ styled.div("ThemeProvider_m7uBBu");
