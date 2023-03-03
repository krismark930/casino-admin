<template>
  <el-card shadow="never">
    <el-row :gutter="20">
      <el-form-item label="Sort By">
        <el-col :span="11">
          <el-select placeholder="Account">
            <el-option label="Account" value="account" />
            <el-option label="Add Date" value="adddate" />
          </el-select>
        </el-col>
        <el-col :span="1"></el-col>
        <el-col :span="12">
          <el-select placeholder="Ascending">
            <el-option label="Ascending(From small to big)" value="account" />
            <el-option
              label="Descending(From big to small)"
              value="descending"
            />
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
        <el-table-column prop="accountNumber" label="Account Number" />
        <el-table-column prop="password" label="Password" />
        <el-table-column prop="Name" label="Name" />
        <el-table-column prop="Date" label="Date" />

        <el-table-column prop="Status" label="Status" />
        <el-table-column label="Function" width="180">
          <template #default="scope">
            <el-button link type="primary" size="small">
              Modify
            </el-button>
            <br />
            <el-button link type="warning" size="small">
              Deactivate
            </el-button>
            <br />
            <el-button link type="success" size="small">
              Permission
            </el-button>
            <br />
            <el-button link type="danger" size="small">
              Delete
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
