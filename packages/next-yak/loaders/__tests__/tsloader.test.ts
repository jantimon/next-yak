import tsloader from "../tsloader.cjs";
import { describe, it, expect } from "vitest";

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

describe("tsloader", () => {
  // snapshot
  it("should return the correct value", async () => {
    expect(
      await tsloader.call(
        loaderContext,
        `
    "use client";
    import styles from "./page.module.css";
    import { css } from "next-yak";

    type x = number;

const headline = css\`
  font-size: 2rem;
  font-weight: bold;
  color: blue;
  &:hover {
    color: red;
  }
        \`;

export const Main = () => <h1 className={headline({}).className}>Hello World</h1>;
`
      )
    ).toMatchInlineSnapshot(`
      "\\"use client\\";

      import styles from \\"./page.module.css\\";
      import { css } from \\"next-yak\\";
      import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
      type x = number;
      const headline = css(__styleYak.style0);
      export const Main = () => <h1 className={headline({}).className}>Hello World</h1>;"
    `);
  });
  it("should support nested css code", async () => {
    expect(
      await tsloader.call(
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
  &:hover {
    color: red;
  }
\`;
`
      )
    ).toMatchInlineSnapshot(`
      "import styles from \\"./page.module.css\\";
      import { css } from \\"next-yak\\";
      import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
      const x = Math.random();
      const headline = css(__styleYak.style0, x > 0.5 && css(__styleYak.style1));"
    `);
  });

  it("should support styled api", async () => {
    expect(
      await tsloader.call(
        loaderContext,
        `
import styles from "./page.module.css";
import { styled, css } from "next-yak";

const x = Math.random();
const Button = styled.button\`
  font-size: 2rem;
  font-weight: bold;
  color: red;
  \${x > 0.5 && css\`
    color: blue;
  \`}
  &:hover {
    color: red;
  }
\`;
const FancyButton = styled(Button)\`
  background-color: green;
\`;
`
      )
    ).toMatchInlineSnapshot(`
      "import styles from \\"./page.module.css\\";
      import { styled, css } from \\"next-yak\\";
      import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
      const x = Math.random();
      const Button = styled.button(__styleYak.style0, x > 0.5 && css(__styleYak.style1));
      const FancyButton = styled(Button)(__styleYak.style2);"
    `);
  });
});

it("should support attrs on intrinsic elements", async () => {
  expect(
    await tsloader.call(
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
    "import { styled } from \\"next-yak\\";
    import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
    const headline = styled.input.attrs({
      type: \\"text\\"
    })(__styleYak.style0);"
  `);
});

it("should support attrs on wrapped elements", async () => {
  expect(
    await tsloader.call(
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
    "import { styled } from \\"next-yak\\";
    import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
    const headline = styled.input(__styleYak.style0);
    const newHeadline = styled(headline).attrs({
      type: \\"text\\"
    })(__styleYak.style1);"
  `);
});

it("should support css variables with spaces", async () => {
  expect(
    await tsloader.call(
      loaderContext,
      `
import styles from "./page.module.css";
import { css } from "next-yak";
import { easing } from "styleguide";

const headline = css\`
  transition: color \${({i}) => i * 100 + "ms"} \${easing};
  display: block;
  \${css\`color: orange\`}
  \${css\`color: blue\`}
  \`;
`
    )
  ).toMatchInlineSnapshot(`
  "import styles from \\"./page.module.css\\";
  import { css } from \\"next-yak\\";
  import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
  import { easing } from \\"styleguide\\";
  const headline = css(__styleYak.style0, css(__styleYak.style1), css(__styleYak.style2), {
    \\"style\\": {
      \\"--\\\\uD83E\\\\uDDAC18fi82j0\\": ({
        i
      }) => i * 100 + \\"ms\\",
      \\"--\\\\uD83E\\\\uDDAC18fi82j1\\": easing
    }
  });"
`);
});
