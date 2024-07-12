import { styled } from "next-yak/internal";
import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
const BaseButton = /*YAK Extracted CSS:
.BaseButton {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}
*/ /*#__PURE__*/ styled.button(__styleYak.BaseButton);
export const PrimaryButton = styled(BaseButton)`
  background-color: #007bff;
  color: #fff;
  &:hover {
    background-color: #0056b3;
  }
`;
export const SecondaryButton = styled(BaseButton)`
  background-color: #6c757d;
  color: #fff;
  &:hover {
    background-color: #545b62;
  }
`;
