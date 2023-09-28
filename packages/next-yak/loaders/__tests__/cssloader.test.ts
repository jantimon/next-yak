import { describe, it, expect } from "vitest";
import cssloader from "../cssloader.cjs";

const loaderContext = {
  resourcePath: "/some/special/path/page.tsx",
  rootContext: "/some",
  importModule: () => {
    return {
      replaces: {
        queries: {
          sm: "@media (min-width: 640px)",
          md: "@media (min-width: 768px)",
          lg: "@media (min-width: 1024px)",
          xl: "@media (min-width: 1280px)",
          xxl: "@media (min-width: 1536px)",
        },
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
".style0 { 
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
".style0 { 
  font-size: 2rem;
  font-weight: bold;
  color: red;
   }

.style1 { 
    color: blue;
   }

.style2 { 
    color: blue;
   }

.style0 { 
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
".style1 { 
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
".style0 { 
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
    ".style0 { 
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
    ".style0 { 
      color: red;
     }

    .style1 { 
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
".style0 { 
  transition: color var(--🦬18fi82j0) var(--🦬18fi82j1);
  display: block;
   }

.style1 { color: orange }"
`);
});

it("should replace breakpoint references with actual media queries", async () => {
  expect(
    await cssloader.call(
      loaderContext,
      `
import { css } from "next-yak";
import { queries } from "@/theme";

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
".style0 { 
  color: blue;
  @media (min-width: 640px) {
    color: red;
  }
  transition: color var(--🦬18fi82j0) var(--🦬18fi82j1);
  display: block;
   }

.style1 { color: orange }"
`);
});
