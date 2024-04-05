import { test, expect } from "vitest";
import { toCss } from "../lib/toCss.js";
import { parseCss } from "../lib/parseCss.js";

test("parseCss inComplete css 1", () => {
  expect(
    toCss(
      parseCss(`
        .foo {
                .fancy {
                        /* hello .world { color: red; } */
                        color: blue;
    `).declarations,
    ),
  ).toMatchInlineSnapshot(`
    "
    .foo {
      .fancy {
        color: blue;
      }
    }"
  `);
});

test("parseCss combine two independent css chunks", () => {
  expect(
    toCss(
      parseCss(`
        .foo {
                .fancy {
                        /* hello .world { color: red; } */
                        color: blue;
    `).declarations.concat(
        parseCss(`
      .foo {
              .fancy {
                      /* hello .world { color: red; } */
                      background: red;
  `).declarations,
      ),
    ),
  ).toMatchInlineSnapshot(`
    "
    .foo {
      .fancy {
        color: blue;
        background: red;
      }
    }"
  `);
});

test("parseCss merge two css chunks", () => {
  const part1 = parseCss(`
  .foo {
          .fancy {
                  /* hello .world { color: red; } */
                  color: blue;
`);
  const part2 = parseCss(
    `
  }
    &:hover {
      color: orange;
`,
    part1.state,
  );

  expect(toCss([...part1.declarations, ...part2.declarations]))
    .toMatchInlineSnapshot(`
      "
      .foo {
        .fancy {
          color: blue;
        }
        &:hover {
          color: orange;
        }
      }"
    `);
});

test("parseCss merge two css chunks and inject a scope", () => {
  const part1 = parseCss(`
  .foo {
          .fancy {
                  /* hello .world { color: red; } */
                  color: blue;
`);
  const part2 = parseCss(
    `
  }
    &:hover {
      color: orange;
`,
    part1.state,
  );

  part2.declarations[0].scope.unshift({
    name: ".isActive",
    type: "selector",
  });

  expect(toCss([...part1.declarations, ...part2.declarations]))
    .toMatchInlineSnapshot(`
      "
      .foo {
        .fancy {
          color: blue;
        }
      }
      .isActive {
        .foo {
          &:hover {
            color: orange;
          }
        }
      }"
    `);
});

test("handles escapes correctly", () => {
  expect(
    toCss(
      parseCss(`
        .foo {
          content: "line1\\\nline2";
        }
    `).declarations,
    ),
  ).toMatchInlineSnapshot(`
    "
    .foo {
      content: \\"line1\\\\
    line2\\";
    }"
  `);
});
