<template>
  <el-card shadow="never">
    <el-row style="justify-content: space-between;">
      <el-col :span="12">
        <el-row style="justify-content: space-between;">
          <el-col :span="12" style="text-align: justify; padding-top: 7px">
            <h3>注单查询[ 2023021 期]</h3>
          </el-col>
          <el-col :span="12">
            <el-form-item label="选择期数">
              <el-select placeholder="Issue 20201003">
                <el-option label="Issue 20201003" value="issue20201003" />
                <el-option label="Issue 2023021" value="issue2023021" />
                <el-option label="Issue 2023021" value="issue2023021" />
                <el-option label="Issue 2023021" value="issue2023021" />
                <el-option label="Issue 2023021" value="issue2023021" />
                <el-option label="Issue 2023021" value="issue2023021" />
                <el-option label="Issue 2023021" value="issue2023021" />
                <el-option label="Issue 2023021" value="issue2023021" />
                <el-option label="Issue 2023021" value="issue2023021" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-col>
      <el-button>
        打印
        <el-icon><Printer /></el-icon>
      </el-button>
    </el-row>
    <el-scrollbar>
      <el-table
        :data="tableData"
        class="betslip-wrapper"
        header-align="center"
        stripe
      >
        <el-table-column prop="serialnumber" label="序号" />
        <el-table-column prop="shareholder" label="股东" />
        <el-table-column prop="betnumber" label="注数" />
        <el-table-column prop="betamount" label="下注金额" />
        <el-table-column prop="realInvestment" label="实投" />
        <el-table-column prop="companyaccounted" label="公司占成" />
        <el-table-column prop="shareholders" label="股东占成" />
        <el-table-column prop="totalagent" label="总代占成" />
        <el-table-column prop="agentaccounted" label="代理占成" />
      </el-table>
    </el-scrollbar>
    <el-form :model="form" label-width="20%">
      <el-row>
        <el-col :span="6">
          <el-form-item label="查询种类：">
            <el-row>
              <el-col :span="16">
                <el-select placeholder="-----全部-----">
                  <el-option label="-全部-"></el-option>
                  <el-option label="会员账号"></el-option>
                  <el-option label="下注单号"></el-option>
                  <el-option label="下注盘类"></el-option>
                </el-select>
              </el-col>
              <el-col :span="8">
                <el-input></el-input>
              </el-col>
            </el-row>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="投注品种：">
            <el-select v-model="form.bettingType" placeholder="-----全部-----">
              <el-option label="特码：特A" value="specialA" />
              <el-option label="特码：特B" value="specialB" />
              <el-option label="正码：正A" value="positiveA" />
              <el-option label="正码：正B" value="positiveB" />
              <el-option label="正特：正1特" value="positive1" />
              <el-option label="正特：正2特" value="positive2" />
              <el-option label="正特：正3特" value="positive3" />
              <el-option label="正特：正4特" value="positive4" />
              <el-option label="正特：正5特" value="positive5" />
              <el-option label="正特：正6特" value="positive6" />
              <el-option label="正1-6：正码1" value="pcode1" />
              <el-option label="正1-6：正码2" value="pcode2" />
              <el-option label="正1-6：正码3" value="pcode3" />
              <el-option label="正1-6：正码4" value="pcode4" />
              <el-option label="正1-6：正码5" value="pcode5" />
              <el-option label="正1-6：正码6" value="pcode6" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="日期区间：">
            <el-col :span="11">
              <el-date-picker
                v-model="form.date1"
                type="date"
                placeholder="Pick a date"
                style="width: 100%"
              />
            </el-col>
            <el-col :span="11">
              <el-date-picker
                v-model="form.date2"
                placeholder="Pick a date"
                style="width: 100%"
              />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="选择期数：" style="color:red">
            <el-select v-model="form.periodNumber" placeholder="按时间来查">
              <el-option label="Issue 20201003" value="issue20201003" />
              <el-option label="Issue 20201003" value="issue20201003" />
              <el-option label="Issue 20201003" value="issue20201003" />
              <el-option label="Issue 20201003" value="issue20201003" />
              <el-option label="Issue 20201003" value="issue20201003" />
              <el-option label="Issue 20201003" value="issue20201003" />
              <el-option label="Issue 20201003" value="issue20201003" />
              <el-option label="Issue 20201003" value="issue20201003" />
              <el-option label="Issue 20201003" value="issue20201003" />
              <el-option label="Issue 20201003" value="issue20201003" />
              <el-option label="Issue 20201003" value="issue20201003" />
              <el-option label="Issue 20201003" value="issue20201003" />
              <el-option label="Issue 20201003" value="issue20201003" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </el-card>
</template>
<script setup>
import { ref, reactive } from 'vue'
const pageSize = ref(10)
const currentPage = ref(1)
const form = reactive({
  bettingType: '',
  date1: '',
  date2: '',
  periodNumber: '',
})
const tableData = [
  {
    serialnumber: '',
    shareholder: 'total',
    betnumber: '0',
    betamount: '0',
    realInvestment: '0',
    companyaccounted: '0',
    shareholders: '0',
    totalagent: '0',
    agentaccounted: '0',
  },
]
</script>
<style lang="scss" scoped>
.betslip-wrapper {
  width: 100%;
  max-height: 500px;
  margin: 10px 0px;
}
</style>
