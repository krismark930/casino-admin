<template>
  <el-tabs v-model="activeName" type="card" class="sum-tabs" @tab-click="handleClick">
    <el-tab-pane label="口口口" name="first">
      <SN v-if="activeName === 'first'" />
    </el-tab-pane>
    <el-tab-pane label="口口X" name="second">
      <MCS v-if="activeName === 'second'" />
    </el-tab-pane>
    <el-tab-pane label="口X口" name="third">
      <MUS v-if="activeName === 'third'" />
    </el-tab-pane>
    <el-tab-pane label="X口口" name="fourth">
      <CUS v-if="activeName === 'fourth'" />
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import SN from "./SN.vue";
import MCS from "./MCS.vue";
import MUS from "./MUS.vue";
import CUS from "./CUS.vue";

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
