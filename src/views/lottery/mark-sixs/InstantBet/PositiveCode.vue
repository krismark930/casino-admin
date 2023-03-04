<template>
  <el-row justify="space-between">
    <h3 style="font-weight: 600;">
      {{ $t('instantbet.positiveTitle') }}[{{ selectedPeriod }}期]
    </h3>
    <el-col>
      <el-form inline="true">
        <el-form-item :label="$t('instantbet.chooseNumberOfPeriods')">
          <el-select
            placeholder="第2023021期"
            v-model="selectedPeriod"
            style="width: 120px"
          >
            <el-option
              v-for="(item, index) in periodsList"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('instantbet.valueAtRisk')">
          <el-input v-model="valueAtRisk" style="width: 80px" />
        </el-form-item>
        <el-form-item :label="$t('instantbet.backWater')">
          <el-input v-model="backWater" style="width: 80px" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="Search" @click="handleSearch">
            {{ $t('instantbet.flyCalc') }}
          </el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col class="button-group">
      <el-button size="small">
        {{ $t('instantbet.all') }}
      </el-button>
      <el-button size="small">
        {{ $t('instantbet.single') }}
      </el-button>
      <el-button size="small">
        {{ $t('instantbet.double') }}
      </el-button>
      <el-button size="small">
        {{ $t('instantbet.large') }}
      </el-button>
      <el-button size="small">
        {{ $t('instantbet.small') }}
      </el-button>
      <el-button size="small">
        {{ $t('instantbet.red') }}
      </el-button>
      <el-button size="small">
        {{ $t('instantbet.blue') }}
      </el-button>
      <el-button size="small">
        {{ $t('instantbet.green') }}
      </el-button>
      <el-button size="small">
        {{ $t('instantbet.combinedOrder') }}
      </el-button>
      <el-button size="small">
        {{ $t('instantbet.combinedPair') }}
      </el-button>
    </el-col>
  </el-row>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="instant-bet-special-code">
        <thead>
          <tr>
            <template v-for="l in 4" :key="l">
              <th>Number</th>
              <th>Odds</th>
              <th>Lump sum</th>
              <th>Expected profit</th>
              <th>Fly away</th>
              <th>Completed</th>
              <th style="width: 10px;"></th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in rowNum" :key="n">
            <template v-for="m in blockNum" :key="m">
              <template v-if="n + (m - 1) * rowNum < recordNum">
                <td>{{ n + (m - 1) * rowNum }}</td>
                <td>
                  7.15
                </td>
                <td>0</td>
                <td>0</td>
                <td>走飞 0</td>
                <td>0</td>
                <td></td>
              </template>
              <template v-else>
                <template v-if="n + (m - 1) * rowNum == recordNum">
                  <td :colspan="colNum">
                    {{ $t('instantbet.bettingTotal') }}: 0
                  </td>
                </template>
                <template v-if="n + (m - 1) * rowNum == recordNum + 1">
                  <td :colspan="colNum">
                    {{ $t('instantbet.totalAmount') }}: 0
                  </td>
                </template>
                <template v-if="n + (m - 1) * rowNum == recordNum + 2">
                  <td :colspan="colNum">
                    {{ $t('instantbet.totalAmountOfFlight') }}: 0
                  </td>
                </template>
              </template>
            </template>
          </tr>
        </tbody>
        <thead>
          <tr>
            <template v-for="l in blockNum" :key="l">
              <th>Number</th>
              <th>Odds</th>
              <th>Lump sum</th>
              <th>Expected profit</th>
              <th>Fly away</th>
              <th>Completed</th>
              <th style="width: 10px;"></th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr>
            <template v-for="m in 4" :key="m">
              <td>{{ data[m - 1].num }}</td>
              <td>
                1.95
              </td>
              <td>0</td>
              <td>0</td>
              <td>走飞 0</td>
              <td>0</td>
              <td></td>
            </template>
          </tr>
        </tbody>
      </table>
    </el-row>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const setting = reactive({
  odds: 48.8,
  bet: 0,
})

const selectedPeriod = ref('2023021')
const valueAtRisk = ref('3')
const backWater = ref('10')
const rowNum = 13
const blockNum = 4
const colNum = 7
const recordNum = 50

const periodsList = [
  {
    label: '第2023021期',
    value: '2023021',
  },
  {
    label: '第2023020期',
    value: '2023020',
  },
  {
    label: '第2023019期',
    value: '2023019',
  },
  {
    label: '第2023018期',
    value: '2023018',
  },
  {
    label: '第2023017期',
    value: '2023017',
  },
  {
    label: '第2023016期',
    value: '2023016',
  },
  {
    label: '第2023015期',
    value: '2023015',
  },
]

const data = [
  {
    num: '总单',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
  {
    num: '总双',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
  {
    num: '总大',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
  {
    num: '总小',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
]

const handleSearch = () => {}
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;
table.instant-bet-special-code {
  overflow-x: scroll;
  width: 100%;
  border: $table-border;
  margin-top: 15px;
  border-collapse: collapse;
  tr {
    height: 30px;
    th {
      text-align: center;
      padding: 10px;
      background-color: $table-th-bgcolor;
      border: $table-border;
    }
    td {
      padding: 5px 10px;
      border: $table-border;
      text-align: center;
    }
  }
  td:nth-child(7n + 1) {
    background-color: rgb(255, 244, 225);
  }
}

.button-group {
  button {
    margin-bottom: 10px;
  }
}
</style>
