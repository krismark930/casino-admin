<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="主盘势" name="first">
      <MainMarket />
    </el-tab-pane>
    <el-tab-pane label="单码双面" name="second">
      <SingleCoded />
    </el-tab-pane>
    <el-tab-pane label="四季五行" name="third">
      <FourSeason />
    </el-tab-pane>
    <el-tab-pane label="方位/中发白" name="fourth"></el-tab-pane>
    <el-tab-pane label="总和/龙虎" name="fivth"></el-tab-pane>
    <el-tab-pane label="一中一" name="sixth"></el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>

import type { TabsPaneContext } from 'element-plus'
import MainMarket from './MainMarket.vue'
import SingleCoded from './SingleCoded.vue'
import FourSeason from './FourSeason.vue'

import {ref} from 'vue'
const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style lang="scss" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
}
</style>
