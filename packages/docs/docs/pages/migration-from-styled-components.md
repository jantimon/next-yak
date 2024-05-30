# Migration from styled-components

We tried to keep the changes you need to know if you're already familiar with styled-components 
to a minimum. 

## Familiar API

### styled

You can use the `styled` tag as you know for all kind of elements.

:::code-group

```jsx [styled-components]
import styled from 'styled-components';

const Button = styled.button`
	background: #BF4F74;
`;

const Nav = styled.nav`
	background: #BF4F74;
`;
```

```tsx [next-yak]
import { styled } from 'next-yak';

const Button = styled.button`
	background: #BF4F74;
`;

const Nav = styled.nav`
	background: #BF4F74;
`;
```

:::

You can use static or dynamic parts the same way you would use it in styled-components.

:::code-group

```jsx [styled-components]
import styled from 'styled-components';

const Button = styled.button<{ $primary: boolean }>`
	background: #BF4F74;
	color: ${props => props.$primary ? "white" : "#BF4F74"};
`;
```

```tsx [next-yak]
import { styled } from 'next-yak';

const Button = styled.button<{ $primary: boolean }>`
	background: #BF4F74;
	color: ${props => props.$primary ? "white" : "#BF4F74"};
`;
```

:::

### css

The `css` tagged template literal in styled-components is used when you want to use a dynamic
CSS part "outside" of the styled literal. Next-yak works similar but with the difference that you
should use it everytime you want to have dynamic properties where the CSS property isn't known
in the outside literal.

:::code-group

```jsx [styled-components]
import styled from 'styled-components';

const Button = styled.button<{ $primary: boolean }>`
	background: #BF4F74;
	${props => props.$primary ? "color: white;" : "color: #BF4F74;"}
`;
```

```tsx [next-yak]
import { styled } from 'next-yak';

const Button = styled.button<{ $primary: boolean }>`
	background: #BF4F74;
	${props => props.$primary ? css`color: white` : css`color: #BF4F74`}
`;
```

::: 

Next-yak transforms `css` code into a class name that is referenced. So you can think of it as
an additional css class that gets added/subtracted as needed.

#### css prop

Also the css prop works similar to styled-components. The main difference is that you can't use
dynamic values in the css prop and that you have to use the `css` tag to define the css.

:::code-group

```jsx [styled-components]
<div
  css={`
    background: papayawhip;
    color: ${props => props.theme.colors.text};
  `}
/>
<Button
  css="padding: 0.5em 1em;"
/>
```

```tsx [next-yak]
import { css } from 'next-yak';

<div
  css={css`
    background: papayawhip;
    color: 'red';
  `}
/>
<Button
  css={css`padding: 0.5em 1em;`}
/>
```

:::

If you use TypeScript, you can just add the following to your `tsconfig.json` to get type checking for the css prop.

```json
{
	"compilerOptions": {
      "jsxImportSource": "next-yak"
	}
}
```


### keyframes

The api for keyframes is exactly the same as in styled-components. You can define your keyframes
and use it in your animations.


:::code-group

```jsx [styled-components]
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

const Rotate = styled.div`
	display: inline-block;
	animation: ${rotate} 2s linear infinite;
	padding: 2rem 1rem;
	font-size: 2rem;
`;
```

```tsx [next-yak]
import { styled, keyframes } from 'next-yak';

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

const Rotate = styled.div`
	display: inline-block;
	animation: ${rotate} 2s linear infinite;
	padding: 2rem 1rem;
	font-size: 2rem;
`;
```

:::

### attrs

Next-yak also enables `.attrs` on your components and has the same behaviour as in styled-components

:::code-group

```jsx [styled-components]
import styled from 'styled-components';

const Input = styled.input.attrs(props => ({
	type: "text",
	size: props.size || "1em"
}))`
	color: palevioletred;
	font-size: 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;
```

```tsx [next-yak]
import { styled } from 'next-yak';

const Input = styled.input.attrs(props => ({
	type: "text",
	size: props.size || "1em"
}))`
	color: palevioletred;
	font-size: 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;
```

:::

### References to other components

In order to create a selector that includes another component, you can just reference it in the tagged
template literal. 

:::code-group

```jsx [styled-components]
import styled from 'styled-components';

const Button = styled.button`
	color: blue;
`;

const Wrapper = styled.div`
	${Button} {
		color: red;
	}
`;
```

```tsx [next-yak]
import { styled } from 'next-yak';

const Button = styled.button`
	color: blue;
`;

const Wrapper = styled.div`
	${Button} {
		color: red;
	}
`;
```

:::

During build time the reference is changed to the actual generated class name of the referenced component.

### Mixins

Mixins allow you to predefine CSS styles and reuse them across components. You can just create mixins the same
way as you would with styled-components.

:::code-group

```jsx [styled-components]
import styled, { css } from 'styled-components';

const mixin = css`
	color: green;
`;

const MyComp = styled.div`
	background-color: yellow;
	${mixin}
`;
```

```tsx [next-yak]
import { css, styled } from 'next-yak';

const mixin = css`
	color: green;
`;

const MyComp = styled.div`
	background-color: yellow;
	${mixin}
`;
```

:::


## Migration

### Change import

Change the import from `styled-components` to `next-yak` and change the import of `styled` from a default import 
to a named import.

```ts
import styled, { css, keyframes } from 'styled-components'; // [!code --]
import { styled, css, keyframes } from 'next-yak'; // [!code ++]
```

### Add yak files

Yak files are used to store static values that are extracted during build time. You can create a `.yak.ts` file
everywhere in your project and it will be picked up by next-yak.

```ts [constants.yak.ts]
export const colors = {
	primary: "#BF4F74",
	secondary: "#F7B801",
};

export const breakpoints = {
	mobile: "@media (max-width: 420px)",
	tablet: "@media (max-width: 768px)",
	desktop: "@media (min-width: 769px)",
};
```

You can then use these values in your styled components.

```tsx
import { styled } from 'next-yak';
import { colors, breakpoints } from './constants.yak';

const Button = styled.button`
	background: ${colors.primary};
	${breakpoints.mobile} {
		font-size: 1rem;
	}
	${breakpoints.tablet} {
		font-size: 1.5rem;
	}
	${breakpoints.desktop} {
		font-size: 2rem;
	}
`;
```

It looks and feels like a mixin from styled-components but it's actually a static value that gets injected during build time.
This is the reason why you can't use dynamic values in yak files, as they have to be known during build time whereas 
mixin values can be dynamic.

So this doesn't work:

```ts [constants.yak.ts]
export const colors = {
	primary: "#BF4F74",
	secondary: "#F7B801",
	dynamic: (props: { $primary: boolean }) => props.$primary ? "#BF4F74" : "white", // [!code hl]
};

export const breakpoints = (media: Record<string, string>) => { // [!code hl]
	return media;
};
```

### Replace styled-components with next-yak

Replace all your styled-components with next-yak. You can use the same API as you would with styled-components.

```tsx
import styled, { css, keyframes } from 'styled-components'; // [!code --]
import { styled, css, keyframes } from 'next-yak'; // [!code ++]

const Button = styled.button`
	background: #BF4F74;
	color: ${props => props.$primary ? "white" : "#BF4F74"};
`;

const Input = styled.input.attrs(props => ({
	type: "text",
	size: props.size || "1em"
}))`
	color: palevioletred;
	font-size: 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

const Wrapper = styled.div`
	${Button} {
		color: red;
	}
`;

const mixin = css`
	color: green;
`;

const MyComp = styled.div`
	background-color: yellow;
	${mixin}
`;

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

const Rotate = styled.div`
	display: inline-block;
	animation: ${rotate} 2s linear infinite;
	padding: 2rem 1rem;
	font-size: 2rem;
`;
```

Replace some mixins with constant yak files.

```tsx
import styled, { css } from 'styled-components'; // [!code --]
import { colors } from "./colors-mixin"; // [!code --]
import { css, styled } from 'next-yak'; // [!code ++]
import { colors } from './colors.yak'; // [!code ++]

const Button = styled.button`
	background: ${colors.primary};
	color: ${props => props.$primary ? "white" : colors.primary};
`;
```

Wrap the imported component in a local component when you want to reference it.

```tsx
import styled from 'styled-components'; // [!code --]
import { styled } from 'next-yak'; // [!code ++]
import { Button } from './button';

const LocalButton = styled(Button)``;

const Wrapper = styled.div`
	${Button} { // [!code --]
	${LocalButton} { // [!code ++]
		color: red;
	}
`;
```


Or add a static class to referenced components outside of the current file.

:::code-group

```tsx [my-component.tsx]
import styled from 'styled-components'; // [!code --]
import { styled } from 'next-yak'; // [!code ++]

export const Button = styled.button` 
	color: blue; 
`; 

export const MyComponent = () => {
	return (
		<Button
			className="myButton" // [!code ++]
		>
			Click me
		</Button>);
```

```tsx [wrapper.tsx]
import { styled } from 'next-yak';
import { Button } from './my-component'; // [!code --]

const Wrapper = styled.div`
	${Button} { // [!code --]
	.myButton { // [!code ++]
		color: red;
	}
`;
```

:::

## Missing features

Currently `.withConfig` and the `as` prop are not supported. We might add support for these features in the future.

## Conclusion

next-yak is a drop-in replacement for styled-components that works with Server Components and Client Components. It
provides a familiar API and adds the ability to use static values in your styled components. This is especially useful
when you want to use the same values across your application and don't want to pass them down the component tree.

If you have any questions or feedback, feel free to reach out to us on [GitHub](https://github.com/jantimon/next-yak)
