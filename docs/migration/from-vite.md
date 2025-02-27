# Migrate From Vite
:::note
Vite plugins like `unocss` are deeply integrated with `Vite`, these plugins may not be compatible with Farm due to the difference in internal design. You can try other methods like `unocss postcss plugin` as a workaround.
:::

Migrating from Vite is really simple as Farm is Vite-compatible. All you need to do is to:
* Rename `vite.config.ts` to `farm.config.ts`
* Refer to [Configuring Farm](/docs/config/configuring-farm) for mapping farm config options to vite config options.
* For `Vite Plugins`, move `plugins` in `vite.config.ts` to `vitePlugins` in `farm.config.ts`.

Note that:
* Some Vite config options are not needed in Farm, like `optimizeDeps`, you can ignore these options when migrating to Farm.
* For SSR, you need to refactor it to [Farm SSR](/docs/advanced/ssr)


We have migrated a [Real Vite Admin Project](https://github.com/farm-fe/farm-soybean-admin) to Farm. Please take a look at this migration example for details.
