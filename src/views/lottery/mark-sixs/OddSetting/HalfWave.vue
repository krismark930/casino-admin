<template>
  <el-row style="margin-bottom: 10px;">
    <table>
      <thead>
        <tr>
          <th colspan="2">类型</th>
          <th>赔率</th>
          <th>当前赔率</th>
          <th>下注金额</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, i) in data" :key="i">
          <tr>
            <td>半波</td>
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
    type: '红单',
    odds: 5.7,
    currentOdds: 5.7,
    betAmount: 0,
  },
  {
    type: '红双',
    odds: 5.7,
    currentOdds: 5.7,
    betAmount: 0,
  },
  {
    type: '红大',
    odds: 5.7,
    currentOdds: 5.7,
    betAmount: 0,
  },
  {
    type: '红小',
    odds: 5.7,
    currentOdds: 5.7,
    betAmount: 0,
  },
  {
    type: '绿单',
    odds: 5.7,
    currentOdds: 5.7,
    betAmount: 0,
  },
  {
    type: '绿双',
    odds: 5.7,
    currentOdds: 5.7,
    betAmount: 0,
  },
  {
    type: '绿大',
    odds: 5.7,
    currentOdds: 5.7,
    betAmount: 0,
  },
  {
    type: '绿小',
    odds: 5.7,
    currentOdds: 5.7,
    betAmount: 0,
  },
  {
    type: '蓝单',
    odds: 5.7,
    currentOdds: 5.7,
    betAmount: 0,
  },
  {
    type: '蓝双',
    odds: 5.7,
    currentOdds: 5.7,
    betAmount: 0,
  },
  {
    type: '蓝大',
    odds: 5.7,
    currentOdds: 5.7,
    betAmount: 0,
  },
  {
    type: '蓝小',
    odds: 5.7,
    currentOdds: 5.7,
    betAmount: 0,
  },
  {
    type: '红合单',
    odds: 5.7,
    currentOdds: 5.7,
    betAmount: 0,
  },
  {
    type: '红合双',
    odds: 5.7,
    currentOdds: 5.7,
    betAmount: 0,
  },
  {
    type: '绿合单',
    odds: 5.7,
    currentOdds: 5.7,
    betAmount: 0,
  },
  {
    type: '绿合双',
    odds: 5.7,
    currentOdds: 5.7,
    betAmount: 0,
  },
  {
    type: '蓝合单',
    odds: 5.7,
    currentOdds: 5.7,
    betAmount: 0,
  },
  {
    type: '蓝合双',
    odds: 5.7,
    currentOdds: 5.7,
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
