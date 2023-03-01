<template>
  <el-card>
    <el-radio-group v-model="HandiCapLayout" style="margin-bottom: 15px;">
      <el-radio-button label="Handicap Management" />
      <el-radio-button label="Historical Lottery Management" />
    </el-radio-group>
    <div v-if="HandiCapLayout == 'Handicap Management'">
      <HandiManagement />
    </div>
    <div v-else>
      <HistoryLotteryManagement />
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { Management } from '@element-plus/icons-vue'
import { ref } from 'vue'
import HandiManagement from './HandiManagement.vue'
import HistoryLotteryManagement from './HistoryLotteryManagement.vue'
const HandiCapLayout = ref('Handicap Management')
</script>
