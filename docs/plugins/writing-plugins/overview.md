
# Overview
To use a Rust plugin, configuring `plugins` in `farm.config.ts`.

```ts
import { defineFarmConfig } from '@farmfe/core/dist/config';

defineFarmConfig({
  // ...
  plugins: [
    { /*..*/ }, // Js plugin, a object with hook defined
    '@farmfe/plugin-react', // rust plugin package name
  ]
})

```

Farm support both rust plugins and js plugins:

* [Rust Plugin](/docs/plugins/writing-plugins/rust-plugin)
* [Js Plugin](/docs/plugins/writing-plugins/js-plugin)
* [Runtime Plugin](/docs/plugins/writing-plugins/runtime-plugin)