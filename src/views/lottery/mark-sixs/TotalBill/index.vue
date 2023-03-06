<template>
  <el-form>
    <el-table
      :data="tableData"
      style="width: 100%;"
      border
      stripe
      :summary-method="getSummaries"
      show-summary
      fit
    >
      <el-table-column label="总底单 ">
        <el-table-column prop="serialNumber" label="序号" />
        <el-table-column prop="date" label="日期" />
        <el-table-column prop="period" label="期数" />
        <el-table-column prop="amount" label="金额" />
        <el-table-column prop="commission" label="佣金" />
        <el-table-column prop="result" label="结果" />
      </el-table-column>
    </el-table>
  </el-form>
</template>
<script lang="ts" setup>
import {ref, reactive} from 'vue'
import type { TableColumnCtx } from 'element-plus'


const getSummaries = (param) => {
  const { columns, data } = param
  const sums = []
  columns.forEach((column, index) => {
    if (index === 1) {
      sums[index] = '小计'
      return
    }
    else if(index !== 0 && index !==1) {
      const values = data.map((item) => Number(item[column.property]))
      if (!values.every((value) => Number.isNaN(value))) {
        sums[index] = `${values.reduce((prev, curr) => {
          const value = Number(curr)
          if (!Number.isNaN(value)) {
            return prev + curr
          } else {
            return prev
          }
        }, 0)}`
      }
    } else {
      sums[index] = ''
    }
  })

  return sums
}
const tableData = [
  {
    serialNumber:'14',
    date:'2023-01-27 Friday',
    period:'Issue 2023009',
    amount: '150',
    commission: '0',
    result: '0',
  },
  {
    serialNumber:'21',
    date:'2023-01-27 Friday',
    period:'Issue 2023009',
    amount: '100',
    commission: '0',
    result: '0',
  },
  {
    serialNumber:'23',
    date:'2023-01-27 Friday',
    period:'Issue 2023009',
    amount: '150',
    commission: '0',
    result: '0',
  },
  {
    serialNumber:'24',
    date:'2023-01-27 Friday',
    period:'Issue 2023009',
    amount: '150',
    commission: '0',
    result: '0',
  },
  {
    serialNumber:'25',
    date:'2023-01-27 Friday',
    period:'Issue 2023009',
    amount: '150',
    commission: '0',
    result: '0',
  },
  {
    serialNumber:'26',
    date:'2023-01-27 Friday',
    period:'Issue 2023009',
    amount: '150',
    commission: '0',
    result: '0',
  },
]
</script>
