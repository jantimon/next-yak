import { it, expect } from "vitest";
import { staticCss } from "../staticCssLiteral";

it("render static strings unchanged", () => {
  const styles = staticCss`
    .test {
      color: red;
    }
  `;
  expect(styles).toBe(".test {\n      color: red;\n    }");
});

it("filter out null, undifined and false", () => {
  const styles = staticCss`
    .test {
      color: red;
      ${null}
      ${undefined}
      ${false}
    }
  `;
  expect(styles).toBe(
    ".test {\n      color: red;\n      \n      \n      \n    }"
  );
});

it("convert numbers to string", () => {
  const styles = staticCss`
    .test {
      color: red;
      line-height: ${1}em;
      border: ${0}px;
    }
  `;
  expect(styles).toBe(
    ".test {\n      color: red;\n      line-height: 1em;\n      border: 0px;\n    }"
  );
});

it("work nested", () => {
  const styles = staticCss`
    .test {
      ${
        true &&
        staticCss`
        color: red;
      `
      }
    }
  `;
  expect(styles).toBe(".test {\n      color: red;\n    }");
});
