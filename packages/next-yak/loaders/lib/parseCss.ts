export interface ParserState {
  isInsideString: "'" | '"' | false;
  isInsideComment: boolean;
  isInsidePropertyValue: boolean;
  isInsideAtRule: boolean;
  currentScopes: CssScope[];
  currentDeclaration: Declaration;
}

export interface CssScope {
  name: string;
  type: "at-rule" | "selector";
}

export interface Declaration {
  property: string;
  value: string;
  scope: CssScope[];
  closed: boolean;
}

const newDeclaration = (): Declaration => ({
  scope: [],
  property: "",
  value: "",
  closed: false,
});

/**
 * A function that parses a string of CSS and returns the state of the parser after parsing the string.
 * Useful for parsing incomplete CSS strings.
 */
export function parseCss(
  cssString: string,
  initialState: ParserState = {
    isInsideString: false,
    isInsideComment: false,
    isInsidePropertyValue: false,
    isInsideAtRule: false,
    currentScopes: [],
    currentDeclaration: newDeclaration(),
  },
): { state: ParserState; declarations: Declaration[] } {
  let isInsideString: "'" | '"' | false = initialState.isInsideString;
  let isInsideComment = initialState.isInsideComment;
  let isInsidePropertyValue = initialState.isInsidePropertyValue;
  let currentScopes = [...initialState.currentScopes];
  let currentCode = "";
  let isInsideAtRule = initialState.isInsideAtRule;
  let currentDeclaration: Declaration = {
    ...initialState.currentDeclaration,
    scope: currentScopes,
  };
  let backSlashes = 0;
  const declarations: Declaration[] = [currentDeclaration];

  // Iterate over the CSS string character by character
  for (let index = 0; index < cssString.length; index++) {
    let previousBackSlashes = backSlashes;
    const currentCharacter = cssString[index];
    if (currentCharacter === "\\") {
      backSlashes++;
    } else {
      backSlashes = 0;
    }

    if (
      previousBackSlashes % 2 === 0 &&
      (currentCharacter === '"' || currentCharacter === "'")
    ) {
      if (isInsideString === currentCharacter) {
        isInsideString = false;
      } else if (!isInsideString) {
        isInsideString = currentCharacter;
      }
    }

    if (isInsideString) {
      // keep full string value and don't parse it
      currentCode += currentCharacter;
      currentDeclaration.value += currentCharacter;
    }
    // Find beginning of `/*` type comment
    else if (currentCharacter === "/" && cssString[index + 1] === "*") {
      let index2 = index + 2;
      isInsideComment = true;

      // Iterate over comment
      for (; index2 < cssString.length; index2++) {
        // Find end of comment
        if (cssString[index2] === "*" && cssString[index2 + 1] === "/") {
          isInsideComment = false;
          if (cssString[index2 + 2] === "\n") {
            index2++;
          } else if (cssString[index2 + 2] + cssString[index2 + 3] === "\r\n") {
            index2 += 2;
          }
          break;
        }
      }
      // Resume iteration over CSS string from the end of the comment
      index = index2 + 1;
      continue;
    }
    // find beginning of `//` type comment
    else if (currentCharacter === "/" && cssString[index + 1] === "/") {
      let index2 = index + 2;
      isInsideComment = true;

      // Iterate over comment
      for (; index2 < cssString.length; index2++) {
        // Find end of comment
        if (cssString[index2] === "\n") {
          isInsideComment = false;
          break;
        }
      }
      // Resume iteration over CSS string from the end of the comment
      index = index2 + 1;
      continue;
    }
    // check if the current selector got closed
    // closes also the current declaration
    else if (currentCharacter === "}") {
      const closedScope = currentScopes.pop();
      currentCode = "";
      isInsidePropertyValue = false;
      currentDeclaration.scope = [...currentScopes];
      if (currentDeclaration.property) {
        // whenever a `}` closes a declaration e.g.:
        // .foo { color: red }
        // the declaration is part of this closed scope
        if (closedScope) {
          currentDeclaration.scope.push(closedScope);
        }
        currentDeclaration.closed = true;
        currentDeclaration = newDeclaration();
        declarations.push(currentDeclaration);
      }
    }
    // check if the current selector got opened
    else if (currentCharacter === "{") {
      currentScopes.push({
        name: currentCode.trim(),
        type: isInsideAtRule ? "at-rule" : "selector",
      });
      currentCode = "";
      isInsidePropertyValue = false;
      isInsideAtRule = false;
      currentDeclaration.property = "";
      currentDeclaration.value = "";
    }
    // check if the current declaration got closed
    else if (currentCharacter === ";") {
      currentCode = "";
      isInsidePropertyValue = false;
      isInsideAtRule = false;
      currentDeclaration.closed = true;
      currentDeclaration.scope = [...currentScopes];
      currentDeclaration = newDeclaration();
      declarations.push(currentDeclaration);
    }
    // check for a property name
    // caution - this might also be a selector like
    // bar:hover
    else if (
      !isInsidePropertyValue &&
      !isInsideAtRule &&
      currentCharacter === ":"
    ) {
      isInsidePropertyValue = true;
      currentCode += currentCharacter;
    } else if (!isInsidePropertyValue && currentCharacter === "@") {
      isInsideAtRule = true;
      currentCode += currentCharacter;
    }
    // css code
    else {
      // don't keep multiple empty characters
      const previousCharacter =
        index === 0 ? currentDeclaration.value.at(-1) : cssString[index - 1];

      const isPreviousCharacterEmpty =
        (index > 0 && !currentCode) ||
        !previousCharacter ||
        previousCharacter === " " ||
        previousCharacter === "\n" ||
        previousCharacter === "\r" ||
        previousCharacter === "\t";
      const isCurrentCharacterEmpty =
        currentCharacter === " " ||
        currentCharacter === "\n" ||
        currentCharacter === "\r" ||
        currentCharacter === "\t";

      if (!isPreviousCharacterEmpty || !isCurrentCharacterEmpty) {
        currentCode += currentCharacter;
        if (isInsidePropertyValue) {
          // prevent leading spaces in the value
          if (!isCurrentCharacterEmpty || currentDeclaration.value) {
            currentDeclaration.value += currentCharacter;
          }
        } else {
          currentDeclaration.property += currentCharacter;
        }
      }
    }
  }

  // remove current declaration if it's empty
  if (!currentDeclaration.property) {
    declarations.pop();
  }

  return {
    state: {
      isInsideString,
      isInsideComment,
      isInsidePropertyValue,
      isInsideAtRule,
      currentDeclaration,
      currentScopes,
    },
    declarations,
  };
}
