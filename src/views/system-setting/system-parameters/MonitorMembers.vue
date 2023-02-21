<template>
  <div class="monitormember-wrapper">
    <el-table :data="tableData" class="monitormember-table">
      <el-table-column prop="monitormember" label="Monitor Members">
        <template #default="scope">
          <el-input v-model="scope.row.monitormember" autocomplete="off" />
          <h5>
            注：列表中的会员投注滚球(篮球除外)会有声音提醒，多个会员用半解,隔开。
          </h5>
        </template>
      </el-table-column>
      <el-table-column label="" width="100">
        <template #default="scope">
          <el-button
            size="small"
            @click="handleSubmit(scope.row.monitormember)"
          >
            Submit
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script setup>
const tableData = [
  {
    monitormember: ' ',
  },
]
</script>
<style lang="scss" scoped>
.monitormember-wrapper {
  padding-left: 50px;
  padding-right: 80px;
}
.monitormember-table {
  width: 100%;
}
</style>
