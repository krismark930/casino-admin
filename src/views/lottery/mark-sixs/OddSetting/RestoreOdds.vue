<template>
  <el-row style="margin-bottom: 10px;">
    <table>
      <thead>
        <tr>
          <th>还原赔率</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <el-button size="small">
              还原默认赔率
            </el-button>
          </td>
        </tr>
      </tbody>
    </table>
  </el-row>
  <el-row style="justify-content: flex-end;">
    提示：请小心还原,一但还原本操作将无法恢复.
  </el-row>
</template>
<script lang="ts" setup></script>
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
  }
}
</style>
