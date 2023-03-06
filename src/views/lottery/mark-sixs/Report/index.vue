<template>
  <el-form :model="form" label-width="20%">
    <el-form-item label="投注品种:">
      <el-select v-model="form.bettingType" placeholder="-----全部-----">
        <el-option label="特码：特A" value="specialA" />
        <el-option label="特码：特B" value="specialB" />
        <el-option label="正码：正A" value="positiveA" />
        <el-option label="正码：正B" value="positiveB" />
        <el-option label="正特：正1特" value="Positive 1 Special" />
        <el-option label="正特：正2特" value="Positive 2 Special" />
        <el-option label="正特：正3特" value="Positive 3 Special" />
        <el-option label="正特：正4特" value="Positive 4 Special" />
        <el-option label="正特：正5特" value="Positive 5 Special" />
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
    <el-form-item label="日期区间:">
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
    <el-form-item label="选择期数:" style="color:red">
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
      (如果选择了期数,上面的日期将无效！)
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
    <el-col :span="16" style="float:right;">
      操作提示：如果想按时间来查询选择期数时，请选择[按时间来查]，如果选择了期数将不按时间来查询！.
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
