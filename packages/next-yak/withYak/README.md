Helper to configure NextJs

Supports:
  - plain object NextJs configs
  - NextJs configs as function
  - NextJs configs as async function

```js
// next.config.js
const { withYak } = require("next-yak");

const nextConfig = {
  // your next.js config
};

module.exports = withYak(nextConfig);
```

Allows setting a custom yakConfig:

```js
// next.config.js
const { withYak } = require("next-yak");

const nextConfig = {
  // your next.js config
};

const yakConfig = {
  // your yak config
};

module.exports = withYak(yakConfig, nextConfig);
```