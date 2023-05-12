<template>
  <el-row>
    <table>
      <thead>
        <tr>
          <th>类型</th>
          <th>数值</th>
          <th>每次下调赔率的单位</th>
          <th>最低赔率</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, i) in autoPrecipitationList" :key="i">
          <tr>
            <th>
              {{ item.drop_sort }}
            </th>
            <td>
              <el-input v-model="item.drop_value" />
            </td>
            <td>
              <el-input v-model="item.drop_unit" />
            </td>
            <td>
              <el-input v-model="item.low_drop" />
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <el-col>
      <div style="display: flex; justify-content: center; padding-top: 10px">
        <el-button type="success" @click="updateAutoPrecipitation">确认修改</el-button>
        <!-- <el-button type="warning">刷新</el-button> -->
      </div>
    </el-col>
  </el-row>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { ElLoading } from "element-plus";
import { systemMaintanceStore } from "@/pinia/modules/mark_six/system_maintance.js";
import { storeToRefs } from "pinia";
const { dispatchAutoPrecipitation } = systemMaintanceStore();
const { dispatchUpdateAutoPrecipitation } = systemMaintanceStore();
const autoPrecipitationList = computed(() => {
  const { getAutoPrecipitationList } = storeToRefs(systemMaintanceStore());
  return getAutoPrecipitationList.value;
});
const updateAutoPrecipitation = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchUpdateAutoPrecipitation({
    data: JSON.stringify(autoPrecipitationList.value),
  });
  loading.close();
};
onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchAutoPrecipitation();
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
    text-align: center;
  }
}

.el-form-item {
  margin-bottom: 0;
}
</style>
