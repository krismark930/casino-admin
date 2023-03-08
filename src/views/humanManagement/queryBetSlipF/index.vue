<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>查询注单(捕鱼王)</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item label="真人账号">
        <el-input
          clearable
          v-model="formData.liveAccount"
          placeholder=""
        ></el-input>
      </el-form-item>
      <el-form-item label="注单日期">
        <el-date-picker
          v-model="formData.betDate"
          placeholder=""
          value-format="YYYY-MM-DD"
          style="width: 150px;"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary">确认</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="queryBetSlipFData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column type="index" label="编号" align="center" />
      <el-table-column property="liveAccount" label="真人帐号" align="center" />
      <el-table-column
        property="transactionNumber"
        label="交易编号"
        align="center"
      />
      <el-table-column property="sceneID" label="场景ID" align="center" />
      <el-table-column property="roomNumber" label="房间号" align="center" />
      <el-table-column
        property="roomMagnification"
        label="房間倍率"
        align="center"
      />
      <el-table-column label="开始时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.startingTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="结束时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.endTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="type" label="类型" align="center" />
      <el-table-column property="betAmount" label="投注金额" align="center" />
      <el-table-column
        property="payoutAmount"
        label="派彩金额"
        align="center"
      />
      <el-table-column
        property="jackpotPool"
        label="Jackpot彩池"
        align="center"
      />
      <el-table-column
        property="whetherRebate"
        label="是否返水"
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
        betDate: '',
        liveAccount: '',
      },
      queryBetSlipFData: [
        {
          liveAccount: '',
          transactionNumber: '',
          sceneID: '',
          roomNumber: '',
          roomMagnification: '',
          startingTime: '',
          endTime: '',
          type: '',
          betType: '',
          betAmount: '',
          payoutAmount: '',
          jackpotPool: '',
          whetherRebate: '',
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
