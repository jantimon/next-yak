import { styled } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
const colors = {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
    light: "#f8f9fa",
    dark: "#343a40"
};
const borderRadius = "4px";
export const Button = /*YAK Extracted CSS:
.Button {
  background-color: #007bff;
  color: #f8f9fa;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: #343a40;
  }
}
*/ /*#__PURE__*/ styled.button(__styleYak.Button);
