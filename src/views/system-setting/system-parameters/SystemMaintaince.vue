<template>
  <el-table :data="tableData" class="sysmaintain-table">
    <el-table-column prop="sysmain" label="System Maintaince">
      <template #default="scope">
        <el-input v-model="scope.row.sysmain" type="textarea" :rows="15" />
      </template>
    </el-table-column>
    <el-table-column label="" width="100">
      <template #default="scope">
        <el-button size="small" @click="handleSubmit(scope.row.sysmain)">
          Submit
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script setup>
import { ref } from 'vue'

const tableData = [
  {
    sysmain: ' ',
  },
]
</script>
<style lang="scss" scoped>
.sysmaintain-table {
  width: 100%;
}
</style>
