<template>
  <div>
    <table id="tb" border="1" align="center" cellspacing="1" cellpadding="1" bordercolordark="#FFFFFF"
      bordercolor="f1f1f1" width="99%">
      <tr>
        <td width="4%" rowspan="2" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA">序号</td>
        <td rowspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">总代理账号</td>
        <td rowspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">注数</td>
        <td rowspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">下注金额</td>
        <td height="28" colspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">会&nbsp;&nbsp;员</td>
        <td colspan="3" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">总&nbsp;&nbsp;&nbsp;&nbsp;代</td>
        <td rowspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE5">总代上交</td>
        <td colspan="3" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">股&nbsp;&nbsp;&nbsp;&nbsp;东</td>
        <td rowspan="2" align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE5">上交公司</td>
      </tr>
      <tr>
        <td height="28" align="center" bordercolor="cccccc" bgcolor="#FDF4CA">会员佣金</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="style2">会员收付</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA">总代佣金</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA">总代成数</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="style2">总代收付</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA">股东佣金</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA">股东成数</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="style2">股东收付</td>
      </tr>
      <tr v-for="(item, index) in kaguanReportList" :key="index">
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ index + 1 }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ item.zong }}<font color=ff6600>{{ item.xm }}</font>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ item.re }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" style="cursor: pointer;"
          @click="showZongReport(item.zong)">
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
          {{ item.zong_ds }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" class="style2" :class="[item.zong_sf_ds_color]">
          {{ item.zong_sf_ds }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" class="style2" :class="[item.zong_sf_color]">
          {{ item.zong_sf }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" class="style2" :class="[item.mix_sf_color]">
          {{ item.zong_mix_sf }}
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
            {{ item.guan_mix_sf }}
          </span>
        </td>
      </tr>
      <tr>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA">&nbsp;</td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">总计</td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          {{ sumKaguanReport.z_re }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          {{ sumKaguanReport.z_sum }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          <span class="STYLE3">
            {{ sumKaguanReport.z_userds }}
          </span>
        </td>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKaguanReport.z_usersf_color]">
          {{ sumKaguanReport.z_usersf }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          <span class="STYLE3">
            {{ sumKaguanReport.z_zongds }}
          </span>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKaguanReport.z_zongsf_ds_color]">
          <span class="STYLE3">
            {{ sumKaguanReport.z_zongsf_ds }}
          </span>
        </td>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKaguanReport.z_zongsf_color]">
          <span class="STYLE3">
            {{ sumKaguanReport.z_zongsf }}
          </span>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKaguanReport.zz_sf_color]">
          {{ sumKaguanReport.zong_sf }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          <span class="STYLE3">
            {{ sumKaguanReport.z_guands }}
          </span>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKaguanReport.z_guansf_ds_color]">
          <span class="STYLE3">
            {{ sumKaguanReport.z_guansf_ds }}
          </span>
        </td>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKaguanReport.z_guansf_color]">
          <span class="STYLE3">
            {{ sumKaguanReport.z_guansf }}
          </span>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKaguanReport.zz_sf_color]">
          {{ sumKaguanReport.zz_sf }}
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

const emit = defineEmits(['showZongTable']);
const props = defineProps({
  class2: String,
  selectedPeriod: Number,
  fromDate: String,
  endDate: String,
  guanName: String
});

const { selectedPeriod, class2, fromDate, endDate, guanName } = toRefs(props);

const { dispatchKaguanReport } = reportStore();

const showZongReport = (zongName) => {
  emit("showZongTable", zongName);
}

const kaguanReportList = computed(() => {
  const { getKaguanReportList } = storeToRefs(reportStore());
  return getKaguanReportList.value;
})

const sumKaguanReport = computed(() => {
  const { getSumKaguanReport } = storeToRefs(reportStore());
  return getSumKaguanReport.value;
})

onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchKaguanReport({ guan_name: guanName.value, period: selectedPeriod.value, class2: class2.value, from_date: moment(fromDate.value).format("YYYY-MM-DD"), end_date: moment(endDate.value).format("YYYY-MM-DD") });
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
