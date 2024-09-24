import { createMDX } from "fumadocs-mdx/next";
import path from "path";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["shiki", "@shikijs/monaco"],
    // serverComponentsExternalPackages: ["next-yak"],
  },
  transpilePackages: ["yak-swc"],
  webpack: (config, { isServer, webpack }) => {
    if (isServer) {
      config.plugins.push(
        new webpack.ProvidePlugin({
          YourDependency: "yak-swc",
        })
      );
    }
    config.module.rules.push({
      test: /\.d\.c?ts$/,
      resourceQuery: /raw/,
      use: "raw-loader",
      // include: [
      //   path.resolve(process.cwd(), "node_modules"), // Allow importing from node_modules
      //   path.resolve(process.cwd()), // And from your source directory
      // ],
    });

    return config;
  },

  // webpack: (config, { isServer }) => {
  //   config.ignoreWarnings = [
  //     { module: /node_modules\/node-fetch\/lib\/index\.js/ },
  //     {
  //       message:
  //         /require function is used in a way in which dependencies cannot be statically extracted/,
  //     },
  //     {
  //       message:
  //         /require\.extensions is not supported by webpack\. Use a loader instead\./,
  //     },
  //   ];
  //   return config;
  // },
};

export default withMDX(config);
