<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: left;"
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
          :isActive="activeName == 'S'"
          :updateTime="updateTime"
          :gtype="gtype"
        />
      </el-tab-pane>
      <el-tab-pane label="上半场" name="H">
        <HTable
          :onlineTrading="formData.onlineTrading"
          :isActive="activeName === 'H'"
          :updateTime="updateTime"
          :gtype="gtype"
        />
      </el-tab-pane>
      <el-tab-pane label="滚球" name="RB">
        <RBTable
          :onlineTrading="formData.onlineTrading"
          :isActive="activeName === 'RB'"
          :updateTime="updateTime"
          :gtype="gtype"
        />
      </el-tab-pane>
      <el-tab-pane label="波胆" name="PD">
        <PDTable
          :onlineTrading="formData.onlineTrading"
          :isActive="activeName === 'PD'"
          :updateTime="updateTime"
          :gtype="gtype"
        />
      </el-tab-pane>
      <el-tab-pane label="上半波胆" name="HPD">
        <HPDTable
          :onlineTrading="formData.onlineTrading"
          :isActive="activeName === 'HPD'"
          :updateTime="updateTime"
          :gtype="gtype"
        />
      </el-tab-pane>
      <el-tab-pane label="总入球" name="T">
        <TTable
          :onlineTrading="formData.onlineTrading"
          :isActive="activeName === 'T'"
          :updateTime="updateTime"
          :gtype="gtype"
        />
      </el-tab-pane>
      <el-tab-pane label="半全场" name="F">
        <FTable
          :onlineTrading="formData.onlineTrading"
          :isActive="activeName === 'F'"
          :updateTime="updateTime"
          :gtype="gtype"
        />
      </el-tab-pane>
      <el-tab-pane label="过关" name="P">
        <PTable
          :onlineTrading="formData.onlineTrading"
          :isActive="activeName === 'P'"
          :updateTime="updateTime"
          :gtype="gtype"
        />
      </el-tab-pane>
      <el-tab-pane label="已开赛" name="PL">
        <PLTable
          :onlineTrading="formData.onlineTrading"
          :isActive="activeName === 'PL'"
          :updateTime="updateTime"
          :gtype="gtype"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
  <el-backtop :right="60" :bottom="60" target=".main" />
</template>
<script setup>
import STable from '@/views/sports-betting/sportsEvent/tables/STable.vue'
import HTable from '@/views/sports-betting/sportsEvent/tables/HTable.vue'
import RBTable from '@/views/sports-betting/sportsEvent/tables/RBTable.vue'
import PDTable from '@/views/sports-betting/sportsEvent/tables/PDTable.vue'
import HPDTable from '@/views/sports-betting/sportsEvent/tables/HPDTable.vue'
import TTable from '@/views/sports-betting/sportsEvent/tables/TTable.vue'
import FTable from '@/views/sports-betting/sportsEvent/tables/FTable.vue'
import PTable from '@/views/sports-betting/sportsEvent/tables/PTable.vue'
import PLTable from '@/views/sports-betting/sportsEvent/tables/PLTable.vue'
import { ref } from 'vue'
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
const gtype = 'FT'

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
      tabName: 'S',
      currentTab: [],
      time: new Date(),
      gtype: 'FT',
    }
  },
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
