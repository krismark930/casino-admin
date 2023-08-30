<template>
  <div style="border: 1px solid #eee; padding: 0.75rem; margin: 1rem; text-align: left;">
    <h3>{{ $t('menu.numberofUserOnline') }}</h3>
    <el-form :inline="true" :model="formData">
      <div>
        <el-form-item label="在线人数">
          <el-select v-model="formData.level" placeholder="">
            <el-option v-for="item in agentOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="在线帐号">
          <el-input v-model="formData.name" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getStatisticsDataByFilter">提交</el-button>
        </el-form-item>
        <el-form-item>
          <div class="statistic-card">
            <el-statistic :value="onlineNumber">
              <template #title>
                <div>
                  在线人数
                </div>
              </template>
            </el-statistic>
          </div>
        </el-form-item>
      </div>
    </el-form>
    <el-table :data="statisticsList" v-loading="loading" style="width: 100%;" border header-align="center" stripe>
      <el-table-column type="index" label="序号" align="center" width="70" />
      <el-table-column property="UserName" label="账号" align="center">
        <template #default="scope">
            <el-button type="primary" link @click="goCountUserPage(scope.row.UserName)">{{ scope.row.UserName }}</el-button>
        </template>
      </el-table-column>
      <el-table-column property="Alias" label="名称" align="center" />
      <el-table-column label="操作" width="120" align="center">
        <template #default="scope">
          <el-button-group>
            <el-button type="danger" link @click="kickLineData(scope.row)" v-if="scope.row.Online == 1">
              踢线
            </el-button>
            <el-button type="danger" link disabled v-else>
              已下线
            </el-button>
            <el-button type="primary" link @click="realPersonSetting(scope.row)">
              真人设置
            </el-button>
          </el-button-group>
        </template>
      </el-table-column>
      <el-table-column property="Credit" label="信用额度" align="center">
      </el-table-column>
      <el-table-column property="Money" label="现金额度" align="center" />
      <el-table-column property="BBIN_Money" label="BB额度" align="center">
          <template #default="scope">
              <div style="display: flex;">
                {{ scope.row.BBIN_Money }}
                <img width="16" height="16" id="re_credit" @click="updateBBINMoney(scope.row.UserName)">
              </div>
          </template>
      </el-table-column>
      <el-table-column property="AG_Money" label="AG额度" align="center">
          <template #default="scope">
              <div style="display: flex;">
                {{ scope.row.AG_Money }}
                <img width="16" height="16" id="re_credit" @click="updateAGMoney(scope.row.UserName)">
              </div>
          </template>
      </el-table-column>
      <el-table-column property="OG_Money" label="OG额度" align="center">
        <template #default="scope">
            <div style="display: flex;">
              {{ scope.row.OG_Money }}
              <img width="16" height="16" id="re_credit" @click="updateOGMoney(scope.row.UserName)">
            </div>
        </template>
      </el-table-column>
      <el-table-column property="MG_Money" label="MG额度" align="center">
        <template #default="scope">
            <div style="display: flex;">
              {{ scope.row.MG_Money }}
              <img width="16" height="16" id="re_credit" @click="updateMGMoney(scope.row.UserName)">
            </div>
        </template>
      </el-table-column>
      <el-table-column property="PT_Money" label="PT额度" align="center">
        <template #default="scope">
            <div style="display: flex;">
              {{ scope.row.PT_Money }}
              <img width="16" height="16" id="re_credit" @click="updatePTMoney(scope.row.UserName)">
            </div>
        </template>
      </el-table-column>
      <el-table-column property="KY_Money" label="开元额度" align="center">
        <template #default="scope">
            <div style="display: flex;">
              {{ scope.row.KY_Money }}
              <img width="16" height="16" id="re_credit" @click="updateKYMoney(scope.row.UserName)">
            </div>
        </template>
      </el-table-column>
      <el-table-column label="登陆时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon>
              <timer />
            </el-icon>
            <span style="margin-left: 10px">{{ scope.row.LoginTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="活动时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon>
              <timer />
            </el-icon>
            <span style="margin-left: 10px">{{ scope.row.OnlineTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="Url" label="登陆网址" align="center" />
      <el-table-column property="LoginIP" label="登陆IP和地区" align="center" />
      <el-table-column property="MachineCode" label="机器码" align="center" />
    </el-table>
    <el-dialog v-model="realPersonDialogVisible" title="會員真人盘口管理">
      <el-form label-width="150">
        <el-form-item label="會員帳號 :">
          <p>{{ selectedUser.UserName }}</p>
        </el-form-item>
        <el-form-item label="會員 名稱 :">
          <p>{{ selectedUser.Alias }}</p>
        </el-form-item>
        <el-form-item label="會員 额度 :">
          体育余额: {{ selectedUser.Money }}元 &nbsp;&nbsp;&nbsp;&nbsp; AG余额:{{ selectedUser.AG_Money }}元 &nbsp;&nbsp;&nbsp;
          OG余额:{{ selectedUser.OG_Money }}元 &nbsp;&nbsp;&nbsp; BBIN余额:{{ selectedUser.BBIN_Money }}元 &nbsp;&nbsp;&nbsp;
          MG余额:{{ selectedUser.MG_Money }}元 &nbsp;&nbsp;&nbsp; PT余额:{{ selectedUser.PT_Money }}元 &nbsp;&nbsp;&nbsp;
          开元余额:{{ selectedUser.KY_Money }}元
        </el-form-item>
        <el-form-item label="真人 控制 :">
          <el-checkbox v-model="sysConfigItem.AG" label="AG" size="large" />
          <el-checkbox v-model="sysConfigItem.OG" label="OG" size="large" />
          <el-checkbox v-model="sysConfigItem.BBIN" label="BBIN" size="large" />
          <el-checkbox v-model="sysConfigItem.MG" label="MG" size="large" />
          <el-checkbox v-model="sysConfigItem.PT" label="PT" size="large" />
          <el-checkbox v-model="sysConfigItem.KY" label=" 开元棋牌" size="large" />
        </el-form-item>
        <el-form-item label="额度 转换 :">
          <el-checkbox v-model="selectedUser.AG_TR" label="AG" size="large" />
          <el-checkbox v-model="selectedUser.OG_TR" label="OG" size="large" />
          <el-checkbox v-model="selectedUser.BBIN_TR" label="BBIN" size="large" />
          <el-checkbox v-model="selectedUser.MG_TR" label="MG" size="large" />
          <el-checkbox v-model="selectedUser.PT_TR" label="PT" size="large" />
          <el-checkbox v-model="selectedUser.KY_TR" label=" 开元棋牌" size="large" />
        </el-form-item>
        <el-form-item label="AG真人账号 :">
          <el-input v-model="selectedUser.AG_User" />
        </el-form-item>
        <el-form-item label="AG真人密码 :">
          <el-input v-model="selectedUser.AG_Pass" />
        </el-form-item>
        <el-form-item label="AG真人盘口 :">
          <el-select v-model="selectedUser.AG_Type">
            <el-option v-for="(item, index) in AG_TypeOptions" :key="index" :label="item.label"
              :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="BBIN真人账号 :">
          <el-input v-model="selectedUser.BBIN_User" />
        </el-form-item>
        <el-form-item label="BBIN真人密码 :">
          <el-input v-model="selectedUser.BBIN_Pass" />
        </el-form-item>
        <el-form-item label="MG真人账号 :">
          <el-input v-model="selectedUser.MG_User" />
        </el-form-item>
        <el-form-item label="MG真人密码 :">
          <el-input v-model="selectedUser.MG_Pass" />
        </el-form-item>
        <el-form-item label="PT真人账号 :">
          <el-input v-model="selectedUser.PT_User" />
        </el-form-item>
        <el-form-item label="PT真人密码 :">
          <el-input v-model="selectedUser.PT_Pass" />
        </el-form-item>
        <el-form-item label="OG真人账号 :">
          <el-input v-model="selectedUser.OG_User" />
        </el-form-item>
        <el-form-item label="OG视讯限红 :">
          <div style="display: flex">
            <el-input v-model="selectedUser.OG_Limit1" /> - <el-input v-model="selectedUser.OG_Limit2" />
          </div>
        </el-form-item>
        <el-form-item label="开元棋牌账号 :">
          <el-input v-model="selectedUser.KY_User" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="updateRealPersonData">確定</el-button>
          <el-button type="danger" @click="realPersonDialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import moment from "moment-timezone";
import { ElNotification, ElLoading } from "element-plus";
import socket from "@/utils/socket";
import { statisticsStore } from "@/pinia/modules/statistics";
import { realGameStore } from "@/pinia/modules/real_game";
import { systemStore } from "@/pinia/modules/system";
import { storeToRefs } from "pinia";
import {BASE_URL} from "@/config"
import { useRouter } from "vue-router";
const { dispatchOnlineData } = statisticsStore();
const { dispatchSystemData } = systemStore();
const { dispatchUpdateRealPersonData } = statisticsStore();
const { dispatchUpdateSysconfigData } = statisticsStore();
const { dispatchAGMoney } = realGameStore();
const { dispatchBBINMoney } = realGameStore();
const { dispatchMGMoney } = realGameStore();
const { dispatchPTMoney } = realGameStore();
const { dispatchOGMoney } = realGameStore();
const { dispatchKYMoney } = realGameStore();
const router = useRouter();
const formData = ref({
  level: "",
  username: "",
  name: "",
})
const loading = ref(false);
const onlineNumber = ref(0);
const AG_TypeOptions = ref([
  {
    label: "A盘 限红20－50000元",
    value: "A"
  },
  {
    label: "B盘 限红50－5000元",
    value: "B"
  },
  {
    label: "C盘 限红20－10000元",
    value: "C"
  },
  {
    label: "D盘 限红200－20000元",
    value: "D"
  },
  {
    label: "E盘 限红300－30000元",
    value: "E"
  },
  {
    label: "F盘 限红400－40000元",
    value: "F"
  },
  {
    label: "G盘 限红500－50000元",
    value: "G"
  },
  {
    label: "H盘 限红1000－100000元",
    value: "H"
  },
  {
    label: "I盘 限红2000－200000元",
    value: "I"
  },
])
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
const selectedUser = ref({});
const realPersonDialogVisible = ref(false);
const updateAGMoney = async(user_name) => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchAGMoney({user_name});
  await dispatchOnlineData(formData.value);
  await dispatchSystemData({ lv: "M" });
  successResult();
  loading.close();
}
const updateBBINMoney = async(user_name) => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchBBINMoney({user_name});
  await dispatchOnlineData(formData.value);
  await dispatchSystemData({ lv: "M" });
  successResult();
  loading.close();
}
const updateMGMoney = async(user_name) => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchMGMoney({user_name});
  await dispatchOnlineData(formData.value);
  await dispatchSystemData({ lv: "M" });
  successResult();
  loading.close();
}
const updatePTMoney = async(user_name) => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchPTMoney({user_name});
  await dispatchOnlineData(formData.value);
  await dispatchSystemData({ lv: "M" });
  successResult();
  loading.close();
}
const updateOGMoney = async(user_name) => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchOGMoney({user_name});
  await dispatchOnlineData(formData.value);
  await dispatchSystemData({ lv: "M" });
  successResult();
  loading.close();
}
const updateKYMoney = async(user_name) => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchKYMoney({user_name});
  await dispatchOnlineData(formData.value);
  await dispatchSystemData({ lv: "M" });
  successResult();
  loading.close();
}
const realPersonSetting = (item) => {
  realPersonDialogVisible.value = true;
  item.AG_TR = item.AG_TR == 0 ? true : false;
  item.OG_TR = item.OG_TR == 0 ? true : false;
  item.BBIN_TR = item.BBIN_TR == 0 ? true : false;
  item.MG_TR = item.MG_TR == 0 ? true : false;
  item.PT_TR = item.PT_TR == 0 ? true : false;
  item.KY_TR = item.KY_TR == 0 ? true : false;
  selectedUser.value = item;
}
const updateRealPersonData = async () => {
  selectedUser.value.AG_TR = selectedUser.value.AG_TR ? 0 : 1;
  selectedUser.value.OG_TR = selectedUser.value.OG_TR ? 0 : 1;
  selectedUser.value.BBIN_TR = selectedUser.value.BBIN_TR ? 0 : 1;
  selectedUser.value.MG_TR = selectedUser.value.MG_TR ? 0 : 1;
  selectedUser.value.PT_TR = selectedUser.value.PT_TR ? 0 : 1;
  selectedUser.value.KY_TR = selectedUser.value.KY_TR ? 0 : 1;
  
  sysConfigItem.value.AG = sysConfigItem.value.AG  ? 1 : 0;
  sysConfigItem.value.OG = sysConfigItem.value.OG  ? 1 : 0;
  sysConfigItem.value.BBIN = sysConfigItem.value.BBIN  ? 1 : 0;
  sysConfigItem.value.MG = sysConfigItem.value.MG  ? 1 : 0;
  sysConfigItem.value.PT = sysConfigItem.value.PT  ? 1 : 0;
  sysConfigItem.value.KY = sysConfigItem.value.KY  ? 1 : 0;

  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });

  await dispatchUpdateRealPersonData(selectedUser.value);
  await dispatchUpdateSysconfigData(sysConfigItem.value);
  await dispatchOnlineData(formData.value);
  await dispatchSystemData({ lv: "M" });
  successResult();
  realPersonDialogVisible.value = false;
  loading.close();
}
const statisticsList = computed(() => {
  const { getStatisticsList } = storeToRefs(statisticsStore());
  onlineNumber.value = getStatisticsList.value.filter(item => item.Online == 1).length;
  return getStatisticsList.value;
})

const success = computed(() => {
  const {getSuccess} = storeToRefs(systemStore());
  return getSuccess.value;
})

const sysConfigItem = computed(() => {
  const { getSysConfigItem } = storeToRefs(systemStore());
  getSysConfigItem.value.AG = getSysConfigItem.value.AG == 1 ? true : false;
  getSysConfigItem.value.OG = getSysConfigItem.value.OG == 1 ? true : false;
  getSysConfigItem.value.BBIN = getSysConfigItem.value.BBIN == 1 ? true : false;
  getSysConfigItem.value.MG = getSysConfigItem.value.MG == 1 ? true : false;
  getSysConfigItem.value.PT = getSysConfigItem.value.PT == 1 ? true : false;
  getSysConfigItem.value.KY = getSysConfigItem.value.KY == 1 ? true : false;
  return getSysConfigItem.value
})
const totalCount = computed(() => {
  const { getTotalCount } = storeToRefs(statisticsStore());
  return getTotalCount.value
})
const goCountUserPage = (userName) => {
  // router.push({ name: "agents.count_user", query: { userName: userName } });
  window.open(BASE_URL + "/#/agents/count-user?userName=" + userName, '_blank');
}
const successResult = () => {
  if (success.value) {
    ElNotification({
      title: "成功",
      message: "操作成功。",
      type: "success",
    });
  } else {
    ElNotification({
      title: "错误",
      message: "操作失败。",
      type: "error",
    });
  }
}
const kickLineData = async (item) => {
  formData.value.username = item.UserName;
  formData.value.active = 1;
  loading.value = true;
  await dispatchOnlineData(formData.value);
  loading.value = false;
  socket.io.emit("logout", item.UserName);
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
  await dispatchSystemData({ lv: "M" });
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
  padding: 20px;
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
  margin-top: 16px;
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

#re_credit {
  background-image: url("@/assets/refresh.gif");
  margin-left: auto;
  cursor: pointer;
}
</style>
