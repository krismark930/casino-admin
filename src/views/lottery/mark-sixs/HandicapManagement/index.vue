<template>
  <el-radio-group v-model="HandiCapLayout">
    <el-radio-button label="Handicap Management"></el-radio-button>
    <el-radio-button label="Historical Lottery Management"></el-radio-button>
  </el-radio-group>
  <div v-if="HandiCapLayout == 'Handicap Management'">
    <HandiManagement />
  </div>
  <div v-else>
    <HistoryLotteryManagement />
  </div>
</template>
<script lang="ts" setup>
import { Management } from '@element-plus/icons-vue'
import { ref } from 'vue'
import HandiManagement from './HandiManagement.vue'
import HistoryLotteryManagement from './HistoryLotteryManagement.vue'
const HandiCapLayout = ref('Handicap Management')
</script>
