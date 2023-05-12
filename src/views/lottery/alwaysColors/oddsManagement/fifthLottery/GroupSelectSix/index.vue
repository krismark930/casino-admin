<template>
  <el-tabs
    v-model="activeName"
    type="card"
    class="sum-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane label="前三" name="first">
      <TopThree v-if="activeName == 'first'"/>
    </el-tab-pane>
    <el-tab-pane label="中三" name="second">
      <MiddleThree v-if="activeName == 'second'" />
    </el-tab-pane>
    <el-tab-pane label="后三" name="third">
      <AfterThree v-if="activeName == 'third'" />
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import TopThree from './TopThree.vue'
import MiddleThree from './MiddleThree.vue';
import AfterThree from './AfterThree.vue'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style>
.sum-tabs > .el-tabs__content {
  color: #6b778c;
  font-weight: 600;
}
</style>
