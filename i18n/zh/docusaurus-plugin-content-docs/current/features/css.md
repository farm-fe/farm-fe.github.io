# CSS
Farm 支持开箱即用的 CSS 编译，例如：

```tsx
import './index.css';
```

然后 Farm 会自动为 css 模块启用 HMR，并自动打包 Css。

## CSS Modules
Farm 默认支持 css modules，以 `.module.css|less|scss|sass` 结尾的模块默认将被视为 `Css Modules`。

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

您可以通过[`css.modules`](/docs/config/farm-config#css-modules) 配置 CSS Modules。

## CSS 预处理器
Farm 官方提供了 sass、less 插件。

### Sass
Farm Sass 插件是一个 Rust 插件，使用 `sass-embeded`（后面我们可能会迁移到纯 Rust 编写的 [`grass`](https://github.com/connorskees/grass)）。

在 Farm 中编译 `sass/scss` 模块的步骤如下：

1. 安装依赖
```sh
# npm 或者 yarn 或者 pnpm，使用任意你喜欢的包管理器 
npm install @farmfe/plugin-sass
```

2. 配置插件
```ts
import type { UserConfig } from '@farmfe/core';

export default <UserConfig> {
  // ...
  plugins: ['@farmfe/plugin-sass'] // to use a rust plugin, just configure its package name as a string
};
```

3. 导入sass模块
```ts
import './index.scss';
```

如果要将 `sass` 与 `css modules` 一起使用，请将文件名从 `index.scss` 更改为 `index.module.scss`，请参阅 [css modules](#css-modules)

### Less
Farm less 插件是一个 Js 插件。 在 Farm 中编译 `less` 模块的步骤如下：

1. 安装依赖
```sh
# npm or yarn or pnpm, choose your favorite package manager
npm install @farmfe/js-plugin-less
```

2. 配置插件
```ts
import type { UserConfig } from '@farmfe/core';
import less from '@farmfe/js-plugin-less';

export default <UserConfig> {
  // ...
  plugins: [less()] // pass argument to the less function like `less({ /* your options */ })` to specify less options
};
```

3. 导入 Less 模块
```ts
import './index.less';
```

要将 `less` 与 `css modules` 一起使用，请将文件名从 `index.less` 更改为 `index.module.less`，参考 [css modules](#css-modules)

### Postcss
Farm postcss 插件是一个 JS 插件，在 Farm 中引入 postcss 的步骤如下：

1. 安装依赖
```sh
# npm or yarn or pnpm, choose your favorite package manager
npm install @farmfe/js-plugin-postcss
```

2. 配置插件
```ts
import type { UserConfig } from '@farmfe/core';
import postcss from '@farmfe/js-plugin-postcss';

export default <UserConfig> {
  // ...
  plugins: [postcss()] // pass argument to the less function like `less({ /* your options */ })` to specify less options
};
```

3. 配置 `postcss.config.js`，引入需要的 postcss 插件

```js title=postcss.config.js
module.exports = {
  plugins: [
    require('postcss-pxtorem')({
      rootValue: 16,
      propList: ['*'],
    }),
    require('tailwindcss'),
  ]
}
```