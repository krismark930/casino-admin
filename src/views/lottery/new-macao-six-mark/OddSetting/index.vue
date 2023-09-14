<template>
  <el-card>
    <el-radio-group v-model="activeType" style="margin-bottom: 15px;" size="small">
      <el-radio-button label="特码" />
      <el-radio-button label="正特" />
      <el-radio-button label="正码" />
      <el-radio-button label="正码1-6" />
      <el-radio-button label="过关" />
      <el-radio-button label="连码" />
      <el-radio-button label="半波" />
      <el-radio-button label="一肖正特尾数" />
      <el-radio-button label="五行" />
      <el-radio-button label="特&合肖" />
      <el-radio-button label="生肖连" />
      <el-radio-button label="尾数连" />
      <el-radio-button label="全不中" />
      <!-- <el-radio-button label="默认设置" /> -->
      <el-radio-button label="还原赔率" />
    </el-radio-group>
    <div v-if="activeType == '特码'">
      <SpecialCode />
    </div>
    <div v-if="activeType == '正特'">
      <Zhengte />
    </div>
    <div v-if="activeType == '正码'">
      <PositiveCode />
    </div>
    <div v-if="activeType == '正码1-6'">
      <PositiveCode16 />
    </div>
    <div v-if="activeType == '过关'">
      <Pass />
    </div>
    <div v-if="activeType == '连码'">
      <ConsecutiveCode />
    </div>
    <div v-if="activeType == '半波'">
      <HalfWave />
    </div>
    <div v-if="activeType == '一肖正特尾数'">
      <OneXiao />
    </div>
    <div v-if="activeType == '五行'">
      <FiveElements />
    </div>
    <div v-if="activeType == '特&合肖'">
      <Special />
    </div>
    <div v-if="activeType == '生肖连'">
      <Zodiac />
    </div>
    <div v-if="activeType == '尾数连'">
      <Mantissa />
    </div>
    <div v-if="activeType == '全不中'">
      <MissAll />
    </div>
    <!-- <div v-if="activeType == '默认设置'">
      <DefaultSetting />
    </div> -->
    <div v-if="activeType == '还原赔率'">
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

const activeType = ref('特码')
</script>
<style lang="scss" scoped></style>
