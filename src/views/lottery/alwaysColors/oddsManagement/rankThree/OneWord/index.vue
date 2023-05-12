<template>
  <el-tabs
    v-model="activeName"
    type="card"
    class="mantissa-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane label="组合" name="first">
      <W1 v-if="activeName == 'first'"/>
    </el-tab-pane>
    <el-tab-pane label="口XX" name="second">
      <D1M v-if="activeName == 'second'" />
    </el-tab-pane>
    <el-tab-pane label="X口X" name="third">
      <D1C v-if="activeName == 'third'" />
    </el-tab-pane>
    <el-tab-pane label="XX口" name="fourth">
      <D1U v-if="activeName == 'fourth'" />
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import W1 from './W1.vue'
import D1M from './D1M.vue';
import D1C from './D1C.vue'
import D1U from './D1U.vue'


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
