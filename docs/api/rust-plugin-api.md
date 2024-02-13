# Rust Plugin Api
:::note
This document only covers the details of the plugin hooks. For how to create, build and publish a rust plugin see: [Writing Rust Plugins](/docs/plugins/writing-plugins/rust-plugin)
:::

## Conventions

For farm specific js plugins:

- The Farm plugin should have a name with a `farm-plugin-` prefix and clear semantics.
- Include the `farm-plugin-` keyword in package.json.

If your plugin is only applicable to a specific framework, its name should follow the following prefix format:

- `farm-plugin-vue-`: Prefix as a Vue plugin
- `farm-plugin-react-`: Prefix as a React plugin
- `farm-plugin-svelte-`: Prefix as a svelte plugin
- ...

## Configuring Rust Plugins

Adding Rust plugins by `plugins` option:

```ts title="farm.config.ts" {3,7}
import { defineConfig } from "@farmfe/core";

export default defineConfig({
  // configuring it in plugins
  plugins: [
    ['@farmfe/plugin-sass', { /** plugin options here */ }]
  ],
});
```

Configuring the Rust plugin package name(or path) in string and its options in object.

## Plugin Hooks Overview
Farm provides a lot of rollup-style hooks, these hooks are divided into build stage and generate stage:
![Farm Plugin Hooks](/img/farm-plugin-hooks.png)

## name


## config

## plugin_cache_loaded

## resolve

## load

## transform

## parse

## analyze_deps

## process_module

## finalize_modules

## build_end

## generate_start

## optimize_module_graph

## analyze_module_graph

## partial_bundling

## process_resource_pot_map

## render_start

## render_resource_pot_modules

## render_resource_pot

## argument_resource_hash

## optimize_resource_pot

## generate_resources

## finalize_resources

## generate_end

## finish

## write_plugin_cache

## update_modules

## module_graph_updated

## update_finished