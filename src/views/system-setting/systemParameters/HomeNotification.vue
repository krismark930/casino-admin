<template>
  <div class="homenotification-wrapper">
    <el-table :data="tableData" class="homenotification-table">
      <el-table-column prop="notification" label="Home Notification">
        <template #default="scope">
          <el-input
            v-model="scope.row.notification"
            type="textarea"
            :rows="15"
          />
        </template>
      </el-table-column>
      <el-table-column label="" width="100">
        <template #default="scope">
          <el-button
            type="primary"
            @click="handleSubmit(scope.row.notification)"
          >
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
    notification: ' ',
  },
]
</script>
<style lang="scss" scoped>
.homenotification-wrapper {
  padding-left: 50px;
  padding-right: 80px;
}
.homenotification-table {
  width: 100%;
}
</style>
