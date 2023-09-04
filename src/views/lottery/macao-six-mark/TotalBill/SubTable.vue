<template>
  <table width="920" border="0" cellpadding="2" cellspacing="1" style="border-color: #f9f9f9;" bordercolordark="#f9f9f9"
    bgcolor="#cccccc">
    <tr class="tbtitle">
      <td height="28" colspan="10" align="center" nowrap="nowrap">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td>
              <font color=ffff00>
                {{ selectedPeriod }}期下注状况
              </font>
            </td>
            <td>
              <font color=ffffff>
                <div align="right">
                  <b>保&nbsp;存</b>(右击，目标另存为)
                </div>
              </font>
            </td>
            <td>
              <div align="right">
                <el-button @click="showMainTable">返回</el-button>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr class="tbtitle">
      <td width="30" align="center" nowrap="nowrap"><span class="STYLE2">序号</span></td>
      <td width="60" height="28" align="center" nowrap="nowrap"><span class="STYLE2"> 下注单号 </span></td>
      <td width="80" align="center" nowrap="nowrap"><span class="STYLE2">下注时间</span></td>
      <td width="80" align="center" nowrap="nowrap"><span class="STYLE2">期数</span></td>
      <td height="28" align="center" nowrap="nowrap"><span class="STYLE2"> 内容</span></td>
      <td align="center" nowrap="nowrap"><span class="STYLE2">赔率</span></td>
      <td width="60" align="center" nowrap="nowrap"><span class="STYLE2">金额</span></td>
      <td width="60" align="center" nowrap="nowrap"><span class="STYLE2">佣金</span></td>
      <td width="60" align="center" nowrap="nowrap"><span class="STYLE2">会员收付</span></td>
    </tr>

    <tr :bgcolor="[item.bm === 1 ? '#FFFF99' : 'FFFFF4']" v-for="(item, index) in  subBillList " :key="index">
      <td height="25" align="center" nowrap="nowrap">
        {{ index + 1 }}
      </td>
      <td align="center" nowrap="nowrap">
        {{ item.num }}
      </td>
      <td align="center" nowrap="nowrap">
        {{ item.adddate }}
      </td>
      <td align="center" nowrap="nowrap">
        {{ item.kithe }}期
      </td>
      <td align="center" nowrap="nowrap">
        <div v-html="item.class4"></div>
      </td>
      <td align="center" nowrap="nowrap">
        {{ item.rate }}
      </td>
      <td align="center" nowrap="nowrap">
        {{ item.sum_m }}
      </td>
      <td align="center" nowrap="nowrap">
        <span v-if="item.bm == 2">0</span>
        <span v-else>
          {{ item.sum_m * Math.abs(item.user_ds) / 100 }}
        </span>
      </td>
      <td align="center" nowrap="nowrap">
        <span v-if="item.bm == 2">0</span>
        <span v-else-if="item.bm == 1">
          {{ (item['sum_m'] * item['rate'] - item['sum_m'] + item['sum_m'] * Math.abs(item['user_ds']) / 100).toFixed(2)
          }}
        </span>
        <span v-else>
          {{ (-item['sum_m'] + item['sum_m'] * Math.abs(item['user_ds']) / 100).toFixed(2) }}
        </span>
      </td>
    </tr>
    <tr class="tbtitle">
      <td height="28" align="center" nowrap="nowrap">&nbsp;</td>
      <td align="center" nowrap="nowrap">&nbsp;</td>
      <td align="center" nowrap="nowrap">&nbsp;</td>
      <td align="center" nowrap="nowrap"><span class="STYLE4">小计</span></td>
      <td height="28" align="center" nowrap="nowrap">
        <span class="STYLE4">共下注《 {{ subBillItem.z_re }} 注》 </span>
      </td>
      <td align="center" nowrap="nowrap">&nbsp;</td>
      <td align="center" nowrap="nowrap">
        <span class="STYLE4">
          {{ subBillItem.z_sum }}
        </span>
      </td>
      <td align="center" nowrap="nowrap">
        <span class="STYLE4">
          {{ subBillItem.z_userds }}
        </span>
      </td>
      <td align="center" nowrap="nowrap">
        <span class="STYLE4">
          {{ subBillItem.z_user }}
        </span>
      </td>
    </tr>
  </table>
</template>
<script setup>
import { ref, onMounted, computed, defineProps, toRefs } from 'vue';
import { macaoReportStore } from "@/pinia/modules/macao_six_mark/report.js";
import { storeToRefs } from "pinia";
import { ElLoading } from 'element-plus'

const emit = defineEmits(['showMainTable']);

const props = defineProps({
  selectedPeriod: Number,
});

const { selectedPeriod } = toRefs(props);

const { dispatchMacaoSubBill } = macaoReportStore();

const subBillList = computed(() => {
  const { getSubBillList } = storeToRefs(macaoReportStore());
  return getSubBillList.value;
})

const subBillItem = computed(() => {
  const { getSubBillItem } = storeToRefs(macaoReportStore());
  return getSubBillItem.value;
})

const showMainTable = () => {
  emit("showMainTable");
}

onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchMacaoSubBill({ period: selectedPeriod.value });
  loading.close();
})
</script>
<style scoped>
.tbtitle {
  background: #0077cc;
  color: #ffffff;
}

.red {
  color: red
}

.black {
  color: black
}
</style>
