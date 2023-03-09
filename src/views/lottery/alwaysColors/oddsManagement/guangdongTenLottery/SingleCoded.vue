<script lang="ts" setup>
import { ref, defineProps } from 'vue'
const OddValue = ref('1.95')
const chNumber = ['一', '二', '三', '四', '五', '六', '七', '八']
</script>
<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <template v-for="l in 8" :key="l">
        <table class="TwoSide-table">
          <thead>
            <tr>
              <th :colspan="5">第{{ chNumber[l - 1] }}球</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="n in 5" :key="n">
              <template v-for="m in 4" :key="m">
                <td>
                  <div style="display:flex;">
                    <el-badge
                      :value="n + (m - 1) * 5"
                      style="margin:5px 5px 0 0"
                    ></el-badge>
                    <el-input placeholder="19.20" v-model="OddValue"></el-input>
                  </div>
                </td>
              </template>
            </tr>
            <tr>
              <th>大</th>
              <th>单</th>
              <th>和单</th>
              <th>尾大</th>
            </tr>
            <tr>
              <td>1.95</td>
              <td>1.95</td>
              <td>1.95</td>
              <td>1.95</td>
            </tr>
            <tr>
              <th>小</th>
              <th>双</th>
              <th>和双</th>
              <th>尾小</th>
            </tr>
            <tr>
              <td>1.95</td>
              <td>1.95</td>
              <td>1.95</td>
              <td>1.95</td>
            </tr>
          </tbody>
        </table>
      </template>
    </el-row>
    <div style="padding-top:20px; float:right;">
      <el-button type="info">保存</el-button>
    </div>
  </el-scrollbar>
</template>
<script lang="ts" setup></script>
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
    text-align: center;
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
