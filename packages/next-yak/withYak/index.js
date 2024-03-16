var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// withYak/index.ts
import path from "path";
import { existsSync } from "fs";
import { createRequire } from "module";
var isoRequire = import.meta?.url ? createRequire(import.meta.url) : __require;
var addYak = (yakOptions, nextConfig) => {
  const previousConfig = nextConfig.webpack;
  nextConfig.webpack = (webpackConfig, options) => {
    if (previousConfig) {
      webpackConfig = previousConfig(webpackConfig, options);
    }
    webpackConfig.module.rules.push({
      test: /\.tsx?$/,
      loader: isoRequire.resolve("../loaders/tsloader.cjs"),
      options: yakOptions,
      issuerLayer: {
        // prevent recursions when calling this.importModule
        // in the tsloader
        not: ["yak-importModule"]
      }
    });
    webpackConfig.module.rules.push({
      test: /\.yak\.module\.css$/,
      loader: isoRequire.resolve("../loaders/cssloader.cjs"),
      options: yakOptions
    });
    const yakContext = resolveYakContext(
      yakOptions.contextPath,
      webpackConfig.context
    );
    if (yakContext) {
      webpackConfig.resolve.alias["next-yak/context/baseContext"] = yakContext;
    }
    return webpackConfig;
  };
  return nextConfig;
};
function resolveYakContext(contextPath, cwd) {
  const yakContext = contextPath ? path.resolve(cwd, contextPath) : path.resolve(cwd, "yak.context");
  const extensions = ["", ".ts", ".tsx", ".js", ".jsx"];
  for (const extension in extensions) {
    const fileName = yakContext + extensions[extension];
    if (existsSync(fileName)) {
      return fileName;
    }
  }
  if (contextPath) {
    throw new Error(`Could not find yak context file at ${yakContext}`);
  }
}
var withYak = (maybeYakOptions, nextConfig) => {
  if (nextConfig === void 0) {
    return withYak({}, maybeYakOptions);
  }
  const yakOptions = maybeYakOptions;
  if (typeof nextConfig === "function") {
    return (...args) => {
      const config = nextConfig(...args);
      return config instanceof Promise ? config.then((config2) => addYak(yakOptions, config2)) : addYak(yakOptions, config);
    };
  }
  return addYak(yakOptions, nextConfig);
};
export {
  withYak
};
//# sourceMappingURL=index.js.map