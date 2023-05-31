<template>
  <div style="padding: 0.75rem;">
    <h1 style="color:red">批量充值</h1>
    <el-form label-width="100px">
      <el-form-item label="充值会员 :">
        <el-input v-model="formData.names" type="textarea" />
      </el-form-item>
      <el-form-item label="金额 :">
        <el-input v-model="formData.gold"/>
      </el-form-item>
      <el-form-item label="说明 :">
        <el-input v-model="formData.memo"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveBulkCash">开始充值</el-button>
      </el-form-item>
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
const {dispatchSaveBulkCash} = paymentStore();
const formData = ref({
  names: "",
  gold: "",
  memo: "彩金",
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
      message: errMessage.value,
      type: "error",
    });
  }
}
const saveBulkCash = async () => {
  if (formData.value.names == "") {
    alert("請輸入会员账号");
    return;
  }
  if (formData.value.gold == "") {
    alert("請輸入金額");
    return;
  }
  console.log(formData.value);
  if (Number(formData.value.gold) <= 0) {
    alert("金额不正确");
    return;
  }
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchSaveBulkCash(formData.value);
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
<style lang="scss" scoped></style>
