<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>報表(捕鱼王)</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item label="真人账号">
        <el-input
          clearable
          v-model="formData.liveAccount"
          placeholder=""
        ></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-date-picker
          v-model="formData.dateRange"
          type="datetimerange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary">确认</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="reportFData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column type="index" label="编号" align="center" />
      <el-table-column property="liveAccount" label="真人帐号" align="center" />
      <el-table-column property="penCount" label="笔数" align="center" />
      <el-table-column property="betAmount" label="投注金额" align="center" />
      <el-table-column
        property="memberResult"
        label="会员结果"
        align="center"
      />
      <el-table-column
        property="jackpotPrizePool"
        label="Jackpot奖池"
        align="center"
      />
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="100" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        dateRange: '',
        liveAccount: '',
      },
      reportFData: [
        {
          liveAccount: '',
          penCount: '',
          memberResult: '',
          betAmount: '',
          jackpotPrizePool: '',
        },
      ],
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}
</style>
