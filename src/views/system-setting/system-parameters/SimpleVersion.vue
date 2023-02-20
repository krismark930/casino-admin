<template>
  <el-table :data="tableData" class="simpleversion-table">
    <el-table-column prop="simpleVersion" label="Simple Version Notification">
      <template #default="scope">
        <el-input
          v-model="scope.row.simpleVersion"
          type="textarea"
          :rows="15"
        />
      </template>
    </el-table-column>
    <el-table-column label="" width="100">
      <template #default="scope">
        <el-button size="small" @click="handleSubmit(scope.row.simpleVersion)">
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
    simpleVersion: ' ',
  },
]
</script>
<style lang="scss" scoped>
.simpleversion-table {
  width: 100%;
}
</style>
