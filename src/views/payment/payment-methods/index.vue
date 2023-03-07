<template>
  <el-card>
    <el-radio-group
      v-model="activeType"
      style="margin-bottom: 15px;"
      size="small"
    >
      <el-radio-button label="新增" />
      <el-radio-button label="网银" />
      <el-radio-button label="微信" />
      <el-radio-button label="支付宝" />
      <el-radio-button label="快捷支付" />
      <el-radio-button label="QQ钱包" />
      <el-radio-button label="百度钱包" />
      <el-radio-button label="京东钱包" />
      <el-radio-button label="银联扫码" />
      <el-radio-button label="云闪付" />
      <el-radio-button label="虚拟货币" />
    </el-radio-group>
    <div v-if="activeType == '新增'"></div>
    <div v-if="activeType == '网银'"></div>
    <div v-if="activeType == '微信'"></div>
    <div v-if="activeType == '支付宝'"></div>
    <div v-if="activeType == '快捷支付'"></div>
    <div v-if="activeType == 'QQ钱包'"></div>
    <div v-if="activeType == '百度钱包'"></div>
    <div v-if="activeType == '京东钱包'"></div>
    <div v-if="activeType == '银联扫码'"></div>
    <div v-if="activeType == '云闪付'"></div>
    <div v-if="activeType == '虚拟货币'"></div>
    <div v-if="activeType == '支付方式'">
      <h1>支付方式</h1>
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
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const activeType = ref('支付方式')
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;
table.paymentmethod-table {
  overflow-x: scroll;
  width: 100%;
  border: $table-border;
  margin-top: 15px;
  border-collapse: collapse;
  tr {
    height: 30px;
    th {
      text-align: center;
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
