<template>
  <el-row style="display: flex; justify-content: space-between;">
    <b1>Positive Aces Odds Setting</b1>
    <div class="flex">
      <el-button size="small">
        <el-icon><Plus /></el-icon>
        Positive A
      </el-button>
      <el-button size="small">
        <el-icon><Plus /></el-icon>
        Positive B
      </el-button>
    </div>
  </el-row>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="odds-setting-special-code">
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
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="options">
        <tr v-for="(option, index) in options" :key="index">
          <template v-for="(item, key) in option" :key="key">
            <template v-if="item != 'submitComponent' && item != ''">
              <td><el-checkbox :label="item" size="large" /></td>
            </template>
            <template v-if="item == 'submitComponent'">
              <td colspan="4">
                <el-radio-group v-model="reduce">
                  <el-radio label="reduce" />
                  <el-radio label="add" />
                </el-radio-group>
                <el-input
                  style="margin-bottom: 5px;"
                  placeholder="Please input"
                  :value="0.5"
                />
                <el-button size="small" type="primary">Send out</el-button>
                <el-button size="small" type="primary">取消</el-button>
              </td>
            </template>
            <template v-if="item == ''">
              <td></td>
            </template>
          </template>
        </tr>
      </table>
    </el-row>
  </el-scrollbar>
  <el-row>
    <el-form-item label="Unified modification:">
      <el-radio-group v-model="radio1">
        <el-radio label="1" size="large">One</el-radio>
        <el-radio label="2" size="large">Pair</el-radio>
        <el-radio label="3" size="large">big</el-radio>
        <el-radio label="4" size="large">small</el-radio>
        <el-radio label="5" size="large">red wave</el-radio>
        <el-radio label="6" size="large">green wave</el-radio>
        <el-radio label="7" size="large">blue wave</el-radio>
        <el-radio label="0" size="large">All</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-row>
  <el-row>
    <el-form-item label="Odds" style="margin-right: 10px;">
      <el-input :value="0" />
    </el-form-item>
    <el-button>unified modification</el-button>
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
      number: 'total bill',
      odds: 1.98,
      bet: 0,
    },
    {
      number: 'total double',
      odds: 1.98,
      bet: 0,
    },
    {
      number: 'General',
      odds: 1.98,
      bet: 0,
    },
    {
      number: 'total small',
      odds: 2.65,
      bet: 0,
    },
    {
      buttons: ['submit', '重置'],
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

const reduce = ref('1')
const radio1 = ref('1')
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;
table.odds-setting-special-code {
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

table.options {
  margin-top: 15px;
  border: $table-border;
  border-collapse: collapse;
  td {
    border: $table-border;
    text-align: left;
    padding: 0 10px;
    background-color: $table-th-bgcolor;
  }
}
</style>
