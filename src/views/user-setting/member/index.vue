<template>
  <el-radio-group v-model="memberLayout">
    <el-radio-button label="会员" />
    <el-radio-button label="会员2" />
  </el-radio-group>
  <el-card shadow="never">
    <el-row style="margin-bottom: 1.5rem; font-size: 20px;">
      <el-col>
        <h4>会员管理</h4>
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
          <el-form-item label="选择代理商:">
            <el-select placeholder="全部">
              <el-option label="全部" value="all" />
              <el-option label="1223ee===劳而无功" />
              <el-option label="1231238qq===芜湖" />
              <el-option label="123asdf234===夺要" />
              <el-option label="345223===夺要" />
              <el-option label="7795com===7795com" />
              <el-option label="aa12355===112233" />
              <el-option label="admin===" />
              <el-option label="anonymous===" />
              <el-option label="author===" />
              <el-option label="csaa123===貊在" />
              <el-option label="csk8899===台中" />
              <el-option label="dd123===112233" />
              <el-option label="dd12355===李明" />
              <el-option label="dd789===地方" />
              <el-option label="ddm0===WWW" />
              <el-option label="ddm000===测试" />
              <el-option label="ddm010===测试" />
              <el-option label="ddm010===测试" />
              <el-option label="ddm011===测试" />
              <el-option label="ddm010===测试" />
              <el-option label="ddm111===测试" />
              <el-option label="ddm123===112233" />
              <el-option label="ddm206===测试" />
              <el-option label="ddm23456===登入" />
              <el-option label="ddm922===贾" />
              <el-option label="ddm999===陈代理" />
              <el-option label="demo===" />
              <el-option label="editor===" />
              <el-option label="guest===" />
              <el-option label="hg1212===测试" />
              <el-option label="KfnqDuxw===1" />
              <el-option label="kk7890===辅导费" />
              <el-option label="manager===" />
              <el-option label="root===" />
              <el-option label="system===" />
              <el-option label="test===" />
              <el-option label="user===" />
              <el-option label="wsdr31543===夺要" />
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
          <el-form-item label="方式">
            <el-select placeholder="新增日期">
              <el-option label="会员帐号" value="agentAccount" />
              <el-option label="会员名称" value="agencyName" />
              <el-option label="新增日期" value="dateAdded" />
            </el-select>
            <el-select placeholder="升冥(由小到大)">
              <el-option label="升冥(由小到大)" value="account" />
              <el-option label="降冥(由大到小)" value="descending" />
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
    <el-scrollbar height="400px">
      <el-table
        :data="tableData"
        class="member-wrapper"
        border
        header-align="center"
        stripe
      >
        <el-table-column prop="agencyaccount" label="代理商帐号" width="150" />
        <el-table-column prop="loginAccount" label="登陆帐号" width="125" />
        <el-table-column prop="memberAccount" label="会员帐号" width="140" />
        <el-table-column prop="availableQuota" label="可用額度" width="140" />
        <el-table-column prop="credits" label="信用额度" width="80" />
        <el-table-column prop="memberhandicap" label="会员盘口" width="150" />
        <el-table-column prop="dateAdded" label="新增日期" width="110" />
        <el-table-column prop="accountStatus" label="帐号状况" width="130" />
        <el-table-column prop="online" label="在线" width="80" />
        <el-table-column label="功能" v-if="memberLayout === '会员'">
          <template #default="scope">
            <el-button link type="primary" size="small">
              修改
            </el-button>
            <br />
            <el-button link type="primary" size="small">
              详细设定
            </el-button>
            <br />
            <el-button link type="primary" size="small">
              停用
            </el-button>
            <br />
            <el-button link type="primary" size="small">
              冻结
            </el-button>
            <br />
            <el-button link type="primary" size="small">
              踢线
            </el-button>
            <br />
            <el-button link type="primary" size="small">
              转移
            </el-button>
            <br />
            <el-button link type="primary" size="small">
              统计
            </el-button>
            <br />
            <el-button link type="primary" size="small">
              日志
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="功能" v-else>
          <template #default="scope">
            <el-button link type="primary" size="small">
              修改
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
