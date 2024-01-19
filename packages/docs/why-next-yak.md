# Motivation

Why should you choose next-yak instead of all the other options you have?

## Our backstory

In our company we have very big next.js project where currently around 120 engineers work on.
We rely heavily on styled-components to be very flexible and have colocated styles and code.
Until now this setup served the purpose very well, despite having some trouble with performance during
server side rendering, and we were pretty happy. 

The React ecosystem is constantly evolving and is focusing more and more on performance. The React team 
introduced the concept of react-server-components (RSC) and next.js quickly picked it up with the app 
router. The problem that arised from this is that all 3rd party packages had to think about how they want
to implement the new possibilities with RSC's. 

Runtime CSS-in-JS libraries have the upside to be very flexible but with the downside that they don't play well with
Server Components. To conquer this issue several other CSS-in-JS libraries were created that use a static extraction
approach instead of being fully dynamic, but neither of those libraries made it easy for us to switch from styled-components
as we would have to rewrite over 5000 styled components.

We thought about a solution that is a minimal change for developers familiar with styled-components, but with the benefits
of a static CSS-in-JS framework that works well with next.js and Server Components. This solution is next-yak:

- **Static Analysis**: next-yak uses static analysis to parse and analyze your styles at build time, and generate CSS-Modules files
that are already well integrated in next.js. Additionally, next-yak replaces the defined styles inside your files with an invocation
of it's runtime.
- **Runtime**: To have some kind of dynamic behaviour the runtime uses the generated class names and switches/adds/removes classes based
on the provided props.

## When should you use next-yak

If you're familiar with styled-components next-yak enables you to use the same syntax in the new era of streaming and Server Components.
Additionally it's really fast and has a small footprint.

```jsx
import { styled, css } from 'next-yak';

const MyParagraph = styled.p`
  color: ${({primary}) => primary ? "teal" : "orange"};
  ${({primary}) => primary && css`padding: 16px;`}
  background-color: #f0f0f0;
`;

export MyComponent = () => {
  return <MyParagraph>I work like styled-components</MyParagraph>;
}
```

If you're on a new green field project, next-yak can provide:

1. Colocation of your styles with your code 

```jsx
import { styled } from 'next-yak';

const MyParagraph = styled.p`
  color: ${({variant}) => variant === 'primary' ? "red" : "blue"}
`

const MyOtherComponent = styled.p``

export MyComponent = (props) => {
  if(props.variant) {
    return <MyParagraph variant={variant}>{props.children}</MyParagraph>
  }

  return <MyOtherComponent>{props.children}</MyOtherComponent>;
}
```

2. A familiar interface for writing real CSS with the newest features available without a complicated setup 

```jsx
import { styled } from 'next-yak';

const Header = styled.div`
  & > *:has(:checked) {
    background-color: lab(87.6 125 104);
  }
`;
```

3. Compatible with utility-first CSS frameworks like Tailwind

```jsx
import { styled } from 'next-yak';

const Header = styled.nav`
  ${({variant}) => variant === "primary" ?
  atoms("mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8") :
  atoms("bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow")}
`
```

4. Composable

```jsx
import { styled } from 'next-yak';

const Input = styled.input``;
const Label = styled.label``;
const FormElement = styled.div`
  :has(${Input}:checked) {
    color: red;
  }
`;
```
