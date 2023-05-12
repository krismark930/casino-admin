<template>
  <el-row :gutter="10">
    <el-col :span="8" v-for="(mainItem, index) in mainData" :key="index" style="margin-bottom: 10px;">
      <el-scrollbar>
        <el-row class="scrollbar-flex-content">
          <table>
            <thead>
              <tr>
                <th colspan="4" v-if="mainItem.length > 0">{{ mainItem[0].class2 }}</th>
              </tr>
              <tr>
                <th>号码</th>
                <th>赔率/封号</th>
                <th>赔率</th>
                <th>下注总额</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in mainItem" :key="index">
                <td align="center">{{ item.class3 }}</td>
                <td>
                  <div style="display: flex; column-gap: 10px;">
                    <div>
                      <el-input-number v-model="item.rate" :step="0.01" :min="0" size="small" controls-position="right" />
                    </div>
                    <div><el-checkbox size="small" v-model="item.checked" /></div>
                  </div>
                </td>
                <td align="center">{{ item.rate }}</td>
                <td align="center">{{ item.gold }}</td>
              </tr>
            </tbody>
          </table>
        </el-row>
      </el-scrollbar>
    </el-col>
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
<script lang="ts" setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { ElLoading } from 'element-plus'
import { oddsSettingStore } from "@/pinia/modules/mark_six/odds_setting.js";
import { storeToRefs } from "pinia";

const { dispatchPositive1_6Rate } = oddsSettingStore();
const { dispatchMainRate } = oddsSettingStore();

const plusValue = ref(0.01);
const class1 = ref("过关");

const submitMainRate = async () => {
  let data = [];
  mainData.value.map(item => {
    item.map(subItem => {
      data = [...data, subItem];
    })
  })
  console.log(data);
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  await dispatchMainRate({ data: JSON.stringify(data) });
  loading.close();
}

const incrementRate = () => {
  mainData.value.map(item => {
    item.map(subItem => {
      subItem.rate = (Number(subItem.rate) + plusValue.value).toFixed(2);
    })
  })
}

const decrementRate = () => {
  mainData.value.map(item => {
    item.map(subItem => {
      subItem.rate = (Number(subItem.rate) - plusValue.value).toFixed(2);
    })
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
  await dispatchPositive1_6Rate({ class1: class1.value });
  loading.close();
})
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
  }
}
</style>
