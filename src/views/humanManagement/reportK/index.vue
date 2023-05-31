<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>報表(开元棋牌)</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item label="真人账号">
        <el-input
          clearable
          v-model="formData.user"
          placeholder=""
        ></el-input>
      </el-form-item>
      <el-form-item label="开始日期">
        <el-date-picker
          type="datetime"
          v-model="formData.s_time"
          placeholder=""
          value-format="YYYY-MM-DD HH:mm:ss"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="结束日期">
        <el-date-picker
          type="datetime"
          v-model="formData.e_time"
          placeholder=""
          value-format="YYYY-MM-DD HH:mm:ss"
        ></el-date-picker>
      </el-form-item>
    </el-form>
    <el-form :inline="true" :model="formData">
      <el-form-item label="投注类型">
        <el-select v-model="formData.type" style="width: 150px;">
          <el-option
            v-for="item in kyTypeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="getQueryResultByFilter">确认</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="reportList"
      v-loading="loading"
      style="width: 100%;"
      border
      header-align="center"
      stripe
      show-summary
    >
      <el-table-column type="index" width="100px" label="编号" align="center" />
      <el-table-column property="user_name" label="真人帐号" align="center" />
      <el-table-column property="bs" label="笔数" align="center" />
      <el-table-column property="tz" label="投注金额" align="center" />
      <el-table-column
        property="yxtz"
        label="有效投注额"
        align="center"
      />
      <el-table-column
        property="jg"
        label="会员结果"
        align="center"
      />
    </el-table>
  </div>
  <el-backtop :right="60" :bottom="60" target=".main" />
</template>
<script>
import { humanManagementStore } from "@/pinia/modules/human_management.js";
import moment from "moment-timezone";
export default {
  setup() {
    const {dispatchReportKy} = humanManagementStore();
    return {
      dispatchReportKy
    }
  },
  data() {
    return {
      loading: false,
      formData: {
        s_time: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD HH:mm:ss"),
        e_time: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD HH:mm:ss"),
        user: '',
        type: '',
      },
    }
  },
  methods: {
    getQueryResultByFilter: async function() {
      this.loading = true;
      await this.dispatchReportKy(this.formData);
      this.loading = false;
    },
  },
  computed: {
    kyTypeOptions: function() {
      const {getKyTypeOptions} = humanManagementStore();
      return getKyTypeOptions;
    },
    reportList: function() {
      const {getReportKyList} = humanManagementStore();
      return getReportKyList;
    },
  },
  async mounted() {
    this.loading = true;
    await(this.dispatchReportKy(this.formData));
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
