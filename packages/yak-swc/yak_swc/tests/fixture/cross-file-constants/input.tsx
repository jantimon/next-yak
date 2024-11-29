import { styled } from "next-yak";
// @ts-ignore
import { colors } from "./colorDefinitions";
// @ts-ignore
import { fonts } from "./fontDefinitions";
// @ts-ignore
import { sizes } from "./sizeDefinitions";

export const Button = styled.button`
  font-size: ${fonts.sm};
  color: ${colors.dark.primary};
  border-color: ${colors.shadows.dark.primary};
  background-color: ${colors.light["full opacity"]};
  height: ${sizes[0]};
`;