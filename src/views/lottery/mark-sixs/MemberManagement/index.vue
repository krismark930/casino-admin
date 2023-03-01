<template>
  <el-card shadow="never">
    <el-row class="flex" style="justify-content: space-between;">
      <el-row :gutter="20">
        <el-form-item label="ShareHolder">
          <el-select placeholder="All">
            <el-option label="All" value="allShareholder" />
            <el-option label="bdm000" value="bdm000" />
          </el-select>
        </el-form-item>
        <el-form-item label="Total Generation">
          <el-select placeholder="All">
            <el-option label="All" value="allGeneration" />
            <el-option label="cdm000" value="cdm000" />
          </el-select>
        </el-form-item>
        <el-form-item label="Derry">
          <el-select placeholder="All">
            <el-option label="All" value="allGeneration" />
          </el-select>
        </el-form-item>
      </el-row>
      <div class="flex">
        <el-button type="primary">All Member</el-button>
        <el-button type="success">Turn on</el-button>
        <el-button type="danger">Prohibit</el-button>
        <el-button type="warning">Add Member</el-button>
      </div>
    </el-row>
    <el-table
      :data="tableData"
      class="member-wrapper"
      header-align="center"
      stripe
    >
      <el-table-column prop="serialNumber" label="SerialNumber" />
      <el-table-column prop="account" label="Account" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="creditLimit" label="Credit Limit/Balance" />
      <el-table-column prop="acting" label="Acting" />
      <el-table-column prop="generalGerneration" label="General Generation" />
      <el-table-column prop="shareholder" label="ShareHolder" />
      <el-table-column prop="generationpercent" label="Generation%" />
      <el-table-column prop="total" label="Total%" />
      <el-table-column prop="share" label="share%" />
      <el-table-column prop="company" label="company%" />
      <el-table-column prop="type" label="Type" />
      <el-table-column label="Situation">
        <el-checkbox size="large"></el-checkbox>
      </el-table-column>
      <el-table-column prop="registration" label="Registration Time" />
      <el-table-column prop="logins" label="Logins" />
      <el-table-column label="Operate">
        <template #default="scope">
          <el-row justify="space-between">
            <el-button link type="primary" size="small">
              Revise
            </el-button>
            <el-button link type="danger" size="small">
              Delete
            </el-button>
          </el-row>
        </template>
      </el-table-column>
    </el-table>
    <el-row class="flex" justify="space-between">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="30"
        style="padding-bottom: 20px;"
      ></el-pagination>
      <el-button type="success" size="small">
        Refresh
      </el-button>
    </el-row>
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
