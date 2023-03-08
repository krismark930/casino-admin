<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>報表(开元棋牌)</h3>
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
      <el-form-item label="投注类型">
        <el-select v-model="formData.typeOption" style="width: 150px;">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary">确认</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="reportKData"
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
        property="validStake"
        label="有效投注额"
        align="center"
      />
      <el-table-column
        property="memberResult"
        label="会员结果"
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
        typeOption: '',
      },
      reportKData: [
        {
          liveAccount: '',
          penCount: '',
          memberResult: '',
          betAmount: '',
          validStake: '',
        },
      ],
      typeOptions: [
        {
          value: '全部',
          label: '全部',
        },
        {
          value: '十三水',
          label: '十三水',
        },
        {
          value: '斗地主',
          label: '斗地主',
        },
        {
          value: '百人牛牛',
          label: '百人牛牛',
        },
        {
          value: '森林舞会',
          label: '森林舞会',
        },
        {
          value: '百家乐',
          label: '百家乐',
        },
        {
          value: '血流成河',
          label: '血流成河',
        },
        {
          value: '万人炸金花',
          label: '万人炸金花',
        },
        {
          value: '抢庄牌九',
          label: '抢庄牌九',
        },
        {
          value: '极速炸金花',
          label: '极速炸金花',
        },
        {
          value: '通比牛牛',
          label: '通比牛牛',
        },
        {
          value: '21点',
          label: '21点',
        },
        {
          value: '押庄龙虎',
          label: '押庄龙虎',
        },
        {
          value: '三公',
          label: '三公',
        },
        {
          value: '炸金花',
          label: '炸金花',
        },
        {
          value: '抢庄牛牛',
          label: '抢庄牛牛',
        },
        {
          value: '二八杠',
          label: '二八杠',
        },
        {
          value: '德州扑克',
          label: '德州扑克',
        },
        {
          value: '押宝抢庄牛牛',
          label: '押宝抢庄牛牛',
        },
        {
          value: '炸金牛',
          label: '炸金牛',
        },
        {
          value: '单挑牛牛',
          label: '单挑牛牛',
        },
        {
          value: '百人骰宝',
          label: '百人骰宝',
        },
        {
          value: '红包捕鱼',
          label: '红包捕鱼',
        },
        {
          value: '奔驰宝马',
          label: '奔驰宝马',
        },
        {
          value: '二人麻将',
          label: '二人麻将',
        },
        {
          value: '金鲨银鲨',
          label: '金鲨银鲨',
        },
        {
          value: '看牌抢庄牛牛',
          label: '看牌抢庄牛牛',
        },
        {
          value: '五星宏辉',
          label: '五星宏辉',
        },
        {
          value: '血战骰宝',
          label: '血战骰宝',
        },
        {
          value: '幸运转盘',
          label: '幸运转盘',
        },
        {
          value: '赌场扑克',
          label: '赌场扑克',
        },
        {
          value: '港式梭哈',
          label: '港式梭哈',
        },
        {
          value: '水果机',
          label: '水果机',
        },
        {
          value: '鱼虾蟹',
          label: '鱼虾蟹  ',
        },
        {
          value: '跑得快',
          label: '跑得快',
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
