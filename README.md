# Farm docs
Docs site of Farm.

Install dependencies:
```bash
pnpm i
```

Development locally:
```bash
npm start
```

Merge the changes to main will automatically publish to github pages.

## Configuring

Farm load configuration file from `farm.config.ts`. The available config as below:

```ts
export interface UserConfig {
  /** current root of this project, default to current working directory */
  root?: string;
  /** js plugin(which is a javascript object) and rust plugin(which is string refer to a .farm file or a package) */
  plugins?: (RustPlugin | JsPlugin)[];
  /** config related to compilation */
  compilation?: {
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
    root?: string;
    runtime?: {
      path: string;
      plugins?: string[];
      swcHelpersPath?: string;
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
    partialBundling?: {
      moduleBuckets?: {
        name: string;
        test: string[];
      }[];
    };
    lazyCompilation?: boolean;
  };
  /** config related to dev server */
  server?: UserServerConfig;
}

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

export interface UserServerConfig {
  port?: number;
  https?: boolean;
  // http2?: boolean;
  hmr?: boolean | UserHmrConfig;
}
```
