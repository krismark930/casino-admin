<template>
  <table width="760" border="0" cellpadding="2" cellspacing="1" style="border-color: #f9f9f9;" bordercolordark="#f9f9f9"
    bgcolor="#cccccc">
    <tr class="tbtitle">
      <td height="28" colspan="9" align="center" nowrap="nowrap">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td>
              <font color=ffffff>
                <font color=ffff00>总底单</font>&nbsp;
              </font>
            </td>
            <td>
              <font color=ffffff></font>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr class="tbtitle">
      <td width="30" height="25" align="center" nowrap="nowrap"><span class="STYLE5">序号</span></td>
      <td width="20%" align="center" nowrap="nowrap"><span class="STYLE5">日期</span></td>
      <td width="20%" align="center" nowrap="nowrap"><span class="STYLE5">期数</span></td>

      <td width="20%" align="center" nowrap="nowrap"><span class="STYLE5">金额</span></td>
      <td width="20%" align="center" nowrap="nowrap"><span class="STYLE5">佣金</span></td>
      <td width="20%" align="center" nowrap="nowrap"><span class="STYLE5">结果</span></td>
    </tr>
    <tr v-for="(item, index) in totalBillList" :key="index" bgColor="FFFFF4">
      <td height="25" align="center" nowrap="nowrap">
        {{ index + 1 }}
      </td>
      <td align="center" nowrap="nowrap" @click="showSubTable(item.nn)" style="cursor: pointer;">
        <font color=ff0000><b>{{ item.nd }}</b></font>
      </td>
      <td align="center" nowrap="nowrap">
        <font color=ff0000>
          {{ item.nn }}期
        </font>
      </td>
      <td align="center" nowrap="nowrap" @click="showSubTable(item.nn)" style="cursor: pointer;">
        <b>
          <font color=ff0000>{{ item.sum_m }}</font>
        </b>
      </td>
      <td align="center" nowrap="nowrap">
        {{ item.user_ds }}
      </td>
      <td align="center" nowrap="nowrap">
        <font color="#FF0000">{{ item.sum_m_1 }}</font>
      </td>
    </tr>
    <tr class="tbtitle">
      <td height="25" align="center" nowrap="nowrap">&nbsp;</td>
      <td align="center" nowrap="nowrap"><span class="STYLE4">小计</span></td>
      <td align="center" nowrap="nowrap">&nbsp;</td>
      <td align="center" nowrap="nowrap">
        <span class="STYLE4" v-if="totalBillItem.z_sum != undefined">
          {{ totalBillItem.z_sum }}
        </span>
      </td>
      <td align="center" nowrap="nowrap" v-if="totalBillItem.z_userds != undefined">
        <span class="STYLE4">
          {{ totalBillItem.z_userds }}
        </span>
      </td>
      <td align="center" nowrap="nowrap" v-if="totalBillItem.z_usersf != undefined">
        <span class="STYLE4">
          {{ totalBillItem.z_usersf }}
        </span>
      </td>
    </tr>
  </table>
</template>
<script setup>
import { ref, onMounted, computed, defineProps, toRefs } from 'vue';
import { reportStore } from "@/pinia/modules/mark_six/report.js";
import { storeToRefs } from "pinia";
import { ElLoading } from 'element-plus'
const emit = defineEmits(['showSubTable']);
const { dispatchTotalBill } = reportStore();

const totalBillList = computed(() => {
  const { getTotalBillList } = storeToRefs(reportStore());
  return getTotalBillList.value;
})

const totalBillItem = computed(() => {
  const { getTotalBillItem } = storeToRefs(reportStore());
  return getTotalBillItem.value;
})

const showSubTable = (nn) => {
  emit("showSubTable", nn);
}

onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchTotalBill({});
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
