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
  async: () => (err, result) => {
    if (err) {
      throw err;
    }
    return result;
  },
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
      const headline = css(__styleYak._yak_0);
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
      const headline = css(__styleYak._yak_0, x > 0.5 && css(__styleYak._yak_1));"
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
      const Button = styled.button(__styleYak.Button_0, x > 0.5 && css(__styleYak._yak_1));
      const FancyButton = styled(Button)(__styleYak.FancyButton_2);"
    `);
  });

  it("should support access to the theme", async () => {
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
  \${({theme}) => theme.mode === "dark" && css\`
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
      const Button = styled.button(__styleYak.Button_0, ({
        theme
      }) => theme.mode === \\"dark\\" && css(__styleYak._yak_1));
      const FancyButton = styled(Button)(__styleYak.FancyButton_2);"
    `);
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
    })(__styleYak.headline_0);"
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
    const headline = styled.input(__styleYak.headline_0);
    const newHeadline = styled(headline).attrs({
      type: \\"text\\"
    })(__styleYak.newHeadline_1);"
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
    const headline = css(__styleYak._yak_0, css(__styleYak._yak_1), css(__styleYak._yak_2), {
      \\"style\\": {
        \\"--\\\\uD83E\\\\uDDAC18fi82j0\\": ({
          i
        }) => i * 100 + \\"ms\\",
        \\"--\\\\uD83E\\\\uDDAC18fi82j1\\": easing
      }
    });"
  `);
  });

  it("should convert keyframes", async () => {
    expect(
      await tsloader.call(
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
  "import styles from \\"./page.module.css\\";
  import { styled, keyframes } from \\"next-yak\\";
  import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
  const fadeIn = keyframes(__styleYak.fadeIn_0);
  const FadeInButton = styled.button(__styleYak.FadeInButton_1, {
    \\"style\\": {
      \\"--\\\\uD83E\\\\uDDAC18fi82j0\\": fadeIn
    }
  });"
`);
  });

  it("should allow to target components", async () => {
    expect(
      await tsloader.call(
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
    "import { styled, keyframes } from \\"next-yak\\";
    import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
    const Link = styled.a(__styleYak.Link_0);
    const Icon = styled.svg(__styleYak.Icon_1);
    const Wrapper = styled.div(__styleYak.Wrapper_2);"
  `);
  });

  it("should allow to target components even if they don't have styles", async () => {
    expect(
      await tsloader.call(
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
    "import { styled, keyframes } from \\"next-yak\\";
    import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
    const Link = styled.a();
    const Icon = styled.svg(__styleYak.Icon_1);
    const Wrapper = styled.div(__styleYak.Wrapper_2);"
  `);
  });

  it("should show error when mixin is used in nested selector", async () => {
    await expect(() =>
      tsloader.call(
        loaderContext,
        `
import { styled, css } from "next-yak";

const bold = css\`
  font-weight: bold;
\`

const Icon = styled.div\`
  @media (min-width: 640px) {
    .bar {
      \${bold}
    }
  }
\`
`
      )
    ).rejects.toThrowErrorMatchingInlineSnapshot(`
    "/some/special/path/page.tsx: Expressions are not allowed inside nested selectors:
    line 11: found \\"bold\\" inside \\"@media (min-width: 640px) { .bar {\\""
  `);
  });

  it("should show error when mixin is used in nested selector inside a css", async () => {
    await expect(() =>
      tsloader.call(
        loaderContext,
        `
import { styled, css } from "next-yak";

const bold = css\`
  font-weight: bold;
\`

const Icon = styled.div\`
  @media (min-width: 640px) {
    .bar {
      \${() => css\`\${bold}\`}
    }
  }
\`
`
      )
    ).rejects.toThrowErrorMatchingInlineSnapshot(`
    "/some/special/path/page.tsx: Expressions are not allowed inside nested selectors:
    line 11: found Expression inside \\"@media (min-width: 640px) { .bar {\\""
  `);
  });
  it("should show error when a dynamic selector is used", async () => {
    await expect(() =>
      tsloader.call(
        loaderContext,
        `
import { styled, css } from "next-yak";

const test = "bar";

const Icon = styled.div\`
  \${test} {
    font-weight: bold;
  }
\`
`
      )
    ).rejects.toThrowErrorMatchingInlineSnapshot(`
      "/some/special/path/page.tsx: Expressions are not allowed as selectors:
      line 7: found \${test}"
    `);
  });

  it("should ignores empty chunks if they include only a comment", async () => {
    expect(
      await tsloader.call(
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
`)).toMatchInlineSnapshot(`
  "import styles from \\"./page.module.css\\";
  import { css } from \\"next-yak\\";
  import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
  const x = Math.random();
  const headline = css(x > 0.5 && css(__styleYak._yak_1));"
`);
      });

  it("should show error when a dynamic selector is used after a comma", async () => {
    await expect(() =>
      tsloader.call(
        loaderContext,
        `
import { styled, css } from "next-yak";

const test = "bar";

const Icon = styled.div\`
  \${test}, baz {
    font-weight: bold;
  }
\`
`
      )
    ).rejects.toThrowErrorMatchingInlineSnapshot(`
      "/some/special/path/page.tsx: Expressions are not allowed as selectors:
      line 7: found \${test}"
    `);
  });

  it("should allow allow using a styled component as selector in the same file", async () => {
    expect(
      await tsloader.call(
        loaderContext,
        `
import styles from "./page.module.css";
import { styled, css } from "next-yak";

const Icon = styled.svg\`\`;
const Button = styled.button\`
  &:has(\${Icon}) {
    color: red;
  }
\`;

`)).toMatchInlineSnapshot(`
  "import styles from \\"./page.module.css\\";
  import { styled, css } from \\"next-yak\\";
  import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
  const Icon = styled.svg(__styleYak.Icon_0);
  const Button = styled.button(__styleYak.Button_1);"
`);
      });
});
