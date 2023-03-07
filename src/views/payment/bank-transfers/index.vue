<template>
  <div style="padding: 0.75rem;">
    <el-card>
      <el-row :gutter="20">
        <el-col :span="4">
          <el-button
            link
            type="primary"
            style="padding-top:7px"
            @click="handleAddBank"
          >
            新增银行账号
          </el-button>
        </el-col>
        <el-col :span="4">
          <el-switch
            v-model="allowRemittance"
            class="ml-2"
            width="150"
            inline-prompt
            active-text="允许提交汇款"
            inactive-text="允许提交汇款"
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          />
        </el-col>
        <el-col :span="6">
          <el-form-item label="汇款返利:">
            <el-input placeholder="1%" v-model="Rebate"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="USDT汇率:">
            <el-input placeholder="1%" v-model="USDTRate"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">提交</el-button>
        </el-col>
      </el-row>
      <el-dialog v-model="dialogVisible" title="新增银行账号">
        <el-scrollbar>
          <el-row class="scrollbar-flex-content">
            <table class="paymentmethod-table">
              <thead>
                <tr>
                  <th>银行名称</th>
                  <th>银行名称</th>
                  <th>银行账号</th>
                  <th>开户行</th>
                  <th>VIP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <el-select placeholder="否">
                      <el-option label="是" value="1" />
                      <el-option label="否" value="2" />
                    </el-select>
                  </td>
                </tr>
              </tbody>
            </table>
          </el-row>
        </el-scrollbar>
        <template #footer>
          <span class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">
              提交
            </el-button>
            <el-button @click="dialogVisible = false">取消</el-button>
          </span>
        </template>
      </el-dialog>
      <el-scrollbar>
        <el-row class="scrollbar-flex-content">
          <table class="paymentmethod-table">
            <thead>
              <tr>
                <th>状态</th>
                <th>排序</th>
                <th>银行名称</th>
                <th>开户人姓名</th>
                <th>银行账号</th>
                <th>开户行</th>
                <th>VIP专用</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>0</td>
                <td>汇款请联系在线客服索取最新银行账号</td>
                <td>汇款请联系在线客服索取最新银行账号</td>
                <td>汇款请联系在线客服索取最新银行账号</td>
                <td>汇款请联系在线客服索取最新银行账号</td>
                <td>
                  <el-select placeholder="否">
                    <el-option label="是" value="1" />
                    <el-option label="否" value="2" />
                  </el-select>
                </td>
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
                <td>招商银行</td>
                <td>刘小姐</td>
                <td>622222222222222</td>
                <td>北京</td>
                <td>
                  <el-select placeholder="否">
                    <el-option label="是" value="1" />
                    <el-option label="否" value="2" />
                  </el-select>
                </td>
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
                <td>中国农业</td>
                <td>中国农业银行</td>
                <td>64235512357422554</td>
                <td>中国农业</td>
                <td>
                  <el-select placeholder="否">
                    <el-option label="是" value="1" />
                    <el-option label="否" value="2" />
                  </el-select>
                </td>
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
                <td>11112</td>
                <td>111112</td>
                <td>11112</td>
                <td>11112</td>
                <td>
                  <el-select placeholder="否">
                    <el-option label="是" value="1" />
                    <el-option label="否" value="2" />
                  </el-select>
                </td>
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
                <td style="color:cyan">启用</td>
                <td>0</td>
                <td>兴业银行</td>
                <td>测试</td>
                <td>6222587952314565</td>
                <td>东西南站999</td>
                <td>
                  <el-select placeholder="是">
                    <el-option label="是" value="1" />
                    <el-option label="否" value="2" />
                  </el-select>
                </td>
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
                <td style="color:cyan">启用</td>
                <td>1</td>
                <td>中国工商银行</td>
                <td>李先生</td>
                <td>622222222222222</td>
                <td>中国工商银行上海分行浦东支行</td>
                <td>
                  <el-select placeholder="否">
                    <el-option label="是" value="1" />
                    <el-option label="否" value="2" />
                  </el-select>
                </td>
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
                <td style="color:cyan">启用</td>
                <td>2</td>
                <td>中国工商银行</td>
                <td>林先生</td>
                <td>6217222222222222</td>
                <td>中国工商银行上海分行浦东支行</td>
                <td>
                  <el-select placeholder="否">
                    <el-option label="是" value="1" />
                    <el-option label="否" value="2" />
                  </el-select>
                </td>
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
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const allowRemittance = ref(true)
const Rebate = ref('1%')
const USDTRate = ref('6.60%')
const dialogVisible = ref(false)

const handleAddBank = () => {
  dialogVisible.value = true
}
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
