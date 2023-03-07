<template>
  <div style="padding: 0.75rem;">
    <el-form>
      <h1>存入帳戶</h1>
      <table class="deposit-table">
        <tr>
          <th>存入帳號</th>
          <td>
            <el-form-item style="margin-bottom: 0;" label="會員">
              <el-input></el-input>
            </el-form-item>
          </td>
        </tr>
        <tr>
          <th>方式</th>
          <td>
            <el-radio-group v-model="way">
              <el-radio :label="1">存入</el-radio>
              <el-radio :label="2">提出</el-radio>
              <el-radio :label="3">赠送</el-radio>
            </el-radio-group>
          </td>
        </tr>
        <tr>
          <th>金額</th>
          <td>
            <el-input></el-input>
          </td>
        </tr>
        <tr>
          <th>备注</th>
          <td>
            <el-row>
              <el-col :span="6">
                <el-input></el-input>
              </el-col>
              <el-button link type="danger">银行汇款</el-button>
              <el-button link type="danger">微信</el-button>
              <el-button link type="danger">支付宝</el-button>
              <el-button link type="danger">彩金</el-button>
              <el-button link type="danger">返水</el-button>
              <el-button link type="danger">扣款</el-button>
              <el-button link type="danger">误差</el-button>
              <el-button link type="danger">工行</el-button>
              <el-button link type="danger">建行</el-button>
              <el-button link type="danger">农行</el-button>
            </el-row>
          </td>
        </tr>
        <tr>
          <th></th>
          <td>
            <el-row justify="center">
              <el-button>確定</el-button>
              <el-button>重設</el-button>
            </el-row>
          </td>
        </tr>
      </table>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const way = ref(1)
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;

.deposit-table {
  width: 100%;
  border: $table-border;
  margin-bottom: 5px;
  border-collapse: collapse;
  tr {
    height: 20px;
    th {
      width: 15%;
      text-align: right;
      padding: 0 10px;
      background-color: $table-th-bgcolor;
      border: $table-border;
    }
    td {
      border: $table-border;
      padding: 5px;
      min-width: 35%;
      max-width: 85%;
    }
  }
}
</style>
