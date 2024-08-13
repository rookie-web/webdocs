# 概述

底层框架采用 `vue3` ，组件库为 `ant-design-vue`， 并采用 `typescript` + `eslint` + `prettier` 来保障代码质量和代码风格一致性。

## paas-cli

需要 node.js v8.9 以上。你可以使用 `nvm` 在同一台电脑中管理多个 node 版本。

使用以下命令全局安装这个包：

```bash
npm install -g @paas/paas-cli
```

检查版本号：

```bash
paas-cli --version
```

常用指令：
创建项目需到目标文件夹位置执行命令

```bash
paas-cli init [app-name] // 创建web项目

paas-cli init-mobile-spa [app-name] // 创建h5单页应用

paas-cli init-mobile-multi [app-name] // 创建h5多页应用

paas-cli create [page-name] // 创建一个页面

paas-cli add [comp-name] -P [page-name] // 创建某个页面内的组件
```

## paas-library

作为驾考宝典企业版的基础组件库解决项目开发中的基础组件，拥有表格、搜索器、弹框、公共样式和大量的工具类 API，提升前端在研发上的效率，以及保证系统一致性

## paas-design

作为驾考宝典企业版的基础组件库`paas-library`底层库，该库是对`Ant Design Vue`组件库的二次封装，修改该库组件的 `<a-xx/>` 为 `<m-xx/>` ; 以及根据 ui 设计覆盖了部分组件的样式和颜色变量

## paas-background-lib

作为驾考宝典企业版应用`background`的专属依赖包，继承自 `paas-library` 提供工具集方法

## paas-base-lib

作为驾考宝典企业版的业务组件库提供偏向具体业务的公共组件，各种类的业务选择器，工具方法
