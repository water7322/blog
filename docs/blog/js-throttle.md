# 节流和防抖

## 节流

```js
function throttle(fn, delay) {
  // 利用闭包保存时间
  let prev = Date.now()
  return function () {
    let now = Date.now()
    if (now - prev >= delay) {
      fn.apply(this, arguments)
      prev = Date.now()
    }
  }
}

function fn() {
  console.log('节流')
}
addEventListener('scroll', throttle(fn, 1000))
```

## 防抖

```js
function debounce(fn, delay) {
  // 利用闭包保存定时器
  let timer = null
  return function () {
    // 在规定时间内再次触发会先清除定时器后再重设定时器
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

function fn() {
  console.log('防抖')
}
addEventListener('scroll', debounce(fn, 1000))
```
