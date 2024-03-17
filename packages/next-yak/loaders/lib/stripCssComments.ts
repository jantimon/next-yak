// from https://github.com/sindresorhus/strip-css-comments/tree/main
export default function stripCssComments(cssString: string) {
  let isInsideString: string | false = false;
  let currentCharacter = "";
  let comment = "";
  let returnValue = "";

  for (let index = 0; index < cssString.length; index++) {
    currentCharacter = cssString[index];

    if (
      cssString[index - 1] !== "\\" &&
      (currentCharacter === '"' || currentCharacter === "'")
    ) {
      if (isInsideString === currentCharacter) {
        isInsideString = false;
      } else if (!isInsideString) {
        isInsideString = currentCharacter;
      }
    }

    // Find beginning of `/*` type comment
    if (
      !isInsideString &&
      currentCharacter === "/" &&
      cssString[index + 1] === "*"
    ) {
      let index2 = index + 2;

      // Iterate over comment
      for (; index2 < cssString.length; index2++) {
        // Find end of comment
        if (cssString[index2] === "*" && cssString[index2 + 1] === "/") {
          if (cssString[index2 + 2] === "\n") {
            index2++;
          } else if (cssString[index2 + 2] + cssString[index2 + 3] === "\r\n") {
            index2 += 2;
          }
          comment = "";
          break;
        }
        // Store comment text
        comment += cssString[index2];
      }
      // Resume iteration over CSS string from the end of the comment
      index = index2 + 1;
      continue;
    }
    returnValue += currentCharacter;
  }
  return returnValue;
}
