<template>
  <div style="padding: 0.75rem;">
    <el-form :model="formData" ref="formRef">
      <h1>存入帳戶</h1>
      <table class="deposit-table">
        <tr>
          <th>存入帳號</th>
          <td>
            <el-form-item
              style="margin-bottom: 0;"
              label="會員"
            >
              <el-input v-model="formData.name" :onblur="getMemberByName"/>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <th>方式</th>
          <td>
            <el-radio-group v-model="formData.type">
              <el-radio label="S">存入</el-radio>
              <el-radio label="T">提出</el-radio>
              <el-radio label="ZS">赠送</el-radio>
            </el-radio-group>
          </td>
        </tr>
        <tr>
          <th>金額</th>
          <td style="text-align: left; display: flex; align-items: center;">
            <el-input v-model="formData.gold" style="width: 250px"/>
            <div v-if="userVisible">
              <Font color="red" style="margin-left: 10px;"  v-if="user == null || user.Money == undefined"><b>查无此用户!</b></Font>
              <div style="margin-left: 10px;" v-else>
                <b>姓名:<Font color="blue">{{user.Alias}}</Font> &nbsp;&nbsp;&nbsp;&nbsp;余额:<Font color="blue">{{user.Money}}</Font>元</b>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th>备注</th>
          <td>
            <el-row>
              <el-col :span="6">
                <el-input v-model="formData.memo"/>
              </el-col>
              <el-button link type="danger" @click="setMemo('银行汇款')">银行汇款</el-button>
              <el-button link type="danger" @click="setMemo('微信')">微信</el-button>
              <el-button link type="danger" @click="setMemo('支付宝')">支付宝</el-button>
              <el-button link type="danger" @click="setMemo('彩金')">彩金</el-button>
              <el-button link type="danger" @click="setMemo('返水')">返水</el-button>
              <el-button link type="danger" @click="setMemo('扣款')">扣款</el-button>
              <el-button link type="danger" @click="setMemo('误差')">误差</el-button>
              <el-button link type="danger" @click="setMemo('工行')">工行</el-button>
              <el-button link type="danger" @click="setMemo('建行')">建行</el-button>
              <el-button link type="danger" @click="setMemo('农行')">农行</el-button>
            </el-row>
          </td>
        </tr>
        <tr>
          <th></th>
          <td>
            <el-row justify="center">
              <el-button @click="saveCash">確定</el-button>
              <el-button @click="resetCash">重設</el-button>
            </el-row>
          </td>
        </tr>
      </table>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import {storeToRefs} from "pinia";
import { ElNotification } from "element-plus";
import { paymentStore } from "@/pinia/modules/payment.js";
import { ElLoading } from "element-plus";
import type { FormInstance } from 'element-plus'
const formRef = ref<FormInstance>()
const {dispatchSaveCash} = paymentStore();
const {dispatchGetUser} = paymentStore();
const formData = ref({
  name: "",
  type: "S",
  gold: "",
  memo: "",
})
const userVisible = ref(false);
const setMemo = (msg) => {
  formData.value.memo = msg;
}
const resetCash = () => {
  formData.value = {
    name: "",
    type: "S",
    gold: "",
    memo: "",    
  }
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
      message: errMessage.value,
      type: "error",
    });
  }
}
const getMemberByName = async () => {
  await dispatchGetUser(formData.value);
  userVisible.value = true;
}
const user = computed(() => {
  const {getUser} = storeToRefs(paymentStore());
  return getUser.value;
})
const saveCash = async () => {
  if (formData.value.name == "") {
    alert("請輸入会员账号");
    return;
  }
  if (formData.value.gold == "") {
    alert("請輸入金額");
    return;
  }
  if (formData.value.memo == "") {
    alert("請輸入备注");
    return;
  }
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchSaveCash(formData.value);
  successResult();
  loading.close();
}
const errMessage = computed(() => {
  const {getErrMessage} = storeToRefs(paymentStore());
  return getErrMessage.value
})
const success = computed(() => {
  const {getSuccess} = storeToRefs(paymentStore());
  return getSuccess.value;
})
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;

.deposit-table {
  width: 100%;
  border: $table-border;
  margin-bottom: 5px;
  border-collapse: collapse;
  tr {
    height: 20px;
    th {
      width: 15%;
      text-align: right;
      padding: 0 10px;
      background-color: $table-th-bgcolor;
      border: $table-border;
    }
    td {
      border: $table-border;
      padding: 5px;
      min-width: 35%;
      max-width: 85%;
    }
  }
}
</style>
