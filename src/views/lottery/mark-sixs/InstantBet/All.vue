<template>
  <el-row justify="space-between">
    <h3 style="font-weight: 600;">
      {{ $t('lottery.title') }}[{{ selectedPeriod }}期]
    </h3>
    <el-col>
      <el-form inline="true">
        <el-form-item :label="$t('lottery.chooseNumberOfPeriods')">
          <el-select
            placeholder="第2023021期"
            v-model="selectedPeriod"
            style="width: 120px"
          >
            <el-option
              v-for="(item, index) in periodsList"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="instant-bet-positive-code">
        <thead>
          <tr>
            <th>序号</th>
            <th>类型</th>
            <th>注数</th>
            <th>下注总额</th>
          </tr>
        </thead>
      </table>
    </el-row>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
const selectedPeriod = ref('2023021')
const handleSearch = () => {}
const periodsList = [
  {
    label: '第2023021期',
    value: '2023021',
  },
  {
    label: '第2023020期',
    value: '2023020',
  },
  {
    label: '第2023019期',
    value: '2023019',
  },
  {
    label: '第2023018期',
    value: '2023018',
  },
  {
    label: '第2023017期',
    value: '2023017',
  },
  {
    label: '第2023016期',
    value: '2023016',
  },
  {
    label: '第2023015期',
    value: '2023015',
  },
]
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;
table.instant-bet-positive-code {
  overflow-x: scroll;
  width: 100%;
  border: $table-border;
  margin-top: 15px;
  border-collapse: collapse;
  tr {
    height: 30px;
    th {
      text-align: center;
      padding: 10px;
      background-color: $table-th-bgcolor;
      border: $table-border;
    }
    td {
      padding: 5px 10px;
      border: $table-border;
      text-align: center;
    }
  }
  td:nth-child(10n + 1) {
    background-color: rgb(255, 244, 225);
  }
}

.button-group {
  button {
    margin-bottom: 10px;
  }
}
</style>
