# promise

```js
function chainPromise(promiseArr) {
  const n = promiseArr.length

  let i = 0
  function rec(i) {
    if (i < n) {
      promiseArr[i]().finally(() => {
        console.log('第' + i + '个完成')
        rec(i + 1)
      })
    }
  }

  rec(0)
}

let a = () => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

let b = () => {
  return new Promise((resolve, reject) => {
    reject()
  })
}

chainPromise([a, b])
```
