# 原型和原型链

- 函数对象有 `__proto__` 和 prototype 属性。
- 非函数对象只有 `__proto__` 属性。

`__proto__`指向 new 出来的构造函数的原型`prototype`。

`prototype` 是一个对象，当函数被定义的时候默认被创建的，它的作用很像 java 中的静态属性/方法。其中的对象可以给所有实例使用。

需要注意的是：

`prototype` 也是一个对象 ，所以其中也有一个`__proto__`属性，指向对象的原型 `Object.prototype`。

`prototype` 对象有一个 `constructor` 属性，指向创建对象的函数本身。`Fn.prototype.constructor === Fn`

`Object` 本身是构造函数，继承了 Function.prototype。`Object.__proto__ === Function.prototype`

`Function` 本身就是函数，继承了 Function.prototype。`Function.__proto__ === Function.prototype`

举一个例子：

```js
function A() {}

var a = new A()

a.__proto__ === A.prototype // true

A.prototype.__proto__ === Object.prototype // true

Object.prototype.__proto__ === null // true

a.__proto__.__proto__.__proto__ === null // true

A.__proto__ === Function.prototype // true

Function.prototype.__proto__ = Object.prototype // true
```

![原型和原型链](js-prototype.png)

任何一个对象都有一个`__proto__`属性，指向构造函数的原型 prototype，而 prototype 也是一个对象，也有一个`__proto__`属性，这样一环接一环，就形成了一个链，到最后 Object.protytype 截止。
