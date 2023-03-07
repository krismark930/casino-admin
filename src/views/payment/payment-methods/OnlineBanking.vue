<template>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="paymentmethod-table">
        <thead>
          <tr>
            <th>状态</th>
            <th>排序</th>
            <th>返回地址</th>
            <th>商户号</th>
            <th>终端号</th>
            <th>商户密匙</th>
            <th>类型</th>
            <th>VIP</th>
            <th>支持WAP</th>
            <th>提醒</th>
            <th>最低</th>
            <th>最高</th>
            <th>固定金额</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>0</td>
            <td>http://www.payr9888.top/app/member/gtpay</td>
            <td>13649</td>
            <td>友道</td>
            <td>c30a23fd4a6dd7d0afc09a555cc8220e</td>
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
            <td></td>
            <td>
              <div style="display: flex;">
                <el-button type="primary" size="small">修改</el-button>
                <el-button type="success" size="small">启用</el-button>
                <el-button type="danger" size="small">停用</el-button>
                <el-button type="warning" size="small">删除</el-button>
              </div>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>0</td>
            <td>/app/member/xyupay</td>
            <td>202107728</td>
            <td>享裕</td>
            <td>LJeBTrSIwWKjDcEtYuGRqMQxnldkVNoF</td>
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
              1
            </td>
            <td>
              7789
            </td>
            <td></td>
            <td>
              <div style="display: flex;">
                <el-button type="primary" size="small">修改</el-button>
                <el-button type="success" size="small">启用</el-button>
                <el-button type="danger" size="small">停用</el-button>
                <el-button type="warning" size="small">删除</el-button>
              </div>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>0</td>
            <td>/app/member/beidpay</td>
            <td>10466</td>
            <td>贝多</td>
            <td>020d1dfdd00db228f558c70ef01639e0</td>
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
              2
            </td>
            <td>
              1000000
            </td>
            <td></td>
            <td>
              <div style="display: flex;">
                <el-button type="primary" size="small">修改</el-button>
                <el-button type="success" size="small">启用</el-button>
                <el-button type="danger" size="small">停用</el-button>
                <el-button type="warning" size="small">删除</el-button>
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
