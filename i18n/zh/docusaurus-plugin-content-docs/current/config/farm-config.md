
# 配置参考
Farm 默认从项目根目录的 `farm.config.ts|js|mjs` 文件中读取配置，配置文件示例:

```ts title="farm.config.ts"
import type { UserConfig } from '@farmfe/core';

function defineConfig(config: Config) {
  return config;
}

export default defineConfig({
  root: process.cwd(), // 编译的根目录
  // 编译选项
  compilation: {
    // ...
  },
  // Dev Server 选项
  server: {
    hmr: true,
    // ...
  },
  // 插件配置
  plugins: []
});
```

## 编译选项 - compilation
所有与编译相关的配置都在 `compilation` 字段下。

### input

* **type**: `Record<string, string>`

项目的入口点。 Input 的文件可以是`html`、`ts/js/tsx/jsx`、`css` 或通过插件支持的其他文件。

```tsx
import type { UserConfig } from '@farmfe/core';

export default <UserConfig> {
  compilation: {
    input: {
      index: './index.html',
      about: './about.html'
    },
  }
  // ..
}
```


### output
* **type**: `OutputOptions`

```ts
interface OutputOptions {
  // 局部打包后，入口文件所在资源的文件名配置
  entryFilename?: string;
  // 局部打包后，除入口资源外的其他资源输入文件名配置
  filename?: string;
  // 输入目录
  path?: string;
  // public path：资源加载前缀
  publicPath?: string;
  // 静态资源文件名配置
  assetsFilename?: string;
  // 目标执行环境，浏览器或者 Node
  targetEnv?: 'browser' | 'node';
  // 输出模块格式
  format?: 'cjs' | 'esm';
}
```
:::note
我们称编译结果为 `资源(resource)`
:::

#### `output.entryFilename`
* **默认值**: `"[entryName].[ext]"`

配置入口资源的文件名：您可以使用 `[entryName]` 等占位符。 所有占位符如下：
* `[entryName]`：入口名，例如对于 `input: { index: "./index.html" }`，`[entryName]` 为 `index`
* `[resourceName]`：资源的名称，一般是 Farm 内部生成的一个独特哈希值。
* `[contentHash]`：该资源的内容哈希。
* `[ext]`：该资源的扩展名，对于 `js/jsx/ts/tsx` 为 `js`，对于 `css/scss/less` 为 `css`。

#### `output.filename`
* **默认值**: `"[resourceName].[ext]"`

局部打包后，除 `entryFilename` 配置的资源外的其他资源文件名. 所有占位符如下：
* `[resourceName]`：资源的名称，一般是 Farm 内部生成的一个独特哈希值。
* `[contentHash]`：该资源的内容哈希。
* `[ext]`：该资源的扩展名，对于 `js/jsx/ts/tsx` 为 `js`，对于 `css/scss/less` 为 `css`。

#### `output.path`
* **默认值**: `"dist"`

输出资源的目录

#### `output.publicPath`
* **默认值**: `"/"`

资源 url 加载的前缀. 比如 URL `https://xxxx`，或者一个路径 `/xxx`.

#### `output.assetsFileName`
* **默认值**: `"[resourceName].[ext]"`

静态资源输出的文件名配置，占位符和 `output.filename` 相同。

#### `output.targetEnv`
* **默认值**: `"browser"`

配置产物的执行环境，可以是 `"browser"` 或者 `"node"`.

#### `output.format`
* **默认值**: `"esm"`

配置产物的格式，可以是 `"esm"` 或者 `"cjs"`.

:::note
该选项只对 Js 产物有效
:::

### resolve
* **type**: `ResolveOptions`
```ts
interface ResolveOptions {
  extensions?: string[];
  alias?: Record<string, string>;
  mainFields?: string[];
  conditions?: string[];
  symlinks?: boolean;
  strictExports?: boolean;
};
```
#### `resolve.extensions`
* **默认值**: `["tsx", "ts", "jsx", "js", "mjs", "json", "html", "css"]`

配置解析依赖时的后缀，例如解析 `./index` 时，如果没有解析到，则会自动加上后缀解析，如尝试 `./index.tsx`, `./index.css` 等。

#### `resolve.alias`
* **默认值**: `{}`

配置解析别名，示例：

```ts
export default defineConfig({
  compilation: {
    resolve: {
      alias: {
        '/@': path.join(process.cwd(), 'src'),
        "stream$": "readable-stream"
      }
    }
  },
});
```
alias 为前缀替换，对于上述例子 `/@/pages` 将会被替换为，`/root/src/pages`。如果希望精确匹配，可以加上 `$`，例如 `stream$` 只会替换 `stream`，而不会替换 `stream/xxx`。

#### `resolve.mainFields`
* **默认值**: `["exports", "browser", "module", "main"]`

解析 node_modules 下依赖时，从 package.json 中将会按照 `mainFields` 中配置的字段和顺序进行解析。对于 `package.json`

```json
{
  "name": "package-a",
  "module": "es/index.js",
  "main": "lib/index.js"
}
```

将会优先使用 `es/index.js`（如果路径存在），不存在则会继续向后搜索。

#### `resolve.conditions`
暂不支持配置。

#### `resolve.symlinks`
* **默认值**: `true`

解析文件时，是否追踪 symlink 对应的真实目录，并从真实目录开始解析下一个依赖。如果使用 pnpm 管理依赖，该选项必须配置为 true。

#### `resolve.strictExports`
* **默认值**: `false`

是否严格遵循 `package.json` 中 `exports` 中定义的导出。如果设置为 true，当 `package.json` 中定义了 `exports`，但是 `exports` 没有定义对应导出时，会直接报错。如果设置为 true，会按照 mainFields 继续尝试其他入口。

### define
* **默认值**: `{}`

全局变量注入，配置的变量名和值将会在编译时注入到产物中。Farm 默认注入 `process.env.NODE_ENV` 以及部分 Farm 自身使用的变量比如 `FARM_HMR_PORT`

```ts
export default defineConfig({
  compilation: {
    define: {
      MY_VAR: 123
    }
  },
});
```
:::note
1. define 为了强化性能，使用的是全局变量的注入形式，这意味着，对象形式的变量无法注入，例如 `process.env.XXX` 形式的变量无法注入，只能配置 `XXX` 形式的变量。
2. 如果在同一个 window 下挂载多个 Farm 项目，多个项目同名的 define 会相互覆盖。
3. 注入的是字符串，如果需要转为其他类型，需要在运行时代码中手动转换，例如 `Number(MY_VAR)`
:::

### external
* **默认值**: `[]`

配置被 external 的导入，被 external 的导入不会出现在编译产物中。但是对应 import 语句不会删除，需要自定义 external 后如何处理，否则运行时会报错，对于 targetEnv 是 node 下的 external 模块，会自动尝试 require 该模块。

需要使用正则方式配置，例如：
```ts
export default defineConfig({
  compilation: {
    external: ["^stream$"]
  },
});
```

### mode
* **默认值**: 对于 start、watch 命令是 `development`，对于 build 命令是 `production`

配置编译模式，为了优化开发时性能，在没有手动配置生产优化相关选项（minify，tree shake 等）时，默认在 `development` 下会禁用生产环境优化比如压缩和 tree shake，在 `production` 模式下启用。

### root
* **默认值**: `process.cwd()`

配置项目编译的 root 目录，该选项会影响默认配置文件的查找路径，编译模块依赖的查找等。

### runtime
配置 Farm 运行时能力。类型如下：

```ts
interface FarmRuntimeOptions {
  runtime?: {
    path: string;
    plugins?: string[];
    namespace?: string;
  };
}
```
#### `runtime.path`
* **默认值**: Farm 内置 runtime 的路径

自定义一个 Runtime 替换 Farm 内置的 Runtime。

:::warning
正常情况下不建议配置该选项，因为一旦配置了该选项，指向的 runtime 需要所有实现 Farm Runtime 已有的能力，例如模块系统、HMR、动态资源加载等。
:::

#### `runtime.plugins`
* **默认值**: Farm 内置 runtime-plugin-hmr 的路径

配置 Runtime 插件，通过 Runtime 插件，可以干预 Runtime 行为，如模块加载，资源加载等。具体可以参考：WIP。

#### `runtime.namespace`
* **默认值**: 项目 package.json 的 name 字段

配置 Farm Runtime 的命名空间，保证在同一个 window 或者 global 下不同产物的执行能够相互隔离。默认使用项目 package.json 的 name 字段作为 namespace。

### assets

#### `assets.include`
* **默认值**: `[]`

额外视为静态资源的文件后缀，例如下述示例，`txt` 将会被视为姿态资源，引入 txt 文件时当作静态资源处理：
```ts
export default defineConfig({
  compilation: {
    assets: {
      include: ["txt"]
    }
  },
});
```

### script

#### `script.target`
* **默认值**: `ES2023`（根据 Farm 的迭代动态调整）

配置 Farm 解析 `js/jsx/ts/tsx` 的 AST 以及生成代码时支持的 ES 语法版本。 

#### `script.parser`
* **默认值**: 与 SWC 相同

配置 SWC 解析 AST 时的行为，配置项参考：https://swc.rs/docs/configuration/compilation#jscparser

#### `script.plugins`
* **默认值**: `[]`

配置 swc 插件数组，数组每一项包含三个字段：
* **name**：swc 插件的包名
* **options**: 传给 swc 插件的配置项
* **filters**: 对哪些模块执行该插件，必须配置，支持 `resolvedPaths` 以及 `moduleTypes` 两个过滤项，两者取并集。

配置示例：

```ts
import jsPluginVue from '@farmfe/js-plugin-vue';

/**
 * @type {import('@farmfe/core').UserConfig}
 */
export default {
  compilation: {
    script: {
      plugins: [{
        name: 'swc-plugin-vue-jsx',
        options: {
          "transformOn": true,
          "optimize": true
        },
        filters: {
          // resolvedPaths: [".+"]
          moduleTypes: ['tsx', 'jsx'],
        }
      }]
    }
  },
  plugins: [jsPluginVue()],
};
```

### css

#### `css.modules`

#### `css.prefixer`

### html

#### `html.base`

### sourcemap


### partialBundling

#### `partialBundling.moduleBuckets`

### lazyCompilation

### treeShaking

### minify

### presetEnv

#### `presetEnv.include`

#### `presetEnv.exclude`

#### `presetEnv.options`

#### `presetEnv.assuptions`

## Server Options

### port

### https(WIP)

### hmr

### proxy

### strictPort

### open

### host


## Plugins Options

### Rust Plugins


### Js Plugins