<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>{{ $t('menu.liveBetting') }}</h3>
    <el-form :inline="true" :model="formData">
      <div>
        <el-form-item label="">
          <el-button type="primary" @click="getItems">手动更新</el-button>
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
          <span style="margin-left: 10px;">{{ timerCount + '秒' }}</span>
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
          <el-button type="primary" @click="getItems">确定</el-button>
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
            placeholder=""
            value-format="YYYY-MM-DD"
            style="width: 150px;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getItems">提交</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-table
      :data="liveBettingData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
      v-loading="loading"
    >
      <el-table-column label="投注时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">
              {{ scope.row.betTime }}
            </span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="userName" label="用户名称" align="center" />
      <el-table-column property="gameType" label="球赛种类" align="center" />
      <el-table-column
        property="content"
        label="內容"
        align="center"
        width="250"
      >
        <template #default="scope">
          <div v-html="scope.row.content"></div>
        </template>
      </el-table-column>
      <el-table-column property="state" label="状态" align="center">
        <template #default="scope">
          <div v-html="scope.row.state"></div>
        </template>
      </el-table-column>
      <el-table-column property="betAmount" label="投注金额" align="center" />
      <el-table-column
        property="winableAmount"
        label="可赢金额"
        align="center"
      />
      <el-table-column property="result" label="结果" align="center" />
      <el-table-column property="operate" label="操作" align="center">
        <template #default="scope">
          <div v-html="scope.row.operate"></div>
        </template>
      </el-table-column>
      <el-table-column
        property="function"
        label="功能"
        align="center"
        width="150"
      >
        <template #default="scope">
          <el-select style="width: 130px;" v-model="functions[scope.$index]">
            <el-option
              v-for="(item, index) in functionOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              @click="$event => handleClick(scope.row, index)"
            ></el-option>
          </el-select>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="100" />
    </div>
  </div>
</template>
<script>
import {
  GetItems,
  GetFunctionItems,
  ResumeEvent,
  CancelEvent,
} from '@/api/sports/livebetting'

const keyValues = [
  { key: '', confirmed: '' },
  {
    key: 'resume',
    confirmed: '',
  },
  {
    key: 'cancel',
    confirmed: '-1',
  },
  {
    key: 'cancel',
    confirmed: '-2',
  },
  {
    key: 'cancel',
    confirmed: '-3',
  },
  {
    key: 'cancel',
    confirmed: '-4',
  },
  {
    key: 'cancel',
    confirmed: '-5',
  },
  {
    key: 'cancel',
    confirmed: '-6',
  },
  {
    key: 'cancel',
    confirmed: '-7',
  },
  {
    key: 'cancel',
    confirmed: '-8',
  },
  {
    key: 'cancel',
    confirmed: '-9',
  },
  {
    key: 'cancel',
    confirmed: '-10',
  },
  {
    key: 'cancel',
    confirmed: '-11',
  },
  {
    key: 'cancel',
    confirmed: '-12',
  },
  {
    key: 'cancel',
    confirmed: '-13',
  },
  {
    key: 'cancel',
    confirmed: '-14',
  },
  {
    key: 'cancel',
    confirmed: '-15',
  },
  {
    key: 'cancel',
    confirmed: '-16',
  },
  {
    key: 'cancel',
    confirmed: '-17',
  },
  {
    key: 'cancel',
    confirmed: '-18',
  },
  {
    key: 'cancel',
    confirmed: '-19',
  },
  {
    key: 'cancel',
    confirmed: '-20',
  },
  {
    key: 'cancel',
    confirmed: '-21',
  },
]

export default {
  data() {
    return {
      formData: {
        betDate: new Date().toISOString().split('T')[0],
        keyword: '',
        timeOption: 180,
        musicOption: '',
        sortOption: '',
        ballOption: '',
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
          betTime: '2023-02-3',
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
        {
          id: 2,
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
          value: 10,
          label: '10秒',
        },
        {
          value: 30,
          label: '30秒',
        },
        {
          value: 60,
          label: '60秒',
        },
        {
          value: 90,
          label: '90秒',
        },
        {
          value: 120,
          label: '120秒',
        },
        {
          value: 180,
          label: '180秒',
        },
      ],
      musicOptions: [
        {
          value: '0',
          label: '无声',
        },
        {
          value: '1',
          label: '鼓声',
        },
        {
          value: '2',
          label: '铃声',
        },
      ],
      sortOptions: [
        {
          value: 'BetTime',
          label: '投注时间',
        },
        {
          value: 'Gwin',
          label: '投注金额',
        },
        {
          value: 'Cancel',
          label: '取消注单',
        },
        {
          value: 'Danger',
          label: '危险注单',
        },
      ],
      ballOptions: [
        {
          value: '',
          label: '全部',
        },
        {
          value: '1',
          label: '足球',
        },
        {
          value: '2',
          label: '篮球',
        },
        {
          value: '3',
          label: '棒球',
        },
        {
          value: '4',
          label: '网球',
        },
        {
          value: '5',
          label: '排球',
        },
        {
          value: '6',
          label: '其它',
        },
      ],
      loading: false,
      timerCount: 180,
      timer: null,
      functions: [],
      functionOptions: [
        {
          value: '注单处理',
          label: '注单处理',
        },
      ],
    }
  },

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          this.timer = setTimeout(() => {
            this.timerCount--
          }, 1000)
        } else {
          this.getItems()
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
    'formData.timeOption': {
      handler(value) {
        this.restartCountdown()
      },
    },
  },

  beforeUnmount() {
    clearTimeout(this.timer)
  },

  mounted() {
    this.getItems()
    this.getFunctionItems()
  },
  methods: {
    testFunc() {},
    restartCountdown() {
      clearTimeout(this.timer)
      if (this.timerCount !== this.formData.timeOption) {
        this.timerCount = this.formData.timeOption
      } else {
        this.timer = setTimeout(() => {
          this.timerCount--
        }, 1000)
      }
    },
    handleClick(item, index) {
      if (index) {
        if (keyValues[index].key === 'resume') {
          if (confirm('确实恢复本注单吗?')) {
            ResumeEvent({ id: item.id, confirmed: keyValues[index].confirmed })
              .then(res => {
                this.getItems()
              })
              .catch(err => {
                console.error('resume event error', err)
              })
          }
        } else if (keyValues[index].key === 'cancel') {
          if (confirm('确实取消本注单吗?')) {
            CancelEvent({ id: item.id, confirmed: keyValues[index].confirmed })
              .then(res => {
                this.getItems()
              })
              .catch(err => {
                console.error('resume event error', err)
              })
          }
        }
      }
    },
    deleteDepositData(index, row) {
      console.log(index, row)
    },
    getItems() {
      this.loading = true
      GetItems({
        m_date: this.formData.betDate,
        sort: this.formData.sortOption,
        match: this.formData.ballOption,
        memname: this.formData.keyword,
        FT: this.formData.footballReviewTime.first,
        FT1: this.formData.footballReviewTime.second,
        BS: this.formData.baseballReviewTime.first,
        BS1: this.formData.baseballReviewTime.second,
        OP: this.formData.otherReviewTime.first,
        OP1: this.formData.otherReviewTime.second,
      })
        .then(data => {
          this.liveBettingData = [...data]
          this.loading = false
          this.functions = [...Array(data.length)].map(_ => '注单处理')
          // timerCount
          this.restartCountdown()
        })
        .catch(err => {
          this.loading = false
          this.restartCountdown()
        })
    },

    getFunctionItems() {
      GetFunctionItems().then(data => {
        this.functionOptions = [...this.functionOptions, ...data]
      })
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
