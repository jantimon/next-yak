import { styled } from "next-yak";
// @ts-ignore
import { colors } from "./colors";
// @ts-ignore
import { fonts } from "./fonts";

export const Button = styled.button`
  font-size: ${fonts.sm};
  color: ${colors.dark.primary};
  background-color: ${colors.light["full opacity"]};
`;