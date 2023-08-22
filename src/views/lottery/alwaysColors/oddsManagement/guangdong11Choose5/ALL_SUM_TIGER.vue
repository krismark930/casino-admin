<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
        <table class="TwoSide-table" v-if="odds1 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">总和 龙虎和</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                  <span class="num-group">总和大</span>
                  <div style="display:flex;justify-content:center;">
                    <el-input v-model="odds1.h1" />
                  </div>
              </td>
              <td>
                <span class="num-group">总和小</span>
                <div style="display:flex; justify-content:center;">
                  <el-input v-model="odds1.h2" />
                </div>
              </td>
              <td>
                  <span class="num-group">总和单</span>
                  <div style="display:flex;justify-content:center;">
                    <el-input v-model="odds1.h3" />
                  </div>
              </td>
              <td>
                <span class="num-group">总和双</span>
                <div style="display:flex; justify-content:center;">
                  <el-input v-model="odds1.h4" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                  <span class="num-group">龙</span>
                  <div style="display:flex;justify-content:center;">
                    <el-input v-model="odds1.h5" />
                  </div>
              </td>
              <td>
                <span class="num-group">虎</span>
                <div style="display:flex; justify-content:center;">
                  <el-input v-model="odds1.h6" />
                </div>
              </td>
              <td>
                <span class="num-group">和</span>
                <div style="display:flex; justify-content:center;">
                  <el-input v-model="odds1.h7" />
                </div>
              </td>
              <td></td>
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
const sub_type = ref("总和龙虎和");
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
    text-align: center;
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
