import extractCSSUnit from "../extractCssUnit.cjs";
import { describe, it, expect } from "vitest";

describe("extractCssUnit", () => {
  it("should handle all possible cases", () => {
    const testCases = [
      " ", // => null
      ";\n  display: block;\n  ", // => null
      " ease-out 1s infinite reverse both paused slidein;\n", // => ease-out
      ";\n    ", // => null
      "rem;\n        margin: ", // => rem
      "px;\n        z-index: ", // => px
      ";\n        transform: translateX(", // => null
      "px) translateY(", // => px
      "px);\n        font-family: 'Arial', sans-serif;\n     ", // => px
      "deg)\n          translate(0, -88px) rotate(", // => deg
      "deg);\n     ", // => deg
    ];

    const result = testCases.map((cssString) => {
      return extractCSSUnit(cssString);
    });
    expect(result).toMatchInlineSnapshot(`
      [
        null,
        null,
        null,
        null,
        "rem",
        "px",
        null,
        "px",
        "px",
        "deg",
        "deg",
      ]
    `);
  });
});
