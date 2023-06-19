<template>
  <div style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;">
    <h3>{{ $t('menu.AGconveresionRecord') }}</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item label="关键字查找">
        <el-input clearable v-model="formData.user_name" placeholder=""></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getAGLogsByFilter">确认</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="agLogList" v-loading="loading" style="width: 100%;" border header-align="center" stripe>
      <el-table-column type="index" label="编号" />
      <el-table-column property="Username" label="帐号" />
      <el-table-column property="AG_User" label="AG真人帐号" />
      <el-table-column property="Alias" label="姓名" />
      <el-table-column property="Gold" label="金额" />
      <el-table-column property="Billno" label="定单号" />
      <el-table-column label="日期时间" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon>
              <timer />
            </el-icon>
            <span style="margin-left: 10px">{{ scope.row.DateTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="Type" label="转换类型">
        <template #defaul="scope">
          <div v-if="scope.row.Type == 'IN'">转入</div>
          <div v-else>转出</div>
        </template>
      </el-table-column>
      <el-table-column property="state" label="状态">
        <template #defaul="scope">
          <Font v-if="scope.row.Result <= 0">失败</Font>
          <Font v-else>成功</Font>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="70">
        <template #default="scope">
          <div v-if="scope.row.Result == 0">已处理</div>
          <div v-else>已转入</div>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="totalCount" @current-change="onPageChange"
        :page-size="20" v-model:current-page="formData.page_no" />
    </div>
  </div>
</template>
<script>
import { gameLogStore } from "@/pinia/modules/game_log.js";
export default {
  setup() {
    const { dispatchAGLogsData } = gameLogStore();
    return {
      dispatchAGLogsData
    }
  },
  data() {
    return {
      formData: {
        user_name: '',
        page_no: 1
      },
      loading: false
    }
  },
  computed: {
    totalCount: function() {
      const {getTotalCount} = gameLogStore();
      return getTotalCount;
    },
    agLogList: function() {
      const {getAGLogList} = gameLogStore();
      return getAGLogList;
    }
  },
  methods: {
    async getAGLogsByFilter() {
      this.loading = true;
      await this.dispatchAGLogsData(this.formData)
      this.loading = false;
    },
    async onPageChange() {
      this.loading = true;
      await this.dispatchAGLogsData(this.formData)
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.dispatchAGLogsData(this.formData)
    this.loading = false;
  }
}
</script>
<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}
</style>
