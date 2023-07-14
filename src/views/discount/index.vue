<template>
  <div style="padding: 0.75rem;">
    <el-tabs v-model="activeName" class="parameter-tabs" @tab-click="handleClick">
      <el-tab-pane label="限时活动" name="first">
        <LimitedTimeEvent v-if="activeName == 'first'" />
      </el-tab-pane>
      <el-tab-pane label="新人首存" name="second">
        <FirstDeposit v-if="activeName == 'second'" />
      </el-tab-pane>
      <el-tab-pane label="日常活动" name="third">
        <DailyActivities v-if="activeName == 'third'" />
      </el-tab-pane>
      <el-tab-pane label="高额返水" name="fourth">
        <HighRebate v-if="activeName == 'fourth'" />
      </el-tab-pane>
      <el-tab-pane label="VIP特权" name="fifth">
        <VIPPrivilege v-if="activeName == 'fifth'" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import {useRoute} from 'vue-router';
import type { TabsPaneContext } from 'element-plus'
import LimitedTimeEvent from '@/views/discount/time_event/index.vue'
import FirstDeposit from '@/views/discount/first_deposit/index.vue'
import DailyActivities from '@/views/discount/daily_acitivities/index.vue'
import HighRebate from '@/views/discount/high_rebate/index.vue'
import VIPPrivilege from '@/views/discount/vip_privilege/index.vue'

const route = useRoute();

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const activeName = ref('first');
</script>
<style lang="scss" scoped>
.parameter-tabs>.el-tabs_content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
