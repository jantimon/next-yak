import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["shiki", "@shikijs/monaco"],
    // serverComponentsExternalPackages: ["next-yak"],
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
