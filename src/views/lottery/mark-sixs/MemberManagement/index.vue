<template>
  <el-card shadow="never">
    <el-row :gutter="10">
      <el-col :span="3">
        <el-form-item label="股东">
          <el-select placeholder="全部">
            <el-option label="全部" value="allShareholder" />
            <el-option label="bdm000" value="bdm000" />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="总代">
          <el-select placeholder="全部">
            <el-option label="全部" value="allGeneration" />
            <el-option label="cdm000" value="cdm000" />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="3">
        <el-form-item label="代里">
          <el-select placeholder="全部">
            <el-option label="全部" value="allGeneration" />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-row :gutter="4">
          <el-col :span="16">
            <el-form-item label="会员账号：">
              <el-input>
                <template #prepend>
                  <el-icon><Search /></el-icon>
                </template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-button>确定搜索</el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="7">
        <div class="flex">
          <el-button type="primary">所有会员</el-button>
          <el-button type="success">开启</el-button>
          <el-button type="danger">禁止</el-button>
          <el-button type="warning">添加会员</el-button>
        </div>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      class="member-wrapper"
      header-align="center"
      stripe
    >
      <el-table-column prop="serialNumber" label="序号" />
      <el-table-column prop="account" label="账号" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="creditLimit" label="信用额度/余额" />
      <el-table-column prop="acting" label="代理" />
      <el-table-column prop="generalGerneration" label="总代" />
      <el-table-column prop="shareholder" label="股东" />
      <el-table-column prop="generationpercent" label="代%" />
      <el-table-column prop="total" label="总%" />
      <el-table-column prop="share" label="股%" />
      <el-table-column prop="company" label="公司%" />
      <el-table-column prop="type" label="类型" />
      <el-table-column label="状况">
        <el-checkbox size="large"></el-checkbox>
      </el-table-column>
      <el-table-column prop="registration" label="注册时间" />
      <el-table-column prop="logins" label="登录次数" />
      <el-table-column label="操作" width="120">
        <template #default="scope">
          <el-button-group>
            <el-button icon="edit" type="primary"></el-button>
            <el-button icon="delete" type="primary"></el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <div style="display: flex; justify-content: center">
      <el-pagination background layout="prev, pager, next" :total="100" />
    </div>
    <el-button style="float:right;" type="success">
      刷新
    </el-button>
  </el-card>
</template>
<script setup>
import { ref } from 'vue'
const pageSize = ref(10)
const currentPage = ref(1)
const tableData = [
  {
    serialNumber: '1',
    account: 'uu1235',
    name: 'test',
    creditLimit: '0/0',
    acting: 'ddm999',
    generalGerneration: 'cdm888',
    shareholder: 'bdm888',
    generationpercent: '0%',
    total: '0%',
    share: '0%',
    company: '0%',
    type: 'Disk A ',
    registration: '2022-11-26 07:51:22',
    logins: '0',
  },
  {
    serialNumber: '2',
    account: 'uu1235',
    name: 'test',
    creditLimit: '0/0',
    acting: 'ddm999',
    generalGerneration: 'cdm888',
    shareholder: 'bdm888',
    generationpercent: '0%',
    total: '0%',
    share: '0%',
    company: '0%',
    type: 'Disk A ',
    registration: '2022-11-26 07:51:22',
    logins: '0',
  },
  {
    serialNumber: '3',
    account: 'uu1235',
    name: 'test',
    creditLimit: '0/0',
    acting: 'ddm999',
    generalGerneration: 'cdm888',
    shareholder: 'bdm888',
    generationpercent: '0%',
    total: '0%',
    share: '0%',
    company: '0%',
    type: 'Disk A ',
    registration: '2022-11-26 07:51:22',
    logins: '0',
  },
]
</script>
<style lang="scss" scoped>
.member-wrapper {
  width: 100%;
  max-height: 500px;
  margin: 10px 0px;
}
</style>
