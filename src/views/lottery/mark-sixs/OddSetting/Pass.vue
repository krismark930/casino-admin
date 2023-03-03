<template>
  <el-row :gutter="10">
    <el-col :span="8" v-for="id in 6" :key="id" style="margin-bottom: 10px;">
      <el-scrollbar>
        <el-row class="scrollbar-flex-content">
          <table>
            <thead>
              <tr>
                <th colspan="4">Plus size {{ id }}</th>
              </tr>
              <tr>
                <th>Number</th>
                <th>odds</th>
                <th>current odds</th>
                <th>total amount bet</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in data" :key="index">
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
                <td>{{ item.currentOdds }}</td>
                <td>{{ item.totalAmountBet }}</td>
              </tr>
            </tbody>
          </table>
        </el-row>
      </el-scrollbar>
    </el-col>
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
    number: 'one',
    odds: 1.92,
    currentOdds: 1.92,
    totalAmountBet: 0,
  },
  {
    number: 'pair',
    odds: 1.92,
    currentOdds: 1.92,
    totalAmountBet: 0,
  },
  {
    number: 'Small',
    odds: 1.92,
    currentOdds: 1.92,
    totalAmountBet: 0,
  },
  {
    number: 'red wave',
    odds: 1.92,
    currentOdds: 1.92,
    totalAmountBet: 0,
  },
  {
    number: 'green wave',
    odds: 1.92,
    currentOdds: 1.92,
    totalAmountBet: 0,
  },
  {
    number: 'blue wave',
    odds: 1.92,
    currentOdds: 1.92,
    totalAmountBet: 0,
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
  }
}
</style>
