// @ts-check

/** @typedef {import("@babel/types")} babel */

/**
 * Checks if an import declaration for a named import already exists in the program
 *
 * @param {babel.NodePath<babel.types.Program>} path
 * @param {import("@babel/types")} t
 * @param {string} source
 * @param {string} importedName
 * @returns {boolean}
 */
const importExists = (path, t, source, importedName) => {
  return path.node.body.some(
    (node) =>
      t.isImportDeclaration(node) &&
      node.source.value === source &&
      node.specifiers.some(
        (specifier) =>
          !t.isImportDefaultSpecifier(specifier) &&
          !t.isImportNamespaceSpecifier(specifier) &&
          !t.isStringLiteral(specifier.imported) &&
          specifier.imported &&
          specifier.imported.name === importedName
      )
  );
};

module.exports = importExists;
