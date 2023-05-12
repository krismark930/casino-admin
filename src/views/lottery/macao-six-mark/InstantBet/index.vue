<template>
  <el-card>
    <el-radio-group v-model="activeType" style="margin-bottom: 15px;" size="small">
      <el-radio-button label="特码" />
      <el-radio-button label="正码" />
      <el-radio-button label="正特" />
      <el-radio-button label="正码1-6" />
      <el-radio-button label="过关" />
      <el-radio-button label="连码(连码合计)" />
      <el-radio-button label="半波" />
      <el-radio-button label="一肖/尾数" />
      <el-radio-button label="五行" />
      <el-radio-button label="特&多肖" />
      <el-radio-button label="生肖连(合计)" />
      <el-radio-button label="尾数连" />
      <el-radio-button label="全不中" />
    </el-radio-group>
    <div v-if="activeType == '特码'">
      <SpecialCode />
    </div>
    <div v-if="activeType == '正码'">
      <PositiveCode />
    </div>
    <div v-if="activeType == '正特'">
      <RegularSpecial />
    </div>
    <div v-if="activeType == '正码1-6'">
      <PositiveCode16 />
    </div>
    <div v-if="activeType == '过关'">
      <Pass />
    </div>
    <div v-if="activeType == '连码(连码合计)'">
      <ConcatenatedCode />
    </div>
    <div v-if="activeType == '半波'">
      <HalfWave />
    </div>
    <div v-if="activeType == '一肖/尾数'">
      <OneXiao />
    </div>
    <div v-if="activeType == '五行'">
      <FiveElements />
    </div>
    <div v-if="activeType == '特&多肖'">
      <SpecialMultipleXiao />
    </div>
    <div v-if="activeType == '生肖连(合计)'">
      <ZoadicLink />
    </div>
    <div v-if="activeType == '尾数连'">
      <MantissaLink />
    </div>
    <div v-if="activeType == '全不中'">
      <MissAll />
    </div>
    <div v-if="activeType == '双面'">
      <DoubleSide />
    </div>
    <div v-if="activeType == '全部'">
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

import { ref, reactive, toRefs } from 'vue'

const activeType = ref('特码')
</script>
<style lang="scss" scoped></style>
