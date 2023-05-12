<template>
  <el-tabs v-model="activeName" type="card" class="sum-tabs" @tab-click="handleClick">
    <el-tab-pane label="前三" name="first">
      <TopThree v-if="activeName === 'first'" />
    </el-tab-pane>
    <el-tab-pane label="中三" name="second">
      <MiddleThree v-if="activeName === 'second'" />
    </el-tab-pane>
    <el-tab-pane label="后三" name="third">
      <AfterThree v-if="activeName === 'third'" />
    </el-tab-pane>
    <el-tab-pane label="万仟" name="fourth">
      <WanQian v-if="activeName === 'fourth'" />
    </el-tab-pane>
    <el-tab-pane label="万佰" name="fifth">
      <MillionDollar v-if="activeName === 'fifth'" />
    </el-tab-pane>
    <el-tab-pane label="万拾" name="six">
      <WanShi v-if="activeName === 'six'" />
    </el-tab-pane>
    <el-tab-pane label="万个" name="seventh">
      <TenThousand v-if="activeName === 'seventh'" />
    </el-tab-pane>
    <el-tab-pane label="仟佰" name="eighth">
      <ThHundred v-if="activeName === 'eighth'" />
    </el-tab-pane>
    <el-tab-pane label="仟拾" name="ninth">
      <ThousandPick v-if="activeName === 'ninth'" />
    </el-tab-pane>
    <el-tab-pane label="仟个" name="tenth">
      <Thousand v-if="activeName === 'tenth'" />
    </el-tab-pane>
    <el-tab-pane label="佰拾" name="eleventh">
      <Hundreds v-if="activeName === 'eleventh'" />
    </el-tab-pane>
    <el-tab-pane label="佰个" name="twelves">
      <Hundred v-if="activeName === 'twelves'" />
    </el-tab-pane>
    <el-tab-pane label="拾个" name="thirteen">
      <PickUp v-if="activeName === 'thirteen'" />
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import TopThree from "./TopThree.vue";
import MiddleThree from "./MiddleThree.vue";
import AfterThree from "./AfterThree.vue";
import WanQian from "./WanQian.vue";
import MillionDollar from "./MillionDollar.vue";
import WanShi from "./WanShi.vue";
import TenThousand from "./TenThousand.vue";
import ThHundred from "./ThHundred.vue";
import ThousandPick from "./ThousandPick.vue";
import Thousand from "./Thousand.vue";
import Hundreds from "./Hundreds.vue";
import Hundred from "./Hundred.vue";
import PickUp from "./PickUp.vue";

const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>
<style>
.sum-tabs > .el-tabs__content {
  color: #6b778c;
  font-weight: 600;
}
</style>
