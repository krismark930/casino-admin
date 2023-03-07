<!-- This is System Parameter Page -->
<template>
  <div class="parameter-wrapper">
    <el-tabs
      v-model="activeName"
      class="parameter-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="电脑版网址/手机版网址" name="first"></el-tab-pane>
      <el-tab-pane label="开放注册" name="second"></el-tab-pane>
      <el-tab-pane label="首页公告" name="third"></el-tab-pane>
      <el-tab-pane label="系统维护" name="fourth"></el-tab-pane>
      <el-tab-pane label="简易版公告" name="fifth"></el-tab-pane>
      <el-tab-pane label="监控会员" name="sixth"></el-tab-pane>
      <el-tab-pane label="坏会员" name="seventh"></el-tab-pane>
      <el-tab-pane label="客服网址" name="eighth"></el-tab-pane>
      <el-tab-pane label="手机版设置" name="ninth"></el-tab-pane>
    </el-tabs>

    <h3 class="tab-heading" id="first">电脑版网址/手机版网址</h3>
    <UrlTable />
    <h3 class="tab-heading" id="second">开放注册</h3>
    <TurnServices />
    <h3 class="tab-heading" id="third">首页公告</h3>
    <HomeNotification />
    <h3 class="tab-heading" id="fourth">系统维护</h3>
    <SystemMaintaince />
    <h3 class="tab-heading" id="fifth">简易版公告</h3>
    <SimpleVersion />
    <h3 class="tab-heading" id="sixth">监控会员</h3>
    <MonitorMember />
    <h3 class="tab-heading" id="seventh">坏会员</h3>
    <BlackList />
    <h3 class="tab-heading" id="eighth">客服网址</h3>
    <CustomerService />
    <h3 class="tab-heading" id="ninth">手机版设置</h3>
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
