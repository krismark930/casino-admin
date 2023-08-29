<template>
  <div style="padding: 0.75rem;">
    <el-card>
      <!-- <el-row :gutter="20">
        <el-col :span="4">
          <el-button link type="primary" style="padding-top:7px" @click="handleAddBank">
            新增银行账号
          </el-button>
        </el-col>
        <el-col :span="4">
          <el-switch v-model="usdtList.tjck" class="ml-2" width="150" inline-prompt active-text="允许提交汇款"
            inactive-text="允许提交汇款" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
        </el-col>
        <el-col :span="6">
          <el-form-item label="汇款返利:">
            <el-input placeholder="1%" v-model="usdtList.ckfanli"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="USDT汇率:">
            <el-input placeholder="1%" v-model="usdtList.USDT"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="updateUSDTRate">提交</el-button>
        </el-col>
      </el-row> -->
      <el-dialog v-model="dialogVisible" title="新增银行账号">
        <el-scrollbar>
          <el-row class="scrollbar-flex-content">
            <table class="paymentmethod-table">
              <thead>
                <tr>
                  <th>银行名称</th>
                  <th>银行名称</th>
                  <th>银行账号</th>
                  <th>开户行</th>
                  <!-- <th>VIP</th>
                  <th>最低</th>
                  <th>最高</th> -->
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <el-input v-model="webBankItem.bankname" />
                  </td>
                  <td>
                    <el-input v-model="webBankItem.alias" />
                  </td>
                  <td>
                    <el-input v-model="webBankItem.bankno" />
                  </td>
                  <td>
                    <el-input v-model="webBankItem.bankaddress" />
                  </td>
                  <!-- <td>
                    <el-select placeholder="否" v-model="webBankItem.vip">
                      <el-option v-for="optionItem in vipOptions" :key="optionItem.value" :label="optionItem.label"
                        :value="optionItem.value"></el-option>
                    </el-select>
                  </td>
                  <td>
                    <el-input v-model="webBankItem.min_amount" />
                  </td>
                  <td>
                    <el-input v-model="webBankItem.max_amount" />
                  </td> -->
                </tr>
              </tbody>
            </table>
          </el-row>
        </el-scrollbar>
        <template #footer>
          <span class="dialog-footer">
            <el-button type="primary" @click="saveWebBankData">
              提交
            </el-button>
            <el-button @click="resetWebBankData">取消</el-button>
          </span>
        </template>
      </el-dialog>
      <el-scrollbar>
        <el-row class="scrollbar-flex-content">
          <table class="paymentmethod-table">
            <thead>
              <tr>
                <th>状态</th>
                <th>排序</th>
                <th>银行名称</th>
                <th>开户人姓名</th>
                <th>银行账号</th>
                <th>开户行</th>
                <!-- <th>VIP专用</th>
                <th>最低</th>
                <th>最高</th> -->
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in webBankList" :key="index">
                <td>
                  <Font color="blue" v-if="item.open == 1">启用</Font>
                  <Font v-else></Font>
                </td>
                <td>
                  <el-input v-model="item.sort" />
                </td>
                <td>
                  <el-input v-model="item.bankname" />
                </td>
                <td>
                  <el-input v-model="item.alias" />
                </td>
                <td>
                  <el-input v-model="item.bankno" />
                </td>
                <td>
                  <el-input v-model="item.bankaddress" />
                </td>
                <!-- <td>
                  <el-select placeholder="否" v-model="item.vip">
                    <el-option v-for="optionItem in vipOptions" :key="optionItem.value" :label="optionItem.label"
                      :value="optionItem.value"></el-option>
                  </el-select>
                </td>
                <td>
                  <el-input v-model="item.min_amount" />
                </td>
                <td>
                  <el-input v-model="item.max_amount" />
                </td> -->
                <td>
                  <div style="display: flex;">
                    <el-button type="primary" size="small" @click="updateWebBankData(item)">修改</el-button>
                    <el-button type="success" size="small" @click="useWebBankData(item.ID, 1)">启用</el-button>
                    <el-button type="danger" size="small" @click="useWebBankData(item.ID, 0)">停用</el-button>
                    <el-button type="warning" size="small" @click="deleteWebBankData(item.ID)">删除</el-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </el-row>
      </el-scrollbar>
    </el-card>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia';
import { paymentStore } from "@/pinia/modules/payment.js";
import { ElNotification, ElLoading, ElMessageBox } from "element-plus";

const { dispatchWebBankData } = paymentStore();
const { dispatchAddWebBankData } = paymentStore();
const { dispatchUseWebBankData } = paymentStore();
const { dispatchDeleteWebBankData } = paymentStore();
const { dispatchUpdateUSDTRate } = paymentStore();

const dialogVisible = ref(false)

const webBankItem = ref({
  bankname: "",
  alias: "",
  bankno: "",
  bankaddress: "",
  vip: 0,
  min_amount: 100,
  max_amount: 10000,
})

const vipOptions = ref([
  {
    label: "是",
    value: 0,
  },
  {
    label: "否",
    value: 1,
  }
])

const success = computed(() => {
  const { getSuccess } = storeToRefs(paymentStore());
  return getSuccess.value;
})

const webBankList = computed(() => {
  const { getWebBankList } = storeToRefs(paymentStore());
  return getWebBankList.value
})

const usdtList = computed(() => {
  const { getUSDTList } = storeToRefs(paymentStore());
  return getUSDTList.value;
})

const saveWebBankData = async () => {
  if (webBankItem.value.bankname == "") {
    ElNotification({
      title: "错误",
      message: "请输入银行名称!!",
      type: "error",
    });
    return;
  }
  if (webBankItem.value.bankno == "") {
    ElNotification({
      title: "错误",
      message: "请输入银行账号!!",
      type: "error",
    });
    return;
  }
  if (webBankItem.value.bankaddress == "") {
    ElNotification({
      title: "错误",
      message: "请输入银开户行!!",
      type: "error",
    });
    return;
  }
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchAddWebBankData(webBankItem.value);
  await dispatchWebBankData({ lv: "M" });
  dialogVisible.value = false;
  webBankItem.value = {
    bankname: "",
    alias: "",
    bankno: "",
    bankaddress: "",
    vip: 0
  }
  loading.close();
}

const resetWebBankData = () => {
  webBankItem.value = {
    bankname: "",
    alias: "",
    bankno: "",
    bankaddress: "",
    vip: 0
  }
}

const updateWebBankData = async (item) => {
  ElMessageBox.confirm('你确认了吗?', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    const loading = ElLoading.service({
      lock: true,
      text: "加载中...",
      background: "rgba(0, 0, 0, 0.7)",
    });
    await dispatchAddWebBankData(item);
    await dispatchWebBankData({ lv: "M" });
    loading.close();
  }).catch(() => { });
}

const useWebBankData = async (ID, open) => {
  ElMessageBox.confirm('你确认了吗?', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    const loading = ElLoading.service({
      lock: true,
      text: "加载中...",
      background: "rgba(0, 0, 0, 0.7)",
    });
    await dispatchUseWebBankData({ ID, open });
    await dispatchWebBankData({ lv: "M" });
    loading.close();
  }).catch(() => { });
}

const updateUSDTRate = async () => {
  ElMessageBox.confirm('你确认了吗?', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    usdtList.value.tjck = usdtList.value.tjck ? 1 : 0
    const loading = ElLoading.service({
      lock: true,
      text: "加载中...",
      background: "rgba(0, 0, 0, 0.7)",
    });
    await dispatchUpdateUSDTRate(usdtList.value);
    successResult();
    loading.close();
  }).catch(() => { });
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
const deleteWebBankData = async (ID) => {
  ElMessageBox.confirm('你确认了吗?', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    const loading = ElLoading.service({
      lock: true,
      text: "加载中...",
      background: "rgba(0, 0, 0, 0.7)",
    });
    await dispatchDeleteWebBankData({ ID });
    await dispatchWebBankData({ lv: "M" });
    loading.close();
  }).catch(() => { });
}

const handleAddBank = () => {
  dialogVisible.value = true
}

onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchWebBankData({ lv: "M" });
  loading.close();
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
