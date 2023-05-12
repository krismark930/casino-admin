<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="两面" name="first">
      <TwoSide v-if="activeName === 'first'" />
    </el-tab-pane>
    <el-tab-pane label="和数" name="second">
      <Sum v-if="activeName === 'second'" />
    </el-tab-pane>
    <el-tab-pane label="和尾数" name="third">
      <Mantissa v-if="activeName === 'third'" />
    </el-tab-pane>
    <el-tab-pane label="一字" name="fourth">
      <OneWord v-if="activeName === 'fourth'" />
    </el-tab-pane>
    <el-tab-pane label="二字" name="fifth">
      <TwoWords v-if="activeName === 'fifth'" />
    </el-tab-pane>
    <el-tab-pane label="组选三" name="eighth">
      <GroupThree v-if="activeName === 'eighth'" />
    </el-tab-pane>
    <el-tab-pane label="组选六" name="ninth">
      <GroupSelectSix v-if="activeName === 'ninth'" />
    </el-tab-pane>
    <el-tab-pane label="一字过关 " name="sixth">
      <WordPass v-if="activeName === 'sixth'" />
    </el-tab-pane>
    <el-tab-pane label="跨度" name="tenth">
      <Span v-if="activeName === 'tenth'" />
    </el-tab-pane>
    <el-tab-pane label="总和龙虎和" name="eleventh">
      <SumDragon v-if="activeName === 'eleventh'" />
    </el-tab-pane>
    <el-tab-pane label="3连" name="tweleves">
      <ThreeCompany v-if="activeName === 'tweleves'" />
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import type { TabsPaneContext } from "element-plus";
import TwoSide from "./TwoSide.vue";
import GroupThree from "./GroupThree.vue";
import GroupSelectSix from "./GroupSelectSix.vue";
import ThreeCompany from "./ThreeCompany.vue";
import Mantissa from "./Mantissa/index.vue";
import OneWord from "./OneWord/index.vue";
import WordPass from "./WordPass.vue";
import Span from "./Span.vue";
import Sum from "./Sum/index.vue";
import SumDragon from "./SumDragon.vue";
import TwoWords from "./TwoWords/index.vue";

import { ref } from "vue";
const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>
<style lang="scss" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
}
</style>
