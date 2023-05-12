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
          {{ currentTime }}
        </el-form-item>
      </div>
    </el-form>
  </div>
  <div style="padding: 0.75rem;">
    <el-tabs v-model="tabName" class="parameter-tabs">
      <el-tab-pane label="单式" name="S">
        <STable
          :onlineTrading="formData.onlineTrading"
          :leagueList="leagueList"
          :isActive="activeName === 'S'"
          :updateTime="updateTime"
          :gtype="gtype"
        />
      </el-tab-pane>
      <el-tab-pane label="滚球" name="RB">
        <RBTable
          :onlineTrading="formData.onlineTrading"
          :leagueList="leagueList"
          :isActive="activeName === 'RB'"
          :updateTime="updateTime"
          :gtype="gtype"
        />
      </el-tab-pane>
      <el-tab-pane label="过关" name="P">
        <PTable
          :onlineTrading="formData.onlineTrading"
          :leagueList="leagueList"
          :isActive="activeName === 'P'"
          :updateTime="updateTime"
          :gtype="gtype"
        />
      </el-tab-pane>
      <el-tab-pane label="已开赛" name="PL">
        <PLTable
          :onlineTrading="formData.onlineTrading"
          :leagueList="leagueList"
          :isActive="activeName === 'PL'"
          :updateTime="updateTime"
          :gtype="gtype"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup>
import STable from '@/views/sports-betting/sportsEvent/tables/STable.vue'
import RBTable from '@/views/sports-betting/sportsEvent/tables/RBTable.vue'
import PTable from '@/views/sports-betting/sportsEvent/tables/PTable.vue'
import PLTable from '@/views/sports-betting/sportsEvent/tables/PLTable.vue'
import { ref, defineProps } from 'vue'
import { computed } from '@vue/reactivity'

const props = defineProps({
  isCurrentTab: {
    type: Boolean,
  },
})

const formData = {
  onlineTrading: '1',
  reorganizeOption: '不更新',
}
const onlineTradingOptions = [
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
]
const reorganizeOptions = [
  {
    value: '-1',
    label: '不更新',
  },
  {
    value: '180',
    label: '180 sec',
  },
]
const tabName = ref('S')
let time = ref(new Date())
const gtype = 'BK'

function updateTime() {
  time = new Date()
}

const currentTime = computed(() => {
  const timeArr = time.value.toISOString().split('T')
  return `${timeArr[0]} ${timeArr[1].slice(0, 8)}`
})

const activeName = computed(() => {
  return props.isCurrentTab ? tabName.value : ''
})
</script>
<!-- <script>
import { ref } from 'vue'
import { GetLeagueList } from '@/api/sports/real-wagger'
export default {
  props: ['isCurrentTab'],
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
      tabName: ref('S'),
      leagueList: [
        {
          value: '',
          label: '全部',
        },
      ],
      time: new Date(),
      gtype: 'BK',
    }
  },
  computed: {},
  computed: {
    currentTime() {
      const timeArr = this.time.toISOString().split('T')
      return `${timeArr[0]} ${timeArr[1].slice(0, 8)}`
    },
    activeName() {
      return this.isCurrentTab ? this.tabName : ''
    },
  },
  methods: {
    updateTime() {
      this.time = new Date()
    },
  },
}
</script> -->
<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}
</style>
