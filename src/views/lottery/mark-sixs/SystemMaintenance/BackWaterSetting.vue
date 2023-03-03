<template>
  <el-row>
    <table>
      <thead>
        <tr>
          <th>类型</th>
          <th>佣金%A</th>
          <th>佣金%B</th>
          <th>佣金%C</th>
          <th>佣金%D</th>
          <th>单注限额</th>
          <th>单项(号)限额</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, i) in data" :key="i">
          <tr>
            <th>
              {{ item.type }}
            </th>
            <td>
              <el-input v-model="item.valueA" />
            </td>
            <td>
              <el-input v-model="item.valueB" />
            </td>
            <td>
              <el-input v-model="item.valueC" />
            </td>
            <td>
              <el-input v-model="item.valueD" />
            </td>
            <td>
              <el-input v-model="item.singleBet" />
            </td>
            <td>
              <el-input v-model="item.singleItem" />
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
    type: '特A',
    valueA: '13',
    valueB: '13',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '特B',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '单双',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '大小',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '合数单双',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '正特',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '正A',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '正B',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '总和单双',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '总和大小',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '色波',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '半波',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '正码过关',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '二全中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '三全中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '三中二',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '二中特',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '特串',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '特肖',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '四肖',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '五肖',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '六肖',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '一肖',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '尾数',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '家禽野兽',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '二肖',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '三肖',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '半半波',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '头数',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '正特尾数',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '七色波',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '正肖',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '尾大尾小',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '大单小单',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '大双小双',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '连肖',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '五不中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '六不中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '七不中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '八不中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '九不中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '十不中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '十一不中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '十二不中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '四中一',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '五中一',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '正1-6',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '二肖连中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '三肖连中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '四肖连中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '五肖连中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '二肖连不中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '三肖连不中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '四肖连不中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '五肖连不中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '二尾连中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '三尾连中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '四尾连中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '二尾连不中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '三尾连不中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
  },
  {
    type: '四尾连不中',
    valueA: '0',
    valueB: '0',
    valueC: '0',
    valueD: '0',
    singleBet: '5000',
    singleItem: '10000',
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
  }
}

.el-form-item {
  margin-bottom: 0;
}
</style>
