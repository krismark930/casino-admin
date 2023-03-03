<template>
  <el-card shadow="never">
    <el-row style="margin-bottom: 1.5rem; font-size: 20px;">
      <el-col>
        <h4>Agency Management</h4>
      </el-col>
    </el-row>
    <el-row class="hidden-lg-and-up" style="margin-bottom: 1rem;">
      <el-col>
        <el-descriptions border :column="1">
          <el-descriptions-item label="Data Added :">
            <el-tag size="small" type="success">
              The new account is less than a month old
            </el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="Account Status :">
            <el-tag size="small" type="danger">Disabled</el-tag>
          </el-descriptions-item>
        </el-descriptions>
      </el-col>
    </el-row>
    <el-row justify="space-between">
      <el-col :lg="16" :xs="24">
        <el-form label-width="150px">
          <el-form-item label="Select General Agent">
            <el-select placeholder="All">
              <el-option label="All" value="all" />
              <el-option label="cdm888===chen general agency" value="cdm888" />
            </el-select>
            <el-select placeholder="Ascending">
              <el-option label="Ascending(From small to big)" value="account" />
              <el-option
                label="Descending(From big to small)"
                value="descending"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Way">
            <el-select placeholder="Date added">
              <el-option label="Agent Account" value="agentAccount" />
              <el-option label="Agency Name" value="agencyName" />
              <el-option label="Date added" value="dateAdded" />
            </el-select>
            <el-select placeholder="All">
              <el-option label="All" value="allway" />
              <el-option label="Enable" value="enable" />
              <el-option label="Freeze" value="freeze" />
              <el-option label="Disabled" value="disabled" />
              <el-option label="Have Bets" value="havebets" />
              <el-option label="Today Recharge" value="todayRecharge" />
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :lg="8" class="hidden-md-and-down">
        <el-descriptions border :column="1">
          <el-descriptions-item label="Data Added :">
            <el-tag size="small" type="success">
              The new account is less than a month old
            </el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="Account Status :">
            <el-tag size="small" type="danger">Disabled</el-tag>
          </el-descriptions-item>
        </el-descriptions>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      class="agents-wrapper"
      border
      header-align="center"
      stripe
    >
      <el-table-column
        prop="agentaccount"
        label="General Agent Account"
        width="180"
      />
      <el-table-column prop="loginAccount" label="Login Account" width="125" />
      <el-table-column
        prop="agencyAccount"
        label="Agency Account"
        width="140"
      />
      <el-table-column
        prop="availableAccount"
        label="Available Account"
        width="150"
      />
      <el-table-column prop="credits" label="Credits" width="80" />
      <el-table-column
        prop="subOrdinateTotal"
        label="Subordinate Total"
        width="150"
      />
      <el-table-column prop="addDate" label="Add Date" width="90" />
      <el-table-column
        prop="accountStatus"
        label="Account Status"
        width="130"
      />
      <el-table-column prop="changeOrder" label="Change Order" width="120" />
      <el-table-column label="Function" width="180">
        <template #default="scope">
          <el-button link type="primary" size="small">
            Modify
          </el-button>
          <br />
          <el-button link type="info" size="small">
            Detailed Setting
          </el-button>
          <br />
          <el-button link type="warning" size="small">
            Deactivate
          </el-button>
          <br />
          <el-button link type="success" size="small">
            Freeze
          </el-button>
          <br />
          <el-button link type="danger" size="small">
            Delete Quota Management
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="display: flex; justify-content: center">
      <el-pagination background layout="prev, pager, next" :total="100" />
    </div>
  </el-card>
</template>
<script setup>
import { ref } from 'vue'
import 'element-plus/theme-chalk/display.css'
const pageSize = ref(10)
const currentPage = ref(1)
const tableData = [
  {
    agentaccount: 'cdm888',
    loginAccount: '测试',
    agencyAccount: 'ddm206112233a',
    availableAccount: '0',
    credits: '1000',
    subOrdinateTotal: '0',
    addDate: '2022-11-26 00:58:35',
    accountStatus: '启用',
    changeOrder: '否',
  },
  {
    agentaccount: 'cdm888',
    loginAccount: '测试',
    agencyAccount: 'ddm206112233a',
    availableAccount: '0',
    credits: '1000',
    subOrdinateTotal: '0',
    addDate: '2022-11-26 00:58:35',
    accountStatus: '启用',
    changeOrder: '否',
  },
  {
    agentaccount: 'cdm888',
    loginAccount: '测试',
    agencyAccount: 'ddm206112233a',
    availableAccount: '0',
    credits: '1000',
    subOrdinateTotal: '0',
    addDate: '2022-11-26 00:58:35',
    accountStatus: '启用',
    changeOrder: '否',
  },
]
</script>
<style lang="scss" scoped>
.agents-wrapper {
  width: 100%;
  max-height: 500px;
  margin: 10px 0px;
}
</style>
