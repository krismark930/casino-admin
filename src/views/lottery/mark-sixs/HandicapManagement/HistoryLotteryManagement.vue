<template>
  <el-form v-model="form">
    <el-row :gutter="10">
      <el-col :span="10">
        <el-form-item label="Number of Issues:">
          <el-input v-model="form.numberOfIssues" />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-button>
          Confirm search
        </el-button>
      </el-col>
      <el-col :span="8">
        <el-button>
          <el-icon><Plus /></el-icon>
          All issues
        </el-button>
        <el-button>
          <el-icon><Plus /></el-icon>
          Show
        </el-button>
        <el-button>
          <el-icon><Plus /></el-icon>
          Hide
        </el-button>
      </el-col>
    </el-row>
  </el-form>
  <table class="historical-lottery">
    <thead>
      <tr>
        <th colspan="2">Mark Six</th>
        <td colspan="12"></td>
      </tr>
      <tr>
        <th rowspan="2" style="width: 10px;">
          <el-checkbox size="large" />
        </th>
        <th rowspan="2">Period</th>
        <th rowspan="2">Draw time</th>
        <th colspan="7">Lottery ball number</th>
        <th rowspan="2">Chinese Zodiac</th>
        <th rowspan="2">Whether to draw a prize</th>
        <th rowspan="2">State</th>
        <th rowspan="2">Operate</th>
      </tr>
      <tr>
        <th>Flat1</th>
        <th>Flat2</th>
        <th>Flat3</th>
        <th>Flat4</th>
        <th>Flat5</th>
        <th>Flat6</th>
        <th>Special code</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in tableData" :key="index">
        <td><el-checkbox size="large" /></td>
        <td>{{ item.period }}</td>
        <td>{{ item.drawTime }}</td>
        <td>
          <el-badge
            :value="item.lotteryBallNumbers.flat1"
            class="item"
            type="danger"
          />
        </td>
        <td>
          <el-badge
            :value="item.lotteryBallNumbers.flat2"
            class="item"
            type="primary"
          />
        </td>
        <td>
          <el-badge
            :value="item.lotteryBallNumbers.flat3"
            class="item"
            type=""
          />
        </td>
        <td>
          <el-badge
            :value="item.lotteryBallNumbers.flat4"
            class="item"
            type="success"
          />
        </td>
        <td>
          <el-badge
            :value="item.lotteryBallNumbers.flat5"
            class="item"
            type="info"
          />
        </td>
        <td>
          <el-badge
            :value="item.lotteryBallNumbers.flat6"
            class="item"
            type="warning"
          />
        </td>
        <td>
          <el-badge
            :value="item.lotteryBallNumbers.specialCode"
            class="item"
            type="default"
          />
        </td>
        <td>{{ item.chineseZodiac }}</td>
        <td>{{ item.drawPrize }}</td>
        <td><el-checkbox size="large" /></td>
        <td>
          <div style="display: flex;">
            <el-button size="small">
              <el-icon><Setting /></el-icon>
              Settlement
            </el-button>
            <el-button size="small" type="success">
              <el-icon><Setting /></el-icon>
              Revise
            </el-button>
            <el-button size="small" type="warning">
              <el-icon><Setting /></el-icon>
              Recover
            </el-button>
            <el-button size="small" type="danger">
              <el-icon><CloseBold /></el-icon>
              Delete
            </el-button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <div style="display: flex; justify-content: space-between;">
    <div>
      <el-button type="danger" size="small">
        <el-icon><CloseBold /></el-icon>
        Delete selected periods
      </el-button>
      <el-button type="primary" size="small">
        <el-icon><RefreshRight /></el-icon>
        To refresh
      </el-button>
    </div>
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 40]"
      :small="true"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const currentPage = ref(1)
const pageSize = ref(10)

const form = reactive({
  numberOfIssues: '',
})

const tableData = [
  {
    period: 2023020,
    drawTime: '2023-02-23 21:32:00',
    lotteryBallNumbers: {
      flat1: 32,
      flat2: 4,
      flat3: 34,
      flat4: 45,
      flat5: 56,
      flat6: 21,
      specialCode: 19,
    },
    chineseZodiac: 'Rat Monkey Snake Dragon Monkey + Snake',
    drawPrize: 'Has been drawn',
  },
]
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;
.historical-lottery {
  width: 100%;
  border: $table-border;
  margin-bottom: 5px;
  border-collapse: collapse;
  tr {
    height: 30px;
    th {
      text-align: center;
      padding: 0 10px;
      background-color: $table-th-bgcolor;
      border: $table-border;
    }
    td {
      padding: 5px 10px;
      border: $table-border;
      text-align: center;
    }
  }
}
</style>
