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
  background: linear-gradient(
    149deg,
    #ae52eb 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Component = () => {
  return <Headline> Hello there!</Headline>
}
```

## Dynamic styles

## Animations

## Mixins

## Automatic CSS variables

## Theming


