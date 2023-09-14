<template>
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
          <template v-if="!item.childs">
            <tr>
              <td colspan="2">{{ item.class2 }}</td>
              <td>
                <div style="display: flex; column-gap: 10px;">
                  <div>
                    <el-input-number v-model="item.rate" :step="1" :min="0" size="small" controls-position="right" />
                  </div>
                  <div><el-checkbox size="small" v-model="item.checked" /></div>
                </div>
              </td>
              <td>{{ item.rate }}</td>
              <td>{{ item.gold }}</td>
            </tr>
          </template>
          <template v-else>
            <template v-for="(child, j) in item.childs" :key="j">
              <template v-if="j == 0">
                <tr>
                  <td rowspan="2">{{ item.class2 }}</td>
                  <td>{{ child.class3 }}</td>
                  <td>
                    <div style="display: flex; column-gap: 10px;">
                      <div>
                        <el-input-number v-model="child.rate" :step="1" :min="0" size="small" controls-position="right" />
                      </div>
                      <div><el-checkbox size="small" v-model="child.checked" /></div>
                    </div>
                  </td>
                  <td>
                    {{ child.rate }}
                  </td>
                  <td rowspan="2">{{ item.gold }}</td>
                </tr>
              </template>
              <template v-else>
                <tr>
                  <td>{{ child.class3 }}</td>
                  <td>
                    <div style="display: flex; column-gap: 10px;">
                      <div>
                        <el-input-number v-model="child.rate" :step="1" :min="0" size="small" controls-position="right" />
                      </div>
                      <div><el-checkbox size="small" v-model="child.checked" /></div>
                    </div>
                  </td>
                  <td>
                    {{ child.rate }}
                  </td>
                </tr>
              </template>
            </template>
          </template>
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
import { ref, reactive, computed, onMounted } from 'vue'
import { ElLoading } from 'element-plus'
import { oddsSettingStore } from "@/pinia/modules/new_macao_six_mark/odds_setting.js";
import { storeToRefs } from "pinia";

const { dispatchConsecutiveCodeRate } = oddsSettingStore();
const { dispatchMainRate } = oddsSettingStore();

const plusValue = ref(1);
const class1 = ref("连码");

const submitMainRate = async () => {
  let data = [];
  mainData.value.map(item => {
    if (!item.childs) {
      data = [...data, item];
    } else {
      item.childs.map(subItem => {
        data = [...data, subItem];
      })
    }
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
    if (!item.childs) {
      item.rate += plusValue.value;
    } else {
      item.childs.map(subItem => {
        subItem.rate += plusValue.value;
      })
    }
  })
}

const decrementRate = () => {
  mainData.value.map(item => {
    if (!item.childs) {
      item.rate -= plusValue.value;
    } else {
      item.childs.map(subItem => {
        subItem.rate -= plusValue.value;
      })
    }
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
  await dispatchConsecutiveCodeRate({ class1: class1.value });
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
    text-align: center;
  }
}
</style>
