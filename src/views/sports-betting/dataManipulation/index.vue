<template>
  <div style="padding: 0.75rem;">
    <el-tabs
      v-model="activeName"
      class="parameter-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="赛程数据" name="first">
        <ScheduleData :handleGType="handleGType" />
      </el-tab-pane>
      <el-tab-pane label="过关注单" name="second">
        <Checklist />
      </el-tab-pane>
      <el-tab-pane label="足球-赛事新增" name="third">
        <ScheduleAdded :gtype="gtype" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import ScheduleData from '@/views/sports-betting/dataManipulation/scheduleData/index.vue'
import Checklist from '@/views/sports-betting/dataManipulation/checkList/index.vue'
import ScheduleAdded from '@/views/sports-betting/dataManipulation/scheduleAdded/index.vue'

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}

const activeName = ref('first')
</script>
<script lang="ts">
export default {
  data() {
    return {
      gtype: '',
    }
  },
  methods: {
    handleGType(gtype) {
      this.gtype = gtype
    },
  },
}
</script>
<style lang="scss" scoped>
.parameter-tabs > .el-tabs_content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
