# Script
Farm 默认支持编译 `Js/Jsx/Ts/Tsx`，并默认将 `Jsx/Tsx` 编译为React。

```tsx title="./button.tsx"
import Button from './Button';

function ButtonGroup(props: ButtonProps) {
  return <div>{props.buttons.map(b => <Button>{b}</Button>)}</div>
}
```

Farm 使用 swc 来编译脚本，使用 `compilation.script` 来配置如何编译 Script。 参考配置 [compilation.script](/docs/config/farm-config#compilation-options)。