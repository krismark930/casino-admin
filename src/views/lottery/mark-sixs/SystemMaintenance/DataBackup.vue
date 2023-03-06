<template>
  <el-row style="margin-bottom: 10px;">
    <table>
      <thead>
        <tr>
          <th>数据备份</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div style="display:flex;justify-content:center;padding-top: 10px;">
              <el-form-item label="请选择与当前年份相应的生肖">
                <el-select
                  v-model="datenum"
                  placeholder="datenum"
                  style="width: 130px; padding-right:10px;"
                >
                  <el-option label="第20201003期" value="0" />
                  <el-option label="第20201003期" value="1" />
                  <el-option label="第20201003期" value="2" />
                  <el-option label="第20201003期" value="3" />
                  <el-option label="第20201003期" value="4" />
                  <el-option label="第20201003期" value="5" />
                  <el-option label="第20201003期" value="6" />
                  <el-option label="第20201003期" value="7" />
                  <el-option label="第20201003期" value="8" />
                  <el-option label="第20201003期" value="9" />
                  <el-option label="第20201003期" value="10" />
                  <el-option label="第20201003期" value="11" />
                </el-select>
              </el-form-item>
              <el-button type="primary">
                开始备份数据
              </el-button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </el-row>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const datenum = ref('猴')
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;

table {
  border: $table-border;
  border-collapse: collapse;
  width: 100%;
  tr {
    height: 40px;
  }
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
    align-content: center;
    justify-content: center;
  }
}
</style>
