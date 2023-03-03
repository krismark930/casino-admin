<template>
  <el-row style="margin-bottom: 10px;">
    <table>
      <thead>
        <tr>
          <th colspan="3">type</th>
          <th>Odds/Title</th>
          <th>current odds</th>
          <th>bet amount</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, i) in data" :key="i">
          <tr>
            <td>five elements</td>
            <td>{{ item.type }}</td>
            <td>
              <template v-for="(ball, j) in item.balls" :key="j">
                <el-badge :value="ball"></el-badge>
              </template>
            </td>
            <td>
              <div
                style="display: flex; column-gap: 10px; justify-content: center;"
              >
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
    type: 'Money',
    balls: [12, 13, 20, 21, 28, 29, 42, 43],
    odds: 4.7,
    currentOdds: 4.7,
    betAmount: 0,
  },
  {
    type: 'wood',
    balls: [2, 3, 10, 11, 24, 25, 32, 33, 40, 41],
    odds: 4.3,
    currentOdds: 4.3,
    betAmount: 0,
  },
  {
    type: 'water',
    balls: [1, 8, 9, 16, 17, 30, 31, 38, 39, 46, 47],
    odds: 4.3,
    currentOdds: 4.3,
    betAmount: 0,
  },
  {
    type: 'fire',
    balls: [4, 5, 18, 19, 26, 27, 34, 35, 48, 49],
    odds: 4.3,
    currentOdds: 4.3,
    betAmount: 0,
  },
  {
    type: 'soil',
    balls: [6, 7, 14, 15, 22, 23, 36, 37, 44, 45],
    odds: 4.3,
    currentOdds: 4.3,
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
