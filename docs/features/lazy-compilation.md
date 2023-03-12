# Lazy Compilation
When comes to a big project, you may want to split them into small pieces and load on demand. This can be achieved by dynamic imports.

```js
const page = React.lazy(() => import('./page')); // lazy load page
```

By default, Farm will lazy compile these dynamic imports, only compile them when the module is really needed.

Lazy compilation can really speedup the compiling time of a large project if you using `dynamic import` correctly.