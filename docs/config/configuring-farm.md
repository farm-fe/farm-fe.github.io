# Configuring Farm

By default, Farm reads the configuration from the `farm.config.ts|js|mjs` file in the project root directory, an example configuration file:

```ts title="farm.config.ts" {5-7}
import { defineConfig } from "@farmfe/core";
export default defineConfig({
  root: process.cwd(), // compiled root directory
  // compile options
  compilation: {
    //...
  },
  // Dev Server options
  server: {
    hmr: true,
    //...
  },
  // plugin configuration
  plugins: [],
});
```

This document only covers details `compilation` options. For `server` or `shared` options, refer to [server](/docs/config/dev-server) or [shared](/docs/config/shared).