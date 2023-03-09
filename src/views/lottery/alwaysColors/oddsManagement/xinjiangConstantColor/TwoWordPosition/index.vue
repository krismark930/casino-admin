<template>
  <el-tabs
    v-model="activeName"
    type="card"
    class="twowordposition-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane label="万仟" name="first">
      <WanQian />
    </el-tab-pane>
    <el-tab-pane label="万佰" name="second">
      <MillionDollar />
    </el-tab-pane>
    <el-tab-pane label="万拾" name="third">
      <WanShi />
    </el-tab-pane>
    <el-tab-pane label="万个" name="fourth">
      <TenThousand />
    </el-tab-pane>
    <el-tab-pane label="仟佰" name="fivth">
      <ThHundred />
    </el-tab-pane>
    <el-tab-pane label="仟拾" name="six">
      <ThousandPick />
    </el-tab-pane>
    <el-tab-pane label="仟个" name="seventh">
      <Thousand />
    </el-tab-pane>
    <el-tab-pane label="佰拾" name="eighth">
      <Hundreds />
    </el-tab-pane>
    <el-tab-pane label="佰个" name="ninth">
      <Hundred />
    </el-tab-pane>
    <el-tab-pane label="拾个" name="tenth">
      <PickUp />
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import WanQian from './WanQian.vue'
import MillionDollar from './MillionDollar.vue'
import WanShi from './WanShi.vue';
import TenThousand from './TenThousand.vue'
import ThHundred from './ThHundred.vue'
import ThousandPick from './ThousandPick.vue'
import Thousand from './Thousand.vue'
import Hundreds from './Hundreds.vue'
import Hundred from './Hundred.vue'
import PickUp from './PickUp.vue'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style>
.twowordposition-tabs > .el-tabs__content {
  color: #6b778c;
  font-weight: 600;
}
</style>
