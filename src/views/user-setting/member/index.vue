<template>
  <el-radio-group v-model="memberLayout">
    <el-radio-button label="Normal Member" />
    <el-radio-button label="Blocked Member" />
  </el-radio-group>
  <el-card shadow="never">
    <el-row style="margin-bottom: 1.5rem; font-size: 20px;">
      <el-col>
        <h4>Member Management</h4>
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
          <el-form-item label="Choose An Agent">
            <el-select placeholder="All">
              <el-option label="All" value="all" />
              <el-option label="cdm888===chen general agency" value="cdm888" />
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
          <el-form-item label="Way">
            <el-select placeholder="Date added">
              <el-option label="Agent Account" value="agentAccount" />
              <el-option label="Agency Name" value="agencyName" />
              <el-option label="Date added" value="dateAdded" />
            </el-select>
            <el-select placeholder="Ascending">
              <el-option label="Ascending(From small to big)" value="account" />
              <el-option
                label="Descending(From big to small)"
                value="descending"
              />
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :lg="8" class="hidden-md-and-down">
        <el-descriptions border :column="1">
          <el-descriptions-item label="Data Added:">
            <el-tag size="small" type="success">
              The new account is less than a month old
            </el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="Account Status:">
            <el-tag size="small" type="danger">Disabled</el-tag>
          </el-descriptions-item>
        </el-descriptions>
      </el-col>
    </el-row>
    <el-scrollbar height="400px">
      <el-table
        :data="tableData"
        class="member-wrapper"
        border
        header-align="center"
        stripe
      >
        <el-table-column
          prop="agencyaccount"
          label="Agency Account"
          width="150"
        />
        <el-table-column
          prop="loginAccount"
          label="Login Account"
          width="125"
        />
        <el-table-column
          prop="memberAccount"
          label="Member Account"
          width="140"
        />
        <el-table-column
          prop="availableQuota"
          label="Available Quota"
          width="140"
        />
        <el-table-column prop="credits" label="Credits" width="80" />
        <el-table-column
          prop="memberhandicap"
          label="Member Handicap"
          width="150"
        />
        <el-table-column prop="dateAdded" label="Date Added" width="110" />
        <el-table-column
          prop="accountStatus"
          label="Account Status"
          width="130"
        />
        <el-table-column prop="online" label="Online" width="80" />
        <el-table-column
          label="Function"
          v-if="memberLayout === 'Normal Member'"
        >
          <template #default="scope">
            <el-button link type="primary" size="small">
              Modify
            </el-button>
            <br />
            <el-button link type="primary" size="small">
              Detailed Setting
            </el-button>
            <br />
            <el-button link type="primary" size="small">
              Deactivate
            </el-button>
            <br />
            <el-button link type="primary" size="small">
              Freeze
            </el-button>
            <br />
            <el-button link type="primary" size="small">
              Kick Line
            </el-button>
            <br />
            <el-button link type="primary" size="small">
              Delete Transfer
            </el-button>
            <br />
            <el-button link type="primary" size="small">
              Statistics
            </el-button>
            <br />
            <el-button link type="primary" size="small">
              Log
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="Function" v-else>
          <template #default="scope">
            <el-button link type="primary" size="small">
              Revise
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
const memberLayout = ref('Normal Member')
const tableData = [
  {
    agencyaccount: 'ddm999',
    loginAccount: 'uu1235测试',
    memberAccount: 'uu1235112233',
    availableQuota: '0',
    credits: '0',
    memberhandicap: '',
    dateAdded: '2022-11-26 00:58:35',
    accountStatus: '启用',
    online: '离线',
  },
  {
    agencyaccount: 'ddm999',
    loginAccount: 'uu1235测试',
    memberAccount: 'uu1235112233',
    availableQuota: '0',
    credits: '0',
    memberhandicap: '',
    dateAdded: '2022-11-26 00:58:35',
    accountStatus: '启用',
    online: '离线',
  },
  {
    agencyaccount: 'ddm999',
    loginAccount: 'uu1235测试',
    memberAccount: 'uu1235112233',
    availableQuota: '0',
    credits: '0',
    memberhandicap: '',
    dateAdded: '2022-11-26 00:58:35',
    accountStatus: '启用',
    online: '离线',
  },
]
</script>
<style lang="scss" scoped>
.member-wrapper {
  width: 100%;
  margin: 10px 0px;
}
</style>
