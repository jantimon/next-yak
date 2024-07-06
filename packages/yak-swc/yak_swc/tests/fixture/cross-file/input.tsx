import { styled, css, keyframes } from "next-yak";
// @ts-ignore
import { Icon } from "./Icon";

const primary = "green";
export const Button = styled.button`
  font-size: 1rem;
  color: ${primary};
  ${Icon} {
    color: red;
  }
`;