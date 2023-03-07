<template>
  <div style="padding: 0.75rem;">
    <div style="padding-bottom:20px">
      <el-button type="danger" link @click="HandleDeposit">存入帳戶</el-button>
      <el-button type="danger" link @click="HandleBulk">批量存款</el-button>
      <DepositAccount v-if="VisibleDeposit == '存入帳戶'" />
      <BulkDeposit v-if="VisibleDeposit == '批量存款'" />
    </div>
    <template v-if="VisibleDeposit == ''">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="帳戶:">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="日期区间：">
            <el-row>
              <el-col :span="11">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  placeholder="Pick a date"
                  style="width: 100%"
                />
              </el-col>
              <el-col :span="11">
                <el-date-picker
                  v-model="form.date2"
                  placeholder="Pick a date"
                  style="width: 100%"
                />
              </el-col>
            </el-row>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-row>
            <el-col :span="16">
              <el-form-item label="审核方式">
                <el-select v-model="reviewMethod" placeholder="全部">
                  <el-option label="全部" value="all" />
                  <el-option label="全部(含转换)" value="allConversions" />
                  <el-option label="存入" value="deposit" />
                  <el-option label="提出" value="propose" />
                  <el-option label="赠送" value="gift" />
                  <el-option label="已作废" value="abolished" />
                  <el-option label="未审核" value="noReviewed" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-button>查詢</el-button>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-form-item label="總頁數:">
            <el-pagination
              v-model:current-page="currentPage"
              v-model:page-size="pageSize"
              :page-sizes="[1]"
              layout="sizes"
              :total="1"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <h1>帳戶查詢</h1>
      <el-scrollbar>
        <el-row class="scrollbar-flex-content">
          <table class="cashsystem-table">
            <thead>
              <tr>
                <th>會員帳號</th>
                <th>姓名-电话</th>
                <th>银行资料</th>
                <th>金額</th>
                <th>操作前余额</th>
                <th>当前余额</th>
                <th>类型</th>
                <th>日期</th>
                <th>審核帳號</th>
                <th>審核日期</th>
                <th>操作操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>目前沒有記錄</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>總計</td>
              </tr>
            </tbody>
          </table>
        </el-row>
      </el-scrollbar>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { Management } from '@element-plus/icons-vue'
import type { TabsPaneContext } from 'element-plus'

import { ref, reactive } from 'vue'

import DepositAccount from './DepositAccount.vue'
import BulkDeposit from './BulkDeposit.vue'

const CashSystemLayout = ref('存入帳戶')
const VisibleDeposit = ref("")
const pageSize = ref(1)
const currentPage = ref(1)
const form = reactive({
  bettingType: '',
  date1: '',
  date2: '',
  periodNumber: '',
})
const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
const HandleDeposit = () => {
  VisibleDeposit.value = '存入帳戶';
}
const HandleBulk = () => {
  VisibleDeposit.value = '批量存款';
}
const reviewMethod = ref("全部")
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;
table.cashsystem-table {
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
  td:nth-child(7n + 1) {
    background-color: rgb(225, 251, 255);
  }
}

.button-group {
  button {
    margin-bottom: 10px;
  }
}
</style>
