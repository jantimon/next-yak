import { styled as StyledFactory } from "../styled.js"
export const styled = new Proxy(
    StyledFactory as any,
    {
      get(target, TagName: keyof JSX.IntrinsicElements) {
        return target(TagName);
      },
    },
  );