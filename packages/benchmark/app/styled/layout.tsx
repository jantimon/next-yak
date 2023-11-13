import StyledComponentsRegistry from "./registry";

export default function StyledLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
