<script lang="ts" setup>
import { ref, defineProps } from 'vue'
const combination = [
  '万',
  '仟',
  '佰',
  '拾',
  '个',
  '万仟',
  '万佰',
  '万拾',
  '万个',
  '仟佰',
  '仟拾',
  '仟个',
  '佰拾',
  '佰个',
  '拾个',
  '前三',
  '中三',
  '后三',
]
const OddValue = ref('1.95')
</script>
<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="TwoSide-table">
        <thead>
          <tr>
            <th>组合</th>
            <th>单</th>
            <th>双</th>
            <th>大</th>
            <th>小</th>
            <th>质</th>
            <th>合</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in 18" :key="n">
            <template v-for="m in 7" :key="m">
              <template v-if="m == 1">
                <td>{{ combination[n - 1] }}</td>
              </template>
              <template v-else>
                <td>
                  <div style="display: flex; column-gap: 10px;">
                    <div>
                      <el-input
                        v-model="OddValue"
                        size="small"
                        controls-position="center"
                      />
                    </div>
                  </div>
                </td>
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
