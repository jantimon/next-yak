import { css, styled, keyframes } from "next-yak";
import React from "react";
import { useRef } from "react";

declare module "next-yak" {
  export interface YakTheme {
    mood: "happy" | "sad";
  }
}

const keyframe = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const mixin = css`
  animation: ${keyframe} 1s;
  color: ${({ theme }) => {
    // verify that theme is typed correctly in styled.tsx
    const mood: "happy" | "sad" = theme.mood;
    return mood === "happy" ? "green" : "red";
  }};
`;

const Button = styled.button`
  color: ${({ theme }) => {
    // verify that theme is typed correctly in styled.tsx
    const mood: "happy" | "sad" = theme.mood;
    return mood === "happy" ? "green" : "red";
  }};
  background-color: ${({ type }) => {
    return type === "submit" ? "gray" : "white";
  }};
  ${mixin}
`;

// Verify that a HTMLButtonElement Ref can be
// used for a styled.button component
const RefTest1 = () => {
  const ref = useRef<HTMLButtonElement>(null);
  return <Button ref={ref}>Hello World</Button>;
};

// Verify that a HTMLButtonElement Ref function can be
// used for a styled.button component
const RefTest2 = () => {
  return (
    <Button
      type="button"
      ref={(element) => {
        const button: HTMLButtonElement = element!;
        console.log(button);
      }}
    >
      Hello World
    </Button>
  );
};

// Verify that a ref is inferred correctly
const Button2 = styled(Button)``;
const RefTest3 = () => {
  const ref = useRef<HTMLButtonElement>(null);
  return <Button2 ref={ref}>Hello World</Button2>;
};

// Verify that a ref function is inferred correctly
const RefTest4 = () => {
  return (
    <Button2
      ref={(element) => {
        const button: HTMLButtonElement = element!;
        console.log(button);
      }}
    >
      Hello World
    </Button2>
  );
};

// Verify that props are merged correctly
const Button3 = styled.button<{ $primary?: boolean }>`
  ${({ $primary }) =>
    $primary &&
    css`
      color: green;
    `}
`;
const Button4 = styled(Button3)<{ $secondary?: boolean }>`
  ${({ $secondary }) =>
    $secondary &&
    css<{ $secondary?: boolean }>`
      color: blue;
    `}
`;

const MergeTest1 = () => {
  return (
    <Button4 type="button" $primary $secondary>
      Click me
    </Button4>
  );
};

const MergeTestErrors = () => {
  switch (Math.random().toString(64)) {
    case "$primary":
      // @ts-expect-error - primary must only allow booleans
      return <Button4 $primary="true" />;
    case "$secondard":
      // @ts-expect-error - secondard must only allow booleans
      return <Button4 $secondard="true" />;
    case "html prop":
      // @ts-expect-error - only valid html attribute values are allowed
      return <Button4 type="submit submit" />;
    case "ref":
      // @ts-expect-error - only valid html elements
      return <Button4 ref={(element: HTMLDivElement | null) => {}} />;
    case "theme":
      // @ts-expect-error - theme is not part of the props
      return <Button4 theme={{ mood: "happy" }} />;
    default:
      return null;
  }
};
