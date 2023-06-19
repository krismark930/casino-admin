<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin: 1rem; text-align: center;"
  >
    <h3>{{ $t('menu.numberofUserOnline') }}</h3>
    <el-form :inline="true" :model="formData">
      <div>
        <el-form-item label="在线人数">
          <el-select
            v-model="formData.level"
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
        <el-form-item label="在线帐号">
          <el-input
            v-model="formData.name"
            placeholder=""
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getStatisticsDataByFilter">提交</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-table
      :data="statisticsList"
      v-loading="loading"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column type="index" label="序号" align="center" width="70" />
      <el-table-column property="UserName" label="账号" align="center" />
      <el-table-column property="Alias" label="名称" align="center" />
      <el-table-column label="操作" width="120" align="center">
        <template #default="scope">
          <el-button-group>
            <el-button
              type="danger"
              link
              @click="kickLineData(scope.row)"
            >
              踢线
            </el-button>
            <el-button
              type="primary"
              link
              @click="realPersonSetting(scope.row)"
            >
              真人设置
            </el-button>
          </el-button-group>
        </template>
      </el-table-column>
      <el-table-column property="Credit" label="信用额度" align="center" />
      <el-table-column property="Money" label="现金额度" align="center" />
      <el-table-column property="BBIN_Money" label="BB额度" align="center" />
      <el-table-column property="AG_Money" label="AG额度" align="center" />
      <el-table-column property="OG_Money" label="OG额度" align="center" />
      <el-table-column property="MG_Money" label="MG额度" align="center" />
      <el-table-column property="PT_Money" label="PT额度" align="center" />
      <el-table-column
        property="KY_Money"
        label="开元额度"
        align="center"
      />
      <el-table-column label="登陆时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.LoginTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="活动时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.OnlineTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="Url" label="登陆网址" align="center" />
      <el-table-column
        property="LoginIP"
        label="登陆IP和地区"
        align="center"
      />
      <el-table-column property="MachineCode" label="机器码" align="center" />
    </el-table>
  </div>
</template>
<script setup>
  import {ref, computed, onMounted} from "vue";
  import moment from "moment-timezone";
  import {statisticsStore} from "@/pinia/modules/statistics";
  import {storeToRefs} from "pinia";
  const {dispatchOnlineData} = statisticsStore();
  const formData = ref({
    level: "",
    username: "",
    name: "",
  })
  const loading = ref(false);
  const agentOptions = ref([
    {
      label: "会员",
      value: "member"
    },
    {
      label: "代理",
      value: "agents"
    },
  ])
  const statisticsList = computed(() => {
    const {getStatisticsList} = storeToRefs(statisticsStore());
    return getStatisticsList.value;
  })
  const totalCount = computed(() => {
    const {getTotalCount} = storeToRefs(statisticsStore());
    return getTotalCount.value
  })
  const kickLineData = async (item) => {
    formData.value.username = item.UserName;
    formData.value.active = 1;
    loading.value = true;
    await dispatchOnlineData(formData.value);
    loading.value = false;
  }
  const getStatisticsDataByFilter = async () => {
    loading.value = true;
    await dispatchOnlineData(formData.value);
    loading.value = false;
  }
  const onPageChange = async () => {
    loading.value = true;
    await dispatchOnlineData(formData.value);
    loading.value = false;
  }
  onMounted(async () => {
    loading.value = true;
    await dispatchOnlineData(formData.value);
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
