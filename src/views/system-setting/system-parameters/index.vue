<!-- This is System Parameter Page -->
<template>
  <el-tabs v-model="activeName" class="parameter-tabs" @tab-click="handleClick">
    <el-tab-pane label="Website URL" name="first"></el-tab-pane>
    <el-tab-pane label="Turn on/off Services" name="second"></el-tab-pane>
    <el-tab-pane label="Homepage Notification" name="third"></el-tab-pane>
    <el-tab-pane label="System Maintaince" name="fourth"></el-tab-pane>
    <el-tab-pane label="Monitor Members" name="fifth"></el-tab-pane>
    <el-tab-pane label="Blacklist" name="sixth">Blacklist</el-tab-pane>
    <el-tab-pane label="Customer Service Urls" name="seventh">
      Customer Service Website Url
    </el-tab-pane>
    <el-tab-pane label="Mobile Settings" name="eighth">
      Mobile Settings
    </el-tab-pane>
  </el-tabs>
  <h3>Website URL</h3>
  <UrlTable />
  <h3>Turn on/off Services</h3>
  <TurnServices />
  <h3>Homepage Notification</h3>
  <HomeNotification />
  <h3>Simple Version</h3>
  <SimpleVersion />
  <h3>System Maintaince</h3>
  <SystemMaintaince />
  <h3>Monitor Members</h3>
  <MonitorMember />
  <h3>BlackList</h3>
  <BlackList />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import UrlTable from './UrlTable.vue';
import TurnServices from './TurnServices.vue'
import HomeNotification from './HomeNotification.vue';
import SimpleVersion from './SimpleVersion.vue';
import SystemMaintaince from './SystemMaintaince.vue';
import MonitorMember from './MonitorMembers.vue'
import BlackList from './BlackList.vue';
const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style>
h3 {
  text-align: center;
}
</style>
