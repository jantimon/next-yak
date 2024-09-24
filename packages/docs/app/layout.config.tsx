import { type HomeLayoutProps } from "fumadocs-ui/home-layout";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: (
      <div
        style={{
          display: "flex",
          gap: "6px",
        }}
      >
        <img
          src="/yak-icon-dark.svg"
          alt="Next Yak"
          style={{ width: "20px", height: "20px" }}
        />
        Yak
      </div>
    ),
  },
  links: [
    {
      text: "Documentation",
      url: "/docs/getting-started",
      active: "nested-url",
    },
    {
      text: "Playground",
      url: "/playground",
      active: "nested-url",
    },
  ],
  githubUrl: "https://github.com/jantimon/next-yak",
};
