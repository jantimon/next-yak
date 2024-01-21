# next-yak coming from styled-components
We tried to keep the changes you need to know if you're already familiar with styled-components 
to a minimum.

## Familiar API

### styled

You can use the `styled` tag as you know for all kind of elements.

```jsx
//todo
```

You can use static or dynamic parts the same way you would use it in styled-components
```jsx
//todo
```

### css

The `css` tagged template literal in styled-components is used when you want to use a dynamic
CSS part "outside" of the styled literal. Next-yak works similar but with the difference you
should use it everytime you want to have dynamic properties where the CSS property isn't known
in the outside literal.

```jsx
// todo
```

Next-yak transforms `css` code into a class name that is referenced. So you can think of it as
an additional css class that gets added/subtracted as needed.

### keyframes

The api for keyframes is exactly the same as in styled-components. You can define your keyframes
and use it in your animations.

```jsx
// todo
```

### attrs

Next-yak also enables `.attrs` on your components and has the same behaviour as in styled-components

```jsx
// todo
```

## References to other components

In order to create a selector that includes another component, you can just reference it in the tagged
template literal. 

```jsx
// todo
```

During build time the reference is changed to the actual generated class name of the referenced component.

## Mixins

Mixins allow you to predefine CSS styles and reuse them across components. You can just create mixins the same
way as you would with styled-components.

```jsx
// todo
```
