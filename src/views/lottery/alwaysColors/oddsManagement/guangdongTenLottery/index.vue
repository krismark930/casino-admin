<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="主盘势" name="first">
      <General v-if="activeName === 'first'"/>
    </el-tab-pane>
    <el-tab-pane label="单码双面" name="second">
      <NUMBER_OPPOSITE v-if="activeName === 'second'"/>
    </el-tab-pane>
    <el-tab-pane label="四季五行" name="third">
      <SEASONS_ELEMENTS v-if="activeName === 'third'"/>
    </el-tab-pane>
    <el-tab-pane label="方位/中发白" name="fourth">
      <DIRECTION_ZFB v-if="activeName === 'fourth'"/>
    </el-tab-pane>
    <el-tab-pane label="总和/龙虎" name="fivth">
      <ALLSUM_DRAGON_TIGER v-if="activeName === 'fivth'"/>
    </el-tab-pane>
    <el-tab-pane label="一中一" name="sixth">
      <CHOOSE_1_MATCH_1 v-if="activeName === 'sixth'"/>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>

import type { TabsPaneContext } from 'element-plus'
import General from './General.vue'
import NUMBER_OPPOSITE from './NUMBER_OPPOSITE.vue'
import SEASONS_ELEMENTS from './SEASONS_ELEMENTS.vue'
import DIRECTION_ZFB from './DIRECTION_ZFB.vue';
import ALLSUM_DRAGON_TIGER from './ALLSUM_DRAGON_TIGER.vue';
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
