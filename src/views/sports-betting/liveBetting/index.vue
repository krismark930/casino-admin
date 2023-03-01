<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>{{ $t('menu.liveBetting') }}</h3>
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
        <el-form-item label="足球审核时间">
          <div style="display: inline-flex; width: 90px;">
            <el-input
              v-model="formData.footballReviewTime.first"
              placeholder=""
            ></el-input>
            <el-input
              v-model="formData.footballReviewTime.second"
              placeholder=""
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="棒球审核时间">
          <div style="display: inline-flex; width: 90px;">
            <el-input
              v-model="formData.baseballReviewTime.first"
              placeholder=""
            ></el-input>
            <el-input
              v-model="formData.baseballReviewTime.second"
              placeholder=""
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="其他审核时间">
          <div style="display: inline-flex; width: 90px;">
            <el-input
              v-model="formData.otherReviewTime.first"
              placeholder=""
            ></el-input>
            <el-input
              v-model="formData.otherReviewTime.second"
              placeholder=""
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary">确定</el-button>
        </el-form-item>
        <el-form-item>
          <el-select v-model="formData.musicOption" style="width: 80px;">
            <el-option
              v-for="item in musicOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="投注时间">
          <el-select v-model="formData.sortOption" style="width: 100px;">
            <el-option
              v-for="item in sortOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="球赛种类">
          <el-select v-model="formData.ballOption" style="width: 80px;">
            <el-option
              v-for="item in ballOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="会员帐号">
          <el-input
            clearable
            v-model="formData.keyword"
            placeholder=""
          ></el-input>
        </el-form-item>
        <el-form-item label="注单日期">
          <el-date-picker
            v-model="formData.betDate"
            placeholder="Select bet date"
            value-format="YYYY-MM-DD"
            style="width: 150px;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-table
      :data="liveBettingData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column label="投注时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.betTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="userName" label="用户名称" align="center" />
      <el-table-column property="gameType" label="球赛种类" align="center" />
      <el-table-column property="content" label="內容" align="center" />
      <el-table-column property="state" label="状态" align="center" />
      <el-table-column property="betAmount" label="投注金额" align="center" />
      <el-table-column
        property="winableAmount"
        label="可赢金额"
        align="center"
      />
      <el-table-column property="result" label="结果" align="center" />
      <el-table-column property="operate" label="操作" align="center" />
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
        betDate: '',
        keyword: '',
        timeOption: '180秒',
        musicOption: '',
        sortOption: '',
        ballOption: '',
        counter: '180',
        footballReviewTime: {
          first: '',
          second: '',
        },
        baseballReviewTime: {
          first: '',
          second: '',
        },
        otherReviewTime: {
          first: '',
          second: '',
        },
      },
      liveBettingData: [
        {
          id: 1,
          betTime: '',
          userName: '',
          gameType: '',
          content: '',
          state: '',
          betAmount: '',
          winableAmount: '',
          result: '',
          function: '',
          operate: '',
        },
      ],
      timeOptions: [
        {
          value: '10秒',
          label: '10秒',
        },
        {
          value: '30秒',
          label: '30秒',
        },
        {
          value: '60秒',
          label: '60秒',
        },
        {
          value: '90秒',
          label: '90秒',
        },
        {
          value: '120秒',
          label: '120秒',
        },
        {
          value: '180秒',
          label: '180秒',
        },
      ],
      musicOptions: [
        {
          value: '无声',
          label: '无声',
        },
        {
          value: '鼓声',
          label: '鼓声',
        },
        {
          value: '铃声',
          label: '铃声',
        },
      ],
      sortOptions: [
        {
          value: '投注时间',
          label: '投注时间',
        },
        {
          value: '投注金额',
          label: '投注金额',
        },
        {
          value: '取消注单',
          label: '取消注单',
        },
        {
          value: '危险注单',
          label: '危险注单',
        },
      ],
      ballOptions: [
        {
          value: '全部',
          label: '全部',
        },
        {
          value: '足球',
          label: '足球',
        },
        {
          value: '篮球',
          label: '篮球',
        },
        {
          value: '棒球',
          label: '棒球',
        },
        {
          value: '网球',
          label: '网球',
        },
        {
          value: '排球',
          label: '排球',
        },
        {
          value: '其它',
          label: '其它',
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
