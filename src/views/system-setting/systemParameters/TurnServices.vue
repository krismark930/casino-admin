<template>
  <div class="turnservice-wrapper">
    <el-table :data="tableData" class="turnservice-table">
      <el-table-column prop="service" label="服务"></el-table-column>
      <el-table-column prop="status" label="地位" width="200">
        <template #default="scope">
          <el-switch v-model="scope.row.status" />
        </template>
      </el-table-column>
      <el-table-column label="功能" width="200">
        <template #default="scope">
          <el-button
            size="small"
            @click="handleSave(scope.row.service, scope.row.status)"
          >
            节省
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
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
    service: '开放注册',
    status: true,
  },
  {
    service: 'AG平台',
    status: false,
  },
  {
    service: 'OG平台',
    status: false,
  },
  {
    service: 'BBIN平台',
    status: false,
  },
  {
    service: 'MG平台',
    status: false,
  },
  {
    service: 'PT平台',
    status: false,
  },
  {
    service: '开元棋牌',
    status: false,
  },
]
</script>

<style lang="scss" scoped>
.turnservice-wrapper {
  padding-left: 50px;
  padding-right: 80px;
}
.turnservice-table {
  width: 100%;
}
</style>
