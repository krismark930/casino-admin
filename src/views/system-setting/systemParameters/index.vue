<!-- This is System Parameter Page -->
<template>
  <div class="parameter-wrapper">
    <el-tabs
      v-model="activeName"
      class="parameter-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="Website URL" name="first"></el-tab-pane>
      <el-tab-pane label="Turn on/off Services" name="second"></el-tab-pane>
      <el-tab-pane label="Homepage Notification" name="third"></el-tab-pane>
      <el-tab-pane label="System Maintaince" name="fourth"></el-tab-pane>
      <el-tab-pane
        label="Simple Version Notification"
        name="fifth"
      ></el-tab-pane>
      <el-tab-pane label="Monitor Members" name="sixth"></el-tab-pane>
      <el-tab-pane label="BlackList" name="seventh"></el-tab-pane>
      <el-tab-pane label="Customer Service Urls" name="eighth"></el-tab-pane>
      <el-tab-pane label="Mobile Settings" name="ninth"></el-tab-pane>
    </el-tabs>

    <h3 class="tab-heading" id="first">Website URL</h3>
    <UrlTable />
    <h3 class="tab-heading" id="second">Turn on/off Services</h3>
    <TurnServices />
    <h3 class="tab-heading" id="third">Homepage Notification</h3>
    <HomeNotification />
    <h3 class="tab-heading" id="fourth">System Maintaince</h3>
    <SystemMaintaince />
    <h3 class="tab-heading" id="fifth">Simple Version Notification</h3>
    <SimpleVersion />
    <h3 class="tab-heading" id="sixth">Monitor Members</h3>
    <MonitorMember />
    <h3 class="tab-heading" id="seventh">BlackList</h3>
    <BlackList />
    <h3 class="tab-heading" id="eighth">Customer Service Website URL</h3>
    <CustomerService />
    <h3 class="tab-heading" id="ninth">Mobile Version Setting</h3>
    <MobileSetting />
  </div>
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
import CustomerService from './CustomerService.vue';
import MobileSetting from './MobileSetting.vue';

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  document.getElementById(tab.paneName.toString()).scrollIntoView();
}
</script>
<style>
.parameter-wrapper {
  width: 100%;
}
.parameter-tabs {
  position: sticky;
  z-index: 999;
  top: 0;
  background: #f5f5f5;
}
.parameter-tabs > .el-tabs_content {
  color: #6b778c;
  font-size: 32px;
  font-weight: 100;
}

h3.tab-heading {
  scroll-margin-top: 50px;
  padding-top: 20px;
  text-align: center;
}
</style>
