<template>
  <div>
    <table id="tb" border="1" align="center" cellspacing="1" cellpadding="1" bordercolordark="#FFFFFF"
      bordercolor="f1f1f1" width="99%">
      <tr>
        <td width="4%" rowspan="2" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA">序号</td>
        <td rowspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">会员账号</td>
        <td rowspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">注数</td>
        <td rowspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">下注金额</td>
        <td height="28" colspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">会&nbsp;&nbsp;员</td>
        <td colspan="3" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">代&nbsp;&nbsp;&nbsp;&nbsp;理</td>
        <td rowspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="style5">上交总代</td>
        <td colspan="3" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">总&nbsp;&nbsp;&nbsp;&nbsp;代</td>
      </tr>
      <tr>
        <td height="28" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">会员佣金</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="style2">会员收付</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA">代理佣金</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA">代理成数</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="style2">代理收付</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA">总代佣金</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA">总代成数</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="style2">总代收付</td>
      </tr>
      <tr v-for="(item, index) in kadaiReportList" :key="index">
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ index + 1 }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ item.username }}<font color=ff6600> ({{ item.xm }})</font>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ item.re }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" style="cursor: pointer;">
          <font color="0000ff" @click="showMemReport(item.username)">
            {{ item.sum_m }}
          </font>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ item.user_ds }}
        </td>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc" class="style2" :class="[item.sum_m_1_color]">
          {{ item.sum_m_1 }}
        </td>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ item.dai_ds }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" class="style2" :class="[item.dai_sf_ds_color]">
          {{ item.dai_sf_ds }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" class="style2" :class="[item.dai_sf_color]">
          {{ item.dai_sf }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          <span class="STYLE4" :class="[item.dai_mix_sf_color]">
            {{ item.dai_mix_sf }}
          </span>
        </td>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ item.zong_ds }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" class="style2" :class="[item.zong_sf_ds_color]">
          {{ item.zong_sf_ds }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" class="style2" :class="[item.zong_sf_color]">
          {{ item.zong_sf }}
        </td>
      </tr>
      <tr>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA">&nbsp;</td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">总计</td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          {{ sumKadaiReport.z_re }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          {{ sumKadaiReport.z_sum }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          <span class="STYLE3">
            {{ sumKadaiReport.z_userds }}
          </span>
        </td>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKadaiReport.z_usersf_color]">
          {{ sumKadaiReport.z_usersf }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          <span class="STYLE3">
            {{ sumKadaiReport.z_daids }}
          </span>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKadaiReport.z_daisf_ds_color]">
          <span class="STYLE3">
            {{ sumKadaiReport.z_daisf_ds }}
          </span>
        </td>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKadaiReport.z_daisf_color]">
          <span class="STYLE3">
            {{ sumKadaiReport.z_daisf }}
          </span>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKadaiReport.dai_sf_color]">
          {{ sumKadaiReport.dai_sf }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          <span class="STYLE3">
            {{ sumKadaiReport.z_zongds }}
          </span>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKadaiReport.z_zongsf_ds_color]">
          <span class="STYLE3">
            {{ sumKadaiReport.z_zongsf_ds }}
          </span>
        </td>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKadaiReport.z_zongsf_color]">
          <span class="STYLE3">
            {{ sumKadaiReport.z_zongsf }}
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>
<script setup>
import { ref, onMounted, computed, defineProps, toRefs } from 'vue';
import { macaoReportStore } from "@/pinia/modules/new_macao_six_mark/report.js";
import { storeToRefs } from "pinia";
import { ElLoading } from 'element-plus'
import moment from 'moment-timezone';

const emit = defineEmits(['showMemTable']);
const props = defineProps({
  class2: String,
  selectedPeriod: Number,
  fromDate: String,
  endDate: String,
  daiName: String,
});

const { selectedPeriod, class2, fromDate, endDate, daiName } = toRefs(props);

const { dispatchKadaiReport } = macaoReportStore();

const showMemReport = (memName) => {
  emit("showMemTable", memName);
}

const kadaiReportList = computed(() => {
  const { getKadaiReportList } = storeToRefs(macaoReportStore());
  return getKadaiReportList.value;
})

const sumKadaiReport = computed(() => {
  const { getSumKadaiReport } = storeToRefs(macaoReportStore());
  return getSumKadaiReport.value;
})

onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchKadaiReport({ dai_name: daiName.value, period: selectedPeriod.value, class2: class2.value, from_date: moment(fromDate.value).format("YYYY-MM-DD"), end_date: moment(endDate.value).format("YYYY-MM-DD") });
  loading.close();
})
</script>
<style scoped>
.red {
  color: red
}

.black {
  color: black
}
</style>
