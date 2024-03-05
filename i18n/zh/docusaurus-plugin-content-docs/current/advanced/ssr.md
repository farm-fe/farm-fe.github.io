# 服务端渲染 (SSR)

服务端渲染意味着在服务端(Node.js)将前端的架(例如 React, Vue, Solid等)渲染成 `html` 并且在客户端
将 `rendered html` hydrate

:::note
本文介绍如何从头开始基于 Farm 构建一个 SSR 应用
:::

## 示例项目

Farm 为一些流行的框架提供了 SSR [示例](https://github.com/farm-fe/farm/tree/main/examples)

* **[React](https://github.com/farm-fe/farm/tree/main/examples/react-ssr)**
* **[Vue](https://github.com/farm-fe/farm/tree/main/examples/vue-ssr)**
* **[Solid](https://github.com/farm-fe/farm/tree/main/examples/solid-ssr)**

## 项目结构

一个[典型的 SSR 应用](https://github.com/farm-fe/farm/tree/main/examples/react-ssr)通常具有下面的结构

```
.
├── index.html
├── farm.config.ts
├── farm.config.server.ts
├── server.js
└── src
    ├── index-client.tsx
    ├── index-server.tsx
    └── main.tsx
```

* **`index.html`**: 在客户端(浏览器)运行的入口 html
* **`farm.config.ts`**: Farm 的配置用来构建客户端产物
* **`farm.config.server.ts`**: Farm 的配置用来构建 Node.js (服务端)产物
* **`server.js`**: 在生产环境运行的服务端程序
* **`src/index-client.tsx`**: 客户端构建入口
* **`src/index-server.tsx`**: 服务端构建入口
* **`src/main.tsx`**: 服务端渲染和客户端渲染都会执行的应用代码

`index.html` 需要引用 `index-client.tsx` 并且需要包含一个占位符用来将服务端渲染过后的 `markup` 注入进去

```html
<div id="root"><div>app-html-to-replace</div></div>
<script src="./src/index-client.tsx"></script>
```

你应该将 `<div>app-html-to-replace</div>` 替换为服务端渲染后的 `markup`

:::tip
我们需要打包 SSR 应用 **两次**，一次是为了 `client`(浏览器)，另外一次是为了 `Server`(Node.js)，所以 `farm.config.ts` 和 `farm.config.server.ts` 都是需要的。我们将会在后面的几个章节里面详细讨论
:::

## 配置开发服务器

对于上面的例子， `farm.config.ts` 是用于 **构建客户端产物** 并且设置开发服务器进行服务端渲染。`farm.config.ts` 内容通常是:

```ts title="farm.config.ts"
import { defineConfig } from '@farmfe/core';

export default defineConfig({
  compilation: {
    input: {
      index_client: './index.html'
    },
    output: {
      path: './build'
    },
  },
  server: {
    hmr: true,
    cors: true,
    middlewares: [
      // 注册一个在服务端渲染的中间件,
      // 注入服务端渲染的生成的 markup 并返回最终的 index.html
      (server) => {
        server.app().use(async (ctx, next) => {
          await next();

          // 处理 index.html 或 SPA 降级
          if (ctx.path === '/' || ctx.status === 404) {
            // 加载服务端入口，并通过 ctx.path 渲染
            const render = await import('./dist/index.js').then(
              (m) => m.default
            );
            const renderedHtml = render(ctx.path);

            // 从 server.getCompiler() 获取编译后的 index.html 内容
            // html 是为客户端编译的，并且需要全部注入到客户端
            const template = server
              .getCompiler()
              .resource('index_client.html')
              .toString();

            // 替换占位符以渲染 markup，并将其返回为 html
            const html = template.replace(
              '<div>app-html-to-replace</div>',
              renderedHtml
            );
            ctx.body = html;
            ctx.type = 'text/html';
            ctx.status = 200;
          }

          console.log('ctx.path outer', ctx.path);
        });
      }
    ]
  },
  plugins: ['@farmfe/plugin-react', '@farmfe/plugin-sass']
});
```

在上面的例子 需要一个 `中间件` 把应用渲染成 markup 并且作为 html 返回给客户端，`中间件`中 SSR 的通常工作流程:

* **加载服务端入口**: `index-server` 需要导出一个 `render` 函数，我们需要 `import(server_entry_path)` 来得到 `render` 函数

* **编译客户端入口的 index.html**：所有客户端构建产物和 Farm 的运行时需要注入到 `index.html`,这样客户端的 `hydrate` 才可以成功

* **替换占位符来渲染 markup**： 替换占位符并返回 `final html`

:::note
在这个示例里面，我们通过 `if (ctx.path === '/' || ctx.status === 404) {` 来构建一个 `SPA` 应用，如果你在构建一个 `MPA` 的服务端渲染应用，让 `ctx.path` 找到你的入口
:::

## 构建 Node.js

`farm.config.server.ts` 是用于 **构建服务端产物（Node.js）**，生成编译之后的 server entry，用于在服务端将应用渲染成 markup

```ts title="farm.config.server.ts"
import { defineConfig } from '@farmfe/core';

export default defineConfig({
  compilation: {
    // c-highlight-start
    input: {
      index: './src/index-server.tsx'
    },
    output: {
      path: './dist',
      targetEnv: 'node'
    }
    // c-highlight-end
  },
  plugins: [
    [
      '@farmfe/plugin-react',
      {
        refresh: false,
        development: false
      }
    ],
    '@farmfe/plugin-sass'
  ]
});
```

对于 `farm.config.server.ts` 我们设置 `input` 作为 **server entry**, [`output.targetEnv`](zh/docs/config/compilation-options#output-targetenv) 设置成 `node`

:::note
默认情况下，Farm将服务器入口脚本编译为 `esm`，如果你想将其编译为 `cjs`，设置 [`output.format`](zh/docs/config/compilation-options#output-format)
:::

## 开发一个 SSR 项目

你需要同时编译 `client` 和 `server`，例如，你可能在`package.json`中有以下`scripts`:

```json title="package.json"
{
  "name": "@farmfe-examples/react-ssr",
  "scripts": {
    // c-highlight-start
    "start": "farm start",
    "start:server": "farm watch --config farm.config.server.mjs",
    // c-highlight-end
  }
}
```

当启动你的 SSR 项目时，你应该在不同的终端运行 `npm run start` 和 `npm run start:server`

## 构建生产应用

你需要构建 `client` 和 `server` 两种产物，例如，你可以在 `scripts` 中添加以下命令:

```json title="package.json"
{
  "name": "@farmfe-examples/react-ssr",
  "scripts": {
    "start": "farm start",
    "start:server": "farm watch --config farm.config.server.mjs",
    // c-highlight-start
    "build": "farm build",
    "build:server": "farm build --config farm.config.server.mjs"
    // c-highlight-end
  }
}
```

当构建生产环境时，你应该运行 `npm run build` 和 `npm run build:server`两个命令，客户端产物将被打包到`build`目录，服务端产物将被打包到`dist`目录

对于生产环境，你需要一个 `node server` 来渲染并且通过服务返回编译之后的模版，在这个例子中，我们提供一个`server.js` 作为生产服务器:

```js title="server.js"
import path from 'node:path';
import { fileURLToPath } from 'node:url'
import fsp from 'fs/promises';
import express from 'express';

function resolve(p) {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  return path.resolve(__dirname, p);
}

// 创建一个 node 生产服务器
async function createServer() {
  let app = express();
  // 将客户端产物作为静态资源，你也可以根据需要将客户端产物部署到 CDN 或单独的开发服务器。
  app.use(express.static(resolve('build')));
  // 监听` / `路由，你可以将其替换为你使用的路由。
  app.use('/', async (req, res) => {
    let url = req.originalUrl;

    try {
      let template;
      let render;

      // 加载客户端模版
      template = await fsp.readFile(resolve('build/index_client.html'), 'utf8');
      // 加载服务端渲染函数
      render = await import(resolve('dist/index.js')).then(
        (m) => m.default
      );
      // 将应用渲染成 markup
      const markup = render(url);

      let html = template.replace(
        '<div>app-html-to-replace</div>',
        markup
      );
      // renderer html 和客户端产物一起返回，客户端产物将服务器渲染的 markup进行 hydration，使界面具有交互性
      res.setHeader('Content-Type', 'text/html');
      return res.status(200).end(html);
    } catch (error) {
      console.log(error.stack);
      res.status(500).end(error.stack);
    }
  });

  return app;
}
// create and listen the server
createServer().then((app) => {
  app.listen(3000, () => {
    console.log('HTTP server is running at http://localhost:3000');
  });
});
```

这里使用 `express` 作为服务器，但你也可以使用任何你想要的服务端框架。渲染过程是相似的:

* 加载编译之后的客户端模版
* 加载编译之后的服务端脚本的 `render` 函数
* 调用`const markup = render(url)`函数来获取应用服务端渲染 markup
* 将 `client index.html` 中的 `placeholder` 替换为 `rendered markup`，并返回替换后的 html 作为最终结果

## 静态站点生成 (SSG)

SSG 的流程与 SSR 相似，区别在于 SSG 向最终产物是 `replaced html`。SSG的示例脚本:

```ts
// 加载客户端模版
const template = await fsp.readFile(resolve('build/index_client.html'), 'utf8');
// 加载服务端渲染函数
const render = await import(resolve('dist/index.js')).then(
  (m) => m.default
);

const pages = renderDirEntry('src/pages');

for (const page of pages) {
  // 将应用渲染成 markup
  const markup = render(url);
  const html = template.replace(
    '<div>app-html-to-replace</div>',
    markup
  );
  // 发出静态生成的页面，例如将其写入磁盘
  emitPage(page, html);
}
```
