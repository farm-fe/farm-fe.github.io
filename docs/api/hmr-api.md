# Hmr Api
:::note
The HMR API is compatible with [Vite's HMR API](https://vitejs.dev/guide/api-hmr.html).
:::

Farm exposes its manual HMR API via the special `import.meta.hot` object(compatible with Vite):
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
HMR only works for development mode, make sure to guard HMR API usage with a conditional block:

```ts
if (import.meta.hot) {
  // HMR Code
}
```

## IntelliSense for TypeScript
The same as Vite, Farm provides type definitions for `import.meta.hot` in `@farmfe/core/client.d.ts`. You can create an `env.d.ts` in the src directory so TypeScript picks up the type definitions:

```ts
/// <reference types="@farmfe/client/client" />
```

## hot.accept()
For a self-accepted module, use `import.meta.hot.accept()` when :

```ts
if (import.meta.hot) {
  // self accept without reload the page
  import.meta.hot.accept();

  const div = document.getElementById(id);
  // update the page
  if (div) {
    const comp = SelfAcceptedEmpty().render();
    div.replaceWith(comp);
  }
}
```

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