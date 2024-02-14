/**
 * Extracts the css unit from a css string and checks if it is a valid CSS unit
 *
 * example:
 * " "                                                      => null
 * ";\n  display: block;\n  "                               => null
 * " ease-out 1s infinite reverse both paused slidein;\n"   => null
 * ";\n    "                                                => null
 * "rem;\n        margin: "                                 => rem
 * "px;\n        z-index: "                                 => px
 * ";\n        transform: translateX("                      => null
 * "px) translateY("                                        => px
 * "px);\n        font-family: "Arial", sans-serif;\n     " => px
 * "deg)\n          translate(0, -88px) rotate("            => deg
 * "deg);\n     "                                           => deg
 *
 * @param {string} quasi
 */
function extractCssUnit(quasi) {
  const match = quasi.match(/\s|([a-z%]+)(?=;|\s|\))/);
  return match && match[1] ? match[1] : null;
}

module.exports = extractCssUnit;
