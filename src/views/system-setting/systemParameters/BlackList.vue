<template>
  <div class="blacklist-wrapper">
    <el-table :data="tableData" class="blacklist-table">
      <el-table-column prop="blackList" label="BlackList">
        <template #default="scope">
          <h5>坏会员：</h5>
          <el-input v-model="scope.row.badmember" autocomplete="off" />
          <h5>坏会员2：</h5>
          <el-input v-model="scope.row.badmember2" autocomplete="off" />
          <h5>坏会员(角球)：</h5>
          <el-input v-model="scope.row.badmemberC" autocomplete="off" />
          <h5>
            注：坏会员禁止投注第4节、加时篮球赛事,坏会员2禁止投注足球过关,坏会员角球禁止投注角球、点球,多个会员用半角,隔开。
          </h5>
        </template>
      </el-table-column>
      <el-table-column label="" width="100">
        <template #default="scope">
          <el-button type="primary" @click="handleSubmit(scope.row.blackList)">
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
    badmember: '',
    badmember2: '',
    badmemberC: '',
  },
]
</script>
<style lang="scss" scoped>
.blacklist-wrapper {
  padding-left: 50px;
  padding-right: 80px;
}
.blacklist-table {
  width: 100%;
}
</style>
