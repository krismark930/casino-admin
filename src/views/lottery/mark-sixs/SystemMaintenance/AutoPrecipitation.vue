<template>
  <el-row>
    <table>
      <thead>
        <tr>
          <th>类型</th>
          <th>数值</th>
          <th>每次下调赔率的单位</th>
          <th>最低赔率</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, i) in data" :key="i">
          <tr>
            <th>
              {{ item.type }}
            </th>
            <td>
              <el-input v-model="item.value" />
            </td>
            <td>
              <el-input v-model="item.reductionUnit" />
            </td>
            <td>
              <el-input v-model="item.minimumodds" />
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <el-col>
      <div style="display:flex; justify-content: center; padding-top:10px;">
        <el-button type="success">确认修改</el-button>
        <el-button type="warning">刷新</el-button>
      </div>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
const data = [
  {
    type: '特码',
    value: '20000',
    reductionUnit: '0.1',
    minimumodds: '33',
  },
  {
    type: '单双',
    value: '30000',
    reductionUnit: '0.01',
    minimumodds: '1.55',
  },
  {
    type: '大小',
    value: '30000',
    reductionUnit: '0.01',
    minimumodds: '1.55',
  },
  {
    type: '合数单双',
    value: '30000',
    reductionUnit: '0.01',
    minimumodds: '1.55',
  },
  {
    type: '波色',
    value: '10000',
    reductionUnit: '0.01',
    minimumodds: '1.65',
  },
  {
    type: '正特',
    value: '2000',
    reductionUnit: '0.1',
    minimumodds: '30',
  },
  {
    type: '正码',
    value: '10000',
    reductionUnit: '0.01',
    minimumodds: '4',
  },
  {
    type: '总数单双',
    value: '30000',
    reductionUnit: '0.01',
    minimumodds: '1.55',
  },
  {
    type: '总数大小',
    value: '30000',
    reductionUnit: '0.01',
    minimumodds: '1.55',
  },
  {
    type: '五行',
    value: '10000',
    reductionUnit: '0.02',
    minimumodds: '1.55',
  },
  {
    type: '半波',
    value: '5000',
    reductionUnit: '0.1',
    minimumodds: '3',
  },
  {
    type: '尾数',
    value: '30000',
    reductionUnit: '0.01',
    minimumodds: '1.55',
  },
  {
    type: '特肖',
    value: '5000',
    reductionUnit: '0.05',
    minimumodds: '6',
  },
  {
    type: '四肖',
    value: '30000',
    reductionUnit: '0.01',
    minimumodds: '1.55',
  },
  {
    type: '五肖',
    value: '30000',
    reductionUnit: '0.01',
    minimumodds: '1.6',
  },
  {
    type: '一肖',
    value: '50000',
    reductionUnit: '0.01',
    minimumodds: '1.6',
  },
  {
    type: '六肖',
    value: '30000',
    reductionUnit: '0.01',
    minimumodds: '1.55',
  },
  {
    type: '家禽野兽',
    value: '30000',
    reductionUnit: '0.01',
    minimumodds: '1.55',
  },
  {
    type: '二肖',
    value: '5000',
    reductionUnit: '0.05',
    minimumodds: '1.55',
  },
  {
    type: '三肖',
    value: '10000',
    reductionUnit: '0.05',
    minimumodds: '1.55',
  },
  {
    type: '半半波',
    value: '5000',
    reductionUnit: '0.01',
    minimumodds: '1.55',
  },
  {
    type: '头数',
    value: '10000',
    reductionUnit: '0.01',
    minimumodds: '1.55',
  },
  {
    type: '正特尾数',
    value: '30000',
    reductionUnit: '0.01',
    minimumodds: '1.5',
  },
  {
    type: '七色波',
    value: '30000',
    reductionUnit: '0.01',
    minimumodds: '1.55',
  },
  {
    type: '尾大尾小',
    value: '30000',
    reductionUnit: '0.01',
    minimumodds: '1.55',
  },
  {
    type: '大单小单',
    value: '30000',
    reductionUnit: '0.01',
    minimumodds: '1.55',
  },
  {
    type: '大双小双',
    value: '30000',
    reductionUnit: '0.01',
    minimumodds: '1.55',
  },
  {
    type: '连肖',
    value: '5000',
    reductionUnit: '0.01',
    minimumodds: '1.55',
  },
  {
    type: '全不中',
    value: '20000',
    reductionUnit: '0.01',
    minimumodds: '1.5',
  },
]
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-bg-color: #fdf4ca;
table {
  border: $table-border;
  border-collapse: collapse;
  width: 100%;
  tr {
    height: 30px;
    th:first-child {
      width: 30%;
    }
  }
  th {
    background-color: $table-bg-color;
  }
  th,
  td {
    border: $table-border;
    text-align: center;
  }
}

.el-form-item {
  margin-bottom: 0;
}
</style>
