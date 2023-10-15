# 使用插件
Farm支持4种插件：
* **`Farm Compilation Plugins`**：支持 Rust 插件和 Js 插件，采用 rollup 风格的 hooks。
* **`Vite 插件`**：Farm 开箱即用支持 Vite 插件
* **`Farm Runtime Plugin`**：为 Farm 的运行时系统添加功能。
* **`Swc 插件`**：Farm 开箱即用支持 Swc 插件。

:::tip
如何编写自己的插件，请参考[插件](/docs/plugins/overview)
:::

## Farm 编译插件
首先，安装您需要的插件，例如：
```bash
pnpm add -D @farmfe/plugin-sass @farmfe/js-plugin-postcss
```

使用 `plugins` 配置 Farm 编译插件：
```ts title="farm.config.ts"
import farmPostcssPlugin from "@farmfe/js-plugin-postcss";

export default defineConfig({
  // ...
  plugins: [
     // Rust插件，配置其包名
    "@farmfe/plugin-sass",
    // JS插件，配置插件对象
    farmPostcssPlugin()
  ],
});
```

Farm编译插件有2种：
* **`Rust Plugins`**：用 Rust 编写，具有最佳性能。
* **`Js Plugins`**：用JS/TS编写，用于兼容当前的JS生态系统

### 使用 Rust 插件
使用 `package name` 来配置 Rust 插件，例如：
```ts title="farm.config.ts"
export default defineConfig({
  // ...
  plugins: [
    "@farmfe/plugin-sass",
  ],
});
```
对于上面的例子，Farm 将解析包 `@farmfe/plugin-sass` 并将其视为 Farm Rust 插件。

如果要为 Rust 插件配置选项，可以使用`数组语法`，如`[packageName, optionsObject]`，例如：
```ts title="farm.config.ts"
export default defineConfig({
  // ...
  plugins: [
    // 使用数组语法来配置 Rust 插件
    [
      // Rust 插件的名称
      "@farmfe/plugin-sass",
      // Rust 插件的选项
      {
        additionalData: '@use "@/global-variables.scss";'
      }
    ],
  ],
});
```
目前 Farm 官方支持 2 个 Rust 插件：
* **`@farmfe/plugin-react`**：Farm rust 插件，用于 React jsx 编译和 React-refresh 注入。
* **`@farmfe/plugin-sass`**：用于 scss 文件编译的 Farm rust 插件，内部使用 `sass-embedded`。

:::tip
要了解有关 rust 插件的更多信息，请参阅 [Rust 插件](/docs/plugins/rust-plugin)
:::

### 使用 Js 插件
Farm JS 插件是一个以方法为钩子的 JS 对象，例如：
```ts title="farm.config.ts"
import farmPostcssPlugin from "@farmfe/js-plugin-postcss";

export default defineConfig({
  plugins: [
    farmPostcssPlugin({
      // ... 配置 postcss 选项
    })
  ],
});
```
`farmPostcssPlugin()`返回一个插件对象，您可以通过其参数传递任何 postcss 选项。

如果你想快速添加 Farm JS 插件，只需配置一个插件对象即可：
```ts title="farm.config.ts"
import readFileSync from 'fs';

export default defineConfig({
  plugins: [
    // 配置自定义插件
    {
      // 插件名称，必填
      name: 'my-first-farm-plugin',
      // 这个插件的优先级，值越大先执行，默认100。
      priority: 1000,
      // 定义一个加载钩子来确定如何加载模块
      load: {
        // 为了提高性能，如果模块与过滤器不匹配，将被跳过。
        filters: {
          // 仅对 .png 文件执行。
          resolvedPaths: ['\\.txt$']
        },
        // 该钩子的执行回调
        executor: (params, context) => {
          const { resolvedPath } = params;
          const content = readFileSync(resolvedPath, 'utf-8');

          return {
            content: `export default '${content}'`,
            moduleType: 'js'
          }
        }
      }
    }
  ],
});
```
:::warning
Farm 中的 js 插件需要 `filters`。 因为Js Plugin实在是太慢了，我们应该尽量避免执行它。配置 filters 后，对于那些不符合过滤器的模块，Farm 根本不会为它们触发 js 插件钩子！ 这意味着 Farm 只在 Rust 侧就能安全、并发地进行处理，以最大化提升编译性能。
:::

:::tip
了解更多关于 Farm Js 插件的信息，请参考 [JS 插件](/docs/plugins/js-plugin)
:::

## 使用 Vite 插件
Farm 支持开箱即用的 Vite 插件。 首先需要安装vite插件，例如：
```bash
pnpm add @vitejs/plugin-vue @vitejs/plugin-vue-jsx vite -D
```

然后就可以通过`farm.config.ts`中的`vitePlugins`直接使用vite插件了。

```ts title="farm.config.ts"
import vue from '@vitejs/plugin-vue',
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  // 配置vite插件
  vitePlugins: [
    vue(),
    vueJsx()
  ]
});
```
为了提高 vite 插件的性能，您可以使用返回`过滤器`的`函数语法`，例如：

```ts title="farm.config.ts"
import vue from '@vitejs/plugin-vue',

// // 使用Farm 中 Vite 插件的函数语法
function configureVitePluginVue() {
  // 返回插件及其过滤器
  return {
    // 使用 vue 插件
    vitePlugin: vue(),
    // 为其配置过滤器。 不匹配的模块路径将被跳过。
    filters: ['\\.vue$', '\\\\0.+']
  };
}

export default defineConfig({
  vitePlugins: [
    configureVitePluginVue
  ]
});
```

## Farm Runtime Plugin
Farm有一个运行时模块系统来控制如何加载和执行模块。 配置 `compilation.runtime.plugins` 以添加更多运行时插件，例如：
```ts
export default defineConfig({
  compilation: {
    // 配置 Farm 运行时模块系统
    runtime: {
      plugins: [
        // 运行时插件包
        require.resolve('farm-plugin-runtime-mock'),
        // 本地运行时插件
        path.join(process.cwd(), "build/runtime-plugin.ts")
      ]
    }
  }
});
```
您必须配置指向运行时插件条目的路径。 推荐使用绝对路径以避免路径问题。

:::tip
要了解有关运行时插件的更多信息，请参阅[运行时插件](/docs/plugins/runtime-plugin)
:::

## Using SWC Plugins
Swc Plugin 也可以直接在Farm中使用，配置`compilation.script.plugins`来添加SWC插件，例如：
```ts
import jsPluginVue from '@farmfe/js-plugin-vue';

/**
  * @type {import('@farmfe/core').UserConfig}
  */
export default {
   compilation: {
     script: {
       plugins: [{
       //swc插件的包名
         name: 'swc-plugin-vue-jsx',
         // 该swc插件的选项
         options: {
           "transformOn": true,
           "optimize": true
         },
        // 当过滤器匹配时插件执行。
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

数组的每个插件项包含三个字段：
* **name**：swc插件的包名
* **options**：传递给swc插件的配置项
* **filters**：执行插件的哪些模块，必须配置，支持`resolvedPaths`和`moduleTypes`这两个过滤项，如果两者同时指定，则取并集。

:::note
SWC 插件可能与 Farm 使用的 SWC 版本不兼容。 如果出现错误，请尝试升级插件。
:::