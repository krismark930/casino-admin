<script lang="ts" setup>
import CommonTable from '../CommonTable.vue'
const setting = {
  odds: 31.5,
}
const count = 101
const colNum = 5
const rowNum = 11
</script>

<template>
    <CommonTable
      :setting="setting"
      :count="count"
      :colNum="colNum"
      :rowNum="rowNum"
    />
</template>
  
<style lang="scss" scoped>
  $table-border: 1px solid #5a584b;
  $table-th-bgcolor: #484742;
  table.TwoSide-table {
    width: 100%;
    border: $table-border;
    margin-top: 15px;
    border-collapse: collapse;
    tr {
      height: 30px;
      th {
        text-align: center;
        word-break: keep-all;
        padding: 10px;
        background-color: $table-th-bgcolor;
        border: $table-border;
      }
      td {
        padding: 5px 10px;
        border: $table-border;
        text-align: center;
      }
    }
  }
</style>
  