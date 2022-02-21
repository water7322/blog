# call 和 apply

## call

```js
Function.prototype.mycall = function (context, ...args) {
  context = context || window
  context.fn = this
  let result = context.fn(...args)
  delete context.fn
  return result
}
```

## apply

```js
Function.prototype.myapply = function (context, args = []) {
  context = context || window
  context.fn = this
  let result = context.fn(...args)
  delete context.fn
  return result
}
```
