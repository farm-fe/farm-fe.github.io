# Benchmarks

Using Turbopack's bench cases (1000 React components), see https://turbo.build/pack/docs/benchmarks.

> Test Repo：https://github.com/farm-fe/performance-compare
>
> Test Machine（Linux Mint 21.1 Cinnamon， 11th Gen Intel© Core™ i5-11400 @ 2.60GHz × 6， 15.5 GiB）

---

|           | **Startup** | **HMR (Root)** | **HMR (Leaf)** | **Production Build** |
| --------- | ----------- | -------------- | -------------- | -------------------- |
| Webpack   | 8035ms      | 345ms          | 265ms          | 11321ms              |
| Vite      | 3078ms      | 35ms           | 18ms           | 2266ms               |
| Turbopack | 3731ms      | 62ms           | 54ms           | 6442ms               |
| Rspack    | 831ms       | 104ms          | 96ms           | 724ms                |
| Farm      | 403ms       | 11ms           | 10ms           | 288ms                |

### Full Benchmark

![performance](/img/20231204223204.png)

### HMR Benchmark

![performance](/img/hmr-linux.png)

### Startup Benchmark

![performance](/img/startup-linux.png)

### Production Build Benchmark

![performance](/img/build-linux.png)
