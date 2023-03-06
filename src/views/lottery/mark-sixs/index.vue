<template>
  <el-tabs
    v-model="activeName"
    type="card"
    class="mark-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane label="盘口管理" name="handicap">
      <HandicapManagement />
    </el-tab-pane>
    <el-tab-pane label="赔率设置" name="oddSetting">
      <OddSetting />
    </el-tab-pane>
    <el-tab-pane label="即时注单" name="instantBet">
      <InstantBet />
    </el-tab-pane>
    <el-tab-pane label="走飞" name="gofly">
      <GoFly />
    </el-tab-pane>
    <el-tab-pane label="会员" name="member">
      <MemberManagement />
    </el-tab-pane>
    <el-tab-pane label="报表" name="report">
      <Report />
    </el-tab-pane>
    <el-tab-pane label="系统维护" name="systemMaintenance">
      <SystemMaintenance />
    </el-tab-pane>
    <el-tab-pane label="注单查询" name="betslip">
      <BetslipQuery />
    </el-tab-pane>
    <el-tab-pane label="总底单" name="totalbill">
      <TotalBill />
    </el-tab-pane>
    <el-tab-pane label="退出" name="quit"></el-tab-pane>
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
import InstantBet from './InstantBet/index.vue'
import TotalBill from './TotalBill/index.vue'
import SystemMaintenance from './SystemMaintenance/index.vue'
import GoFly from './GoFly/index.vue'

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
