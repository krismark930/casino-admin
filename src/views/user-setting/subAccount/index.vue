<template>
  <el-card shadow="never">
    <el-row :gutter="20">
      <el-form-item label="排序">
        <el-col :span="11">
          <el-select placeholder="帐号">
            <el-option label="帐号" value="account" />
            <el-option label="新增日期" value="adddate" />
          </el-select>
        </el-col>
        <el-col :span="1"></el-col>
        <el-col :span="12">
          <el-select placeholder="升冥(由小到大)">
            <el-option label="升冥(由小到大)" value="account" />
            <el-option label="降冥(由大到小)" value="descending" />
          </el-select>
        </el-col>
      </el-form-item>
    </el-row>
    <el-scrollbar>
      <el-table
        :data="tableData"
        class="sub-account-wrapper"
        border
        header-align="center"
        stripe
      >
        <el-table-column prop="accountNumber" label="帐号" />
        <el-table-column prop="password" label="密码" />
        <el-table-column prop="Name" label="名称" />
        <el-table-column prop="Date" label="日期" />

        <el-table-column prop="Status" label="帐号状况" />
        <el-table-column label="功能" width="180">
          <template #default="scope">
            <el-button link type="primary" size="small">
              修改
            </el-button>
            <br />
            <el-button link type="warning" size="small">
              停用
            </el-button>
            <br />
            <el-button link type="success" size="small">
              权限
            </el-button>
            <br />
            <el-button link type="danger" size="small">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-scrollbar>
    <div style="display: flex; justify-content: center">
      <el-pagination background layout="prev, pager, next" :total="100" />
    </div>
  </el-card>
</template>
<script setup>
import { ref } from 'vue'
const pageSize = ref(10)
const currentPage = ref(1)
const tableData = [
  {
    accountNumber: 'admin666',
    password: '113355aa',
    Name: 'admin666',
    Date: '2018-09-15 20:40:49',
    Status: 'enable',
  },
  {
    accountNumber: 'admin666',
    password: '113355aa',
    Name: 'admin666',
    Date: '2018-09-15 20:40:49',
    Status: 'enable',
  },
  {
    accountNumber: 'admin666',
    password: '113355aa',
    Name: 'admin666',
    Date: '2018-09-15 20:40:49',
    Status: 'enable',
  },
]
</script>
<style lang="scss" scoped>
.sub-account-wrapper {
  width: 100%;
  max-height: 250px;
  margin: 10px 0px;
}
</style>
