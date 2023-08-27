<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
        <table class="TwoSide-table" v-if="odds1 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">正码一</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="1"
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
                      value="2"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h2"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
                      value="3"
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
                      value="4"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h4"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="5"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h5"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
                      value="6"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h6"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="7"
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
                      value="8"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h8"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
                      value="9"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h9"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
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
                      value="11"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds1.h11"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
              <th>大</th>
              <th>小</th>
              <th>单</th>
              <th>双</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds1.h12"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds1.h13"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds1.h14"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds1.h15"></el-input>
              </td>
            </tr>
            <tr>
              <th>和单</th>
              <th>和双</th>
              <th>尾大</th>
              <th>尾小</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds1.h16"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds1.h17"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds1.h18"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds1.h19"></el-input>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds2 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">正码二</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="1"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h1"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="2"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h2"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
                      value="3"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h3"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="4"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h4"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="5"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h5"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
                      value="6"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h6"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="7"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h7"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="8"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h8"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
                      value="9"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h9"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="10"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds2.h10"></el-input>
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
                    <el-input v-model="odds2.h11"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
              <th>大</th>
              <th>小</th>
              <th>单</th>
              <th>双</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds2.h12"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds2.h13"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds2.h14"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds2.h15"></el-input>
              </td>
            </tr>
            <tr>
              <th>和单</th>
              <th>和双</th>
              <th>尾大</th>
              <th>尾小</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds2.h16"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds2.h17"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds2.h18"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds2.h19"></el-input>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds3 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">正码三</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="1"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h1"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="2"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h2"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
                      value="3"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h3"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="4"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h4"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="5"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h5"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
                      value="6"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h6"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="7"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h7"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="8"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h8"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
                      value="9"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h9"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="10"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds3.h10"></el-input>
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
                    <el-input v-model="odds3.h11"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
              <th>大</th>
              <th>小</th>
              <th>单</th>
              <th>双</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds3.h12"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds3.h13"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds3.h14"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds3.h15"></el-input>
              </td>
            </tr>
            <tr>
              <th>和单</th>
              <th>和双</th>
              <th>尾大</th>
              <th>尾小</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds3.h16"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds3.h17"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds3.h18"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds3.h19"></el-input>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds4 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">正码四</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="1"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h1"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="2"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h2"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
                      value="3"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h3"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="4"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h4"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="5"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h5"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
                      value="6"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h6"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="7"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h7"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="8"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h8"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
                      value="9"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h9"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="10"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds4.h10"></el-input>
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
                    <el-input v-model="odds4.h11"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
              <th>大</th>
              <th>小</th>
              <th>单</th>
              <th>双</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds4.h12"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds4.h13"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds4.h14"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds4.h15"></el-input>
              </td>
            </tr>
            <tr>
              <th>和单</th>
              <th>和双</th>
              <th>尾大</th>
              <th>尾小</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds4.h16"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds4.h17"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds4.h18"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds4.h19"></el-input>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="TwoSide-table" v-if="odds5 != null">
          <thead>
            <tr style="color: white;">
              <th :colspan="5">正码五</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="1"
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
                      value="2"
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
                      value="3"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h3"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="4"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h4"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="primary"
                      value="5"
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
                      value="6"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h6"></el-input>
                  </div>
                </td>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      value="7"
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
                      value="8"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h8"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
                <td>
                  <div style="display:flex;">
                    <el-badge
                      type="success"
                      value="9"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h9"></el-input>
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
                      value="11"
                      style="margin:5px 5px 0 0"
                    >
                    </el-badge>
                    <el-input v-model="odds5.h11"></el-input>
                  </div>
                </td>
            </tr>
            <tr>
              <th>大</th>
              <th>小</th>
              <th>单</th>
              <th>双</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds5.h12"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds5.h13"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds5.h14"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds5.h15"></el-input>
              </td>
            </tr>
            <tr>
              <th>和单</th>
              <th>和双</th>
              <th>尾大</th>
              <th>尾小</th>
            </tr>
            <tr>
              <td>                
                  <el-input v-model="odds5.h16"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds5.h17"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds5.h18"></el-input>
              </td>
              <td>                
                  <el-input v-model="odds5.h19"></el-input>
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
const sub_type = ref("正码和特别号");
const odds1 = ref(null);
const odds2 = ref(null);
const odds3 = ref(null);
const odds4 = ref(null);
const odds5 = ref(null);
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
  };
  await dispatchGetOdds(formData);
  odds1.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_2"
  };
  await dispatchGetOdds(formData);
  odds2.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_3"
  };
  await dispatchGetOdds(formData);
  odds3.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_4"
  };
  await dispatchGetOdds(formData);
  odds4.value = gdsfOddsStore().getOddsItem;
  formData = {
    lottery_type: lottery_type.value,
    sub_type: sub_type.value,
    ball_type: "ball_5"
  };
  await dispatchGetOdds(formData);
  odds5.value = gdsfOddsStore().getOddsItem;
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
</style>
