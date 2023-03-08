<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>查询注单(开元棋牌)</h3>
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
      <el-form-item label="类型">
        <el-select v-model="formData.typeOption" style="width: 150px;">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-table
      :data="queryBetSlipKData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column type="index" label="编号" align="center" />
      <el-table-column property="liveAccount" label="真人帐号" align="center" />
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
      <el-table-column property="gameContent" label="游戏内容" align="center" />
      <el-table-column
        property="rebateStatus"
        label="返水状态"
        align="center"
      />
      <el-table-column property="betAmount" label="投注金额" align="center" />
      <el-table-column
        property="validStake"
        label="有效投注额"
        align="center"
      />
      <el-table-column property="profit" label="盈利" align="center" />
      <el-table-column property="toPumpWater" label="抽水" align="center" />
      <el-table-column property="gameNumber" label="游戏局号" align="center" />
      <el-table-column property="numberOfPeople" label="人数" align="center" />
      <el-table-column property="room" label="房间" align="center" />
      <el-table-column property="tableNumber" label="桌号" align="center" />
      <el-table-column property="seat" label="座位" align="center" />
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
        typeOption: '',
      },
      queryBetSlipKData: [
        {
          liveAccount: '',
          startingTime: '',
          endTime: '',
          gameContent: '',
          betType: '',
          rebateStatus: '',
          betAmount: '',
          validStake: '',
          profit: '',
          toPumpWater: '',
          numberOfPeople: '',
          room: '',
          seat: '',
          gameNumber: '',
          tableNumber: '',
        },
      ],
      typeOptions: [
        {
          value: '全部',
          label: '全部',
        },
        {
          value: '百家乐',
          label: '百家乐',
        },
        {
          value: '包桌百家乐',
          label: '包桌百家乐',
        },
        {
          value: '连环百家乐',
          label: '连环百家乐',
        },
        {
          value: '标准百家乐',
          label: '标准百家乐',
        },
        {
          value: '免佣百家乐',
          label: '免佣百家乐',
        },
        {
          value: '超级百家乐',
          label: '超级百家乐',
        },
        {
          value: '标准连环百家乐',
          label: '标准连环百家乐',
        },
        {
          value: '免佣连环百家乐',
          label: '免佣连环百家乐',
        },
        {
          value: '德州',
          label: '德州',
        },
        {
          value: '龙虎',
          label: '龙虎',
        },
        {
          value: '骰宝',
          label: '骰宝',
        },
        {
          value: '轮盘',
          label: '轮盘',
        },
        {
          value: '番摊',
          label: '番摊',
        },
        {
          value: '竞咪百家乐',
          label: '竞咪百家乐',
        },
        {
          value: '终极德州扑克',
          label: '终极德州扑克',
        },
        {
          value: '保險百家樂',
          label: '保險百家樂',
        },
        {
          value: '牛牛',
          label: '牛牛',
        },
        {
          value: '21点',
          label: '21点',
        },
        {
          value: '炸金花',
          label: '炸金花',
        },
        {
          value: '电子游艺',
          label: '电子游艺',
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
