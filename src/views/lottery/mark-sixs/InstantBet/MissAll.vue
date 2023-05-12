<template>
  <el-row justify="space-between">
    <h3 style="font-weight: 600;">
      {{class2}}统计[{{ selectedPeriod }}期]
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
    <el-col>
      <div class="flex">
        <el-button size="small" @click="getDataByClass2('五不中')">
          <el-icon><Plus /></el-icon>
          五不中
        </el-button>
        <el-button size="small" @click="getDataByClass2('六不中')">
          <el-icon><Plus /></el-icon>
          六不中
        </el-button>
        <el-button size="small" @click="getDataByClass2('七不中')">
          <el-icon><Plus /></el-icon>
          七不中
        </el-button>
        <el-button size="small" @click="getDataByClass2('八不中')">
          <el-icon><Plus /></el-icon>
          八不中
        </el-button>
        <el-button size="small" @click="getDataByClass2('九不中')">
          <el-icon><Plus /></el-icon>
          九不中
        </el-button>
        <el-button size="small" @click="getDataByClass2('十不中')">
          <el-icon><Plus /></el-icon>
          十不中
        </el-button>
        <el-button size="small" @click="getDataByClass2('十一不中')">
          <el-icon><Plus /></el-icon>
          十一不中
        </el-button>
        <el-button size="small" @click="getDataByClass2('十二不中')">
          <el-icon><Plus /></el-icon>
          十二不中
        </el-button>
      </div>
    </el-col>
  </el-row>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="instant-bet-positive-code">
        <thead>
          <tr>
            <template v-for="l in blockNum" :key="l">
              <th>{{ $t('lottery.number') }}</th>
              <th>{{ $t('lottery.odds') }}</th>
              <th>{{ $t('lottery.lumpSum') }}</th>
              <th>{{ $t('lottery.expectedProfit') }}</th>
              <th style="width: 10px;"></th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in rowNum" :key="n" v-if="mainData.length > 0">
            <template v-for="m in blockNum" :key="m">
              <template v-if="n + (m - 1) * rowNum < recordNum">
                <td v-if="mainData[n + (m - 1) * rowNum - 1]?.class3 !== undefined">
                  <Font :color="[mainData[n + (m - 1) * rowNum - 1].color]">
                    <b>{{ mainData[n + (m - 1) * rowNum - 1].class3 }}</b>
                  </Font>
                </td>
                <td v-if="mainData[n + (m - 1) * rowNum - 1]?.rate !== undefined">
                  {{ mainData[n + (m - 1) * rowNum - 1].rate }}
                </td>
                <td v-if="mainData[n + (m - 1) * rowNum - 1]?.sum_m !== undefined">
                  {{ mainData[n + (m - 1) * rowNum - 1].sum_m }}
                </td>
                <td v-if="mainData[n + (m - 1) * rowNum - 1]?.profit !== undefined">
                  {{ mainData[n + (m - 1) * rowNum - 1].profit }}
                </td>
                <td></td>
              </template>
              <template v-else>
                <template v-if="n + (m - 1) * rowNum == recordNum">
                  <td :colspan="colNum">{{ $t('lottery.bettingTotal') }}: {{ mainAmount }}</td>
                </template>
                <!-- <template v-if="n + (m - 1) * rowNum == recordNum + 1">
                  <td :colspan="colNum">{{ $t('lottery.totalAmount') }}: 0</td>
                </template>
                <template v-if="n + (m - 1) * rowNum == recordNum + 2">
                  <td :colspan="colNum">
                    {{ $t('lottery.totalAmountOfFlight') }}: 0
                  </td>
                </template> -->
              </template>
            </template>
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
import { instantBetStore } from "@/pinia/modules/mark_six/instant_bet.js";
import { storeToRefs } from "pinia";

const { dispatchGetPeriod } = instantBetStore();
const { dispatchGetPass } = instantBetStore();

const selectedPeriod = ref('')
const rowNum = 13
const blockNum = 4
const colNum = 7
const recordNum = 50
const rowNum2 = 5
const recordNum2 = 18
const class2 = ref("五不中");
const getDataByClass2 = async (data) => {
  class2.value = data;
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchGetPass({ period: selectedPeriod.value, class1: "全不中", class2: class2.value });
  loading.close();  
}
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
  await dispatchGetPass({ period: selectedPeriod.value, class1: "全不中", class2: class2.value });
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
  await dispatchGetPass({ period: selectedPeriod.value, class1: "全不中", class2: class2.value });
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

  td:nth-child(5n + 1) {
    background-color: rgb(255, 244, 225);
  }
}

.button-group {
  button {
    margin-bottom: 10px;
  }
}
</style>
