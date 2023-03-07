<template>
  <el-card shadow="never">
    <el-row style="margin-bottom: 1.5rem; font-size: 20px;">
      <el-col>
        <h4>代理商管理</h4>
      </el-col>
    </el-row>
    <el-row class="hidden-lg-and-up" style="margin-bottom: 1rem;">
      <el-col>
        <el-descriptions border :column="1">
          <el-descriptions-item label="新增日期:">
            <el-tag size="small" type="success">
              新增帐号未满一个月
            </el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="帐号状况:">
            <el-tag size="small" type="danger">停用</el-tag>
          </el-descriptions-item>
        </el-descriptions>
      </el-col>
    </el-row>
    <el-row justify="space-between">
      <el-col :lg="16" :xs="24">
        <el-form label-width="150px">
          <el-form-item label="选择总代理:">
            <el-select placeholder="全部">
              <el-option label="全部" value="all" />
              <el-option label="cdm888===全部" value="cdm888" />
            </el-select>
            <el-select placeholder="升冥(由小到大)">
              <el-option label="升冥(由小到大)" value="account" />
              <el-option label="降冥(由大到小)" value="descending" />
            </el-select>
          </el-form-item>
          <el-form-item label="方式:">
            <el-select placeholder="新增日期">
              <el-option label="代理商帐号" value="agentAccount" />
              <el-option label="代理商名称" value="agencyName" />
              <el-option label="新增日期" value="dateAdded" />
            </el-select>
            <el-select placeholder="全部">
              <el-option label="全部" value="allway" />
              <el-option label="启用" value="enable" />
              <el-option label="冻结" value="freeze" />
              <el-option label="停用" value="disabled" />
              <el-option label="有投注" value="havebets" />
              <el-option label="今日充值" value="todayRecharge" />
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :lg="8" class="hidden-md-and-down">
        <el-descriptions border :column="1">
          <el-descriptions-item label="新增日期:">
            <el-tag size="small" type="success">
              新增帐号未满一个月
            </el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="帐号状况:">
            <el-tag size="small" type="danger">停用</el-tag>
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
      <el-table-column prop="agentaccount" label="总代理帐号" width="180" />
      <el-table-column prop="loginAccount" label="登陆帐号" width="125" />
      <el-table-column prop="agencyAccount" label="代理商帐号" width="140" />
      <el-table-column prop="availableAccount" label="可用額度" width="150" />
      <el-table-column prop="credits" label="信用额度" width="80" />
      <el-table-column prop="subOrdinateTotal" label="下级总计" width="150" />
      <el-table-column prop="addDate" label="新增日期" width="90" />
      <el-table-column prop="accountStatus" label="帐号状况" width="130" />
      <el-table-column prop="changeOrder" label="改单" width="120" />
      <el-table-column label="功能" width="180">
        <template #default="scope">
          <el-button link type="primary" size="small">
            修改
          </el-button>
          <br />
          <el-button link type="info" size="small">
            详细设定
          </el-button>
          <br />
          <el-button link type="warning" size="small">
            停用
          </el-button>
          <br />
          <el-button link type="success" size="small">
            冻结
          </el-button>
          <br />
          <el-button link type="danger" size="small">
            额度管理
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
