# Performance Compare

For a basic React demo project:

|                     | Webpack | Vite  | Farm  | Compare                                       |
| ------------------- | ------- | ----- | ----- | --------------------------------------------- |
| **cold start**      | 853ms   | 276ms | 67ms  | Farm is faster: **12x webpack**，**4x vite**  |
| **HMR**             | 43ms    | 23ms  | 2ms   | Farm is faster: **20x webpack**，**10x vite** |
| **onload**          | 83ms    | 310ms | 57ms  | Farm is faster: **5x vite**                   |
| **accessible time** | 936ms   | 586ms | 124ms | Farm is faster: **8x webpack**，**5x vite**   |

> Test Repo：https://github.com/farm-fe/performance-compare
>
> Test Machine（Linux Mint 21.1 Cinnamon， 11th Gen Intel© Core™ i5-11400 @ 2.60GHz × 6， 15.5 GiB）