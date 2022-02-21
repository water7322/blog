# event bus

```js
class EventBus {
  constructor() {
    this.events = {}
  }

  emit(event, ...args) {
    for (const fn of this.events[event]) {
      fn.apply(this, args)
    }
  }

  on(event, fn) {
    if (this.events[event]) {
      this.events[event].push(fn)
    } else {
      this.events[event] = [fn]
    }
  }

  off(event, fn) {
    const fns = this.events[event]
    fns.splice(fns.indexOf(fn), 1)
  }

  once(event, fn) {
    const func = (...args) => {
      fn.apply(this, args)
      this.off(event, func)
    }
    this.on(event, func)
  }
}
```
