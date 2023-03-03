<template>
  <el-row style="margin-bottom: 10px;">
    <table>
      <thead>
        <tr>
          <th colspan="2">type</th>
          <th>odds</th>
          <th>current odds</th>
          <th>bet amount</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, i) in data" :key="i">
          <template v-if="!item.childs">
            <tr>
              <td colspan="2">{{ item.type }}</td>
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
              <td>{{ item.currentOdds }}</td>
              <td>{{ item.betAmount }}</td>
            </tr>
          </template>
          <template v-else>
            <template v-for="(child, j) in item.childs" :key="j">
              <template v-if="j == 0">
                <tr>
                  <td rowspan="2">{{ item.type }}</td>
                  <td>{{ child.subType }}</td>
                  <td>
                    <div style="display: flex; column-gap: 10px;">
                      <div>
                        <el-input-number
                          v-model="child.odds"
                          size="small"
                          controls-position="right"
                        />
                      </div>
                      <div><el-checkbox size="small" /></div>
                    </div>
                  </td>
                  <td>
                    {{ child.currentOdds }}
                  </td>
                  <td rowspan="2">{{ item.betAmount }}</td>
                </tr>
              </template>
              <template v-else>
                <tr>
                  <td>{{ child.subType }}</td>
                  <td>
                    <div style="display: flex; column-gap: 10px;">
                      <div>
                        <el-input-number
                          v-model="child.odds"
                          size="small"
                          controls-position="right"
                        />
                      </div>
                      <div><el-checkbox size="small" /></div>
                    </div>
                  </td>
                  <td>
                    {{ child.currentOdds }}
                  </td>
                </tr>
              </template>
            </template>
          </template>
        </template>
      </tbody>
    </table>
  </el-row>
  <el-row>
    <el-button size="small">
      odds increase
    </el-button>
    <el-button size="small">
      odds reduction
    </el-button>
    <el-button size="small">
      submit
    </el-button>
    <el-button size="small">
      重置
    </el-button>
  </el-row>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const data = ref([
  {
    type: 'Erquan Middle School',
    odds: 65.0,
    currentOdds: 65.0,
    betAmount: 0,
  },
  {
    type: 'Second special',
    childs: [
      {
        subType: 'Zhongte',
        odds: 35.0,
        currentOdds: 35.0,
      },
      {
        subType: 'middle two',
        odds: 50.0,
        currentOdds: 50.0,
      },
    ],
    betAmount: 0,
  },
  {
    type: 'special string',
    odds: 160.0,
    currentOdds: 160.0,
    betAmount: 0,
  },
  {
    type: 'Sanquan Middle School',
    odds: 650.0,
    currentOdds: 650.0,
    betAmount: 0,
  },
  {
    type: '3 out of 2',
    childs: [
      {
        subType: 'middle two',
        odds: 20.0,
        currentOdds: 20.0,
      },
      {
        subType: 'middle three',
        odds: 105.0,
        currentOdds: 105.0,
      },
    ],
    betAmount: 0,
  },
  {
    type: 'Four in one',
    odds: 1.95,
    currentOdds: 1.95,
    betAmount: 0,
  },
])
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;

table {
  border: $table-border;
  border-collapse: collapse;
  width: 100%;
  th[colspan='4'] {
    background-color: #fe773d;
  }
  th {
    background-color: #fdf4ca;
  }
  th,
  td {
    border: $table-border;
    text-align: center;
  }
}
</style>
