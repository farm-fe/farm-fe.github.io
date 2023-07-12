# Tree Shake
Farm 支持 Tree Shake，在默认 Production 环境下自动开启。通过 `compilation.treeShake` 选项可控制开启或者关闭。

Tree Shake 时，会自动读取 package.json 中的 sideEffects 字段，有 sideEffect 的模块将不会进行 Tree Shake。

:::note
Farm 会将所有循环依赖的模块视作 sideEffect，不会进行 Tree Shake，请尽量避免项目中存在循环依赖。
:::