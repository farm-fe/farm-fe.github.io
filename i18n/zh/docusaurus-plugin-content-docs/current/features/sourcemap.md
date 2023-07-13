# Source Map
Farm 支持 Tree Shake，默认自动开启。通过 `compilation.sourcemap` 选项可控制开启或者关闭。

:::note
Farm 默认不会为 node_modules 下的文件生成 sourcemap，如果希望为 node_modules 下的文件生成 sourcemap，将 `compilation.sourcemap` 配置成 `all`。
:::