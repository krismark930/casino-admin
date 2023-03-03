<template>
  <el-row style="margin-bottom: 10px;">
    <table>
      <thead>
        <tr>
          <th colspan="2">type</th>
          <th>Odds/Title</th>
          <th>current odds</th>
          <th>bet amount</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, i) in data" :key="i">
          <tr>
            <td>{{ item.type1 }}</td>
            <td>{{ item.type2 }}</td>
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
    type1: 'One Xiao',
    type2: 'mouse',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: 'One Xiao',
    type2: 'Tiger',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: 'One Xiao',
    type2: 'dragon',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: 'One Xiao',
    type2: 'horse',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: 'One Xiao',
    type2: 'monkey',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: 'One Xiao',
    type2: 'dog',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: 'One Xiao',
    type2: 'ox',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: 'One Xiao',
    type2: 'rabbit',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: 'One Xiao',
    type2: 'snake',
    odds: 1.77,
    currentOdds: 1.77,
    betAmount: 0,
  },
  {
    type1: 'One Xiao',
    type2: 'sheep',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: 'One Xiao',
    type2: 'chicken',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: 'One Xiao',
    type2: 'pig',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: 'Normal mantissa',
    type2: '0',
    odds: 2.0,
    currentOdds: 2.0,
    betAmount: 0,
  },
  {
    type1: 'Normal mantissa',
    type2: '1',
    odds: 1.8,
    currentOdds: 1.8,
    betAmount: 0,
  },
  {
    type1: 'Normal mantissa',
    type2: '2',
    odds: 1.8,
    currentOdds: 1.8,
    betAmount: 0,
  },
  {
    type1: 'Normal mantissa',
    type2: '3',
    odds: 1.8,
    currentOdds: 1.8,
    betAmount: 0,
  },
  {
    type1: 'Normal mantissa',
    type2: '4',
    odds: 1.8,
    currentOdds: 1.8,
    betAmount: 0,
  },
  {
    type1: 'Normal mantissa',
    type2: '5',
    odds: 1.8,
    currentOdds: 1.8,
    betAmount: 0,
  },
  {
    type1: 'Normal mantissa',
    type2: '6',
    odds: 1.8,
    currentOdds: 1.8,
    betAmount: 0,
  },
  {
    type1: 'Normal mantissa',
    type2: '7',
    odds: 1.8,
    currentOdds: 1.8,
    betAmount: 0,
  },
  {
    type1: 'Normal mantissa',
    type2: '8',
    odds: 1.8,
    currentOdds: 1.8,
    betAmount: 0,
  },
  {
    type1: 'Normal mantissa',
    type2: '9',
    odds: 1.8,
    currentOdds: 1.8,
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
