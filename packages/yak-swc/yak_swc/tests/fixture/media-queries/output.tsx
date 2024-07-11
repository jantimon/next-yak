import __styleYak from "./input.yak.module.css!=!./input?./input.yak.module.css";
import { styled } from "next-yak/internal";
export const ResponsiveGrid = /*YAK Extracted CSS:
.ResponsiveGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
*/ /*#__PURE__*/ styled.div(__styleYak["ResponsiveGrid"]);
