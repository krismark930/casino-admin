<template>
  <el-row>
    <table>
      <thead>
        <tr>
          <th>项目</th>
          <th>B盘</th>
          <th>C盘</th>
          <th>D盘</th>
        </tr>
      </thead>
      <tbody v-if="oddDiffItem != null">
        <tr>
          <th>特码</th>
          <td>
            <div style="display: flex; column-gap: 10px">
              <el-form-item label="码">
                <el-input v-model="oddDiffItem.btm" />
              </el-form-item>
              <el-form-item label="双面">
                <el-input v-model="oddDiffItem.btmdx" />
              </el-form-item>
            </div>
          </td>
          <td>
            <div style="display: flex; column-gap: 10px">
              <el-form-item label="码">
                <el-input v-model="oddDiffItem.ctm" />
              </el-form-item>
              <el-form-item label="双面">
                <el-input v-model="oddDiffItem.ctmdx" />
              </el-form-item>
            </div>
          </td>
          <td>
            <div style="display: flex; column-gap: 10px">
              <el-form-item label="码">
                <el-input v-model="oddDiffItem.dtm" />
              </el-form-item>
              <el-form-item label="双面">
                <el-input v-model="oddDiffItem.dtmdx" />
              </el-form-item>
            </div>
          </td>
        </tr>
        <tr>
          <th>正特</th>
          <td>
            <div style="display: flex; column-gap: 10px">
              <el-form-item label="码">
                <el-input v-model="oddDiffItem.bzt" />
              </el-form-item>
              <el-form-item label="双面">
                <el-input v-model="oddDiffItem.bztdx" />
              </el-form-item>
            </div>
          </td>
          <td>
            <div style="display: flex; column-gap: 10px">
              <el-form-item label="码">
                <el-input v-model="oddDiffItem.czt" />
              </el-form-item>
              <el-form-item label="双面">
                <el-input v-model="oddDiffItem.cztdx" />
              </el-form-item>
            </div>
          </td>
          <td>
            <div style="display: flex; column-gap: 10px">
              <el-form-item label="码">
                <el-input v-model="oddDiffItem.dzt" />
              </el-form-item>
              <el-form-item label="双面">
                <el-input v-model="oddDiffItem.dztdx" />
              </el-form-item>
            </div>
          </td>
        </tr>
        <tr>
          <th>正码</th>
          <td>
            <div style="display: flex; column-gap: 10px">
              <el-form-item label="码">
                <el-input v-model="oddDiffItem.bzm" />
              </el-form-item>
              <el-form-item label="双面">
                <el-input v-model="oddDiffItem.bzmdx" />
              </el-form-item>
            </div>
          </td>
          <td>
            <div style="display: flex; column-gap: 10px">
              <el-form-item label="码">
                <el-input v-model="oddDiffItem.czm" />
              </el-form-item>
              <el-form-item label="双面">
                <el-input v-model="oddDiffItem.czmdx" />
              </el-form-item>
            </div>
          </td>
          <td>
            <div style="display: flex; column-gap: 10px">
              <el-form-item label="码">
                <el-input v-model="oddDiffItem.dzm" />
              </el-form-item>
              <el-form-item label="双面">
                <el-input v-model="oddDiffItem.dzmdx" />
              </el-form-item>
            </div>
          </td>
        </tr>
        <tr>
          <th>五行</th>
          <td>
            <el-input v-model="oddDiffItem.bzm6" />
          </td>
          <td>
            <el-input v-model="oddDiffItem.czm6" />
          </td>
          <td>
            <el-input v-model="oddDiffItem.dzm6" />
          </td>
        </tr>
        <tr>
          <th>半波</th>
          <td>
            <el-input v-model="oddDiffItem.bbb" />
          </td>
          <td>
            <el-input v-model="oddDiffItem.cbb" />
          </td>
          <td>
            <el-input v-model="oddDiffItem.dbb" />
          </td>
        </tr>
        <tr>
          <th>特肖</th>
          <td>
            <el-input v-model="oddDiffItem.bsx" />
          </td>
          <td>
            <el-input v-model="oddDiffItem.csx" />
          </td>
          <td>
            <el-input v-model="oddDiffItem.dsx" />
          </td>
        </tr>
        <tr>
          <th>六肖</th>
          <td>
            <el-input v-model="oddDiffItem.bsx6" />
          </td>
          <td>
            <el-input v-model="oddDiffItem.csx6" />
          </td>
          <td>
            <el-input v-model="oddDiffItem.dsx6" />
          </td>
        </tr>
        <tr>
          <th>一肖</th>
          <td>
            <el-input v-model="oddDiffItem.bsxp" />
          </td>
          <td>
            <el-input v-model="oddDiffItem.csxp" />
          </td>
          <td>
            <el-input v-model="oddDiffItem.dsxp" />
          </td>
        </tr>
        <tr>
          <th>半半波</th>
          <td>
            <el-input v-model="oddDiffItem.bth" />
          </td>
          <td>
            <el-input v-model="oddDiffItem.cth" />
          </td>
          <td>
            <el-input v-model="oddDiffItem.dth" />
          </td>
        </tr>
        <tr>
          <th>全不中</th>
          <td>
            <el-input v-model="oddDiffItem.bzx" />
          </td>
          <td>
            <el-input v-model="oddDiffItem.czx" />
          </td>
          <td>
            <el-input v-model="oddDiffItem.dzx" />
          </td>
        </tr>
        <tr>
          <th>生肖连</th>
          <td>
            <el-input v-model="oddDiffItem.blx" />
          </td>
          <td>
            <el-input v-model="oddDiffItem.clx" />
          </td>
          <td>
            <el-input v-model="oddDiffItem.dlx" />
          </td>
        </tr>
      </tbody>
    </table>
    <el-col>
      <div style="display: flex; justify-content: center; padding-top: 10px">
        <el-button type="success" @click="updateOddDiffSetting">确认修改</el-button>
        <!-- <el-button type="warning">刷新</el-button> -->
      </div>
    </el-col>
  </el-row>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { ElLoading } from "element-plus";
import { systemMaintanceStore } from "@/pinia/modules/macao_six_mark/system_maintance.js";
import { storeToRefs } from "pinia";
const { dispatchOddDiffSetting } = systemMaintanceStore();
const { dispatchUpdateOddDiffSetting } = systemMaintanceStore();
const oddDiffItem = computed(() => {
  const { getOddDiffSettingItem } = storeToRefs(systemMaintanceStore());
  return getOddDiffSettingItem.value;
});
const updateOddDiffSetting = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchUpdateOddDiffSetting(oddDiffItem.value);
  loading.close();
};
onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  await dispatchOddDiffSetting();
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
