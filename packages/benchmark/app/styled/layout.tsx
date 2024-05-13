import StyledComponentsRegistry from "./registry";

export default function StyledLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
    *, *::before, *::after { box-sizing: border-box; }
    .box:nth-last-child(-n+1) { display: block; }
    :not(:last-child):after { box-sizing: border-box; }
    :not(:last-child):before { box-sizing: border-box; }
    :not(:last-child) + :before { box-sizing: border-box; }
    :not(:last-child) + :after { box-sizing: border-box; }
    :not([foo]):not([bar]) { box-sizing: border-box; }
    `,
        }}
      />
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </>
  );
}
