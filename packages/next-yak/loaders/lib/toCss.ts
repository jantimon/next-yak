import type { CssScope, Declaration } from './parseCss.js';

export const toCss = (declarations: Declaration[]): string => {
  let css = '';
  let previousScopes: CssScope[] = [];
  for (const declaration of declarations) {
    // sort scopes by type to have selectors first
    const scopes = declaration.scope
    // close scopes that are not in the current declaration
    for (let i = 0; i < previousScopes.length; i++) {
      if (
        !scopes[i] ||
        scopes[i].name !== previousScopes[i].name ||
        scopes[i].type !== previousScopes[i].type
      ) {
        for (let j = previousScopes.length - 1; j >= i; j--) {
            css += '\n' + '  '.repeat(j) + '}';
        }
        break;
      }
    }
    // open scopes that are not in the previous declaration
    for (let i = 0; i < scopes.length; i++) {
      if (
        !previousScopes[i] ||
        scopes[i].name !== previousScopes[i].name ||
        scopes[i].type !== previousScopes[i].type
      ) {
        for (let j = i; j < scopes.length; j++) {
            css += '\n' + '  '.repeat(j) + scopes[j].name + ' {';
        }
        break;
      }
    }
    css += `\n${'  '.repeat(scopes.length)}${
      declaration.property
    }: ${declaration.value};`;
    previousScopes = scopes;
  }
  // close all scopes
  for (let i = previousScopes.length - 1; i >= 0; i--) {
    css += '\n' + '  '.repeat(i) + '}';
  }

  return css;
};
