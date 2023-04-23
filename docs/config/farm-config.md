
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
  coreLibPath?: string;
  input?: Record<string, string>;
  output?: {
    filename?: string;
    path?: string;
    publicPath?: string;
    assetsFilename?: string;
    targetEnv?: 'browser' | 'node';
  };
  resolve?: {
    extensions?: string[];
    alias?: Record<string, string>;
    mainFields?: string[];
    conditions?: string[];
    symlinks?: boolean;
    strictExports?: boolean;
  };
  define?: Record<string, string>;
  external?: string[];
  mode?: 'development' | 'production';
  root?: string;
  runtime?: {
    path: string;
    plugins?: string[];
    swcHelpersPath?: string;
  };
  assets?: {
    include?: string[];
  };
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
        // Effective only if `decorator` is true.
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
  sourcemap?: boolean | 'all';
  partialBundling?: {
    moduleBuckets?: {
      name: string;
      test: string[];
    }[];
  };
  lazyCompilation?: boolean;
  treeShaking?: boolean;
  minify?: boolean;
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
      Record<string, any>
    ];

export interface JsPlugin {
  name: string;
  priority?: number;

  config?: object;

  resolve?: {
    filter: {
      importers: string[];
      sources: string[];
    },
    executor: (
      param: { importer: { relativePath: string; queryString: string | null } | null, kind: string, source: string }, 
      context?: CompilationContext, 
      hookContext?: { caller?: string; meta: Record<string, unknown> }
    ) => {
      resolvedPath: string,
      external: boolean,
      sideEffects: boolean,
      query: [string, string][] | null,
      meta: Record<string, string> | null,
    };
  };

  load?: {
    filter: {
      resolvedPaths: string[]
    },
    executor: (
      param: { resolvedPath: string, query: [string, string][], meta: Record<string, string> | null }, 
      context?: CompilationContext, 
      hookContext?: { caller?: string; meta: Record<string, unknown> }
    ) => {
      content: string;
      moduleType: string;
    };
  };

  transform?: {
    filter: {
      resolvedPaths: string[]
    },
    executor: (
      param: { content: string, moduleType: string, resolvedPath: string, query: [string, string][], meta: Record<string, string> | null }, 
      context?: CompilationContext, 
      hookContext?: { caller?: string; meta: Record<string, unknown> }
    ) => {
      content: string;
      moduleType?: string;
      sourceMap?: string | null
    };
  };
}
```
