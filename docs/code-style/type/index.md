# type文件规范

定义 interface 单词拼接首字母大写

## ui数据模型
后缀为-Model

```ts
interface ModalTypeModel {    
  open: (row?: TableRow) => void // 方法
  disable: boolean               // 属性
}
```

## 接口数据模型
后缀-Response

```ts
interface StudyListResponse {    
  open: (row?: TableRow) => void // 方法
  disable: boolean               // 属性
}
```

## 枚举
后缀-Enum

```ts
enum StatusEnum {
  enable,
  disable
}
```