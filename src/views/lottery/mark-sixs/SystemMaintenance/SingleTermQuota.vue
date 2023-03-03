<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="single-term-quota">
        <thead>
          <tr>
            <template v-for="l in 5" :key="l">
              <th>号码</th>
              <th>限额</th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in 10" :key="n">
            <template v-for="m in 5" :key="m">
              <template v-if="n + (m - 1) * 10 < 50">
                <td>{{ n + (m - 1) * 10 }}</td>
                <td>
                  <div style="display: flex; column-gap: 10px;">
                    <div>
                      <el-input v-model="setting.quota" />
                    </div>
                  </div>
                </td>
              </template>
              <template v-else>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </template>
            </template>
          </tr>
        </tbody>
      </table>
      <el-col>
        <div style="display:flex; justify-content: center; padding-top:10px;">
          <el-form-item label="统计修改" style="margin-right: 10px;">
            <el-input></el-input>
          </el-form-item>
          <el-button type="primary">轉送</el-button>
          <el-button type="success">确认修改</el-button>
          <el-button type="warning">刷新</el-button>
        </div>
      </el-col>
    </el-row>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const setting = reactive({
  quota: 100000,
})
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;
table.single-term-quota {
  overflow-x: scroll;
  width: 100%;
  border: $table-border;
  margin-top: 15px;
  border-collapse: collapse;
  tr {
    height: 30px;
    th {
      text-align: center;
      padding: 0 10px;
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

table.options {
  margin-top: 15px;
  border: $table-border;
  border-collapse: collapse;
  td {
    border: $table-border;
    text-align: left;
    padding: 0 10px;
    background-color: $table-th-bgcolor;
  }
}
</style>
