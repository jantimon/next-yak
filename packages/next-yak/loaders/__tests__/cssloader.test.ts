import { describe, it, expect } from "vitest";
import cssloader from "../cssloader.js";

const loaderContext = {
  resourcePath: "/some/special/path/page.tsx",
  rootContext: "/some",
  importModule: () => {
    return {
      queries: {
        sm: "@media (min-width: 640px)",
        md: "@media (min-width: 768px)",
        lg: "@media (min-width: 1024px)",
        xl: "@media (min-width: 1280px)",
        xxl: "@media (min-width: 1536px)",
      },
      spacing: {
        0.5: "4px",
        1: "8px",
        2: "16px",
        4: "32px",
      },
      typography: {
        "letter spacing": "0.05em",
        primary: {
          "font weight": 800,
        },
      },
    };
  },
  getOptions: () => ({
    configPath: "/some/special/path/config",
  }),
  async: () => (err, result) => {
    if (err) {
      throw err;
    }
    return result;
  },
};

describe("cssloader", () => {
  it("should return the correct value", async () => {
    expect(
      await cssloader.call(
        loaderContext,
        `
import styles from "./page.module.css";
import { css } from "next-yak";

const headline = css\`
  font-size: 2rem;
  font-weight: bold;
  color: red;
  &:hover {
    color: red;
  }
      \`;
`
      )
    ).toMatchInlineSnapshot(`
      ".headline {
        font-size: 2rem;
        font-weight: bold;
        color: red;
        &:hover {
          color: red;
        }
      }"
    `);
  });

  it("should support nested css code", async () => {
    expect(
      await cssloader.call(
        loaderContext,
        `
import styles from "./page.module.css";
import { css } from "next-yak";

const x = Math.random();
const headline = css\`
  font-size: 2rem;
  font-weight: bold;
  color: red;
  \${x > 0.5 && css\`
    color: orange;
  \`}
  \${x > 0.5 && css\`
    color: teal;
  \`}
  &:hover {
    color: \${x ? "red" : "blue"\};
  }
\`;
`
      )
    ).toMatchInlineSnapshot(`
      ".headline {
        font-size: 2rem;
        font-weight: bold;
        color: red;
      }
      .headline__headline {
        color: orange;
      }
      .headline__headline_1 {
        color: teal;
      }
      .headline {
        &:hover {
          color: var(--headline-color_18fi82j);
        }
      }"
    `);
  });

  it("should ignores empty chunks if they include only a comment", async () => {
    expect(
      await cssloader.call(
        loaderContext,
        `
import styles from "./page.module.css";
import { css } from "next-yak";

const x = Math.random();
const headline = css\`
  /* comment */
  \${x > 0.5 && css\`
    color: blue;
  \`}
\`;
`
      )
    ).toMatchInlineSnapshot(`
      ".headline__headline {
        color: blue;
      }"
    `);
  });

  it("should support css variables", async () => {
    expect(
      await cssloader.call(
        loaderContext,
        `
import styles from "./page.module.css";
import { css } from "next-yak";

const headline = css\`
  &:hover {
    color: \${x ? "red" : "blue"\};
  }
  \`;
`
      )
    ).toMatchInlineSnapshot(`
      ".headline {
        &:hover {
          color: var(--headline-color_18fi82j);
        }
      }"
    `);
  });

  it("should support attrs on intrinsic elements", async () => {
    expect(
      await cssloader.call(
        loaderContext,
        `
import { styled } from "next-yak";

const headline = styled.input.attrs({
  type: "text",
})\`
  color: red;
  \`;
`
      )
    ).toMatchInlineSnapshot(`
      ".headline {
        color: red;
      }"
    `);
  });

  it("should support attrs on wrapped elements", async () => {
    expect(
      await cssloader.call(
        loaderContext,
        `
import { styled } from "next-yak";

const headline = styled.input\`
  color: red;
\`;

const newHeadline = styled(headline).attrs({
  type: "text",
})\`
  color: black;
  \`;
`
      )
    ).toMatchInlineSnapshot(`
      ".headline {
        color: red;
      }.newHeadline {
        color: black;
      }"
    `);
  });

  it("should support css variables with spaces", async () => {
    expect(
      await cssloader.call(
        loaderContext,
        `
import styles from "./page.module.css";
import { css } from "next-yak";

const headline = css\`
  transition: color \${({$duration}) => $duration} \${({$easing}) => $easing};
  display: block;
  \${css\`color: orange\`}
  \`;
`
      )
    ).toMatchInlineSnapshot(`
      ".headline {
        transition: color var(--headline-transition_18fi82j) var(--headline-transition_1_18fi82j);
        display: block;
      }
      .headline__headline {
        color: orange;
      }"
    `);
  });

  it("should replace breakpoint references with actual media queries", async () => {
    expect(
      await cssloader.call(
        loaderContext,
        `
import { css } from "next-yak";
import { queries } from "@/theme.yak";

const headline = css\`
  color: blue;
  \${queries.sm} {
    color: red;
  }
  transition: color \${({$duration}) => $duration} \${({$easing}) => $easing};
  display: block;
  \${css\`color: orange\`}
  \`;
`
      )
    ).toMatchInlineSnapshot(`
      ".headline {
        color: blue;
        @media (min-width: 640px) {
          color: red;
        }
        transition: color var(--headline-transition_18fi82j) var(--headline-transition_1_18fi82j);
        display: block;
      }
      .headline__headline {
        color: orange;
      }"
    `);
  });

  it("should replace breakpoint references with actual media queries from single quote imports", async () => {
    expect(
      await cssloader.call(
        loaderContext,
        `
import { css } from "next-yak";
import { queries } from '@/theme.yak';

const headline = css\`
  color: blue;
  \${queries.sm} {
    color: red;
  }
  transition: color \${({$duration}) => $duration} \${({$easing}) => $easing};
  display: block;
  \${css\`color: orange\`}
  \`;
`
      )
    ).toMatchInlineSnapshot(`
      ".headline {
        color: blue;
        @media (min-width: 640px) {
          color: red;
        }
        transition: color var(--headline-transition_18fi82j) var(--headline-transition_1_18fi82j);
        display: block;
      }
      .headline__headline {
        color: orange;
      }"
    `);
  });

  it("should replace breakpoint references with actual media queries when using square brackets", async () => {
    expect(
      await cssloader.call(
        loaderContext,
        `
import { css } from "next-yak";
import { queries } from '@/theme.yak';

const headline = css\`
  color: blue;
  \${queries["sm"]} {
    color: red;
  }
  transition: color \${({$duration}) => $duration} \${({$easing}) => $easing};
  display: block;
  \${css\`color: orange\`}
  \`;
`
      )
    ).toMatchInlineSnapshot(`
      ".headline {
        color: blue;
        @media (min-width: 640px) {
          color: red;
        }
        transition: color var(--headline-transition_18fi82j) var(--headline-transition_1_18fi82j);
        display: block;
      }
      .headline__headline {
        color: orange;
      }"
    `);
  });

  it("should prevent double escaped chars", async () => {
    // in styled-components \\ is replaced with \
    // this test verifies that yak provides the same behavior
    expect(
      await cssloader.call(
        loaderContext,
        `
import { css } from "next-yak";
import { queries } from "@/theme";

const headline = css\`
  :before {
    content: "\\2022";
  }
  :after {
    content: "\\\\2022";
  }
  content: "\\\\\\\\"
\`
`
      )
    ).toMatchInlineSnapshot(`
      ".headline {
        :before {
          content: \\"\\\\2022\\";
        }
        :after {
          content: \\"\\\\2022\\";
        }
        content: \\"\\\\\\\\\\"
      ;
      }"
    `);
  });

  it("should convert keyframes", async () => {
    expect(
      await cssloader.call(
        loaderContext,
        `
import styles from "./page.module.css";
import { styled, keyframes } from "next-yak";

const fadeIn = keyframes\`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
\`

const FadeInButton = styled.button\`
  animation: 1s \${fadeIn} ease-out;
\`
`
      )
    ).toMatchInlineSnapshot(`
      "@keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }.FadeInButton {
        animation: 1s fadeIn ease-out;
      }"
    `);
  });

  it("should allow to target components", async () => {
    expect(
      await cssloader.call(
        loaderContext,
        `
import { styled, keyframes } from "next-yak";

const Link = styled.a\`
  color: palevioletred;
\`

const Icon = styled.svg\`
  fill: currentColor;
  width: 1em;
  height: 1em;
  \${Link}:hover & {
    color: red;
  }
  \${Link}:focus & {
    color: red;
  }
\`

const Wrapper = styled.div\`
  &:has(> \${Link}) {
    padding: 10px;
  }
\`
`
      )
    ).toMatchInlineSnapshot(`
      ".Link {
        color: palevioletred;
      }.Icon {
        fill: currentColor;
        width: 1em;
        height: 1em;
        .Link:hover & {
          color: red;
        }
        .Link:focus & {
          color: red;
        }
      }.Wrapper {
        &:has(> .Link) {
          padding: 10px;
        }
      }"
    `);
  });

  it("should allow to target components even if they don't have styles", async () => {
    expect(
      await cssloader.call(
        loaderContext,
        `
import { styled, keyframes } from "next-yak";

const Link = styled.a\`
\`

const Icon = styled.svg\`
\`

const Wrapper = styled.div\`
  &:has(> \${Icon}) {
    padding: 10px;
  }
\`

`
      )
    ).toMatchInlineSnapshot(`
      ".Wrapper {
        &:has(> .Icon) {
          padding: 10px;
        }
      }"
    `);
  });

  it("should support nested expressions", async () => {
    expect(
      await cssloader.call(
        loaderContext,
        `
import { styled, keyframes, css } from "next-yak";

const Component = styled.div\`
    background-color: red;
    color: white;
    \${({ active }) => active && css\`
        background-color: blue;
    \`}
    border: 1px solid black;

    &:focus {
        background-color: green;
        \${({ active }) => active && css\`
            background-color: blue;
            \${({ active }) => active && css\`
                background-color: brown;
            \`}
        \`}

        border: 2px solid pink;
    }
\`;

const Component2 = styled.div\`
    color: hotpink;
\`;

`
      )
    ).toMatchInlineSnapshot(`
      ".Component {
        background-color: red;
        color: white;
      }
      .Component__active {
        background-color: blue;
      }
      .Component {
        border: 1px solid black;
        &:focus {
          background-color: green;
        }
      }
      .Component__active_1 {
        &:focus {
          background-color: blue;
        }
      }
      .Component__active_and_active {
        &:focus {
          background-color: brown;
        }
      }
      .Component {
        &:focus {
          border: 2px solid pink;
        }
      }.Component2 {
        color: hotpink;
      }"
    `);
  });

  it("should inline constants", async () => {
    expect(
      await cssloader.call(
        loaderContext,
        `
import { styled, css } from "next-yak";

const red = "#E50914";
const zIndex = 14;
const headline = css\`
  color: \${red};
  z-index: \${zIndex};
\`
`
      )
    ).toMatchInlineSnapshot(`
      ".headline {
        color: #E50914;
        z-index: 14;
      }"
    `);
  });

  it("should support conditional nested expressions", async () => {
    expect(
      await cssloader.call(
        loaderContext,
        `
import { styled, keyframes, css } from "next-yak";

const color = new Token("green");
const duration = new Token("1s");
const easing = new Token("ease-out");

const Component = styled.div\`
    background-color: red;
    color: white;
    \${({ active }) => active ? css\`
        background-color: blue;
    \` : css\`
        background-color: \${() => color};
    \`}
    border: 1px solid black;
    \${({ active }) => active ? css\`
        color: orange;
    \` : css\`
        transition: color \${() => duration} \${() => easing};
    \`}
\`;
`
      )
    ).toMatchInlineSnapshot(`
      ".Component {
        background-color: red;
        color: white;
      }
      .Component__active {
        background-color: blue;
      }
      .Component__not_active {
        background-color: var(--Component__not_active-background-color_18fi82j);
      }
      .Component {
        border: 1px solid black;
      }
      .Component__active_1 {
        color: orange;
      }
      .Component__not_active_1 {
        transition: color var(--Component__not_active_1-transition_18fi82j) var(--Component__not_active_1-transition_1_18fi82j);
      }"
    `);
  });

  it("should replace all array like constants", async () => {
    expect(
      await cssloader.call(
        loaderContext,
        `
import { css } from "next-yak";
import { queries, spacing, typography } from "@/theme.yak";

const headline = css\`
  \${queries["xl"]} {
    color: red;
  }
  margin: -\${spacing[2]};
  font-weight: \${typography.primary["font weight"]};
  letter-spacing: \${typography["letter spacing"]};
\``
      )
    ).toMatchInlineSnapshot(`
      ".headline {
        @media (min-width: 1280px) {
          color: red;
        }
        margin: -16px;
        font-weight: 800;
        letter-spacing: 0.05em;
      }"
    `);
  });

  it("should detect expressions with units automatically in arrow function expressions", async () => {
    expect(
      await cssloader.call(
        loaderContext,
        `
     import styles from "./page.module.css";
     import { css } from "next-yak";
     const case3 = css\`
      padding: \${({$indent}) => {
       if ($indent > 4) return 10;
       return $indent
     }}px;
      transform: translate(-50%, -50%) rotate(\${({ index }) => index * 30}deg);
       translate(0, -88px) rotate(\${({ index }) => -index * 30}deg);
    \`
     `
      )
    ).toMatchInlineSnapshot(`
      ".case3 {
        padding: var(--case3-padding_18fi82j);
        transform: translate(-50%, -50%) rotate(var(--case3-transform_18fi82j));
        translate(0, -88px) rotate(: ;
        translate(0, -88px) rotate(deg): ;
      }"
    `);
  });

  it("should detect expressions with units automatically in edge cases", async () => {
    expect(
      await cssloader.call(
        loaderContext,
        `
     import styles from "./page.module.css";
     import { css } from "next-yak";
     const value = 10;
     const case3 = css\`
        margin: \${() => size}px;
        top: \${() => spacing.xs}px;
        bottom: \${() => spacing[0]}PX;
        left: \${() => spacing()}px;
        right: \${value}px;
    \`
     `
      )
    ).toMatchInlineSnapshot(`
      ".case3 {
        margin: var(--case3-margin_18fi82j);
        top: var(--case3-top_18fi82j);
        bottom: var(--case3-bottom_18fi82j);
        left: var(--case3-left_18fi82j);
        right: 10px;
      }"
    `);
  });
});

it("should allow allow using an inline nested css literal", async () => {
  expect(
    await cssloader.call(
      loaderContext,
      `
   import styles from "./page.module.css";
   import { styled, css } from "next-yak";
   const Icon = styled.svg\`\`;
   const Button = styled.button\`
     &:has(\${Icon}) {
       \${({$primary}) => $primary && css\`
         color: red;
       \`}
     }
   \`;
   
   `
    )
  ).toMatchInlineSnapshot(`
    ".Button__primary {
      &:has(.Icon) {
        color: red;
      }
    }"
  `);
});

it("should support linebreaks in content", async () => {
  expect(
    (await cssloader.call(
      loaderContext,
      `
   import { styled, css } from "next-yak";
   const Button = styled.button\`
     :before {
      content: '🦄\\nHello World';
     }
   \`;`
    )).split("content")[1]
  ).includes("\\nHello World");
});