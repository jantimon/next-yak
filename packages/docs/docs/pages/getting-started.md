# next-yak

**next-yak** is a CSS-in-JS solution tailored for [Next.js](https://nextjs.org/) that seamlessly combines 
the expressive power of styled-components syntax with efficient build-time extraction of CSS using 
Next.js's built-in CSS configuration.

## Installation

::::steps

### Install the package

Install next-yak dependency using your favorite package manager.

:::code-group

```bash [npm]
npm i next-yak
```

```bash [pnpm]
pnpm i next-yak
```

```bash [yarn]
yarn add next-yak
```

:::

### Enable next-yak

Add next-yak to your `next.config.mjs` or `next.config.js`:

:::code-group

```js [next.config.mjs]
import { withYak } from "next-yak/withYak";

const nextConfig = {
  // your next.js config
};

export default withYak(nextConfig);
```

```js [next.config.js]
const { withYak } = require("next-yak/withYak");

const nextConfig = {
  // your next.js config
};

module.exports = withYak(nextConfig);
```

:::

### Start using next-yak

With the installation and configuration done, you can now use next-yak directly in your components. Here's a simple example:


```jsx [pages/index.tsx]
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

You're now ready to use next-yak in your Next.js project.

::::
