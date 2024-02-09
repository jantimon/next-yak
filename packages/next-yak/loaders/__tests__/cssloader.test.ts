import { describe, it, expect } from "vitest";
import cssloader from "../cssloader.cjs";

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
    };
  },
  getOptions: () => ({
    configPath: "/some/special/path/config",
  }),
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
      ".headline_0 {
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
      ".headline_0 {
        font-size: 2rem;
        font-weight: bold;
        color: red;
        &:where(.headline_1) {
          color: orange;
        }

        &:where(.headline_2) {
          color: teal;
        }
        &:hover {
          color: var(--🦬18fi82j0);
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
      ".headline_0 {
        /* comment */
        &:where(.headline_1) {
          color: blue;
        }
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
      ".headline_0 {
        &:hover {
          color: var(--🦬18fi82j0);
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
      }
      .newHeadline {
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
  transition: color \${duration} \${easing};
  display: block;
  \${css\`color: orange\`}
  \`;
`
      )
    ).toMatchInlineSnapshot(`
      ".headline_0 {
        transition: color var(--🦬18fi82j0) var(--🦬18fi82j1);
        display: block;
          &:where(.headline_1) {
      color: orange
          }
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
  transition: color \${duration} \${easing};
  display: block;
  \${css\`color: orange\`}
  \`;
`
      )
    ).toMatchInlineSnapshot(`
      ".headline_0 {
        color: blue;
        @media (min-width: 640px) {
          color: red;
        }
        transition: color var(--🦬18fi82j0) var(--🦬18fi82j1);
        display: block;
          &:where(.headline_1) {
      color: orange
          }
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
  transition: color \${duration} \${easing};
  display: block;
  \${css\`color: orange\`}
  \`;
`
      )
    ).toMatchInlineSnapshot(`
      ".headline_0 {
        color: blue;
        @media (min-width: 640px) {
          color: red;
        }
        transition: color var(--🦬18fi82j0) var(--🦬18fi82j1);
        display: block;
          &:where(.headline_1) {
      color: orange
          }
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
      ".headline_0 {
        :before {
          content: \\"\\\\2022\\";
        }
        :after {
          content: \\"\\\\2022\\";
        }
        content: \\"\\\\\\\\\\"
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
      }
      .FadeInButton {
        animation: 1s var(--🦬18fi82j0) ease-out;
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
      }
      .Icon {
        fill: currentColor;
        width: 1em;
        height: 1em;
        .Link:hover & {
          color: red;
        }
        .Link:focus & {
          color: red;
        }
      }
      .Wrapper {
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
            &:where(.active_0) {
              background-color: blue;
            }
          border: 1px solid black;

          &:focus {
              background-color: green;
                &:where(.active_1) {
                  background-color: blue;
                    &:where(.active_and_active_2) {
                      background-color: brown;
                    }
                }
              border: 2px solid pink;
          }
        }
        .Component2 {
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
      ".headline_0 {
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
        background-color: \${color};
    \`}
    border: 1px solid black;
    \${({ active }) => active ? css\`
        color: orange;
    \` : css\`
        transition: color \${duration} \${easing};
    \`}
\`;
`
      )
    ).toMatchInlineSnapshot(`
      ".Component {
          background-color: red;
          color: white;
            &:where(.active_0) {
              background-color: blue;
            }
            &:where(.not_active_1) {
              background-color: var(--🦬18fi82j0);
            }
          border: 1px solid black;
            &:where(.active_2) {
              color: orange;
            }
            &:where(.not_active_3) {
              transition: color var(--🦬18fi82j1) var(--🦬18fi82j2);
            }
        }"
    `);
  });

  it.only("should detect expressions with units automatically in arrow function expressions", async () => {
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
      ".case3_0 {
            padding: var(--🦬18fi82j0);
            transform: translate(-50%, -50%) rotate(var(--🦬18fi82j1));
             translate(0, -88px) rotate(var(--🦬18fi82j2));
          }"
    `);
  });
});
