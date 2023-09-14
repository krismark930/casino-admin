<template>
  <el-card shadow="never">
    <el-row style="justify-content: space-between;" v-if="memTableShow">
      <el-col :span="12">
        <el-row style="justify-content: space-between;">
          <el-col :span="12" style="text-align: justify; padding-top: 7px">
            <h3>注单查询[ {{ selectedPeriod1 }} 期]</h3>
          </el-col>
          <el-col :span="12">
            <el-form-item label="选择期数">
              <el-select placeholder="选择期数" v-model="selectedPeriod1">
                <el-option v-for="(item, index) in periodsList" :key="index" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-form label-width="120px" style="margin-top: 20px;">
      <el-row>
        <el-col :span="12">
          <el-form-item label="查询种类：" label-width="120px">
            <el-row>
              <el-col :span="16">
                <el-select placeholder="-----全部-----" v-model="class4">
                  <el-option label="-全部-" value="" selected />
                  <el-option label="会员账号" value="1" />
                  <el-option label="下注单号" value="2" />
                  <el-option label="下注盘类" value="3" />
                </el-select>
              </el-col>
              <el-col :span="8">
                <el-input v-model="searchKey" />
              </el-col>
            </el-row>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="投注品种：" label-width="120px">
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
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="日期区间：" label-width="120px">
            <el-col :span="11">
              <el-date-picker v-model="fromDate" type="date" placeholder="Pick a date" style="width: 100%" />
            </el-col>
            <el-col :span="11">
              <el-date-picker v-model="endDate" placeholder="Pick a date" style="width: 100%" />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="选择期数：" label-width="120px">
            <el-select v-model="selectedPeriod" placeholder="按时间来查">
              <el-option v-for="(item, index) in periodsList" :key="index" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="getMainTableData">查询</el-button>
        </el-col>
      </el-row>
    </el-form>
    <MemTable v-if="memTableShow" :selectedPeriod1="selectedPeriod1" @showMainTable="showMainTable" />
    <MainTable v-else :class2="class2" :class4="class4" :fromDate="fromDate" :endDate="endDate"
      :selectedPeriod="selectedPeriod" :searchKey="searchKey" :userName="userName" :updateMainData="updateMainData" />
  </el-card>
</template>
<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import MemTable from "./MemTable.vue";
import MainTable from "./MainTable.vue";
import { instantBetStore } from "@/pinia/modules/new_macao_six_mark/instant_bet.js";
import moment from 'moment-timezone';
import { storeToRefs } from "pinia";

const { dispatchGetPeriod } = instantBetStore();

const selectedPeriod = ref("");
const selectedPeriod1 = ref("");
const fromDate = ref(moment().tz('Asia/Hong_Kong').format("YYYY-MM-DD"));
const endDate = ref(moment().tz('Asia/Hong_Kong').format("YYYY-MM-DD"));
const searchKey = ref("");
const userName = ref("");
const mainTableShow = ref(false);
const memTableShow = ref(true);
const updateMainData = ref(false);
const pageSize = ref(10)
const currentPage = ref(1)
const class2 = ref("");
const class4 = ref("");
const periodsList = computed(() => {
  const { getPeriodList } = storeToRefs(instantBetStore());
  if (getPeriodList.value.length > 0) {
    selectedPeriod1.value = getPeriodList.value[0].value;
  }
  return getPeriodList.value;
})

watch(selectedPeriod1, () => {
  mainTableShow.value = false;
  memTableShow.value = true;
}, { deep: true })

const showMainTable = (data) => {
  userName.value = data.name;
  selectedPeriod.value = data.period;
  mainTableShow.value = true;
  memTableShow.value = false;
}

const getMainTableData = () => {
  mainTableShow.value = true;
  memTableShow.value = false;
  updateMainData.value = !updateMainData.value;
}

onMounted(async () => {
  await dispatchGetPeriod({});
})
</script>
<style lang="scss" scoped>
.betslip-wrapper {
  width: 100%;
  max-height: 500px;
  margin: 10px 0px;
}
</style>
