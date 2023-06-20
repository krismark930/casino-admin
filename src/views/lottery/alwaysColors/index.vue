<template>
  <div style="padding: 0.75rem;">
    <el-tabs v-model="activeName" class="parameter-tabs" @tab-click="handleClick">
      <el-tab-pane label="管理首页" name="first">
        <ManageHome v-if="activeName == 'first'" />
      </el-tab-pane>
      <el-tab-pane label="报表明细" name="second">
        <ReportDetails v-if="activeName == 'second'" />
      </el-tab-pane>
      <el-tab-pane label="时时彩设置" name="third">
        <ColorSettings v-if="activeName == 'third'" />
      </el-tab-pane>
      <el-tab-pane label="限额管理" name="fourth">
        <QuotaManagement v-if="activeName == 'fourth'" />
      </el-tab-pane>
      <el-tab-pane label="彩票结果管理" name="fifth">
        <ResultsManagement v-if="activeName == 'fifth'" />
      </el-tab-pane>
      <el-tab-pane label="彩票赔率管理" name="sixth">
        <OddsManagement v-if="activeName == 'sixth'" />
      </el-tab-pane>
      <el-tab-pane label="一键返水" name="seventh">
        <OnekeyRebate v-if="activeName == 'seventh'" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import {useRoute} from 'vue-router';
import type { TabsPaneContext } from 'element-plus'
import ManageHome from '@/views/lottery/alwaysColors/manageHome/index.vue'
import ReportDetails from '@/views/lottery/alwaysColors/reportDetails/index.vue'
import ColorSettings from '@/views/lottery/alwaysColors/colorSettings/index.vue'
import QuotaManagement from '@/views/lottery/alwaysColors/quotaManagement/index.vue'
import ResultsManagement from '@/views/lottery/alwaysColors/resultsManagement/index.vue'
import OddsManagement from '@/views/lottery/alwaysColors/oddsManagement/index.vue'
import OnekeyRebate from '@/views/lottery/alwaysColors/onekeyRebate/index.vue'

const route = useRoute();

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const activeName = ref('first');

onMounted(() => {
  if (route.query.activeName != undefined) {
    activeName.value = route.query.activeName;
  }
  console.log(activeName.value);
})
</script>
<style lang="scss" scoped>
.parameter-tabs>.el-tabs_content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
