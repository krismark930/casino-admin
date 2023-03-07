<template>
  <div style="padding: 0.75rem;">
    <el-tabs
      v-model="activeName"
      class="parameter-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="足球" name="first">
        <Football />
      </el-tab-pane>
      <el-tab-pane label="篮球" name="second">
        <Basketball />
      </el-tab-pane>
      <el-tab-pane label="棒球" name="third">
        <Baseball />
      </el-tab-pane>
      <el-tab-pane label="网球" name="fourth">
        <Tennis />
      </el-tab-pane>
      <el-tab-pane label="排球" name="fifth">
        <Volleyball />
      </el-tab-pane>
      <el-tab-pane label="其它" name="sixth">
        <Other />
      </el-tab-pane>
      <el-tab-pane label="结果" name="seventh">
        <Result />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import Football from '@/views/sports-betting/sportsEvent/football/index.vue'
import Basketball from '@/views/sports-betting/sportsEvent/basketball/index.vue'
import Baseball from '@/views/sports-betting/sportsEvent/baseball/index.vue'
import Tennis from '@/views/sports-betting/sportsEvent/tennis/index.vue'
import Volleyball from '@/views/sports-betting/sportsEvent/volleyball/index.vue'
import Other from '@/views/sports-betting/sportsEvent/other/index.vue'
import Result from '@/views/sports-betting/sportsEvent/result/index.vue'

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}

const activeName = ref('first')
</script>
<style lang="scss" scoped>
.parameter-tabs > .el-tabs_content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
