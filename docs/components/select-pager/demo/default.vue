<template>
  <select-pager v-model="current" :query="query" />
</template>

<script setup>
import { ref } from 'vue'
import SelectPager from '../index.vue'

const current = ref({
  name: 'Option34',
  oid: 34
})

// 示例数据
const query = (pageInfo) => {
  const base = (pageInfo.curPage - 1) * pageInfo.pageSize
  return Promise.resolve({
    list: Array(20)
      .fill({
        name: '',
        oid: 0
      })
      .map((v, i) => ({
        name: `Option ${i + 1 + base}`,
        oid: i + 1 + base
      })),
    total: 60
  })
}
</script>
