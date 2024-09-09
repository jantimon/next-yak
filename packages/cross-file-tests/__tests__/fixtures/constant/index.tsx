import { styled } from "next-yak";
import { colors, siteMaxWidth } from "./constants";
export const Button = styled.button`
  color: red;
  height: ${siteMaxWidth}px;
  color: ${colors.primary};
  background-color: ${colors.secondary};
`;