# Css
Farm support Css out of box, for examples:

```tsx
import './index.css';
```

Then farm will auto enable HMR for css module, and generating bundled resources for css.

## Css Modules
Farm support css modules out of box, the modules end with `.module.css|less|scss|sass` will be treated as css modules by default.

```tsx title="comp.tsx"
// ...
import styles from './index.module.css'

export function Comp() {
  return <div className={styles.main}>Main</div>
}
```
```css title="index.module.css"
.main {
  color: red;
}
```
You can configuring css modules by [`css.modules`](/docs/config/farm-config#css-modules).

## Css Pre-Processor

### Sass

### Less



