<template>
  <!-- <el-form :model="form" label-width="250px">
        <el-row>
            <el-col :lg="12" :sm="24">
                <el-form-item label="Lottery Ball Number:" style="align-items: center;">
                    <el-descriptions
                        direction="vertical"
                        :column="2"
                        border
                        class="lotteryBall-class"
                    >
                    <el-descriptions-item label="Flat1">
                        <el-input placeholder="0" />
                    </el-descriptions-item>
                    <el-descriptions-item :span="2" label="Operate">
                        <el-button type="primary" size="small">
                            Lottery
                        </el-button>
                    </el-descriptions-item>
                    <el-descriptions-item label="Warning">
                        如果还未到开奖，这里数据请保持为0！
                    </el-descriptions-item>
                    </el-descriptions>
                </el-form-item>
                
            </el-col>
        </el-row>
        <el-row>
            <el-col :lg="12" :sm="24">
                <el-form-item label="Number of Issues">
                    <el-input v-model="form.number" />
                </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="24">
                <el-form-item label="Draw Time">
                    <el-input v-model="form.drawTime" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :lg="12" :sm="24">
                <el-form-item label="Total Closing">
                    <el-button type="primary" size="small">
                        Opening...
                    </el-button>
                </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="24">
                <el-form-item label="Total Auto-sealing Time">
                    <el-input v-model="form.autosealing" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-form-item label="Automatic Opening Time">
            <div style="display: flex; column-gap: 10px;">
                <el-input v-model="form.autoOpeningtime"/>
                <el-radio v-model="warning">
                    (是否充许自动开盘)*(如果开始设成了自动开盘，那自动开盘后这勾会自动变成不打勾！)
                </el-radio>
            </div>
        </el-form-item>
        <el-form-item label="Positive Code Automatic Sealing Time">
            <el-input v-model="form.positiveCode" />
        </el-form-item>
    </el-form> -->
  <el-form :model="form">
    <table class="handicap-setting">
      <tr>
        <th>Lottery ball number:</th>
        <td colspan="3">
          <table class="lottery-ball-number">
            <thead>
              <th style="width: 50%;">Flat 1</th>
              <th style="width: 50%;">Operate</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <el-input v-model="form.autoOpeningtime" />
                </td>
                <td>
                  <el-button>
                    lottery
                  </el-button>
                </td>
              </tr>
              <tr>
                <td colspan="2" style="color: red;">
                  If the lottery has not yet come, please keep the data here as
                  0!
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <th>
          Number of Issues:
        </th>
        <td>
          <el-input v-model="form.number" />
        </td>
        <th>
          Draw time:
        </th>
        <td>
          <el-input v-model="form.drawTime" />
        </td>
      </tr>
      <tr>
        <th>
          Total closing:
        </th>
        <td>
          <el-button>
            Closing...
          </el-button>
        </td>
        <th>
          Total auto-sealing time:
        </th>
        <td>
          <el-input v-model="form.autosealing" />
        </td>
      </tr>
      <tr>
        <th>Automatic opening time:</th>
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
        <th>Special code:</th>
        <td>
          <el-radio-group v-model="form.specialRadio" class="ml-4">
            <el-radio label="1" size="large">Seal up</el-radio>
            <el-radio label="2" size="large">Open</el-radio>
          </el-radio-group>
        </td>
        <th>Special code automatic sealing time:</th>
        <td>
          <el-input v-model="form.specialCode" />
        </td>
      </tr>
      <tr>
        <th>
          Zheng Te:
        </th>
        <td>
          <el-radio-group v-model="form.zhengteRadio" class="ml-4">
            <el-radio label="1" size="large">Seal up</el-radio>
            <el-radio label="2" size="large">Open</el-radio>
          </el-radio-group>
        </td>
        <th rowspan="8">
          Positive code automatic sealing time:
        </th>
        <td rowspan="8">
          <el-input v-model="form.positiveCode" />
        </td>
      </tr>
      <tr>
        <th>
          Positive code:
        </th>
        <td>
          <el-radio-group v-model="form.positiveCodeRadio" class="ml-4">
            <el-radio label="1" size="large">Seal up</el-radio>
            <el-radio label="2" size="large">Open</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th>
          Five elements:
        </th>
        <td>
          <el-radio-group v-model="form.fiveElementsRadio" class="ml-4">
            <el-radio label="1" size="large">Seal up</el-radio>
            <el-radio label="2" size="large">Open</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th>
          Pass:
        </th>
        <td>
          <el-radio-group v-model="form.passRadio" class="ml-4">
            <el-radio label="1" size="large">Seal up</el-radio>
            <el-radio label="2" size="large">Open</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th>
          even code:
        </th>
        <td>
          <el-radio-group v-model="form.evenCodeRadio" class="ml-4">
            <el-radio label="1" size="large">Seal up</el-radio>
            <el-radio label="2" size="large">Open</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th>
          Zodiac/Zodiac:
        </th>
        <td>
          <el-radio-group v-model="form.zodiacRadio" class="ml-4">
            <el-radio label="1" size="large">Seal up</el-radio>
            <el-radio label="2" size="large">Open</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th>
          Half-wave/half-half-wave/Zhengxiao seven-color wave:
        </th>
        <td>
          <el-radio-group v-model="form.waveRadio" class="ml-4">
            <el-radio label="1" size="large">Seal up</el-radio>
            <el-radio label="2" size="large">Open</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th>
          Head and tail numbers:
        </th>
        <td>
          <el-radio-group v-model="form.headTailNumberRadio" class="ml-4">
            <el-radio label="1" size="large">Seal up</el-radio>
            <el-radio label="2" size="large">Open</el-radio>
          </el-radio-group>
        </td>
      </tr>
      <tr>
        <th></th>
        <td colspan="3">
          <el-button>
            Save line
          </el-button>
        </td>
      </tr>
    </table>

    <table class="handicap-history">
      <thead>
        <tr>
          <th>Default lottery period</th>
          <th>Draw time</th>
          <th>Automatic opening time</th>
          <th>Automatic closing time</th>
          <th>Operate</th>
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
              Setup
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
              Setup
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
              Setup
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
