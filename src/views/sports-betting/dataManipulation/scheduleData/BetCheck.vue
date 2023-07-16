<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: left;"
  >
    <h3>赛程数据</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item>
        <el-button type="info" @click="goBack">回上一頁</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="scheduleData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
      v-loading="loading"
    >
      <el-table-column label="投注时间" width="130" align="center">
        <template #default="scope">
          <div v-html="scope.row.betTimes"></div>
        </template>
      </el-table-column>
      <el-table-column label="用户名称" width="100px" align="center">
        <template #default="scope">
          <div v-html="scope.row.mName"></div>
        </template>
      </el-table-column>
      <el-table-column
        property="team"
        label="球赛种类"
        align="center"
        width="210px"
      >
        <template #default="scope">
          <div v-html="scope.row.betType"></div>
        </template>
      </el-table-column>
      <el-table-column label="內容" align="center">
        <template #default="scope">
          <div v-html="scope.row.middle"></div>
        </template>
      </el-table-column>
      <el-table-column label="投注金额" align="center">
        <template #default="scope">
          <div v-html="scope.row.betScore"></div>
        </template>
      </el-table-column>
      <el-table-column label="会员结果" align="center">
        <template #default="scope">
          <div v-html="scope.row.mResult"></div>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="right" width="120">
        <template #default="scope">
          <el-button
            v-if="scope.row.cancel == 1"
            @click="() => resumeEvent(scope.row)"
          >
            <font color="red"><b>恢复</b></font>
          </el-button>
          <font v-else color="blue"><b>正常</b></font>
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
              @click="$event => cancelEvent(scope.row, index)"
            ></el-option>
          </el-select>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totalCount"
        :page-size="20"
        @current-change="onPageChange"
        v-model:current-page="page"
      />
    </div>
  </div>
  <el-backtop :right="60" :bottom="60" target=".main" />
</template>
<script>
import {
  GetFunctionTypes,
  BetCheckGetItems as GetItems,
  CancelEvent,
  ResumeEvent,
} from '@/api/sports/data-manipulation/schedule-data'

export default {
  data() {
    return {
      formData: {
        alliance: '',
        gtype: 'FT',
        dateStart: new Date().toISOString().split('T')[0],
      },
      functions: [],
      functionOptions: [],
      scheduleData: [],
      loading: false,
      totalCount: 0,
      page: 1,
    }
  },
  mounted() {
    this.getFunctionTypes()
    this.getItems()
  },
  methods: {
    testfunc() {
      console.log(this.formData.alliance)
    },
    getItems() {
      this.loading = true
      GetItems({
        id: this.$route.params.id,
        type: this.$route.params.type,
        page: this.page,
      })
        .then(data => {
          this.scheduleData = [...data]
          this.loading = false
        })
        .catch(err => {
          this.loading = false
        })
    },
    getFunctionTypes() {
      GetFunctionTypes()
        .then(data => {
          this.functionOptions = data.map((funcType, index) => ({
            value: index ? -index : index,
            label: funcType,
          }))
          console.log(this.functionOptions)
          this.functions = [...Array(data.length)].map(_ => 0)
        })
        .catch(err => {
          console.error('get function types error', err)
        })
    },
    resumeEvent(row) {
      if (confirm('您确定要恢复此投注吗?')) {
        ResumeEvent({
          id: row.id,
          gid: row.gid,
        })
          .then(res => {
            this.getItems()
          })
          .catch(err => {
            console.error('resume event error', err)
          })
      }
    },
    cancelEvent(row, index) {
      if (confirm('确实取消本场注单吗?')) {
        CancelEvent({
          id: row.id,
          gid: row.gid,
          confirmed: -(index + 1),
        })
          .then(res => {
            this.getItems()
          })
          .catch(err => {
            console.error('cancle event error', err)
          })
      }
    },
    goBack() {
      this.$router.go(-1)
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
