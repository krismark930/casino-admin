<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="单码双面" name="first">
      <NUMBER_OPPOSITE v-if="activeName === 'first'"/>
    </el-tab-pane>
    <el-tab-pane label="方位/中发白" name="second">
      <DIRECTION_ZFB v-if="activeName === 'second'"/>
    </el-tab-pane>
    <el-tab-pane label="总和/龙虎" name="third">
      <ALLSUM_DRAGON_TIGER v-if="activeName === 'third'"/>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>

import type { TabsPaneContext } from 'element-plus'
import NUMBER_OPPOSITE from './NUMBER_OPPOSITE.vue'
import DIRECTION_ZFB from './DIRECTION_ZFB.vue';
import ALLSUM_DRAGON_TIGER from './ALLSUM_DRAGON_TIGER.vue';

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
