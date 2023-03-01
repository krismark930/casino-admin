<template>
  <el-form :model="form" label-width="20%">
    <el-form-item label="Betting Type:">
      <el-select v-model="form.bettingType" placeholder="-----All-----">
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
      (The dates above will not be valid if an issue is selected!)
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Inquire</el-button>
    </el-form-item>
    <el-col :span="16" style="float:right;">
      Operation Tips: If you want to inquire by time when you select the period,
      please select [Search by time], if you select the period, you will not
      inquire by time! .
    </el-col>
  </el-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
const form = reactive({
  bettingType: '',
  date1: '',
  date2: '',
  periodNumber: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
