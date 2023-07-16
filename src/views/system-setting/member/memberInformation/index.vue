<template>
  <div style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: left;">
    <h3>{{ $t('menu.memberInformation') }}</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item label="关键字查找">
        <el-input clearable v-model="formData.user_name" placeholder=""></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getUserInfoByFilter">确认</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="userInfoList" v-loading="loading" style="width: 100%;" border stripe>
      <el-table-column type="index" label="编号" align="center" />
      <el-table-column property="credentialInfo" label="帐号密码" align="center">
        <template #default="scope">
          <el-space :size="5" spacer=":">
            <el-icon size="mid">
              <User />
            </el-icon>
            <span>{{ scope.row.UserName }}</span>
          </el-space>
          <br />
          <el-space :size="5" spacer=":">
            <el-icon size="mid">
              <Unlock />
            </el-icon>
            <span>{{ scope.row.PassWord }}</span>
          </el-space>
        </template>
      </el-table-column>
      <el-table-column label="日期时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon>
              <timer />
            </el-icon>
            <span style="margin-left: 10px">{{ scope.row.OnlineTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="备注" align="center">
        <template #default="scope">
          <el-input v-model="scope.row.Notes" placeholder="" type="textarea"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="电话号码" align="center">
        <template #default="scope">
          <el-input v-model="scope.row.Phone" placeholder=""  clearable></el-input>
        </template>
      </el-table-column>
      <el-table-column property="Alias" label="姓名" align="center">
        <template #default="scope">
          <el-input v-model="scope.row.Alias" placeholder=""  clearable></el-input>
        </template>
      </el-table-column>
      <el-table-column property="Money" label="可用余额" align="center" />
      <el-table-column property="LoginIP" label="IP" align="center" />
      <el-table-column property="Bank_Address" label="联系方式" align="center" />
      <el-table-column fixed="right" label="操作" align="center" width="220px">
        <template #default="scope">
          <el-button type="primary" size="small" @click="updateUserInfo(scope.row)">
            更改
          </el-button>
          <!--<el-button type="danger" size="small" @click="deleteUserInfo(scope.row.id)">
            删除
          </el-button>-->
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
import { userInfoStore } from "@/pinia/modules/user_info.js";
export default {
  setup() {
    const { dispatchUserInfoData } = userInfoStore();
    const { dispatchUpdateUserInfoData } = userInfoStore();
    const { dispatchDeleteUserInfoData } = userInfoStore();

    return {
      dispatchUserInfoData,
      dispatchUpdateUserInfoData,
      dispatchDeleteUserInfoData
    }
  },
  data() {
    return {
      formData: {
        user_name: '',
        page_no: 1
      },
      loading: false,
    }
  },
  computed: {
    totalCount: function () {
      const { getTotalCount } = userInfoStore();
      return getTotalCount;
    },
    userInfoList: function () {
      const {getUserInfoList} = userInfoStore();
      return getUserInfoList;
    }
  },
  methods: {
    async getUserInfoByFilter() {
      this.loading = true;
      await this.dispatchUserInfoData(this.formData);
      this.loading = false;
    },
    async onPageChange() {
      this.loading = true;
      await this.dispatchUserInfoData(this.formData);
      this.loading = false;
    },
    async updateUserInfo(item) {
      this.loading = true;
      await this.dispatchUpdateUserInfoData(item);
      await this.dispatchUserInfoData(this.formData);
      this.loading = false;
    },
    async deleteUserInfo(id) {
      this.loading = true;
      await this.dispatchDeleteUserInfoData({id});
      await this.dispatchUserInfoData(this.formData);
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.dispatchUserInfoData(this.formData);
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
