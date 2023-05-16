---
sidebar_position: 1
---

# Html
## Basic Usage
Farm support compile Html out of box, and you should use Html as entry when build a web project, for example:

```ts title="farm.config.ts"
import type { UserConfig } from '@farmfe/core';

export default <UserConfig>{
  input: {
    index: './index.html' // using ./index.html as entry
  }
}
```
:::note
If the input is not specified, default to `{ index: 'index.html' }`.
:::

and in `./index.html`, a `<script src="./xxx">` should be used to refer to your script entry.

```html title="./index.html"
<html>
  <!-- ... -->
  <body>
    <div id="root"></div>
    <!-- index.ts is the script entry -->
    <script src="./index.ts"></script> 
  </body>
</html>

```
and you can also use `<link href="./xxx">` to refer to your global css.

Farm will transform these `scripts` and `links` to final production resources when compiling. 

:::tip
The `script` and `link` can refer to any module types that farm support, for example, `js`, `jsx`, `ts`, `tsx`, or other module types supported by plugins. You can use as many `scripts` or `links` as you want.
:::

## Multi Page App
If you are building a Multi Page Application, just configure multiple html input, for example:

```ts title="farm.config.ts"
import type { UserConfig } from '@farmfe/core';

export default <UserConfig>{
  input: {
    home: './index.html', // Home Page
    about: './about.html', // About Page
    // ... more pages
  }
}
```
Farm will compile these pages in parallel.
