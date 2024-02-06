# FAQ

## Is next-yak production ready?

No, next-yak is still below the 1.0V mark but we are working hard to make it production ready.

## Can I use next-yak with other frameworks than next.js?

Unfortunately not. If you want to use it in other frameworks just write an issue and we can discuss it.

## Can I use next-yak with other CSS-in-JS libraries?

Yes, you can use next-yak with other CSS-in-JS libraries. You can use it with styled-components, emotion, or any other library that 
adds css classes to your components.

## Can I reference a component in another component?

Yes, you can reference it in the tagged template literal. 
```jsx
import { styled } from 'next-yak';

const Button = styled.button`
	background: #BF4F74;
`;

const Nav = styled.nav`
	background: #BF4F74;
	${Button} {
		color: white;
	}
`;
```

:::info

This doesn't work for components outside of the current file, as next-yak only considers one file at a time.

:::

## Why does next-yak always generate CSS variables when the values are static references that are known at build time?

It's very hard to determine if a value is static or dynamic. We decided to always generate CSS variables to be on the safe side
and add errors if we detect that a value is static but a CSS variable is used.

## Can I use next-yak with TypeScript?

Yes, of course. Almost all code of next-yak is written in TypeScript and we have some TypeScript tests.

## Can I contribute to next-yak?

Yes, of course. We are happy about every contribution. Just write an issue or a pull request [here](https://github.com/jantimon/next-yak)