import { it, expect, vi } from "vitest";
import TestRenderer from "react-test-renderer";
import { styled } from "../styled";
import React from "react";
beforeEach(() => {
    vi.spyOn(console, "warn");
});
it("works fine with an empty object", () => {
    const Comp = styled.div.attrs({}) ``;
    expect(TestRenderer.create(React.createElement(Comp, null)).toJSON()).toMatchInlineSnapshot(`
    <div
      className=""
      style={{}}
    />
  `);
});
it("works fine with a function that returns an empty object", () => {
    const Comp = styled.div.attrs(() => ({})) ``;
    expect(TestRenderer.create(React.createElement(Comp, null)).toJSON()).toMatchInlineSnapshot(`
  <div
    className=""
    style={{}}
  />
`);
});
it("pass a simple attr via object", () => {
    const Comp = styled.button.attrs({
        type: "button",
    }) ``;
    expect(TestRenderer.create(React.createElement(Comp, null)).toJSON()).toMatchInlineSnapshot(`
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
    })) ``;
    expect(TestRenderer.create(React.createElement(Comp, null)).toJSON()).toMatchInlineSnapshot(`
    <button
      className=""
      style={{}}
      type="button"
    />
  `);
});
it("pass a React component", () => {
    const ReactComponent = () => React.createElement("p", null, "React Component");
    const Button = ({ component: ChildComponent }) => (React.createElement("button", null,
        React.createElement(ChildComponent, null)));
    const Comp = styled(Button).attrs(() => ({
        component: ReactComponent,
    })) ``;
    expect(TestRenderer.create(React.createElement(Comp, null)).toJSON()).toMatchInlineSnapshot(`
    <button>
      <p>
        React Component
      </p>
    </button>
  `);
});
it("should not call a function passed to attrs as an object value", () => {
    const stub = vi.fn(() => "div");
    const Comp = styled.button.attrs(() => ({
        foo: stub,
    })) ``;
    TestRenderer.create(React.createElement(Comp, null));
    expect(stub).not.toHaveBeenCalled();
});
it("defaultProps are merged into what function attrs receives", () => {
    const Comp = styled.button.attrs((props) => ({
        "data-color": props.color,
    })) ``;
    Comp.defaultProps = {
        color: "red",
    };
    expect(TestRenderer.create(React.createElement(Comp, null)).toJSON()).toMatchInlineSnapshot(`
    <button
      className=""
      color="red"
      data-color="red"
      style={{}}
    />
  `);
});
it("pass props to the attr function", () => {
    const Comp = styled.button.attrs((p) => ({
        type: p.$submit ? "submit" : "button",
    })) ``;
    expect(TestRenderer.create(React.createElement(Comp, null)).toJSON()).toMatchInlineSnapshot(`
    <button
      className=""
      style={{}}
      type="button"
    />
  `);
    expect(TestRenderer.create(React.createElement(Comp, { "$submit": true })).toJSON()).toMatchInlineSnapshot(`
    <button
      className=""
      style={{}}
      type="submit"
    />
  `);
});
it("should replace props with attrs", () => {
    const Comp = styled.button.attrs((p) => ({
        type: p.$submit ? "submit" : "button",
        tabIndex: 0,
    })) ``;
    expect(TestRenderer.create(React.createElement(Comp, null)).toJSON()).toMatchInlineSnapshot(`
    <button
      className=""
      style={{}}
      tabIndex={0}
      type="button"
    />
  `);
    expect(TestRenderer.create(React.createElement(Comp, { type: "reset" })).toJSON())
        .toMatchInlineSnapshot(`
    <button
      className=""
      style={{}}
      tabIndex={0}
      type="button"
    />
  `);
    expect(TestRenderer.create(React.createElement(Comp, { type: "reset", tabIndex: -1 })).toJSON())
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
    })) ``;
    expect(TestRenderer.create(React.createElement(Comp, null)).toJSON()).toMatchInlineSnapshot(`
    <div
      className="meow nya"
      style={{}}
    />
  `);
});
it("should merge className from folded attrs", () => {
    const Inner = styled.div.attrs({ className: "foo" }) ``;
    const Comp = styled(Inner).attrs(() => ({
        className: "meow nya",
    })) ``;
    expect(TestRenderer.create(React.createElement(Comp, { className: "something" })).toJSON())
        .toMatchInlineSnapshot(`
      <div
        className="something meow nya foo"
        style={{}}
      />
    `);
});
it("should merge className even if its a function", () => {
    const Comp = styled.div.attrs((p) => ({
        className: `meow ${p.$purr ? "purr" : "nya"}`,
    })) ``;
    expect(TestRenderer.create(React.createElement(Comp, null)).toJSON()).toMatchInlineSnapshot(`
    <div
      className="meow nya"
      style={{}}
    />
  `);
    expect(TestRenderer.create(React.createElement(Comp, { "$purr": true })).toJSON()).toMatchInlineSnapshot(`
    <div
      className="meow purr"
      style={{}}
    />
  `);
});
it("should merge style", () => {
    const Comp = styled.div.attrs(() => ({
        style: { color: "red", background: "blue" },
    })) ``;
    expect(TestRenderer.create(React.createElement(Comp, { style: { color: "green", borderStyle: "dotted" } })).toJSON()).toMatchInlineSnapshot(`
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
    const Comp = styled.div.attrs(() => ({
        "data-foo": "bar",
        "aria-label": "A simple FooBar",
    })) ``;
    expect(TestRenderer.create(React.createElement(Comp, null)).toJSON()).toMatchInlineSnapshot(`
    <div
      aria-label="A simple FooBar"
      className=""
      data-foo="bar"
      style={{}}
    />
  `);
});
// it("merge attrs", () => {
//   const Comp = styled.button
//     .attrs(() => ({
//       type: "button",
//       tabIndex: 0,
//     }))
//     .attrs(() => ({
//       type: "submit",
//     }))``;
//   expect(TestRenderer.create(<Comp />).toJSON()).toMatchInlineSnapshot();
// });
it("merge attrs when inheriting SC", () => {
    const Parent = styled.button.attrs(() => ({
        type: "button",
        tabIndex: 0,
    })) ``;
    const Child = styled(Parent).attrs(() => ({
        type: "submit",
    })) ``;
    expect(TestRenderer.create(React.createElement(Child, null)).toJSON()).toMatchInlineSnapshot(`
    <button
      className=""
      style={{}}
      tabIndex={0}
      type="submit"
    />
  `);
});
it("pass attrs to style block", () => {
    /* Would be a React Router Link in real life */
    const Comp = styled.a.attrs(() => ({
        href: "#",
        "data-active-class-name": "--is-active",
        // @ts-expect-error
    }))("c1", {
        style: {
            "--testVar": (props) => props["data-active-class-name"] && "c2",
        },
    });
    expect(TestRenderer.create(React.createElement(Comp, null)).toJSON()).toMatchInlineSnapshot(`
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
    })) ``;
    expect(TestRenderer.create(React.createElement(Comp, null)).toJSON()).toMatchInlineSnapshot(`
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
        children: React.createElement("span", null, "Probably a bad idea"),
    })) ``;
    expect(TestRenderer.create(React.createElement(Comp, null)).toJSON()).toMatchInlineSnapshot(`
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
    const X = styled.div ``;
    const Comp = styled.div.attrs(() => ({
        children: React.createElement("span", null, "Amazing"),
    })) ``;
    expect(TestRenderer.create(React.createElement(Comp, null, "Something else")).toJSON())
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
    const Paragraph = styled.p.attrs((p) => ({
        style: {
            ...p.style,
            fontSize: `${p.$fontScale}em`,
        },
    })) ``;
    const Text = (props) => {
        const fontScale = 4;
        return (React.createElement(Paragraph, { "$fontScale": fontScale, ...props }, props.children));
    };
    const BlueText = styled(Text).attrs(() => ({
        style: {
            color: "blue",
        },
    })) ``;
    const rendered = TestRenderer.create(React.createElement(BlueText, null, "Hello"));
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
    const Comp = styled.div `
    color: ${(props) => props.$textColor};
  `;
    const StyledComp = styled(Comp).attrs(() => ({
        $textColor: "red",
    })) ``;
    expect(TestRenderer.create(React.createElement(StyledComp, null)).toJSON()).toMatchInlineSnapshot(`
    <div
      className=""
      style={{}}
    />
  `);
});
it.skip('should apply given "as" prop to the progressive type', () => {
    const Comp = styled.div.attrs({ as: "video" }) ``;
    //@ts-expect-error
    expect(TestRenderer.create(React.createElement(Comp, { loop: true })).toJSON()).toMatchInlineSnapshot(`
    <video
      className=""
      loop={true}
      style={{}}
    />
  `);
});
// our own tests
it("should remap props", () => {
    const Comp = styled.button.attrs((p) => ({
        type: p.$submit ? "submit" : "button",
        $primary: p.primary,
    })) ``;
    expect(TestRenderer.create(React.createElement(Comp, null)).toJSON()).toMatchInlineSnapshot(`
    <button
      className=""
      style={{}}
      type="button"
    />
  `);
    expect(TestRenderer.create(React.createElement(Comp, { primary: true })).toJSON()).toMatchInlineSnapshot(`
    <button
      className=""
      primary={true}
      style={{}}
      type="button"
    />
  `);
    expect(TestRenderer.create(React.createElement(Comp, { "$submit": true })).toJSON()).toMatchInlineSnapshot(`
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
    }) ``;
    expect(TestRenderer.create(React.createElement(Comp, null)).toJSON()).toMatchInlineSnapshot(`
    <h1
      className=""
      style={{}}
    />
  `);
    expect(TestRenderer.create(React.createElement(Comp, { "$primary": true })).toJSON())
        .toMatchInlineSnapshot(`
    <h1
      className=""
      style={{}}
    />
  `);
});
//# sourceMappingURL=attrs.test.js.map