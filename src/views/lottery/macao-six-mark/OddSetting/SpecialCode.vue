<template>
  <el-row style="display: flex; justify-content: space-between;">
    <h3>{{ class2 }}赔率设置</h3>
    <div class="flex">
      <el-button size="small">
        全部封号
      </el-button>
      <el-button size="small">
        全部开号
      </el-button>
      <el-button size="small" @click="getRateClass2('特A')" :type="[class2 == '特A' ? 'primary' : '']">
        <el-icon>
          <Plus />
        </el-icon>
        特A
      </el-button>
      <el-button size="small" @click="getRateClass2('特B')" :type="[class2 == '特B' ? 'primary' : '']">
        <el-icon>
          <Plus />
        </el-icon>
        特B
      </el-button>
    </div>
  </el-row>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="odds-setting-special-code">
        <thead>
          <tr>
            <template v-for="l in 5" :key="l">
              <th>号码</th>
              <th>赔率/封号</th>
              <th>赔率</th>
              <th>下注总额</th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in 10" :key="n" v-if="mainData.length > 0">
            <template v-for="m in 5" :key="m">
              <template v-if="n + (m - 1) * 10 < 50">
                <td v-if="mainData[n + (m - 1) * 10 - 1]?.class3 !== undefined">
                  <img :src="numberImageArray[mainData[n + (m - 1) * 10 - 1].class3 - 1]" />
                </td>
                <td v-if="mainData[n + (m - 1) * 10 - 1]?.rate !== undefined">
                  <div style="display: flex; column-gap: 10px;">
                    <div>
                      <el-input-number v-model="mainData[n + (m - 1) * 10 - 1].rate" size="small"
                        controls-position="right" :step="0.5" :min="0" />
                    </div>
                    <div><el-checkbox size="small" v-model="mainData[n + (m - 1) * 10 - 1].checked" /></div>
                  </div>
                </td>
                <td v-if="mainData[n + (m - 1) * 10 - 1]?.rate !== undefined">{{ mainData[n + (m - 1) * 10 - 1].rate }}
                </td>
                <td v-if="mainData[n + (m - 1) * 10 - 1]?.gold !== undefined">
                  <font color="red">{{ mainData[n + (m - 1) * 10 - 1].gold }}</font>
                </td>
              </template>
              <template v-else>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </template>
            </template>
          </tr>
          <tr v-for="(other, index) in assistantData" :key="index" v-if="assistantData.length > 0">
            <template v-for="(item, i) in other" :key="i">
              <template v-if="!item.buttons">
                <td>{{ item.class3 }}</td>
                <td>
                  <div style="display: flex; column-gap: 10px;">
                    <div>
                      <el-input-number v-model="item.rate" size="small" :step="0.01" :min="0" controls-position="right" />
                    </div>
                    <div><el-checkbox size="small" v-model="item.checked" /></div>
                  </div>
                </td>
                <td>{{ item.rate }}</td>
                <td>
                  <font color="red">{{ item.gold }}</font>
                </td>
              </template>
              <template v-else>
                <td colspan="4">
                  <el-button size="small" type="primary" @click="submitMainRate">
                    {{ item.buttons[0] }}
                  </el-button>
                  <el-button size="small">
                    {{ item.buttons[1] }}
                  </el-button>
                </td>
              </template>
            </template>
          </tr>
        </tbody>
      </table>
    </el-row>
  </el-scrollbar>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="options">
        <tr v-for="(option, index) in options" :key="index">
          <template v-for="(item, key) in option" :key="key">
            <template v-if="item != 'submitComponent' && item != ''">
              <td><el-checkbox :label="item.name" size="large" v-model="item.checked" /></td>
            </template>
            <template v-if="item == 'submitComponent'">
              <td colspan="4">
                <el-radio-group v-model="plusRadio">
                  <el-radio label="减" />
                  <el-radio label="加" />
                </el-radio-group>
                <el-input style="margin-bottom: 5px;" v-model="plusValue" />
                <el-button size="small" type="primary" @click="submitPlusRate">送出</el-button>
                <el-button size="small" type="primary" @click="resetChecked">取消</el-button>
              </td>
            </template>
            <template v-if="item == ''">
              <td></td>
            </template>
          </template>
        </tr>
      </table>
    </el-row>
  </el-scrollbar>
  <el-row>
    <el-form-item label="统一修改">
      <el-radio-group v-model="otherRadio">
        <el-radio label="1" size="large">单</el-radio>
        <el-radio label="2" size="large">双</el-radio>
        <el-radio label="3" size="large">大</el-radio>
        <el-radio label="4" size="large">小</el-radio>
        <el-radio label="5" size="large">红波</el-radio>
        <el-radio label="6" size="large">绿波</el-radio>
        <el-radio label="7" size="large">蓝波</el-radio>
        <el-radio label="0" size="large">全部</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-row>
  <el-row>
    <el-form-item label="赔率" style="margin-right: 10px;">
      <el-input v-model="otherRate" />
    </el-form-item>
    <el-button @click="submitOtherRate">统一修改</el-button>
  </el-row>
</template>
<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { ElLoading } from 'element-plus'
import { oddsSettingStore } from "@/pinia/modules/macao_six_mark/odds_setting.js";
import { storeToRefs } from "pinia";
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

const { dispatchSpecialCodeRate } = oddsSettingStore();
const { dispatchPlusRate } = oddsSettingStore();
const { dispatchOtherRate } = oddsSettingStore();
const { dispatchMainRate } = oddsSettingStore();
const { setMainData } = oddsSettingStore();

const otherRadiovalue = [
  "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49",
  "1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49",
  "2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48",
  "25,26,,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49",
  "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24",
  "1,2,7,8,12,13,18,19,23,24,29,30,34,35,40,45",
  "5,6,11,11,16,17,21,22,27,28,32,33,38,39,43,44,49",
  "3,4,9,10,14,15,20,25,26,31,36,37,41,42,47,48"
]

const options = ref([
  [
    {
      name: '鼠',
      checked: false,
      value: "4,16,28,40"
    },
    {
      name: '牛',
      checked: false,
      value: "3,15,27,39"
    },
    {
      name: '虎',
      checked: false,
      value: "2,14,26,38"
    },
    {
      name: '兔',
      checked: false,
      value: "1,13,25,37,49"
    },
    {
      name: '龙',
      checked: false,
      value: "12,24,36,48"
    },
    {
      name: '蛇',
      checked: false,
      value: "11,23,35,47"
    },
    {
      name: '马',
      checked: false,
      value: "10,22,34,46"
    },
    {
      name: '羊',
      checked: false,
      value: "9,21,33,45"
    },
    {
      name: '猴',
      checked: false,
      value: "8,20,32,44"
    },
    {
      name: '鸡',
      checked: false,
      value: "7,19,31,43"
    },
    {
      name: '狗',
      checked: false,
      value: "6,18,30,42"
    },
    {
      name: '猪',
      checked: false,
      value: "5,17,29,41"
    },
    '',
    '',
    '',
  ],
  [
    {
      name: '红单',
      checked: false,
      value: "1,7,13,19,23,29,35,45"
    },
    {
      name: '红双',
      checked: false,
      value: "2,8,12,18,24,30,34,40,46"
    },
    {
      name: '红大',
      checked: false,
      value: "29,30,34,35,40,45,46"
    },
    {
      name: '红小',
      checked: false,
      value: "1,2,7,8,12,13,18,19,23,24"
    },
    {
      name: '蓝单',
      checked: false,
      value: "3,9,15,25,31,37,41,47"
    },
    {
      name: '蓝双',
      checked: false,
      value: "4,10,14,20,26,36,42,48"
    },
    {
      name: '蓝大',
      checked: false,
      value: "25,26,31,36,37,41,42,47,48"
    },
    {
      name: '蓝小',
      checked: false,
      value: "3,4,9,10,14,15,20"
    },
    {
      name: '绿单',
      checked: false,
      value: "5,11,17,21,27,33,39,43,49"
    },
    {
      name: '绿双',
      checked: false,
      value: "6,16,22,28,32,38,44"
    },
    {
      name: '绿大',
      checked: false,
      value: "27,28,32,33,38,39,43,44,49"
    },
    {
      name: '绿小',
      checked: false,
      value: "5,6,11,16,17,21,22"
    },
    {
      name: '红波',
      checked: false,
      value: "1,2,7,8,12,13,18,19,23,24,29,30,34,35,40,45",
    },
    {
      name: '蓝波',
      checked: false,
      value: "3,4,9,10,14,15,20,25,26,31,36,37,41,42,47,48",
    },
    {
      name: '绿波',
      checked: false,
      value: "5,6,11,11,16,17,21,22,27,28,32,33,38,39,43,44,49",
    },
  ],
  [
    {
      name: '单号',
      checked: false,
      value: "1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49"
    },
    {
      name: '双号',
      checked: false,
      value: "2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48"
    },
    {
      name: '大号',
      checked: false,
      value: "25,26,,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49"
    },
    {
      name: '小号',
      checked: false,
      value: "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24"
    },
    {
      name: '合单',
      checked: false,
      value: "1,3,5,7,9,12,14,16,18,21,23,25,27,29,32,34,36,38,41,43,45,47,49"
    },
    {
      name: '合双',
      checked: false,
      value: "2,4,6,8,10,11,13,15,17,19,20,22,24,26,28,30,31,33,35,37,39,40,42,44,46,48"
    },
    '',
    {
      name: '0 头',
      checked: false,
      value: "1,2,3,4,5,6,7,8,9"
    },
    {
      name: '1 头',
      checked: false,
      value: "10,11,12,13,14,15,16,17,18,19"
    },
    {
      name: '2 头',
      checked: false,
      value: "20,21,22,23,24,25,26,27,28,29"
    },
    {
      name: '3 头',
      checked: false,
      value: "30,31,32,33,34,35,36,37,38,39"
    },
    {
      name: '4 头',
      checked: false,
      value: "40,41,42,43,44,45,46,47,48,49"
    },
    '',
    '',
    '',
  ],
  [
    {
      name: '0 尾',
      checked: false,
      value: "10,20,30,40"
    },
    {
      name: '1 尾',
      checked: false,
      value: "1,11,21,31,41"
    },
    {
      name: '2 尾',
      checked: false,
      value: "2,12,22,32,42"
    },
    {
      name: '3 尾',
      checked: false,
      value: "3,13,23,33,43"
    },
    {
      name: '4 尾',
      checked: false,
      value: "4,14,24,34,44"
    },
    {
      name: '5 尾',
      checked: false,
      value: "5,15,25,35,45"
    },
    {
      name: '6 尾',
      checked: false,
      value: "6,16,26,36,46"
    },
    {
      name: '7 尾',
      checked: false,
      value: "7,17,27,37,47"
    },
    {
      name: '8 尾',
      checked: false,
      value: "8,18,28,38,48"
    },
    {
      name: '9 尾',
      checked: false,
      value: "9,19,29,39,49"
    },
    '',
    'submitComponent',
  ],
])

const plusRadio = ref('减');
const plusValue = ref(0.5);
const otherRadio = ref('0')
const otherRate = ref("");
const class2 = ref("特A");
const class1 = ref("特码");

const resetChecked = () => {
  options.value.map(item => {
    item.map(subItem => {
      if (subItem.checked) {
        subItem.checked = false;
      }
    })
  })
}

const getRateClass2 = async (value) => {
  class2.value = value;
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchSpecialCodeRate({ class1: "特码", class2: value });
  loading.close();
}

const submitPlusRate = async () => {
  let class3 = "";
  let value = 0;
  options.value.map(item => {
    item.map(subItem => {
      if (subItem.checked) {
        class3 += subItem.value + ","
      }
    })
  })
  class3 = [...new Set(class3.split(","))].filter(item => item !== "").toString();
  if (plusRadio.value == "减") {
    value = -Number(plusValue.value);
  } else {
    value = Number(plusValue.value);
  }
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchPlusRate({ class1: "特码", class2: class2.value, class3: class3, value: value })
  await dispatchSpecialCodeRate({ class1: "特码", class2: class2.value });
  loading.close();
}

const submitOtherRate = async () => {
  let class3 = otherRadiovalue[Number(otherRadio.value)];

  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchOtherRate({ class1: "特码", class2: class2.value, class3: class3, rate: otherRate.value })
  await dispatchSpecialCodeRate({ class1: "特码", class2: class2.value });
  loading.close();
}

const submitMainRate = async () => {
  let data = [];
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  data = [...mainData.value];
  assistantData.value.map(item => {
    item.map(subItem => {
      if (!subItem.buttons) {
        data = [...data, subItem];
      }
    })
  })
  console.log(data);
  await dispatchMainRate({ data: JSON.stringify(data) });
  loading.close();
}

const mainData = computed(() => {
  const { getMainData } = storeToRefs(oddsSettingStore());
  console.log(getMainData.value);
  return getMainData.value;
})

const assistantData = computed(() => {
  const { getAssistantData } = storeToRefs(oddsSettingStore());
  return getAssistantData.value;
})

onMounted(async () => {
  setMainData([]);
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchSpecialCodeRate({ class1: "特码", class2: class2.value });
  loading.close();
})
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;

table.odds-setting-special-code {
  overflow-x: scroll;
  width: 100%;
  border: $table-border;
  margin-top: 15px;
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

table.options {
  margin-top: 15px;
  border: $table-border;
  border-collapse: collapse;

  td {
    border: $table-border;
    text-align: left;
    padding: 0 10px;
    background-color: $table-th-bgcolor;
  }
}
</style>
