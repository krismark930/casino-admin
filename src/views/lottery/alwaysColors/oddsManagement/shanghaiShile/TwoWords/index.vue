<template>
  <el-tabs
    v-model="activeName"
    type="card"
    class="mantissa-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane label="组合" name="first">
      <W2 v-if="activeName == 'first'"/>
    </el-tab-pane>
    <el-tab-pane label="口XX" name="second">
      <D2MC v-if="activeName == 'second'" />
    </el-tab-pane>
    <el-tab-pane label="X口X" name="third">
      <D2MU v-if="activeName == 'third'" />
    </el-tab-pane>
    <el-tab-pane label="XX口" name="fourth">
      <D2CU v-if="activeName == 'fourth'" />
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import W2 from './w2.vue'
import D2MC from './D2MC.vue';
import D2CU from './D2CU.vue'
import D2MU from './D2MU.vue'

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
