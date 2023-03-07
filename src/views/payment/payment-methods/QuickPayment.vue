<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="paymentmethod-table">
        <thead>
          <tr>
            <th>状态</th>
            <th>排序</th>
            <th>返回地址</th>
            <th>商户号</th>
            <th>终端号</th>
            <th>商户密匙</th>
            <th>类型</th>
            <th>VIP</th>
            <th>支持WAP</th>
            <th>提醒</th>
            <th>最低</th>
            <th>最高</th>
            <th>固定金额</th>
            <th></th>
          </tr>
        </thead>
      </table>
    </el-row>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;
table.paymentmethod-table {
  width: 100%;
  border: $table-border;
  margin-top: 15px;
  border-collapse: collapse;
  tr {
    height: 30px;
    th {
      text-align: center;
      word-break: keep-all;
      padding: 10px;
      background-color: $table-th-bgcolor;
      border: $table-border;
    }
    td {
      padding: 5px 10px;
      border: $table-border;
      text-align: center;
    }
  }
}
</style>
