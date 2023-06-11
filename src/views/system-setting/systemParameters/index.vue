<!-- This is System Parameter Page -->
<template>
  <div class="parameter-wrapper">
    <!-- <el-tabs v-model="activeName" class="parameter-tabs" @tab-click="handleClick">
      <el-tab-pane label="电脑版网址/手机版网址" name="first"></el-tab-pane>
      <el-tab-pane label="开放注册" name="second"></el-tab-pane>
      <el-tab-pane label="首页公告" name="third"></el-tab-pane>
      <el-tab-pane label="系统维护" name="fourth"></el-tab-pane>
      <el-tab-pane label="简易版公告" name="fifth"></el-tab-pane>
      <el-tab-pane label="监控会员" name="sixth"></el-tab-pane>
      <el-tab-pane label="坏会员" name="seventh"></el-tab-pane>
      <el-tab-pane label="客服网址" name="eighth"></el-tab-pane>
      <el-tab-pane label="手机版设置" name="ninth"></el-tab-pane>
    </el-tabs> -->

    <h3 class="tab-heading" id="first">电脑版网址/手机版网址</h3>
    <UrlTable :urlList="urlList" />
    <h3 class="tab-heading" id="second">开放注册</h3>
    <TurnServices :turnServiceList="turnServiceList" />
    <h3 class="tab-heading" id="third">首页公告</h3>
    <HomeNotification :notificationList="notificationList" />
    <h3 class="tab-heading" id="fourth">系统维护</h3>
    <SystemMaintaince :systemMaintainceList="systemMaintainceList" />
    <h3 class="tab-heading" id="fifth">简易版公告</h3>
    <SimpleVersion :simpleVersionList="simpleVersionList" />
    <h3 class="tab-heading" id="sixth">监控会员</h3>
    <MonitorMember :monitorMemberList="monitorMemberList" />
    <h3 class="tab-heading" id="seventh">坏会员</h3>
    <BlackList :badMemberList="badMemberList" />
    <h3 class="tab-heading" id="eighth">客服网址</h3>
    <CustomerService :customerserviceList="customerserviceList"/>
    <h3 class="tab-heading" id="ninth">手机版设置</h3>
    <MobileSetting :sysConfigItem="sysConfigItem"/>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import UrlTable from './UrlTable.vue';
import TurnServices from './TurnServices.vue'
import HomeNotification from './HomeNotification.vue';
import SimpleVersion from './SimpleVersion.vue';
import SystemMaintaince from './SystemMaintaince.vue';
import MonitorMember from './MonitorMembers.vue'
import BlackList from './BlackList.vue';
import CustomerService from './CustomerService.vue';
import MobileSetting from './MobileSetting.vue';
import { systemStore } from "@/pinia/modules/system";
import { storeToRefs } from 'pinia';

const activeName = ref('first')
const { dispatchSystemData } = systemStore();
const urlList = ref([]);
const turnServiceList = ref([]);
const notificationList = ref([]);
const simpleVersionList = ref([]);
const systemMaintainceList = ref([]);
const monitorMemberList = ref([]);
const badMemberList = ref([]);
const customerserviceList = ref([]);

const sysConfigItem = computed(() => {
  const { getSysConfigItem } = storeToRefs(systemStore());
  turnServiceList.value = [
    {
      service: '开放注册',
      status: getSysConfigItem.value.isReg == 1 ? true : false,
    },
    {
      service: 'AG平台',
      status: getSysConfigItem.value.AG_Repair == 1 ? true : false,
    },
    {
      service: 'OG平台',
      status: getSysConfigItem.value.OG_Repair == 1 ? true : false,
    },
    {
      service: 'BBIN平台',
      status: getSysConfigItem.value.BBIN_Repair == 1 ? true : false,
    },
    {
      service: 'MG平台',
      status: getSysConfigItem.value.MG_Repair == 1 ? true : false,
    },
    {
      service: 'PT平台',
      status: getSysConfigItem.value.PT_Repair == 1 ? true : false,
    },
    {
      service: '开元棋牌',
      status: getSysConfigItem.value.KY_Repair == 1 ? true : false,
    },
  ]
  console.log(turnServiceList.value);
  return getSysConfigItem.value
})
const configItem = computed(() => {
  const { getConfigItem } = storeToRefs(systemStore());
  urlList.value = [...urlList.value, { PCURL: getConfigItem.value.PCURL, WAPURL: getConfigItem.value.WAPURL }];
  badMemberList.value = [
    {
      BadMember: getConfigItem.value.BadMember,
      BadMember2: getConfigItem.value.BadMember2,
      BadMember_JQ: getConfigItem.value.BadMember_JQ
    }
  ]
  customerserviceList.value = [
    {
      kf1: getConfigItem.value.kf1,
      kf2: getConfigItem.value.kf2,
      kf3: getConfigItem.value.kf3,
      kf4: getConfigItem.value.kf4
    }
  ]
  console.log(badMemberList.value);
  return getConfigItem.value
})
const webSystemItem = computed(() => {
  const { getWebSystemItem } = storeToRefs(systemStore());
  notificationList.value = [
    {
      notification: getWebSystemItem.value.GongGao
    }
  ]
  simpleVersionList.value = [
    {
      simpleVersion: getWebSystemItem.value.systimee,
    },
  ]
  systemMaintainceList.value = [
    {
      website: getWebSystemItem.value.website == 1 ? true : false,
      systime: getWebSystemItem.value.systime
    }
  ]
  monitorMemberList.value = [
    {
      BadArea: getWebSystemItem.value.BadArea
    }

  ]
  console.log(notificationList.value);
  return getWebSystemItem.value
})

onMounted(async () => {
  await dispatchSystemData({ lv: "M" });
  console.log(configItem.value);
  console.log(sysConfigItem.value)
  console.log(webSystemItem.value)
})
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

.parameter-tabs>.el-tabs_content {
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
