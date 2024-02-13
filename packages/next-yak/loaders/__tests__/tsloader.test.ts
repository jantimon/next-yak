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
      const headline = css(__styleYak.headline_0);
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
      const headline = css(__styleYak.headline_0, x > 0.5 && css(__styleYak.headline_1));"
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
      const Button = styled.button(__styleYak.Button, x > 0.5 && css(__styleYak.Button_0));
      const FancyButton = styled(Button)(__styleYak.FancyButton);"
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
      const Button = styled.button(__styleYak.Button, ({
        theme
      }) => theme.mode === \\"dark\\" && css(__styleYak.Button_0));
      const FancyButton = styled(Button)(__styleYak.FancyButton);"
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
      })(__styleYak.headline);"
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
      const headline = styled.input(__styleYak.headline);
      const newHeadline = styled(headline).attrs({
        type: \\"text\\"
      })(__styleYak.newHeadline);"
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
  transition: color \${({i}) => i * 100 + "ms"} \${({easing}) => easing};
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
      const headline = css(__styleYak.headline_0, css(__styleYak.headline_1), css(__styleYak.headline_2), {
        \\"style\\": {
          \\"--\\\\uD83E\\\\uDDAC18fi82j0\\": ({
            i
          }) => i * 100 + \\"ms\\",
          \\"--\\\\uD83E\\\\uDDAC18fi82j1\\": ({
            easing
          }) => easing
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
  animation: 1s \${() => fadeIn} ease-out;
\`
`
      )
    ).toMatchInlineSnapshot(`
      "import styles from \\"./page.module.css\\";
      import { styled, keyframes } from \\"next-yak\\";
      import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
      const fadeIn = keyframes(__styleYak.fadeIn);
      const FadeInButton = styled.button(__styleYak.FadeInButton, {
        \\"style\\": {
          \\"--\\\\uD83E\\\\uDDAC18fi82j0\\": () => fadeIn
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
      const Link = styled.a(__styleYak.Link);
      const Icon = styled.svg(__styleYak.Icon);
      const Wrapper = styled.div(__styleYak.Wrapper);"
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
      const Icon = styled.svg(__styleYak.Icon);
      const Wrapper = styled.div(__styleYak.Wrapper);"
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
      "/some/special/path/page.tsx: line 11: Mixins are not allowed inside nested selectors
      found: \${bold}
      Use an inline css literal instead or move the selector into the mixin"
    `);
  });

  it("should show error when a mixin function is used in nested selector", async () => {
    await expect(() =>
      tsloader.call(
        loaderContext,
        `
import { styled, css } from "next-yak";

const bold = () => css\`
  font-weight: bold;
\`

const Icon = styled.div\`
  @media (min-width: 640px) {
    .bar {
      \${bold()}
    }
  }
\`
`
      )
    ).rejects.toThrowErrorMatchingInlineSnapshot(`
      "/some/special/path/page.tsx: line 11: Mixins are not allowed inside nested selectors
      found: \${bold()}
      Use an inline css literal instead or move the selector into the mixin"
    `);
  });

  // TODO: this test was temporarily disabled because it was failing when inline css literals were introduced
  it.skip("should show error when mixin is used in nested selector inside a css", async () => {
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
      "/some/special/path/page.tsx: line 11: Mixins are not allowed inside nested selectors
      found: \${bold}
      Use an inline css literal instead or move the selector into the mixin"
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
      "/some/special/path/page.tsx: line 7: Expressions are not allowed as selectors
      found: \${test}"
    `);
  });

  it("should remove string and number constants from the ts code", async () => {
    expect(
      await tsloader.call(
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
      "import { styled, css } from \\"next-yak\\";
      import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
      const red = \\"#E50914\\";
      const zIndex = 14;
      const headline = css(__styleYak.headline_0);"
    `);
  });

  it("should show error when using a runtime value from top level", async () => {
    await expect(() =>
      tsloader.call(
        loaderContext,
        `
import { styled, css } from "next-yak";

const red = new Token("#E50914");
const headline = css\`
  color: \${red};
\`
`
      )
    ).rejects.toThrowErrorMatchingInlineSnapshot(`
      "/some/special/path/page.tsx: line 6: Possible constant used as runtime value for a css variable
      Please move the constant to a .yak import or use an arrow function
      e.g.:
      |   import { primaryColor } from './foo.yak'
      |   const MyStyledDiv = styled.div\`color: \${primaryColor};\`
      found: \${red}"
    `);
  });

  it("should show error when using a runtime value from top level in a nested literal", async () => {
    await expect(() =>
      tsloader.call(
        loaderContext,
        `
        import { styled, css } from "next-yak";

        const $red = new Token("#E50914");
        const Button = styled.button\`
          \${({ $primary, $digits }) => {
            return $primary && css\`
              background-color: #4CAF50;
              color: \${$red};
            \`}}
        \`
`
      )
    ).rejects.toThrowErrorMatchingInlineSnapshot(`
      "/some/special/path/page.tsx: line 9: Possible constant used as runtime value for a css variable
      Please move the constant to a .yak import or use an arrow function
      e.g.:
      |   import { primaryColor } from './foo.yak'
      |   const MyStyledDiv = styled.div\`color: \${primaryColor};\`
      found: \${$red}"
    `);
  });

  it("should show error when calling a runtime value from top level in a nested literal", async () => {
    await expect(() =>
      tsloader.call(
        loaderContext,
        `
        import { styled, css } from "next-yak";
        import { red } from "./colors";

        const Button = styled.button\`
          \${({ $primary, $digits }) => {
            return $primary && css\`
              background-color: #4CAF50;
              color: \${red()};
            \`}}
        \`
`
      )
    ).rejects.toThrowErrorMatchingInlineSnapshot(`
      "/some/special/path/page.tsx: line 9: Possible constant used as runtime value for a css variable
      Please move the constant to a .yak import or use an arrow function
      e.g.:
      |   import { primaryColor } from './foo.yak'
      |   const MyStyledDiv = styled.div\`color: \${primaryColor};\`
      found: \${red()}"
    `);
  });

  it("should show error when calling a nested runtime value from top level in a nested literal", async () => {
    await expect(() =>
      tsloader.call(
        loaderContext,
        `
        import { styled, css } from "next-yak";
        import { colors } from "./colors";

        const Button = styled.button\`
          \${({ $primary, $digits }) => {
            return $primary && css\`
              background-color: #4CAF50;
              color: \${colors.red()};
            \`}}
        \`
`
      )
    ).rejects.toThrowErrorMatchingInlineSnapshot(`
      "/some/special/path/page.tsx: line 9: Possible constant used as runtime value for a css variable
      Please move the constant to a .yak import or use an arrow function
      e.g.:
      |   import { primaryColor } from './foo.yak'
      |   const MyStyledDiv = styled.div\`color: \${primaryColor};\`
      found: \${colors.red()}"
    `);
  });

  it("should show error when using a runtime value from another module in a nested literal", async () => {
    await expect(() =>
      tsloader.call(
        loaderContext,
        `
        import { styled, css } from "next-yak";
        import $red from "./colors";
        
        const Button = styled.button\`
          \${({ $primary, $digits }) => {
            return $primary && css\`
              background-color: #4CAF50;
              color: \${$red};
            \`}}
        \`
`
      )
    ).rejects.toThrowErrorMatchingInlineSnapshot(`
      "/some/special/path/page.tsx: line 9: Possible constant used as runtime value for a css variable
      Please move the constant to a .yak import or use an arrow function
      e.g.:
      |   import { primaryColor } from './foo.yak'
      |   const MyStyledDiv = styled.div\`color: \${primaryColor};\`
      found: \${$red}"
    `);
  });

  it("should show error when using a runtime object value from top level in a nested literal", async () => {
    await expect(() =>
      tsloader.call(
        loaderContext,
        `
        import { styled, css } from "next-yak";

        const colors = { red:  "#E50914" };
        const Button = styled.button\`
          \${({ $primary, $digits }) => {
            return $primary && css\`
              background-color: #4CAF50;
              color: \${colors.red};
            \`}}
        \`
`
      )
    ).rejects.toThrowErrorMatchingInlineSnapshot(`
      "/some/special/path/page.tsx: line 9: Possible constant used as runtime value for a css variable
      Please move the constant to a .yak import or use an arrow function
      e.g.:
      |   import { primaryColor } from './foo.yak'
      |   const MyStyledDiv = styled.div\`color: \${primaryColor};\`
      found: \${colors.red}"
    `);
  });

  it("should show no error when using a scoped value", async () => {
    await expect(
      await tsloader.call(
        loaderContext,
        `
import { styled, css } from "next-yak";

const Button = styled.button\`
  \${({ $primary, $digits }) => {
    const indent = $digits * 10 + "px";
    return $primary && css\`
      background-color: #4CAF50;
      text-indent: \${indent};
    \`}}
\`
`
      )
    ).toMatchInlineSnapshot(`
      "import { styled, css } from \\"next-yak\\";
      import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
      const Button = styled.button(__styleYak.Button, ({
        $primary,
        $digits
      }) => {
        const indent = $digits * 10 + \\"px\\";
        return $primary && css(__styleYak.primary_0, {
          \\"style\\": {
            \\"--\\\\uD83E\\\\uDDAC18fi82j0\\": indent
          }
        });
      });"
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
`
      )
    ).toMatchInlineSnapshot(`
      "import styles from \\"./page.module.css\\";
      import { css } from \\"next-yak\\";
      import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
      const x = Math.random();
      const headline = css(__styleYak.headline_0, x > 0.5 && css(__styleYak.headline_1));"
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
      "/some/special/path/page.tsx: line 7: Expressions are not allowed as selectors
      found: \${test}"
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

`
      )
    ).toMatchInlineSnapshot(`
  "import styles from \\"./page.module.css\\";
  import { styled, css } from \\"next-yak\\";
  import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
  const Icon = styled.svg(__styleYak.Icon);
  const Button = styled.button(__styleYak.Button);"
`);
  });

  it("should allow allow using an inline nested css literal", async () => {
    expect(
      await tsloader.call(
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
      "import styles from \\"./page.module.css\\";
      import { styled, css } from \\"next-yak\\";
      import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
      const Icon = styled.svg(__styleYak.Icon);
      const Button = styled.button(__styleYak.Button, ({
        $primary
      }) => $primary && css(__styleYak.primary_0));"
    `);
  });

  it("should detect expressions with units and correctly append them in the css variable value", async () => {
    expect(
      await tsloader.call(
        loaderContext,
        `
     import styles from "./page.module.css";
     import { styled } from "next-yak";
     const Button = styled.button\`
        padding: \${10}rem;
        margin: \${4 * 2}px;
        z-index: \${10 + 4};
        transform: translateX(\${10}px) translateY(\${10 / 2}px);
        font-family: "Arial", sans-serif;
     \`;
     `
      )
    ).toMatchInlineSnapshot(`
      "import styles from \\"./page.module.css\\";
      import { styled } from \\"next-yak\\";
      import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
      const Button = styled.button(__styleYak.Button, {
        \\"style\\": {
          \\"--\\\\uD83E\\\\uDDAC18fi82j0\\": 10 + \\"rem\\",
          \\"--\\\\uD83E\\\\uDDAC18fi82j1\\": 4 * 2 + \\"px\\",
          \\"--\\\\uD83E\\\\uDDAC18fi82j2\\": 10 + 4,
          \\"--\\\\uD83E\\\\uDDAC18fi82j3\\": 10 + \\"px\\",
          \\"--\\\\uD83E\\\\uDDAC18fi82j4\\": 10 / 2 + \\"px\\"
        }
      });"
    `);
  });

  it("should detect expressions with units in simple arrow functions", async () => {
    expect(
      await tsloader.call(
        loaderContext,
        `
     import styles from "./page.module.css";
     import { styled } from "next-yak";
     const ClockNumber = styled.div<{ index: number; children: ReactNode }>\`
       transform: translate(-50%, -50%) rotate(\${({ index }) => index * 30}deg)
          translate(0, -88px) rotate(\${({ index }) => -index * 30}deg);
     \`;      
     `
      )
    ).toMatchInlineSnapshot(`
      "import styles from \\"./page.module.css\\";
      import { styled } from \\"next-yak\\";
      import { __yak_unitPostFix } from \\"next-yak/runtime-internals\\";
      import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
      const ClockNumber = styled.div(__styleYak.ClockNumber, {
        \\"style\\": {
          \\"--\\\\uD83E\\\\uDDAC18fi82j0\\": __yak_unitPostFix(({
            index
          }) => index * 30, \\"deg\\"),
          \\"--\\\\uD83E\\\\uDDAC18fi82j1\\": __yak_unitPostFix(({
            index
          }) => -index * 30, \\"deg\\")
        }
      });"
    `);
  });

  it("should detect expressions with units in complex arrow functions and wrap them with __yak_unitPostFix helper", async () => {
    expect(
      await tsloader.call(
        loaderContext,
        `
     import styles from "./page.module.css";
     import { css } from "next-yak";
     const case1 = css\`
        padding: \${({$indent}) => $indent > 4 ? 10 : $indent}px;
     \`;
     const case2 = css\`
        margin: \${({$indent}) => $indent > 4 ? 10 : $indent}px;
     \`;
     const case3 = css\`
        padding: \${({$indent}) => {
          if ($indent > 4) return 10;
          return $indent
        }}px;
     \`;
     `
      )
    ).toMatchInlineSnapshot(`
      "import styles from \\"./page.module.css\\";
      import { css } from \\"next-yak\\";
      import { __yak_unitPostFix } from \\"next-yak/runtime-internals\\";
      import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
      const case1 = css(__styleYak.case1_0, {
        \\"style\\": {
          \\"--\\\\uD83E\\\\uDDAC18fi82j0\\": __yak_unitPostFix(({
            $indent
          }) => $indent > 4 ? 10 : $indent, \\"px\\")
        }
      });
      const case2 = css(__styleYak.case2_1, {
        \\"style\\": {
          \\"--\\\\uD83E\\\\uDDAC18fi82j1\\": __yak_unitPostFix(({
            $indent
          }) => $indent > 4 ? 10 : $indent, \\"px\\")
        }
      });
      const case3 = css(__styleYak.case3_2, {
        \\"style\\": {
          \\"--\\\\uD83E\\\\uDDAC18fi82j2\\": __yak_unitPostFix(({
            $indent
          }) => {
            if ($indent > 4) return 10;
            return $indent;
          }, \\"px\\")
        }
      });"
    `);
  });

  it("should detect expressions with units in mixins", async () => {
    expect(
      await tsloader.call(
        loaderContext,
        `
      import { css } from "next-yak";
      const mixin1 = css\`
        padding: \${4}px;
      \`;
      const mixin2 = css\`
        margin: \${size}px;  
      \`
     `
      )
    ).toMatchInlineSnapshot(`
      "import { css } from \\"next-yak\\";
      import __styleYak from \\"./page.yak.module.css!=!./page?./page.yak.module.css\\";
      const mixin1 = css(__styleYak.mixin1_0, {
        \\"style\\": {
          \\"--\\\\uD83E\\\\uDDAC18fi82j0\\": 4 + \\"px\\"
        }
      });
      const mixin2 = css(__styleYak.mixin2_1, {
        \\"style\\": {
          \\"--\\\\uD83E\\\\uDDAC18fi82j1\\": size + \\"px\\"
        }
      });"
    `);
  });
});
