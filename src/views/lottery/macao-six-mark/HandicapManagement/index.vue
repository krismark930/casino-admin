<template>
  <el-card>
    <el-radio-group v-model="HandiCapLayout" style="margin-bottom: 15px;">
      <el-radio-button label="盘口管理" />
      <el-radio-button label="历史开奖管理" />
    </el-radio-group>
    <div v-if="HandiCapLayout == '盘口管理'">
      <KitheManagement />
    </div>
    <div v-else>
      <HistoryLotteryManagement />
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import KitheManagement from './KitheManagement.vue'
import HistoryLotteryManagement from './HistoryLotteryManagement.vue'
const HandiCapLayout = ref('盘口管理')
</script>
