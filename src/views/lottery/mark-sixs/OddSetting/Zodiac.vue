<template>
  <el-row style="justify-content: space-between; margin-bottom: 10px;">
    <h6 style="margin-bottom: 0;">{{ class2 }}</h6>
    <div class="flex">
      <el-button size="small" @click="getRateClass2('二肖连中')" :type="[class2 == '二肖连中' ? 'primary' : '']">
        二肖连中
      </el-button>
      <el-button size="small" @click="getRateClass2('三肖连中')" :type="[class2 == '三肖连中' ? 'primary' : '']">
        三肖连中
      </el-button>
      <el-button size="small" @click="getRateClass2('四肖连中')" :type="[class2 == '四肖连中' ? 'primary' : '']">
        四肖连中
      </el-button>
      <el-button size="small" @click="getRateClass2('五肖连中')" :type="[class2 == '五肖连中' ? 'primary' : '']">
        五肖连中
      </el-button>
      <el-button size="small" @click="getRateClass2('二肖连不中')" :type="[class2 == '二肖连不中' ? 'primary' : '']">
        二肖连不中
      </el-button>
      <el-button size="small" @click="getRateClass2('三肖连不中')" :type="[class2 == '三肖连不中' ? 'primary' : '']">
        三肖连不中
      </el-button>
      <el-button size="small" @click="getRateClass2('四肖连不中')" :type="[class2 == '四肖连不中' ? 'primary' : '']">
        四肖连不中
      </el-button>
    </div>
  </el-row>
  <el-row style="margin-bottom: 10px;">
    <table>
      <thead>
        <tr>
          <th colspan="2">类型</th>
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
import { oddsSettingStore } from "@/pinia/modules/mark_six/odds_setting.js";
import { storeToRefs } from "pinia";

const { dispatchSpecialRate } = oddsSettingStore();
const { dispatchMainRate } = oddsSettingStore();

const plusValue = ref(0.1);
const class2 = ref("二肖连中");
const class1 = ref("生肖连");

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

const getRateClass2 = async (value) => {
  class2.value = value;
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchSpecialRate({ class1: class1.value, class2: value });
  loading.close();
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
  await dispatchSpecialRate({ class1: class1.value, class2: class2.value });
  loading.close();
})

const data = ref([
  { type: 1, odds: 3.15, currentOdds: 3.15, betAmount: 0 },
  { type: 2, odds: 3.15, currentOdds: 3.15, betAmount: 0 },
  { type: 3, odds: 3.15, currentOdds: 3.15, betAmount: 0 },
  { type: 4, odds: 3.15, currentOdds: 3.15, betAmount: 0 },
  { type: 5, odds: 3.15, currentOdds: 3.15, betAmount: 0 },
  { type: 6, odds: 3.15, currentOdds: 3.15, betAmount: 0 },
  { type: 7, odds: 3.15, currentOdds: 3.15, betAmount: 0 },
  { type: 8, odds: 3.15, currentOdds: 3.15, betAmount: 0 },
  { type: 9, odds: 3.15, currentOdds: 3.15, betAmount: 0 },
  { type: 0, odds: 3.15, currentOdds: 3.15, betAmount: 0 },
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
