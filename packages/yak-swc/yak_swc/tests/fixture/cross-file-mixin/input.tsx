import { styled } from "next-yak";
// @ts-ignore
import { fonts } from "./fonts";
// @ts-ignore
import { fancy } from "./fancy";

export const Button = styled.button`
  ${fonts.h1}
`;

export const Button2 = styled.button`
  ${fonts.h1};
`;

export const Button3 = styled.button`
  ${fonts.h1};
  color: green;
`;
export const Button4 = styled.button`
  ${fonts.h1}
  ${fonts.underline};
  color: green;
`;

export const Button5 = styled.button`
  ${fonts.h1};
  ${fancy};
  color: green;
`;