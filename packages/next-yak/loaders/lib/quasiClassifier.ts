import stripCssComments from "./stripCssComments.js";

/**
 * Checks a quasiValue and returns its type
 *
 * - empty: no expressions, no text
 * - unknownSelector: starts with a `{` e.g. `{ opacity: 0.5; }` or `,` e.g. `, bar { ... }`
 * - insideCssValue: does not end with a `{` or `}` or `;` e.g. `color: `
 */
export default function quasiClassifier(
  quasiValue: string,
  currentNestingScopes: string[]
) {
  // TODO - for better performance we could move the comment skipping logic
  // directly in the for loop below instead of calling stripCssComments
  const trimmedCssString = stripCssComments(quasiValue).trim();
  if (trimmedCssString === "") {
    return {
      empty: true,
      unknownSelector: false,
      insideCssValue: false,
      currentNestingScopes,
    };
  }
  let isInsideString: '"' | "'" | false = false;
  let currentCharacter = "";
  let newNestingLevel = [...currentNestingScopes];
  let currentSelector = "";
  for (let index = 0; index < trimmedCssString.length; index++) {
    currentCharacter = trimmedCssString[index];
    if (
      trimmedCssString[index - 1] !== "\\" &&
      (currentCharacter === '"' || currentCharacter === "'")
    ) {
      if (isInsideString === currentCharacter) {
        isInsideString = false;
      } else if (!isInsideString) {
        isInsideString = currentCharacter;
      }
    }
    if (isInsideString) {
      continue;
    }
    if (currentCharacter === "{") {
      const selector = currentSelector.trim();
      if (selector !== "") {
        newNestingLevel.push(selector);
      }
      // after an opening bracket a new selector might start e.g.:
      // .class {
      //   .nested-class {
      currentSelector = "";
    } else if (currentCharacter === "}") {
      newNestingLevel.pop();
      // after a closing bracket a new selector might start e.g.:
      // .class {
      //   color: red;
      // }
      // .other-class {
      currentSelector = "";
    } else if (currentCharacter === ";") {
      // after a semi-colon a nested selector might start e.g.:
      // .class {
      //   color: red;
      //   .nested-class {
      currentSelector = "";
    } else {
      currentSelector += currentCharacter;
    }
  }

  return {
    empty: false,
    unknownSelector: trimmedCssString[0] === "{" || trimmedCssString[0] === ",",
    insideCssValue:
      currentCharacter !== "{" &&
      currentCharacter !== "}" &&
      currentCharacter !== ";",
    currentNestingScopes: newNestingLevel,
  };
}
