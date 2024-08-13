# vue2相关

## 什么是数据响应式
数据变化后，会自动重新运行依赖该数据的函数

## vue2响应式原理
通过`object.defineProperty`遍历对象的所有属性，通过`get`、`set`函数拦截属性的读取和赋值，在`get`的时候会收集相应的依赖函数，在`set`的时候会派发通知去执行相应的依赖函数，从而更新数据（具体核心：`observer`、`dep`、`watcher`、`scheduler`）

> observer把一个普通对象变成响应式对象，递归遍历对象的所有属性

> dep 收集依赖和派发更新

## nextTick的实现原理

## nextTick如何捕获DOM更新的回调函数