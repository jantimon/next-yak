"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// withYak/index.ts
var withYak_exports = {};
__export(withYak_exports, {
  withYak: () => withYak
});
module.exports = __toCommonJS(withYak_exports);
var import_node_path = __toESM(require("path"), 1);
var import_node_fs = require("fs");
var import_module = require("module");
var import_meta = {};
var isoRequire = import_meta?.url ? (0, import_module.createRequire)(import_meta.url) : require;
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
  const yakContext = contextPath ? import_node_path.default.resolve(cwd, contextPath) : import_node_path.default.resolve(cwd, "yak.context");
  const extensions = ["", ".ts", ".tsx", ".js", ".jsx"];
  for (const extension in extensions) {
    const fileName = yakContext + extensions[extension];
    if ((0, import_node_fs.existsSync)(fileName)) {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  withYak
});
//# sourceMappingURL=index.cjs.map