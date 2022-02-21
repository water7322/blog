# new

```js
function New(func, ...args) {
  var obj = {}
  obj.__proto__ = func.prototype

  var res = func.apply(obj, args)
  if ((typeof res === 'object' || typeof res === 'function') && res !== null) {
    return ret
  }
  return obj
}
function A() {}
var obj = New(A, 1, 2)
// equals to
var obj = new A(1, 2)
```
