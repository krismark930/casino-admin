<template>
  <el-tabs v-model="activeName" type="card" class="mark-tabs" @tab-click="handleClick">
    <el-tab-pane label="盘口管理" name="handicap">
      <HandicapManagement v-if="activeName == 'handicap'" />
    </el-tab-pane>
    <el-tab-pane label="赔率设置" name="oddSetting">
      <OddSetting v-if="activeName == 'oddSetting'" />
    </el-tab-pane>
    <el-tab-pane label="即时注单" name="instantBet">
      <InstantBet v-if="activeName == 'instantBet'" />
    </el-tab-pane>
    <el-tab-pane label="股东" name="kaguan_member">
      <KaguanManagement v-if="activeName == 'kaguan_member'" />
    </el-tab-pane>
    <el-tab-pane label="总代理" name="kazong_member">
      <KazongManagement v-if="activeName == 'kazong_member'" />
    </el-tab-pane>
    <el-tab-pane label="代理" name="kadan_member">
      <KadanManagement v-if="activeName == 'kadan_member'" />
    </el-tab-pane>
    <el-tab-pane label="会员" name="member">
      <MemberManagement v-if="activeName == 'member'" />
    </el-tab-pane>
    <el-tab-pane label="报表" name="report">
      <Report v-if="activeName == 'report'" />
    </el-tab-pane>
    <el-tab-pane label="系统维护" name="systemMaintenance">
      <SystemMaintenance v-if="activeName == 'systemMaintenance'" />
    </el-tab-pane>
    <el-tab-pane label="注单查询" name="betslip">
      <BetslipQuery v-if="activeName == 'betslip'" />
    </el-tab-pane>
    <el-tab-pane label="总底单" name="totalbill">
      <TotalBill v-if="activeName == 'totalbill'" />
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

import HandicapManagement from './HandicapManagement/index.vue';
import MemberManagement from './MemberManagement/index.vue';
import KaguanManagement from './KaguanManagement/index.vue';
import KazongManagement from './KazongManagement/index.vue';
import KadanManagement from './KadanManagement/index.vue';
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
