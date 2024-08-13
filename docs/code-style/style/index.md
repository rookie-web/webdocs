
# style样式规范
嵌套层级不超过3层

## 在单文件中引入

```js
<style lang="less" src="./index.less" scoped></style>
```
## 样式穿透统一使用:deep()

```less
.teacher{
   :deep(.ant-select-selector){
        ...
    }
}
```
