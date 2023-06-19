<template>
  <div style="padding: 1rem;">
    <el-tabs
      v-model="activeName"
      class="parameter-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="AG转换记录" name="first">
        <AGRecord v-if="activeName == 'first'"/>
      </el-tab-pane>
      <el-tab-pane label="OG转换记录" name="second">
        <OGRecord v-if="activeName == 'second'" />
      </el-tab-pane>
      <el-tab-pane label="BB转换记录" name="third">
        <BBRecord  v-if="activeName == 'third'"/>
      </el-tab-pane>
      <el-tab-pane label="MG转换记录" name="fourth">
        <MGRecord  v-if="activeName == 'fourth'"/>
      </el-tab-pane>
      <el-tab-pane label="PT转换记录" name="fifth">
        <PTRecord  v-if="activeName == 'fifth'"/>
      </el-tab-pane>
      <el-tab-pane label="开元棋牌转换记录" name="sixth">
        <ChessRecord  v-if="activeName == 'sixth'"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import AGRecord from '@/views/system-setting/conversionRecords/AGconversionRecord/index.vue'
import OGRecord from '@/views/system-setting/conversionRecords/OGconversionRecord/index.vue'
import BBRecord from '@/views/system-setting/conversionRecords/BBconversionRecord/index.vue'
import MGRecord from '@/views/system-setting/conversionRecords/MGconversionRecord/index.vue'
import PTRecord from '@/views/system-setting/conversionRecords/PTconversionRecord/index.vue'
import ChessRecord from '@/views/system-setting/conversionRecords/chessconversionRecord/index.vue'

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
