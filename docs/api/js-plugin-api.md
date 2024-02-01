# Js Plugin Api

Farm Js Plugin has designed a similar rollup style design plugin system and easy to migrate your plugins/projects from Rollup/Vite/Webpack.

## Conventions

For farm specific js plugins:

- The Farm plugin should have a name with a `farm-plugin-` prefix and clear semantics.

- Include the `farm-plugin-` keyword in package.json.

If your plugin is only applicable to a specific framework, its name should follow the following prefix format:

- `farm-plugin-vue-`: Prefix as a Vue plugin
- `farm-plugin-react-`: Prefix as a React plugin
- `farm-plugin-svelte-`: Prefix as a svelte plugin
- ...

## Configuring Js Plugins

Adding JS plugins by `plugins` option:

```ts title="farm.config.ts" {3,7}
import { defineConfig } from "@farmfe/core";
// import a js plugin
import farmPluginFoo from "farm-plugin-foo";

export default defineConfig({
  // configuring it in plugins
  plugins: [farmPluginFoo()],
});
```

## Writing Js Plugins
A Farm Js Plugin is a plain javascript object which exposes a set of `hook`s. for example:

```ts title="my-farm-plugin.ts"
// Create a plugin file that exports a plugin function which returns a `JsPlugin` Object:

import type { JsPlugin } from '@farmfe/core';

// Plugin Options
export interface PluginOptions {
  test: boolean;
}
// export a Plugin Function
export default function MyPlugin(options: PluginOptions): JsPlugin {
  // reading options
  const { test } = options;

  // return a object that exposes hook
  return {
    name: 'my-farm-plugin',
    // using load hook to load custom modules
    load: {
      filters: {
        resolvedPaths: ['\\.test$'] // filter files to improve performance
      },
      executor({ resolvedPath }) {
        if (test && resolvedPath.endsWith('.test')) {
          return {
            content: 'test file',
            sourceMap: null
          }
        }
      }
    }
  }
}
```
then using the plugin in `farm.config.ts`:
```ts title="farm.config.ts" {3,7}
import { defineConfig } from "@farmfe/core";
// import a js plugin
import myFarmPlugin from "./my-farm-plugin";

export default defineConfig({
  // configuring it in plugins
  plugins: [myFarmPlugin({
    test: true
  })],
});
```

:::note
For more details of writing JS plugins, refer to [Writing JS Plugins](/docs/plugins/writing-plugins/js-plugin)
:::

## hooks
### name
- **type: `string`**
- **required: `true`**

The name of this plugins, MUST not be empty.
```ts
export default function MyPlugin() {
  return {
    name: 'my-plugin',
    // ...
  }
}
```

### priority
### name
- **type: `number`**
- **required: `false`**
- **default: `100`**

The priority of this plugins, default to `100`. `priority` controls the execution order of plugins, the larger the value, the earlier the plugin is executed.

```ts
export default function MyPlugin() {
  return {
    name: 'my-plugin',
    priority: 1000, // make this plugins execute bebore all other plugins
    // ...
  }
}
```
:::note
Note that the priority of most farm internal plugins like `plugin-script`, `plugin-resolve` is `99`, which means your plugins is always executed before the internal plugins. If your want to make your plugin executed after farm internal plugins, set `priority` to a value that smaller than `99`, for example: `98`. Also the priority value can be negative, you can set it to `-9999` to make sure it is always executed at last.
:::

### config
### configResolved
### configureDevServer
### configureCompiler
### buildStart
### resolve
### load
### transform
### buildEnd
### renderStart
### renderResourcePot
### argumentResourceHash
### finalizeResources
### transformHtml
### writeResources
### pluginCacheLoaded
### writePluginCache
### finish
### updateModules

```ts
export interface JsPlugin {
  name: string;
  priority?: number;

  config?: (config: UserConfig) => UserConfig | Promise<UserConfig>;

  configResolved?: (config: ResolvedUserConfig) => void | Promise<void>;

  /**
   * runs in development mode only
   * @param server
   * @returns
   */
  configureDevServer?: (server: DevServer) => void | Promise<void>;
  /**
   * @param compiler
   * @returns
   */
  configureCompiler?: (compiler: Compiler) => void | Promise<void>;

  buildStart?: { executor: Callback<Record<string, never>, void> };

  resolve?: JsPluginHook<
    {
      importers: string[];
      sources: string[];
    },
    PluginResolveHookParam,
    PluginResolveHookResult
  >;

  load?: JsPluginHook<
    { resolvedPaths: string[] },
    PluginLoadHookParam,
    PluginLoadHookResult
  >;

  transform?: JsPluginHook<
    { resolvedPaths?: string[]; moduleTypes?: string[] },
    PluginTransformHookParam,
    PluginTransformHookResult
  >;

  buildEnd?: { executor: Callback<Record<string, never>, void> };

  finish?: { executor: Callback<Record<string, never>, void> };

  updateModules?: {
    executor: Callback<
      { paths: [string, string][] },
      string[] | undefined | null | void
    >;
  };

  renderStart?: {
    executor: Callback<Config['config'], void>;
  };

  renderResourcePot?: JsPluginHook<
    {
      resourcePotTypes?: ResourcePotType[];
      moduleIds?: string[];
    },
    RenderResourcePotParams,
    RenderResourcePotResult
  >;

  augmentResourceHash?: JsPluginHook<
    {
      resourcePotTypes?: ResourcePotType[];
      moduleIds?: string[];
    },
    ResourcePotInfo,
    string
  >;

  finalizeResources?: {
    executor: Callback<
      FinalizeResourcesHookParams,
      FinalizeResourcesHookParams
    >;
  };

  transformHtml?: {
    executor: Callback<{ htmlResource: Resource }, Resource>;
  };

  writeResources?: {
    executor: (param: FinalizeResourcesHookParams) => void | Promise<void>;
  };

  pluginCacheLoaded?: {
    executor: Callback<number[], undefined | null | void>;
  };

  writePluginCache?: {
    executor: Callback<undefined, number[]>;
  };
}

```