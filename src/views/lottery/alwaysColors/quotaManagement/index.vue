<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 1rem; text-align: center;"
  >
    <h3>会员设置</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item label="会员">
        <el-input clearable v-model="formData.member" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="memberSettingsData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column
        property="memberAccount"
        label="会员账号"
        align="center"
      />
      <el-table-column property="name" label="姓名" align="center" />
      <el-table-column
        property="availableAmount"
        label="可用金额"
        align="center"
      />
      <el-table-column property="state" label="状态" align="center" />
      <el-table-column fixed="right" label="操作" width="100" align="center">
        <template #default="scope">
          <el-button
            type="primary"
            size="small"
            @click="setMember(scope.$index, scope.row)"
          >
            会员设置
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="100" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        member: '',
      },
      memberSettingsData: [
        {
          memberAccount: '默认配置',
          name: '默认配置',
          availableAmount: '0',
          state: '启用',
        },
      ],
    }
  },
  methods: {
    setMember(index, row) {
      console.log(index, row)
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
