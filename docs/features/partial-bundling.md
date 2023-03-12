# Partial Bundling
Back to webpack, the developer often uses `splitChunks` to split bundles, trying to optimize the resources loading time and increase the cache hit rate. But configuring `splitChunks` is really complex and sometimes it won't achieve what you want.

So Farm invented `Partial Bundling`, bundle your application into several resources based on the dependency relationship and resource sizes automatically.

## How Partial Bundling Works
WIP...