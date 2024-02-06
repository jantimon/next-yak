# Features
next-yak is a featured packed static CSS-in-JS framework with a small runtime part.

## Static CSS

The core functionality is the extraction of static CSS. You can write your normal styled-components
styles and during build time the styles are extracted and your component gets a class that encapsulates
those styles.

```jsx
import { styled } from 'next-yak';

const Headline = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: rgba(253, 29, 29, 1);
`;

const Component = () => {
  return <Headline> Hello there!</Headline>
}
```

:::details[See transformed output]

:::code-group

```jsx [input]
const Headline = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: rgba(253, 29, 29, 1);
`;
```

```jsx [output javascript]
const Headline = styled('h1')('.yakClass1');
```

```css [output CSS]
.yakClass1 {
  font-size: 2rem;
  font-weight: bold;
  color: rgba(253, 29, 29, 1);
}
```

:::

## Dynamic styles

The static functionality itself is already very useful, but the bread and butter is an easy way to 
create dynamic styles. Styled-components made the approach, where props are responsible for driving the
dynamic CSS parts, really easy and with next-yak you can use exactly the same known API.

:::code-group

```jsx [javascript]
import { css, styled } from 'next-yak';

const Paragraph = styled.p`
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  ${props => props.$primary ? 
    css`
      color: white; 
    ` : 
    css`
      color: #BF4F74
    `};
  font-size: 2rem;
  font-weight: bold;
`;

const Component = () => {
  return (
    <>
      <Paragraph $primary> Hello there primary!</Paragraph>
      <Paragraph> Hello there non-primary!</Paragraph>
    </>
  );
}
```

```tsx [typescript]
import { css, styled } from 'next-yak';

const Paragraph = styled.p<{ $primary?: boolean }>`
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  ${props => props.$primary ? 
    css`
      color: white; 
    ` : 
    css`
      color: #BF4F74
    `};
  font-size: 2rem;
  font-weight: bold;
`;

const Component = () => {
  return (
    <>
      <Paragraph $primary> Hello there primary!</Paragraph>
      <Paragraph> Hello there non-primary!</Paragraph>
    </>
  );
}
```

:::

The css templates create their own class which is referenced during runtime when the function returns them.
The other function which returns strings directly without setting new CSS properties, will be changed to
a CSS variable, which is set on the element itself directly based on the functions return value.

:::details[See transformed output]

:::code-group

```jsx [input]
const Paragraph = styled.p`
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  ${props => props.$primary ? 
    css`
      color: white; 
    ` : 
    css`
      color: #BF4F74
    `};
  font-size: 2rem;
  font-weight: bold;
`;
```

```jsx [output javascript]
const Paragraph = styled('p')( 
  '.yakClass1', 
  props.$primary ? '.yakCSSClass1' : '.yakCSSClass2', 
  {
    style: { '--var1': props.$primary ? "#BF4F74" : "white" }
  }
);
```

```css [output CSS]
.yakClass1 {
  background: var(--var1);
  font-size: 2rem;
  font-weight: bold;
}

.yakCSSClass1 {
  color: white;
}

.yakCSSClass2 {
  color: #BF4F74;
}
```
:::


## Animations

In order to create CSS animations you can use the `keyframes` API and specify the keyframes for the animation
you want to create. It can be used by your animation declarations in the same file.

```jsx
import { keyframes, styled } from 'next-yak';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const FadeInButton = styled.button`
  animation: 1s ${fadeIn} ease-out;
`
```

:::details[See transformed output]

:::code-group

```jsx [input]
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const FadeInButton = styled.button`
  animation: 1s ${fadeIn} ease-out;
`
```

```jsx [output javascript]
const fadeIn = keyframes('fadeIn')

const FadeInButton = styled('button')('.yakClass1', {
  style: { "--yakVar1": fadeIn }
})
```

```css [output CSS]
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.yakClass1 {
  animation: 1s var(--yakVar1) ease-out;
}
```
:::

## Mixins

Mixins are declarations of the `css` utility function. You can declare a variable which holds the css declaration and
use it inside your `styled` declarations.

```jsx
import { css, styled } from 'next-yak';

const mixin = css`
  color: green;
`;

const MyComp = styled.div`
  background-color: yellow;
  ${mixin}
`;
```

You can even make it dynamic where the props are passed to the mixin.

```jsx
import { css, styled } from 'next-yak';

const mixin = css`
  color: ${(props) => props.$green ? 'green' : 'blue'};
`;

const MyComp = styled.div`
  background-color: yellow;
  ${mixin}
`;
```

During build time the css literal is converted to a class name (or multiple) and can be referenced by other css styles.

:::details[See transformed output]

:::code-group

```jsx [input]
const mixin = css`
  color: ${(props) => props.$green ? 'green' : 'blue'};
`;

const MyComp = styled.div`
  background-color: yellow;
  ${mixin}
`;
```

```jsx [output javascript]
const mixin = css('yakClass1', {
  style: {
    "--yakVar1": props => props.$green ? 'green' : 'blue'
  },
});

const MyComp = styled.div('yakClass2', mixin);
```

```css [output CSS]
.yakClass1 { 
  color: var(--yakVar1);
}

.yakClass2 { 
  background-color: yellow;
}
```
:::

## Automatic CSS variables

You may noticed that we sometimes used css`` and sometimes just a literal string. If the property name is already
present and you want to have dynamic values of that property, you can just use literal strings that get transformed
into CSS variables during build time.

:::code-group

```jsx [javascript]
import { styled } from 'next-yak';

const Box = styled.div`
  font-size: ${props => props.variant === "primary" ? "2rem" : "1rem" };
  color: ${props => props.color};
  display: flex;
`
```

```tsx [typescript]
import { styled } from 'next-yak';

const Box = styled.div<{ variant: "primary" | "secondary", color: string }>`
  font-size: ${props => props.variant === "primary" ? "2rem" : "1rem" };
  color: ${props => props.color};
  display: flex;
`
```

:::

The value of the CSS variable is set via the `style` property of that component to not interfer with potential
CSS variable names that have the same name.

:::details[See transformed output]

:::code-group

```jsx [input]
const Box = styled.div`
  font-size: ${props => props.variant === "primary" ? "2rem" : "1rem" };
  color: ${props => props.color};
  display: flex;
`
```

```jsx [output javascript]
const Box = styled('div')('.yakClass1', {
  style: { 
    '--var1': props.variant === "primary" ? "2rem" : "1rem", 
    '--var2': props.color 
  }
})
```

```css [output CSS]
.yakClass1 {
  font-size: var(--var1);
  color: var(--var2);
  display: flex;
}
```
:::

## Theming

Theming becomes more important as your application grows and is a shortcut to pass the same values to components.
next-yak integrates it in a hassle free manner that works for both Server Components and Client Components without
a difference in usage for you. Wrap your root with the Themeprovider and add a `yak.context.ts` file to your root directory
and you're ready to go.

```jsx [yak.context.ts]
import { cookies } from 'next/headers'
import { cache } from "react";

const hasHighContrast = cache(() => {
    const cookieStore = cookies()
    return cookieStore.get("highContrast")?.value === "true"
});

export function getYakThemeContext() {
    return {
        // here we provide a hightContrast to all components
        highContrast: hasHighContrast()
    }
}

declare module "next-yak" {
    export interface YakTheme extends ReturnType<typeof getYakThemeContext> { }
}
```

Once this context file is in place, you can access the theme props on every component.

```jsx [some-component.tsx]
import { styled } from 'next-yak';

const Button = styled.button`
  display: block;
  ${(props) =>
    props.theme.highContrast
      ? css`
          color: ${colors.dark};
        `
      : css`
          color: #009688;
        `}
`;
```


