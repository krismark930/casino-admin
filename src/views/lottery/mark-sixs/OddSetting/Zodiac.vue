<template>
  <el-row style="justify-content: space-between; margin-bottom: 10px;">
    <h6 style="margin-bottom: 0;">two tails</h6>
    <div class="flex">
      <el-button size="small">
        two tails
      </el-button>
      <el-button size="small">
        three tails
      </el-button>
      <el-button size="small">
        Four tails in a row
      </el-button>
      <el-button size="small">
        two tails missed
      </el-button>
      <el-button size="small">
        three tails missed
      </el-button>
      <el-button size="small">
        four tails missed
      </el-button>
    </div>
  </el-row>
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
            <td>two tails</td>
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
  { type: 1, odds: 3.15, currentOdds: 3.15, betAmount: 0 },
  { type: 2, odds: 3.15, currentOdds: 3.15, betAmount: 0 },
  { type: 3, odds: 3.15, currentOdds: 3.15, betAmount: 0 },
  { type: 4, odds: 3.15, currentOdds: 3.15, betAmount: 0 },
  { type: 5, odds: 3.15, currentOdds: 3.15, betAmount: 0 },
  { type: 6, odds: 3.15, currentOdds: 3.15, betAmount: 0 },
  { type: 7, odds: 3.15, currentOdds: 3.15, betAmount: 0 },
  { type: 8, odds: 3.15, currentOdds: 3.15, betAmount: 0 },
  { type: 9, odds: 3.15, currentOdds: 3.15, betAmount: 0 },
  { type: 0, odds: 3.15, currentOdds: 3.15, betAmount: 0 },
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
