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
    <div v-if="activeType == 'Regular Special'">
      <RegularSpecial />
    </div>
    <div v-if="activeType == 'Regular Special 1-6'">
      <PositiveCode16 />
    </div>
    <div v-if="activeType == 'Pass'">
      <Pass />
    </div>
    <div v-if="activeType == 'Concatenated Code'">
      <ConcatenatedCode />
    </div>
    <div v-if="activeType == 'Half Wave'">
      <HalfWave />
    </div>
    <div v-if="activeType == 'One Xiao/Mantissa'">
      <OneXiao />
    </div>
    <div v-if="activeType == 'Five Elements'">
      <FiveElements />
    </div>
    <div v-if="activeType == 'Special & Multiple Xiaos'">
      <SpecialMultipleXiao />
    </div>
    <div v-if="activeType == 'Zodiac Link'">
      <ZoadicLink />
    </div>
    <div v-if="activeType == 'Mantissa Link'">
      <MantissaLink />
    </div>
    <div v-if="activeType == 'Full Miss'">
      <MissAll />
    </div>
    <div v-if="activeType == 'Double Sided'">
      <DoubleSide />
    </div>
    <div v-if="activeType == 'All'">
      <All />
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import SpecialCode from './SpecialCode.vue'
import PositiveCode from './PositiveCode.vue'
import RegularSpecial from './RegularSpecial.vue'
import PositiveCode16 from './PositiveCode16.vue'
import Pass from './Pass.vue'
import ConcatenatedCode from './ConcatenatedCode.vue'
import HalfWave from './HalfWave.vue'
import OneXiao from './OneXiao.vue'
import FiveElements from './FiveElements.vue'
import SpecialMultipleXiao from './SpecialMultipleXiao.vue'
import ZoadicLink from './ZoadicLink.vue'
import MantissaLink from './MantissaLink.vue'
import MissAll from './MissAll.vue'
import DoubleSide from './DoubleSide.vue'
import All from './All.vue'

import { ref, reactive } from 'vue'

const activeType = ref('Special code')
</script>
<style lang="scss" scoped></style>
