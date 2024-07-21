import { css, styled } from "next-yak";
import LogoIcon from "./icons/logo";

export default function LogoSquare({ size }: { size?: "sm" | undefined }) {
  return (
    <LogoWrapper $size={size}>
      <LogoIcon />
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div<{ $size?: "sm" | undefined }>`
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: rgb(229 229 229);
  background-color: #ffffff;

  @media (prefers-color-scheme: dark) {
    background-color: rgb(0 0 0);
    border-color: rgb(64 64 64);
  }

  ${({ $size }) =>
    $size === "sm"
      ? css`
          height: 30px;
          width: 30px;
          border-radius: 0.5rem;
          & > svg {
            height: 10px;
            width: 10px;
          }
        `
      : css`
          height: 40px;
          width: 40px;
          border-radius: 0.75rem;
          & > svg {
            height: 16px;
            width: 16px;
}
        `}
`;
