import { css, StaticCSSProp } from "next-yak";
import React from "react";

declare module "next-yak" {
  export interface YakTheme {
    primaryColor: "red" | "blue";
  }
}

declare module "react" {
  // only add the css prop to html elements
  interface HTMLAttributes<T> {
    css?: StaticCSSProp;
  }
}

const ComponentWithCssProp = () => {
  return <div css={css``} />;
};

const NestedComponentWithCssProp = () => (
  <div>
    <p>
      <div
        css={css`
          padding: 10px;
        `}
      >
        anything
      </div>
    </p>
  </div>
);

const ComponentThatTakesCssProp = (p: { css: StaticCSSProp }) => (
  <div {...p}>anything</div>
);

const ComponentWithCssPropAsProp = () => {
  return <ComponentThatTakesCssProp css={css``} />;
};

const ObjectWithComponent = {
  ComponentThatTakesCssProp,
  nested: {
    ComponentThatTakesCssProp,
  },
};
const ComponentThatUsesObjectWithComponent = () => (
  <ObjectWithComponent.ComponentThatTakesCssProp
    css={css`
      padding: 10px;
    `}
  />
);

const ComponentThatUsesNestedObjectWithComponent = () => (
  <ObjectWithComponent.nested.ComponentThatTakesCssProp
    css={css`
      padding: 10px;
    `}
  />
);

const ComponentWithCSSPropString = () => (
  <div
    // @ts-expect-error shouldn't allow strings as css prop
    css={`
      padding: 10px;
    `}
  >
    anything
  </div>
);

const padding = css`
  padding: 10px;
`;
const ComponentThatReusesCSS = () => <div css={padding} />;

const ComponentWithConditionalCSSProp = () => (
  <div
    css={
      true &&
      css`
        padding: 10px;
      `
    }
  >
    anything
  </div>
);

const ComponentWithConditionalCSSProp2 = () => (
  <div
    css={
      true
        ? padding
        : css`
            padding: 20px;
          `
    }
  />
);

const ComponentWithInterpolatedCSS = () => {
  const x = Math.random() > 0.5;
  return (
    <div
      // @ts-expect-error shouldn't allow interpolated css prop
      css={(x) => css`
        padding: 20px;
      `}
    />
  );
};
