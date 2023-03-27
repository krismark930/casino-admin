<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <h3>足球</h3>
    <el-form :inline="true" :model="formData">
      <div>
        <el-form-item label="线上操盘">
          <el-select v-model="formData.onlineTrading" style="width: 80px;">
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
      </div>
    </el-form>
  </div>
  <div style="padding: 0.75rem;">
    <el-tabs v-model="activeName" class="parameter-tabs">
      <el-tab-pane label="单式" name="S">
        <STable
          :onlineTrading="formData.onlineTrading"
          :leagueList="leagueList"
          :isActive="activeName === 'S'"
        />
      </el-tab-pane>
      <el-tab-pane label="滚球" name="H">
        <HTable
          :onlineTrading="formData.onlineTrading"
          :leagueList="leagueList"
          :isActive="activeName === 'H'"
        />
      </el-tab-pane>
      <!--<el-tab-pane label="波胆" name="PD"><STable /></el-tab-pane>
      <el-tab-pane label="上半波胆" name="HPD"><STable /></el-tab-pane>
      <el-tab-pane label="总入球" name="T"><STable /></el-tab-pane>
      <el-tab-pane label="半全场" name="F"><STable /></el-tab-pane>
      <el-tab-pane label="过关" name="P"><STable /></el-tab-pane>
      <el-tab-pane label="已开赛" name="PL"><STable /></el-tab-pane> -->
    </el-tabs>
  </div>
</template>
<script setup>
import STable from '@/views/sports-betting/sportsEvent/football/STable.vue'
import HTable from '@/views/sports-betting/sportsEvent/football/HTable.vue'
</script>
<script>
import { ref } from 'vue'
import { GetLeagueList } from '@/api/sports/real-wagger'
export default {
  data() {
    return {
      formData: {
        onlineTrading: '1',
        reorganizeOption: '不更新',
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
      activeName: ref('S'),
      leagueList: [
        {
          value: '',
          label: '全部',
        },
      ],
      currentTab: [],
    }
  },
  mounted() {
    this.getLeagueList()
  },
  watch: {
    activeName(newProp, oldProp) {
      console.log('index', this.activeName)
    },
  },
  methods: {
    getLeagueList() {
      GetLeagueList()
        .then(res => {
          this.leagueList = [...this.leagueList, ...res]
        })
        .catch(err => {})
    },
  },
}
</script>
<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}
</style>
