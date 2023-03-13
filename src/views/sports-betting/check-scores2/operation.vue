<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>{{ $t('menu.checkScores2') }}</h3>

    <el-form :inline="true" ref="form">
      <el-table
        v-loading="loading"
        :data="[item]"
        style="width: 100%;"
        border
        header-align="center"
        stripe
      >
        <el-table-column
          property="league"
          :label="item.M_League"
          header-align="center"
        >
          <el-table-column
            property="time"
            :label="checkScores.TIME"
            align="center"
          >
            <p>
              {{ item.M_Date }}
              <br />
              {{ item.M_Time }}
            </p>
          </el-table-column>
          <el-table-column
            property="teams"
            :label="checkScores.TEAM_NAMES"
            align="center"
          >
            <div
              style="display: flex; flex-direction: column; align-items: baseline; justify-content: space-around;"
            >
              <p>{{ item.MB_Team }}</p>
              <p>{{ item.TG_Team }}</p>
            </div>
          </el-table-column>
          <el-table-column
            property="halfTimeScore"
            :label="checkScores.HALF_SCORE"
            align="center"
            width="180"
          >
            <div
              style="display: flex; flex-direction: column; align-items: baseline; justify-content: space-between;"
            >
              <el-form-item>
                <el-input-number v-model="item.MB_Inball_HR"></el-input-number>
              </el-form-item>
              <el-form-item style="margin: 0;">
                <el-input-number v-model="item.TG_Inball_HR"></el-input-number>
              </el-form-item>
            </div>
          </el-table-column>
          <el-table-column
            property="fullTimeScore"
            :label="checkScores.TOTAL_SCORE"
            align="center"
            width="180"
          >
            <div
              style="display: flex; flex-direction: column; align-items: baseline; justify-content: space-between;"
            >
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
import { GetItemById, UpdateItem } from '@/api/sports/check-scores2'
import ChangeLang from '@/layout/components/Topbar/ChangeLang.vue'
import { checkScores } from '@/i18n'

export default defineComponent({
  components: { ChangeLang },
  name: 'checkScores2Operate',
  setup() {
    const router = useRouter()
    const state = reactive({
      id: router.currentRoute._rawValue.params.id,
      item: {},
      loading: false,
      checkScores,
      form: ref(null),
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
      saveScore: () => {
        state.loading = true
        UpdateItem({ id: state.id, item: state.item })
          .then(res => {
            if (res.code == 0) console.log(res.message)
            state.loading = false
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
