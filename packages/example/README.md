#


# Example Compilation

```tsx
import { css } from "@/app/yacijs";

const headline = css`
  font-size: 2rem;
  ${Math.random() > 0.5 && css`
    color: red;
  `}

  ${(props) => props.primary && css`
    font-weight: bold;
  `}
  ${(props) => props.background && css`
    background: ${props.background};
  `}
`;
```

Converted by the ts-loader to:

```js
import { css } from "@/app/yacijs";
import __yacijs_styles from "./page.yak.module.css!=!./page";

const headline = css(
    __yacijs_styles.headline,
    
    Math.random() > 0.5 && css(__yacijs_styles.headline__red),
    
    props => props.primary && css(__yacijs_styles.headline__primary),
    
    props => props.background &&
        css(__yacijs_styles.headline__background, {
            "--background": props.background
        })
);
```

```css
.headline {
  font-size: 2rem;
}

.headline__red {
  color: red;
}

.headline__primary {
  font-weight: bold;
}

.headline__background {
  background: var(--background);
}
```


## Nice to have features

- css source maps 
- compile time optimizations to parse ts only once
