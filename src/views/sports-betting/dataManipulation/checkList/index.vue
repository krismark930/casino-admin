<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: left;"
  >
    <h3>过关注单</h3>
    <el-table
      :data="checkListData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
      v-loading="loading"
    >
      <el-table-column label="投注时间" property="betTimes" align="center" />
      <el-table-column label="用户名称" align="center">
        <template #default="scope">
          <div v-html="scope.row.mName"></div>
        </template>
      </el-table-column>
      <el-table-column label="球赛种类" align="center">
        <template #default="scope">
          <div v-html="scope.row.mName"></div>
        </template>
      </el-table-column>
      <el-table-column label="MID" align="center">
        <template #default="scope">
          <el-input
            type="textarea"
            v-model="checkListData[scope.$index].mid"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column label="內容" align="center">
        <template #default="scope">
          <div v-html="scope.row.middle"></div>
        </template>
      </el-table-column>
      <el-table-column label="投注" property="betScore" align="center" />
      <el-table-column label="会员" align="center">
        <template #default="scope">
          <div v-html="scope.row.mName"></div>
        </template>
      </el-table-column>
      <el-table-column label="取消" property="cancel" align="center">
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
      <el-table-column fixed="right" align="center" label="功能" width="180">
        <template #default="scope">
          <el-button
            type="primary"
            @click="$ev => modifyEvent(scope.row.id, scope.$index)"
          >
            MID修改
          </el-button>
          <br />
          <br />
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
  GetItems,
  ResumeEvent,
  CancelEvent,
  ModifyEvent,
  GetFunctionTypes,
} from '@/api/sports/data-manipulation/check-list'

export default {
  data() {
    return {
      functions: [],
      functionOptions: [],
      checkListData: [],
      loading: false,
      totalCount: 0,
      page: 1,
    }
  },
  mounted() {
    this.getItems()
    this.getFunctionTypes()
  },
  methods: {
    getItems() {
      this.loading = true
      GetItems({
        page: this.page,
      })
        .then(res => {
          this.checkListData = [...res.data]
          this.totalCount = res.totalCount
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
            value: index,
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
          confirmed: -(index + (index > 11 ? 21 : 1)),
        })
          .then(res => {
            this.getItems()
          })
          .catch(err => {
            console.error('cancle event error', err)
          })
      }
    },
    modifyEvent(id, index) {
      if (confirm('您确定要修改此投注吗?')) {
        ModifyEvent({ id, mid: this.checkListData[index].mid })
          .then(res => {
            this.getItems()
          })
          .catch(err => {
            console.error('cancle event error', err)
          })
      }
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
