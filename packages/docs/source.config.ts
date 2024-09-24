import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { transformerTwoslash } from "fumadocs-twoslash";
import { transformerNotationDiff } from "@shikijs/transformers";

export const { docs, meta } = defineDocs();

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: "vitesse-light",
        dark: "vitesse-dark",
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerNotationDiff(),
        transformerTwoslash({
          twoslashOptions: {
            compilerOptions: {
              jsx: 1, // JSX preserve
              paths: {
                "@/*": ["./*"],
              },
            },
          },
        }),
      ],
    },
  },
});
