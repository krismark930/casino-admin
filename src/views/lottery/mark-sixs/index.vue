<template>
  <el-tabs
    v-model="activeName"
    type="card"
    class="mark-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane label="Handicap Management" name="handicap">
      <HandicapManagement />
    </el-tab-pane>
    <el-tab-pane label="Odds Setting" name="oddSetting">
      <OddSetting />
    </el-tab-pane>
    <el-tab-pane label="Instant Bet Slip" name="instantBet"></el-tab-pane>
    <el-tab-pane label="Go fly" name="gofly"></el-tab-pane>
    <el-tab-pane label="Member" name="member">
      <MemberManagement />
    </el-tab-pane>
    <el-tab-pane label="Report" name="report">
      <Report />
    </el-tab-pane>
    <el-tab-pane
      label="System Maintenance"
      name="systemMaintenance"
    ></el-tab-pane>
    <el-tab-pane label="Bet Slip Query" name="betslip">
      <BetslipQuery />
    </el-tab-pane>
    <el-tab-pane label="Total Bill" name="totalbill"></el-tab-pane>
    <el-tab-pane label="Quit" name="quit"></el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

import HandicapManagement from './HandicapManagement/index.vue';
import MemberManagement from './MemberManagement/index.vue'
import Report from './Report/index.vue'
import BetslipQuery from './BetSlipQuery/index.vue'
import OddSetting from './OddSetting/index.vue'

const activeName = ref('handicap')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style scss="scope">
.mark-tabs {
  width: 100%;
}
</style>
