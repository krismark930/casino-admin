<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <h3>足球</h3>
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
          <el-button type="primary" link>波胆</el-button>
          <el-button type="primary" link>上半波胆</el-button>
          <el-button type="primary" link>总入球</el-button>
          <el-button type="primary" link>半全场</el-button>
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
        {
          value: '丹麦杯',
          label: '丹麦杯',
        },
        {
          value: '亚足联U20亚洲杯2023(在乌兹别克)',
          label: '亚足联U20亚洲杯2023(在乌兹别克)',
        },
        {
          value: '以色列乙组联赛',
          label: '以色列乙组联赛',
        },
        {
          value: '冰岛联赛杯',
          label: '冰岛联赛杯',
        },
        {
          value: '匈牙利杯',
          label: '匈牙利杯',
        },
        {
          value: '南美自由杯',
          label: '南美自由杯',
        },
        {
          value: '南非杯',
          label: '南非杯',
        },
        {
          value: '卡塔尔甲组联赛',
          label: '卡塔尔甲组联赛',
        },
        {
          value: '印尼甲组联赛',
          label: '印尼甲组联赛',
        },
        {
          value: '印度I联赛',
          label: '印度I联赛',
        },
        {
          value: '哥伦比亚乙组联赛',
          label: '哥伦比亚乙组联赛',
        },
        {
          value: '哥伦比亚女子甲组联赛',
          label: '哥伦比亚女子甲组联赛',
        },
        {
          value: '埃及乙组联赛',
          label: '埃及乙组联赛',
        },
        {
          value: '塞尔维亚甲组联赛',
          label: '塞尔维亚甲组联赛',
        },
        {
          value: '塞尔维亚超级联赛',
          label: '塞尔维亚超级联赛',
        },
        {
          value: '塞浦路斯杯',
          label: '塞浦路斯杯',
        },
        {
          value: '墨西哥甲组联赛',
          label: '墨西哥甲组联赛',
        },
        {
          value: '奇幻赛事',
          label: '奇幻赛事',
        },
        {
          value: '巴拉圭甲组联赛',
          label: '巴拉圭甲组联赛',
        },
        {
          value: '巴林超级联赛',
          label: '巴林超级联赛',
        },
        {
          value: '巴西卡皮沙巴甲组联赛',
          label: '巴西卡皮沙巴甲组联赛',
        },
        {
          value: '巴西塞阿仁斯乙组联赛',
          label: '巴西塞阿仁斯乙组联赛',
        },
        {
          value: '巴西杯',
          label: '巴西杯',
        },
        {
          value: '巴西锦标赛U20',
          label: '巴西锦标赛U20',
        },
        {
          value: '意大利丙组联赛杯',
          label: '意大利丙组联赛杯',
        },
        {
          value: '斯洛文尼亚乙组联赛',
          label: '斯洛文尼亚乙组联赛',
        },
        {
          value: '巴林超级联赛',
          label: '巴林超级联赛',
        },
        {
          value: '巴西卡皮沙巴甲组联赛',
          label: '巴西卡皮沙巴甲组联赛',
        },
        {
          value: '巴西塞阿仁斯乙组联赛',
          label: '巴西塞阿仁斯乙组联赛',
        },
        {
          value: '智利甲组联赛',
          label: '智利甲组联赛',
        },
        {
          value: '比利时杯',
          label: '比利时杯',
        },
        {
          value: '沙特超级联赛',
          label: '沙特超级联赛',
        },
        {
          value: '瑞士杯',
          label: '瑞士杯',
        },
        {
          value: '科威特超级联赛',
          label: '科威特超级联赛',
        },
        {
          value: '突尼斯甲组联赛-附加赛',
          label: '突尼斯甲组联赛-附加赛',
        },
        {
          value: '罗马尼亚甲组联赛',
          label: '罗马尼亚甲组联赛',
        },
        {
          value: '荷兰KNVB杯',
          label: '荷兰KNVB杯',
        },
        {
          value: '萨尔瓦多甲组联赛',
          label: '萨尔瓦多甲组联赛',
        },
        {
          value: '西班牙杯',
          label: '西班牙杯',
        },
        {
          value: '阿根廷后备联赛',
          label: '阿根廷后备联赛',
        },
        {
          value: '阿联酋超级联赛',
          label: '阿联酋超级联赛',
        },
        {
          value: '非洲U20国家杯2023(在埃及)',
          label: '非洲U20国家杯2023(在埃及)',
        },
        {
          value: '马来西亚超级联赛',
          label: '马来西亚超级联赛',
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
