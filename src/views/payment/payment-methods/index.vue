<template>
  <el-card>
    <el-radio-group v-model="activeType" style="margin-bottom: 15px;" size="small">
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
    <div v-if="activeType == '新增'">
      <AddMethod />
    </div>
    <!-- <div v-if="activeType == '网银'">
      <OnlineBanking />
    </div>
    <div v-if="activeType == '微信'">
      <WeChat />
    </div>
    <div v-if="activeType == '支付宝'">
      <Alipay />
    </div>
    <div v-if="activeType == '快捷支付'">
      <QuickPayment />
    </div>
    <div v-if="activeType == 'QQ钱包'">
      <QQWallet />
    </div>
    <div v-if="activeType == '百度钱包'">
      <BaiduWallet />
    </div>
    <div v-if="activeType == '京东钱包'">
      <JDWallet />
    </div>
    <div v-if="activeType == '银联扫码'">
      <UniPayScancode />
    </div>
    <div v-if="activeType == '云闪付'">
      <CloudQuickPass />
    </div>
    <div v-if="activeType == '虚拟货币'">
      <VirtualCurrency />
    </div> -->
    <div>
      <h1>支付方式</h1>
      <el-table :data="paymentList" v-loading="loading" style="width: 100%;" border header-align="center" stripe>
        <el-table-column property="Switch" label="状态" align="center">
          <template #default="scope">
            <font color='red' v-if="scope.row.Switch == 1"><b>启用</b></font>
            <font v-else></font>
          </template>
        </el-table-column>
        <el-table-column property="Sort" label="排序" align="center">
          <template #default="scope">
            <el-input v-model="scope.row.Sort" />
          </template>
        </el-table-column>
        <el-table-column property="Address" width="400" label="返回地址" align="center">
          <template #default="scope">
            <el-input v-model="scope.row.Address" />
          </template>
        </el-table-column>
        <el-table-column property="Business" width="100" label="商户号" align="center">
          <template #default="scope">
            <el-input v-model="scope.row.Business" />
          </template>
        </el-table-column>
        <el-table-column property="TerminalID" width="100" label="终端号" align="center">
          <template #default="scope">
            <el-input v-model="scope.row.TerminalID" />
          </template>
        </el-table-column>
        <el-table-column property="Keys" width="100" label="商户密匙" align="center">
          <template #default="scope">
            <el-input v-model="scope.row.Keys" />
          </template>
        </el-table-column>
        <el-table-column property="Type" width="100" label="类型" align="center">
          <template #default="scope">
            <el-select v-model="scope.row.Type">
              <el-option v-for="optionItem in typeOptions" :key="optionItem.value" :label="optionItem.label"
                :value="optionItem.value"></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column property="VIP" width="100" label="VIP" align="center">
          <template #default="scope">
            <el-select v-model="scope.row.VIP">
              <el-option v-for="optionItem in wapOptions" :key="optionItem.value" :label="optionItem.label"
                :value="optionItem.value"></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column property="WAP" width="100" label="支持WAP" align="center">
          <template #default="scope">
            <el-select v-model="scope.row.WAP">
              <el-option v-for="optionItem in wapOptions" :key="optionItem.value" :label="optionItem.label"
                :value="optionItem.value"></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column property="Music" width="100" label="提醒" align="center">
          <template #default="scope">
            <el-select v-model="scope.row.Music">
              <el-option v-for="optionItem in musicOptions" :key="optionItem.value" :label="optionItem.label"
                :value="optionItem.value"></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column property="Limit1" width="100" label="最低" align="center">
          <template #default="scope">
            <el-input v-model="scope.row.Limit1" />
          </template>
        </el-table-column>
        <el-table-column property="Limit2" width="100" label="最高" align="center">
          <template #default="scope">
            <el-input v-model="scope.row.Limit2" />
          </template>
        </el-table-column>
        <el-table-column property="FixedGold" width="100" label="固定金额" align="center">
          <template #default="scope">
            <el-input v-model="scope.row.FixedGold" />
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="250" align="center">
          <template #default="scope">
            <div style="display: flex;">
              <el-button type="primary" size="small" @click="updatePaymentMethod(scope.row)">修改</el-button>
              <el-button type="success" size="small" @click="usePaymentMethod(scope.row.ID)">启用</el-button>
              <el-button type="danger" size="small" @click="stopPaymentMethod(scope.row.ID)">停用</el-button>
              <el-button type="warning" size="small" @click="deletePaymentMethod(scope.row.ID)">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>
<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue'
import { storeToRefs } from "pinia";
import { paymentStore } from "@/pinia/modules/payment.js";
import { ElNotification, ElMessageBox } from "element-plus";
import AddMethod from './AddMethod.vue'
import OnlineBanking from './OnlineBanking.vue'
import WeChat from './WeChat.vue'
import Alipay from './Alipay.vue'
import QuickPayment from './QuickPayment.vue'
import QQWallet from './QQWallet.vue'
import BaiduWallet from './BaiduWallet.vue'
import JDWallet from './JDWallet.vue'
import UniPayScancode from './UniPayScancode.vue'
import CloudQuickPass from './CloudQuickPass.vue'
import VirtualCurrency from './VirtualCurrency.vue'

const { dispatchPaymentMethod } = paymentStore();
const { dispatchAddPaymentMethod } = paymentStore();
const { dispatchUsePaymentMethod } = paymentStore();
const { dispatchDeletePaymentMethod } = paymentStore();

const activeType = ref('')
const loading = ref(false);
const pay_type = ref('');

const wapOptions = ref([
  {
    label: "是",
    value: 0,
  },
  {
    label: "否",
    value: 1,
  }
])


const musicOptions = ref([
  {
    label: "响铃",
    value: 1,
  },
  {
    label: "无声",
    value: 2,
  }
])

const typeOptions = ref([
  {
    label: "网银",
    value: 1
  },
  {
    label: "微信",
    value: 2
  },
  {
    label: "支付宝",
    value: 3
  },
  {
    label: "快捷支付",
    value: 4
  },
  {
    label: "QQ钱包",
    value: 5
  },
  {
    label: "百度钱包",
    value: 6
  },
  {
    label: "京东钱包",
    value: 7
  },
  {
    label: "银联钱包",
    value: 8
  },
  {
    label: "云闪付",
    value: 9
  },
  {
    label: "虚拟货币",
    value: 10
  },

])
watch(activeType, async (newValue) => {
  switch(newValue) {
    case "网银":
      pay_type.value = 1;
      break;
    case "微信":
      pay_type.value = 2;
      break;
    case "支付宝":
      pay_type.value = 3;
      break;
    case "快捷支付":
      pay_type.value = 4;
      break;
    case "QQ钱包":
      pay_type.value = 5;
      break;
    case "百度钱包":
      pay_type.value = 6;
      break;
    case "京东钱包":
      pay_type.value = 7;
      break;
    case "银联钱包":
      pay_type.value = 8;
      break;
    case "云闪付":
      pay_type.value = 9;
      break;
    case "虚拟货币":
      pay_type.value = 10;
      break;
    default:
      pay_type.value = '';
      break;
  }
  
  let formData = {
    lv: "M",
    pay_type: pay_type.value
  }
  loading.value = true;
  await dispatchPaymentMethod(formData);
  loading.value = false;
})
const paymentList = computed(() => {
  const { getPaymentList } = storeToRefs(paymentStore());
  console.log(getPaymentList.value)
  return getPaymentList.value
})

const updatePaymentMethod = async (item) => {
  ElMessageBox.confirm('你确认了吗?', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    loading.value = true
    await dispatchAddPaymentMethod(item);
    let formData = {
      lv: "M",
      pay_type: pay_type.value
    }
    await dispatchPaymentMethod(formData);
    loading.value = false;
  })
}

const usePaymentMethod = async (ID) => {
  ElMessageBox.confirm('你确认了吗?', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    loading.value = true;
    await dispatchUsePaymentMethod({"ID": ID, "Switch": 1});
    let formData = {
      lv: "M",
      pay_type: pay_type.value
    }
    await dispatchPaymentMethod(formData);
    loading.value = false
  })
}

const stopPaymentMethod = async (ID) => {
  ElMessageBox.confirm('你确认了吗?', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    loading.value = true;
    await dispatchUsePaymentMethod({"ID": ID, "Switch": 0});
    let formData = {
      lv: "M",
      pay_type: pay_type.value
    }
    await dispatchPaymentMethod(formData);
    loading.value = false
  })
}

const deletePaymentMethod = async (ID) => {
  ElMessageBox.confirm('你确认了吗?', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    loading.value = true;
    await dispatchDeletePaymentMethod({"ID": ID});
    let formData = {
      lv: "M",
      pay_type: pay_type.value
    }
    await dispatchPaymentMethod(formData);
    loading.value = false
  })
}
onMounted(async () => {
  loading.value = true;
  let formData = {
    lv: "M",
    pay_type: pay_type.value
  }
  await dispatchPaymentMethod(formData);
  loading.value = false;
})
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
