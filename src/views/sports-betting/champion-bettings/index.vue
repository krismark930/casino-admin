<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>{{ $t('menu.championBettings') }}</h3>
    <el-form :inline="true" :model="formData">
      <div>
        <el-form-item label="">
          <el-button type="primary">手动更新</el-button>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="formData.timeOption" style="width: 80px;">
            <el-option
              v-for="item in timeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <span style="margin-left: 10px;">{{ formData.counter + '秒' }}</span>
        </el-form-item>
        <el-form-item label="会员帐号">
          <el-input
            clearable
            v-model="formData.keyword"
            placeholder=""
          ></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary">确认</el-button>
        </el-form-item>
        <el-form-item label="投注状态">
          <el-select v-model="formData.betStatusOption" style="width: 80px;">
            <el-option
              v-for="item in betStatusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
    </el-form>
    <el-table
      :data="championBettingData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column property="userName" label="用户名称" align="center" />
      <el-table-column property="minutes" label="分钟数" align="center" />
      <el-table-column label="投注时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.bettingTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="开始时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.startingTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="gameType" label="球赛种类" align="center" />
      <el-table-column property="content" label="內容" align="center" />
      <el-table-column property="state" label="状态" align="center" />
      <el-table-column property="betAmount" label="投注金额" align="center" />
      <el-table-column
        property="winableAmount"
        label="可赢金额"
        align="center"
      />
      <el-table-column
        property="memberResult"
        label="会员结果"
        align="center"
      />
      <el-table-column property="betSlip" label="注单" align="center" />
      <el-table-column property="function" label="功能" align="center" />
      <!-- <el-table-column fixed="right" label="操作" width="70">
          <template #default="scope">
            <el-button
              type="primary"
              icon="delete"
              @click="deleteDepositData(scope.$index, scope.row)"
            ></el-button>
          </template>
        </el-table-column> -->
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="100" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        keyword: '',
        betStatusOption: '',
        counter: '180',
      },
      championBettingData: [
        {
          userName: '',
          minutes: '',
          bettingTime: '',
          startingTime: '',
          gameType: '',
          content: '',
          state: '',
          betAmount: '',
          winableAmount: '',
          memberResult: '',
          betSlip: '',
          function: '',
        },
      ],
      betStatusOptions: [
        {
          value: '全部',
          label: '全部',
        },
        {
          value: '有结果',
          label: '有结果',
        },
        {
          value: '未有结果',
          label: '未有结果',
        },
        {
          value: '客户赢钱',
          label: '客户赢钱',
        },
        {
          value: '赢钱>=500',
          label: '赢钱>=500',
        },
        {
          value: '>=100',
          label: '>=100',
        },
        {
          value: '>=500',
          label: '>=500',
        },
        {
          value: '>=1000',
          label: '>=1000',
        },
        {
          value: '>=5000',
          label: '>=5000',
        },
        {
          value: '>=10000',
          label: '>=10000',
        },
      ],
    }
  },
  methods: {
    deleteDepositData(index, row) {
      console.log(index, row)
    },
  },
}
</script>
<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}
</style>
