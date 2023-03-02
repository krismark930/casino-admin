<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <h3>棒球</h3>
    <el-form :inline="true" :model="formData">
      <div>
        <el-form-item label="线上操盘">
          <el-select
            v-model="formData.onlineTradingOption"
            style="width: 80px;"
          >
            <el-option
              v-for="item in onlineTradingOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="重新整理">
          <el-select v-model="formData.reorganizeOption" style="width: 100px;">
            <el-option
              v-for="item in reorganizeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="美东时间">
          <span>2023-03-02 02:36:32</span>
        </el-form-item>
        <el-form-item label="" style="display: inline-flex;">
          <el-button type="primary" link>单式</el-button>
          <el-button type="primary" link>上半场</el-button>
          <el-button type="primary" link>滚球</el-button>
          <el-button type="primary" link>过关</el-button>
          <el-button type="primary" link>已开赛</el-button>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="观看方式">
          <el-select v-model="formData.viewOption" style="width: 80px;">
            <el-option
              v-for="item in viewOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择联盟">
          <el-select v-model="formData.allianceOption">
            <el-option
              v-for="item in allianceOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
    </el-form>
    <el-table
      :data="footballData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column label="时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.time }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="alliance" label="联盟" align="center" />
      <el-table-column property="sessions" label="场次" align="center" />
      <el-table-column property="team" label="队伍" align="center" />
      <el-table-column property="winBet" label="独赢 / 注单" align="center" />
      <el-table-column
        property="handicapBet"
        label="让球 / 注单"
        align="center"
      />
      <el-table-column
        property="plateBetSlip"
        label="大小盘 / 注单"
        align="center"
      />
      <el-table-column property="oddBet" label="单双 / 注单" align="center" />
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
        onlineTradingOption: 'C盘',
        reorganizeOption: '不更新',
        viewOption: '全部',
        allianceOption: '全部',
      },
      footballData: [
        {
          id: 1,
          time: '',
          alliance: '',
          sessions: '',
          team: '',
          winBet: '',
          handicapBet: '',
          plateBetSlip: '',
          oddBet: '',
        },
      ],
      onlineTradingOptions: [
        {
          value: '1',
          label: 'A盘',
        },
        {
          value: '2',
          label: 'B盘',
        },
        {
          value: '3',
          label: 'C盘',
        },
        {
          value: '4',
          label: 'D盘',
        },
      ],
      reorganizeOptions: [
        {
          value: '-1',
          label: '不更新',
        },
        {
          value: '180',
          label: '180 sec',
        },
      ],
      viewOptions: [
        {
          value: '0',
          label: '全部',
        },
        {
          value: '1',
          label: '自己',
        },
      ],
      allianceOptions: [
        {
          value: '全部',
          label: '全部',
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
