<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="主盘势" name="first">
      <GENERAL v-if="activeName === 'first'"/>
    </el-tab-pane>
    <el-tab-pane label="特别号" name="second">
      <SP v-if="activeName === 'second'"/>
    </el-tab-pane>
    <el-tab-pane label="四季五行" name="third">
      <SEASONS_ELEMENTS v-if="activeName === 'third'"/>
    </el-tab-pane>
    <el-tab-pane label="正码特" name="fourth">
      <NORMAL_NUMBER v-if="activeName === 'fourth'"/>
    </el-tab-pane>
    <el-tab-pane label="总和/龙虎" name="fivth">
      <ALLSUM_DRAGON_TIGER v-if="activeName === 'fivth'"/>
    </el-tab-pane>
    <el-tab-pane label="一中一" name="sixth">
      <CHOOSE_1_MATCH_1 v-if="activeName === 'sixth'"/>
    </el-tab-pane>
    <el-tab-pane label="顺子杂六" name="seven">
      <SHUNZI v-if="activeName === 'seven'"/>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import type { TabsPaneContext } from 'element-plus'
import GENERAL from './GENERAL.vue'
import SP from './SP.vue'
import SEASONS_ELEMENTS from './SEASONS_ELEMENTS.vue'
import NORMAL_NUMBER from './NORMAL_NUMBER.vue';
import ALLSUM_DRAGON_TIGER from './ALLSUM_DRAGON_TIGER.vue';
import CHOOSE_1_MATCH_1 from './CHOOSE_1_MATCH_1.vue';
import SHUNZI from './SHUNZI.vue';

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
