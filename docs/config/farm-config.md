
# Config Reference
Farm loads config from `farm.config.ts|js|mjs` file under the project root. Example:

```ts title="farm.config.ts"
import type { UserConfig } from '@farmfe/core';

export default <UserConfig>{
  root: process.cwd(), // config project root
  // Options related compilation
  compilation: {
    // ...
  },
  // Options related to dev server
  server: {
    hmr: true,
    // ...
  },
  // Additional plugins
  plugins: []
};
```

## Compilation Options

### input

* **type**: `Record<string, string>`

The entry points of your projects. The input can files can be `html`, `ts/js/tsx/jsx`, or other files that support by plugins.

```tsx
import type { UserConfig } from '@farmfe/core';

export default <UserConfig> {
  compilation: {
    input: {
      index: './index.html',
      about: './about.html'
    },
  }
  // ..
}
```


### output
* **type**: `OutputOptions`
```ts
interface OutputOptions {
  // filename of the compiled result
  filename?: string;
  // output dir path
  path?: string;
  // public path to load resources
  publicPath?: string;
  // same like filename but for static assets
  assetsFilename?: string;
  // target execution env of the compiled result
  targetEnv?: 'browser' | 'node';
}
```
Configuring the emit of the compilation result - we call the result resources.

#### `output.filename`
* **defaultValue**: `"[resourceName].[ext]"`

Filename of the generated files. You can use placeholders like `[resourceName]`. All placeholders:
* `[resourceName]`: The name of this file, the value is a normalized relative path for entry resource, or a hash string for other auto split resources.
* `[contentHash]`: The content hash of this resource.
* `[ext]`: internal extension of this resource.

#### `output.path`
* **defaultValue**: `"dist"`

Output dir path for generated resource.

#### `output.publicPath`
* **defaultValue**: `"/"`

The base url to load resources. Can be a url like `https://xxxx` or a path like `/xxx`.

#### `output.assetsFileName`
* **defaultValue**: `"[resourceName].[ext]"`

Same format like `output.filename`. but used to configuring static assets.

#### `output.targetEnv`
* **defaultValue**: `"browser"`

Target execution environment of the compiled resources, `"browser"` or `"node"`.

### resolve
* **type**: `ResolveOptions`
```ts
interface ResolveOptions {
  extensions?: string[];
  alias?: Record<string, string>;
  mainFields?: string[];
  conditions?: string[];
  symlinks?: boolean;
  strictExports?: boolean;
};
```
#### `resolve.extensions`

#### `resolve.alias`


#### `resolve.mainFields`


#### `resolve.conditions`


#### `resolve.symlinks`


#### `resolve.strictExports`


### define

### external


### mode


### root


### runtime


### assets

### script

### css

### sourcemap


### partialBundling


### lazyCompilation

### treeShaking

### minify

### presetEnv

## Server Options

### port

### https(WIP)

### hmr

### proxy

### strictPort

### open

### host


## Plugins Options

### Rust Plugins


### Js Plugins