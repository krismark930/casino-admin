<template>
  <el-card>
    <el-radio-group
      v-model="activeType"
      style="margin-bottom: 15px;"
      size="small"
    >
      <el-radio-button label="新增" />
      <el-radio-button label="网银" />
      <el-radio-button label="微信" />
      <el-radio-button label="支付宝" />
      <el-radio-button label="快捷支付" />
      <el-radio-button label="QQ钱包" />
      <el-radio-button label="百度钱包" />
      <el-radio-button label="京东钱包" />
      <el-radio-button label="银联扫码" />
      <el-radio-button label="云闪付" />
      <el-radio-button label="虚拟货币" />
    </el-radio-group>
    <div v-if="activeType == '新增'">
      <AddMethod />
    </div>
    <div v-if="activeType == '网银'">
      <OnlineBanking />
    </div>
    <div v-if="activeType == '微信'">
      <WeChat />
    </div>
    <div v-if="activeType == '支付宝'">
      <Alipay />
    </div>
    <div v-if="activeType == '快捷支付'">
      <QuickPayment />
    </div>
    <div v-if="activeType == 'QQ钱包'">
      <QQWallet />
    </div>
    <div v-if="activeType == '百度钱包'">
      <BaiduWallet />
    </div>
    <div v-if="activeType == '京东钱包'">
      <JDWallet />
    </div>
    <div v-if="activeType == '银联扫码'">
      <UniPayScancode />
    </div>
    <div v-if="activeType == '云闪付'">
      <CloudQuickPass />
    </div>
    <div v-if="activeType == '虚拟货币'">
      <VirtualCurrency />
    </div>
    <div v-if="activeType == '支付方式'">
      <h1>支付方式</h1>
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
              <tr v-for="n in 14" :key="n">
                <template v-if="n == 1">
                  <td>启用</td>
                </template>
                <template v-else>
                  <td></td>
                </template>
                <td>0</td>
                <td>/app/member/kkpay</td>
                <td>KK_AGENT_246001</td>
                <td>USDT</td>
                <td>hy290f9fm9di1q0uqqv8rkdkkxvr19nh6bb</td>
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
                  <el-select placeholder="是">
                    <el-option label="是" value="1" />
                    <el-option label="否" value="2" />
                  </el-select>
                </td>
                <td>
                  <el-select placeholder="响铃">
                    <el-option label="响铃" value="1" />
                    <el-option label="无声" value="2" />
                  </el-select>
                </td>
                <td>1</td>
                <td>1000</td>
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
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'

import AddMethod from './AddMethod.vue'
import OnlineBanking from './OnlineBanking.vue'
import WeChat from './WeChat.vue'
import Alipay from './Alipay.vue'
import QuickPayment from './QuickPayment.vue'
import QQWallet from './QQWallet.vue'
import BaiduWallet from './BaiduWallet.vue'
import JDWallet from './JDWallet.vue'
import UniPayScancode from './UniPayScancode.vue'
import CloudQuickPass from './CloudQuickPass.vue'
import VirtualCurrency from './VirtualCurrency.vue'

const activeType = ref('支付方式')
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
