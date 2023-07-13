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
Farm provide official sass, less plugins to support css pre-processor.

### Sass
Farm sass plugin is a Rust Plugin and use `sass-embeded`(we may migrate to `[grass](https://github.com/connorskees/grass)` in the feature).

Steps to compile `sass/scss` modules in Farm.
1. Install dependencies
```sh
# npm or yarn or pnpm, choose your favorite package manager
npm install @farmfe/plugin-sass
```

2. Configure the plugin
```ts
import type { UserConfig } from '@farmfe/core';

export default <UserConfig> {
  // ...
  plugins: ['@farmfe/plugin-sass'] // to use a rust plugin, just configure its package name as a string
};
```

3. Import sass module
```ts
import './index.scss';
```

To use sass with css modules, change the file name from `index.scss` to `index.module.scss`, see [css modules](#css-modules)

### Less
Farm less plugin is a Js Plugin. Steps to compile `less` modules in Farm.

1. Install dependencies
```sh
# npm or yarn or pnpm, choose your favorite package manager
npm install @farmfe/js-plugin-less
```

2. Configure the plugin
```ts
import type { UserConfig } from '@farmfe/core';
import less from '@farmfe/js-plugin-less';

export default <UserConfig> {
  // ...
  plugins: [less()] // pass argument to the less function like `less({ /* your options */ })` to specify less options
};
```

3. Import sass module
```ts
import './index.less';
```

To use sass with css modules, change the file name from `index.less` to `index.module.less`, see [css modules](#css-modules)
