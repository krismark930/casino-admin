<script lang="ts" setup>
import { ref, defineProps } from 'vue'
const chNumber = ['一', '二', '三', '四', '五', '六', '七', '八']
const OddValue = ref('3.77')
const season = ['春', '夏', '秋', '冬']
const fiveElement = ['金', '木', '水', '火', '土']
</script>
<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <template v-for="l in 8" :key="l">
        <table class="TwoSide-table">
          <thead>
            <tr>
              <th :colspan="2">第{{ chNumber[l - 1] }}球</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="l in 5" :key="l">
              <tr>
                <td>
                  <template v-if="l != 5">
                    <span class="num-group">{{ season[l - 1] }}</span>
                    <div style="display:flex;justify-content:center;">
                      <span class="num">{{ (l - 1) * 5 + 1 }}</span>
                      <span class="num">{{ (l - 1) * 5 + 2 }}</span>
                      <span class="num">{{ (l - 1) * 5 + 3 }}</span>
                      <span class="num">{{ (l - 1) * 5 + 4 }}</span>
                      <span class="num">{{ (l - 1) * 5 + 5 }}</span>
                      <input type="text" value="3.77" />
                    </div>
                  </template>
                </td>
                <td>
                  <span class="num-group">{{ fiveElement[l - 1] }}</span>
                  <div style="display:flex; justify-content:center;">
                    <template v-if="l == 1">
                      <template v-for="m in 4" :key="m">
                        <span class="num">{{ m * 5 }}</span>
                      </template>
                    </template>
                    <template v-else>
                      <template v-for="m in 4" :key="m">
                        <span class="num">{{ (m - 1) * 5 + l - 1 }}</span>
                      </template>
                    </template>
                    <input type="text" value="4.70" />
                  </div>
                </td>
              </tr>
            </template>
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
.num-group {
  border: 1px solid #333333;
  padding: 5px;
  color: white;
  background: #333333;
  display: block;
  font-size: 10px;
  margin-bottom: 2px;
}
.num {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-weight: bold;
  background-repeat: no-repeat;
}
</style>
