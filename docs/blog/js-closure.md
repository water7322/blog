# 闭包

## 定义

闭包是指那些能够访问自由变量的函数（MDN）
- （其中自由变量，指在函数中使用的，但既不是函数参数 arguments 也不是函数的局部变量的变量，其实就是另外一个函数作用域中的变量。）

闭包是指有权访问另外一个函数作用域中的变量的函数（红宝书 p178）

《JavaScript 权威指南》中就讲到：从技术的角度讲，所有的 JavaScript 函数都是闭包。
从实践角度：以下函数才算是闭包：

- 即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）
- 在代码中引用了自由变量

## 闭包产生的原因

## 闭包的优缺点

优点：

- 避免全局变量的污染
- 希望一个变量长期存储在内存中（缓存变量）

缺点：

- 内存泄露（消耗）
- 常驻内存，增加内存使用量
