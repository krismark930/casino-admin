<template>
  <table v-loading="loading" width="100%" border="0" cellspacing="0" cellpadding="5">
    <tr class="tbtitle">
      <td width="28%"><span class="STYLE5">{{ title }}</span></td>
      <td width="1%">&nbsp;</td>
      <td width="71%">
        <table border="0" align="center" cellspacing="0" cellpadding="1" bordercolor="888888" bordercolordark="#FFFFFF"
          width="98%">
          <tr>
            <td width="61%">
              <span class="STYLE6" v-if="selectedPeriod == ''">
                &nbsp;&nbsp;&nbsp;当前报表--&gt;&gt;
                日期区间：
                {{ moment(fromDate).format("YYYY-MM-DD") }}
                -----
                {{ moment(endDate).format("YYYY-MM-DD") }}
                &nbsp;&nbsp;&nbsp;&nbsp;投注品种：
                {{ class2 === '' ? '全部' : class2 }}
              </span>
              <span class="STYLE6" v-else>
                &nbsp;&nbsp;&nbsp;当前报表--&gt;&gt; 查第 {{ selectedPeriod }} 期
                &nbsp;&nbsp;&nbsp;&nbsp;投注品种：
                {{ class2 === '' ? '全部' : class2 }}
              </span>
            </td>
            <td width="39%">
              <div align="right">
                <el-button @click="showReport">返回报表</el-button>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td height="5" colspan="3"></td>
    </tr>
  </table>
</template>
<script setup>
import { defineProps, toRefs } from 'vue';
import moment from 'moment-timezone';

const emit = defineEmits(['showReport']);
const props = defineProps({
  selectedPeriod: Number,
  fromDate: String,
  endDate: String,
  title: String,
  class2: String,
});

const { title, selectedPeriod, fromDate, endDate, class2 } = toRefs(props);

const showReport = () => {
  emit("showReport");
}
</script>
<style scoped>
.tbtitle {
  background: #0077cc;
  color: #ffffff;
}
</style>
