# DevServer and HMR
Farm provides `DevServer` and enabled `HMR` in `development` by default.

## Configuring Dev Server
All dev server options are configured by [`server`](/docs/config/dev-server).

```ts
import { defineConfig } from '@farmfe/core';

export default defineConfig({
  server: {
    port: 9801
  }
})
```

## Dev Server Middlewares


## Hot Module Replacement(HMR)
Farm provides a [Vite-compatible HMR API](/docs/api/hmr-api). If you are framework authors, leverage the API to update your Application instance, precise without reloading the page.

* For React, **React Refresh** are enabled automatically by official plugins [@farmfe/plugin-react](/docs/plugins/official-plugins/react).
* For Vue, Solid and other frameworks, it's HMR are supported by there plugins like `@vitejs/plugin-vue`, `vite-plugin-solid` and so on.

Farm provides official templates that set all these capabilities up already, create an app via [create-farm](/docs/quick-start) then all HMR abilities are ready.

:::note
Refer to [HMR Options](/docs/config/dev-server#hmr) for how to configuring HMR.
:::