<template>
  <el-tabs
    v-model="activeName"
    type="card"
    class="mantissa-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane label="万" name="first">
      <TenThousand />
    </el-tab-pane>
    <el-tab-pane label="仟" name="second">
      <Thousand />
    </el-tab-pane>
    <el-tab-pane label="佰" name="third">
      <Hundred />
    </el-tab-pane>
    <el-tab-pane label="拾" name="fourth">
      <PickUp />
    </el-tab-pane>
    <el-tab-pane label="个" name="fivth">
      <Individual />
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import TenThousand from './TenThousand.vue'
import Thousand from './Thousand.vue'
import Individual from './Individual.vue'
import Hundred from './Hundred.vue'
import PickUp from './PickUp.vue'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style>
.mantissa-tabs > .el-tabs__content {
  color: #6b778c;
  font-weight: 600;
}
</style>
