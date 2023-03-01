<template>
  <el-row style="display: flex; justify-content: space-between;">
    <b1>Special A Odds Setting</b1>
    <div class="flex">
      <el-button size="small">
        All titles
      </el-button>
      <el-button size="small">
        Open all
      </el-button>
      <el-button size="small">
        <el-icon><Plus /></el-icon>
        Special A
      </el-button>
      <el-button size="small">
        <el-icon><Plus /></el-icon>
        Special B
      </el-button>
    </div>
  </el-row>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table>
        <thead>
          <tr>
            <template v-for="l in 5" :key="l">
              <th>Number</th>
              <th>Odds/Title</th>
              <th>Odds</th>
              <th>Total amount bet</th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in 10" :key="n">
            <template v-for="m in 5" :key="m">
              <template v-if="n + (m - 1) * 10 < 50">
                <td>{{ n + (m - 1) * 10 }}</td>
                <td>
                  <div style="display: flex; column-gap: 10px;">
                    <div>
                      <el-input-number
                        v-model="setting.odds"
                        size="small"
                        controls-position="right"
                      />
                    </div>
                    <div><el-checkbox size="small" /></div>
                  </div>
                </td>
                <td>{{ setting.odds }}</td>
                <td>{{ setting.bet }}</td>
              </template>
              <template v-else>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </template>
            </template>
          </tr>
          <tr v-for="(other, index) in others" :key="index">
            <template v-for="(item, i) in other" :key="i">
              <template v-if="!item.buttons">
                <td>{{ item.number }}</td>
                <td>
                  <div style="display: flex; column-gap: 10px;">
                    <div>
                      <el-input-number
                        v-model="item.odds"
                        size="small"
                        controls-position="right"
                      />
                    </div>
                    <div><el-checkbox size="small" /></div>
                  </div>
                </td>
                <td>{{ item.odds }}</td>
                <td>{{ item.bet }}</td>
              </template>
              <template v-else>
                <td colspan="4">
                  <el-button
                    size="small"
                    v-for="(btn, key) in item.buttons"
                    :key="key"
                  >
                    {{ btn }}
                  </el-button>
                </td>
              </template>
            </template>
          </tr>
        </tbody>
      </table>
    </el-row>
  </el-scrollbar>
  <el-row>
    <table class="options">
      <tr v-for="(option, index) in options" :key="index">
        <td></td>
      </tr>
    </table>
  </el-row>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const setting = reactive({
  odds: 48.8,
  bet: 0,
})

const others = ref([
  [
    {
      number: 'one',
      odds: 1.98,
      bet: 0,
    },
    {
      number: 'big',
      odds: 1.98,
      bet: 0,
    },
    {
      number: 'combined order',
      odds: 1.98,
      bet: 0,
    },
    {
      number: 'red wave',
      odds: 2.55,
      bet: 0,
    },
    {
      number: 'blue wave',
      odds: 2.65,
      bet: 0,
    },
  ],
  [
    {
      number: 'pair',
      odds: 1.98,
      bet: 0,
    },
    {
      number: 'Small',
      odds: 1.98,
      bet: 0,
    },
    {
      number: 'double',
      odds: 1.98,
      bet: 0,
    },
    {
      number: 'green wave',
      odds: 2.65,
      bet: 0,
    },
    {
      buttons: ['submit', '重置'],
    },
  ],
  [
    {
      number: 'poultry',
      odds: 1.98,
      bet: 0,
    },
    {
      number: 'the beast',
      odds: 1.98,
      bet: 0,
    },
    {
      number: 'big tail',
      odds: 1.98,
      bet: 0,
    },
    {
      number: 'small tail',
      odds: 1.98,
      bet: 0,
    },
    {
      number: 'Big order',
      odds: 3.5,
      bet: 0,
    },
  ],
  [
    {
      number: 'Small order',
      odds: 3.5,
      bet: 0,
    },
    {
      number: 'big double',
      odds: 3.5,
      bet: 0,
    },
    {
      number: 'little pair',
      odds: 3.5,
      bet: 0,
    },
  ],
])

const options = ref([
  [
    'mouse',
    'ox',
    'Tiger',
    'rabbit',
    'dragon',
    'snake',
    'horse',
    'sheep',
    'monkey',
    'chicken',
    'dog',
    'pig',
    '',
    '',
    '',
  ],
  [
    'red list',
    'red double',
    'red big',
    'red small',
    'blue sheet',
    'blue double',
    'big blue',
    'little blue',
    'green list',
    'Green double',
    'green big',
    'green small',
    'red wave',
    'blue wave',
    'green wave',
  ],
  [
    'odd number',
    'double number',
    'large',
    'small',
    'combined order',
    'double',
    '',
    '0 heads',
    '1 head',
    '2 heads',
    '3 heads',
    '4 heads',
    '',
    '',
    '',
  ],
  [
    '0 end',
    '1 tail',
    '2 tails',
    '3 tails',
    '4 tails',
    '5 tails',
    '6 tails',
    '7 tails',
    '8 tails',
    '9 tails',
    '',
    'submitComponent',
  ],
])
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;
table {
  overflow-x: scroll;
  width: 100%;
  border: $table-border;
  margin-top: 15px;
  border-collapse: collapse;
  tr {
    height: 30px;
    th {
      text-align: center;
      padding: 0 10px;
      background-color: $table-th-bgcolor;
      border: $table-border;
    }
    td {
      padding: 5px 10px;
      border: $table-border;
      text-align: center;
    }
  }
}
</style>
