---
sidebar_position: 1
---

# Html
## 基本用法
Farm 支持开箱即用地编译 Html，并且在构建 Web 项目时应该使用 Html 作为入口，例如：

```ts title="farm.config.ts"
import type { UserConfig } from '@farmfe/core';

export default <UserConfig>{
  input: {
    index: './index.html' // using ./index.html as entry
  }
}
```

:::note
如果未指定 `input`，则默认为 `{index: './index.html'}`。
:::

在`./index.html`中，应该使用`<script src="./xxx">`来引用您的入口 `Js/Ts/Jsx/Tsx` 文件。

```html title="./index.html"
<html>
  <!-- ... -->
  <body>
    <div id="root"></div>
    <!-- index.ts is the script entry -->
    <script src="./index.ts"></script> 
  </body>
</html>

```
你也可以使用`<link href="./xxx">`来引用你的全局CSS。

Farm在编译时会将这些 `script` 和 `link` 转化为最终的生产资源。

:::note
`script` 和 `link` 可以引用 farm 支持的任何模块类型，例如，`js`、`jsx`、`ts`、`tsx` 或插件支持的其他模块类型。 您可以根据需要使用任意数量的 `script` 或 `link`。
:::

## 多页面应用程序 - MPA
如果您正在构建多页面应用程序，只需配置多个 html，例如：

```ts title="farm.config.ts"
import type { UserConfig } from '@farmfe/core';

export default <UserConfig>{
  input: {
    home: './index.html', // Home Page
    about: './about.html', // About Page
    // ... more pages
  }
}
```
Farm 将并行编译这些页面。