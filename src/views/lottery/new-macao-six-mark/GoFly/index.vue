<template>
  <el-row justify="space-between">
    <el-col>
      <h3 style="font-weight: 600; padding: 0  0 20px 20px;">
        走飞
      </h3>
    </el-col>
    <el-col>
      <el-form inline="true" justify="space-between">
        <el-form-item label="期数" style="padding-left:20px">
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
        <el-form-item label="占成">
          <el-select placeholder="全部">
            <el-option label="全部" value="全部" />
            <el-option label="成数" value="成数" />
          </el-select>
        </el-form-item>
        <el-form-item label="出货/成数">
          <el-select placeholder="全部">
            <el-option label="全部" value="全部" />
            <el-option label="特码" value="特码" />
          </el-select>
        </el-form-item>
        <el-form-item label="查看方式">
          <el-select placeholder="预计盈利">
            <el-option label="吃码" value="吃码" />
            <el-option label="预计盈利" value="预计盈利" />
          </el-select>
        </el-form-item>
        <el-form-item label="股东">
          <el-select placeholder="全部">
            <el-option label="全部" value="全部" />
            <el-option label="bdm000" value="bdm000" />
          </el-select>
        </el-form-item>
        <el-form-item label="吃码占成">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">设置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col style="padding-left:20px">
      <div class="flex">
        <el-button type="success">
          <el-icon><Refresh /></el-icon>
          刷新
        </el-button>
        <el-button type="warning">
          <el-icon><Printer /></el-icon>
          打印
        </el-button>
      </div>
    </el-col>
  </el-row>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="Gofly-bet-special-code">
        <thead>
          <tr>
            <template v-for="l in 5" :key="l">
              <th>号码</th>
              <th>金额</th>
              <th>吃码</th>
              <th>预计盈利</th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in rowNum" :key="n">
            <template v-for="m in blockNum" :key="m">
              <template v-if="n + (m - 1) * rowNum < recordNum">
                <td>{{ n + (m - 1) * rowNum }}</td>
                <td>
                  0
                </td>
                <td>0</td>
                <td>0</td>
              </template>
            </template>
          </tr>
        </tbody>
      </table>
    </el-row>
  </el-scrollbar>
  <el-row style="padding-top:20px">
    <el-col :span="5">
      <h4>赢余个数:49　亏损个数:0　吃码总额:0　走飞总额:0</h4>
    </el-col>
    <el-col :span="2"></el-col>
    <el-col :span="17">
      <el-form inline="true">
        <el-form-item label="走飞赔率">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="走飞退水">
          <el-input />
        </el-form-item>
        <el-form-item label="最大负数">
          <el-input />
        </el-form-item>
        <el-form-item label="平均吃码:">
          <el-input />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">
            确定
          </el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const submit = () => {}
const setting = reactive({
  odds: 48.8,
  bet: 0,
})

const selectedPeriod = ref('2023021')
const rowNum = 10
const blockNum = 5
const colNum = 7
const recordNum = 50
const Occupation = [
  {
    label: '全部',
  },
  {
    label: '成数',
  },
]
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

const handleSearch = () => {}
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;
table.Gofly-bet-special-code {
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
  td:nth-child(7n + 1) {
    background-color: rgb(255, 244, 225);
  }
}

.button-group {
  button {
    margin-bottom: 10px;
  }
}
</style>
