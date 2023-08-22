<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="TwoSide-table">
        <tbody>
          <tr v-if="odds1 != null">
            <th rowspan="2">冠军</th>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-1">1</span>
                <el-input v-model="odds1.h1" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-2">2</span>
                <el-input v-model="odds1.h2" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-3">3</span>
                <el-input v-model="odds1.h3" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-4">4</span>
                <el-input v-model="odds1.h4" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-5">5</span>
                <el-input v-model="odds1.h5" size="small" />
              </div>
            </td>
          </tr>
          <tr v-if="odds1 != null">
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-6">6</span>
                <el-input v-model="odds1.h6" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-7">7</span>
                <el-input v-model="odds1.h7" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-8">8</span>
                <el-input v-model="odds1.h8" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-9">9</span>
                <el-input v-model="odds1.h9" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-10">10</span>
                <el-input v-model="odds1.h10" size="small" />
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <th rowspan="2">亚军</th>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-1">1</span>
                <el-input v-model="odds2.h1" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-2">2</span>
                <el-input v-model="odds2.h2" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-3">3</span>
                <el-input v-model="odds2.h3" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-4">4</span>
                <el-input v-model="odds2.h4" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-5">5</span>
                <el-input v-model="odds2.h5" size="small" />
              </div>
            </td>
          </tr>
          <tr v-if="odds2 != null">
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-6">6</span>
                <el-input v-model="odds2.h6" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-7">7</span>
                <el-input v-model="odds2.h7" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-8">8</span>
                <el-input v-model="odds2.h8" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-9">9</span>
                <el-input v-model="odds2.h9" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-10">10</span>
                <el-input v-model="odds2.h10" size="small" />
              </div>
            </td>
          </tr>
          <tr v-if="odds3 != null">
            <th rowspan="2">季军</th>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-1">1</span>
                <el-input v-model="odds3.h1" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-2">2</span>
                <el-input v-model="odds3.h2" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-3">3</span>
                <el-input v-model="odds3.h3" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-4">4</span>
                <el-input v-model="odds3.h4" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-5">5</span>
                <el-input v-model="odds3.h5" size="small" />
              </div>
            </td>
          </tr>
          <tr v-if="odds3 != null">
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-6">6</span>
                <el-input v-model="odds3.h6" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-7">7</span>
                <el-input v-model="odds3.h7" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-8">8</span>
                <el-input v-model="odds3.h8" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-9">9</span>
                <el-input v-model="odds3.h9" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-10">10</span>
                <el-input v-model="odds3.h10" size="small" />
              </div>
            </td>
          </tr>
          <tr v-if="odds4 != null">
            <th rowspan="2">第四名</th>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-1">1</span>
                <el-input v-model="odds4.h1" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-2">2</span>
                <el-input v-model="odds4.h2" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-3">3</span>
                <el-input v-model="odds4.h3" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-4">4</span>
                <el-input v-model="odds4.h4" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-5">5</span>
                <el-input v-model="odds4.h5" size="small" />
              </div>
            </td>
          </tr>
          <tr v-if="odds4 != null">
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-6">6</span>
                <el-input v-model="odds4.h6" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-7">7</span>
                <el-input v-model="odds4.h7" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-8">8</span>
                <el-input v-model="odds4.h8" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-9">9</span>
                <el-input v-model="odds4.h9" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-10">10</span>
                <el-input v-model="odds4.h10" size="small" />
              </div>
            </td>
          </tr>
          <tr v-if="odds5 != null">
            <th rowspan="2">第五名</th>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-1">1</span>
                <el-input v-model="odds5.h1" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-2">2</span>
                <el-input v-model="odds5.h2" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-3">3</span>
                <el-input v-model="odds5.h3" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-4">4</span>
                <el-input v-model="odds5.h4" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-5">5</span>
                <el-input v-model="odds5.h5" size="small" />
              </div>
            </td>
          </tr>
          <tr v-if="odds5 != null">
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-6">6</span>
                <el-input v-model="odds5.h6" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-7">7</span>
                <el-input v-model="odds5.h7" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-8">8</span>
                <el-input v-model="odds5.h8" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-9">9</span>
                <el-input v-model="odds5.h9" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-10">10</span>
                <el-input v-model="odds5.h10" size="small" />
              </div>
            </td>
          </tr>
          <tr v-if="odds6 != null">
            <th rowspan="2">第六名</th>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-1">1</span>
                <el-input v-model="odds6.h1" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-2">2</span>
                <el-input v-model="odds6.h2" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-3">3</span>
                <el-input v-model="odds6.h3" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-4">4</span>
                <el-input v-model="odds6.h4" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-5">5</span>
                <el-input v-model="odds6.h5" size="small" />
              </div>
            </td>
          </tr>
          <tr v-if="odds6 != null">
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-6">6</span>
                <el-input v-model="odds6.h6" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-7">7</span>
                <el-input v-model="odds6.h7" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-8">8</span>
                <el-input v-model="odds6.h8" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-9">9</span>
                <el-input v-model="odds6.h9" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-10">10</span>
                <el-input v-model="odds6.h10" size="small" />
              </div>
            </td>
          </tr>
          <tr v-if="odds7 != null">
            <th rowspan="2">第七名</th>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-1">1</span>
                <el-input v-model="odds7.h1" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-2">2</span>
                <el-input v-model="odds7.h2" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-3">3</span>
                <el-input v-model="odds7.h3" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-4">4</span>
                <el-input v-model="odds7.h4" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-5">5</span>
                <el-input v-model="odds7.h5" size="small" />
              </div>
            </td>
          </tr>
          <tr v-if="odds7 != null">
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-6">6</span>
                <el-input v-model="odds7.h6" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-7">7</span>
                <el-input v-model="odds7.h7" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-8">8</span>
                <el-input v-model="odds7.h8" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-9">9</span>
                <el-input v-model="odds7.h9" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-10">10</span>
                <el-input v-model="odds7.h10" size="small" />
              </div>
            </td>
          </tr>
          <tr v-if="odds8 != null">
            <th rowspan="2">第八名</th>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-1">1</span>
                <el-input v-model="odds8.h1" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-2">2</span>
                <el-input v-model="odds8.h2" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-3">3</span>
                <el-input v-model="odds8.h3" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-4">4</span>
                <el-input v-model="odds8.h4" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-5">5</span>
                <el-input v-model="odds8.h5" size="small" />
              </div>
            </td>
          </tr>
          <tr v-if="odds8 != null">
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-6">6</span>
                <el-input v-model="odds8.h6" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-7">7</span>
                <el-input v-model="odds8.h7" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-8">8</span>
                <el-input v-model="odds8.h8" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-9">9</span>
                <el-input v-model="odds8.h9" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-10">10</span>
                <el-input v-model="odds8.h10" size="small" />
              </div>
            </td>
          </tr>
          <tr v-if="odds9 != null">
            <th rowspan="2">第九名</th>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-1">1</span>
                <el-input v-model="odds9.h1" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-2">2</span>
                <el-input v-model="odds9.h2" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-3">3</span>
                <el-input v-model="odds9.h3" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-4">4</span>
                <el-input v-model="odds9.h4" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-5">5</span>
                <el-input v-model="odds9.h5" size="small" />
              </div>
            </td>
          </tr>
          <tr v-if="odds9 != null">
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-6">6</span>
                <el-input v-model="odds9.h6" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-7">7</span>
                <el-input v-model="odds9.h7" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-8">8</span>
                <el-input v-model="odds9.h8" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-9">9</span>
                <el-input v-model="odds9.h9" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-10">10</span>
                <el-input v-model="odds9.h10" size="small" />
              </div>
            </td>
          </tr>
          <tr v-if="odds10 != null">
            <th rowspan="2">第十名</th>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-1">1</span>
                <el-input v-model="odds10.h1" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-2">2</span>
                <el-input v-model="odds10.h2" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-3">3</span>
                <el-input v-model="odds10.h3" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-4">4</span>
                <el-input v-model="odds10.h4" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-5">5</span>
                <el-input v-model="odds10.h5" size="small" />
              </div>
            </td>
          </tr>
          <tr v-if="odds10 != null">
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-6">6</span>
                <el-input v-model="odds10.h6" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-7">7</span>
                <el-input v-model="odds10.h7" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-8">8</span>
                <el-input v-model="odds10.h8" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-9">9</span>
                <el-input v-model="odds10.h9" size="small" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px">
                <span class="ball ball-num-10">10</span>
                <el-input v-model="odds10.h10" size="small" />
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
const lottery_type = ref("幸运飞艇");
const sub_type = ref("定位");
const odds1 = ref(null);
const odds2 = ref(null);
const odds3 = ref(null);
const odds4 = ref(null);
const odds5 = ref(null);
const odds6 = ref(null);
const odds7 = ref(null);
const odds8 = ref(null);
const odds9 = ref(null);
const odds10 = ref(null);
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
  await dispatchSaveOdds(odds4.value);
  await dispatchSaveOdds(odds5.value);
  await dispatchSaveOdds(odds6.value);
  await dispatchSaveOdds(odds7.value);
  await dispatchSaveOdds(odds8.value);
  await dispatchSaveOdds(odds9.value);
  await dispatchSaveOdds(odds10.value);
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
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_9"
  }
  await dispatchGetOdds(formData);
  odds9.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_10"
  }
  await dispatchGetOdds(formData);
  odds10.value = gdsfOddsStore().getOddsItem;
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

.ball-num-1 {
  background: #d9c100 !important;
}

.ball-num-2 {
  background: #0089ff !important;
}

.ball-num-3 {
  background: #4e4e4e !important;
}

.ball-num-4 {
  background: #ff7000 !important;
}

.ball-num-5 {
  background: #39d0cb !important;
}

.ball-num-6 {
  background: #4b00ff !important;
}

.ball-num-7 {
  background: #b6b2b3 !important;
}

.ball-num-8 {
  background: #fb0102 !important;
}

.ball-num-9 {
  background: #710000 !important;
}

.ball-num-10 {
  background: #2ebf00 !important;
}

span.ball {
  display: inline-block;
  width: 20px;
  height: 20px;
  padding: 2px;
  line-height: 20px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  text-shadow: 1px 1px 0px black;
  color: white;
}</style>
