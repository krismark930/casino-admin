<template>
  <div style="padding: 0.75rem;">
    <el-tabs
      v-model="activeName"
      class="parameter-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="管理首页" name="first">
        <ManageHome />
      </el-tab-pane>
      <el-tab-pane label="报表明细" name="second">
        <ReportDetails />
      </el-tab-pane>
      <el-tab-pane label="时时彩设置" name="third">
        <ColorSettings />
      </el-tab-pane>
      <el-tab-pane label="限额管理" name="fourth">
        <QuotaManagement />
      </el-tab-pane>
      <el-tab-pane label="彩票结果管理" name="fisth">
        <ResultsManagement />
      </el-tab-pane>
      <el-tab-pane label="彩票赔率管理" name="sixth">
        <OddsManagement />
      </el-tab-pane>
      <el-tab-pane label="一键返水" name="seventh">
        <OnekeyRebate />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import ManageHome from '@/views/lottery/alwaysColors/manageHome/index.vue'
import ReportDetails from '@/views/lottery/alwaysColors/reportDetails/index.vue'
import ColorSettings from '@/views/lottery/alwaysColors/colorSettings/index.vue'
import QuotaManagement from '@/views/lottery/alwaysColors/quotaManagement/index.vue'
import ResultsManagement from '@/views/lottery/alwaysColors/resultsManagement/index.vue'
import OddsManagement from '@/views/lottery/alwaysColors/oddsManagement/index.vue'
import OnekeyRebate from '@/views/lottery/alwaysColors/onekeyRebate/index.vue'

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
