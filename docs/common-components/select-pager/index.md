# 下拉分页选择

基于`element-plus`的下拉选择组件及分页组件实现下拉分页选择，便于回显仅支持对象及数组对象，默认绑定对象类型。
::: tip 提示
element-plus 版本不低于 2.4.3，该版本提供自定义下拉菜单的底部插槽
:::

## 单选

<select-pager-default />

::: details 查看源码
<<< @/components/select-pager/demo/default.vue
:::

## 多选

<select-pager-multiple />

::: details 查看源码
<<< @/components/select-pager/demo/multiple.vue
:::

<script setup>
import SelectPagerDefault from '../../components/select-pager/demo/default.vue'
import SelectPagerMultiple from '../../components/select-pager/demo/multiple.vue'

</script>
