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

## Plugins config

```ts
// farm.config.js
import { defineConfig } from "@farmfe/core";
import farmPlugin from "farm-plugin";
import vitePlugin from "vite-plugin";
import rollupPlugin from "roll-plugin";

export default defineConfig({
  plugins: [farmPlugin(), vitePlugin(), rollupPlugin()],
});
```

Plugins can also accept `multiple plugins` as presets for a single element.

```ts
import framework1 from "farm-plugin-framework1";
import framework2 from "farm-plugin-framework2";

export default function framework(config) {
  return [framework1(config), framework2(config)];
}
```

```ts
import { defineConfig } from "@farmfe/core";
import framework from "farm-plugin-framework";

export default defineConfig({
  plugins: [framework()],
});
```

## Example

### transform vue suffix file

```ts
export default function plugin() {
  return {
    name: "transform--vue-file",
    load: {
      filters: {
        resolvedPaths: [".vue$"],
      },
      async executor(params) {
        const { resolvedPath } = params;
        const content = await tryToReadFileSync(resolvedPath);
        return {
          content,
          moduleType: "vue",
        };
      },
    },
    transform: {
      filter: {
        moduleTypes: ["vue"],
      },
      async executor(params) {
        const { resolvedPath, content } = params;
        ctx.handleTransform(resolvedPath);
        return {
          content,
          moduleType: "js",
        };
      },
    },
  };
}
```

## hook

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