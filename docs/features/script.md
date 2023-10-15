
# Script
Farm support compiling `Js/Jsx/Ts/Tsx` out of box, and compile `Jsx/Tsx` to React by default.

```tsx title="./button.tsx"
import Button from './Button';

function ButtonGroup(props: ButtonProps) {
  return <div>{props.buttons.map(b => <Button>{b}</Button>)}</div>
}
```

Farm using SWC to compile scripts, and Farm has set reasonable default configurations for script compilation. Also, you can use `compilation.script` to configure how to compile your script file. see [compilation.script](/docs/config/farm-config#compilation-options) for details. 


## Configuring Swc Parser
You can configuring the SWC Parser through `compilation.script.parser`. Refer to https://swc.rs/docs/configuration/compilation#jscparser.

For example, if you want to enable decorator, you can set `compilation.script.parser.esConfig.decorators`(or tsConfig.decorators if the module is TS):

```ts title="farm.config.ts"
export default {
   compilation: {
     script: {
      // for .js/.jsx files
       esConfig: {
        decorators: true
       },
       // for .ts/.tsx files
       tsConfig: {
        decorators: true
       }
     }
   },
};
```

By default Farm set `jsx: true` for `.jsx|.tsx` files. Other field are default to SWC's defaults.

## Configuring Target
Using `compilation.script.target` to configure your target env when running your project, Farm set it default to `ESNext`.

This option can be used along with `compilation.presetEnv` to gracefully downgrade your project for old browsers. For example, you can set target to `ES5` and enable `presetEnv`, then your project will be fully downgrade to ES5.

```ts title="farm.config.ts"
export default {
   compilation: {
     script: {
      target: 'ES5'
     },
     presetEnv: true,
   },
};
```

Refer to [Polyfill](/docs/features/polyfill) for more about `presetEnv`.

## Using SWC Plugins
SWC Plugins can be used directly in Farm, for example, we use `swc-plugin-vue-jsx` to compiling vue jsx in Farm:

```ts title="farm.config.ts"
import jsPluginVue from '@farmfe/js-plugin-vue';

/**
  * @type {import('@farmfe/core').UserConfig}
  */
export default {
   compilation: {
     script: {
       plugins: [{
         name: 'swc-plugin-vue-jsx',
         options: {
           "transformOn": true,
           "optimize": true
         },
         filters: {
           // resolvedPaths: [".+"]
           moduleTypes: ['tsx', 'jsx'],
         }
       }]
     }
   },
   plugins: [jsPluginVue()],
};
```

Refer to [Using Plugins](/docs/using-plugins#using-swc-plugins) for more details.