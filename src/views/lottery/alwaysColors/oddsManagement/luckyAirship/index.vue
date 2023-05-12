<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="主盘势" name="first">
      <GENERAL v-if="activeName === 'first'"/>
    </el-tab-pane>
    <el-tab-pane label="定位" name="second">
      <NORMAL_NUMBER v-if="activeName === 'second'"/>
    </el-tab-pane>
    <el-tab-pane label="冠亚军和" name="third">
      <SUM_FIRST_2 v-if="activeName === 'third'"/>
    </el-tab-pane>
    <el-tab-pane label="冠亚军和-快速" name="fourth">
      <SUM_FIRST_2_QUICK v-if="activeName === 'fourth'"/>
    </el-tab-pane>
    <el-tab-pane label="选号" name="fivth">
      <MULTI_CHOOSE v-if="activeName === 'fivth'"/>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>

import type { TabsPaneContext } from 'element-plus'
import GENERAL from './GENERAL.vue'
import NORMAL_NUMBER from './NORMAL_NUMBER.vue'
import SUM_FIRST_2 from './SUM_FIRST_2.vue'
import SUM_FIRST_2_QUICK from './SUM_FIRST_2_QUICK.vue';
import MULTI_CHOOSE from './MULTI_CHOOSE.vue';

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
