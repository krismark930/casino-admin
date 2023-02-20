<template>
  <el-table :data="tableData" class="turnservice-table">
    <el-table-column prop="service" label="Service"></el-table-column>
    <el-table-column prop="status" label="Status" width="200">
      <template #default="scope">
        <el-switch v-model="scope.row.status" />
      </template>
    </el-table-column>
    <el-table-column label="Operations" width="200">
      <template #default="scope">
        <el-button
          size="small"
          @click="handleSave(scope.row.service, scope.row.status)"
        >
          Save
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ref, reactive } from 'vue'
const serviceStatus = reactive({
  openreg: false,
  agplat: false,
  ogplat: false,
  bbinplat: false,
  mgplat: false,
  ptplat: false,
  kaiyuanchess: false,
})
const tableData = [
  {
    service: 'Open Registration',
    status: true,
  },
  {
    service: 'AG Platform',
    status: false,
  },
  {
    service: 'OG Platform',
    status: false,
  },
  {
    service: 'BBIN Platform',
    status: false,
  },
  {
    service: 'MG Platform',
    status: false,
  },
  {
    service: 'PT Platform',
    status: false,
  },
  {
    service: 'Kai Yuan Chess',
    status: false,
  },
]
</script>

<style lang="scss" scoped>
.turnservice-table {
  width: 100%;
}
</style>
