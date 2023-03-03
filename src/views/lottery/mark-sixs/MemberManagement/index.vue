<template>
  <el-card shadow="never">
    <el-row
      class="flex"
      style="justify-content: space-between;flex-wrap: nowrap;"
    >
      <el-row>
        <el-col :span="7">
          <el-form-item label="ShareHolder">
            <el-select placeholder="All">
              <el-option label="All" value="allShareholder" />
              <el-option label="bdm000" value="bdm000" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="1"></el-col>
        <el-col :span="7">
          <el-form-item label="Total Generation">
            <el-select placeholder="All">
              <el-option label="All" value="allGeneration" />
              <el-option label="cdm000" value="cdm000" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="1"></el-col>
        <el-col :span="7">
          <el-form-item label="Derry">
            <el-select placeholder="All">
              <el-option label="All" value="allGeneration" />
            </el-select>
          </el-form-item>
        </el-col>
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
      <el-table-column label="Operate" width="120">
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
      Refresh
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
