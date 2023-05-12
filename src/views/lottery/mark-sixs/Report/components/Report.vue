<template>
  <el-form label-width="20%">
    <el-form-item label="投注品种:">
      <el-select v-model="class2" placeholder="-----全部-----">
        <el-option value="特A" label="特码：特A" />
        <el-option value="特B" label="特码：特B" />
        <el-option value="正A" label="正码：正A" />
        <el-option value="正B" label="正码：正B" />
        <el-option value="正1特" label="正特：正1特" />
        <el-option value="正2特" label="正特：正2特" />
        <el-option value="正3特" label="正特：正3特" />
        <el-option value="正4特" label="正特：正4特" />
        <el-option value="正5特" label="正特：正5特" />
        <el-option value="正6特" label="正特：正6特" />
        <el-option value="正码1" label="正1-6：正码1" />
        <el-option value="正码2" label="正1-6：正码2" />
        <el-option value="正码3" label="正1-6：正码3" />
        <el-option value="正码4" label="正1-6：正码4" />
        <el-option value="正码5" label="正1-6：正码5" />
        <el-option value="正码6" label="正1-6：正码6" />
        <el-option value="过关" label="过关" />
        <el-option value="三全中" label="连码：三全中" />
        <el-option value="三中二" label="连码：三中二" />
        <el-option value="二全中" label="连码：二全中" />
        <el-option value="二中特" label="连码：二中特" />
        <el-option value="五不中" label="不中：五不中" />
        <el-option value="七不中" label="不中：七不中" />
        <el-option value="特串" label="连码：特串" />
        <el-option value="特肖" label="生肖：特肖" />
        <el-option value="四肖" label="生肖：四肖" />
        <el-option value="五肖" label="生肖：五肖" />
        <el-option value="六肖" label="生肖：六肖" />
        <el-option value="三肖" label="生肖：三肖" />
        <el-option value="二肖" label="生肖：二肖" />
        <el-option value="一肖" label="生肖：一肖" />
        <el-option value="半波" label="半波" />
        <el-option value="半半波" label="半半波" />
        <el-option value="头数" label="头数" />
        <el-option value="尾数" label="尾数" />
        <el-option value="正特尾数" label="正特尾数" />
        <el-option value="正肖" label="正肖" />
        <el-option value="七色波" label="七色波" />
      </el-select>
    </el-form-item>
    <el-form-item label="日期区间:">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-date-picker v-model="fromDate" type="date" style="width: 100%" />
        </el-col>
        <el-col :span="12">
          <el-date-picker v-model="endDate" type="date" style="width: 100%" />
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item label="选择期数:" style="color:red">
      <el-select placeholder="选择期数" v-model="selectedPeriod" style="width: 200px">
        <el-option v-for="(item, index) in periodsList" :key="index" :label="item.label" :value="item.value" />
      </el-select>
      &nbsp;(如果选择了期数,上面的日期将无效！)
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
    <el-col :span="16" style="float:right;">
      操作提示：如果想按时间来查询选择期数时，请选择[按时间来查]，如果选择了期数将不按时间来查询！.
    </el-col>
  </el-form>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
import moment from 'moment-timezone';
import { instantBetStore } from "@/pinia/modules/mark_six/instant_bet.js";
import { storeToRefs } from "pinia";

const emit = defineEmits(['showAllTable']);

const { dispatchGetPeriod } = instantBetStore();

const class2 = ref("");
const selectedPeriod = ref("");
const fromDate = ref(moment().tz('Asia/Hong_Kong').format("YYYY-MM-DD"));
const endDate = ref(moment().tz('Asia/Hong_Kong').format("YYYY-MM-DD"));

const onSubmit = () => {
  emit("showAllTable", { selectedPeriod: selectedPeriod.value, fromDate: fromDate.value, endDate: endDate.value, class2: class2.value });
}

const periodsList = computed(() => {
  const { getPeriodList } = storeToRefs(instantBetStore());
  return getPeriodList.value;
})

onMounted(async () => {
  await dispatchGetPeriod({});
})
</script>
