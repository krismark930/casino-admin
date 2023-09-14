<template>
  <el-row justify="space-between">
    <h3 style="font-weight: 600;">
      连码统计[{{ selectedPeriod }}期]
    </h3>
    <el-col>
      <el-form inline="true">
        <el-form-item :label="$t('lottery.chooseNumberOfPeriods')">
          <el-select
            placeholder="第2023021期"
            v-model="selectedPeriod"
            style="width: 120px"
          >
            <el-option
              v-for="(item, index) in periodsList"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="下注总额:">
          {{mainAmount}}
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="instant-bet-positive-code">
        <thead>
          <tr>
            <th>号码</th>
            <th>赔率</th>
            <th>总额</th>
            <th>预计盈利</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in mainData" :key="index">
            <td>{{item.class3}}</td>
            <td>{{item.rate}}</td>
            <td>{{item.sum_m}}</td>
            <td>{{item.profit}}</td>
          </tr>
        </tbody>
      </table>
    </el-row>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import { ref, reactive, defineProps, onMounted, computed, watch, toRefs } from 'vue'
import { ElNotification } from 'element-plus';
import { ElLoading } from 'element-plus'
import { instantBetStore } from "@/pinia/modules/new_macao_six_mark/instant_bet.js";
import { storeToRefs } from "pinia";

const { dispatchGetPeriod } = instantBetStore();
const { dispatchGetEvenCode } = instantBetStore();

const selectedPeriod = ref('')
const success = computed(() => {
  const { getSuccess } = storeToRefs(instantBetStore());
  return getSuccess.value;
})
const mainAmount = computed(() => {
  const { getMainAmount } = storeToRefs(instantBetStore());
  return getMainAmount.value;
})
const mainData = computed(() => {
  const { getMainData } = storeToRefs(instantBetStore());
  console.log(getMainData.value[0]);
  return getMainData.value;
})
const periodsList = computed(() => {
  const { getPeriodList } = storeToRefs(instantBetStore());
  if (getPeriodList.value.length > 0) {
    selectedPeriod.value = getPeriodList.value[0].value;
  }
  return getPeriodList.value;
})
watch(selectedPeriod, async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchGetEvenCode({ period: selectedPeriod.value, class1: "连码"});
  loading.close();
}, { deep: true })
const successResult = () => {
  if (success.value) {
    ElNotification({
      title: '成功',
      message: '操作成功。',
      type: 'success',
    })
  } else {
    ElNotification({
      title: '错误',
      message: '操作失败。',
      type: 'error',
    })
  }
}
onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchGetPeriod({});
  await dispatchGetEvenCode({ period: selectedPeriod.value, class1: "连码"});
  loading.close();
})
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;
table.instant-bet-positive-code {
  overflow-x: scroll;
  width: 100%;
  border: $table-border;
  margin-top: 15px;
  border-collapse: collapse;
  tr {
    height: 30px;
    th {
      text-align: center;
      padding: 10px;
      background-color: $table-th-bgcolor;
      border: $table-border;
    }
    td {
      padding: 5px 10px;
      border: $table-border;
      text-align: center;
    }
  }
}

.button-group {
  button {
    margin-bottom: 10px;
  }
}
</style>
