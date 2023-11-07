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
  // snapshot
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
      ".yak_0 { 
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
    color: blue;
  \`}
  \${x > 0.5 && css\`
    color: blue;
  \`}
  &:hover {
    color: \${x ? "red" : "blue"\};
  }
\`;
`
      )
    ).toMatchInlineSnapshot(`
      ".yak_0 { 
        font-size: 2rem;
        font-weight: bold;
        color: red;
         }

      .yak_1 { 
          color: blue;
         }

      .yak_2 { 
          color: blue;
         }

      .yak_0 { 
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
      ".yak_1 { 
          color: blue;
         }"
    `);
  });
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
    ".yak_0 { 
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
    ".yak_0 { 
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
    ".yak_0 { 
      color: red;
     }

    .yak_1 { 
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
    ".yak_0 { 
      transition: color var(--🦬18fi82j0) var(--🦬18fi82j1);
      display: block;
       }

    .yak_1 { color: orange }"
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
    ".yak_0 { 
      color: blue;
      @media (min-width: 640px) {
        color: red;
      }
      transition: color var(--🦬18fi82j0) var(--🦬18fi82j1);
      display: block;
       }

    .yak_1 { color: orange }"
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
    ".yak_0 { 
      color: blue;
      @media (min-width: 640px) {
        color: red;
      }
      transition: color var(--🦬18fi82j0) var(--🦬18fi82j1);
      display: block;
       }

    .yak_1 { color: orange }"
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
  ".yak_0 { 
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
  "@keyframes yak_animation_0 { 
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
   }

  .yak_1 { 
    animation: 1s var(--🦬18fi82j0) ease-out;
   }"
`);
});
