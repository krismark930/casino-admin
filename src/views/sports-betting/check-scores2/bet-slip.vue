<template>
  <div style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;">
    <h3>{{ $t('menu.checkScores2') }}</h3>
    <el-table v-loading="loading" :data="report" style="width: 100%;" border header-align="center" stripe>
      <el-table-column property="bettingTime" label="投注时间" align="center">
        <template #default="scope">
          <p v-html="scope.row.bettimes"></p>
        </template>
      </el-table-column>
      <el-table-column property="userName" label="用户名称" align="center">
        <template #default="scope">
          {{ scope.row.M_Name }}<br>
          <font color="#cc0000">
            {{ scope.row.OpenType }}&nbsp;&nbsp;{{ scope.row.TurnRate }}
          </font>
        </template>
      </el-table-column>
      <el-table-column property="gameType" label="球赛种类" align="center">
        <template #default="scope">
          {{ scope.row.Title + scope.row.BetType }}
          <span v-html="scope.row.Odds"></span><br>
          <font color="#0000CC">
            {{ scope.row.voucher }}
          </font>
        </template>
      </el-table-column>
      <el-table-column property="content" label="內容" align="right">
        <template #default="scope">
          <p v-html="scope.row.Middle"></p>
        </template>
      </el-table-column>
      <el-table-column property="betAmount" label="投注金额" align="right">
        <template #default="scope">
          {{ scope.row.betscore }}
        </template>
      </el-table-column>
      <el-table-column property="memberreport" label="会员结果" align="right">
        <template #default="scope">
          {{ scope.row.M_report }}
        </template>
      </el-table-column>
      <el-table-column property="operate" label="操作" align="center">
        <template #default="scope">
          <p v-html="scope.row.operate"></p>
        </template>
      </el-table-column>
      <el-table-column property="function" label="功能" align="center">
        <template #default="scope">
          <el-select value-key="" placeholder="注单处理" clearable filterable>
            <el-option v-for="item in scope.row.function" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useCheckScore } from '@/pinia/modules/check_score';
import ChangeLang from '@/layout/components/Topbar/ChangeLang.vue'

export default defineComponent({
  components: { ChangeLang },
  name: 'checkScores2Operate',
  setup() {
    const router = useRouter()
    const route = useRoute();
    const { dispatchBetSlipList } = useCheckScore();

    return {
      router,
      route,
      dispatchBetSlipList
    }
  },
  data() {
    return {
      loading: false,
      report: [],
      sport: {},
    }
  },
  computed: {
    success: function () {
      let { getSuccess } = useCheckScore();
      return getSuccess;
    },
    betSlipList: function () {
      let { getBetSlipList } = useCheckScore();
      return getBetSlipList;
    }
  },
  methods: {
    goBeforePage: function () {
      this.router.go(-1)
    }
  },
  async mounted() {
    console.log(this.route.query);
    this.loading = true;
    await this.dispatchBetSlipList(this.route.query)
    this.loading = false;
    console.log(this.betSlipList);
    this.sport = this.betSlipList.sport;
    this.report = this.betSlipList.report;
  }
})
</script>
<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}
</style>