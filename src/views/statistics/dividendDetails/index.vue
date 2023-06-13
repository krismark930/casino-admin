<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin: 1rem; text-align: center;"
  >
    <h3>{{ $t('menu.dividendDetails') }}</h3>
    <el-form :inline="true" :model="formData">
      <div>
        <el-form-item label="" style="padding: 10px;">
          <div class="statistic-card">
            <el-statistic precision="2" :value="totalStatistics.value_1" suffix="元">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  总盈利
                  <el-tooltip effect="dark" content="利润总额" placement="top">
                    <el-icon style="margin-left: 4px" :size="12">
                      <Warning />
                    </el-icon>
                  </el-tooltip>
                </div>
              </template>
            </el-statistic>
          </div>
        </el-form-item>
        <el-form-item label="">
          <div class="statistic-card">
            <el-statistic precision="2" :value="totalStatistics.value_2" suffix="元">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  彩金
                  <el-tooltip effect="dark" content="总奖金" placement="top">
                    <el-icon style="margin-left: 4px" :size="12">
                      <Warning />
                    </el-icon>
                  </el-tooltip>
                </div>
              </template>
            </el-statistic>
          </div>
        </el-form-item>
        <el-form-item label="">
          <div class="statistic-card">
            <el-statistic precision="2" :value="totalStatistics.value_3" suffix="元">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  佣金
                  <el-tooltip effect="dark" content="总佣金" placement="top">
                    <el-icon style="margin-left: 4px" :size="12">
                      <Warning />
                    </el-icon>
                  </el-tooltip>
                </div>
              </template>
            </el-statistic>
          </div>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="選擇代理商">
          <el-select v-model="formData.id" placeholder="">
            <el-option
              v-for="item in agentOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-date-picker
            v-model="formData.start_time"
            type="date"
            value-format="YYYY-MM-DD"
            placeholder="开始日期"
          />
          <el-date-picker
            v-model="formData.end_time"
            type="date"
            value-format="YYYY-MM-DD"
            placeholder="结束日期"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getStatisticsDataByFilter">查詢</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-table
      :data="statisticsList"
      v-loading="loading"
      style="width: 100%; text-align: center; display: inline-block;"
      border
      header-align="center"
      stripe
    >
      <el-table-column property="title" label="类型" align="center" />
      <el-table-column property="value_1" label="总投注额" align="center" />
      <el-table-column
        property="value_2"
        label="有效投注额"
        align="center"
      />
      <el-table-column property="value_3" label="盈利" align="center" />
    </el-table>
  </div>
</template>
<script setup>
  import {ref, computed, onMounted} from "vue";
  import moment from "moment-timezone";
  import {statisticsStore} from "@/pinia/modules/statistics";
  import {storeToRefs} from "pinia";
  const {dispatchDividendDetails} = statisticsStore();
  const formData = ref({
    start_time: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
    end_time: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
    id: ""
  })
  const loading = ref(false);
  const agentOptions = computed(() => {
    const { getAgentsList } = storeToRefs(statisticsStore());
    return getAgentsList.value
  })
  const statisticsList = computed(() => {
    const {getStatisticsList} = storeToRefs(statisticsStore());
    return getStatisticsList.value;
  })
  const totalStatistics = computed(() => {
    const {getTotalStatistics} = storeToRefs(statisticsStore());
    return getTotalStatistics.value
  })
  const getStatisticsDataByFilter = async () => {
    loading.value = true;
    await dispatchDividendDetails(formData.value);
    loading.value = false;    
  }
  onMounted(async () => {
    loading.value = true;
    await dispatchDividendDetails(formData.value);
    loading.value = false;
  })
</script>
<style lang="scss" scoped>
:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--el-fill-color) !important;
}

.el-statistic {
  --el-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding-left: 20px;
  border-radius: 4px;
  background-color: var(--el-bg-color-overlay);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--el-text-color-regular);
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--el-color-success);
}
.red {
  color: var(--el-color-error);
}
</style>
