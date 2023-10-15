# 1. 创建一个项目
在本章中，我们将从头开始创建一个新的 Farm React 项目，并以开发模式启动它。

:::note
在本教程中，我们使用`pnpm`作为默认包管理器。 本章是`从头开始构建 Farm React 项目`，如果您想快速启动一个新的 Farm 项目，请使用我们的官方模板和命令`pnpm create farm`。
:::

## 创建一个 Npm 包
首先我们执行`pnpm init`来创建一个新包。

````bash
mkdir farm-react && cd farm-react && pnpm init
````

将自动生成`package.json`文件。

## 安装依赖项
安装必要的依赖项(react 以及 react-dom:)：

```bash
pnpm add react react-dom && pnpm add react-refresh @types/react @types/react-dom -D
```

然后安装 Farm 相关依赖:
```bash
pnpm add -D @farmfe/cli @farmfe/core @farmfe/plugin-react
```
React 项目需要 3 个包：
* **`@farmfe/cli`**：该包提供了`farm start`、`farm build`、`farm Preview`等命令，必须与`@farmfe/core`一起使用，不能单独使用。
* **`@farmfe/core`**：该软件包提供`编译`和`Dev Server`，为本地开发和产品构建提供所有必要的组件。 它导出`Compiler`，`DevServer`和`Watcher`，用于`编译项目`，`以开发模式服务项目`和`监视项目的热模块替换`。
* **`@farmfe/plugin-react`**：此包提供 React Jsx 编译和 React-refresh 支持。

## 创建 Farm 配置文件
在项目根目录下创建一个`farm.config.ts`文件：
```text {2}
.
├── farm.config.ts
├── package.json
└── pnpm-lock.yaml
```
并添加以下配置：
```ts
import { UserConfig } from '@farmfe/core';

function defineConfig(config: UserConfig): UserConfig {
  return config;
}

export default defineConfig({
  compilation: {
    input: {
      index: './src/index.html'
    },
    output: {
      path: 'build',
      publicPath: '/',
      targetEnv: 'browser'
    }
  },
  plugins: [
    '@farmfe/plugin-react',
  ]
});
```
对于上面的配置文件，我们使用了`input`、`output`和`plugins`，这是Farm中最基本的配置。
* **`input`**：配置入口点。 Farm 将根据条目编译并构建模块图。
* **`输出`**：配置输出目录、文件名等。 有关完整选项，请参阅 [compilation.output](/docs/config/farm-config#output)。
* **`plugins`**：配置farm插件，React、Vue SFC等所有扩展能力均由插件支持。 这里我们使用一个 Rust 插件（`@farmfe/plugin-react`）来支持编译 React jsx。

查阅[配置参考](/docs/config/farm-config)以获取更多选项。

:::note
在上面的例子中，我们将 input 配置为 `index: './src/index.html'`，如果我们不配置 `input`，则默认为 `index: './index.html'`。 并且我们可以在`input`中配置多个条目，详细信息请参见[多页面应用](/docs/features/html#multi-page-app)
:::

## 创建一个入口Html和Js
在项目根目录下创建 2 个文件 `src/index.html` 和 `src/index.tsx`：
```text {5-7}
.
├── farm.config.ts
├── package.json
├── pnpm-lock.yaml
└── src
    ├── index.html
    └── index.tsx
```
`src/index.html` 的内容是：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
  <!-- we must use script to make ./index.tsx as a dependency -->
  <script src="./index.tsx"></script>
</body>
</html>
```
:::note
请注意，我们必须添加至少一个`<script>`来引用脚本模块。
:::

`src/index.tsx` 的内容是：
```ts title="src/index.tsx"
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<div>A React Page compiled by Farm</div>);
```

## Start Your Farm Project!
现在一切都准备好了，将启动脚本添加到您的`package.json`中：
```json title="package.json" {6}
{
  "name": "1-create-a-project",
  "version": "1.0.0",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "farm start"
  },
  // ... ignore other fields 
}
```

然后运行`npm start`，如果 Farm 输出以下消息，则意味着您的项目已成功启动：
```text
$ npm start

> 1-create-a-project@1.0.0 start
> farm start

[ Farm ] Using config file at /home/tutorials/1-create-a-project/farm.config.ts

   ╭──────────────────────────────────────────────────╮
   │                                                  │
   │              _____ _    ____  __  __             │
   │             |  ___/ \  |  _ \|  \/  |            │
   │             | |_ / _ \ | |_) | |\/| |            │
   │             |  _/ ___ \|  _ <| |  | |            │
   │             |_|/_/   \_\_| \_\_|  |_|            │
   │                                                  │
   │                   Version 0.11.0                 │
   │                                                  │
   │     🔥 Ready on http://localhost:9000 in 61ms.   │
   │                                                  │
   │                                                  │
   ╰──────────────────────────────────────────────────╯

[ Farm ] HMR enabled, watching for file changes under /home/tutorials/1-create-a-project
```

在浏览器中打开`http://localhost:9000`。