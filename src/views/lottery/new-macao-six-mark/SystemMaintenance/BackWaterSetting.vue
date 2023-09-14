<template>
  <el-row>
    <table>
      <thead>
        <tr>
          <th>类型</th>
          <th>佣金%A</th>
          <th>佣金%B</th>
          <th>佣金%C</th>
          <th>佣金%D</th>
          <th>单注限额</th>
          <th>单项(号)限额</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, i) in waterSettingList" :key="i">
          <tr>
            <th>
              {{ item.ds }}
            </th>
            <td>
              <el-input v-model="item.yg" />
            </td>
            <td>
              <el-input v-model="item.ygb" />
            </td>
            <td>
              <el-input v-model="item.ygc" />
            </td>
            <td>
              <el-input v-model="item.ygd" />
            </td>
            <td>
              <el-input v-model="item.xx" />
            </td>
            <td>
              <el-input v-model="item.xxx" />
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <el-col>
      <div style="display: flex; justify-content: center; padding-top: 10px">
        <el-button type="success" @click="updateWaterSetting">确认修改</el-button>
      </div>
    </el-col>
  </el-row>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { ElLoading } from "element-plus";
import { systemMaintanceStore } from "@/pinia/modules/new_macao_six_mark/system_maintance.js";
import { storeToRefs } from "pinia";
const { dispatchWaterSetting } = systemMaintanceStore();
const { dispatchUpdateWaterSetting } = systemMaintanceStore();
const waterSettingList = computed(() => {
  const { getWaterSettingList } = storeToRefs(systemMaintanceStore());
  return getWaterSettingList.value;
});
const updateWaterSetting = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchUpdateWaterSetting({
    data: JSON.stringify(waterSettingList.value),
  });
  loading.close();
};
onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchWaterSetting();
  loading.close();
});
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-bg-color: #fdf4ca;
table {
  border: $table-border;
  border-collapse: collapse;
  width: 100%;
  tr {
    height: 30px;
    th:first-child {
      width: 30%;
    }
  }
  th {
    background-color: $table-bg-color;
  }
  th,
  td {
    border: $table-border;
  }
}

.el-form-item {
  margin-bottom: 0;
}
</style>
