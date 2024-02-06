import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Docs',
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
      text: 'GitHub',
      link: 'https://github.com/jantimon/next-yak',
    },
  ],
})
