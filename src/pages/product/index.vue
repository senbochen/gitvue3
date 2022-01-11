<template>
  <n-p>你选中了 {{ checkedRowKeys.length }} 行。</n-p>
  <n-spin :show="show">
    <n-data-table
      ref="table"
      :columns="columns"
      :data="tableData"
      :pagination="pagination"
      v-model:checked-row-keys="checkedRowKeys"
    />
  </n-spin>
  <n-button @click="getData">加载数据</n-button>
  <n-button @click="removeData">清除数据</n-button>
</template>
<script lang="ts" setup>
import { h, computed, ref } from 'vue'
import { useProductStore } from '@/store/product/index'
import { NButton } from 'naive-ui'
const checkedRowKeys = ref<string[]>([])
const productStore = useProductStore()
const show = computed(() => productStore.show)
const pagination = ref({
  pageSize: 6
})
const tableData = computed(() => productStore.tableData)
const columns = [
  {
    type: 'selection'
  },
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address'
  },
  {
    title: '操作',
    key: 'operation',
    render(row: Record<string, any>, index: number) {
      return h(
        NButton,
        {
          size: 'small',
          onClick: () => operationHandler(row, index)
        },
        { default: () => '删除' }
      )
    }
  }
]

const operationHandler = (row: Record<string, any>, index: number) => {
  console.log('row', row, index)
  productStore.deleteData(index)
}

const removeData = () => {
  productStore.removeData()
}
const getData = () => {
  productStore.getData()
}
</script>
<style lang="less" scoped>
</style>
