/**
 * Searches for all css class names in the given css string and wraps them with :global()
 *
 * e.g. `
 *   color: red;
 *   .dark-mode {
 *     color: black;
 *   }
 * ` -> `
 *   color: red;
 *   :global(.dark-mode) {
 *     color: black;
 *   }
 * `
 *
 * @param {string} cssString
 */
const wrapClassesWithGlobal = (cssString) => {
  // Replace each matched class name with :global(className)
  return cssString.replace(/\.([a-zA-Z0-9-_]+)/g, (_match, className) => {
    return `:global(${className})`;
  });
};

module.exports = wrapClassesWithGlobal;
