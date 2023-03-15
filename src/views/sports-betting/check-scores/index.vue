<template>
  <router-view></router-view>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>{{ $t('menu.checkScores2') }}</h3>
    <el-form :inline="true" :model="formData" ref="form">
      <div>
        <el-form-item label="类别">
          <el-select v-model="formData.type" placeholder="">
            <el-option
              v-for="item in types"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="查看方式">
          <el-select v-model="formData.viewType" placeholder="">
            <el-option
              v-for="item in viewTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="比赛日期" prop="m_date">
          <el-date-picker
            v-model="formData.m_date"
            placeholder=""
            value-format="YYYY-MM-DD"
          ></el-date-picker>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">全部显示</el-button>
          <el-button type="danger">全部关闭</el-button>
        </el-form-item>
      </div>

      <div>
        <el-form-item label="选择联盟">
          <el-select v-model="formData.league" placeholder="">
            <el-option
              v-for="item in leagues"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="关键字">
          <el-input
            clearable
            v-model="formData.keyword"
            placeholder=""
          ></el-input>
        </el-form-item>

        <el-form-item @click="submit">
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </div>
    </el-form>

    <el-table
      v-loading="loading"
      :data="bettingRecords"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column
        property="competition"
        :label="formData.m_date + '--赛事'"
        align="center"
      >
        <template #default="scope">
          <p>{{ scope.row.M_League }} MID: {{ scope.row.MID }}</p>
        </template>
      </el-table-column>

      <el-table-column label="时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.M_Time }}</span>
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

      <el-table-column
        property="receiveScore"
        label="接收比分"
        align="center"
      ></el-table-column>

      <el-table-column property="eventCanceled" label="赛事取消" align="center">
        <template #default="scope">
          <el-select
            placeholder="赛事处理"
            v-model="eventHandles[scope.$index]"
          >
            <el-option
              v-for="item in events"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
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
          <span v-if="scope.row.Inball">
            <el-link href="/check-scores2/operate">开盘</el-link>
          </span>
          <span v-else>
            <p>正常</p>
          </span>
        </template>
      </el-table-column>

      <el-table-column property="state" label="状态" align="center">
        <template #default="scope">
          <el-button type="danger" @click="() => closeBet(scope.row.MID)">
            注单
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="100" />
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { GetItems } from '@/api/sports/check-scores2'
import ChangeLang from '@/layout/components/Topbar/ChangeLang.vue'
import { checkScores } from '@/i18n'
import { formatDate } from '@/utils'

export default defineComponent({
  components: { ChangeLang },
  name: 'checkScores2',
  setup() {
    const router = useRouter()
    const state = reactive({
      formData: {
        m_date: formatDate(new Date()),
        keyword: '',
        type: 'FT',
        viewType: '只显示有投注',
        league: '赛事处理',
      },
      types: checkScores.types,
      leagues: checkScores.leagues,
      viewTypes: checkScores.viewTypes,
      events: checkScores.events,
      eventHandles: [],
      loading: false,
      form: ref(null),
      bettingRecords: [],
      submit: () => {
        if (state.loading) {
          return
        }

        state.loading = true
        GetItems(state.formData)
          .then(data => {
            console.log(data)
            state.bettingRecords = [...data]
            state.loading = false
          })
          .catch(err => {
            console.log(err)
            state.loading = false
          })
      },
      toBetSlip: id => {
        router.push('/check-scores2/bet-slip/' + id)
      },
      toOperation: id => {
        router.push('/check-scores2/operate/' + id)
      },
      closeBet: id => {},
    })

    onBeforeMount(() => {
      state.submit()
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>
<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}
</style>
