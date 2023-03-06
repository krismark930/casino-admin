<template>
  <el-row justify="space-between">
    <h3 style="font-weight: 600;">
      {{ $t('lottery.title') }}[{{ selectedPeriod }}期]
    </h3>
    <el-col>
      <el-form inline="true">
        <el-form-item :label="$t('lottery.chooseNumberOfPeriods')">
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
        <el-form-item :label="$t('lottery.valueAtRisk')">
          <el-input v-model="valueAtRisk" style="width: 80px" />
        </el-form-item>
        <el-form-item :label="$t('lottery.backWater')">
          <el-input v-model="backWater" style="width: 80px" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="Search" @click="handleSearch">
            {{ $t('lottery.flyCalc') }}
          </el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col class="button-group">
      <el-button size="small">
        {{ $t('lottery.topThree') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.topFive') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.topTen') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.topFifteen') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.all') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.single') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.double') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.large') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.small') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.red') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.blue') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.green') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.combinedOrder') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.combinedPair') }}
      </el-button>
    </el-col>
  </el-row>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="instant-bet-special-code">
        <thead>
          <tr>
            <template v-for="l in 4" :key="l">
              <th>{{ $t('lottery.number') }}</th>
              <th>{{ $t('lottery.odds') }}</th>
              <th>{{ $t('lottery.lumpSum') }}</th>
              <th>{{ $t('lottery.expectedProfit') }}</th>
              <th>{{ $t('lottery.flyAway') }}</th>
              <th>{{ $t('lottery.completed') }}</th>
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
                  45.5
                </td>
                <td>0</td>
                <td>0</td>
                <td>补0</td>
                <td>0</td>
                <td></td>
              </template>
              <template v-else>
                <template v-if="n + (m - 1) * rowNum == recordNum">
                  <td :colspan="colNum">{{ $t('lottery.bettingTotal') }}: 0</td>
                </template>
                <template v-if="n + (m - 1) * rowNum == recordNum + 1">
                  <td :colspan="colNum">{{ $t('lottery.totalAmount') }}: 0</td>
                </template>
                <template v-if="n + (m - 1) * rowNum == recordNum + 2">
                  <td :colspan="colNum">
                    {{ $t('lottery.totalAmountOfFlight') }}: 0
                  </td>
                </template>
              </template>
            </template>
          </tr>
        </tbody>
        <thead>
          <tr>
            <template v-for="l in blockNum" :key="l">
              <th>{{ $t('lottery.number') }}</th>
              <th>{{ $t('lottery.odds') }}</th>
              <th>{{ $t('lottery.lumpSum') }}</th>
              <th>{{ $t('lottery.expectedProfit') }}</th>
              <th>{{ $t('lottery.flyAway') }}</th>
              <th>{{ $t('lottery.completed') }}</th>
              <th style="width: 10px;"></th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in rowNum2" :key="n">
            <template v-for="m in blockNum" :key="m">
              <template v-if="n + (m - 1) * rowNum2 < recordNum2">
                <td>{{ data[n + (m - 1) * rowNum2 - 1].num }}</td>
                <td>
                  3.5
                </td>
                <td>0</td>
                <td>0</td>
                <td>补0</td>
                <td>0</td>
                <td></td>
              </template>
              <template v-else>
                <template v-if="n + (m - 1) * rowNum2 == recordNum2">
                  <td :colspan="colNum">{{ $t('lottery.bettingTotal') }}: 0</td>
                </template>
                <template v-if="n + (m - 1) * rowNum2 == recordNum2 + 1">
                  <td :colspan="colNum">{{ $t('lottery.totalAmount') }}: 0</td>
                </template>
                <template v-if="n + (m - 1) * rowNum2 == recordNum2 + 2">
                  <td :colspan="colNum">
                    {{ $t('lottery.totalAmountOfFlight') }}: 0
                  </td>
                </template>
              </template>
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
const valueAtRisk = ref('100000')
const backWater = ref('21')
const rowNum = 13
const blockNum = 4
const colNum = 7
const recordNum = 50
const rowNum2 = 5
const recordNum2 = 18

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
    num: '单',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
  {
    num: '单',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
  {
    num: '双',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
  {
    num: '大',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
  {
    num: '小',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
  {
    num: '合单',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
  {
    num: '合双',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
  {
    num: '红波',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
  {
    num: '绿波',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
  {
    num: '蓝波',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
  {
    num: '家禽',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
  {
    num: '野兽',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
  {
    num: '尾大',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
  {
    num: '尾小',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
  {
    num: '大单',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
  {
    num: '小单',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
  {
    num: '大双',
    odds: '1.98',
    lumpSum: '0',
    expectedProfit: '0',
    flyAway: '补 0',
    completed: '0',
  },
  {
    num: '小双',
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
