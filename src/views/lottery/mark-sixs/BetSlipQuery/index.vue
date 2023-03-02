<template>
  <el-card shadow="never">
    <el-row style="justify-content: space-between;">
      <el-col :span="12">
        <el-row style="justify-content: space-between;">
          <el-col :span="12" style="text-align: justify; padding-top: 7px">
            <b1>Inquiry of bets [2023021 issue]</b1>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Choose the number of periods:">
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
        Printer
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
        <el-table-column prop="serialnumber" label="Serial Number" />
        <el-table-column prop="shareholder" label="Shareholder" />
        <el-table-column prop="betnumber" label="Number of Bets" />
        <el-table-column prop="betamount" label="Bet Amount" />
        <el-table-column prop="realInvestment" label="Real Investment" />
        <el-table-column
          prop="companyaccounted"
          label="Company accounted for"
        />
        <el-table-column prop="shareholders" label="Shareholders" />
        <el-table-column prop="totalagent" label="Total Agent Accounted for" />
        <el-table-column prop="agentaccounted" label="Agent Accounted for" />
      </el-table>
    </el-scrollbar>
    <el-form :model="form" label-width="20%">
      <el-row>
        <el-col :span="6">
          <el-form-item label="Betting Type:">
            <el-select v-model="form.bettingType" placeholder="All">
              <el-option label="Special code: Special A" value="specialA" />
              <el-option label="Special code: Special B" value="specialB" />
              <el-option label="Positive code: Positive A" value="positiveA" />
              <el-option label="Positive code: Positive B" value="positiveB" />
              <el-option
                label="Positive special: Positive 1 Special"
                value="positive1"
              />
              <el-option
                label="Positive special: Positive 2 Special"
                value="positive2"
              />
              <el-option
                label="Positive special: Positive 3 Special"
                value="positive3"
              />
              <el-option
                label="Positive special: Positive 4 Special"
                value="positive4"
              />
              <el-option
                label="Positive special: Positive 5 Special"
                value="positive5"
              />
              <el-option
                label="Positive special: Positive 6 Special"
                value="positive6"
              />
              <el-option label="Positive 1-6: Positive Code 1" value="pcode1" />
              <el-option label="Positive 1-6: Positive Code 2" value="pcode2" />
              <el-option label="Positive 1-6: Positive Code 3" value="pcode3" />
              <el-option label="Positive 1-6: Positive Code 4" value="pcode4" />
              <el-option label="Positive 1-6: Positive Code 5" value="pcode5" />
              <el-option label="Positive 1-6: Positive Code 6" value="pcode6" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Date range:">
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
          <el-form-item label="Choose the number of periods:" style="color:red">
            <el-select v-model="form.periodNumber" placeholder="Check by time">
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
          <el-button type="primary" @click="onSubmit">Inquire</el-button>
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
