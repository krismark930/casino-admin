<template>
  <el-card>
    <el-radio-group
      v-model="activeType"
      style="margin-bottom: 15px;"
      size="small"
    >
      <el-radio-button label="Special code" />
      <el-radio-button label="Zhengte" />
      <el-radio-button label="Positive code" />
      <el-radio-button label="Positive code 1-6" />
      <el-radio-button label="Pass" />
      <el-radio-button label="Consecutive code" />
      <el-radio-button label="Half wave" />
      <el-radio-button label="One Xiao Zhengte mantissa" />
      <el-radio-button label="Five elements" />
      <el-radio-button label="Special & He Xiao" />
      <el-radio-button label="Zodiac connected" />
      <el-radio-button label="Mantissa connected" />
      <el-radio-button label="Miss all" />
      <el-radio-button label="Default setting" />
      <el-radio-button label="Restore odds" />
    </el-radio-group>
    <div v-if="activeType == 'Special code'">
      <SpecialCode />
    </div>
    <div v-if="activeType == 'Zhengte'"></div>
    <div v-if="activeType == 'Positive cod'"></div>
    <div v-if="activeType == 'Positive code 1-6'"></div>
    <div v-if="activeType == 'Pass'"></div>
    <div v-if="activeType == 'Consecutive code'"></div>
    <div v-if="activeType == 'Half wave'"></div>
    <div v-if="activeType == 'One Xiao Zhengte mantissa'"></div>
    <div v-if="activeType == 'Five elements'"></div>
    <div v-if="activeType == 'Special & He Xiao'"></div>
    <div v-if="activeType == 'Zodiac connected'"></div>
    <div v-if="activeType == 'Mantissa connected'"></div>
    <div v-if="activeType == 'Miss all'"></div>
    <div v-if="activeType == 'Default setting'"></div>
    <div v-if="activeType == 'Restore odds'"></div>
  </el-card>
</template>
<script lang="ts" setup>
import SpecialCode from './SpecialCode.vue'

import { ref, reactive } from 'vue'

const activeType = ref('Special code')
</script>
<style lang="scss" scoped></style>
