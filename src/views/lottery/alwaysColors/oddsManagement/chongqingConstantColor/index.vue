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
    <el-tab-pane label="一字定位" name="sixth">
      <OneWordPostion v-if="activeName === 'sixth'" />
    </el-tab-pane>
    <el-tab-pane label="二字定位" name="seventh">
      <TwoWordPosition v-if="activeName === 'seventh'" />
    </el-tab-pane>
    <el-tab-pane label="组选三" name="eighth">
      <GroupThree v-if="activeName === 'eighth'" />
    </el-tab-pane>
    <el-tab-pane label="组选六" name="ninth">
      <GroupSelectSix v-if="activeName === 'ninth'" />
    </el-tab-pane>
    <el-tab-pane label="跨度" name="tenth">
      <Span v-if="activeName === 'tenth'" />
    </el-tab-pane>
    <el-tab-pane label="总和龙虎和" name="eleventh">
      <SumDragon v-if="activeName === 'eleventh'" />
    </el-tab-pane>
    <el-tab-pane label="豹子顺子" name="tweleves">
      <Leopard v-if="activeName === 'tweleves'" />
    </el-tab-pane>
    <el-tab-pane label="牛牛" name="thirteen">
      <NiuNiu v-if="activeName === 'thirteen'" />
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import type { TabsPaneContext } from "element-plus";
import TwoSide from "./TwoSide.vue";
import GroupThree from "./GroupThree/index.vue";
import GroupSelectSix from "./GroupSelectSix/index.vue";
import Leopard from "./Leopard/index.vue";
import Mantissa from "./Mantissa/index.vue";
import OneWord from "./OneWord/index.vue";
import OneWordPostion from "./OneWordPosition/index.vue";
import Span from "./Span/index.vue";
import Sum from "./Sum/index.vue";
import SumDragon from "./SumDragon.vue";
import TwoWordPosition from "./TwoWordPosition/index.vue";
import TwoWords from "./TwoWords/index.vue";
import NiuNiu from "./NiuNiu.vue";

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
