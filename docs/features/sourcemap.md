# Source Map
Farm supports Tree Shake, which is automatically enabled by default. It can be turned on or off via the `compilation.sourcemap` option.

:::note
Farm will not generate sourcemap for files under node_modules by default, if you want to generate sourcemap for files under node_modules, configure `compilation.sourcemap` to `all`.
:::