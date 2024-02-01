# Hmr Api
:::note
The HMR API is compatible with [Vite's HMR API](https://vitejs.dev/guide/api-hmr.html).
:::

Farm exposes its manual HMR API via the special import.meta.hot object(the same as Vite):
```ts
export interface ViteHotContext {
  readonly data: any;

  accept(): void;
  accept(cb: (mod: ModuleNamespace | undefined) => void): void;
  accept(dep: string, cb: (mod: ModuleNamespace | undefined) => void): void;
  accept(
    deps: readonly string[],
    cb: (mods: Array<ModuleNamespace | undefined>) => void
  ): void;

  // acceptExports is not supported in Farm for now
  // acceptExports(
  //   exportNames: string | readonly string[],
  //   cb?: (mod: ModuleNamespace | undefined) => void
  // ): void;

  dispose(cb: (data: any) => void): void;
  prune(cb: (data: any) => void): void;
  invalidate(message?: string): void;

  on<T extends string>(
    event: T,
    cb: (payload: InferCustomEventPayload<T>) => void
  ): void;
  off<T extends string>(
    event: T,
    cb: (payload: InferCustomEventPayload<T>) => void
  ): void;
  send<T extends string>(event: T, data?: InferCustomEventPayload<T>): void;
}
```

## Required Conditional Guard

## IntelliSense for TypeScript

## hot.accept()

## hot.accept(cb)

## hot.accept(deps, cb)

## hot.dispose(cb)

## hot.prune(cb)

## hot.data

## hot.decline()

## hot.invalidate(message?: string)

## hot.on(event, cb)

## hot.off(event, cb)

## hot.send(event, data)