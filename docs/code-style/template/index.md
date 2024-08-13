# template模板规范

## 功能模块隔开
兄弟元素之间添加一个回车以保持元素之前间隔清晰
::: danger Bad
```html
<pm-search></pm-search>
<pm-search-single :span="4" />
<child />
<child />
<child />
<child />
...
```
:::


::: tip Good
```html
// 功能一
<pm-search />

// 功能二
<pm-search-single :span="4" />

// 功能三
<child />
...
```
:::

## 单标签
标签中无内容，统一使用单标签
::: danger Bad
```html
<pm-search></pm-search>
```
:::

::: tip Good
```html
<pm-search />
```
:::

## 标签属性顺序
标签属性顺序按照 ref ， 指令，动态绑定属性，静态属性，事件的顺序书写。若绑定属性是对象则按照 js 对象规范进行书写
```html
<pm-search-single
    ref="searchRef"
    v-if="true"
    :span="4"
    :antdProps="{    
        placeholder: '班主任名称/电话',
        allowClear: true
    }"
    data-index="keyword"
    xtype="INPUT"
    class="search-class"
    @search="search"
    @reset="reset"
/>
```

## 标签class命名
标签 class 使用 - 连接，如 class="search-box"

```html
<div class="search-box"></div>
```

## 模板中简单的表达式
组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法

::: danger Bad
```html
<div class="box">
{{
    fullName.split(' ').map(function (word) {
        return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
}}
</div>
```
:::


::: tip Good
template
```html
<div class="box">
    {{ normalizedFullName }}
</div>
```
TS
```ts
const normalizedFullName = computed<string>(()=>{
    return fullName.split(' ').map(v=> word[0].toUpperCase() + word.slice(1) ).join(' ')
})
```
:::


## 带引号的 attribute 值
HTML attribute 值应该始终带引号

::: danger Bad
```html
<div :style={width:sidebarWidth +'px'}></div>
```
:::

::: tip Good
```html
<div :style="{width:sidebarWidth +'px'}"></div>
```
:::

## 事件绑定
小驼峰命名，添加前缀-on

::: danger Bad
```html
<m-button @click="open" >查看</m-button>
```
:::

::: tip Good
```html
<m-button @click="onOpenViewModal" >查看</m-button>
```
:::

## 表单元素需要用Form 包裹
可以做表单回退

::: danger Bad
```html
<input type="email" name="" id="" />
<input type="password" name="" id="" />
```
:::

::: tip Good
```html
<form action="">
    <input type="email" name="" id="" />
    <input type="password" name="" id="" />
</form>
```
:::

## 禁止模版内使用静态style样式
可以做表单回退

::: danger Bad
```html
<div style="color:red"></div>
```
:::

::: tip Good
```html
<div class="color-red"></div>
<div :style="{ color : statusColor }"></div>
```
:::

## 静态图片资源，使用背景图
可以做表单回退

::: danger Bad
```html
<img src="https://www.aaa.cpm/banner.png" alt="">
```
:::

::: tip Good
```html
<div class="banner"></div>

<style>
.banber{
    background: url('https://www.aaa.cpm/banner.png') no-repeat;
}    
</style>
```
:::