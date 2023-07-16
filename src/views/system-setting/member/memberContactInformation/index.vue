<template>
  <div style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: left;">
    <h3>{{ $t('menu.memberContactInformation') }}</h3>
    <el-table :data="contactInfoList" style="width: 100%;" border header-align="center" stripe>
      <el-table-column type="index" label="编号" width="120" />
      <el-table-column property="Name" label="名字" width="180" />
      <el-table-column label="日期" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon>
              <timer />
            </el-icon>
            <span style="margin-left: 10px">{{ scope.row.time }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="Content" label="内容" />
      <el-table-column property="Phone" label="电话号码" width="120" />
      <el-table-column property="QQnum" label="QQSkype" width="120" />
      <el-table-column property="Mail" label="电邮信箱" width="120" />
      <el-table-column property="IP" label="IP" width="120" />
      <el-table-column property="Url" label="网址" width="120" />
      <el-table-column fixed="right" label="功能" width="70">
        <template #default="scope">
          <el-button type="primary" icon="delete" @click="deleteContactInfo(scope.row.ID)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { userInfoStore } from "@/pinia/modules/user_info.js";
export default {
  setup() {
    const { dispatchContactInfoData } = userInfoStore();
    const { dispatchDeleteContactInfoData } = userInfoStore();

    return {
      dispatchContactInfoData,
      dispatchDeleteContactInfoData
    }
  },
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    contactInfoList: function () {
      const { getContactInfoList } = userInfoStore();
      return getContactInfoList;
    }
  },
  methods: {
    async deleteContactInfo(ID) {
      this.loading = true;
      await this.dispatchDeleteContactInfoData({ ID });
      await this.dispatchContactInfoData({});
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.dispatchContactInfoData({});
    this.loading = false;
  }
}
</script>

<style lang="scss" scoped></style>
