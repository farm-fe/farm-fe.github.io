
# Config Reference
Farm loads config from `farm.config.ts` or `farm.config.js` file under the project root, recommend to use `farm.config.ts` to get typing support easily.

The config file look like: 

```ts
import { defineFarmConfig } from '@farmfe/core/dist/config';

export default defineFarmConfig({
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
});
```

## Compilation Options
> The detail of each option will be completed later

```ts
import { defineFarmConfig } from '@farmfe/core/dist/config';

export default defineFarmConfig({
  // Options related compilation
  compilation: CompilationOptions;
  // ..
});

interface CompilationOptions {
  input?: Record<string, string>;
  output?: {
    filename?: string;
    path?: string;
    publicPath?: string;
  };
  resolve?: {
    extensions?: string[];
    alias?: Record<string, string>;
    mainFields?: string[];
    conditions?: string[];
    symlinks: boolean;
  };
  external?: string[];
  mode?: 'development' | 'production';
  runtime?: {
    plugins?: string[]; // custom runtime plugin
  };
  // Options parsed to swc
  script?: {
    // specify target es version
    target?:
      | 'es3'
      | 'es5'
      | 'es2015'
      | 'es2016'
      | 'es2017'
      | 'es2018'
      | 'es2019'
      | 'es2020'
      | 'es2021'
      | 'es2022';
    // config swc parser
    parser?: {
      esConfig?: {
        jsx?: boolean;
        fnBind: boolean;
        // Enable decorators.
        decorators: boolean;

        // babel: `decorators.decoratorsBeforeExport`
        //
        // Effective only if `decorators` is true.
        decoratorsBeforeExport: boolean;
        exportDefaultFrom: boolean;
        // Stage 3.
        importAssertions: boolean;
        privateInObject: boolean;
        allowSuperOutsideMethod: boolean;
        allowReturnOutsideFunction: boolean;
      };
      tsConfig?: {
        tsx: boolean;
        decorators: boolean;
        /// `.d.ts`
        dts: boolean;
        noEarlyErrors: boolean;
      };
    };
  };
  // Specify which modules to be bundled tother
  partialBundling?: {
    moduleBuckets?: {
      name: string;
      test: string[];
    }[];
  };
  // Enable lazyCompilation or not
  lazyCompilation?: boolean;
};
```

## Server Options

```ts
export default defineFarmConfig({
  // Options related compilation
  server: ServerOptions;
  // ..
});

interface ServerOptions {
  https?: boolean;
  port?: number;
  hmr?: boolean;
}
```

## Plugins Options

```ts
export default defineFarmConfig({
  // Options related compilation
  plugins: (RustPlugin | JsPlugin)[];
  // ..
});

export type RustPlugin =
  | string
  | [
      string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Record<string, any>
    ];

export interface JsPlugin {
  resolve: JsPluginHook<
    {
      importers: string[];
      specifiers: string[];
    },
    PluginResolveHookParam,
    PluginResolveHookResult
  >;

  // load: JsPluginHook<{ filters: { ids: string[] }}>;
}
```