import { styled } from "next-yak";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function CloseCart({ className }: { className?: string }) {
  return (
    <IconWrapper>
      <Icon className={className} />
    </IconWrapper>
  );
}

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  height: 2.75rem;
  width: 2.75rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: rgb(229 229 229);
  color: #000000;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  @media (prefers-color-scheme: dark) {
    border-color: rgb(64 64 64);
    color: #ffffff;
  }
`;

const Icon = styled(XMarkIcon)`
  height: 1.5rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    transform: scaleX(1.1) scaleY(1.1);
  }
`;
