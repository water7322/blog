# 继承

## 寄生组合式继承

```js
function inherit(subType, superType) {
  subType.prototype = Object.create(superType.prototype)
  subType.prototype.constructor = subType
}

function SuperType(age) {
  this.age = age
}

function SubType(age) {
  SuperType.call(this, age)
}

inherit(SubType, SuperType)

var instance = new SubType(123)
var instance2 = new SubType(456)

console.log(instance.age)
console.log(instance2.age)
```
