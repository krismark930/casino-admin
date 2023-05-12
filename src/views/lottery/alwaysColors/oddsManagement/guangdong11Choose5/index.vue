<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="正码特" name="first">
      <NORMAL_NUMBER v-if="activeName === 'first'"/>
    </el-tab-pane>
    <el-tab-pane label="总和 龙虎和" name="second">
      <ALL_SUM_TIGER v-if="activeName === 'second'"/>
    </el-tab-pane>
    <el-tab-pane label="顺子 杂六" name="third">
      <STRAIGHT_SIX v-if="activeName === 'third'"/>
    </el-tab-pane>
    <el-tab-pane label="一中一" name="fourth">
      <CHOOSE_1_MATCH_1 v-if="activeName === 'fourth'"/>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import type { TabsPaneContext } from 'element-plus'
import NORMAL_NUMBER from './NORMAL_NUMBER.vue'
import ALL_SUM_TIGER from './ALL_SUM_TIGER.vue'
import STRAIGHT_SIX from './STRAIGHT_SIX.vue';
import CHOOSE_1_MATCH_1 from './CHOOSE_1_MATCH_1.vue';

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
