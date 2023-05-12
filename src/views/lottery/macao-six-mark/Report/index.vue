<template>
  <Header v-if="allTableShow || guanTableShow || zongTableShow || daiTableShow || memTableShow" :title="title"
    :fromDate="fromDate" :endDate="endDate" :selectedPeriod="selectedPeriod" :class2="class2" @showReport="showReport" />
  <Report v-if="reportShow" @showAllTable="showAllTable" />
  <AllTable v-if="allTableShow" :class2="class2" :fromDate="fromDate" :endDate="endDate" :selectedPeriod="selectedPeriod"
    @showGuanTable="showGuanTable" />
  <GuanTable v-if="guanTableShow" :class2="class2" :fromDate="fromDate" :endDate="endDate"
    :selectedPeriod="selectedPeriod" :guanName="guanName" @showZongTable="showZongTable" />
  <ZongTable v-if="zongTableShow" :class2="class2" :fromDate="fromDate" :endDate="endDate"
    :selectedPeriod="selectedPeriod" :guanName="guanName" :zongName="zongName" @showDaiTable="showDaiTable" />
  <DaiTable v-if="daiTableShow" :class2="class2" :fromDate="fromDate" :endDate="endDate" :selectedPeriod="selectedPeriod"
    :daiName="daiName" @showMemTable="showMemTable" />
  <MemTable v-if="memTableShow" :class2="class2" :fromDate="fromDate" :endDate="endDate" :selectedPeriod="selectedPeriod"
    :userName="userName" />
</template>
<script setup>
import Report from "./components/Report.vue";
import AllTable from "./components/AllTable.vue";
import GuanTable from "./components/GuanTable.vue";
import ZongTable from "./components/ZongTable.vue";
import DaiTable from "./components/DaiTable.vue";
import MemTable from "./components/MemTable.vue";
import Header from "./components/Header.vue";
import { ref } from "vue";

const reportShow = ref(true);
const allTableShow = ref(false);
const guanTableShow = ref(false);
const zongTableShow = ref(false);
const daiTableShow = ref(false);
const memTableShow = ref(false);
const title = ref("");
const guanName = ref("");
const zongName = ref("");
const daiName = ref("");
const userName = ref("");
const selectedPeriod = ref("");
const fromDate = ref("");
const endDate = ref("");
const class2 = ref("");
const showAllTable = (data) => {
  title.value = "报表查询";
  reportShow.value = false;
  allTableShow.value = true;
  selectedPeriod.value = data.selectedPeriod;
  fromDate.value = data.fromDate;
  endDate.value = data.endDate;
  class2.value = data.class2;
}
const showGuanTable = (data) => {
  title.value = data + "股东报表查询";
  guanName.value = data;
  guanTableShow.value = true;
  allTableShow.value = false;
}
const showZongTable = (data) => {
  title.value = data + "总代理报表查询";
  zongName.value = data;
  zongTableShow.value = true;
  guanTableShow.value = false;
}
const showDaiTable = (data) => {
  title.value = data + "代理报表查询";
  daiName.value = data;
  daiTableShow.value = true;
  zongTableShow.value = false;
}
const showMemTable = (data) => {
  if (data !== "" && selectedPeriod.value !== "") {
    title.value = data + "会员注单" + selectedPeriod.value + "查询列表";
  } else {
    title.value = "注单查询表表";
  }
  userName.value = data;
  memTableShow.value = true;
  daiTableShow.value = false;
}
const showReport = () => {
  reportShow.value = true;
  allTableShow.value = false;
  guanTableShow.value = false;
  zongTableShow.value = false;
  daiTableShow.value = false;
  memTableShow.value = false;
}
</script>
