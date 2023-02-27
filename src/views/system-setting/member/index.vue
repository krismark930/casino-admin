<template>
  <div style="padding: 0.75rem;">
    <el-tabs
      v-model="activeName"
      class="parameter-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="Member Deposit" name="first">
        <MemberDeposit />
      </el-tab-pane>
      <el-tab-pane label="Member Withdrawal" name="second">
        <MemberWithdrawal />
      </el-tab-pane>
      <el-tab-pane label="Member Information" name="third">
        <MemberInformation />
      </el-tab-pane>
      <el-tab-pane label="Member Contact Information" name="fourth">
        <MemberContactInformation />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import MemberDeposit from '@/views/system-setting/member/memberDeposit/index.vue'
import MemberWithdrawal from '@/views/system-setting/member/memberWithdrawal/index.vue'
import MemberInformation from '@/views/system-setting/member/memberInformation/index.vue'
import MemberContactInformation from '@/views/system-setting/member/memberContactInformation/index.vue'

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}

const activeName = ref('first')
</script>
<style lang="scss" scoped>
.parameter-tabs > .el-tabs_content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
