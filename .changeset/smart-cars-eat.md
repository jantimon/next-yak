---
"next-yak": patch
---

Refactor CSS prop types to improve type inference and consistency

- Added new type `CSSProp` to be used by custom components to receive the `css` prop in a somewhat typesafe way
- Updated `css` function to return `ComponentStyle` only
