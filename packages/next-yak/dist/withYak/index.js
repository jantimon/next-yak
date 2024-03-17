// withYak/index.ts
import path from "path";
import { fileURLToPath } from "url";
import { existsSync } from "fs";
import { dirname } from "path";
var currentDir = typeof __dirname !== "undefined" ? __dirname : dirname(fileURLToPath(import.meta.url));
var addYak = (yakOptions, nextConfig) => {
  const previousConfig = nextConfig.webpack;
  nextConfig.webpack = (webpackConfig, options) => {
    if (previousConfig) {
      webpackConfig = previousConfig(webpackConfig, options);
    }
    webpackConfig.module.rules.push({
      test: /\.tsx?$/,
      loader: path.join(currentDir, "../loaders/tsloader.js"),
      options: yakOptions,
      issuerLayer: {
        // prevent recursions when calling this.importModule
        // in the tsloader
        not: ["yak-importModule"]
      }
    });
    webpackConfig.module.rules.push({
      test: /\.yak\.module\.css$/,
      loader: path.join(currentDir, "../loaders/cssloader.js"),
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