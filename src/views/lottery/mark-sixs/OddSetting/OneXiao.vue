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
    type1: '一肖',
    type2: '鼠',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: '一肖',
    type2: '虎',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: '一肖',
    type2: '龙',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: '一肖',
    type2: '马',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: '一肖',
    type2: '猴',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: '一肖',
    type2: '狗',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: '一肖',
    type2: '牛',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: '一肖',
    type2: '兔',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: '一肖',
    type2: '蛇',
    odds: 1.77,
    currentOdds: 1.77,
    betAmount: 0,
  },
  {
    type1: '一肖',
    type2: '羊',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: '一肖',
    type2: '鸡',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: '一肖',
    type2: '猪',
    odds: 2.01,
    currentOdds: 2.01,
    betAmount: 0,
  },
  {
    type1: '正特尾数',
    type2: '0',
    odds: 2.0,
    currentOdds: 2.0,
    betAmount: 0,
  },
  {
    type1: '正特尾数',
    type2: '1',
    odds: 1.8,
    currentOdds: 1.8,
    betAmount: 0,
  },
  {
    type1: '正特尾数',
    type2: '2',
    odds: 1.8,
    currentOdds: 1.8,
    betAmount: 0,
  },
  {
    type1: '正特尾数',
    type2: '3',
    odds: 1.8,
    currentOdds: 1.8,
    betAmount: 0,
  },
  {
    type1: '正特尾数',
    type2: '4',
    odds: 1.8,
    currentOdds: 1.8,
    betAmount: 0,
  },
  {
    type1: '正特尾数',
    type2: '5',
    odds: 1.8,
    currentOdds: 1.8,
    betAmount: 0,
  },
  {
    type1: '正特尾数',
    type2: '6',
    odds: 1.8,
    currentOdds: 1.8,
    betAmount: 0,
  },
  {
    type1: '正特尾数',
    type2: '7',
    odds: 1.8,
    currentOdds: 1.8,
    betAmount: 0,
  },
  {
    type1: '正特尾数',
    type2: '8',
    odds: 1.8,
    currentOdds: 1.8,
    betAmount: 0,
  },
  {
    type1: '正特尾数',
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
