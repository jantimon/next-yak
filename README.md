# yacijs

yet another CSS-in-JS library

a CSS-in-JS POC with the power of "dynamic at the speed and reliability of static" 🙃

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

```tsx
import { styled, styleWhen, cssVar } from "@TBD";

const Title = styled.h1<{ x: number; children: React.ReactNode }>`
  display: block;
  ${styleWhen(({ x }) => x % 2 === 0, `color: red`)}
  position: relative;
  top: ${cssVar(({ x }) => `${x * 100}px`)};
`;

const App = () => (
  <Title x={3}>
    Hello World
  </Title>
);
```

## Issues

The follow issues might prevent this POC from actually working:

 - NextJs does not support the `!=!` import syntax as it checks `this.resourcePath`: https://github.com/vercel/next.js/blob/8366f1af31d71a3e9f69ad9d53d0264f61486e7e/packages/next/src/build/webpack/loaders/next-flight-css-loader.ts#L25 - Fix: https://github.com/vercel/next.js/pull/51115
 - Typescript does not allow type inference for nested template strings.


## Further ideas

### Atomic CSS

Provide class name helpers. This would allow using atomic css libraries like [tailwind](https://tailwindcss.com/) or [tachyons](https://tachyons.io/) with a css-in-js library.

```tsx
import { styled, styleWhen, cssVar } from "@TBD";

const SpinningTitle = styled.h1<{ isAnimated: boolean; children: React.ReactNode }>`
  ${classNames(() => "tw-text-lg md:tw-text-xl tw-bg-red-500")}
  ${styleWhen(({ isAnimated }) => isAnimated, `animation: spin 1s linear infinite`)}
`;

const App = () => (
  <SpinningTitle isAnimated={true}>
    Hello World
  </SpinningTitle>
);
```

### CSS Nesting

Extracting the css from the jsx would create a lot of duplicate css. This could be solved by using css nesting. See https://developer.chrome.com/articles/css-nesting/

### CSS Scope

Slots could lead to css collisions. This could be solved by using css scope. 
See https://fullystacked.net/posts/scope-in-css/

## Prior art

This POC is heavily inspried by [styled-components](https://styled-components.com/), [emotion](https://emotion.sh/docs/introduction) and [linaria](https://github.com/callstack/linaria).
