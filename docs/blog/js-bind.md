# bind

```js
Function.prototype.bind2 = function (context, ...args) {
  if (typeof this !== 'function') {
    throw Error('not a function')
  }
  const fn = this
  const resFn = function () {
    return fn.apply(this instanceof resFn ? this : context, args.concat(...arguments))
  }
  resFn.prototype = Object.create(this.prototype)
  return resFn
}
```
