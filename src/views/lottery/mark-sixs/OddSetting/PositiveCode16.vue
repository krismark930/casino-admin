<template>
  <el-row :gutter="10">
    <el-col :span="8" v-for="id in 6" :key="id" style="margin-bottom: 10px;">
      <el-scrollbar>
        <el-row class="scrollbar-flex-content">
          <table>
            <thead>
              <tr>
                <th colspan="4">正码 {{ id }}</th>
              </tr>
              <tr>
                <th>号码</th>
                <th>赔率/封号</th>
                <th>赔率</th>
                <th>下注总额</th>
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
      赔率增加
    </el-button>
    <el-button size="small">
      赔率增加
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
    number: '大',
    odds: 1.92,
    currentOdds: 1.92,
    totalAmountBet: 0,
  },
  {
    number: '小',
    odds: 1.92,
    currentOdds: 1.92,
    totalAmountBet: 0,
  },
  {
    number: '单',
    odds: 1.92,
    currentOdds: 1.92,
    totalAmountBet: 0,
  },
  {
    number: '双',
    odds: 1.92,
    currentOdds: 1.92,
    totalAmountBet: 0,
  },
  {
    number: '红波',
    odds: 1.92,
    currentOdds: 1.92,
    totalAmountBet: 0,
  },
  {
    number: '绿波',
    odds: 1.92,
    currentOdds: 1.92,
    totalAmountBet: 0,
  },
  {
    number: '蓝波',
    odds: 1.92,
    currentOdds: 1.92,
    totalAmountBet: 0,
  },
  {
    number: '合大',
    odds: 1.92,
    currentOdds: 1.92,
    totalAmountBet: 0,
  },
  {
    number: '合小',
    odds: 1.92,
    currentOdds: 1.92,
    totalAmountBet: 0,
  },
  {
    number: '合单',
    odds: 1.92,
    currentOdds: 1.92,
    totalAmountBet: 0,
  },
  {
    number: '合双',
    odds: 1.92,
    currentOdds: 1.92,
    totalAmountBet: 0,
  },
  {
    number: '尾大',
    odds: 1.92,
    currentOdds: 1.92,
    totalAmountBet: 0,
  },
  {
    number: '尾小',
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
