# Farm CLI API

The Farm CLI allows you to start, build, preview, and watch your application.

To get a list of cli available to Farm, run the following command inside your command

```json title="Terminal"
npx farm -h
```

The output look like this:

```json title="Terminal"
farm/0.5.11

Usage:
  $ farm [root]

Commands:
  [root]            Compile the project in dev mode and serve it with farm dev server
  build             compile the project in production mode
  watch             watch file change
  preview           compile the project in watch mode
  clean [path]      Clean up the cache built incrementally
  plugin [command]  Commands for manage plugins

For more info, run any command with the `--help` flag:
  $ farm --help
  $ farm build --help
  $ farm watch --help
  $ farm preview --help
  $ farm clean --help
  $ farm plugin --help

Options:
  -l, --lazy           lazyCompilation
  --host <host>        specify host
  --port <port>        specify port
  --open               open browser on server start
  --hmr                enable hot module replacement
  --cors               enable cors
  --strictPort         specified port is already in use, exit with error
  -c, --config <file>  use specified config file
  -m, --mode <mode>    set env mode
  --base <path>        public base path
  --clearScreen        allow/disable clear screen when logging
  -h, --help           Display this message
  -v, --version        Display version number
```

## Start

`farm start` 命令用于启动开发服务器, 将代码进行开发环境的编译

```json title="Terminal"
Usage:
  $ farm [root]

Options:
  -l, --lazy           lazyCompilation
  --host <host>        specify host
  --port <port>        specify port
  --open               open browser on server start
  --hmr                enable hot module replacement
  --cors               enable cors
  --strictPort         specified port is already in use, exit with error
  -c, --config <file>  use specified config file
  -m, --mode <mode>    set env mode
  --base <path>        public base path
  --clearScreen        allow/disable clear screen when logging
```

<!-- - -l, --lazy: lazyCompilation（懒编译）选项。它允许你在需要时才进行编译，而不是在每次更改时都进行编译。这可以提高开发效率。

- --host <host>: host（主机）选项。它允许你指定服务器的主机地址。你可以将其设置为特定的IP地址或域名。

- --port <port>: port（端口）选项。它允许你指定服务器的端口号。你可以将其设置为任何未被占用的端口号。

- --open: open（打开）选项。它在服务器启动时自动打开浏览器。这对于快速预览你的应用程序或网站非常方便。

- --hmr: hmr（热模块替换）选项。它启用热模块替换功能，允许在运行时替换模块，而无需刷新整个页面。这对于开发过程中的实时更新非常有用。

- --cors: cors（跨域资源共享）选项。它启用跨域资源共享，允许从不同域的服务器请求资源。这对于开发涉及跨域请求的应用程序非常有用。

- --strictPort: strictPort（严格端口）选项。如果指定的端口已经被占用，它会导致服务器退出并显示错误消息。

- -c, --config <file>: config（配置文件）选项。它允许你指定一个特定的配置文件来配置你的项目。你可以将其设置为文件的路径。

- -m, --mode <mode>: mode（环境模式）选项。它允许你设置项目的环境模式。环境模式可以是开发模式、生产模式或其他自定义模式。

- --base <path>: base（基础路径）选项。它允许你指定公共基础路径，用于解析静态资源的相对路径。

- --clearScreen: clearScreen（清除屏幕）选项。它允许你在记录日志时启用或禁用清除屏幕的功能。这对于在终端中保持日志清晰可见非常有用。

这些选项可以根据你的项目需求进行配置，以便更好地控制和定制你的应用程序。 -->

## Build

`farm build` 命令会在默认的 `dist` 目录下构建出可用于生产环境的产物。

```json title="Terminal"
Usage:
  $ farm build

Options:
  -o, --outDir <dir>    output directory
  -i, --input <file>    input file path
  -w, --watch           watch file change
  --targetEnv <target>  transpile targetEnv node, browser
  --format <format>     transpile format esm, commonjs
  --sourcemap           output source maps for build
  --treeShaking         Eliminate useless code without side effects
  --minify              code compression at build time
  -c, --config <file>   use specified config file
  -m, --mode <mode>     set env mode
  --base <path>         public base path
  --clearScreen         allow/disable clear screen when logging
  -h, --help            Display this message
```

## Preview

`farm preview` 用于在本地可以直接预览您的生产环境构建出的产物, 您需要提前执行 `farm build` 来构建出生产环境的产物

```json title="Terminal"
Usage:
  $ farm preview

Options:
  --open [url]          启动时是否在浏览器中打开页面
  --port <port>         设置 Server 监听的端口号
  --host <host>         指定 Server 启动时监听的 host
  -c --config <config>  指定配置文件路径
  -h, --help            显示命令帮助
```

## Watch

`farm watch` 一般作用于 `node` 环境下监听文件变化并且重新构建

```json title="Terminal"

Usage:
  $ farm watch

Options:
  --format <format>    transpile format esm, commonjs
  -o, --outDir <dir>   output directory
  -i, --input <file>   input file path
  -c, --config <file>  use specified config file
  -m, --mode <mode>    set env mode
  --base <path>        public base path
  --clearScreen        allow/disable clear screen when logging
  -h, --help           Display this message
```

## Clean

`farm clean` 由于 `farm` 提供的增量构建会在本地生成缓存文件, 如果在特定情况下(不可预知的编译错误)可能您需要清理缓存文件

```json title="Terminal"
Usage:
  $ farm clean [path]

Options:
  --recursive          Recursively search for node_modules directories and clean them
  -c, --config <file>  use specified config file
  -m, --mode <mode>    set env mode
  --base <path>        public base path
  --clearScreen        allow/disable clear screen when logging
  -h, --help           Display this message
```
