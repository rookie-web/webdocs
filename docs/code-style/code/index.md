# 编程规范约定

强制严格执行

## 命名方法

外部导出方法大驼峰，非导出方法名小驼峰

::: danger Bad

```ts
const innerFunction = function(){}
export const  exportFunction function(){}
```

:::

::: tip Good

```ts
function innerFunction() {}
export function ExportFunction() {}
```

:::

## 事件命名规范

事件名小驼峰，前缀-on，推荐语意话类型前缀 例如 Get Send Post Submit Init Update

::: danger Bad

```ts
success() {
//成功
},
tableList() {
//初始化-表格
},
msg() {
//发送-消息
},
userData() {
//获取-用户列表响应数据
},
```

:::

::: tip Good

```ts
onSuccess() {
//成功
},
initTable() {
//初始化-表格
},
updateTable() {
//更新-表格
},
sendMsg() {
//发送-消息
},
getUserListData() {
//获取-用户列表响应数据
},
submitUserInfo() {
//提交-用户信息
}
```

:::

## 代码注释规范

导出方法必须有注释，内部方法推荐注释

::: danger Bad

```ts
//我是一个单行注释
export const ExportFunction = function () {};
```

:::

::: tip Good

```ts
/**
 * @description: 我是一个多行注释
 * @param {*} 具体描述
 * @return {*} 具体描述
 */
export const ExportFunction = function () {};
```

:::

## 组件命名规范

大驼峰命名，以 Comp 结尾

::: danger Bad

```ts
components: {
	loginForm: loginForm,
	'login-footer': loginFooter
}
```

:::

::: tip Good

```ts
components: {
	LoginFormComp,
	LoginFooterComp,
}
```

:::

## 三元表达式使用场景

非赋值操作不能使用三元表达式
::: danger Bad

```ts
A === B ? 1 : 0;
```

:::

::: tip Good

```ts
let C;
if (A === B) {
  C = 1;
} else {
  C = 0;
}
```

:::

## if 语句不能省略大括号

统一风格

::: danger Bad

```ts
if (true) return;
```

:::

::: tip Good

```ts
if (true) {
  return;
}
```

:::

## 禁止使用特定的语法

localStorage，sessionStorage 禁止访问，由 paas-library 导出 MUtil 统一方法提供

::: danger Bad

```ts
localStorage.getItem("key");
localStorage.setItem("key", "string");
```

:::

::: tip Good

```ts
import { MUtils, StorageType } from "@paas/paas-library";

MUtils.setStorage("key", value, StorageType.LOCAL);
MUtils.getStorage("key", StorageType.LOCAL);
```

:::
