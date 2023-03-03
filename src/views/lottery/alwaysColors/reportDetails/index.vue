<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <h3>报表明细</h3>
    <el-form :inline="true" :model="formData">
      <div>
        <el-form-item label="日期">
          <el-date-picker
            v-model="formData.daterange"
            type="daterange"
            range-separator="~"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
        </el-form-item>
        <el-form-item label="" style="display: inline-flex;">
          <el-button type="primary">今日</el-button>
          <el-button type="primary">昨日</el-button>
          <el-button type="primary">本周</el-button>
          <el-button type="primary">上周</el-button>
          <el-button type="primary">本月</el-button>
          <el-button type="primary">上月</el-button>
          <el-button type="primary">最近7天</el-button>
          <el-button type="primary">最近30天</el-button>
        </el-form-item>
        <el-form-item label="">
          <el-select
            v-model="formData.monthOption"
            style="width: 100px;"
            placeholder="选择月份"
          >
            <el-option
              v-for="item in monthOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="用户名">
          <el-input
            v-model="formData.userName"
            placeholder="(多个用户用 , 隔开)"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="忽略用户名">
          <el-input
            v-model="formData.ignoreUserName"
            placeholder="(多个用户用 , 隔开)"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-table
      :data="reportDetailsData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column property="gameName" label="游戏名称" align="center" />
      <el-table-column property="numberofBet" label="下注笔数" align="center" />
      <el-table-column property="betAmount" label="下注金额" align="center" />
      <el-table-column
        property="effectiveAmount"
        label="有效金额"
        align="center"
      />
      <el-table-column
        property="memberResult"
        label="会员结果"
        align="center"
      />
      <el-table-column property="winAmount" label="赢取金额" align="center" />
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
        daterange: '',
        monthOption: '',
        userName: '',
        ignoreUserName: '',
      },
      reportDetailsData: [
        {
          gameName: '3D彩 ',
          numberofBet: '0',
          betAmount: '0.00',
          effectiveAmount: '0.00',
          memberResult: '0',
          winAmount: '0',
        },
      ],
      monthOptions: [
        {
          value: '1',
          label: '1月',
        },
        {
          value: '2',
          label: '2月',
        },
        {
          value: '3',
          label: '3月',
        },
        {
          value: '4',
          label: '4月',
        },
        {
          value: '5',
          label: '5月',
        },
        {
          value: '6',
          label: '6月',
        },
        {
          value: '7',
          label: '7月',
        },
        {
          value: '8',
          label: '8月',
        },
        {
          value: '9',
          label: '9月',
        },
        {
          value: '10',
          label: '10月',
        },
        {
          value: '11',
          label: '11月',
        },
        {
          value: '12',
          label: '12月',
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
