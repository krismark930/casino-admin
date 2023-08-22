<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="TwoSide-table" v-loading="loading">
        <thead>
          <tr>
            <th>组合</th>
            <th>单</th>
            <th>双</th>
            <th>大</th>
            <th>小</th>
            <th>质</th>
            <th>合</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="odds1 != null">
            <td>佰</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h0" size="small" controls-position="center" />
                </div>
              </div>
            </td>
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
                  <el-input v-model="odds1.h2" size="small" controls-position="center" />
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
                  <el-input v-model="odds1.h4" size="small" controls-position="center" />
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
          </tr>
          <tr v-if="odds1 != null">
            <td>拾</td>
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
                  <el-input v-model="odds1.h7" size="small" controls-position="center" />
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
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h9" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h10" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h11" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>个</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h12" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h13" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h14" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h15" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h16" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h17" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>佰拾</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h18" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h19" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h20" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h21" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h22" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h23" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>佰个</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h24" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h25" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h26" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h27" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h28" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h29" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>拾个</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h30" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h31" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h32" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h33" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h34" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h35" size="small" controls-position="center" />
                </div>
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>佰拾个	</td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h36" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h37" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h38" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h39" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h40" size="small" controls-position="center" />
                </div>
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <div>
                  <el-input v-model="odds1.h41" size="small" controls-position="center" />
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
const loading = ref(false);
const lottery_type = ref("3D彩");
const sub_type = ref("两面");
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
