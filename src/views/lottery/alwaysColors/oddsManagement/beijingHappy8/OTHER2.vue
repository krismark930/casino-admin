<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="TwoSide-table">
        <tbody>
          <tr v-if="odds1 != null">
            <th width="100">选5</th>
            <td>
              <span class="choose-name">中5</span>
              <el-input v-model="odds1.h1"></el-input>
            </td>
            <td>
              <span class="choose-name">中4</span>
              <el-input v-model="odds1.h2"></el-input>
            </td>
            <td>
              <span class="choose-name">中3</span>
              <el-input v-model="odds1.h3"></el-input>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <th width="100">选4</th>
            <td>
              <span class="choose-name">中4</span>
              <el-input v-model="odds1.h4"></el-input>
            </td>
            <td>
              <span class="choose-name">中3</span>
              <el-input v-model="odds1.h5"></el-input>
            </td>
            <td>
              <span class="choose-name">中2</span>
              <el-input v-model="odds1.h6"></el-input>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <th width="100">选3</th>
            <td>
              <span class="choose-name">中3</span>
              <el-input v-model="odds1.h7"></el-input>
            </td>
            <td>
              <span class="choose-name">中2</span>
              <el-input v-model="odds1.h8"></el-input>
            </td>
            <td></td>
          </tr>
          <tr v-if="odds1 != null">
            <th width="100">选2</th>
            <td>
              <span class="choose-name">中2</span>
              <el-input v-model="odds1.h9"></el-input>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr v-if="odds1 != null">
            <th width="100">选1</th>
            <td>
              <span class="choose-name">中1</span>
              <el-input v-model="odds1.h10"></el-input>
            </td>
            <td></td>
            <td></td>
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
const lottery_type = ref("北京快乐8");
const sub_type = ref("选号");
const odds1 = ref(null);
const { dispatchGetOdds } = gdsfOddsStore();
const { dispatchSaveOdds } = gdsfOddsStore();
const saveOdds = async () => {
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
    ball_type: "ball_1"
  }
  await dispatchGetOdds(formData);
  odds1.value = gdsfOddsStore().getOddsItem;
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
.choose-name {
    border: 1px solid #333333;
    padding: 5px;
    color: white;
    background: #333333;
    display: block;
    font-size: 10px;
    margin-bottom: 2px;
}
</style>
