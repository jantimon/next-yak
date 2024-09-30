import React, { FunctionComponent } from "react";
import TestRenderer from "react-test-renderer";
import { beforeEach, expect, it, vi } from "vitest";
import { YakThemeProvider } from "../context";
import { styled } from "../styled";

beforeEach(() => {
  vi.spyOn(console, "warn");
});

type DataAttributes = { [key: `data-${string}`]: any };

it("works fine with an empty object", () => {
  const Comp = styled.div.attrs({})``;
  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <div
      style={{}}
    />
  `);
});

it("works fine with a function that returns an empty object", () => {
  const Comp = styled.div.attrs(() => ({}))``;
  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <div
      style={{}}
    />
  `);
});

it("pass a simple attr via object", () => {
  const Comp = styled.button.attrs({
    type: "button",
  })``;
  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <button
      style={{}}
      type="button"
    />
  `);
});

it("pass a simple attr via function with object return", () => {
  const Comp = styled.button.attrs(() => ({
    type: "button",
  }))``;
  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <button
      style={{}}
      type="button"
    />
  `);
});

it("pass a React component", () => {
  const ReactComponent: FunctionComponent = () => <p>React Component</p>;

  type ButtonProps = {
    component: FunctionComponent;
  };

  const Button = ({ component: ChildComponent }: ButtonProps) => (
    <button>
      <ChildComponent />
    </button>
  );

  const Comp = styled(Button).attrs<Partial<ButtonProps>>(() => ({
    component: ReactComponent,
  }))``;

  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <button>
      <p>
        React Component
      </p>
    </button>
  `);
});

it("should not call a function passed to attrs as an object value", () => {
  const stub = vi.fn(() => "div");

  const Comp = styled.button.attrs<{ foo?: typeof stub }>(() => ({
    foo: stub,
  }))``;

  TestRenderer.create(<Comp />);

  expect(stub).not.toHaveBeenCalled();
});

it("defaultProps are merged into what function attrs receives", () => {
  const Comp = styled.button.attrs<DataAttributes>((props) => ({
    "data-color": props.color,
  }))``;

  Comp.defaultProps = {
    color: "red",
  };

  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <button
      color="red"
      data-color="red"
      style={{}}
    />
  `);
});

it("pass props to the attr function", () => {
  const Comp = styled.button.attrs<{ $submit?: boolean }>((p) => ({
    type: p.$submit ? "submit" : "button",
  }))``;

  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <button
      style={{}}
      type="button"
    />
  `);
  expect(TestRenderer.create(<Comp $submit />).toJSON()).toMatchInlineSnapshot(
    `
    <button
      style={{}}
      type="submit"
    />
  `,
  );
});

it("should replace props with attrs", () => {
  const Comp = styled.button.attrs<{ $submit?: boolean }>((p) => ({
    type: p.$submit ? "submit" : "button",
    tabIndex: 0,
  }))``;

  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <button
      style={{}}
      tabIndex={0}
      type="button"
    />
  `);
  expect(TestRenderer.create(<Comp type="reset" />).toJSON())
    .toMatchInlineSnapshot(`
      <button
        style={{}}
        tabIndex={0}
        type="button"
      />
    `);
  expect(TestRenderer.create(<Comp type="reset" tabIndex={-1} />).toJSON())
    .toMatchInlineSnapshot(`
      <button
        style={{}}
        tabIndex={0}
        type="button"
      />
    `);
});

it("should merge className", () => {
  const Comp = styled.div.attrs(() => ({
    className: "meow nya",
  }))``;

  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <div
      className="meow nya"
      style={{}}
    />
  `);
});

it("should merge className from folded attrs", () => {
  const Inner = styled.div.attrs({ className: "foo" })``;

  const Comp = styled(Inner).attrs(() => ({
    className: "meow nya",
  }))``;

  expect(TestRenderer.create(<Comp className="something" />).toJSON())
    .toMatchInlineSnapshot(`
      <div
        className="something foo meow nya"
        style={{}}
      />
    `);
});

it("should merge className even if its a function", () => {
  const Comp = styled.div.attrs<{ $purr?: boolean }>((p) => ({
    className: `meow ${p.$purr ? "purr" : "nya"}`,
  }))``;

  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <div
      className="meow nya"
      style={{}}
    />
  `);
  expect(TestRenderer.create(<Comp $purr />).toJSON()).toMatchInlineSnapshot(`
    <div
      className="meow purr"
      style={{}}
    />
  `);
});

it("should merge style", () => {
  const Comp = styled.div.attrs(() => ({
    style: { color: "red", background: "blue" },
  }))``;

  expect(
    TestRenderer.create(
      <Comp style={{ color: "green", borderStyle: "dotted" }} />,
    ).toJSON(),
  ).toMatchInlineSnapshot(`
    <div
      style={
        {
          "background": "blue",
          "borderStyle": "dotted",
          "color": "red",
        }
      }
    />
  `);
});

it("should work with data and aria attributes", () => {
  const Comp = styled.div.attrs<DataAttributes>(() => ({
    "data-foo": "bar",
    "aria-label": "A simple FooBar",
  }))``;
  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <div
      aria-label="A simple FooBar"
      data-foo="bar"
      style={{}}
    />
  `);
});

it("merge attrs when inheriting SC", () => {
  let i = 0;
  const Parent = styled.button.attrs((p) => {
    expect(i).toEqual(0);
    i++;
    return {
      type: "button",
      tabIndex: 0,
    };
  })``;
  const Child = styled(Parent).attrs((p) => {
    expect(i).toEqual(1);
    i++;
    return {
      type: "submit",
    };
  })``;
  expect(TestRenderer.create(<Child />).toJSON()).toMatchInlineSnapshot(`
    <button
      style={{}}
      tabIndex={0}
      type="submit"
    />
  `);
});

it("pass attrs to style block", () => {
  /* Would be a React Router Link in real life */
  const Comp = styled.a.attrs<DataAttributes>(() => ({
    href: "#",
    "data-active-class-name": "--is-active",
    // @ts-expect-error
  }))("c1", {
    style: {
      "--testVar": (props: any) => props["data-active-class-name"] && "c2",
    },
  });
  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <a
      className="c1"
      data-active-class-name="--is-active"
      href="#"
      style={
        {
          "--testVar": "c2",
        }
      }
    />
  `);
});

it("should pass through children as a normal prop", () => {
  const Comp = styled.div.attrs(() => ({
    children: "Probably a bad idea",
  }))``;
  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <div
      style={{}}
    >
      Probably a bad idea
    </div>
  `);
});

it("should pass through complex children as well", () => {
  const Comp = styled.div.attrs(() => ({
    children: <span>Probably a bad idea</span>,
  }))``;
  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <div
      style={{}}
    >
      <span>
        Probably a bad idea
      </span>
    </div>
  `);
});

it("should override children", () => {
  const X = styled.div``;
  type XProps = React.ComponentProps<typeof X>["children"] & JSX.Element;
  const Comp = styled.div.attrs(() => ({
    children: <span>Amazing</span>,
  }))``;
  expect(TestRenderer.create(<Comp>Something else</Comp>).toJSON())
    .toMatchInlineSnapshot(`
      <div
        style={{}}
      >
        <span>
          Amazing
        </span>
      </div>
    `);
});

it('should shallow merge "style" prop + attr instead of overwriting', () => {
  const Paragraph = styled.p.attrs<{ $fontScale?: number }>((p) => ({
    style: {
      ...p.style,
      fontSize: `${p.$fontScale}em`,
    },
  }))<{ $fontScale: number }>``;

  const Text: FunctionComponent<
    Partial<React.ComponentProps<typeof Paragraph>>
  > = (props) => {
    const fontScale = 4;

    return (
      <Paragraph $fontScale={fontScale} {...props}>
        {props.children}
      </Paragraph>
    );
  };

  const BlueText = styled(Text).attrs(() => ({
    style: {
      color: "blue",
    },
  }))``;

  const rendered = TestRenderer.create(<BlueText>Hello</BlueText>);

  expect(rendered.toJSON()).toMatchInlineSnapshot(`
    <p
      style={
        {
          "color": "blue",
          "fontSize": "4em",
        }
      }
    >
      Hello
    </p>
  `);
});

it("does not pass transient props to HTML element", () => {
  type CompProps = { $textColor: string };

  const Comp = styled.div<CompProps>`
    color: ${(props) => props.$textColor};
  `;

  const StyledComp = styled(Comp).attrs<Partial<CompProps>>(() => ({
    $textColor: "red",
  }))``;

  expect(TestRenderer.create(<StyledComp />).toJSON()).toMatchInlineSnapshot(`
    <div
      style={{}}
    />
  `);
});

it.skip('should apply given "as" prop to the progressive type', () => {
  const Comp = styled.div.attrs<{ as?: any }>({ as: "video" as const })``;

  //@ts-expect-error
  expect(TestRenderer.create(<Comp loop />).toJSON()).toMatchInlineSnapshot(`
    <video
      className=""
      loop={true}
      style={{}}
    />
  `);
});

// our own tests
it("should remap props", () => {
  const Comp = styled.button.attrs<{ primary?: boolean; $submit?: boolean }>(
    (p) => ({
      type: p.$submit ? "submit" : "button",
      $primary: p.primary,
    }),
  )<{ $primary?: boolean }>``;

  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <button
      style={{}}
      type="button"
    />
  `);
  expect(TestRenderer.create(<Comp primary />).toJSON()).toMatchInlineSnapshot(`
    <button
      primary={true}
      style={{}}
      type="button"
    />
  `);

  expect(TestRenderer.create(<Comp $submit />).toJSON()).toMatchInlineSnapshot(`
    <button
      style={{}}
      type="submit"
    />
  `);
});

it("should have optional attrs props as component interface", () => {
  const Comp = styled.h1.attrs<{ $primary?: boolean }>({
    $primary: true,
  })``;

  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <h1
      style={{}}
    />
  `);

  expect(TestRenderer.create(<Comp $primary />).toJSON())
    .toMatchInlineSnapshot(`
      <h1
        style={{}}
      />
    `);
});

it("should have access to theme", () => {
  const ThemePrinter = ({ theme, ...props }: { theme?: unknown }) => (
    <pre {...props}>{JSON.stringify(theme)}</pre>
  );
  const Comp = styled(ThemePrinter).attrs<DataAttributes>((p) => ({
    "data-color": (p.theme as { color: string }).color,
  }))``;

  expect(
    TestRenderer.create(
      <YakThemeProvider theme={{ color: "red" }}>
        <Comp />
      </YakThemeProvider>,
    ).toJSON(),
  ).toMatchInlineSnapshot(`
    <pre
      data-color="red"
      style={{}}
    />
  `);
});

it("should pass theme if theme is overwritten", () => {
  const ThemePrinter = ({ theme, ...props }: { theme?: unknown }) => (
    <pre {...props}>{JSON.stringify(theme)}</pre>
  );
  const Comp = styled(ThemePrinter).attrs({
    theme: { color: "blue" },
  })``;

  expect(
    TestRenderer.create(
      <YakThemeProvider theme={{ color: "red" }}>
        <Comp />
      </YakThemeProvider>,
    ).toJSON(),
  ).toMatchInlineSnapshot(`
    <pre
      style={{}}
    >
      {"color":"blue"}
    </pre>
  `);
});

it("should allow delete a prop", () => {
  const Comp = styled.h1.attrs<{ primary?: boolean }>({
    primary: undefined,
  })``;

  expect(TestRenderer.create(<Comp primary />).toJSON()).toMatchInlineSnapshot(`
    <h1
      style={{}}
    />
  `);
});

it("should allow rename a prop", () => {
  const Comp = styled.h1.attrs<{ primary?: boolean }>((p) => ({
    ...p,
    primary: undefined,
    $primary: p.primary,
  }))``;

  expect(TestRenderer.create(<Comp primary />).toJSON()).toMatchInlineSnapshot(`
    <h1
      style={{}}
    />
  `);
});

it("should allow rename a prop", () => {
  const Child = styled.h1.attrs<{ primary?: boolean }>((p) => {
    // expect(p.primary).toBe(1);
    return {
      ...p,
      primary: undefined,
      $primary: p.primary,
    };
  })``;
  const Comp = styled(Child).attrs<{ primary?: boolean }>((p) => {
    // expect(p.primary).toBe(2);
    return {};
  })``;

  expect(TestRenderer.create(<Comp primary />).toJSON()).toMatchInlineSnapshot(`
    <h1
      style={{}}
    />
  `);
});
