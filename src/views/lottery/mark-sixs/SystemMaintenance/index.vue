<template>
  <el-card>
    <el-radio-group
      v-model="activeName"
      style="margin-bottom: 15px;"
      size="small"
    >
      <el-radio-button label="网站设置" />
      <el-radio-button label="会员盘赔率相差设置" />
      <el-radio-button label="自动降水" />
      <el-radio-button label="单期限额" />
      <el-radio-button label="退水默认设置" />
      <el-radio-button label="数据备份" />
    </el-radio-group>
    <div v-if="activeName == '网站设置'"></div>
    <div v-if="activeName == '会员盘赔率相差设置'"></div>
    <div v-if="activeName == '自动降水'"></div>
    <div v-if="activeName == '单期限额'"></div>
    <div v-if="activeName == '退水默认设置'"></div>
    <div v-if="activeName == '数据备份'"></div>
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const activeName = ref('网站设置')
</script>
<style scss="scope"></style>
