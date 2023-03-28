<template>
  <div style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;">
    <h3>{{ $t('menu.checkScores2') }}</h3>

    <el-form :inline="true" ref="form" v-if="!step">
      <el-table v-loading="loading" :data="[item]" style="width: 100%;" border header-align="center" stripe>
        <el-table-column property="league" :label="item.M_League" header-align="center">
          <el-table-column property="time" :label="checkScores.TIME" align="center">
            <p>
              {{ item.M_Date }}
              <br />
              {{ item.M_Time }}
            </p>
          </el-table-column>
          <el-table-column property="teams" :label="checkScores.TEAM_NAMES" align="center">
            <div style="display: flex; flex-direction: column; align-items: baseline; justify-content: space-around;">
              <p>{{ item.MB_Team }}</p>
              <p>{{ item.TG_Team }}</p>
            </div>
          </el-table-column>
          <el-table-column property="halfTimeScore" :label="checkScores.HALF_SCORE" align="center" width="180">
            <div style="display: flex; flex-direction: column; align-items: baseline; justify-content: space-between;">
              <el-form-item>
                <el-input-number v-model="item.MB_Inball_HR"></el-input-number>
              </el-form-item>
              <el-form-item style="margin: 0;">
                <el-input-number v-model="item.TG_Inball_HR"></el-input-number>
              </el-form-item>
            </div>
          </el-table-column>
          <el-table-column property="fullTimeScore" :label="checkScores.TOTAL_SCORE" align="center" width="180">
            <div style="display: flex; flex-direction: column; align-items: baseline; justify-content: space-between;">
              <el-form-item>
                <el-input-number v-model="item.MB_Inball"></el-input-number>
              </el-form-item>
              <el-form-item style="margin: 0;">
                <el-input-number v-model="item.TG_Inball"></el-input-number>
              </el-form-item>
            </div>
          </el-table-column>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px;">
        <el-form-item>
          <el-button type="primary" @click="checkScore">提 交</el-button>
          <el-button type="danger" @click="back">清 除</el-button>
        </el-form-item>
      </div>
    </el-form>

    <el-form :inline="true" ref="form1" v-if="step">
      <el-table v-loading="loading" :data="scores" style="width: 100%;" border header-align="center" stripe>
        <el-table-column property="release" label="发布" align="center">
          <template #default="scope">
            <el-checkbox label="" :indeterminate="false" v-model="check[scope.row.field_count]"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column property="bettingTime" :label="checkScores.BETTING_TIME" align="center">
          <template #default="scope">
            <font color="#cc0000" v-html="scope.row.times"></font>
          </template>
        </el-table-column>
        <el-table-column property="userName" :label="checkScores.USER_NAME" align="center" width="180">
          <template #default="scope">
            {{ scope.row.M_Name }}
            <br>
            <font color="#cc0000">{{ scope.row.OpenType }}</font>&nbsp;&nbsp;
            <font color="#cc0000">{{ scope.row.TurnRate }}</font>
          </template>
        </el-table-column>
        <el-table-column property="gameType" :label="checkScores.GAME_TYPE" align="center" width="180">
          <template #default="scope">
            {{ scope.row.Mnu_Soccer + scope.row.BetType + scope.row.Odds }}<br>
            <font color="#0000cc">{{ scope.row.voucher }}</font>
          </template>
        </el-table-column>
        <el-table-column property="content" :label="checkScores.CONTENT" align="center" width="180">
          <template #default="scope">
            <p v-html="scope.row.Middle"></p>
          </template>
        </el-table-column>
        <el-table-column property="betting" :label="checkScores.BETTING" align="center" width="180">
          <template #default="scope">
            {{ scope.row.BetScore }}
          </template>
        </el-table-column>
        <el-table-column property="accountResult" :label="checkScores.ACCOUNT_RESULT" align="center" width="180">
          <template #default="scope">
            {{ scope.row.d_point }}/{{ scope.row.c_point }}/{{ scope.row.b_point }}/{{ scope.row.a_point }}
          </template>
        </el-table-column>
        <el-table-column property="regression" :label="checkScores.REGRESSION" align="center" width="180">
          <template #default="scope">
            {{ scope.row.turn }}
          </template>
        </el-table-column>
        <el-table-column property="actualAmount" :label="checkScores.ACTUAL_AMOUNT" align="center" width="180">
          <template #default="scope">
            <el-form-item style="margin: 0;">
              <el-input v-model="scope.row.actual_amount"></el-input>
              <el-input v-model="scope.row.d_point" size="8" clearable type="hidden"></el-input>
              <el-input v-model="scope.row.c_point" size="8" clearable type="hidden"></el-input>
              <el-input v-model="scope.row.b_result" size="8" clearable type="hidden"></el-input>
              <el-input v-model="scope.row.pay_type" size="8" clearable type="hidden"></el-input>
              <el-input v-model="scope.row.memname" size="8" clearable type="hidden"></el-input>
              <el-input v-model="scope.row.BetScore" size="8" clearable type="hidden"></el-input>
              <el-input v-model="scope.row.id" size="8" clearable type="hidden"></el-input>
              <input :value="scope.row.mb_inball" name="MB_Inball" type="hidden" />
              <input :value="scope.row.tg_inball" name="TG_Inball" type="hidden" />
              <input :value="scope.row.mb_inball_v" name="MB_Inball_HR" type="hidden" />
              <input :value="scope.row.tg_inball_v" name="TG_Inball_HR" type="hidden" />
              <input :value="scope.row.gtype" name="gtype" type="hidden" />
              <input :value="scope.row.gid" name="gid" type="hidden" />
            </el-form-item>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px;">
        <el-form-item>
          <el-button type="primary" @click="saveScore">提 交</el-button>
          <el-button type="danger" @click="back">清 除</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { GetItemById, SaveScore, CheckScore } from '@/api/sports/check-scores2'
import ChangeLang from '@/layout/components/Topbar/ChangeLang.vue'
import { checkScores } from '@/i18n'

export default defineComponent({
  components: { ChangeLang },
  name: 'checkScores2Operate',
  setup() {
    const router = useRouter()
    const state = reactive({
      id: router.currentRoute._rawValue.params.id,
      step: 0,
      item: {},
      scores: [],
      check: [],
      loading: false,
      checkScores,
      form: ref(null),
      form1: ref(null),
      submit: () => {
        if (state.loading) {
          return
        }

        state.loading = true
        GetItemById({ id: state.id })
          .then(data => {
            state.item = data[0]
            state.item.MB_Inball = Number(state.item.MB_Inball)
            state.item.TG_Inball = Number(state.item.TG_Inball)
            state.item.MB_Inball_HR = Number(state.item.MB_Inball_HR)
            state.item.TG_Inball_HR = Number(state.item.TG_Inball_HR)
            state.loading = false
          })
          .catch(err => {
            console.log(err)
            state.loading = false
          })
      },
      checkScore: () => {
        console.log("ok");
        if (state.item.Score == 0) {
          if (!confirm('本场赛事已经结算,确定再次结算!')) {
            router.go(-1)
            return
          }
        }
        if (state.item.MB_Inball != '' || state.item.TG_Inball != '') {
          if (!confirm('本场赛事已经有比分，确定重新输入比分?')) {
            router.go(-1);
            return
          }
        }
        if (confirm(`主队半场进球数：${state.item.MB_Inball_HR}  主队全场进球数：${state.item.MB_Inball}\n\nn客队半场进球数: ${state.item.TG_Inball_HR}  客队全场进球数：${state.item.TG_Inball}\n\n请确定输入是否正确?`)) {
          state.loading = true
          CheckScore({ id: state.id, item: { ...state.item, 'type': 'FT' } })
            .then(res => {
              if (res.code == 'settled') {
                console.log(res.message)
              } else {
                state.scores = res
                state.scores.forEach(elem => {
                  state.check.push(true)
                })
              }
              state.step = 1
              state.loading = false
            })
            .catch(err => {
              console.log(err)
              state.loading = false
            })
        }
      },
      saveScore: () => {
        state.loading = true
        SaveScore({ id: state.id, item: state.item })
          .then(res => {
            if (res.code == 0) console.log(res.message)
            state.loading = false
            router.push('/check-scores2')
          })
          .catch(err => {
            console.log(err)
            state.loading = false
          })
      },
      back: () => {
        router.go(-1)
      },
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
