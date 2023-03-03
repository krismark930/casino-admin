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
            <td>teshaw</td>
            <td>{{ item.type }}</td>
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
  { type: 'mouse', odds: 10.6, currentOdds: 10.6, betAmount: 0 },
  { type: 'Tiger', odds: 10.6, currentOdds: 10.6, betAmount: 0 },
  { type: 'dragon', odds: 10.6, currentOdds: 10.6, betAmount: 0 },
  { type: 'horse', odds: 10.6, currentOdds: 10.6, betAmount: 0 },
  { type: 'monkey', odds: 10.6, currentOdds: 10.6, betAmount: 0 },
  { type: 'dog', odds: 10.6, currentOdds: 10.6, betAmount: 0 },
  { type: 'ox', odds: 10.6, currentOdds: 10.6, betAmount: 0 },
  { type: 'rabbit', odds: 10.6, currentOdds: 10.6, betAmount: 0 },
  { type: 'snake', odds: 9.6, currentOdds: 9.6, betAmount: 0 },
  { type: 'sheep', odds: 10.6, currentOdds: 10.6, betAmount: 0 },
  { type: 'chicken', odds: 10.6, currentOdds: 10.6, betAmount: 0 },
  { type: 'pig', odds: 10.6, currentOdds: 10.6, betAmount: 0 },
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
