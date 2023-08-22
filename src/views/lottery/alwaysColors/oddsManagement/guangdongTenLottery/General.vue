<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <h3 style="padding-top:20px; color:slategrey;">总和</h3>
      <table class="TwoSide-table">
        <thead>
          <tr style="color: white;">
            <th>大</th>
            <th>单</th>
            <th>尾大</th>
            <th>龙</th>
            <th>小</th>
            <th>双</th>
            <th>尾小</th>
            <th>虎</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="odds9 != null">
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds9.h1" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds9.h3" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds9.h5" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds9.h7" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds9.h2" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds9.h4" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds9.h6" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds9.h8" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </el-row>
  </el-scrollbar>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <h3 style="padding-top:20px; color:slategrey;">单码/双面</h3>
      <table class="TwoSide-table">
        <thead>
          <tr style="color: white;">
            <th>号码</th>
            <th>大</th>
            <th>单</th>
            <th>和单</th>
            <th>尾大</th>
            <th>小</th>
            <th>双</th>
            <th>和双</th>
            <th>尾小</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="odds1 != null">
            <td width="100">第1球</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h1" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h3" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h5" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h7" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h2" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h4" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h6" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h8" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td width="100">第2球</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h1" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h3" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h5" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h7" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h2" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h4" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h6" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds2.h8" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds3 != null">
            <td width="100">第3球</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds3.h1" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds3.h3" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds3.h5" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds3.h7" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds3.h2" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds3.h4" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds3.h6" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds3.h8" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds4 != null">
            <td width="100">第4球</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds4.h1" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds4.h3" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds4.h5" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds4.h7" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds4.h2" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds4.h4" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds4.h6" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds4.h8" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds5 != null">
            <td width="100">第5球</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds5.h1" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds5.h3" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds5.h5" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds5.h7" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds5.h2" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds5.h4" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds5.h6" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds5.h8" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds6 != null">
            <td width="100">第6球</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds6.h1" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds6.h3" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds6.h5" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds6.h7" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds6.h2" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds6.h4" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds6.h6" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds6.h8" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr  v-if="odds7 != null">
            <td width="100">第7球</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds7.h1" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds7.h3" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds7.h5" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds7.h7" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds7.h2" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds7.h4" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds7.h6" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds7.h8" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds8 != null">
            <td width="100">第8球</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds8.h1" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds8.h3" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds8.h5" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds8.h7" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds8.h2" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds8.h4" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds8.h6" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds8.h8" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </el-row>
  </el-scrollbar>
  <div style="padding-top:20px; float:right;">
    <el-button type="info" @click="saveOdds">保存</el-button>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { ElLoading } from "element-plus";
import { gdsfOddsStore } from "@/pinia/modules/always_color/gdsf_odds.js";
const colNum = 6;
const lottery_type = ref("广东十分彩");
const sub_type = ref("主盘势");
const odds1 = ref(null);
const odds2 = ref(null);
const odds3 = ref(null);
const odds4 = ref(null);
const odds5 = ref(null);
const odds6 = ref(null);
const odds7 = ref(null);
const odds8 = ref(null);
const odds9 = ref(null);
const { dispatchGetOdds } = gdsfOddsStore();
const { dispatchSaveOdds } = gdsfOddsStore();
const saveOdds = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchSaveOdds(odds9.value);
  await dispatchSaveOdds(odds1.value);
  await dispatchSaveOdds(odds2.value);
  await dispatchSaveOdds(odds3.value);
  await dispatchSaveOdds(odds4.value);
  await dispatchSaveOdds(odds5.value);
  await dispatchSaveOdds(odds6.value);
  await dispatchSaveOdds(odds7.value);
  await dispatchSaveOdds(odds8.value);
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
    ball_type: "ball_9"
  }
  await dispatchGetOdds(formData);
  odds9.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_1"
  }
  await dispatchGetOdds(formData);
  odds1.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_2"
  }
  await dispatchGetOdds(formData);
  odds2.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_3"
  }
  await dispatchGetOdds(formData);
  odds3.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_4"
  }
  await dispatchGetOdds(formData);
  odds4.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_5"
  }
  await dispatchGetOdds(formData);
  odds5.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_6"
  }
  await dispatchGetOdds(formData);
  odds6.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_7"
  }
  await dispatchGetOdds(formData);
  odds7.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_8"
  }
  await dispatchGetOdds(formData);
  odds8.value = gdsfOddsStore().getOddsItem;
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
