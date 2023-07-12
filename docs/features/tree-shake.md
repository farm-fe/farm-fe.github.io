# Tree Shake
Farm supports Tree Shake, which is automatically enabled in the default Production environment. It can be turned on or off by the `compilation.treeShake` option.

During Tree Shake, the sideEffects field in package.json will be automatically read, and modules with sideEffects will not perform Tree Shake.

:::note
Farm will treat all circularly dependent modules as sideEffects and will not perform Tree Shake. Please try to avoid circular dependencies in your project.
:::