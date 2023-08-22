<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
        <table class="TwoSide-table" v-if="odds5 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">特别号</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="01"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h1"></el-input>
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
                    <el-input v-model="odds5.h8"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
                      value="15"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h15"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name red">红波</span>
                    <el-input v-model="odds5.h22"></el-input>
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
                    <el-input v-model="odds5.h2"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
                      value="09"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h9"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="16"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h16"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name blue">蓝波</span>
                    <el-input v-model="odds5.h23"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
                      value="03"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h3"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="10"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h10"></el-input>
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
                    <el-input v-model="odds5.h17"></el-input>
                  </div>
                </td>
                <td>
                  <span class="choose-name green">绿波</span>
                  <el-input v-model="odds5.h24"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="04"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h4"></el-input>
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
                    <el-input v-model="odds5.h11"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
                      value="18"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h18"></el-input>
                  </div>
                </td>
                <td>
                  <span class="choose-name">大单</span>
                  <el-input v-model="odds5.h25"></el-input>
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
                    <el-input v-model="odds5.h5"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
                      value="12"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h12"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="19"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h19"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name">大双</span>
                    <el-input v-model="odds5.h20"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="succss"
                      value="06"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h6"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="13"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h13"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="20"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h20"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name">小单</span>
                    <el-input v-model="odds5.h27"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="07"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h7"></el-input>
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
                    <el-input v-model="odds5.h14"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
                      value="21"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h21"></el-input>
                  </div>
                </td>
                <td>
                    <span class="choose-name">大双</span>
                    <el-input v-model="odds5.h28"></el-input>
                </td>
            </tr>
            <tr>
              <th>特大</th>
              <th>特单</th>
              <th>和单</th>
              <th>尾大</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds5.h29"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds5.h31"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds5.h33"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds5.h35"></el-input>
              </td>
            </tr>
            <tr>
              <th>特小</th>
              <th>特双</th>
              <th>和双</th>
              <th>尾小</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds5.h30"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds5.h32"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds5.h34"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds5.h36"></el-input>
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
const lottery_type = ref("广西十分彩");
const sub_type = ref("正码和特别号");
const odds5 = ref(null);
const { dispatchGetOdds } = gdsfOddsStore();
const { dispatchSaveOdds } = gdsfOddsStore();
const saveOdds = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchSaveOdds(odds5.value);
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
    ball_type: "ball_5"
  }
  await dispatchGetOdds(formData);
  odds5.value = gdsfOddsStore().getOddsItem;
  loading.close();
});
</script>
<style lang="scss" scoped>
$table-border: 1px solid #5a584b;
$table-th-bgcolor: #484742;
.red {
  background: #f56c6c !important;
}
.blue {
  background: #409eff !important;
}
.green {
  background: green !important;
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
</style>
