<template>
  <el-form :model="form">
    <el-form-item>
      <el-descriptions
        direction="vertical"
        :column="3"
        border
        class="lotteryBall-class"
        title="Lottery Ball Number"
      >
        <el-descriptions-item label="Flat1">
          <el-input placeholder="0" />
        </el-descriptions-item>
        <el-descriptions-item label="Operate">
          <el-button type="primary" size="small">
            Lottery
          </el-button>
        </el-descriptions-item>
        <el-descriptions-item label="Warning">
          如果还未到开奖，这里数据请保持为0！
        </el-descriptions-item>
      </el-descriptions>
    </el-form-item>
    <el-row class="formwrapper-class">
      <el-form-item label="Number of Issues">
        <el-input v-model="form.number" />
      </el-form-item>
      <el-form-item label="Draw Time">
        <el-input v-model="form.drawTime" />
      </el-form-item>
      <el-form-item label="Total Closing">
        <el-button type="primary" size="small">
          Closing...
        </el-button>
      </el-form-item>
      <el-form-item label="Total Auto-sealing Time">
        <el-input v-model="form.autosealing" />
      </el-form-item>
      <el-form-item label="Automatic Opening Time" class="autoOpen-class">
        <el-input v-model="form.autoOpeningtime" />
        <el-radio label="warning" class="ml-4">
          (是否充许自动开盘)*(如果开始设成了自动开盘，那自动开盘后这勾会自动变成不打勾！)
        </el-radio>
      </el-form-item>
    </el-row>
  </el-form>
</template>
<script lang="ts" setup>
import { Top } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
const form = reactive({
  number: '2023021',
  drawTime: '2023-02-25 21:32:00',
  autosealing: '2023-02-25 21:29:00',
  autoOpeningtime: '2023-02-24 22:30:00',
})
</script>
<style lang="scss" scoped>
.lotteryBall-class {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 10px;
}
.formwrapper-class {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.formwrapper-class .el-form-item {
  padding: 0 10px;
  width: 48%;
}
</style>
