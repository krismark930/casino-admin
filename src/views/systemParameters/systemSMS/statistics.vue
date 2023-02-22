<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <h3>统计数据</h3>
    <el-form :model="formData" inline="true">
      <el-form-item>
        <el-input
          v-model="formData.memberAccount"
          placeholder="会员账号"
          clearable
          style="width: 300px; padding-right: 10px;"
        >
          <template #append>
            <el-button type="primary">
              <el-icon style="vertical-align: middle">
                <Search />
              </el-icon>
              <span style="vertical-align: middle">搜索</span>
            </el-button>
          </template>
        </el-input>
        <el-button type="danger">
          删除所选
          <el-icon class="el-icon--right"><Delete /></el-icon>
        </el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="statisticsData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column type="selection" width="55" />
      <el-table-column property="accountNumber" label="帐号" width="120" />
      <el-table-column label="新增时间" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">
              {{ scope.row.accountAddTime }}
            </span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="title" label="标题" width="120" />
      <el-table-column property="content" label="内容" />
      <el-table-column property="state" label="状态" width="120" />
      <el-table-column fixed="right" label="功能" width="70">
        <template #default="scope">
          <el-button
            type="primary"
            icon="delete"
            @click="deleteData(scope.$index, scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="100" />
    </div>
  </div>
</template>
<script>
import { Delete } from '@element-plus/icons-vue'

export default {
  data() {
    return {
      formData: {
        memberAccount: '',
      },
      statisticsData: [
        {
          id: 1,
          accountNumber: 'aaaaa1234',
          accountAddTime: '2021-04-28',
          title: '测试',
          content: '测试',
          state: '未阅',
        },
        {
          id: 2,
          accountNumber: 'aaaaa1234',
          accountAddTime: '2021-04-28',
          title: '测试',
          content: '测试',
          state: '未阅',
        },
        {
          id: 3,
          accountNumber: 'aaaaa1234',
          accountAddTime: '2021-04-28',
          title: '测试',
          content: '测试',
          state: '未阅',
        },
      ],
    }
  },
  methods: {
    deleteData(id) {
      console.log(id)
    },
  },
  components: { Delete },
}
</script>

<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}
</style>
