/// @ts-check

/**
 * @type {Promise<{ replaces?: Record<string, Record<string, string>> }>}
 */
let cache;
module.exports = function loadConfigOnce(loader) {
  const config = cache || loader().catch((e) => {
    console.error("Failed to load yak config:", e);
    return {};
  })

  if (!cache) {
    cache = config;
  }
  return config;
};
