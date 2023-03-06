<template>
  <el-row style="display: flex; justify-content: space-between;">
    <h4>正A 赔率设置</h4>
    <div class="flex">
      <el-button size="small">
        <el-icon><Plus /></el-icon>
        正A
      </el-button>
      <el-button size="small">
        <el-icon><Plus /></el-icon>
        正B
      </el-button>
    </div>
  </el-row>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="odds-setting-special-code">
        <thead>
          <tr>
            <template v-for="l in 5" :key="l">
              <th>号码</th>
              <th>赔率/封号</th>
              <th>赔率</th>
              <th>下注总额</th>
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
                      <el-input-number
                        v-model="setting.odds"
                        size="small"
                        controls-position="right"
                      />
                    </div>
                    <div><el-checkbox size="small" /></div>
                  </div>
                </td>
                <td>{{ setting.odds }}</td>
                <td>{{ setting.bet }}</td>
              </template>
              <template v-else>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </template>
            </template>
          </tr>
          <tr v-for="(other, index) in others" :key="index">
            <template v-for="(item, i) in other" :key="i">
              <template v-if="!item.buttons">
                <td>{{ item.number }}</td>
                <td>
                  <div style="display: flex; column-gap: 10px;">
                    <div>
                      <el-input-number
                        v-model="item.odds"
                        size="small"
                        controls-position="right"
                      />
                    </div>
                    <div><el-checkbox size="small" /></div>
                  </div>
                </td>
                <td>{{ item.odds }}</td>
                <td>{{ item.bet }}</td>
              </template>
              <template v-else>
                <td colspan="4">
                  <el-button
                    size="small"
                    v-for="(btn, key) in item.buttons"
                    :key="key"
                  >
                    {{ btn }}
                  </el-button>
                </td>
              </template>
            </template>
          </tr>
        </tbody>
      </table>
    </el-row>
  </el-scrollbar>
  <el-scrollbar>
    <el-row class="scrollbar-flex-content">
      <table class="options">
        <tr v-for="(option, index) in options" :key="index">
          <template v-for="(item, key) in option" :key="key">
            <template v-if="item != 'submitComponent' && item != ''">
              <td><el-checkbox :label="item" size="large" /></td>
            </template>
            <template v-if="item == 'submitComponent'">
              <td colspan="4">
                <el-radio-group v-model="reduce">
                  <el-radio label="减" />
                  <el-radio label="加" />
                </el-radio-group>
                <el-input
                  style="margin-bottom: 5px;"
                  placeholder="Please input"
                  :value="0.5"
                />
                <el-button size="small" type="primary">送出</el-button>
                <el-button size="small" type="primary">取消</el-button>
              </td>
            </template>
            <template v-if="item == ''">
              <td></td>
            </template>
          </template>
        </tr>
      </table>
    </el-row>
  </el-scrollbar>
  <el-row>
    <el-form-item label="统一修改">
      <el-radio-group v-model="radio1">
        <el-radio label="1" size="large">单</el-radio>
        <el-radio label="2" size="large">双</el-radio>
        <el-radio label="3" size="large">大</el-radio>
        <el-radio label="4" size="large">小</el-radio>
        <el-radio label="5" size="large">红波</el-radio>
        <el-radio label="6" size="large">绿波</el-radio>
        <el-radio label="7" size="large">蓝波</el-radio>
        <el-radio label="0" size="large">全部</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-row>
  <el-row>
    <el-form-item label="赔率" style="margin-right: 10px;">
      <el-input :value="0" />
    </el-form-item>
    <el-button>统一修改</el-button>
  </el-row>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'

const setting = reactive({
  odds: 48.8,
  bet: 0,
})

const others = ref([
  [
    {
      number: '单',
      odds: 1.98,
      bet: 0,
    },
    {
      number: '大',
      odds: 1.98,
      bet: 0,
    },
    {
      number: '合单',
      odds: 1.98,
      bet: 0,
    },
    {
      number: '红波',
      odds: 2.55,
      bet: 0,
    },
    {
      number: '蓝波',
      odds: 2.65,
      bet: 0,
    },
  ],
  [
    {
      number: '双',
      odds: 1.98,
      bet: 0,
    },
    {
      number: '小',
      odds: 1.98,
      bet: 0,
    },
    {
      number: '合双',
      odds: 1.98,
      bet: 0,
    },
    {
      number: '绿波',
      odds: 2.65,
      bet: 0,
    },
    {
      buttons: ['提交', '重置'],
    },
  ],
  [
    {
      number: '家禽',
      odds: 1.98,
      bet: 0,
    },
    {
      number: '野兽',
      odds: 1.98,
      bet: 0,
    },
    {
      number: '尾大',
      odds: 1.98,
      bet: 0,
    },
    {
      number: '尾小',
      odds: 1.98,
      bet: 0,
    },
    {
      number: '大单',
      odds: 3.5,
      bet: 0,
    },
  ],
  [
    {
      number: '小单',
      odds: 3.5,
      bet: 0,
    },
    {
      number: '大双',
      odds: 3.5,
      bet: 0,
    },
    {
      number: '小双',
      odds: 3.5,
      bet: 0,
    },
  ],
])

const options = ref([
  [
    '鼠',
    '牛',
    '虎',
    '兔',
    '龙',
    '蛇',
    '马',
    '羊',
    '猴',
    '鸡',
    '狗',
    '猪',
    '',
    '',
    '',
  ],
  [
    '红单',
    '红双',
    '红大',
    '红小',
    '蓝单',
    '蓝双',
    '蓝大',
    '蓝小',
    '绿单',
    '绿双',
    '绿大',
    '绿小',
    '红波',
    '蓝波',
    '绿波',
  ],
  [
    '单号',
    '双号',
    '大号',
    '小号',
    '合单',
    '合双',
    '',
    '0 头',
    '1 头',
    '2 头',
    '3 头',
    '4 头',
    '',
    '',
    '',
  ],
  [
    '0 尾',
    '1 尾',
    '2 尾',
    '3 尾',
    '4 尾',
    '5 尾',
    '6 尾',
    '7 尾',
    '8 尾',
    '9 尾',
    '',
    'submitComponent',
  ],
])

const reduce = ref('1')
const radio1 = ref('1')
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;
table.odds-setting-special-code {
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
