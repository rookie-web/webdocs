# 文件夹规范

所有的变量文件声明规范是为了更好的可读性，再加以标准的注释，增强整个代码强可读性，让后期维护的同事能直接通过代码阅读轻易的了解功能，快速介入开发维护。

逻辑方法规范声明和调用是方便所有的页面统一阅读，达到开发者维护能无缝衔接，不需要大量时间去查找分析逻辑的执行顺序

::: info  注意事项
1. 文件夹命名小写，使用短横线 - 连接 例如：my-order
2. 页面自己拥有对应的store，components，types，utils，modules等文件 ，页面和功能对外完全保持独立
只要有能够拼接文件的构建系统，就把每个组件单独分成文件，便于编辑和查阅一个组件，缩小影响范围
:::

```
src
├──router
   └── index.ts
├──application
   ├── my-order
   │   └── comp   // 页面子组件
   │       └── edit-dialog
   │           └── index.ts
   │           └── index.less
   │           └── index.vue
   │           └── store.ts
   │           └── types.ts
   │           └── constant.ts
   │       └── notice-dialog
   │           └── ...
   │   └── index.ts         // 页面逻辑
   │   └── index.less       // 样式
   │   └── index.vue        // 页面模板
   │   └── store.ts         // 请求
   │   └── types.ts         // 类型定义
   │   └── constant.ts      // 常量
   │   └── config.ts        // 表格配置等
   │   └── hooks.ts         // 逻辑复用

   ├── order-config
   ...
   ————————————————
```