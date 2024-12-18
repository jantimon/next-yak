import { styled } from "next-yak/internal";
import "./input.yak.module.css!=!./input?./input.yak.module.css";
const BaseButton = /*YAK Extracted CSS:
:global(.BaseButton_m7uBBu) {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}
*/ /*#__PURE__*/ styled.button("BaseButton_m7uBBu");
export const PrimaryButton = /*YAK Extracted CSS:
:global(.PrimaryButton_m7uBBu) {
  background-color: #007bff;
  color: #fff;
  &:hover {
    background-color: #0056b3;
  }
}
*/ /*#__PURE__*/ styled(BaseButton)("PrimaryButton_m7uBBu");
export const SecondaryButton = /*YAK Extracted CSS:
:global(.SecondaryButton_m7uBBu) {
  background-color: #6c757d;
  color: #fff;
  &:hover {
    background-color: #545b62;
  }
}
*/ /*#__PURE__*/ styled(BaseButton)("SecondaryButton_m7uBBu");
