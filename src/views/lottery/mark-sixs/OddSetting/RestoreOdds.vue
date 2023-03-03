<template>
  <el-row style="margin-bottom: 10px;">
    <table>
      <thead>
        <tr>
          <th>restore odds</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <el-button size="small">
              Restore Default Odds
            </el-button>
          </td>
        </tr>
      </tbody>
    </table>
  </el-row>
  <el-row style="justify-content: flex-end;">
    Tips: Please be careful to restore, once restored, the operation will not be
    restored.
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
