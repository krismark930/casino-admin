<template>
  <el-tabs
    v-model="activeName"
    type="card"
    class="mantissa-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane label="口口口" name="first">
      <MCUF v-if="activeName === 'first'" />
    </el-tab-pane>
    <el-tab-pane label="口口X" name="second">
      <MCF v-if="activeName === 'second'" />
    </el-tab-pane>
    <el-tab-pane label="口X口" name="third">
      <MUF v-if="activeName === 'third'" />
    </el-tab-pane>
    <el-tab-pane label="X口口" name="fourth">
      <CUF v-if="activeName === 'fourth'" />
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import MCUF from "./MCUF.vue";
import MCF from "./MCF.vue";
import MUF from "./MUF.vue";
import CUF from "./CUF.vue";

const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>
<style>
.mantissa-tabs > .el-tabs__content {
  color: #6b778c;
  font-weight: 600;
}
</style>
