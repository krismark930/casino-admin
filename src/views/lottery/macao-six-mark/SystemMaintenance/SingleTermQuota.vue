<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="single-term-quota">
        <thead>
          <tr>
            <template v-for="l in 5" :key="l">
              <th>号码</th>
              <th>限额</th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in 10" :key="n" v-if="singleQuotaList.length > 0">
            <template v-for="m in 5" :key="m">
              <template v-if="n + (m - 1) * 10 < 50">
                <td>
                  <img
                    :src="
                      numberImageArray[singleQuotaList[n + (m - 1) * 10 - 1].class3 - 1]
                    "
                  />
                </td>
                <td>
                  <div style="display: flex; column-gap: 10px">
                    <div>
                      <el-input v-model="singleQuotaList[n + (m - 1) * 10 - 1].xr" />
                    </div>
                  </div>
                </td>
              </template>
              <template v-else>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </template>
            </template>
          </tr>
        </tbody>
      </table>
      <el-col>
        <div style="display: flex; justify-content: center; padding-top: 10px">
          <el-form-item label="统计修改" style="margin-right: 10px">
            <el-input v-model="rate"></el-input>
          </el-form-item>
          <el-button type="primary" @click="changeRate">轉送</el-button>
          <el-button type="success" @click="updateSingleQuota">确认修改</el-button>
        </div>
      </el-col>
    </el-row>
  </el-scrollbar>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { ElLoading } from "element-plus";
import { systemMaintanceStore } from "@/pinia/modules/macao_six_mark/system_maintance.js";
import { storeToRefs } from "pinia";

import numberImage1 from "@/assets/number/num1.gif";
import numberImage2 from "@/assets/number/num2.gif";
import numberImage3 from "@/assets/number/num3.gif";
import numberImage4 from "@/assets/number/num4.gif";
import numberImage5 from "@/assets/number/num5.gif";
import numberImage6 from "@/assets/number/num6.gif";
import numberImage7 from "@/assets/number/num7.gif";
import numberImage8 from "@/assets/number/num8.gif";
import numberImage9 from "@/assets/number/num9.gif";
import numberImage10 from "@/assets/number/num10.gif";
import numberImage11 from "@/assets/number/num11.gif";
import numberImage12 from "@/assets/number/num12.gif";
import numberImage13 from "@/assets/number/num13.gif";
import numberImage14 from "@/assets/number/num14.gif";
import numberImage15 from "@/assets/number/num15.gif";
import numberImage16 from "@/assets/number/num16.gif";
import numberImage17 from "@/assets/number/num17.gif";
import numberImage18 from "@/assets/number/num18.gif";
import numberImage19 from "@/assets/number/num19.gif";
import numberImage20 from "@/assets/number/num20.gif";
import numberImage21 from "@/assets/number/num21.gif";
import numberImage22 from "@/assets/number/num22.gif";
import numberImage23 from "@/assets/number/num23.gif";
import numberImage24 from "@/assets/number/num24.gif";
import numberImage25 from "@/assets/number/num25.gif";
import numberImage26 from "@/assets/number/num26.gif";
import numberImage27 from "@/assets/number/num27.gif";
import numberImage28 from "@/assets/number/num28.gif";
import numberImage29 from "@/assets/number/num29.gif";
import numberImage30 from "@/assets/number/num30.gif";
import numberImage31 from "@/assets/number/num31.gif";
import numberImage32 from "@/assets/number/num32.gif";
import numberImage33 from "@/assets/number/num33.gif";
import numberImage34 from "@/assets/number/num34.gif";
import numberImage35 from "@/assets/number/num35.gif";
import numberImage36 from "@/assets/number/num36.gif";
import numberImage37 from "@/assets/number/num37.gif";
import numberImage38 from "@/assets/number/num38.gif";
import numberImage39 from "@/assets/number/num39.gif";
import numberImage40 from "@/assets/number/num40.gif";
import numberImage41 from "@/assets/number/num41.gif";
import numberImage42 from "@/assets/number/num42.gif";
import numberImage43 from "@/assets/number/num43.gif";
import numberImage44 from "@/assets/number/num44.gif";
import numberImage45 from "@/assets/number/num45.gif";
import numberImage46 from "@/assets/number/num46.gif";
import numberImage47 from "@/assets/number/num47.gif";
import numberImage48 from "@/assets/number/num48.gif";
import numberImage49 from "@/assets/number/num49.gif";

const numberImageArray = [
  numberImage1,
  numberImage2,
  numberImage3,
  numberImage4,
  numberImage5,
  numberImage6,
  numberImage7,
  numberImage8,
  numberImage9,
  numberImage10,
  numberImage11,
  numberImage12,
  numberImage13,
  numberImage14,
  numberImage15,
  numberImage16,
  numberImage17,
  numberImage18,
  numberImage19,
  numberImage20,
  numberImage21,
  numberImage22,
  numberImage23,
  numberImage24,
  numberImage25,
  numberImage26,
  numberImage27,
  numberImage28,
  numberImage29,
  numberImage30,
  numberImage31,
  numberImage32,
  numberImage33,
  numberImage34,
  numberImage35,
  numberImage36,
  numberImage37,
  numberImage38,
  numberImage39,
  numberImage40,
  numberImage41,
  numberImage42,
  numberImage43,
  numberImage44,
  numberImage45,
  numberImage46,
  numberImage47,
  numberImage48,
  numberImage49,
];
const rate = ref("");
const { dispatchSingleQuota } = systemMaintanceStore();
const { dispatchUpdateSingleQuota } = systemMaintanceStore();
const singleQuotaList = computed(() => {
  const { getSingleQuotaList } = storeToRefs(systemMaintanceStore());
  return getSingleQuotaList.value;
});
const changeRate = () => {
  singleQuotaList.value.map((item) => {
    item.xr = rate.value;
  });
};
const updateSingleQuota = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchUpdateSingleQuota({
    data: JSON.stringify(singleQuotaList.value),
  });
  loading.close();
};
onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchSingleQuota();
  loading.close();
});
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;
table.single-term-quota {
  overflow-x: scroll;
  width: 100%;
  border: $table-border;
  margin-top: 15px;
  border-collapse: collapse;
  tr {
    height: 30px;
    th {
      text-align: center;
      padding: 0 10px;
      background-color: $table-th-bgcolor;
      border: $table-border;
    }
    td {
      padding: 5px 10px;
      border: $table-border;
      text-align: center;
    }
  }
}

table.options {
  margin-top: 15px;
  border: $table-border;
  border-collapse: collapse;
  td {
    border: $table-border;
    text-align: left;
    padding: 0 10px;
    background-color: $table-th-bgcolor;
  }
}
</style>
