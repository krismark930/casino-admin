<template>
  <div>
    <table id="tb" border="1" align="center" cellspacing="1" cellpadding="1" bordercolordark="#FFFFFF"
      bordercolor="f1f1f1" width="99%">
      <tr>
        <td width="4%" height="28" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA">序号</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA">会员</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA">下单时间 </td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA">期数</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA">下注金额</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="m_title_reall">类型</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="m_title_reall">内容</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="m_title_reall">会员佣金</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">会员收付</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="m_title_reall">代理佣金</td>
        <td align="center" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">代理收付</td>
      </tr>
      <tr :bgcolor="[item.bm === 1 ? '#FFFF99' : '']" v-for="(item, index) in kauserReportList" :key="index">
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ index + 1 }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ item.username }}<font color=ff6600> ({{ item.xm }})</font>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ item.adddate }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ item.kithe }}期
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ item.sum_m }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ item.class1 }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          {{ item.class2 }}
          :<font color=ff6600>
            {{ item.class3 }}
          </font> @ <font color=ff0000>
            <strong>
              {{ item.rate }}
            </strong>
          </font>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" class="style2">
          <span v-if="item.bm === 2">0</span>
          <span v-else>{{ Number(item['sum_m']) * Math.abs(Number(item['user_ds'])) / 100 }}</span>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc"
          :class="[(-item['sum_m'] + item['sum_m'] * Math.abs(item['user_ds'])) / 100 > 0 ? 'black' : 'red']">
          <span v-if="bm === 2">0 </span>
          <span v-else-if="bm === 1">
            {{ item['sum_m'] * item['rate'] - item['sum_m'] + item['sum_m'] * Math.abs(item['user_ds']) / 100 }}
          </span>
          <span v-else>
            {{ -item['sum_m'] + item['sum_m'] * Math.abs(item['user_ds']) / 100 }}
          </span>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc">
          <span v-if="item.bm === 2">0</span>
          <span v-else>
            {{ item['sum_m'] * Math.abs(item['dai_ds'] - item['user_ds']) / 100 * (10 - item['dai_zc']) / 10 }}
          </span>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc"
          :class="[(item['sum_m'] * Math.abs(item['dai_ds'] - item['user_ds']) / 100 + item['sum_m'] * item['dai_zc'] / 10 - item['sum_m'] * item['dai_zc'] / 10 * item['dai_ds'] / 100) > 0 ? 'black' : 'red']">
          <span v-if="bm === 2">0 </span>
          <span v-else-if="bm === 1">
            {{
              item['sum_m'] * item['dai_zc'] / 10 - item['sum_m'] * item['rate'] * item['dai_zc'] / 10 + item['sum_m'] *
              (item['dai_ds'] - item['user_ds']) / 100 * (10 - item['dai_zc']) / 10 - item['sum_m'] * item['user_ds'] /
              100 *
              (item['dai_zc']) / 10
            }}
          </span>
          <span v-else>
            {{
              item['sum_m'] * Math.abs(item['dai_ds'] - item['user_ds']) / 100 + item['sum_m'] * item['dai_zc'] / 10 -
              item['sum_m']
              * (item['dai_zc']) / 10 * item['dai_ds'] / 100
            }}
          </span>
        </td>
      </tr>
      <tr>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA">&nbsp;</td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">总计</td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          {{ sumKauserReport.z_re }}注
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">&nbsp;</td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          {{ sumKauserReport.z_sum }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">&nbsp;</td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">&nbsp;</td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          <span class="STYLE3">
            {{ sumKauserReport.z_userds }}
          </span>
        </td>
        <td height="28" align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKauserReport.z_user_color]">
          {{ sumKauserReport.z_user }}
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3">
          <span class="STYLE3">
            {{ sumKauserReport.z_daids }}
          </span>
        </td>
        <td align="center" nowrap="nowrap" bordercolor="cccccc" bgcolor="#FDF4CA" class="STYLE3"
          :class="[sumKauserReport.z_dai_color]">
          <span class="STYLE3">
            {{ sumKauserReport.z_dai }}
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

const props = defineProps({
  class2: String,
  selectedPeriod: Number,
  fromDate: String,
  endDate: String,
  userName: String,
});

const { selectedPeriod, class2, fromDate, endDate, userName } = toRefs(props);

const { dispatchKauserReport } = macaoReportStore();

const kauserReportList = computed(() => {
  const { getKauserReportList } = storeToRefs(macaoReportStore());
  return getKauserReportList.value;
})

const sumKauserReport = computed(() => {
  const { getSumKauserReport } = storeToRefs(macaoReportStore());
  return getSumKauserReport.value;
})

onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchKauserReport({ user_name: userName.value, period: selectedPeriod.value, class2: class2.value, from_date: moment(fromDate.value).format("YYYY-MM-DD"), end_date: moment(endDate.value).format("YYYY-MM-DD") });
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
