import { mixin } from "next-yak/static";

export const typography = {
  h1: mixin.css`
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    ${mixin.css`
      letter-spacing: 0.00938em;
    `}
  `,
};
