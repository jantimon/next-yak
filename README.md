# next-yak

![Yak At Work as Frontend Dev](https://github.com/jantimon/next-yak/assets/4113649/2dcaf443-7205-4ef3-ba44-fbbe3ef2807d)

[![npm version](https://badge.fury.io/js/next-yak.svg)](https://www.npmjs.com/package/next-yak)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jantimon/next-yak/blob/main/LICENSE)

**next-yak** is a CSS-in-JS solution tailored for [Next.js](https://nextjs.org/) that seamlessly combines the expressive power of styled-components syntax with efficient build-time extraction of CSS using Next.js's built-in CSS configuration.


## Features

- **Build-time Extraction**: Minimize runtime overhead by extracting CSS at build time, leveraging Next.js CSS configuration.
  
- **Minimal Runtime Footprint**: Enjoy a small runtime footprint as only CSS class names need to be applied during runtime, with no additional CSS added to the CSSOM.

- **Optimized for Production**: Benefit from optimized, minified, and vendor-prefixed CSS generated during build time, resulting in a highly performant solution.

- **Atomic CSS Integration**: Easily combine with existing atomic CSS solutions like Tailwind CSS for a customized and efficient styling approach.

- **Inspired by the Best**: Incorporates ideas from Styled-Components, Linaria, Emotion, and Vanilla Extract to offer a powerful yet intuitive styling experienc

<video width="630" height="300" src="https://github.com/jantimon/next-yak/assets/4113649/cfacb70e-1b42-4a41-9706-f5e4da1fe8cd" alt="Code example"></video>


## Installation

```bash
npm install next-yak
```

or

```bash
yarn add next-yak
```

## Getting Started

Try it on [stackblitz](https://stackblitz.com/edit/stackblitz-starters-dfykqy?file=app%2Fpage.tsx)

### Locally

1. Install **next-yak** in your Next.js project.

2. Add next-yak to your `next.config.js`:

```js
// next.config.js
const { withYak } = require("next-yak/withYak");

const nextConfig = {
  // your next.js config
};

module.exports = withYak(nextConfig);
```

3. Ready to go:

```jsx
// pages/index.js
import { styled } from 'next-yak';

const StyledDiv = styled.div`
  color: #333;
  padding: 16px;
  background-color: #f0f0f0;
`;

function HomePage() {
  return <StyledDiv>Hello, next-yak!</StyledDiv>;
}

export default HomePage;
```

## More Examples

### Dynamic Styles

Dynamic Styles will only toggle the css class during runtime:

```jsx
import { styled, css } from 'next-yak';

const ToggleButton = styled.button`
  ${props => props.$active
     ? css`background-color: green`
     : css`background-color: lime`
  };
  color: white;
  padding: 10px 20px;
`;
```

<video width="630" height="300" src="https://github.com/jantimon/next-yak/assets/4113649/9065d0a0-f839-4d91-b05e-b3e72c7c2bb0" alt="Dynamic Styles example"></video>

### Dynamic Properties

Dynamic Properties use custom properties ([aka css variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)) under the hood to extract the CSS at built time but modify properties at runtime:

```jsx
import { styled } from 'next-yak';

const ProgressBar = styled.div`
  width: ${props => `${props.$percent}%`};
  height: 20px;
  background-color: #3498db;
  transition: width 0.3s ease-in-out;
`;

const ProgressBarContainer = styled.div`
  border: 1px solid #ccc;
`;

const ExampleComponent = () => {
  const progress = 75; // You can dynamically set this value

  return (
    <ProgressBarContainer>
      <ProgressBar $percent={progress} />
    </ProgressBarContainer>
  );
};
```

<video width="630" height="300" src="https://github.com/jantimon/next-yak/assets/4113649/11e9aca7-f5c8-416b-bb67-67e180be81e8" alt="Dynamic Styles example"></video>

### Targeting Components

In next-yak, you can target other components directly using CSS selectors as long as they are **in the same file**:

```jsx
import { styled, keyframes } from 'next-yak';

const flip = keyframes`
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
`;

const Glow = styled.div`
  /* Add your Glow component styles here */
`;

const Text = styled.span`
  display: inline-block;
  ${Glow}:hover & {
    animation: 1.5s ${flip} ease-out;
  }
`;

const ExampleComponent = () => {
  return (
    <Glow>
      <Text>This text will flip on hover.</Text>
    </Glow>
  );
};
```

## Nesting

`next-yak` supports nesting out of the box.  
Next.js 13 supports nesting only with the `postcss-nested` plugin.  
Therefore you have to create a `postcss.config.js` file in your project root:

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-nested': {},
  }
};
```

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

## Performance Gains

[![CSS Extract](https://raw.githubusercontent.com/jantimon/next-yak/main/css-extract.gif)](https://raw.githubusercontent.com/jantimon/next-yak/main/css-extract.gif)

## How it works

next-yak converts css-in-js into css modules. This allows to use the full power of postcss and its plugins. It also allows to use the same optimizations for css files and css-in-js.

[![Compile Flow](https://raw.githubusercontent.com/jantimon/next-yak/main/compile-flow.webp)](https://raw.githubusercontent.com/jantimon/next-yak/main/compile-flow.webp)


## Atomic CSS

`next-yak` ships with atomic css support  
So you can use [tailwind](https://tailwindcss.com/) out of the box without additonal configuration.

```tsx
import { styled, atoms } from "next-yak";

// Mixing tailwind with custom styles
const Icon = styled.p`
 ${atoms("font-bold")}
 @supports (initial-letter: 2) {
   initial-letter: 2;
 }
`;

// Apply tailwind classes conditionally
const Button = styled.button`
  ${({ $primary }) =>
    $primary
      ? atoms(
          'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        )
      : atoms(
          'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
        )}
`;
```

## Todos:

next-yak is currently in the development phase, with several todos that must be completed before it is ready for production:

 - [ ] improve js parsing - right now it not reusing babel..
 - [ ] better sourcemaps
 - [ ] improve runtime code size and typings
 - [ ] maybe remove proxy by compiling `styled.button -> styled("button")`
 - [ ] better error messages
 - [x] replace the current config apporach with a solution similar to vanilla-extracts `.styles.ts` files
 - [x] add theme provider (which works for Server Components)
 - [x] add support for forwardRef
 - [x] add support for attrs
 - [x] config hot module reloading
 

<details>
  <summary>prs</summary>

  - https://github.com/vercel/next.js/pull/51115
  - https://github.com/vercel/next.js/pull/53796
  - https://github.com/css-modules/postcss-modules-local-by-default/pull/64
  
</details>

## Acknowledgments

Special thanks to the contributors and the inspiring projects that influenced next-yak:

  - Styled-Components 💅: For pioneering the styled syntax and redefining styling in the React ecosystem.
  - Linaria: For its innovative approach to zero-runtime CSS in JS and efficient styling solutions.
  - Emotion: For pushing the boundaries of CSS-in-JS and providing a high-performance styling experience.
  - Vanilla Extract: For its focus on type-safe, zero-runtime CSS and contributing to the evolution of styling techniques.
  - Tailwind CSS: For its exceptional atomic CSS approach, enabling efficient and customizable styling solutions.

## License

**next-yak** is licensed under the [MIT License](link/to/LICENSE).

---

Feel free to reach out with any questions, issues, or suggestions!
