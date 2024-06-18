import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Next-Yak',
  description: "next-yak is a CSS-in-JS solution tailored for Next.js that seamlessly combines the expressive power of styled-components syntax with efficient build-time extraction of CSS using Next.js's built-in CSS configuration.",
  iconUrl: '/yak-icon-light.svg',
  logoUrl: {light: '/yak-icon-light.svg', dark: '/yak-icon-dark.svg'},
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Why next-yak?',
      link: '/why-next-yak',
    },
    {
      text: 'Features',
      link: '/features',
    },
    {
      text: 'Migration from styled-components',
      link: '/migration-from-styled-components',
    },
    {
      text: 'How does it work?',
      link: '/how-does-it-work',
    },
    {
      text: 'FAQ',
      link: '/faq',
    },
    {
      text: 'Examples',
      link: '/examples',
    },
    {
      text: 'Roadmap',
      link: '/roadmap',
    },
  ],
  topNav: [
    {
      text: 'Documentation',
      link: '/getting-started',
    },
    {
      text: 'Playground',
      link: '/playground',
    },
    {
      text: 'GitHub',
      link: 'https://github.com/jantimon/next-yak',
    },
  ],
  vite: {
    build: {
      // correct minification of babel
      minify: 'terser',
    }
  }
})
