<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: left; margin: 1rem;"
  >
    <h3>查询注单(捕鱼王)</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item label="真人账号">
        <el-input
          clearable
          v-model="formData.user"
          placeholder=""
        ></el-input>
      </el-form-item>
      <el-form-item label="注单日期">
        <el-date-picker
          v-model="formData.date"
          placeholder=""
          value-format="YYYY-MM-DD"
          style="width: 150px;"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="getQueryResultByFilter">确认</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="queryList"
      v-loading="loading"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column type="index" :index="indexMethod" label="编号" align="center" />
      <el-table-column property="playerName" label="真人帐号" align="center" />
      <el-table-column
        property="tradeNo"
        label="交易编号"
        align="center"
      />
      <el-table-column property="sceneId" label="场景ID" align="center" />
      <el-table-column property="Roomid" label="房间号" align="center" />
      <el-table-column
        property="Roombet"
        label="房間倍率"
        align="center"
      />
      <el-table-column label="开始时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.SceneStartTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="结束时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.SceneEndTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="Type" label="类型" align="center" />
      <el-table-column property="Cost" label="投注金额" align="center" />
      <el-table-column
        property="Earn"
        label="派彩金额"
        align="center"
      />
      <el-table-column
        property="Jackpotcomm"
        label="Jackpot彩池"
        align="center"
      />
      <el-table-column
        label="是否返水"
        align="center"
      >
        <template #default="scope">
          <font color=blue v-if="scope.row.isFS == 1">已返水</font>
          <font color=red v-else>未返水</font>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="totalCount" 
        :page-size="20"
        @current-change="onPageChange"
        v-model:current-page="formData.page_no" />
    </div>
  </div>
</template>
<script>
import { humanManagementStore } from "@/pinia/modules/human_management.js";
import moment from "moment-timezone";
export default {
  setup() {
    const {dispatchQueryHtr} = humanManagementStore();
    return {
      dispatchQueryHtr
    }
  },
  data() {
    return {
      loading: false,
      formData: {
        date: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
        user: '',
        page_no: 1,
      },
    }
  },
  methods: {
    getQueryResultByFilter: async function() {
      this.loading = true;
      await this.dispatchQueryHtr(this.formData);
      this.loading = false;
    },
    onPageChange: async function() {
      this.loading = true;
      await this.dispatchQueryHtr(this.formData);
      this.loading = false;
    },
    indexMethod: function(index) {
      return index + 1 + (this.formData.page_no - 1) * 20;
    }
  },
  computed: {
    queryList: function() {
      const {getQueryHtrList} = humanManagementStore();
      return getQueryHtrList;
    },
    totalCount: function() {
      const {getTotalCount} = humanManagementStore();
      return getTotalCount;
    }
  },
  async mounted() {
    this.loading = true;
    await(this.dispatchQueryHtr(this.formData));
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
