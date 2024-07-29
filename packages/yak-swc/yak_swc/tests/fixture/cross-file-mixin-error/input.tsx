import { styled } from "next-yak";
// @ts-ignore
import { fonts } from "./fonts";

export const Button = styled.button`
  &:hover {
    ${fonts.h1}
  }
`;
