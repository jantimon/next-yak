import { it, expect, vi } from "vitest";
import TestRenderer from "react-test-renderer";
import { styled } from "../styled";
import React, { FunctionComponent } from "react";

beforeEach(() => {
  vi.spyOn(console, "warn");
});

type Display<T> = {
  [K in keyof T]: T[K] extends unknown ? T[K] : never;
};

type DataAttributes = { [key: `data-${string}`]: any };

it("works fine with an empty object", () => {
  const Comp = styled.div.attrs({})``;
  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <div
      className=""
      style={{}}
    />
  `);
});

it("works fine with a function that returns an empty object", () => {
  const Comp = styled.div.attrs(() => ({}))``;
  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
  <div
    className=""
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
      className=""
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
      className=""
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
      className=""
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
      className=""
      style={{}}
      type="button"
    />
  `);
  expect(TestRenderer.create(<Comp $submit />).toJSON()).toMatchInlineSnapshot(
    `
    <button
      className=""
      style={{}}
      type="submit"
    />
  `
  );
});

it("should replace props with attrs", () => {
  const Comp = styled.button.attrs<{ $submit?: boolean }>((p) => ({
    type: p.$submit ? "submit" : "button",
    tabIndex: 0,
  }))``;

  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <button
      className=""
      style={{}}
      tabIndex={0}
      type="button"
    />
  `);
  expect(TestRenderer.create(<Comp type="reset" />).toJSON())
    .toMatchInlineSnapshot(`
    <button
      className=""
      style={{}}
      tabIndex={0}
      type="button"
    />
  `);
  expect(TestRenderer.create(<Comp type="reset" tabIndex={-1} />).toJSON())
    .toMatchInlineSnapshot(`
    <button
      className=""
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
        className="something meow nya foo"
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
      <Comp style={{ color: "green", borderStyle: "dotted" }} />
    ).toJSON()
  ).toMatchInlineSnapshot(`
    <div
      className=""
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
      className=""
      data-foo="bar"
      style={{}}
    />
  `);
});

it.skip("merge attrs when inheriting SC", () => {
  const Parent = styled.button.attrs(() => ({
    type: "button",
    tabIndex: 0,
  }))``;
  const Child = styled(Parent).attrs(() => ({
    type: "submit",
  }))``;
  expect(TestRenderer.create(<Child />).toJSON()).toMatchInlineSnapshot(`
    <button
      className=""
      style={{}}
      tabIndex={0}
      type="submit"
    />
  `);
});

it.skip("pass attrs to style block", () => {
  /* Would be a React Router Link in real life */
  const Comp = styled.a.attrs<DataAttributes>(() => ({
    href: "#",
    "data-active-class-name": "--is-active",
    // @ts-expect-error
  }))("c1", (props) => props["data-active-class-name"] && "c2");
  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <a
      className="c1 c2"
      data-active-class-name="--is-active"
      href="#"
      style={{}}
    />
  `);
});

it("should pass through children as a normal prop", () => {
  const Comp = styled.div.attrs(() => ({
    children: "Probably a bad idea",
  }))``;
  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <div
      className=""
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
      className=""
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
      className=""
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
        className=""
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

  const StyledComp = styled(Comp).attrs<CompProps>(() => ({
    $textColor: "red",
  }))``;

  expect(TestRenderer.create(<StyledComp />).toJSON()).toMatchInlineSnapshot(`
    <div
      className=""
      style={{}}
    />
  `);
});

it.skip('should apply given "as" prop to the progressive type', () => {
  const Comp = styled.div.attrs({ as: "video" as const })``;

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
    })
  )<{ $primary?: boolean }>``;

  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <button
      className=""
      style={{}}
      type="button"
    />
  `);
  expect(TestRenderer.create(<Comp primary />).toJSON()).toMatchInlineSnapshot(`
    <button
      className=""
      primary={true}
      style={{}}
      type="button"
    />
  `);

  expect(TestRenderer.create(<Comp $submit />).toJSON()).toMatchInlineSnapshot(`
    <button
      className=""
      style={{}}
      type="submit"
    />
  `);
});

it("should have optional attrs props as component interface", () => {
  const Comp = styled.h1.attrs({
    $primary: true,
  })``;

  expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot(`
    <h1
      className=""
      style={{}}
    />
  `);

  expect(TestRenderer.create(<Comp $primary />).toJSON())
    .toMatchInlineSnapshot(`
    <h1
      className=""
      style={{}}
    />
  `);
});
