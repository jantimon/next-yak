import { styled } from "next-yak";

export default function LogoIcon(props: React.ComponentProps<"svg">) {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 32 28"
      {...props}
      className={props.className}
    >
      <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z" />
      <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z" />
    </Icon>
  );
}

const Icon = styled.svg`
  height: 1rem;
  width: 1rem;
  fill: #000;

  @media (prefers-color-scheme: dark) {
    fill: #fff;
  }
`;
