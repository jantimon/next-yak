/// @ts-nocheck
// We are testing internal functionality which does not match
// 1:1 the API exposed to the user before compilation.
// Therfefore types are not matching and need to be ignored.

import { it, expect } from "vitest";
import { render } from "@testing-library/react";
import { styled } from "../styled";
import { css } from "../cssLiteral";
import React from "react";

it("should render a literal element", () => {
  const Component = styled.input();

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
  const Component = styled.div();

  const { container } = render(
    <Component>
      <button>Click me!</button>
    </Component>
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
  const Component = styled.input();

  const { container } = render(<Component $forwardedProp="notForwarded" />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <input
        class=""
      />
    </div>
  `);
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
  const Component = styled.input();

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
  const Component = styled.input(
    ({ testProp }) => testProp && css("test"));

  const { container } = render(<>
    <Component testProp={null} />
    <Component testProp={false} />
    <Component testProp={undefined} />
  </>);

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
          $testProp && css(({ $testProp }) => $testProp && css("recursive-test-class"))
      )
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
  render(<Component ref={(element) => {
    elementFromRef = element;
  }} />);

  expect(elementFromRef).toBeInstanceOf(HTMLInputElement);
});

it("should allow using nested refs", () => {
  const BaseComponent = styled.input();
  const Component = styled(BaseComponent)();

  let elementFromRef: HTMLInputElement | null = null;
  render(<Component ref={(element) => {
    elementFromRef = element;
  }} />);

  expect(elementFromRef).toBeInstanceOf(HTMLInputElement);
});
