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

  const { container } = render(<Component type="password" />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <input
        class="cssClass"
        type="password"
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

it("should set static properties if attrs is set", () => {
  const Component = styled.input.attrs({ type: "password" })();

  const { container } = render(<Component />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <input
        class=""
        type="password"
      />
    </div>
  `);
});

it("should map properties if attrs is set", () => {
  const Component = styled.input.attrs(({ map }) => ({ $testProp: map }))(
    ({ $testProp }) => $testProp && css("look attrs mapping work")
  );

  const { container } = render(<Component map />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <input
        class="look attrs mapping work"
      />
    </div>
  `);
});

it("should not map properties if attrs is not set", () => {
  const Component = styled.input.attrs(({ map }) => ({ $testProp: map }))(
    ({ $testProp }) => $testProp && css("look attrs mapping work")
  );

  const { container } = render(<Component />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <input
        class=""
      />
    </div>
  `);
});

describe("wrapped component", () => {
  it("should override static properties if attrs is set", () => {
    const Component = styled.input.attrs({ type: "password" })();
    const WrappedComponent = styled(Component).attrs({ type: "text" })();

    const { container } = render(<WrappedComponent />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <input
          class=""
          type="text"
        />
      </div>
    `);
  });

  it("should map properties if attrs is set", () => {
    const Component = styled.input.attrs(({ map }) => ({ $testProp: map }))(
      ({ $testProp }) => $testProp && css("look attrs mapping work")
    );
    const WrappedComponent = styled(Component).attrs(({ overrideMap }) => ({
      type: "text",
      map: overrideMap,
    }))();

    const { container } = render(<WrappedComponent overrideMap />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <input
          class="look attrs mapping work"
          type="text"
        />
      </div>
    `);
  });

  it("should not map properties if attrs is not set", () => {
    const Component = styled.input.attrs(({ map }) => ({ $testProp: map }))(
      ({ $testProp }) => $testProp && css("look attrs mapping work")
    );
    const WrappedComponent = styled(Component).attrs(({ overrideMap }) => ({
      type: "text",
      map: overrideMap,
    }))();

    const { container } = render(<WrappedComponent />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <input
          class=""
          type="text"
        />
      </div>
    `);
  });

  it("should override properties of wrapped component if attrs is set", () => {
    const Component = styled.input.attrs({ type: "password" })(
      ({ $testProp }) => $testProp && css("look attrs mapping work")
    );
    const WrappedComponent = styled(Component).attrs({
      type: "text",
      $testProp: true,
    })();

    const { container } = render(<WrappedComponent />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <input
          class="look attrs mapping work"
          type="text"
        />
      </div>
    `);
  });

  it("should override properties of wrapping component if attrs is set", () => {
    const Component = styled.input.attrs(({ map }) => ({ $testProp: map }))(
      ({ $testProp }) => $testProp && css("look attrs mapping work")
    );
    const WrappedComponent = styled(Component).attrs({
      type: "text",
      map: true,
    })();

    const { container } = render(<WrappedComponent />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <input
          class="look attrs mapping work"
          type="text"
        />
      </div>
    `);
  });
});
