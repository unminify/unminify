# junminify
Clean way to unminify javascript code using esprima and escodegen.

Node:
```js
const unminify = require("junminify");

unminify("if(true){console.log(1)}")
```

Web:
```html
<script src="https://cdn.jsdelivr.net/npm/junminify/dist.js"></script>
<script>
  unminify("if(true){console.log(1)}")
</script>
```
