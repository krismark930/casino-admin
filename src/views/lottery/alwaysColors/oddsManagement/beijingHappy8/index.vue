<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="主盘势" name="first">
      <OTHER2 v-if="activeName === 'first'"/>
    </el-tab-pane>
    <el-tab-pane label="定位" name="second">
      <OTHER v-if="activeName === 'second'"/>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>

import type { TabsPaneContext } from 'element-plus'
import OTHER2 from './OTHER2.vue'
import OTHER from './OTHER.vue'

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
