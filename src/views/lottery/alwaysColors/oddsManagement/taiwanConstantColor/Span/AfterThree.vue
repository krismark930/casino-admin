<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="TwoSide-table">
        <thead>
          <tr>
            <template v-for="l in colNum" :key="l">
              <th>号码</th>
              <th>赔率</th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr v-if="odds1 != null">
            <td>0</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h0" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>1</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h1" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>2</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h2" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>3</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h3" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>4</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h4" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>5</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h5" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>6</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h6" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>7</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h7" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>8</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h8" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>9</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h9" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </el-row>
  </el-scrollbar>
  <div style="padding-top: 20px; float: right">
    <el-button type="info" @click="saveB5Odds">保存</el-button>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { ElLoading } from "element-plus";
import { b5OddsStore } from "@/pinia/modules/always_color/b5_odds.js";
const colNum = 5;
const lottery_type = ref("台湾时时彩");
const sub_type = ref("(后三)跨度");
const odds1 = ref(null);
const { dispatchGetOdds1 } = b5OddsStore();
const { dispatchSaveOdds } = b5OddsStore();
const saveB5Odds = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchSaveOdds(odds1.value);
  loading.close();
};
onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  let formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
  }
  await dispatchGetOdds1(formData);
  const { getB5OddsItem1 } = storeToRefs(b5OddsStore());
  odds1.value = getB5OddsItem1.value;
  loading.close();
});
</script>

<style lang="scss" scoped>
$table-border: 1px solid #5a584b;
$table-th-bgcolor: #484742;
table.TwoSide-table {
  width: 100%;
  border: $table-border;
  margin-top: 15px;
  border-collapse: collapse;
  tr {
    height: 30px;
    th {
      text-align: center;
      word-break: keep-all;
      padding: 10px;
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
</style>
