<template>
  <div style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;">
    <h3>{{ $t('menu.championBettings') }}</h3>
    <el-form :inline="true" :model="formData">
      <div>
        <el-form-item label="">
          <el-button type="primary" @click="getItems">手动更新</el-button>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="formData.timeOption" style="width: 80px;">
            <el-option v-for="item in timeOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <span style="margin-left: 10px;">{{ formData.counter + '秒' }}</span>
        </el-form-item>
        <el-form-item label="会员帐号">
          <el-input clearable v-model="formData.keyword" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" @click="getItems">确认</el-button>
        </el-form-item>
        <el-form-item label="投注状态">
          <el-select v-model="formData.betStatusOption" style="width: 80px;" @change="getItems">
            <el-option v-for="item in betStatusOptions" :key="item.value" :label="item.label"
              :value="item.value"></el-option>
          </el-select>
        </el-form-item>
      </div>
    </el-form>
    <el-table :data="championBettingData.slice((page - 1) * 20, page * 20)" style="width: 100%;" border
      header-align="center" stripe v-loading="loading">
      <el-table-column property="userName" label="用户名称" align="center">
        <template #default="scope">
          {{ scope.row.userName }}<br>
          <font color="#cc0000">
            {{ scope.row.OpenType }}&nbsp;&nbsp;{{ scope.row.TurnRate }}
          </font>
        </template>
      </el-table-column>
      <el-table-column property="minutes" label="分钟数" align="center">
        <template #default="scope">
          <div v-html="scope.row.minutes"></div>
        </template>
      </el-table-column>
      <el-table-column label="投注时间" width="130" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon>
              <timer />
            </el-icon>
            <span style="margin-left: 10px" v-html="scope.row.bettingTime"></span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="开始时间" width="130" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon>
              <timer />
            </el-icon>
            <span style="margin-left: 10px">{{ scope.row.startingTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="gameType" label="球赛种类" align="center" />
      <el-table-column property="content" width="200" label="內容" align="center">
        <template #default="scope">
          <div v-html="scope.row.content"></div>
        </template>
      </el-table-column>
      <el-table-column property="state" label="状态" align="center">
        <template #default="scope">
          <div v-html="scope.row.state"></div>
        </template>
      </el-table-column>
      <el-table-column property="betAmount" label="投注金额" align="center">
        <template #default="scope">
          <div v-html="scope.row.betAmount"></div>
        </template>
      </el-table-column>
      <el-table-column property="winableAmount" label="可赢金额" align="center" />
      <el-table-column property="memberResult" label="会员结果" align="center">
        <template #default="scope">
          <div v-html="scope.row.memberResult"></div>
        </template>
      </el-table-column>
      <el-table-column property="betSlip" label="注单" align="center">
        <template #default="scope">
          <div style="color: red; cursor: pointer;" @click="deleteReport(scope.row.id)"><b>删除</b></div>
          <div v-html="scope.row.betSlip"></div>
        </template>
      </el-table-column>
      <el-table-column property="function" width="180" label="功能" align="center">
        <template #default="scope">
          <el-select style="width: 110px;" v-model="functions[scope.$index]">
            <el-option v-for="(item, index) in functionOptions" :key="item.value" :label="item.label" :value="item.value"
              @click="$event => handleClick(scope.row, index)"></el-option>
          </el-select>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="championBettingData.length" :page-size="20"
        @current-change="onPageChange" v-model:current-page="page" />
    </div>
  </div>
  <el-backtop :right="60" :bottom="60" target=".main" />
</template>
<script>
import {
  GetItems,
  GetFunctionItems,
  ResumeEvent,
  CancelEvent,
  BalanceEvent,
} from '@/api/sports/champion-betting'
import { useChampionBettingStore } from "@/pinia/modules/champion_betting";

const keyValues = [
  { key: '', confirmed: '' },
  {
    key: 'balance',
    confirmed: '11',
  },
  {
    key: 'balance',
    confirmed: '12',
  },
  {
    key: 'balance',
    confirmed: '15',
  },
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
  setup() {
    const { dispatchChampionDeleteEvent } = useChampionBettingStore();
    return {
      dispatchChampionDeleteEvent
    }
  },
  data() {
    return {
      formData: {
        timeOption: '',
        keyword: '',
        betStatusOption: 'all',
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
          value: 'all',
          label: '全部',
        },
        {
          value: 'Y',
          label: '有结果',
        },
        {
          value: 'N',
          label: '未有结果',
        },
        {
          value: 'W',
          label: '客户赢钱',
        },
        {
          value: 'W>=500',
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
      timeOptions: [
        {
          value: '10',
          label: '10秒',
        },
        {
          value: '30',
          label: '30秒',
        },
        {
          value: '60',
          label: '60秒',
        },
        {
          value: '90',
          label: '90秒',
        },
        {
          value: '120',
          label: '120秒',
        },
        {
          value: '180',
          label: '180秒',
        },
      ],
      functionOptions: [{ value: '注单处理', label: '注单处理' }],
      functions: [],
      loading: false,
      totalCount: 0,
      page: 1,
    }
  },
  mounted() {
    this.getItems()
    this.getFunctionItems()
  },
  computed: {
    success: function () {
      const { getSuccess } = useChampionBettingStore();
      return getSuccess;
    }
  },
  methods: {
    async deleteReport(id) {
      await this.dispatchChampionDeleteEvent({ id: id });
      if (this.success) {
        this.getItems();
      }
    },
    handleClick(item, index) {
      if (index) {
        if (keyValues[index].key === 'resume') {
          if (confirm('确实恢复本场注单吗?')) {
            ResumeEvent({
              id: item.id,
              gid: item.gid,
              confirmed: keyValues[index].confirmed,
            })
              .then(res => {
                if (res) {
                  alert(res)
                }
                this.getItems()
              })
              .catch(err => {
                alert(err?.response?.data)
                console.error('resume event error', err?.response?.data)
              })
          }
        } else if (keyValues[index].key === 'cancel') {
          if (confirm('确实取消本注单吗?')) {
            CancelEvent({
              id: item.id,
              gid: item.gid,
              confirmed: keyValues[index].confirmed,
            })
              .then(res => {
                if (res) {
                  alert(res)
                }
                this.getItems()
              })
              .catch(err => {
                alert(err?.response?.data)
                console.error('cancel event error', err?.response?.data)
              })
          }
        } else if (keyValues[index].key === 'balance') {
          if (confirm('确实结算本场注单吗?')) {
            BalanceEvent({
              id: item.id,
              gid: item.gid,
              confirmed: keyValues[index].confirmed,
            })
              .then(res => {
                if (res) {
                  alert(res)
                }
                this.getItems()
              })
              .catch(err => {
                alert(err?.response?.data)
                console.error('balance event error', err?.response?.data)
              })
          }
        }
      }
    },
    getItems() {
      this.loading = true
      GetItems({
        username: this.formData.keyword,
        result_type: this.formData.betStatusOption,
        ball: this.formData.ballOption,
        page: this.page,
      })
        .then(res => {
          this.championBettingData = [...res.data]
          // this.totalCount = res.totalCount
          this.functions = [...Array(res.data.length)].map(_ => '注单处理')
          this.loading = false
        })
        .catch(err => {
          console.error('get items', err)
          this.loading = false
        })
    },
    getFunctionItems() {
      GetFunctionItems()
        .then(data => {
          this.functionOptions = [...this.functionOptions, ...data]
        })
        .catch(err => console.error('get functions error', err))
    },
    onPageChange(currentPage) {
      this.getItems()
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
