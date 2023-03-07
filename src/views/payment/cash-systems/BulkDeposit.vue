<template>
  <div style="padding: 0.75rem;">
    <h1 style="color:red">批量充值</h1>
    <el-form label-width="100px">
      <el-form-item label="充值会员 :">
        <el-input v-model="form.recharge" type="textarea" />
      </el-form-item>
      <el-form-item label="金额 :">
        <el-input v-model="form.amount"></el-input>
      </el-form-item>
      <el-form-item label="说明 :">
        <el-input v-model="form.illustrate"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary @click='onSubmit'">开始充值</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const form = reactive({
  recharge: '',
  amount: '',
  illustrate: '',
})
const onSubmit = () => {
  console.log('submit!')
}
</script>
<style lang="scss" scoped></style>
