<template>
  <el-form v-model="form">
    <el-row :gutter="10">
      <el-col :span="10">
        <el-form-item label="期数：">
          <el-input v-model="form.numberOfIssues" />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-button>
          确定搜索
        </el-button>
      </el-col>
      <el-col :span="8">
        <el-button>
          <el-icon><Plus /></el-icon>
          所有期数
        </el-button>
        <el-button>
          <el-icon><Plus /></el-icon>
          显示
        </el-button>
        <el-button>
          <el-icon><Plus /></el-icon>
          隐藏
        </el-button>
      </el-col>
    </el-row>
  </el-form>
  <table class="historical-lottery">
    <thead>
      <tr>
        <th colspan="2">六合彩</th>
        <td colspan="12"></td>
      </tr>
      <tr>
        <th rowspan="2" style="width: 10px;">
          <el-checkbox size="large" />
        </th>
        <th rowspan="2">期数</th>
        <th rowspan="2">开奖时间</th>
        <th colspan="7">开奖球号</th>
        <th rowspan="2">生肖</th>
        <th rowspan="2">是否开奖</th>
        <th rowspan="2">状态</th>
        <th rowspan="2">操作</th>
      </tr>
      <tr>
        <th>平1</th>
        <th>平2</th>
        <th>平3</th>
        <th>平4</th>
        <th>平5</th>
        <th>平6</th>
        <th>特码</th>
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
              结算
            </el-button>
            <el-button size="small" type="success">
              <el-icon><Setting /></el-icon>
              修改
            </el-button>
            <el-button size="small" type="warning">
              <el-icon><Setting /></el-icon>
              恢复
            </el-button>
            <el-button size="small" type="danger">
              <el-icon><CloseBold /></el-icon>
              删除
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
        删除选定期数
      </el-button>
      <el-button type="primary" size="small">
        <el-icon><RefreshRight /></el-icon>
        刷新
      </el-button>
    </div>
  </div>
  <div style="display: flex; justify-content: center">
    <el-pagination background layout="prev, pager, next" :total="100" />
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
    chineseZodiac: '狗鼠猴蛇龙猴+蛇	',
    drawPrize: '已开奖',
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
