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
    <el-tab-pane label="Odds Setting" name="oddSetting"></el-tab-pane>
    <el-tab-pane label="Instant Bet" name="instantBet"></el-tab-pane>
    <el-tab-pane label="Fly Away" name="flyAway"></el-tab-pane>
    <el-tab-pane label="Shareholder" name="shareholder"></el-tab-pane>
    <el-tab-pane label="General Agent" name="generalAgent"></el-tab-pane>
    <el-tab-pane label="Acting" name="acting"></el-tab-pane>
    <el-tab-pane label="Member" name="member"></el-tab-pane>
    <el-tab-pane label="Report" name="report"></el-tab-pane>
    <el-tab-pane
      label="System Maintenance"
      name="systemMaintenance"
    ></el-tab-pane>
    <el-tab-pane label="Note Query" name="noteQuery"></el-tab-pane>
    <el-tab-pane label="General Order" name="generalOrder"></el-tab-pane>
    <el-tab-pane label="Quit" name="quit"></el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

import HandicapManagement from './HandicapManagement/index.vue';
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
