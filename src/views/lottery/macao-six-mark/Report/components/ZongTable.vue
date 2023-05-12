<template>
  <div>
    <table id="tb" border="1" align="center" cellspacing="1" cellpadding="1" bordercolordark="#FFFFFF"
      bordercolor="f1f1f1" width="99%">
      <tr>
        <td width="4%" rowspan="2" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA">序号</td>
        <td rowspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">代理账号</td>
        <td rowspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">注数</td>
        <td rowspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">下注金额</td>
        <td height="28" colspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">会&nbsp;&nbsp;员</td>
        <td colspan="3" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">代&nbsp;&nbsp;&nbsp;&nbsp;理</td>
        <td rowspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE5">代理上交</td>
        <td colspan="3" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">总&nbsp;&nbsp;&nbsp;&nbsp;代</td>
        <td rowspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE5">上交股东</td>
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
      <tr v-for="(item, index) in kazongReportList" :key="index">
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ index + 1 }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ item.dai }}<font color=ff6600>{{ item.xm }}</font>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ item.re }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" style="cursor: pointer;">
          <font color="0000ff" @click="showDaiReport(item.dai)">
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
        <td align="center" nowrap="nowrap" bordercolor="cccccc" class="style2" :class="[item.zong_mix_sf_color]">
          {{ item.zong_mix_sf }}
        </td>
      </tr>
      <tr>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA">&nbsp;</td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">总计</td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          {{ sumKazongReport.z_re }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          {{ sumKazongReport.z_sum }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          <span class="STYLE3">
            {{ sumKazongReport.z_userds }}
          </span>
        </td>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKazongReport.z_usersf_color]">
          {{ sumKazongReport.z_usersf }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          <span class="STYLE3">
            {{ sumKazongReport.z_daids }}
          </span>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKazongReport.z_daisf_ds_color]">
          <span class="STYLE3">
            {{ sumKazongReport.z_daisf_ds }}
          </span>
        </td>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKazongReport.z_daisf_color]">
          <span class="STYLE3">
            {{ sumKazongReport.z_daisf }}
          </span>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKazongReport.dai_sf_color]">
          {{ sumKazongReport.dai_sf }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          <span class="STYLE3">
            {{ sumKazongReport.z_zongds }}
          </span>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKazongReport.z_zongsf_ds_color]">
          <span class="STYLE3">
            {{ sumKazongReport.z_zongsf_ds }}
          </span>
        </td>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKazongReport.z_zongsf_color]">
          <span class="STYLE3">
            {{ sumKazongReport.z_zongsf }}
          </span>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKazongReport.zz_sf_color]">
          {{ sumKazongReport.zz_sf }}
        </td>
      </tr>
    </table>
  </div>
</template>
<script setup>
import { ref, onMounted, computed, defineProps, toRefs } from 'vue';
import { reportStore } from "@/pinia/modules/macao_six_mark/report.js";
import { storeToRefs } from "pinia";
import { ElLoading } from 'element-plus'
import moment from 'moment-timezone';

const emit = defineEmits(['showDaiTable']);
const props = defineProps({
  class2: String,
  selectedPeriod: Number,
  fromDate: String,
  endDate: String,
  guanName: String,
  zongName: String,
});

const { selectedPeriod, class2, fromDate, endDate, guanName, zongName } = toRefs(props);

const { dispatchKazongReport } = reportStore();

const showDaiReport = (daiName) => {
  emit("showDaiTable", daiName);
}

const kazongReportList = computed(() => {
  const { getKazongReportList } = storeToRefs(reportStore());
  return getKazongReportList.value;
})

const sumKazongReport = computed(() => {
  const { getSumKazongReport } = storeToRefs(reportStore());
  return getSumKazongReport.value;
})

onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchKazongReport({ zong_name: zongName.value, guan_name: guanName.value, period: selectedPeriod.value, class2: class2.value, from_date: moment(fromDate.value).format("YYYY-MM-DD"), end_date: moment(endDate.value).format("YYYY-MM-DD") });
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
