// @ts-check
/**
 * Finds all imports in a given code string which import from a .yak file
 * 
 * Uses regex to work with typescript and javascript
 * Does not support lazy imports
 * 
 * @param {string} code
 * @returns { { imports: { localName: string, importedName: string }[], from: string }[] }
 */
const getYakImports = (code) => {
    const codeWithoutComments = code.replace(/\/\*[\s\S]*?\*\//g, '');
    const allImports = codeWithoutComments.matchAll(/(^|\n|;)\s*import\s+(?:(\w+(?:\s+as\s+\w+)?)\s*,?\s*)?(?:{([^}]*)})?\s+from\s+"([^"]+\.yak)"(;|\n)/g);
    return [...allImports].map(([, , defaultImport, namedImports, from,]) => {
        // parse named imports to { localName: string, importedName: string }[]
        const imports = namedImports?.split(',').map((namedImport) => {
            const [importedName, localName = importedName] = namedImport.replace(/^type\s+/, "").trim().split(/\s+as\s+/);
            return { localName, importedName };
        }) ?? [];
        // parse default import to { localName: string, importedName: string }[]
        if (defaultImport) {
            imports.push(parseDefaultImport(defaultImport));
        }
        return { imports, from };
    });
};

/**
 * Parses a default import string
 * @param {string} defaultImport
 * @returns {{ localName: string, importedName: string }}
 */   
function parseDefaultImport(defaultImport) {
    const defaultImportArray = defaultImport.split(/\s+as\s+/);
    return { localName: defaultImportArray[1] ?? defaultImportArray[0], importedName: defaultImportArray[0] }
}

module.exports = getYakImports;