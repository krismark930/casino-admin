<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
        <table class="TwoSide-table" v-if="odds1 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">前三球</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  <span class="num-group">顺子</span>
                  <div style="display:flex;justify-content:center;">
                    <el-input v-model="odds1.h1" />
                  </div>
              </td>
              <td>
                  <span class="num-group">半顺</span>
                  <div style="display:flex;justify-content:center;">
                    <el-input v-model="odds1.h2" />
                  </div>
              </td>
              <td>
                  <span class="num-group">杂六</span>
                  <div style="display:flex;justify-content:center;">
                    <el-input v-model="odds1.h3" />
                  </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds2 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">中三球</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  <span class="num-group">顺子</span>
                  <div style="display:flex;justify-content:center;">
                    <el-input v-model="odds2.h1" />
                  </div>
              </td>
              <td>
                  <span class="num-group">半顺</span>
                  <div style="display:flex;justify-content:center;">
                    <el-input v-model="odds2.h2" />
                  </div>
              </td>
              <td>
                  <span class="num-group">杂六</span>
                  <div style="display:flex;justify-content:center;">
                    <el-input v-model="odds2.h3" />
                  </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds3 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">后三球</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  <span class="num-group">顺子</span>
                  <div style="display:flex;justify-content:center;">
                    <el-input v-model="odds3.h1" />
                  </div>
              </td>
              <td>
                  <span class="num-group">半顺</span>
                  <div style="display:flex;justify-content:center;">
                    <el-input v-model="odds3.h2" />
                  </div>
              </td>
              <td>
                  <span class="num-group">杂六</span>
                  <div style="display:flex;justify-content:center;">
                    <el-input v-model="odds3.h3" />
                  </div>
              </td>
            </tr>
          </tbody>
        </table>
    </el-row>
    <div style="padding-top:20px; float:right;">
      <el-button type="info" @click="saveOdds">保存</el-button>
    </div>
  </el-scrollbar>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { ElLoading } from "element-plus";
import { gdsfOddsStore } from "@/pinia/modules/always_color/gdsf_odds.js";
const colNum = 6;
const lottery_type = ref("广东十一选五");
const sub_type = ref("顺子杂六");
const odds1 = ref(null);
const odds2 = ref(null);
const odds3 = ref(null);
const { dispatchGetOdds } = gdsfOddsStore();
const { dispatchSaveOdds } = gdsfOddsStore();
const saveOdds = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchSaveOdds(odds1.value);
  await dispatchSaveOdds(odds2.value);
  await dispatchSaveOdds(odds3.value);
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
    text-align: center;
    th {
      text-align: center;
      word-break: keep-all;
      padding: 10px;
      background-color: $table-th-bgcolor;
      border: $table-border;
      color: white
    }
    td {
      padding: 5px 10px;
      border: $table-border;
      text-align: center;
    }
  }
}
.num-group {
  border: 1px solid #333333;
  padding: 5px;
  color: white;
  background: #333333;
  display: block;
  font-size: 10px;
  margin-bottom: 2px;
}
.num {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-weight: bold;
  background-repeat: no-repeat;
}
</style>
