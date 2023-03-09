<script lang="ts" setup>
import { ref, defineProps } from 'vue'
const OddValue = ref("1.95")
</script>
<template>
    <el-scrollbar>
        <el-row class="scrollbar-flex-content">
            <h3 style="padding-top:20px; color:slategrey;">总和</h3>
            <table class="TwoSide-table">
            <thead>
                <tr>
                  <th>大</th>
                  <th>单</th>
                  <th>尾大</th>
                  <th>龙</th>
                  <th>小</th>
                  <th>双</th>
                  <th>尾小</th>
                  <th>虎</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <template v-for="m in 8" :key="m">
                        <td>1.95</td>
                    </template>
                </tr>
            </tbody>
            </table>
        </el-row>
    </el-scrollbar>
    <el-scrollbar>
        <el-row class="scrollbar-flex-content">
            <h3 style="padding-top:20px; color:slategrey;">单码/双面</h3>
            <table class="TwoSide-table">
            <thead>
                <tr>
                  <th>号码</th>
                  <th>大</th>
                  <th>单</th>
                  <th>和单</th>
                  <th>尾大</th>
                  <th>小</th>
                  <th>双</th>
                  <th>和双</th>
                  <th>尾小</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="n in 8" :key="n">
                    <template v-for="m in 9" :key="m">
                        <template v-if="m == 1 ">
                            <td>第{{n}}球</td>
                        </template>
                        <template v-else>
                        <td>1.95</td>
                    </template>
                    </template>
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