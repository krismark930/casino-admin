<template>
  <div class="sysmaintain-wrapper">
    <el-table :data="tableData" class="sysmaintain-table">
      <el-table-column prop="sysmain" label="System Maintaince" width="200">
        <template #default="scope">
          <el-switch v-model="scope.row.sysmain" />
        </template>
      </el-table-column>
      <el-table-column prop="maintenance" label="Maintenance Notification">
        <template #default="scope">
          <el-input v-model="scope.row.maintenance" autocomplete="off" />
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
  </div>
</template>
<script setup>
import { ref } from 'vue'
const tableData = [
  {
    sysmain: true,
    maintenance: ' ',
  },
]
</script>
<style lang="scss" scoped>
.sysmaintain-wrapper {
  padding-left: 50px;
  padding-right: 80px;
}
.sysmaintain-table {
  width: 100%;
}
</style>
