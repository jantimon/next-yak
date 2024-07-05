// @ts-ignore
import { styled, css, keyframes } from "next-yak";
// @ts-ignore
import { Icon } from "./Icon";

const primary = "green";
const Button = styled.button`
  font-size: 1rem;
  color: ${primary};
  ${Icon} {
    ${({ $active }) =>
      $active &&
      css`
        color: red;
      `}
    padding: 1rem;

    ${({ $active }) =>
      $active
        ? null
        : css`
            ${({ $hover }) =>
              $hover &&
              css`
                color: blue;
              `}
          `}
  }
  ${({ $active, $size }) =>
    $active &&
    css`
      border: ${$size} solid red;
    `}
`;

const Animation = keyframes`
    from { color: red; }
    to { color: blue; }
`;

const Wrapper = styled.div`
  animation: ${Animation} 1s linear infinite;
  &:hover ${Button} {
    opacity: 0.5;
  }
`;
