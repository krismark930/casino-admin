<template>
  <el-card>
    <el-radio-group
      v-model="activeType"
      style="margin-bottom: 15px;"
      size="small"
    >
      <el-radio-button label="Special code" />
      <el-radio-button label="Positive code" />
      <el-radio-button label="Regular Special" />
      <el-radio-button label="Regular Special 1-6" />
      <el-radio-button label="Pass" />
      <el-radio-button label="Concatenated Code" />
      <el-radio-button label="Half Wave" />
      <el-radio-button label="One Xiao/Mantissa" />
      <el-radio-button label="Five Elements" />
      <el-radio-button label="Special & Multiple Xiaos" />
      <el-radio-button label="Zodiac Link" />
      <el-radio-button label="Mantissa Link" />
      <el-radio-button label="Full Miss" />
      <el-radio-button label="Double Sided" />
      <el-radio-button label="All" />
    </el-radio-group>
    <div v-if="activeType == 'Special code'">
      <SpecialCode />
    </div>
    <div v-if="activeType == 'Positive code'">
      <PositiveCode />
    </div>
    <div v-if="activeType == 'Positive code 1-6'">
      <!-- <PositiveCode16 /> -->
    </div>
    <div v-if="activeType == 'Pass'">
      <!-- <Pass /> -->
    </div>
    <div v-if="activeType == 'Consecutive code'">
      <!-- <ConsecutiveCode /> -->
    </div>
    <div v-if="activeType == 'Half wave'">
      <!-- <HalfWave /> -->
    </div>
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
import PositiveCode from './PositiveCode.vue'

import { ref, reactive } from 'vue'

const activeType = ref('Special code')
</script>
<style lang="scss" scoped></style>
