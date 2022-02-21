# 数据类型

## JS 的数据类型有几种？

ES5: undefined、null、Boolean、String、Number、Object

ES6: Symbol

ES10: BigInt

## Object 中包含了哪几种类型？

最常用的三种 Object、Function、Array。

## JS 的基本类型和引用类型有哪些呢？

基本类型：undefined、null、Boolean、String、Number、Symbol、BigInt

引用类型：Object。里面包含 Object、Function、Array。

## 判断 JS 类型的方式

1. typeof

   可以判断出'string','number','boolean','undefined','symbol'
   但判断 null、array 和 object 时值均为 'object'

2. instanceof

   原理是 构造函数的 prototype 属性是否出现在对象的原型链中的任何位置

```js
function A() {}
let a = new A()
a instanceof A //true,因为 Object.getPrototypeOf(a) === A.prototype;
```

下面代码会输出什么？

```js
console.log(Object instanceof Object)
console.log(Object instanceof Function))
console.log(Function instanceof Function))
console.log(Function instanceof Object))
```

熟悉原型链的话，会发现四个都是 true

3. Object.prototype.toString.call()

   常用于判断浏览器内置对象,对于所有基本的数据类型都能进行判断，即使是 null 和 undefined

4. Array.isArray()

   用于判断是否为数组
