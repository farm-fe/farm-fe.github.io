
# Script
Farm support compiling `Js/Jsx/Ts/Tsx` out of box, and compile `Jsx/Tsx` to React by default.

```tsx title="./button.tsx"
import Button from './Button';

function ButtonGroup(props: ButtonProps) {
  return <div>{props.buttons.map(b => <Button>{b}</Button>)}</div>
}
```

Farm using swc to compile scripts, using `compilation.script` to configure how to compile your script file. see [compilation.script](/docs/config/farm-config#compilation-options) for details.


