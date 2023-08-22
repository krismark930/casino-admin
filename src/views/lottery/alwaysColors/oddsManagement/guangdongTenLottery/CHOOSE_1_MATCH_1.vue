<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
        <table class="TwoSide-table" v-if="odds1 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">一中一</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="01"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h1"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="06"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h6"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="11"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h11"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="16"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h16"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="02"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h2"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="07"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h7"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="12"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h12"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="17"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h17"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="03"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h3"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="08"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h8"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="13"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h13"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="18"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h18"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="04"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h4"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="09"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h9"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="14"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h14"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="19"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h19"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="05"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h5"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="10"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h10"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="15"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h15"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="20"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h20"></el-input>
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
const lottery_type = ref("广东十分彩");
const sub_type = ref("一中一");
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
