# next-yak

yet another CSS-in-JS library

a CSS-in-JS with the power of "dynamic at the speed and reliability of static" 🙃

the initial version of next-yak will only work for next.js

## Motivation

Most of the existing CSS-in-JS libraries are either slow or have a complex api. This project tries to find a middle ground between speed and api complexity.

The goal of this project is to create a proof of concept for a CSS-in-JS library that has the following properties:

 - fast
   - no runtime
   - can be statically extracted
   - can be optimized by postcss
   - no processing during hydration
   - can make use of [103 early hints](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103)
 - api
   - ui colocation (mixing css and jsx)
   - familiar `styled.div` api
   - composable `styled(Component)`
   - allows conditional styles
   - allow to use props in styles
   - allow to use a context based theme in styles
   - typescript support

Optimizations are done by postcss. This allows to use the full power of postcss and its plugins. It also allows to use the same optimizations for css files and css-in-js.

## Example

Try it on [stackblitz](https://stackblitz.com/edit/stackblitz-starters-dfykqy?file=app%2Fpage.tsx)

```tsx
import { styled, css } from "next-yak";

const Title = styled.h1<{ x: number; children: React.ReactNode }>`
  display: block;
  ${({ $x }) => $x % 2 === 0 && css`color: red`}
  position: relative;
  top: ${({ $x }) => `${$x * 100}px`};
`;

const App = () => (
  <Title $x={3}>
    Hello World
  </Title>
);
```

## Performance Gains

[![CSS Extract](https://raw.githubusercontent.com/jantimon/next-yak/main/css-extract.gif)](https://raw.githubusercontent.com/jantimon/next-yak/main/css-extract.gif)

## How it works

next-yak converts css-in-js into css modules. This allows to use the full power of postcss and its plugins. It also allows to use the same optimizations for css files and css-in-js.

[![Compile Flow](https://raw.githubusercontent.com/jantimon/next-yak/main/compile-flow.webp)](https://raw.githubusercontent.com/jantimon/next-yak/main/compile-flow.webp)


### Atomic CSS

next-yak provide class name helpers. This allows using [tailwind](https://tailwindcss.com/) out of the box without additonal configuration.

```tsx
import { styled, css, atoms } from "next-yak";

const SpinningTitle = styled.h1<{ isAnimated: boolean; children: React.ReactNode }>`
  ${atoms("tw-text-lg md:tw-text-xl tw-bg-red-500")}
  ${({ isAnimated }) => isAnimated && css`animation: spin 1s linear infinite`)}
`;

const App = () => (
  <SpinningTitle isAnimated={true}>
    Hello World
  </SpinningTitle>
);
```

## Todos:

This is a proof of concept. There are a lot of things that need to be done before this can be used in production:

 - [ ] improve js parsing - right now it not reusing babel..
 - [ ] config hot module reloading

<details>
  <summary>prs</summary>

  - https://github.com/vercel/next.js/pull/51115
  - https://github.com/vercel/next.js/pull/53796
  - https://github.com/css-modules/postcss-modules-local-by-default/pull/64
  
</details>

## Prior art

This POC is heavily inspried by [styled-components](https://styled-components.com/), [emotion](https://emotion.sh/docs/introduction) and [linaria](https://github.com/callstack/linaria).
