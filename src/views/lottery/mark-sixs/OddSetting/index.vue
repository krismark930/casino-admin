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
    <div v-if="activeType == 'Zhengte'">
      <Zhengte />
    </div>
    <div v-if="activeType == 'Positive code'">
      <PositiveCode />
    </div>
    <div v-if="activeType == 'Positive code 1-6'">
      <PositiveCode16 />
    </div>
    <div v-if="activeType == 'Pass'">
      <Pass />
    </div>
    <div v-if="activeType == 'Consecutive code'">
      <ConsecutiveCode />
    </div>
    <div v-if="activeType == 'Half wave'">
      <HalfWave />
    </div>
    <div v-if="activeType == 'One Xiao Zhengte mantissa'">
      <OneXiao />
    </div>
    <div v-if="activeType == 'Five elements'">
      <FiveElements />
    </div>
    <div v-if="activeType == 'Special & He Xiao'">
      <Special />
    </div>
    <div v-if="activeType == 'Zodiac connected'">
      <Zodiac />
    </div>
    <div v-if="activeType == 'Mantissa connected'">
      <Mantissa />
    </div>
    <div v-if="activeType == 'Miss all'">
      <MissAll />
    </div>
    <div v-if="activeType == 'Default setting'">
      <DefaultSetting />
    </div>
    <div v-if="activeType == 'Restore odds'">
      <RestoreOdds />
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import SpecialCode from './SpecialCode.vue'
import Zhengte from './Zhengte.vue'
import PositiveCode from './PositiveCode.vue'
import PositiveCode16 from './PositiveCode16.vue'
import Pass from './Pass.vue'
import ConsecutiveCode from './ConsecutiveCode.vue'
import HalfWave from './HalfWave.vue'
import OneXiao from './OneXiao.vue'
import FiveElements from './FiveElements.vue'
import Special from './Special.vue'
import Zodiac from './Zodiac.vue'
import Mantissa from './Mantissa.vue'
import MissAll from './MissAll.vue'
import DefaultSetting from './DefaultSetting.vue'
import RestoreOdds from './RestoreOdds.vue'

import { ref, reactive } from 'vue'

const activeType = ref('Special code')
</script>
<style lang="scss" scoped></style>
