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
      <tbody>
        <tr>
          <th>特码</th>
          <td>
            <div style="display: flex; column-gap: 10px;">
              <el-form-item label="码">
                <el-input value="0.5" />
              </el-form-item>
              <el-form-item label="双面">
                <el-input value="0.02" />
              </el-form-item>
            </div>
          </td>
          <td>
            <div style="display: flex; column-gap: 10px;">
              <el-form-item label="码">
                <el-input value="0" />
              </el-form-item>
              <el-form-item label="双面">
                <el-input value="0" />
              </el-form-item>
            </div>
          </td>
          <td>
            <div style="display: flex; column-gap: 10px;">
              <el-form-item label="码">
                <el-input value="0" />
              </el-form-item>
              <el-form-item label="双面">
                <el-input value="0" />
              </el-form-item>
            </div>
          </td>
        </tr>
        <tr>
          <th>正特</th>
          <td>
            <div style="display: flex; column-gap: 10px;">
              <el-form-item label="码">
                <el-input value="0.5" />
              </el-form-item>
              <el-form-item label="双面">
                <el-input value="0.02" />
              </el-form-item>
            </div>
          </td>
          <td>
            <div style="display: flex; column-gap: 10px;">
              <el-form-item label="码">
                <el-input value="0" />
              </el-form-item>
              <el-form-item label="双面">
                <el-input value="0" />
              </el-form-item>
            </div>
          </td>
          <td>
            <div style="display: flex; column-gap: 10px;">
              <el-form-item label="码">
                <el-input value="0" />
              </el-form-item>
              <el-form-item label="双面">
                <el-input value="0" />
              </el-form-item>
            </div>
          </td>
        </tr>
        <tr>
          <th>正码</th>
          <td>
            <div style="display: flex; column-gap: 10px;">
              <el-form-item label="码">
                <el-input value="0.03" />
              </el-form-item>
              <el-form-item label="双面">
                <el-input value="0.02" />
              </el-form-item>
            </div>
          </td>
          <td>
            <div style="display: flex; column-gap: 10px;">
              <el-form-item label="码">
                <el-input value="0" />
              </el-form-item>
              <el-form-item label="双面">
                <el-input value="0" />
              </el-form-item>
            </div>
          </td>
          <td>
            <div style="display: flex; column-gap: 10px;">
              <el-form-item label="码">
                <el-input value="0" />
              </el-form-item>
              <el-form-item label="双面">
                <el-input value="0" />
              </el-form-item>
            </div>
          </td>
        </tr>
        <tr>
          <th>五行</th>
          <td>
            <el-input value="0.05" />
          </td>
          <td>
            <el-input value="0" />
          </td>
          <td>
            <el-input value="0" />
          </td>
        </tr>
        <tr>
          <th>特码</th>
          <td>
            <el-input value="0.02" />
          </td>
          <td>
            <el-input value="0" />
          </td>
          <td>
            <el-input value="0" />
          </td>
        </tr>
        <tr>
          <th>半波</th>
          <td>
            <el-input value="0.02" />
          </td>
          <td>
            <el-input value="0" />
          </td>
          <td>
            <el-input value="0" />
          </td>
        </tr>
        <tr>
          <th>特肖</th>
          <td>
            <el-input value="0.02" />
          </td>
          <td>
            <el-input value="0" />
          </td>
          <td>
            <el-input value="0" />
          </td>
        </tr>
        <tr>
          <th>六肖</th>
          <td>
            <el-input value="0.02" />
          </td>
          <td>
            <el-input value="0" />
          </td>
          <td>
            <el-input value="0" />
          </td>
        </tr>
        <tr>
          <th>一肖</th>
          <td>
            <el-input value="0.05" />
          </td>
          <td>
            <el-input value="0" />
          </td>
          <td>
            <el-input value="0" />
          </td>
        </tr>
        <tr>
          <th>半半波</th>
          <td>
            <el-input value="0.05" />
          </td>
          <td>
            <el-input value="0" />
          </td>
          <td>
            <el-input value="0" />
          </td>
        </tr>
        <tr>
          <th>全不中</th>
          <td>
            <el-input value="0.09" />
          </td>
          <td>
            <el-input value="0" />
          </td>
          <td>
            <el-input value="0" />
          </td>
        </tr>
        <tr>
          <th>生肖连</th>
          <td>
            <el-input value="0.3" />
          </td>
          <td>
            <el-input value="0" />
          </td>
          <td>
            <el-input value="0" />
          </td>
        </tr>
      </tbody>
    </table>
    <el-col>
      <div style="display:flex; justify-content: center; padding-top:10px;">
        <el-button type="success">确认修改</el-button>
        <el-button type="warning">刷新</el-button>
      </div>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup></script>
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
