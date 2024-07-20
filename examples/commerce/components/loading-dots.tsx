import { css, keyframes, styled } from "next-yak";

const LoadingDots = ({ className }: { className?: string }) => {
  return (
    <span className="mx-2 inline-flex items-center">
      <Dot className={className} />
      <Dot $delayMs={200} className={className} />
      <Dot $delayMs={400} className={className} />
    </span>
  );
};

const blink = keyframes`
  0% { 
    opacity: 0.2 
  }
  20% { 
    opacity: 1 
  }
  100% { 
    opacity: 0.2 
  }
`;

const Dot = styled.span<{ $delayMs?: number }>`
  margin-left: 1px;
  margin-right: 1px;
  display: inline-block;
  height: 0.25rem;
  width: 0.25rem;
  border-radius: 0.375rem;
  animation: 1.4s ${blink} both infinite;
  ${({ $delayMs }) =>
    $delayMs &&
    css`
      animation-delay: ${({ $delayMs }) => `${$delayMs}ms`};
    `}
`;

export default LoadingDots;
