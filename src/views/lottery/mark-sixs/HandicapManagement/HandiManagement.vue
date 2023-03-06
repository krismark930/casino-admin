<template>
  <el-form :model="form">
    <table class="handicap-setting">
      <tr>
        <th>开奖球号：</th>
        <td colspan="3">
          <table class="lottery-ball-number">
            <thead>
              <th style="width: 50%;">平1</th>
              <th style="width: 50%;">操作</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <el-input v-model="form.autoOpeningtime" />
                </td>
                <td>
                  <el-button>
                    开奖
                  </el-button>
                </td>
              </tr>
              <tr>
                <td colspan="2" style="color: red;">
                  如果还未到开奖，这里数据请保持为0！
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <th>
          期数：
        </th>
        <td>
          <el-input v-model="form.number" />
        </td>
        <th>
          开奖时间：
        </th>
        <td>
          <el-input v-model="form.drawTime" />
        </td>
      </tr>
      <tr>
        <th>
          总封盘：
        </th>
        <td>
          <el-button>
            正在封盘中...
          </el-button>
        </td>
        <th>
          总自动封盘时间:
        </th>
        <td>
          <el-input v-model="form.autosealing" />
        </td>
      </tr>
      <tr>
        <th>自动开盘时间：</th>
        <td colspan="3">
          <div style="display: flex; width: 100%; column-gap: 10px;">
            <el-input v-model="form.autoOpeningtime" style="flex: 0 1 auto;" />
            <el-radio v-model="warning" style="flex: 0 1 auto;">
              (是否充许自动开盘)*(如果开始设成了自动开盘，那自动开盘后这勾会自动变成不打勾！)
            </el-radio>
          </div>
        </td>
      </tr>
      <tr>
        <th>特码：</th>
        <td>
          <el-radio-group v-model="form.specialRadio" class="ml-4">
            <el-radio label="1" size="large">封</el-radio>
            <el-radio label="2" size="large">开</el-radio>
          </el-radio-group>
        </td>
        <th>特码自动封盘时间：</th>
        <td>
          <el-input v-model="form.specialCode" />
        </td>
      </tr>
      <tr>
        <th>
          正特：
        </th>
        <td>
          <el-radio-group v-model="form.zhengteRadio" class="ml-4">
            <el-radio label="1" size="large">封</el-radio>
            <el-radio label="2" size="large">开</el-radio>
          </el-radio-group>
        </td>
        <th rowspan="8">
          正码自动封盘时间：
        </th>
        <td rowspan="8">
          <el-input v-model="form.positiveCode" />
        </td>
      </tr>
      <tr>
        <th>
          正码：
        </th>
        <td>
          <el-radio-group v-model="form.positiveCodeRadio" class="ml-4">
            <el-radio label="1" size="large">封</el-radio>
            <el-radio label="2" size="large">开</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th>
          五行：
        </th>
        <td>
          <el-radio-group v-model="form.fiveElementsRadio" class="ml-4">
            <el-radio label="1" size="large">封</el-radio>
            <el-radio label="2" size="large">开</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th>
          过关：
        </th>
        <td>
          <el-radio-group v-model="form.passRadio" class="ml-4">
            <el-radio label="1" size="large">封</el-radio>
            <el-radio label="2" size="large">开</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th>
          连码：
        </th>
        <td>
          <el-radio-group v-model="form.evenCodeRadio" class="ml-4">
            <el-radio label="1" size="large">封</el-radio>
            <el-radio label="2" size="large">开</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th>
          生肖/正特尾：
        </th>
        <td>
          <el-radio-group v-model="form.zodiacRadio" class="ml-4">
            <el-radio label="1" size="large">封</el-radio>
            <el-radio label="2" size="large">开</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th>
          半波/半半波/正肖七色波：
        </th>
        <td>
          <el-radio-group v-model="form.waveRadio" class="ml-4">
            <el-radio label="1" size="large">封</el-radio>
            <el-radio label="2" size="large">开</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th>
          头尾数：
        </th>
        <td>
          <el-radio-group v-model="form.headTailNumberRadio" class="ml-4">
            <el-radio label="1" size="large">封</el-radio>
            <el-radio label="2" size="large">开</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th></th>
        <td colspan="3">
          <el-button>
            保存盘口
          </el-button>
        </td>
      </tr>
    </table>

    <table class="handicap-history">
      <thead>
        <tr>
          <th>预设开奖期数</th>
          <th>开奖时间</th>
          <th>自动开盘时间</th>
          <th>自动封盘时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2023022</td>
          <td>2019-01-31 21:32:00</td>
          <td>2019-01-29 22:00:00</td>
          <td>2019-01-31 21:25:00</td>
          <td>
            <el-button size="small">
              <el-icon><Setting /></el-icon>
              设置
            </el-button>
          </td>
        </tr>
        <tr>
          <td>2023023</td>
          <td>2019-06-04 21:32:00</td>
          <td>2019-06-01 22:00:00</td>
          <td>2019-06-04 21:25:00</td>
          <td>
            <el-button size="small">
              <el-icon><Setting /></el-icon>
              设置
            </el-button>
          </td>
        </tr>
        <tr>
          <td>2023024</td>
          <td>2019-06-06 21:32:00</td>
          <td>2019-06-04 22:00:00</td>
          <td>2019-06-06 21:25:00</td>
          <td>
            <el-button size="small">
              <el-icon><Setting /></el-icon>
              设置
            </el-button>
          </td>
        </tr>
      </tbody>
    </table>
  </el-form>
</template>
<script lang="ts" setup>
import { Top } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
const warning = ref('1')
const form = reactive({
  number: '2023021',
  drawTime: '2023-02-25 21:32:00',
  autosealing: '2023-02-25 21:29:00',
  autoOpeningtime: '2023-02-24 22:30:00',
  specialCode: '2023-02-25 21:29:00',
  specialRadio: '1',
  zhengteRadio: '1',
  positiveCodeRadio: '1',
  fiveElementsRadio: '1',
  passRadio: '1',
  evenCodeRadio: '1',
  zodiacRadio: '1',
  waveRadio: '1',
  headTailNumberRadio: '1',
  positiveCode: '2023-02-25 21:29:00',
})
</script>
<style lang="scss" scoped>
$table-border: 1px solid #ece9d8;
$table-th-bgcolor: #fdf4ca;
.handicap-setting {
  width: 100%;
  border: $table-border;
  margin-bottom: 5px;
  border-collapse: collapse;
  tr {
    height: 40px;
    th {
      width: 15%;
      text-align: right;
      padding: 0 10px;
      background-color: $table-th-bgcolor;
      border: $table-border;
    }
    td {
      padding: 5px 10px;
      border: $table-border;
      min-width: 35%;
      max-width: 85%;
    }
  }
  .lottery-ball-number {
    border-spacing: 0;
    border-collapse: collapse;
    tr {
      height: auto;
    }
    th {
      text-align: center;
      background-color: blue;
      color: white;
      padding: 5px 0;
    }
    td {
      text-align: center;
    }
  }
}
.handicap-history {
  width: 100%;
  border: $table-border;
  border-collapse: collapse;
  tr {
    height: 30px;
  }
  th {
    background-color: $table-th-bgcolor;
  }
  th,
  td {
    width: 20%;
    text-align: center;
    border: $table-border;
  }
}
</style>
