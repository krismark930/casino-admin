<template>
  <div>
    <table id="tb" border="1" align="center" cellspacing="1" cellpadding="1" bordercolordark="#FFFFFF"
      bordercolor="f1f1f1" width="99%">
      <tr>
        <td width="4%" rowspan="2" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA">序号</td>
        <td rowspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">股东</td>
        <td rowspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">注数</td>
        <td rowspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">下注金额</td>
        <td height="28" colspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">会&nbsp;&nbsp;员</td>
        <td colspan="3" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">股&nbsp;&nbsp;&nbsp;&nbsp;东</td>
        <td rowspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA"><span class="STYLE4">股东上交</span></td>
        <td rowspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="style2">公司收付</td>
      </tr>
      <tr>
        <td height="28" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">会员佣金</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="style2">会员收付</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA">股东佣金</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA">股东成数</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="style2">股东收付</td>
      </tr>
      <tr v-for="(item, index) in allReportList" :key="index">
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ index + 1 }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ item.guan }}<font color=ff6600>{{ item.xm }}</font>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ item.re }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" style="cursor: pointer;"
          @click="showGuanReport(item.guan)">
          <font color="0000ff">
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
          {{ item.guan_ds }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" class="style2" :class="[item.guan_sf_ds_color]">
          {{ item.guan_sf_ds }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" class="style2" :class="[item.guan_sf_color]">
          {{ item.guan_sf }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          <span class="STYLE4" :class="[item.mix_sf_color]">
            {{ item.mix_sf }}
          </span>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" class="style2" :class="[item.mix_sf_color]">
          {{ item.mix_sf }}
        </td>
      </tr>
      <tr>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA">&nbsp;</td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">总计</td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          {{ sumAllReport.z_re }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          {{ sumAllReport.z_sum }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          <span class="STYLE3">
            {{ sumAllReport.z_userds }}
          </span>
        </td>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumAllReport.z_usersf_color]">
          {{ sumAllReport.z_usersf }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          <span class="STYLE3">
            {{ sumAllReport.z_guands }}
          </span>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumAllReport.z_guansf_ds_color]">
          <span class="STYLE3">
            {{ sumAllReport.z_guansf_ds }}
          </span>
        </td>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumAllReport.z_guansf_color]">
          <span class="STYLE3">
            {{ sumAllReport.z_guansf }}
          </span>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumAllReport.zz_sf_color]">
          {{ sumAllReport.zz_sf }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumAllReport.zz_sf_color]">
          {{ sumAllReport.zz_sf }}
        </td>
      </tr>
    </table>
  </div>
</template>
<script setup>
import { ref, onMounted, computed, defineProps, toRefs } from 'vue';
import { macaoReportStore } from "@/pinia/modules/macao_six_mark/report.js";
import { ElNotification } from 'element-plus';
import { ElLoading } from 'element-plus'
import { storeToRefs } from "pinia";
import moment from 'moment-timezone';

const emit = defineEmits(["showGuanTable"]);
const props = defineProps({
  class2: String,
  selectedPeriod: Number,
  fromDate: String,
  endDate: String
});
const loading = ref(false);

const { selectedPeriod, class2, fromDate, endDate } = toRefs(props);

const { dispatchAllReport } = macaoReportStore();

const showGuanReport = (guanName) => {
  console.log(guanName);
  emit("showGuanTable", guanName);
}

const allReportList = computed(() => {
  const { getAllReportList } = storeToRefs(macaoReportStore());
  return getAllReportList.value;
})

const sumAllReport = computed(() => {
  const { getSumAllReport } = storeToRefs(macaoReportStore());
  return getSumAllReport.value;
})

onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchAllReport({ period: selectedPeriod.value, class2: class2.value, from_date: moment(fromDate.value).format("YYYY-MM-DD"), end_date: moment(endDate.value).format("YYYY-MM-DD") });
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
