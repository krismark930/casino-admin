<template>
  <el-row style="margin-bottom: 10px;">
    <table>
      <thead>
        <tr>
          <th colspan="3">类型</th>
          <th>赔率</th>
          <th>当前赔率</th>
          <th>下注金额</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, i) in mainData" :key="i">
          <tr>
            <td>{{ item.class2 }}</td>
            <td>{{ item.class3 }}</td>
            <td>
              <div v-if="item.class3 == '金'">
                <img src="@/assets/number/num12.gif" />
                <img src="@/assets/number/num13.gif" />
                <img src="@/assets/number/num20.gif" />
                <img src="@/assets/number/num21.gif" />
                <img src="@/assets/number/num28.gif" />
                <img src="@/assets/number/num29.gif" />
                <img src="@/assets/number/num42.gif" />
                <img src="@/assets/number/num43.gif" />
              </div>
              <div v-if="item.class3 == '木'">
                <img src="@/assets/number/num2.gif" />
                <img src="@/assets/number/num3.gif" />
                <img src="@/assets/number/num10.gif" />
                <img src="@/assets/number/num11.gif" />
                <img src="@/assets/number/num24.gif" />
                <img src="@/assets/number/num25.gif" />
                <img src="@/assets/number/num32.gif" />
                <img src="@/assets/number/num33.gif" />
                <img src="@/assets/number/num40.gif" />
                <img src="@/assets/number/num41.gif" />
              </div>
              <div v-if="item.class3 == '水'">
                <img src="@/assets/number/num1.gif" />
                <img src="@/assets/number/num8.gif" />
                <img src="@/assets/number/num9.gif" />
                <img src="@/assets/number/num16.gif" />
                <img src="@/assets/number/num17.gif" />
                <img src="@/assets/number/num30.gif" />
                <img src="@/assets/number/num31.gif" />
                <img src="@/assets/number/num38.gif" />
                <img src="@/assets/number/num39.gif" />
                <img src="@/assets/number/num46.gif" />
                <img src="@/assets/number/num47.gif" />
              </div>
              <div v-if="item.class3 == '火'">
                <img src="@/assets/number/num4.gif" />
                <img src="@/assets/number/num5.gif" />
                <img src="@/assets/number/num18.gif" />
                <img src="@/assets/number/num19.gif" />
                <img src="@/assets/number/num26.gif" />
                <img src="@/assets/number/num27.gif" />
                <img src="@/assets/number/num34.gif" />
                <img src="@/assets/number/num35.gif" />
                <img src="@/assets/number/num48.gif" />
                <img src="@/assets/number/num49.gif" />
              </div>
              <div v-if="item.class3 == '土'">
                <img src="@/assets/number/num6.gif" />
                <img src="@/assets/number/num7.gif" />
                <img src="@/assets/number/num14.gif" />
                <img src="@/assets/number/num15.gif" />
                <img src="@/assets/number/num22.gif" />
                <img src="@/assets/number/num23.gif" />
                <img src="@/assets/number/num36.gif" />
                <img src="@/assets/number/num37.gif" />
                <img src="@/assets/number/num44.gif" />
                <img src="@/assets/number/num45.gif" />
              </div>
            </td>
            <td>
              <div style="display: flex; column-gap: 10px; justify-content: center;">
                <div>
                  <el-input-number v-model="item.rate" :step="0.1" :min="0" size="small" controls-position="right" />
                </div>
                <div><el-checkbox size="small" v-model="item.checked" /></div>
              </div>
            </td>
            <td>{{ item.rate }}</td>
            <td>{{ item.gold }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </el-row>
  <el-row>
    <el-button size="small" @click="incrementRate">
      赔率增加
    </el-button>
    <el-button size="small" @click="decrementRate">
      赔率减少
    </el-button>
    <el-button size="small" @click="submitMainRate">
      提交
    </el-button>
    <el-button size="small">
      重置
    </el-button>
  </el-row>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import { ElLoading } from 'element-plus'
import { oddsSettingStore } from "@/pinia/modules/new_macao_six_mark/odds_setting.js";
import { storeToRefs } from "pinia";

const { dispatchHalfWaveRate } = oddsSettingStore();
const { dispatchMainRate } = oddsSettingStore();

const plusValue = ref(0.1);
const class1 = ref("五行");

const submitMainRate = async () => {
  console.log(data);
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchMainRate({ data: JSON.stringify(mainData.value) });
  loading.close();
}

const incrementRate = () => {
  mainData.value.map(item => {
    item.rate = (Number(item.rate) + plusValue.value).toFixed(2);
  })
}

const decrementRate = () => {
  mainData.value.map(item => {
    item.rate = (Number(item.rate) - plusValue.value).toFixed(2);;
  })
}

const mainData = computed(() => {
  const { getMainData } = storeToRefs(oddsSettingStore());
  return getMainData.value;
})

onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchHalfWaveRate({ class1: class1.value });
  loading.close();
})

const data = ref([
  {
    type: '金',
    balls: [12, 13, 20, 21, 28, 29, 42, 43],
    odds: 4.7,
    currentOdds: 4.7,
    betAmount: 0,
  },
  {
    type: '木',
    balls: [2, 3, 10, 11, 24, 25, 32, 33, 40, 41],
    odds: 4.3,
    currentOdds: 4.3,
    betAmount: 0,
  },
  {
    type: '水',
    balls: [1, 8, 9, 16, 17, 30, 31, 38, 39, 46, 47],
    odds: 4.3,
    currentOdds: 4.3,
    betAmount: 0,
  },
  {
    type: '火',
    balls: [4, 5, 18, 19, 26, 27, 34, 35, 48, 49],
    odds: 4.3,
    currentOdds: 4.3,
    betAmount: 0,
  },
  {
    type: '土',
    balls: [6, 7, 14, 15, 22, 23, 36, 37, 44, 45],
    odds: 4.3,
    currentOdds: 4.3,
    betAmount: 0,
  },
])
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;

table {
  border: $table-border;
  border-collapse: collapse;
  width: 100%;

  th[colspan='4'] {
    background-color: #fe773d;
  }

  th {
    background-color: #fdf4ca;
  }

  th,
  td {
    border: $table-border;
    text-align: center;
  }
}
</style>
