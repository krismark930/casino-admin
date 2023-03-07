<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="paymentmethod-table">
        <thead>
          <tr>
            <th>返回地址</th>
            <th>商户号</th>
            <th>终端号</th>
            <th>商户密匙</th>
            <th>类型</th>
            <th>VIP</th>
            <th>支持WAP</th>
            <th>铃声</th>
            <th>最低金額</th>
            <th>最高金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <el-select placeholder="网银">
                <el-option label="网银" value="1" />
                <el-option label="微信" value="2" />
                <el-option label="支付宝" value="3" />
                <el-option label="快捷支付" value="4" />
                <el-option label="QQ钱包" value="5" />
                <el-option label="百度钱包" value="6" />
                <el-option label="京东钱包" value="7" />
                <el-option label="银联钱包" value="8" />
                <el-option label="云闪付" value="9" />
                <el-option label="虚拟货币" value="10" />
              </el-select>
            </td>
            <td>
              <el-select placeholder="否">
                <el-option label="是" value="1" />
                <el-option label="否" value="2" />
              </el-select>
            </td>
            <td>
              <el-select placeholder="否">
                <el-option label="是" value="1" />
                <el-option label="否" value="2" />
              </el-select>
            </td>
            <td>
              <el-select placeholder="无声">
                <el-option label="响铃" value="1" />
                <el-option label="无声" value="2" />
              </el-select>
            </td>
            <td>
              100
            </td>
            <td>
              100000
            </td>
          </tr>
          <tr>
            <td colspan="10">
              <div style="display:flex;justify-content:center;">
                <el-button type="primary" size="small">提交</el-button>
                <el-button type="primary" size="small">取消</el-button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </el-row>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;
table.paymentmethod-table {
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
