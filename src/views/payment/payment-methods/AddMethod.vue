<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="paymentmethod-table">
        <thead>
          <tr>
            <th>返回地址</th>
            <th>商户号</th>
            <th>终端号</th>
            <th>商户密匙</th>
            <th>类型</th>
            <th>VIP</th>
            <th>支持WAP</th>
            <th>铃声</th>
            <th>最低金額</th>
            <th>最高金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <el-input v-model="formData.Address" />
            </td>
            <td>
              <el-input v-model="formData.Business" />
            </td>
            <td>
              <el-input v-model="formData.TerminalID" />
            </td>
            <td>
              <el-input v-model="formData.Keys" />
            </td>
            <td>
              <el-select placeholder="网银" v-model="formData.Type">
                <el-option v-for="optionItem in typeOptions" :key="optionItem.value" :label="optionItem.label"
                  :value="optionItem.value"></el-option>
              </el-select>
            </td>
            <td>
              <el-select placeholder="否" v-model="formData.VIP">
                <el-option v-for="optionItem in wapOptions" :key="optionItem.value" :label="optionItem.label"
                  :value="optionItem.value"></el-option>
              </el-select>
            </td>
            <td>
              <el-select placeholder="否" v-model="formData.WAP">
                <el-option v-for="optionItem in wapOptions" :key="optionItem.value" :label="optionItem.label"
                  :value="optionItem.value"></el-option>
              </el-select>
            </td>
            <td>
              <el-select placeholder="无声" v-model="formData.Music">
                <el-option v-for="optionItem in musicOptions" :key="optionItem.value" :label="optionItem.label"
                  :value="optionItem.value"></el-option>
              </el-select>
            </td>
            <td>
              <el-input v-model="formData.Limit1" />
            </td>
            <td>
              <el-input v-model="formData.Limit2" />
            </td>
          </tr>
          <tr>
            <td colspan="10">
              <div style="display:flex;justify-content:center;">
                <el-button type="primary" size="small" @click="savePaymentMethod">提交</el-button>
                <el-button type="primary" size="small" @click="resetFormData">取消</el-button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </el-row>
  </el-scrollbar>
</template>
<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia';
import { paymentStore } from "@/pinia/modules/payment.js";
import { ElNotification, ElLoading } from "element-plus";

const { dispatchAddPaymentMethod } = paymentStore();

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

const formData = ref({
  Address: "",
  Business: "",
  TerminalID: "",
  Keys: "",
  FixedGold: "",
  Type: 1,
  VIP: 0,
  WAP: 0,
  Limit1: "",
  Limit2: "",
  Switch: 0,
  Music: 1,
  Sort: 1
})
const success = computed(() => {
  const { getSuccess } = storeToRefs(paymentStore());
  return getSuccess.value
})
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
const savePaymentMethod = async () => {
  if (formData.value.Address == "") {
    ElNotification({
      title: "错误",
      message: "请输入返回地址!!",
      type: "error",
    });
    return;
  }
  if (formData.value.Business == "") {
    ElNotification({
      title: "错误",
      message: "请输入商户号!!",
      type: "error",
    });
    return;
  }
  if (formData.value.Keys == "") {
    ElNotification({
      title: "错误",
      message: "请输入商户密匙!!",
      type: "error",
    });
    return;
  }
  if (formData.value.Limit1 == "") {
    ElNotification({
      title: "错误",
      message: "请输入最低金額!!",
      type: "error",
    });
    return;
  }
  if (formData.value.Limit2 == "") {
    ElNotification({
      title: "错误",
      message: "请输入最高金額!!",
      type: "error",
    });
    return;
  }
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchAddPaymentMethod(formData.value);
  loading.close();
  successResult();
}
const resetFormData = () => {
  formData.value = {
    Address: "",
    Business: "",
    TerminalID: "",
    Keys: "",
    FixedGold: "",
    Type: 1,
    VIP: 0,
    WAP: 0,
    Limit1: "",
    Limit2: "",
    Switch: 0,
    Music: 1,
    Sort: 1
  }
}
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
