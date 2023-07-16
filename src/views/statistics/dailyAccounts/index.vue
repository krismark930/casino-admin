<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin: 1rem; text-align: left;"
  >
    <h3>{{ $t('menu.dailyAccount') }}</h3>
    <el-form :inline="true" :model="formData">
      <div>
        <el-form-item label="">
          <div class="statistic-card">
            <el-statistic precision="2" :value="totalStatistics.CK">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  总存款
                  <el-tooltip effect="dark" content="入金总额" placement="top">
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
            <el-statistic precision="2" :value="totalStatistics.TK">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  总提款
                  <el-tooltip effect="dark" content="取款总额" placement="top">
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
            <el-statistic precision="2" :value="totalStatistics.DF">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  利润总额
                  <el-tooltip effect="dark" content="取款总额" placement="top">
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
        <el-form-item label="">
          <el-date-picker
            v-model="formData.startdate"
            type="date"
            value-format="YYYY-MM-DD"
            placeholder="开始日期"
          />
          <el-date-picker
            v-model="formData.overdate"
            type="date"
            value-format="YYYY-MM-DD"
            placeholder="结束日期"
          />
        </el-form-item>
        <el-form-item label="会员帐号">
          <el-input
            clearable
            v-model="formData.username"
            placeholder=""
          ></el-input>
        </el-form-item>
        <el-form-item label="代理商">
          <el-select v-model="formData.Agent" placeholder="">
            <el-option
              v-for="item in agentOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="formData.Type" placeholder="">
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getStatisticsDataByFilter">确认</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-table
      :data="statisticsList"
      v-loading = "loading"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column type="index" label="编号" />
      <el-table-column property="UserName" label="帐号" />
      <el-table-column property="Gold" label="金额" />
      <el-table-column property="previousAmount" label="操作前余额" />
      <el-table-column property="currentAmount" label="操作后余额" />
      <el-table-column label="日期时间" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.Date }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="Phone" label="联系电话" />
      <el-table-column property="Bank_Address" label="开户银行" />
      <el-table-column property="Bank_Account" label="银行账号" />
      <el-table-column property="Alias" label="用户名" />
      <el-table-column property="Order_Code" label="定单号" />
      <el-table-column fixed="right" label="操作" width="70">
        <template #default="scope">
          <div v-if="scope.row.Checked == 0 || (scope.row.Music==0 && scope.rowType == 'S' && scope.row.Payway == 'W')">
            未处理
          </div>
          <div v-else>
            <div v-if="scope.row.Type == 'S'">
              <font v-if="scope.row.Cancel == 1" color="red">存入已拒绝</font>
              <font v-else color="blue">已存入</font>
            </div>
            <div v-else>
              <font v-if="scope.row.Cancel == 1" color="red">已恢复</font>
              <font v-else color="blue">已提出</font>
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script setup>
  import {ref, computed, onMounted} from "vue";
  import moment from "moment-timezone";
  import {statisticsStore} from "@/pinia/modules/statistics";
  import {storeToRefs} from "pinia";
  const {dispatchDailyAccounts} = statisticsStore();
  const formData = ref({
    startdate: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
    overdate: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
    username: "",
    Agent: "",
    Type: "",
  })
  const typeOptions = ref([
    {
      label: "全部",
      value: ""
    },
    {
      label: "存款",
      value: "S"
    },
    {
      label: "提款",
      value: "T"
    },
    {
      label: "彩金",
      value: "C"
    },
    {
      label: "返水",
      value: "F"
    },
  ])
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
    await dispatchDailyAccounts(formData.value);
    loading.value = false;    
  }
  onMounted(async () => {
    loading.value = true;
    await dispatchDailyAccounts(formData.value);
    loading.value = false;
  })
</script>
<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}

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
