<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin: 1rem; text-align: center;"
  >
    <h3>{{ $t('menu.systemLog') }}</h3>
    <el-form :inline="true" :model="formData">
      <div>
        <el-form-item label="日期">
          <el-date-picker
            placeholder=""
            type="date"
            value-format="YYYY-MM-DD"
            v-model="formData.date_start"
            style="width: 150px;"
          />
        </el-form-item>
        <el-form-item label="帐户">
          <el-select
            v-model="formData.parents_id"
            placeholder=" "
            style="width: 80px;"
          >
            <el-option
              v-for="item in agentOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getStatisticsDataByFilter">快速查詢</el-button>
          <el-button type="danger" @click="goBack">快速查詢</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-table
      :data="statisticsList"
      style="width: 100%;"
      v-loading="loading"
      border
      header-align="center"
      stripe
      v-if="!showLog"
    >
      <el-table-column type="index" label="序号" align="center" width="70" />
      <el-table-column property="UserName" label="帐号" align="center" />
      <el-table-column property="Level" label="级别" align="center" />
      <el-table-column label="登陆时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.LoginTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="Url" label="登陆网址" align="center" />
      <el-table-column
        property="LoginIP"
        label="登陆IP和地区"
        align="center"
      />
      <el-table-column fixed="right" label="操作" width="100" align="center">
        <template #default="scope">
          <el-button-group>
            <el-button
              type="primary"
              link
              @click="checkData(scope.row)"
            >
              查看
            </el-button>
            <el-button
              type="danger"
              link
              @click="kickLineData(scope.row)"
            >
              踢线
            </el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <el-table
      :data="statisticsList"
      style="width: 100%;"
      v-loading="loading"
      border
      header-align="center"
      stripe
      v-else
    >
      <el-table-column type="index" label="序号" align="center" width="70" />
      <el-table-column property="UserName" label="帐号" align="center" />
      <el-table-column property="Level" label="级别" align="center">
      </el-table-column>
      <el-table-column label="活动时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.LoginTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="ConText" label="活动内容" align="center" />
      <el-table-column
        property="LoginIP"
        label="登陆IP"
        align="center"
      />
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="totalCount" @current-change="onPageChange" :page-size="20"
        v-model:current-page="formData.page" />
    </div>
  </div>
</template>
<script setup>
  import {ref, computed, onMounted} from "vue";
  import moment from "moment-timezone";
  import {statisticsStore} from "@/pinia/modules/statistics";
  import {storeToRefs} from "pinia";
  const {dispatchSystemLogs} = statisticsStore();
  const showLog=ref(false);
  const formData = ref({
    date_start: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
    parents_id: "",
    name: "",
    page: 1
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
  const totalCount = computed(() => {
    const {getTotalCount} = storeToRefs(statisticsStore());
    return getTotalCount.value
  })
  const kickLineData = async (item) => {
    formData.value.name = item.UserName;
    formData.value.active = 1;
    loading.value = true;
    await dispatchSystemLogs(formData.value);
    loading.value = false;
  }
  const getStatisticsDataByFilter = async () => {
    loading.value = true;
    await dispatchSystemLogs(formData.value);
    loading.value = false;
  }
  const goBack = async () => {
    formData.value.parents_id = "";
    showLog.value = false;
    loading.value = true;
    await dispatchSystemLogs(formData.value);
    loading.value = false;
  }
  const checkData = async (item) => {
    formData.value.name = item.UserName;
    formData.value.parents_id = item.UserName;
    loading.value = true;
    await dispatchSystemLogs(formData.value);
    showLog.value = true;
    loading.value = false;
  }
  const onPageChange = async () => {
    loading.value = true;
    await dispatchSystemLogs(formData.value);
    loading.value = false;
  }
  onMounted(async () => {
    loading.value = true;
    await dispatchSystemLogs(formData.value);
    loading.value = false;
  })
</script>
<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}
</style>
