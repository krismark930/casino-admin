<template>
  <div
    v-if="listShow"
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 1rem; text-align: left"
  >
    <h3>会员设置</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item label="会员">
        <el-input clearable v-model="formData.user_name" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="getUserConfigByFilter">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="userConfigList"
      v-loading="loading"
      style="width: 100%"
      border
      header-align="center"
      stripe
    >
      <el-table-column property="username" label="会员账号" align="center" />
      <el-table-column property="alias" label="姓名" align="center" />
      <el-table-column property="money" label="可用金额" align="center" />
      <el-table-column property="status" label="状态" align="center" />
      <el-table-column fixed="right" label="操作" width="100" align="center">
        <template #default="scope">
          <el-button type="primary" size="small" @click="getUserConfigItem(scope.row.id)">
            会员设置
          </el-button>
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
        v-model:current-page="formData.page_no"
      />
    </div>
  </div>
  <div v-if="itemShow">
    <EditItem :id="id" />
  </div>
</template>
<script>
import { userConfigStore } from "@/pinia/modules/always_color/user_config.js";
import EditItem from "./editItem.vue";
import { ElLoading } from "element-plus";
import { ElNotification } from "element-plus";
import moment from "moment-timezone";
export default {
  components: {
    EditItem,
  },
  setup() {
    const { dispatchUserConfigList } = userConfigStore();
    return {
      dispatchUserConfigList,
    }
  },
  data() {
    return {
      loading: false,
      listShow: true,
      itemShow: false,
      formData: {
        user_name: "",
        page_no: 1,
      },
    }
  },
  methods: {
    getUserConfigByFilter: async function () {
      this.loading = true;
      await this.dispatchUserConfigList(this.formData);
      this.loading = false;
    },
    onPageChange: async function () {
      this.loading = true;
      await this.dispatchUserConfigList(this.formData);
      this.loading = false;
    },
    getUserConfigItem(id) {
      this.id = id;
      this.listShow = false;
      this.itemShow = true;
    },
  },
  computed: {
    totalCount: function () {
      const { getTotalCount } = userConfigStore();
      return getTotalCount;
    },
    userConfigList: function () {
      const { getUserConfigList } = userConfigStore();
      return getUserConfigList;
    },
  },
  async mounted() {
    this.loading = true;
    await this.dispatchUserConfigList(this.formData);
    this.loading = false;
  },
};
</script>
<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}
</style>
