<template>
  <el-select
    placeholder="请选择"
    v-bind="$attrs"
    v-model="currentValue"
    :multiple="multiple"
    :value-key="valueKey"
    popper-class="select-pager-popper"
  >
    <!-- 多选时回显对应值 -->
    <template v-if="multiple">
      <el-option
        v-for="item in currentValue"
        v-show="false"
        :label="item[optionProp.label]"
        :value="item"
      />
    </template>
    <!-- 单选时回显对应值 -->
    <template v-else>
      <el-option
        v-show="false"
        :label="currentValue[optionProp.label]"
        :value="currentValue"
      />
    </template>
    <el-option
      v-for="item in options"
      :key="item.key"
      :label="item.label"
      :value="item.value"
    />

    <template #footer>
      <el-pagination
        v-model:current-page="pageInfo.curPage"
        :page-size="pageInfo.pageSize"
        size="small"
        layout="total, prev, pager, next"
        :total="total"
        @current-change="getList"
      />
    </template>
  </el-select>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: [Object, Array]
  },
  // 下拉options渲染字段的映射
  propOption: {
    type: Object,
    default: () => ({})
  },
  // 请求下拉数据
  query: {
    type: Function
  },
  //value 唯一标识的键名
  valueKey: {
    type: String,
    default: 'oid'
  },
  // 是否多选
  multiple: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['update:modelValue'])
// 分页数据
const pageInfo = ref({
  curPage: 1,
  pageSize: 20
})

const total = ref(0)
// 下拉数据
const options = ref([])

const currentValue = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    console.log(
      '%c val打印对象值：%o',
      'background-color: #e0005a; color: #ffffff;padding:5px',
      val
    )
    emits('update:modelValue', val)
  }
})

// 合并默认值及传入的配置
const optionProp = computed(() => {
  return Object.assign(
    {
      label: 'name',
      key: 'oid'
    },
    props.propOption
  )
})

// 获取下拉列表
const getList = async () => {
  const res = await props.query({ ...pageInfo.value })
  options.value = res.list.map((item) => ({
    label: item[optionProp.value.label],
    key: item[optionProp.value.key],
    value: item
  }))
  total.value = res.total
}

const init = () => {
  if (props?.query) {
    getList()
  }
}

init()
</script>

<style lang="less">
.select-pager-popper {
  .el-select-dropdown__footer {
    .el-pagination {
      justify-content: center;
    }
  }
}
</style>
