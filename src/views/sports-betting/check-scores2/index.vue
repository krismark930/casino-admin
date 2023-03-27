<template>
  <router-view></router-view>
  <div style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;">
    <h3>{{ $t('menu.checkScores2') }}</h3>
    <el-form :inline="true" ref="form">
      <div>
        <el-form-item label="类别">
          <el-select v-model="type" placeholder="">
            <el-option v-for="item in types" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="查看方式">
          <el-select v-model="viewType" placeholder="">
            <el-option v-for="item in viewTypes" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="比赛日期" prop="m_date">
          <el-date-picker v-model="m_date" placeholder="" value-format="YYYY-MM-DD"></el-date-picker>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="updateSportOpen(1)">全部显示</el-button>
          <el-button type="danger" @click="updateSportOpen(0)">全部关闭</el-button>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="选择联盟">
          <el-select v-model="league" placeholder="">
            <el-option v-for="item in leagueList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="关键字">
          <el-input clearable v-model="keyword" placeholder=""></el-input>
        </el-form-item>

        <el-form-item @click="handleSearch">
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </div>
    </el-form>

    <el-table v-loading="loading" :data="todaySportListByOrder" style="width: 100%;" border header-align="center" stripe>
      <el-table-column property="competition" :label="m_date + '--赛事'" align="center">
        <template #default="scope">
          <p>{{ scope.row.M_League }} MID: {{ scope.row.MID }}</p>
        </template>
      </el-table-column>

      <el-table-column label="时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon>
              <timer />
            </el-icon>
            <span style="margin-left: 10px">{{ scope.row.M_Date }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column property="homeTeam" label="主场队伍" align="center">
        <template #default="scope">
          <p>{{ scope.row.MB_Team }}</p>
        </template>
      </el-table-column>

      <el-table-column property="fullTimeScore" label="全场比分" align="center">
        <template #default="scope">
          <p style="color: red;">
            <b>{{ scope.row.MB_Inball }} - {{ scope.row.TG_Inball }}</b>
          </p>
        </template>
      </el-table-column>

      <el-table-column property="awayTeam" label="客场队伍" align="center">
        <template #default="scope">
          <p>{{ scope.row.TG_Team }}</p>
        </template>
      </el-table-column>

      <el-table-column property="halfTimeScore" label="半场比分" align="center">
        <template #default="scope">
          <p style="color: red;">
            <b>{{ scope.row.MB_Inball_HR }} - {{ scope.row.TG_Inball_HR }}</b>
          </p>
        </template>
      </el-table-column>

      <el-table-column property="receiveScore" label="接收比分" align="center"></el-table-column>

      <el-table-column property="eventCanceled" label="赛事取消" align="center">
        <template #default="scope">
          <el-select placeholder="赛事处理" v-model="eventValue" @change="updateSportEvent(scope.row.MID)">
            <el-option v-for="item in events" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </template>
      </el-table-column>

      <el-table-column property="betSlip" label="注单" align="center">
        <template #default="scope">
          <el-button type="primary" @click="() => toBetSlip(scope.row.MID)">
            注单
          </el-button>
        </template>
      </el-table-column>

      <el-table-column property="operate" label="操作" align="center">
        <template #default="scope">
          <el-button type="primary" @click="() => toOperation(scope.row.MID)">
            结算
          </el-button>
          <p v-if="scope.row.Checked">
            二次
            <br />
            比分
          </p>
        </template>
      </el-table-column>

      <el-table-column property="show" label="显示" align="center">
        <template #default="scope">
          <span v-if="scope.row.MB_Inball != ''">
            <el-link @click="betResumption(scope.row.MID)">恢复</el-link>
          </span>
          <span v-else>
            <p>正常</p>
          </span>
        </template>
      </el-table-column>

      <el-table-column property="state" label="状态" align="center">
        <template #default="scope">
          <el-button type="primary" v-if="scope.row.Open === 1" @click="() => closeBet(scope.row.MID, 0)">
            开盘
          </el-button>
          <el-button type="danger" v-else @click="() => closeBet(scope.row.MID, 1)">
            关盘
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="visible" title="警告" width="30%" center>
      <span>
        确实要 关闭 或 开启 本场比赛所有投注项目吗?
      </span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="visible = false">取消</el-button>
          <el-button type="primary" @click="updateOpenByMID">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="100" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ElNotification } from 'element-plus'
import { useRouter } from 'vue-router'
import { useCheckScore } from '@/pinia/modules/check_score';
import ChangeLang from '@/layout/components/Topbar/ChangeLang.vue'
import { checkScores } from '@/i18n'
import { formatDate } from '@/utils'

export default defineComponent({
  components: { ChangeLang },
  name: 'checkScores2',
  setup() {
    const router = useRouter()
    const { dispatchTodaySportListByOrder } = useCheckScore();
    const { dispatchLeagueByDate } = useCheckScore();
    const { dispatchSportOpen } = useCheckScore();
    const { dispatchBetResumption } = useCheckScore();
    const { dispatchBetEvent } = useCheckScore();
    return {
      router,
      dispatchTodaySportListByOrder,
      dispatchSportOpen,
      dispatchLeagueByDate,
      dispatchBetResumption,
      dispatchBetEvent
    }
  },
  data() {
    return {
      m_date: formatDate(new Date()),
      keyword: '',
      type: 'FT',
      viewType: 2,
      league: '',
      types: checkScores.types,
      viewTypes: checkScores.viewTypes,
      events: checkScores.events,
      loading: false,
      form: {},
      visible: false,
      mid: 0,
      open: 1,
      eventValue: 1
    }
  },
  computed: {
    success: function () {
      let { getSuccess } = useCheckScore();
      return getSuccess;
    },
    todaySportListByOrder: function () {
      let { getTodaySportListByOrder } = useCheckScore();
      return getTodaySportListByOrder;
    },
    leagueList: function () {
      let { getLeagueList } = useCheckScore();
      return getLeagueList;
    },
  },
  watch: {
    viewType: async function (newValue) {
      let formData = {
        m_date: this.m_date,
        search: this.keyword,
        g_type: this.type,
        display_type: newValue,
        league: this.league,
      };
      this.loading = true;
      await this.dispatchTodaySportListByOrder(formData)
      this.successResult();
    },
    m_date: async function (newValue) {
      let formData = {
        m_date: newValue,
        search: this.keyword,
        g_type: this.type,
        display_type: this.viewType,
        league: this.league,
      };
      this.loading = true;
      await this.dispatchTodaySportListByOrder(formData)
      await this.dispatchLeagueByDate(formData)
      this.successResult();
    },
    type: async function (newValue) {
      let formData = {
        m_date: this.m_date,
        search: this.keyword,
        g_type: newValue,
        display_type: this.viewType,
        league: this.league,
      };
      this.loading = true;
      await this.dispatchTodaySportListByOrder(formData)
      await this.dispatchLeagueByDate(formData)
      this.successResult();
    },
    league: async function (newValue) {
      let formData = {
        m_date: this.m_date,
        search: this.keyword,
        g_type: this.type,
        display_type: this.viewType,
        league: newValue,
      };
      this.loading = true;
      await this.dispatchTodaySportListByOrder(formData);
      this.successResult();
    }
  },
  methods: {
    toBetSlip: function (id) {
      this.router.push({ name: 'check-scores2.bet-slip', query: { gid: id, bet_date: this.m_date, gtype: "FT" } })
    },
    toOperation: function (id) {
      this.router.push('/check-scores2/operate/' + id)
    },
    closeBet: async function (mid, open) {
      this.visible = true;
      this.mid = mid;
      this.open = open
    },
    updateOpenByMID: async function () {
      this.visible = false;
      this.loading = true;
      let formData = {
        m_date: this.m_date,
        search: this.keyword,
        g_type: this.type,
        display_type: this.viewType,
        league: this.league,
      };
      await this.dispatchSportOpen({ m_date: this.m_date, g_type: this.type, open: this.open, mid: this.mid });
      await this.dispatchTodaySportListByOrder(formData)
      this.successResult();
    },
    successResult: function () {
      if (this.success) {
        ElNotification({
          title: '成功',
          message: '操作成功。',
          type: 'success',
        })
      } else {
        ElNotification({
          title: '错误',
          message: '操作失败。',
          type: 'error',
        })
      }
      this.loading = false;
    },
    updateSportOpen: async function (open) {
      this.loading = true;
      let formData = {
        m_date: this.m_date,
        search: this.keyword,
        g_type: this.type,
        display_type: this.viewType,
        league: this.league,
      };
      await this.dispatchSportOpen({ m_date: this.m_date, g_type: this.type, open: open });
      await this.dispatchTodaySportListByOrder(formData)
      this.successResult();
    },
    handleSearch: async function () {
      let formData = {
        m_date: this.m_date,
        search: this.keyword,
        g_type: this.type,
        display_type: this.viewType,
        league: this.league,
      };
      this.loading = true;
      await this.dispatchTodaySportListByOrder(formData);
      this.successResult();
    },
    betResumption: async function (mid) {
      this.mid = mid;
      this.loading = true;
      await this.dispatchBetResumption({ mid: this.mid, g_type: this.type });
      this.successResult();
    },
    updateSportEvent: async function (mid) {
      console.log(mid, this.eventValue);
      this.loading = true;
      await this.dispatchBetEvent({ g_type: this.type, mid: mid, confirmed: this.eventValue });
      this.successResult();
    }
  },
  async mounted() {
    let formData = {
      m_date: formatDate(new Date()),
      search: this.keyword,
      g_type: this.type,
      display_type: this.viewType,
      league: this.league,
    };
    this.loading = true;
    await this.dispatchTodaySportListByOrder(formData)
    await this.dispatchLeagueByDate(formData)
    if (this.success) {
      ElNotification({
        title: '成功',
        message: '操作成功。',
        type: 'success',
      })
    } else {
      ElNotification({
        title: '错误',
        message: '操作失败。',
        type: 'error',
      })
    }
    this.loading = false;
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
