# Js Plugins
A Js plugin is a plain Javascript object.

```js
// farm.config.ts
import { UserConfig } from '@farmfe/core';

export default <UserConfig>{
  // ...
  plugins: [
    // a plugin object
    {
      name: 'my-resolve-plugin',
      priority: 1000, // the priority of this plugin, the larger the value, the earlier the execution. Normally internal plugins is 100.
      resolve: {
        filters: { // Only execute the hook when following conditions satisfied
          sources: ['\\./index.ts'], // a regex array
          importers: ['None'],
        },
        executor: async (param) => { // this hook executor
          console.log(param); // resolve params
          // return the resolve result
          return {
            resolvedPath: 'virtual:my-module',
            query: {},
            sideEffects: false,
            external: false,
          };
        },
      },
    },
    // load, transform are similar to resolve, refer to their types
  ],
};
```

If you want to pass args to your plugins，you can use a closure.

```ts
// my-resolve-plugin.ts
export function myResolvePlugin(options: Options) {
  const { xx } = options

  return {
    name: 'my-resolve-plugin',
    resolve: {
      // ...
    }
  };
}

// farm.config.ts
import { defineFarmConfig } from '@farmfe/core/dist/config';
import { myResolvePlugin } from './myResolvePlugin.ts';

export default defineFarmConfig({
  // ...
  plugins: [myResolvePlugin({ xx:'xx' })],
});
```