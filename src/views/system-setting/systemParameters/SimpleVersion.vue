<template>
  <div class="simpleversion-wrapper">
    <el-table :data="tableData" class="simpleversion-table">
      <el-table-column prop="simpleVersion" label="简易版公告">
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
          <el-button
            type="primary"
            @click="handleSubmit(scope.row.simpleVersion)"
          >
            确定
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
    simpleVersion: ' ',
  },
]
</script>
<style lang="scss" scoped>
.simpleversion-wrapper {
  padding-left: 50px;
  padding-right: 80px;
}
.simpleversion-table {
  width: 100%;
}
</style>
