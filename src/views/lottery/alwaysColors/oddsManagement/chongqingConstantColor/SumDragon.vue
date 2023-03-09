<script lang="ts" setup>
import { ref, defineProps } from 'vue'

const oddsValue = ref('1.95')
</script>
<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="TwoSide-table">
        <thead>
          <tr>
            <template v-for="l in 4" :key="l">
              <th>号码</th>
              <th>赔率</th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr>
            <template v-for="m in 4" :key="m">
              <td>总和双</td>
              <td>
                <div style="display: flex; column-gap: 10px;">
                  <div>
                    <el-input
                      v-model="oddsValue"
                      size="small"
                      controls-position="center"
                    />
                  </div>
                </div>
              </td>
            </template>
          </tr>
          <tr>
            <td>龙</td>
            <td>
              <div style="display: flex; column-gap: 10px;">
                <div>
                  <el-input
                    v-model="oddsValue"
                    size="small"
                    controls-position="center"
                  />
                </div>
              </div>
            </td>
            <td>虎</td>
            <td>
              <div style="display: flex; column-gap: 10px;">
                <div>
                  <el-input
                    v-model="oddsValue"
                    size="small"
                    controls-position="center"
                  />
                </div>
              </div>
            </td>
            <td>和</td>
            <td>
              <div style="display: flex; column-gap: 10px;">
                <div>
                  <el-input
                    v-model="oddsValue"
                    size="small"
                    controls-position="center"
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </el-row>
  </el-scrollbar>
  <div style="padding-top:20px; float:right;">
    <el-button type="info">保存</el-button>
  </div>
</template>
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
    th {
      text-align: center;
      word-break: keep-all;
      padding: 10px;
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
</style>
