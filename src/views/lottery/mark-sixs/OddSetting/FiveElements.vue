<template>
  <el-row style="margin-bottom: 10px;">
    <table>
      <thead>
        <tr>
          <th colspan="3">类型</th>
          <th>赔率</th>
          <th>当前赔率</th>
          <th>下注金额</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, i) in data" :key="i">
          <tr>
            <td>五行</td>
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
      赔率增加
    </el-button>
    <el-button size="small">
      赔率减少
    </el-button>
    <el-button size="small">
      提交
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
    type: '金',
    balls: [12, 13, 20, 21, 28, 29, 42, 43],
    odds: 4.7,
    currentOdds: 4.7,
    betAmount: 0,
  },
  {
    type: '木',
    balls: [2, 3, 10, 11, 24, 25, 32, 33, 40, 41],
    odds: 4.3,
    currentOdds: 4.3,
    betAmount: 0,
  },
  {
    type: '水',
    balls: [1, 8, 9, 16, 17, 30, 31, 38, 39, 46, 47],
    odds: 4.3,
    currentOdds: 4.3,
    betAmount: 0,
  },
  {
    type: '火',
    balls: [4, 5, 18, 19, 26, 27, 34, 35, 48, 49],
    odds: 4.3,
    currentOdds: 4.3,
    betAmount: 0,
  },
  {
    type: '土',
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
