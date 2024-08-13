# ES6及以上规范

## ES6新特性
1. let\const关键字，块级作用域
2. 函数参数默认值
3. 箭头函数
4. 模板字符串
5. 扩展操作符
6. promise
7. class类
8. Map/Set数据结构
9. Symbol数据类型
10. proxy和reflect
11. import/export 模块化
12. 数组、对象、字符串、math拓展方法


## 普通函数箭头函数区别
1. 箭头函数只能是匿名函数
2. `this`永远指向定义时上层作用域的`this`，无法改变。普通函数`this`指向运行时所在对象
3. 不能作为构造函数`new`
4. 没有原型`prototype`
5. 没有自己的`arguments`参数，用`rest`参数代替

## promise与async区别
1. 语法：Promise是一种基于回调函数的异步编程模式，使用.then()和.catch()方法来处理异步操作的结果和错误。而async/await是ES2017引入的异步编程语法糖，使用async关键字声明一个异步函数，然后使用await关键字来等待一个返回Promise的表达式执行完成。
2. 错误处理：Promise通过.catch()方法来捕获和处理异步操作的错误。而async/await使用try...catch语句来捕获和处理异步操作中的错误，使得错误处理更加直观和类似于同步代码。
3. 可读性：相较于Promise，async/await提供了更加清晰和线性的代码流程。使用async/await可以将异步操作的代码写成类似于同步代码的形式，使得代码更易于理解和维护。
4. 链式操作：Promise可以通过.then()方法进行链式调用，使得多个异步操作可以按顺序执行，并且每个操作的结果都可以在链中的下一个操作中使用。而async/await可以通过在异步函数中使用多个await语句来实现类似的链式操作，使得代码更加简洁和可读。