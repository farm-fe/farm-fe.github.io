# Configuring Farm

## Config File Spec
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

For config options details, refer to:
* [`Compiler Options`](/docs/config/compilation-options): Configuring compiler options(`compilation` field), like `input`, `output`, `css compilation`, `bundling rules` and so on.
* [`Dev Server Options`](/docs/config/dev-server): Configuring dev server options(`server` field), like `port`, `host`, `protocol` and so on.
* [`Shared Options`](/docs/config/shared): Configuring shared options between `compiler options` and `dev server options`, like `root`, `env` and so on.

:::note
You can also use `farm start/build -c my-config.ts` to use a custom file as config file.
:::

## Examples
### Input and Output
```ts title="farm.config.ts" {5-7}
import { defineConfig } from "@farmfe/core";

export default defineConfig({
  // compile options
  compilation: {
    input: {
      index: './src/index.html',
      about: './src/about.html',
    },
    output: {
      path: 'build',
      publicPath: process.env.NODE_ENV === 'production' ? 'https://my-cdn.com' : '/'
    }
  },
});
```

In above example, we configured `./src/index.html` and `./src/about.html` as input, then output the compiled resources to `build` dir.

### Dev Server Port

```ts title="farm.config.ts" {5-7}
import { defineConfig } from "@farmfe/core";

export default defineConfig({
  server: {
    port: 9801
  }
});
```

### Disable Default Optimizations
```ts title="farm.config.ts" {5-7}
import { defineConfig } from "@farmfe/core";

export default defineConfig({
  // compile options
  compilation: {
    lazyCompilation: false,
    persistentCache: false,
    minify: false,
    treeShake: false
  },
});
```

