// @ts-nocheck
// We are testing internal functionality which does not match
// 1:1 the API exposed to the user before compilation.
// Therfefore types are not matching and need to be ignored.
import { render } from "@testing-library/react";
import React from "react";
import { expect, it } from "vitest";
import { YakThemeProvider } from "../context";
import { css } from "../cssLiteral";
import { styled } from "../styled";

it("should render a literal element", () => {
  const Component = styled.input``;

  const { container } = render(<Component />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <input
        class=""
      />
    </div>
  `);
});

it("should render a literal element with styles", () => {
  const Component = styled.input("cssClass");

  const { container } = render(<Component />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <input
        class="cssClass"
      />
    </div>
  `);
});

it("should forward properties", () => {
  const Component = styled.input("cssClass");

  const { container } = render(<Component defaultValue="forwarded" />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <input
        class="cssClass"
        value="forwarded"
      />
    </div>
  `);
});

it("should forward children", () => {
  const Component = styled.div``;

  const { container } = render(
    <Component>
      <button>Click me!</button>
    </Component>,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class=""
      >
        <button>
          Click me!
        </button>
      </div>
    </div>
  `);
});

it("should filter out properties starting with $", () => {
  const Component = styled.input``;

  const { container } = render(<Component $forwardedProp="notForwarded" />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <input
        class=""
      />
    </div>
  `);
});

it("should filter out properties starting with $ when passing to custom", () => {
  let forwardedProps = null;
  const Component = ({ className, style, ...props }) => {
    forwardedProps = props;
    return null;
  };
  const StyledComponent = styled(Component)``;
  const { container } = render(
    <StyledComponent $forwardedProp="notForwarded" />,
  );

  expect(forwardedProps).toEqual({});
});

it("should concatenate classNames", () => {
  const Component = styled.input("className1");

  const { container } = render(<Component className="className2" />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <input
        class="className2 className1"
      />
    </div>
  `);
});

it("should concatenate styles", () => {
  const Component = styled.input``;

  const { container } = render(<Component style={{ color: "red" }} />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <input
        class=""
        style="color: red;"
      />
    </div>
  `);
});

it("should not add class if prop is not set", () => {
  const Component = styled.input(({ testProp }) => testProp && css("test"));

  const { container } = render(<Component />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <input
        class=""
      />
    </div>
  `);
});

it("should add class if prop is set", () => {
  const Component = styled.input(({ $testProp }) => $testProp && css("test"));

  const { container } = render(<Component $testProp />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <input
        class="test"
      />
    </div>
  `);
});

it("should allow falsy values", () => {
  const Component = styled.input(({ $testProp }) => $testProp && css("test"));

  const { container } = render(
    <>
      <Component $testProp={null} />
      <Component $testProp={false} />
      <Component $testProp={undefined} />
    </>,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <input
        class=""
      />
      <input
        class=""
      />
      <input
        class=""
      />
    </div>
  `);
});

it("should execute runtime styles recursively", () => {
  const Component = styled.input<{ $testProp: boolean }>(
    ({ $testProp }) =>
      $testProp &&
      css(
        ({ $testProp }) =>
          $testProp &&
          css(({ $testProp }) => $testProp && css("recursive-test-class")),
      ),
  );

  const { container } = render(<Component $testProp />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <input
        class="recursive-test-class"
      />
    </div>
  `);
});

it("should allow using refs", () => {
  const Component = styled.input();

  let elementFromRef: HTMLInputElement | null = null;
  render(
    <Component
      ref={(element) => {
        elementFromRef = element;
      }}
    />,
  );

  expect(elementFromRef).toBeInstanceOf(HTMLInputElement);
});

it("should allow using nested refs", () => {
  const BaseComponent = styled.input();
  const Component = styled(BaseComponent)();

  let elementFromRef: HTMLInputElement | null = null;
  render(
    <Component
      ref={(element) => {
        elementFromRef = element;
      }}
    />,
  );

  expect(elementFromRef).toBeInstanceOf(HTMLInputElement);
});

it("should remove theme if styled element", () => {
  const Link = styled.a((p) => p && css("test"));

  const { container } = render(
    <YakThemeProvider theme={{ color: "red" }}>
      <Link />
    </YakThemeProvider>,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <a
        class="test"
      />
    </div>
  `);
});

it("should not remove theme if theme is passed to element", () => {
  const ThemePrinter = ({ theme, ...props }: { theme?: unknown }) => (
    <pre {...props}>{JSON.stringify(theme)}</pre>
  );
  const Link = styled(ThemePrinter)((p) => p && css("test"));

  const { container } = render(
    <YakThemeProvider theme={{ color: "red" }}>
      <Link theme={{ anything: "test" }} />
    </YakThemeProvider>,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <pre
        class="test"
      />
    </div>
  `);
});

it("should remove theme on wrapped element", () => {
  const BaseComponent = styled.input((p) => p && css("test"));
  const Component = styled(BaseComponent)((p) => p && css("test-wrapper"));

  const { container } = render(
    <YakThemeProvider theme={{ color: "red" }}>
      <Component />
    </YakThemeProvider>,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <input
        class="test-wrapper test"
      />
    </div>
  `);
});

it("should not remove theme if theme is passed to wrapped element", () => {
  const ThemePrinter = ({ theme, ...props }: { theme?: unknown }) => (
    <pre {...props}>{JSON.stringify(theme)}</pre>
  );

  const BaseComponent = styled(ThemePrinter)((p) => p && css("test"));
  const Component = styled(BaseComponent)((p) => p && css("test-wrapper"));

  const { container } = render(
    <YakThemeProvider theme={{ color: "red" }}>
      <Component theme={{ anything: "test" }} />
    </YakThemeProvider>,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <pre
        class="test-wrapper test"
      />
    </div>
  `);
});
