<template>
  <div class="customerservice-wrapper">
    <el-table
      :data="tableData"
      class="customerservice-table"
      :cell-style="{ verticalAlign: 'top' }"
    >
      <el-table-column prop="customerservice1" label="Customer Service URL1">
        <template #default="scope">
          <el-input v-model="scope.row.customerservice1" autocomplete="off" />
        </template>
      </el-table-column>
      <el-table-column prop="customerservice2" label="Customer Service URL2">
        <template #default="scope">
          <el-input v-model="scope.row.customerservice2" autocomplete="off" />
          <h5>禁止投注第2节、中场</h5>
        </template>
      </el-table-column>
      <el-table-column prop="customerservice3" label="Customer Service URL3">
        <template #default="scope">
          <el-input v-model="scope.row.customerservice3" autocomplete="off" />
          <h5>禁止投注第3节</h5>
        </template>
      </el-table-column>
      <el-table-column prop="customerservice4" label="Customer Service URL4">
        <template #default="scope">
          <el-input v-model="scope.row.customerservice4" autocomplete="off" />
          <h5>禁止投注第3节，第4节，加时，灰色字体的赛事</h5>
        </template>
      </el-table-column>
      <el-table-column label="" width="100">
        <template #default="scope">
          <el-button
            type="primary"
            @click="handleSubmit(scope.row.customerServices)"
          >
            Submit
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script setup>
import { reactive } from 'vue'

const customerServices = reactive({
  customerservice1: '',
  customerservice2: '',
  customerservice3: '',
  customerservice4: '',
})
const tableData = [
  {
    customerservice1: '',
    customerservice2: '',
    customerservice3: '',
    customerservice4: '',
  },
]
</script>
<style lang="scss" scoped>
.customerservice-wrapper {
  padding-left: 50px;
  padding-right: 80px;
}
.customerservice-table {
  width: 100%;
}
</style>
