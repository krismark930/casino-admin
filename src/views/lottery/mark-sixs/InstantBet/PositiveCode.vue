<template>
  <el-row justify="space-between">
    <h3 style="font-weight: 600;">
      {{ $t('lottery.positiveTitle') }}[{{ selectedPeriod }}期]
    </h3>
    <el-col>
      <el-form inline="true">
        <el-form-item :label="$t('lottery.chooseNumberOfPeriods')">
          <el-select placeholder="第2023021期" v-model="selectedPeriod" style="width: 120px">
            <el-option v-for="(item, index) in periodsList" :key="index" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <!-- <el-form-item :label="$t('lottery.valueAtRisk')">
          <el-input v-model="valueAtRisk" style="width: 80px" />
        </el-form-item>
        <el-form-item :label="$t('lottery.backWater')">
          <el-input v-model="backWater" style="width: 80px" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="Search" @click="handleSearch">
            {{ $t('lottery.flyCalc') }}
          </el-button>
        </el-form-item> -->
      </el-form>
    </el-col>
    <el-col class="button-group">
      <el-button size="small">
        {{ $t('lottery.all') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.single') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.double') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.large') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.small') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.red') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.blue') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.green') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.combinedOrder') }}
      </el-button>
      <el-button size="small">
        {{ $t('lottery.combinedPair') }}
      </el-button>
    </el-col>
  </el-row>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="instant-bet-special-code">
        <thead>
          <tr>
            <template v-for="l in 4" :key="l">
              <th>{{ $t('lottery.number') }}</th>
              <th>{{ $t('lottery.odds') }}</th>
              <th>{{ $t('lottery.lumpSum') }}</th>
              <th>{{ $t('lottery.expectedProfit') }}</th>
              <!-- <th>{{ $t('lottery.flyAway') }}</th>
              <th>{{ $t('lottery.completed') }}</th> -->
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
        <thead>
          <tr>
            <template v-for="l in blockNum" :key="l">
              <th>{{ $t('lottery.number') }}</th>
              <th>{{ $t('lottery.odds') }}</th>
              <th>{{ $t('lottery.lumpSum') }}</th>
              <th>{{ $t('lottery.expectedProfit') }}</th>
              <!-- <th>{{ $t('lottery.flyAway') }}</th>
              <th>{{ $t('lottery.completed') }}</th> -->
              <th style="width: 10px;"></th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr v-if="assistantData.length > 0">
            <template v-for="m in 4" :key="m">
              <td v-if="assistantData[(m - 1)]?.class3 !== undefined">
                {{ assistantData[(m - 1)].class3 }}
              </td>
              <td v-if="assistantData[(m - 1)]?.rate !== undefined">
                {{ assistantData[(m - 1)].rate }}
              </td>
              <td v-if="assistantData[(m - 1)]?.sum_m !== undefined">
                {{ assistantData[(m - 1)].sum_m }}
              </td>
              <td v-if="assistantData[(m - 1)]?.profit !== undefined">
                {{ assistantData[(m - 1)].profit }}
              </td>
              <td></td>
            </template>
          </tr>
        </tbody>
      </table>
    </el-row>
  </el-scrollbar>
</template>
<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { ElNotification } from 'element-plus';
import { ElLoading } from 'element-plus'
import { instantBetStore } from "@/pinia/modules/mark_six/instant_bet.js";
import { storeToRefs } from "pinia";

const { dispatchGetPeriod } = instantBetStore();
const { dispatchGetPositiveCode } = instantBetStore();

const selectedPeriod = ref('')
const valueAtRisk = ref('3')
const backWater = ref('10')
const rowNum = 13
const blockNum = 4
const colNum = 7
const recordNum = 50
const mainAmount = computed(() => {
  const { getMainAmount } = storeToRefs(instantBetStore());
  return getMainAmount.value;
})
const mainData = computed(() => {
  const { getMainData } = storeToRefs(instantBetStore());
  console.log(getMainData.value[0]);
  return getMainData.value;
})
const assistantData = computed(() => {
  const { getAssistantData } = storeToRefs(instantBetStore());
  return getAssistantData.value;
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
  await dispatchGetPositiveCode({ period: selectedPeriod.value, class1: "正码" });
  loading.close();
}, { deep: true })

onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchGetPeriod({});
  await dispatchGetPositiveCode({ period: selectedPeriod.value, class1: "正码" });
  loading.close();
})
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;

table.instant-bet-special-code {
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
