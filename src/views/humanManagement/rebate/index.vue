<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>一键反水</h3>
    <el-tabs type="border-card" v-model="activeName">
      <el-tab-pane label="真人返水" name="first"><LiveRebate /></el-tab-pane>
      <el-tab-pane label="电子返水" name="second"><ERebate /></el-tab-pane>
      <el-tab-pane label="棋牌返水" name="third"><ChessRebate /></el-tab-pane>
      <el-tab-pane label="捕鱼返水" name="fourth"><FishingRebate /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import LiveRebate from '@/views/humanManagement/rebate/liveRebate.vue'
import ERebate from '@/views/humanManagement/rebate/ERebate.vue'
import FishingRebate from '@/views/humanManagement/rebate/fishingRebate.vue'
import ChessRebate from '@/views/humanManagement/rebate/chessRebate.vue'

const route = useRoute()

const activeName = ref("first");

onMounted(() => {
  console.log(route.query.activeName);
  if (route.query.activeName != undefined) {
    activeName.value = route.query.activeName;
  }
})
</script>
