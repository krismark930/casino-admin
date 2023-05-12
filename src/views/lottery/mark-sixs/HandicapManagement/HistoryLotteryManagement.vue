<template>
  <el-form>
    <el-row :gutter="10">
      <el-col :span="10">
        <el-form-item label="期数：">
          <el-input v-model="period" />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="searchPeriod"> 确定搜索 </el-button>
      </el-col>
      <el-col :span="8">
        <el-button @click="searchByStatus('')">
          <el-icon>
            <Plus />
          </el-icon>
          所有期数
        </el-button>
        <el-button @click="searchByStatus(1)">
          <el-icon>
            <Plus />
          </el-icon>
          显示
        </el-button>
        <el-button @click="searchByStatus(0)">
          <el-icon>
            <Plus />
          </el-icon>
          隐藏
        </el-button>
      </el-col>
    </el-row>
  </el-form>
  <div style="overflow-x: auto;">
    <table class="historical-lottery">
      <thead>
        <tr>
          <th colspan="2">六合彩</th>
          <td colspan="12"></td>
        </tr>
        <tr>
          <th rowspan="2" style="width: 10px;">
            <el-checkbox size="large" v-model="totalSelect" @change="selectItemAll" />
          </th>
          <th rowspan="2">期数</th>
          <th rowspan="2">开奖时间</th>
          <th colspan="7">开奖球号</th>
          <th rowspan="2">生肖</th>
          <th rowspan="2">是否开奖</th>
          <th rowspan="2">状态</th>
          <th rowspan="2">操作</th>
        </tr>
        <tr>
          <th>平1</th>
          <th>平2</th>
          <th>平3</th>
          <th>平4</th>
          <th>平5</th>
          <th>平6</th>
          <th>特码</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in kakitheList" :key="index">
          <td>
            <el-checkbox size="large" v-model="item.checked" :disabled="item.score === 1" />
          </td>
          <td>{{ item.nn }}</td>
          <td>{{ item.nd }}</td>
          <td>
            <img :src="numberImageArray[item.n1 - 1]" />
          </td>
          <td>
            <img :src="numberImageArray[item.n2 - 1]" />
          </td>
          <td>
            <img :src="numberImageArray[item.n3 - 1]" />
          </td>
          <td>
            <img :src="numberImageArray[item.n4 - 1]" />
          </td>
          <td>
            <img :src="numberImageArray[item.n5 - 1]" />
          </td>
          <td>
            <img :src="numberImageArray[item.n6 - 1]" />
          </td>
          <td>
            <img :src="numberImageArray[item.na - 1]" />
          </td>
          <td>{{ item.x1 }}{{ item.x2 }}{{ item.x3 }}{{ item.x4 }}{{ item.x5 }}{{ item.x6 }}+{{ item.sx }}</td>
          <td>已开奖</td>
          <td><el-checkbox size="large" v-model="item.lx" @change="updateStatus(item.id, item.lx)" /></td>
          <td>
            <div style="display: flex;">
              <el-button size="small" type="primary" :disabled="item.score === 1" @click="winKakithe(item.id, item.nn)">
                <el-icon>
                  <Setting />
                </el-icon>
                结算
              </el-button>
              <el-button size="small" type="success" :disabled="item.score === 1" @click="editKakithe(item)">
                <el-icon>
                  <Setting />
                </el-icon>
                修改
              </el-button>
              <el-button size="small" type="warning" :disabled="item.score === 0" @click="restoreKakithe(item.id)">
                <el-icon>
                  <Setting />
                </el-icon>
                恢复
              </el-button>
              <el-button size="small" type="danger" :disabled="item.score === 1" @click="delteKakithe(item.id)">
                <el-icon>
                  <CloseBold />
                </el-icon>
                删除
              </el-button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div style="display: flex; justify-content: space-between;">
    <div>
      <el-button type="danger" size="small">
        <el-icon>
          <CloseBold />
        </el-icon>
        删除选定期数
      </el-button>
      <el-button type="primary" size="small">
        <el-icon>
          <RefreshRight />
        </el-icon>
        刷新
      </el-button>
    </div>
  </div>
  <div style="display: flex; justify-content: center">
    <el-pagination background layout="prev, pager, next" :total="totalCount" :page-size="20"
      @current-change="onPageChange" v-model:current-page="page" />
  </div>
  <el-dialog v-model="editKakitheVisible" title="" width="80%" center>
    <table v-loading="loading" width="99%" border="1" cellpadding="2" cellspacing="2" bordercolor="#ECE9D8">
      <tr>
        <td width="11%" height="30" align="right" bordercolor="#CCCCCC">期数：</td>
        <td width="29%" bordercolor="#CCCCCC">
          <input type="text" class="input1" v-model="selectedItem.nn" size="8" />
        </td>
        <td width="15%" height="30" align="right" bordercolor="#CCCCCC">开奖时间：</td>
        <td width="45%" bordercolor="#CCCCCC">
          <input type="text" class="input1" v-model="selectedItem.nd" size="35" />
        </td>
      </tr>
      <tr>
        <td height="30" align="right" bordercolor="#CCCCCC">开奖球号：</td>
        <td height="30" colspan="3" bordercolor="#CCCCCC">
          <table border="1" cellpadding="3" cellspacing="1" bordercolor="f1f1f1">
            <tr class="tbtitle">
              <td width="50" height="25" align="center" class="STYLE2">平1</td>
              <td width="50" height="25" align="center" class="STYLE2">平2</td>
              <td width="50" height="25" align="center" class="STYLE2">平3</td>
              <td width="50" height="25" align="center" class="STYLE2">平4</td>
              <td width="50" height="25" align="center" class="STYLE2">平5</td>
              <td width="50" height="25" align="center" class="STYLE2">平6</td>
              <td width="50" height="25" align="center" class="STYLE2">特码</td>
              <td width="50" align="center" class="STYLE2">生肖</td>
            </tr>
            <tr>
              <td height="25" align="center">
                <input type="text" class="input1" v-model="selectedItem.n1" size="8" />
              </td>
              <td height="25" align="center">
                <input type="text" class="input1" v-model="selectedItem.n2" size="8" />
              </td>
              <td height="25" align="center">
                <input type="text" class="input1" v-model="selectedItem.n3" size="8" />
              </td>
              <td height="25" align="center">
                <input type="text" class="input1" v-model="selectedItem.n4" size="8" />
              </td>
              <td height="25" align="center">
                <input type="text" class="input1" v-model="selectedItem.n5" size="8" />
              </td>
              <td height="25" align="center">
                <input type="text" class="input1" v-model="selectedItem.n6" size="8" />
              </td>
              <td height="25" align="center">
                <input type="text" class="input1" v-model="selectedItem.na" size="8" />
              </td>
              <td height="25" align="center">
                <input type="text" class="input1" v-model="selectedItem.sx" size="8" />
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td height="30" bordercolor="#CCCCCC">&nbsp;</td>
        <td colspan="3" bordercolor="#CCCCCC"><br />
          <table width="100" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td height="6"></td>
            </tr>
          </table>
          <el-button type="primary" @click="updateSelectedItem">保存盘口</el-button>
          <br />
          <table width="100" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td height="10"></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </el-dialog>
  <el-dialog v-model="winKakitheVisible" title="" width="80%" center>
    <table width="99%" border="1" cellpadding="5" cellspacing="1" bordercolor="f1f1f1">
      <tr>
        <td bordercolor="cccccc" bgcolor="#FDF4CA">
          第{{ selectedPeriod }}期开奖结算
        </td>
      </tr>
      <tr>
        <td bordercolor="cccccc">
          <table width="90%" border="0" cellspacing="0" cellpadding="5" align="center" class="about">
            <tr>
              <td>
                <div v-if="winItem.zwin1 != 0">
                  特码结算成功：<font color=ff6600>{{ winItem.zwin1 }}注</font>
                </div>
                <div v-if="winItem.zwin2 != 0">
                  特码单双结算成功：<font color=ff6600>{{ winItem.zwin2 }}注</font>
                </div>
                <div v-if="winItem.zwin3 != 0">
                  特码大小结算成功：<font color=ff6600>{{ winItem.zwin3 }}注</font>
                </div>
                <div v-if="winItem.zwin4 != 0">
                  特码合单合双结算成功：<font color=ff6600>{{ winItem.zwin4 }}注</font>
                </div>
                <div v-if="winItem.zwin5 != 0">
                  家禽/野兽结算成功：<font color=ff6600>{{ winItem.zwin5 }}注</font>
                </div>
                <div v-if="winItem.zwin6 != 0">
                  尾大尾小结算成功：<font color=ff6600>{{ winItem.zwin6 }}注</font>
                </div>
                <div v-if="winItem.zwin7 != 0">
                  大小单双结算成功：<font color=ff6600>{{ winItem.zwin7 }}注</font>
                </div>
                <div v-if="winItem.zwin8 != 0">
                  特码单双结算成功：<font color=ff6600>{{ winItem.zwin8 }}注</font>
                </div>
                <div v-for="(item, index) in winItem.zwin9" :key="index">
                  <div v-if="item.count != 0">
                    {{ item.class2 }}结算成功：<font color=ff6600>{{ item.count }}注</font>
                  </div>
                </div>
                <div v-for="(item, index) in winItem.zwin10" :key="index">
                  <div v-if="item.count != 0">
                    {{ item.class2 }}单双结算成功：<font color=ff6600>{{ item.count }}注</font>
                  </div>
                </div>
                <div v-for="(item, index) in winItem.zwin11" :key="index">
                  <div v-if="item.count != 0">
                    {{ item.class2 }}大小结算成功：<font color=ff6600>{{ item.count }}注</font>
                  </div>
                </div>
                <div v-for="(item, index) in winItem.zwin12" :key="index">
                  <div v-if="item.count != 0">
                    {{ item.class2 }}合单合双结算成功：<font color=ff6600>{{ item.count }}注</font>
                  </div>
                </div>
                <div v-for="(item, index) in winItem.zwin13" :key="index">
                  <div v-if="item.count != 0">
                    {{ item.class2 }}合大合小结算成功：<font color=ff6600>{{ item.count }}注</font>
                  </div>
                </div>
                <div v-for="(item, index) in winItem.zwin14" :key="index">
                  <div v-if="item.count != 0">
                    {{ item.class2 }}波色结算成功：<font color=ff6600>{{ item.count }}注</font>
                  </div>
                </div>
                <div v-for="(item, index) in winItem.zwin15" :key="index">
                  <div v-if="item.count != 0">
                    {{ item.class2 }}单双结算成功：<font color=ff6600>{{ item.count }}注</font>
                  </div>
                </div>
                <div v-for="(item, index) in winItem.zwin16" :key="index">
                  <div v-if="item.count != 0">
                    {{ item.class2 }}大小结算成功：<font color=ff6600>{{ item.count }}注</font>
                  </div>
                </div>
                <div v-for="(item, index) in winItem.zwin17" :key="index">
                  <div v-if="item.count != 0">
                    {{ item.class2 }}合大合小结算成功：<font color=ff6600>{{ item.count }}注</font>
                  </div>
                </div>
                <div v-for="(item, index) in winItem.zwin18" :key="index">
                  <div v-if="item.count != 0">
                    {{ item.class2 }}合单合双结算成功：<font color=ff6600>{{ item.count }}注</font>
                  </div>
                </div>
                <div v-for="(item, index) in winItem.zwin19" :key="index">
                  <div v-if="item.count != 0">
                    {{ item.class2 }}尾大尾小结算成功：<font color=ff6600>{{ item.count }}注</font>
                  </div>
                </div>
                <div v-for="(item, index) in winItem.zwin20" :key="index">
                  <div v-if="item.count != 0">
                    {{ item.class2 }}波色结算成功：<font color=ff6600>{{ item.count }}注</font>
                  </div>
                </div>
                <div v-if="winItem.zwin21.count != 0">
                  {{ winItem.zwin21.class2 }}结算成功：<font color=ff6600>{{ winItem.zwin21.count }}注</font>
                </div>
                <div v-if="winItem.zwin22.count != 0">
                  {{ winItem.zwin22.class2 }}总单总双结算成功：<font color=ff6600>{{ winItem.zwin22.count }}注</font>
                </div>
                <div v-if="winItem.zwin23.count != 0">
                  {{ winItem.zwin23.class2 }}总大总小结算成功：<font color=ff6600>{{ winItem.zwin23.count }}注</font>
                </div>
                <div v-if="winItem.zwin24.count != 0">
                  连码{{ winItem.zwin24.class2 }}结算成功：<font color=ff6600>{{ winItem.zwin24.count }}注</font>
                </div>
                <div v-if="winItem.zwin25.count != 0">
                  连码{{ winItem.zwin25.class2 }}结算成功：<font color=ff6600>{{ winItem.zwin25.count }}注</font>
                </div>
                <div v-if="winItem.zwin26.count != 0">
                  连码{{ winItem.zwin26.class2 }}结算成功：<font color=ff6600>{{ winItem.zwin26.count }}注</font>
                </div>
                <div v-if="winItem.zwin27.count != 0">
                  连码{{ winItem.zwin23.zwin27 }}结算成功：<font color=ff6600>{{ winItem.zwin27.count }}注</font>
                </div>
                <div v-if="winItem.zwin28.count != 0">
                  连码{{ winItem.zwin28.class2 }}结算成功：<font color=ff6600>{{ winItem.zwin28.count }}注</font>
                </div>
                <div v-if="winItem.zwin29.count != 0">
                  连码{{ winItem.zwin29.class2 }}结算成功：<font color=ff6600>{{ winItem.zwin29.count }}注</font>
                </div>
                <div v-if="winItem.zwin30.count != 0">
                  过关结算成功：<font color=ff6600>{{ winItem.zwin30.count }}注</font>
                </div>
                <div v-if="winItem.zwin31.count != 0">
                  {{ winItem.zwin31.class2 }}结算成功：<font color=ff6600>{{ winItem.zwin31.count }}注</font>
                </div>
                <div v-if="winItem.zwin32.count != 0">
                  {{ winItem.zwin32.class2 }}结算成功：<font color=ff6600>{{ winItem.zwin32.count }}注</font>
                </div>
                <div v-if="winItem.zwin33 != 0">
                  特肖结算成功：<font color=ff6600>{{ winItem.zwin33 }}注</font>
                </div>
                <div v-if="winItem.zwin34 != 0">
                  合肖结算成功：<font color=ff6600>{{ winItem.zwin34 }}注</font>
                </div>
                <div v-if="winItem.zwin35 != 0">
                  一肖结算成功：<font color=ff6600>{{ winItem.zwin35 }}注</font>
                </div>
                <div v-if="winItem.zwin36 != 0">
                  正肖结算成功：<font color=ff6600>{{ winItem.zwin36 }}注</font>
                </div>
                <div v-if="winItem.zwin37 != 0">
                  特码头数结算成功：<font color=ff6600>{{ winItem.zwin37 }}注</font>
                </div>
                <div v-if="winItem.zwin38 != 0">
                  特码尾数结算成功：<font color=ff6600>{{ winItem.zwin38 }}注</font>
                </div>
                <div v-if="winItem.zwin39 != 0">
                  正特尾数结算成功：<font color=ff6600>{{ winItem.zwin39 }}注</font>
                </div>
                <div v-if="winItem.zwin40 != 0">
                  七色波结算成功：<font color=ff6600>{{ winItem.zwin40 }}注</font>
                </div>
                <div v-if="winItem.zwin41 != 0">
                  五行结算成功：<font color=ff6600>{{ winItem.zwin41 }}注</font>
                </div>
                <div v-if="winItem.zwin42 != 0">
                  全不中结算成功：<font color=ff6600>{{ winItem.zwin42 }}注</font>
                </div>
                <div v-if="winItem.zwin43 != 0">
                  生肖连结算成功：<font color=ff6600>{{ winItem.zwin43 }}注</font>
                </div>
                <div v-if="winItem.zwin44 != 0">
                  尾数连结算成功：<font color=ff6600>{{ winItem.zwin44 }}注</font>
                </div>
                <div v-if="winItem.zwin37 != 0">
                  特肖结算成功：<font color=ff6600>{{ winItem.zwin37 }}注</font>
                </div>
                <div v-if="winItem.zwin37 != 0">
                  特肖结算成功：<font color=ff6600>{{ winItem.zwin37 }}注</font>
                </div>
                <font color=ff0000>第{{ selectedPeriod }}期结算成功</font>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </el-dialog>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import { ElNotification } from 'element-plus';
import { ElLoading } from 'element-plus'
import { storeToRefs } from "pinia";
import { resultHistoryStore } from "@/pinia/modules/mark_six/result_history.js";

import numberImage1 from "@/assets/number/num1.gif";
import numberImage2 from "@/assets/number/num2.gif";
import numberImage3 from "@/assets/number/num3.gif";
import numberImage4 from "@/assets/number/num4.gif";
import numberImage5 from "@/assets/number/num5.gif";
import numberImage6 from "@/assets/number/num6.gif";
import numberImage7 from "@/assets/number/num7.gif";
import numberImage8 from "@/assets/number/num8.gif";
import numberImage9 from "@/assets/number/num9.gif";
import numberImage10 from "@/assets/number/num10.gif";
import numberImage11 from "@/assets/number/num11.gif";
import numberImage12 from "@/assets/number/num12.gif";
import numberImage13 from "@/assets/number/num13.gif";
import numberImage14 from "@/assets/number/num14.gif";
import numberImage15 from "@/assets/number/num15.gif";
import numberImage16 from "@/assets/number/num16.gif";
import numberImage17 from "@/assets/number/num17.gif";
import numberImage18 from "@/assets/number/num18.gif";
import numberImage19 from "@/assets/number/num19.gif";
import numberImage20 from "@/assets/number/num20.gif";
import numberImage21 from "@/assets/number/num21.gif";
import numberImage22 from "@/assets/number/num22.gif";
import numberImage23 from "@/assets/number/num23.gif";
import numberImage24 from "@/assets/number/num24.gif";
import numberImage25 from "@/assets/number/num25.gif";
import numberImage26 from "@/assets/number/num26.gif";
import numberImage27 from "@/assets/number/num27.gif";
import numberImage28 from "@/assets/number/num28.gif";
import numberImage29 from "@/assets/number/num29.gif";
import numberImage30 from "@/assets/number/num30.gif";
import numberImage31 from "@/assets/number/num31.gif";
import numberImage32 from "@/assets/number/num32.gif";
import numberImage33 from "@/assets/number/num33.gif";
import numberImage34 from "@/assets/number/num34.gif";
import numberImage35 from "@/assets/number/num35.gif";
import numberImage36 from "@/assets/number/num36.gif";
import numberImage37 from "@/assets/number/num37.gif";
import numberImage38 from "@/assets/number/num38.gif";
import numberImage39 from "@/assets/number/num39.gif";
import numberImage40 from "@/assets/number/num40.gif";
import numberImage41 from "@/assets/number/num41.gif";
import numberImage42 from "@/assets/number/num42.gif";
import numberImage43 from "@/assets/number/num43.gif";
import numberImage44 from "@/assets/number/num44.gif";
import numberImage45 from "@/assets/number/num45.gif";
import numberImage46 from "@/assets/number/num46.gif";
import numberImage47 from "@/assets/number/num47.gif";
import numberImage48 from "@/assets/number/num48.gif";
import numberImage49 from "@/assets/number/num49.gif";

const numberImageArray = [
  numberImage1,
  numberImage2,
  numberImage3,
  numberImage4,
  numberImage5,
  numberImage6,
  numberImage7,
  numberImage8,
  numberImage9,
  numberImage10,
  numberImage11,
  numberImage12,
  numberImage13,
  numberImage14,
  numberImage15,
  numberImage16,
  numberImage17,
  numberImage18,
  numberImage19,
  numberImage20,
  numberImage21,
  numberImage22,
  numberImage23,
  numberImage24,
  numberImage25,
  numberImage26,
  numberImage27,
  numberImage28,
  numberImage29,
  numberImage30,
  numberImage31,
  numberImage32,
  numberImage33,
  numberImage34,
  numberImage35,
  numberImage36,
  numberImage37,
  numberImage38,
  numberImage39,
  numberImage40,
  numberImage41,
  numberImage42,
  numberImage43,
  numberImage44,
  numberImage45,
  numberImage46,
  numberImage47,
  numberImage48,
  numberImage49,
]
const page = ref(1);
const totalSelect = ref(false);
const period = ref("");
const editKakitheVisible = ref(false);
const winKakitheVisible = ref(false);
const selectedPeriod = ref(0);
const loading = ref(false);
const selectedItem = ref({});
const { dispatchKakitheAll } = resultHistoryStore();
const { dispatchUpateKakitheStatus } = resultHistoryStore();
const { dispatchDeleteKakithe } = resultHistoryStore();
const { dispatchRestoreKakithe } = resultHistoryStore();
const { dispatchEditKakithe } = resultHistoryStore();
const { dispatchWinKakithe } = resultHistoryStore();
const onPageChange = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchKakitheAll({ page: page.value });
  loading.close();
  successResult();
}
const winItem = computed(() => {
  const { getWinItem } = storeToRefs(resultHistoryStore());
  return getWinItem.value;
})
const kakitheList = computed(() => {
  const { getKakitheList } = storeToRefs(resultHistoryStore());
  return getKakitheList.value;
})
const totalCount = computed(() => {
  const { getTotalCount } = storeToRefs(resultHistoryStore());
  return getTotalCount.value;
})
const success = computed(() => {
  const { getSuccess } = storeToRefs(resultHistoryStore());
  return getSuccess.value;
})
const winKakithe = async (id, period) => {
  selectedPeriod.value = period;
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchWinKakithe({ id });
  await dispatchKakitheAll({ page: page.value, period: period.value });
  successResult();
  loading.close();
  winKakitheVisible.value = true;
}
const editKakithe = async (item) => {
  editKakitheVisible.value = true;
  selectedItem.value = item;
}
const updateSelectedItem = async () => {
  if (selectedItem.value["nn"] == "") {
    ElNotification({
      title: '错误',
      message: '期数不能为空!',
      type: 'error',
    })
    return;
  }
  if (selectedItem.value["nd"] == "") {
    ElNotification({
      title: '错误',
      message: '开奖时间不能为了空!',
      type: 'error',
    })
    return;
  }
  loading.value = true;
  await dispatchEditKakithe(selectedItem.value);
  await dispatchKakitheAll({ page: page.value, period: period.value });
  successResult();
  loading.value = false;
  editKakitheVisible.value = false;
}
const restoreKakithe = async (id) => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchRestoreKakithe({ id });
  await dispatchKakitheAll({ page: page.value, period: period.value });
  loading.close();
  successResult();
}
const delteKakithe = async (id) => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchDeleteKakithe({ id });
  await dispatchKakitheAll({ page: page.value, period: period.value });
  loading.close();
  successResult();
}
const searchByStatus = async (status) => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchKakitheAll({ page: 1, period: period.value, status: status });
  loading.close();
  successResult();
}
const searchPeriod = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchKakitheAll({ page: 1, period: period.value });
  loading.close();
  successResult();
}
const updateStatus = async (id, checked) => {
  let status = 0;
  if (checked) {
    status = 1;
  }
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchUpateKakitheStatus({ id, status });
  await dispatchKakitheAll({ page: page.value, period: period.value });
  loading.close();
  successResult();
}
const successResult = () => {
  if (success.value) {
    ElNotification({
      title: '成功',
      message: '操作成功。',
      type: 'success',
    })
  } else {
    ElNotification({
      title: '错误',
      message: '操作失败。',
      type: 'error',
    })
  }
}
const selectItemAll = () => {
  kakitheList.value.map(item => {
    if (totalSelect.value) {
      if (item.score !== 1) {
        item["checked"] = true;
      }
    } else {
      if (item.score !== 1) {
        item["checked"] = false;
      }
    }
  })
}
onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchKakitheAll({ page: page.value });
  loading.close();
  successResult();
})
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;

.historical-lottery {
  width: 100%;
  border: $table-border;
  margin-bottom: 5px;
  border-collapse: collapse;

  tr {
    height: 30px;

    th {
      text-align: center;
      padding: 0 10px;
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

.tbtitle {
  background: #0077cc;
  color: #ffffff;
}
</style>
