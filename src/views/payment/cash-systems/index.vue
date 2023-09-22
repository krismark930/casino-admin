<template>
  <div style="padding: 20px; text-align: left;">
    <div style="padding-bottom:20px">
      <el-button type="danger" link @click="HandleDeposit">存入帳戶</el-button>
      <el-button type="danger" link @click="HandleBulk">批量存款</el-button>
      <DepositAccount v-if="VisibleDeposit == '存入帳戶'"  @mainVisible="mainVisible"/>
      <BulkDeposit v-if="VisibleDeposit == '批量存款'" @mainVisible="mainVisible"/>
    </div>
    <template v-if="VisibleDeposit == ''">
      <el-form :model="formData" inline="true">
        <el-form-item label="帳戶:">
          <el-input v-model="formData.name"/>
        </el-form-item>
        <el-form-item label="日期区间：">
          <el-date-picker
            v-model="formData.s_date"
            type="date"
            value-format="YYYY-MM-DD"
            style="width: 200px;"
          />
          ~
          <el-date-picker
            v-model="formData.e_date"
            type="date"
            value-format="YYYY-MM-DD"
            style="width: 200px;"
          />
        </el-form-item>
      </el-form>
      <el-form :model="formData" inline="true">
        <el-form-item label="审核方式: ">
          <el-select v-model="formData.type">
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getCashDataByFilter">查詢</el-button>
        </el-form-item>
      </el-form>
      <h1>帳戶查詢</h1>
      <el-table
        :data="cashList"
        v-loading="loading"
        style="width: 100%;"
        border
        header-align="center"
        stripe
      >
        <el-table-column property="UserName" label="會員帳號" align="center" />
        <el-table-column property="LoginName" label="姓名-电话" align="center" />
        <el-table-column property="BankInfo" label="银行资料" align="center">
          <template #default="scope">
            <div v-html="scope.row.BankInfo"></div>
          </template>
        </el-table-column>
        <el-table-column property="Gold" label="金額" align="center" />
        <el-table-column
          property="previousAmount"
          label="操作前余额"
          align="center"
        />
        <el-table-column property="currentAmount" label="当前余额" align="center" />
        <el-table-column property="Type2" label="类型" align="center" />
        <el-table-column label="日期" width="180" align="center">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-icon><timer /></el-icon>
              <span style="margin-left: 10px">{{ scope.row.created_at }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column property="User" label="審核帳號" align="center">          
          <template #default="scope">
            <div v-if="scope.row.Checked != 0">{{scope.row.User}}</div>
            <div v-else></div>
          </template>
        </el-table-column>
        <el-table-column property="Date" label="審核日期" align="center">                
          <template #default="scope">
            <div>{{scope.row.Date}}</div>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100" align="center">
          <template #default="scope">
            <div v-if="scope.row.Checked == 0">
              <el-button-group>
                <el-button
                  type="success"
                  link
                  @click="reviewCash(scope.row)"
                >
                  {{scope.row.type}}审核
                </el-button>
                <el-button
                  type="primary"
                  link
                  @click="rejectCash(scope.row.ID)"
                >
                  拒绝
                </el-button>
              </el-button-group>              
            </div>
            <div v-else>
              <div v-html="scope.row.status"></div>
              <font color="red">{{scope.row.Notes}}</font>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background layout="prev, pager, next" :total="totalCount" 
          :page-size="20"
          @current-change="onPageChange"
          v-model:current-page="formData.page_no" />
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watch, onMounted } from 'vue'
import moment from 'moment-timezone';
import socket from "@/utils/socket";
import { ElNotification } from "element-plus";
import {storeToRefs} from "pinia";
import { paymentStore } from "@/pinia/modules/payment.js";
import { Management } from '@element-plus/icons-vue'
import type { TabsPaneContext } from 'element-plus'
import DepositAccount from './DepositAccount.vue'
import BulkDeposit from './BulkDeposit.vue'
const {dispatchCashSystem} = paymentStore();
const {dispatchReviewCash} = paymentStore();
const {dispatchCancelCash} = paymentStore();
const {dispatchDeleteCash} = paymentStore();

const CashSystemLayout = ref('存入帳戶')
const VisibleDeposit = ref("");
const loading = ref(false);
const formData = ref({
  lv: "M",
  s_date: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
  e_date: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
  name: "",
  type: "",
  page_no: 1,
})
const typeOptions = ref([
  {
    label: "全部",
    value: ""
  },
  // {
  //   label: "全部(含转换)",
  //   value: "ALL"
  // },
  {
    label: "存入",
    value: "S"
  },
  {
    label: "提出",
    value: "T"
  },
  {
    label: "赠送",
    value: "F"
  },
  {
    label: "已作废",
    value: "Q"
  },
  {
    label: "未审核",
    value: "C"
  },
])
const currentAmount = computed(() => {
  const {getCurrentAmount} = storeToRefs(paymentStore());
  return getCurrentAmount.value;
})
const reviewCash = async (item) => {
  loading.value = true;
  await dispatchReviewCash({id: item.ID});
  await dispatchCashSystem(formData.value);
  loading.value = false;
  console.log({userName: item.UserName, currentAmount: currentAmount.value});
  socket.io.emit("updateMoney", {userName: item.UserName, currentAmount: currentAmount.value})
}
const rejectCash = async (id) => {
  if (confirm("是否确定恢复金额?")){
    let cancelMsg = prompt("请输入拒绝理由：", "");
    loading.value = true;
    await dispatchCancelCash({id, cancelMsg});
    await dispatchCashSystem(formData.value);
    successResult();
    loading.value = false;
  }
}
const deleteCash = async (id) => {
  if(confirm("是否确定删除纪录?")) {
    loading.value = true;
    await dispatchDeleteCash({id});
    await dispatchCashSystem(formData.value);
    successResult();
    loading.value = false;    
  }
}
const getCashDataByFilter = async () => {
  loading.value = true;
  await dispatchCashSystem(formData.value);
  loading.value = false;
}
const onPageChange = async () => {
  loading.value = true;
  await dispatchCashSystem(formData.value);
  loading.value = false;
}
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
const mainVisible = async () => {
  VisibleDeposit.value = "";
  loading.value = true;
  await dispatchCashSystem(formData.value);
  loading.value = false;
}
const successResult = () => {
  if (success.value) {
    ElNotification({
      title: "成功",
      message: "操作成功。",
      type: "success",
    });
  } else {
    ElNotification({
      title: "错误",
      message: "操作失败。",
      type: "error",
    });
  }
}
const HandleDeposit = () => {
  VisibleDeposit.value = '存入帳戶';
}
const HandleBulk = () => {
  VisibleDeposit.value = '批量存款';
}
const success = computed(() => {
  const {getSuccess} = storeToRefs(paymentStore());
  return getSuccess.value;
})
const totalCount = computed(() => {
  const {getTotalCount} = storeToRefs(paymentStore());
  return getTotalCount.value;
})
const cashList = computed(() => {
  const {getCashList} = storeToRefs(paymentStore());
  return getCashList.value;
})
onMounted(async () => {
  loading.value = true;
  await dispatchCashSystem(formData.value);
  loading.value = false;
})
</script>
<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}
</style>
