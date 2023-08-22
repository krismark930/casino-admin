<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="TwoSide-table">
        <tbody>
          <tr v-if="odds1 != null">
            <th width="100">和值</th>
            <td>
              <span class="choose-name">单</span>
              <el-input v-model="odds1.h1"></el-input>
            </td>
            <td>
              <span class="choose-name">双</span>
              <el-input v-model="odds1.h2"></el-input>
            </td>
            <td>
              <span class="choose-name">大</span>
              <el-input v-model="odds1.h3"></el-input>
            </td>
            <td>
              <span class="choose-name">小</span>
              <el-input v-model="odds1.h4"></el-input>
            </td>
            <td>
              <span class="choose-name">810</span>
              <el-input v-model="odds1.h5"></el-input>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <th width="100">上中下盘</th>
            <td>
              <span class="choose-name">上</span>
              <el-input v-model="odds1.h6"></el-input>
            </td>
            <td>
              <span class="choose-name">中</span>
              <el-input v-model="odds1.h7"></el-input>
            </td>
            <td>
              <span class="choose-name">下</span>
              <el-input v-model="odds1.h8"></el-input>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr v-if="odds1 != null">
            <th width="100">奇偶和盘</th>
            <td>
              <span class="choose-name">奇</span>
              <el-input v-model="odds1.h9"></el-input>
            </td>
            <td>
              <span class="choose-name">和</span>
              <el-input v-model="odds1.h10"></el-input>
            </td>
            <td>
              <span class="choose-name">偶</span>
              <el-input v-model="odds1.h11"></el-input>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr v-if="odds1 != null">
            <th width="100">五行</th>
            <td>
              <span class="choose-name">金</span>
              <el-input v-model="odds1.h12"></el-input>
            </td>
            <td>
              <span class="choose-name">木</span>
              <el-input v-model="odds1.h13"></el-input>
            </td>
            <td>
              <span class="choose-name">水</span>
              <el-input v-model="odds1.h14"></el-input>
            </td>
            <td>
              <span class="choose-name">火</span>
              <el-input v-model="odds1.h15"></el-input>
            </td>
            <td>
              <span class="choose-name">土</span>
              <el-input v-model="odds1.h16"></el-input>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <th width="100">过关</th>
            <td>
              <span class="choose-name">小单</span>
              <el-input v-model="odds1.h17"></el-input>
            </td>
            <td>
              <span class="choose-name">小双</span>
              <el-input v-model="odds1.h18"></el-input>
            </td>
            <td>
              <span class="choose-name">大单</span>
              <el-input v-model="odds1.h19"></el-input>
            </td>
            <td>
              <span class="choose-name">大双</span>
              <el-input v-model="odds1.h20"></el-input>
            </td>
            <td>
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
const lottery_type = ref("北京快乐8");
const sub_type = ref("其他");
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
      color: white;
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
