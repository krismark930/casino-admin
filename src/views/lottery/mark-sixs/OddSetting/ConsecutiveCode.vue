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
<script setup>
import { ref } from 'vue'

const data = ref([
  {
    type: '二全中',
    odds: 65.0,
    currentOdds: 65.0,
    betAmount: 0,
  },
  {
    type: '二中特',
    childs: [
      {
        subType: '中特',
        odds: 35.0,
        currentOdds: 35.0,
      },
      {
        subType: '中二',
        odds: 50.0,
        currentOdds: 50.0,
      },
    ],
    betAmount: 0,
  },
  {
    type: '特串',
    odds: 160.0,
    currentOdds: 160.0,
    betAmount: 0,
  },
  {
    type: '三全中',
    odds: 650.0,
    currentOdds: 650.0,
    betAmount: 0,
  },
  {
    type: '三中二',
    childs: [
      {
        subType: '中二',
        odds: 20.0,
        currentOdds: 20.0,
      },
      {
        subType: '中三',
        odds: 105.0,
        currentOdds: 105.0,
      },
    ],
    betAmount: 0,
  },
  {
    type: '四中一',
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
