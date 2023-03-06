<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <h3>时时彩设置</h3>
    <el-form :model="formData" inline="true">
      <div>
        <el-table
          :data="formData.settingData1"
          style="width: 100%;"
          border
          header-align="center"
          stripe
        >
          <el-table-column label="" align="center" width="500px">
            <template #default="scope">
              <el-checkbox
                :label="labelText[scope.$index].label1"
                v-model="scope.row.checkState1"
              ></el-checkbox>
              <el-checkbox
                :label="labelText[scope.$index].label2"
                v-model="scope.row.checkState1"
              ></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column label="维护原因" align="center">
            <template #default="scope">
              <el-input
                v-model="scope.row.reason"
                placeholder=""
                clearable
              ></el-input>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <p>温馨提示:停用彩种在前台不再展示,维护彩种在前台显示维护!</p>
      <div>
        <el-table
          :data="formData.settingData2"
          style="width: 100%;"
          border
          header-align="center"
          stripe
        >
          <el-table-column
            property="proofType"
            label="校对类型"
            align="center"
          />
          <el-table-column label="开奖时间" align="center">
            <template #default="scope">
              <el-input
                v-model="scope.row.drawTime"
                placeholder=""
                clearable
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column label="开奖期号" align="center">
            <template #default="scope">
              <el-input
                v-model="scope.row.lotteryNumber"
                placeholder=""
                clearable
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column property="detail" label="细节" align="center" />
        </el-table>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        settingData1: [
          {
            checkState1: '',
            checkState2: '',
            reason: '',
          },
          {
            checkState1: '',
            checkState2: '',
            reason: '',
          },
          {
            checkState1: '',
            checkState2: '',
            reason: '',
          },
          {
            checkState1: '',
            checkState2: '',
            reason: '',
          },
          {
            checkState1: '',
            checkState2: '',
            reason: '',
          },
          {
            checkState1: '',
            checkState2: '',
            reason: '',
          },
          {
            checkState1: '',
            checkState2: '',
            reason: '',
          },
          {
            checkState1: '',
            checkState2: '',
            reason: '',
          },
          {
            checkState1: '',
            checkState2: '',
            reason: '',
          },
          {
            checkState1: '',
            checkState2: '',
            reason: '',
          },
          {
            checkState1: '',
            checkState2: '',
            reason: '',
          },
          {
            checkState1: '',
            checkState2: '',
            reason: '',
          },
          {
            checkState1: '',
            checkState2: '',
            reason: '',
          },
          {
            checkState1: '',
            checkState2: '',
            reason: '',
          },
          {
            checkState1: '',
            checkState2: '',
            reason: '',
          },
          {
            checkState1: '',
            checkState2: '',
            reason: '',
          },
          {
            checkState1: '',
            checkState2: '',
            reason: '',
          },
          {
            checkState1: '',
            checkState2: '',
            reason: '',
          },
        ],
        settingData2: [
          {
            proofType: '福彩3D期数校对',
            drawTime: '',
            lotteryNumber: '',
            detail: '例如:2021-01-01开的期数是2021001',
          },
          {
            proofType: '排列三期数校对',
            drawTime: '',
            lotteryNumber: '',
            detail: '例如:2021-01-01开的期数是2021001',
          },
          {
            proofType: '广西十分彩期数校对',
            drawTime: '',
            lotteryNumber: '',
            detail: '例如:2021-01-01开的第一期是202100101',
          },
          {
            proofType: '北京PK10期数校对',
            drawTime: '',
            lotteryNumber: '',
            detail: '例如:2020-01-01开的第一期是754648',
          },
          {
            proofType: '台灣時時彩期数校对',
            drawTime: '',
            lotteryNumber: '',
            detail: '例如:2021-01-01开的第一期是110000001',
          },
          {
            proofType: '澳洲幸运5期数校对',
            drawTime: '',
            lotteryNumber: '',
            detail: '例如:2021-01-01开的第一期是50750762',
          },
          {
            proofType: '澳洲幸运10期数校对',
            drawTime: '',
            lotteryNumber: '',
            detail: '例如:2021-01-01开的第一期是20759662',
          },
        ],
      },
      labelText: [
        {
          label1: '维护重庆时时彩',
          label2: '停用重庆时时彩',
        },
        {
          label1: '维护天津时时彩',
          label2: '停用天津时时彩',
        },
        {
          label1: '维护新疆时时彩',
          label2: '停用新疆时时彩',
        },
        {
          label1: '维护河内五分彩',
          label2: '停用河内五分彩',
        },
        {
          label1: '维护腾讯时时彩',
          label2: '停用腾讯时时彩',
        },
        {
          label1: '维护台湾时时彩',
          label2: '停用台湾时时彩',
        },
        {
          label1: '维护重庆快乐十分',
          label2: '停用重庆快乐十分',
        },
        {
          label1: '维护广东快乐十分',
          label2: '停用广东快乐十分',
        },
        {
          label1: '维护天津快乐十分',
          label2: '停用天津快乐十分',
        },
        {
          label1: '维护广西快乐十分',
          label2: '停用广西快乐十分',
        },
        {
          label1: '维护福彩3D',
          label2: '停用福彩3D',
        },
        {
          label1: '维护排列三',
          label2: '停用排列三',
        },
        {
          label1: '维护上海时时乐',
          label2: '停用上海时时乐',
        },
        {
          label1: '维护北京PK10',
          label2: '停用北京PK10',
        },
        {
          label1: '维护广东11选5',
          label2: '停用广东11选5',
        },
        {
          label1: '维护幸运飞艇',
          label2: '停用幸运飞艇',
        },
        {
          label1: '维护澳洲幸运5',
          label2: '停用澳洲幸运5',
        },
        {
          label1: '维护澳洲幸运10',
          label2: '停用澳洲幸运10',
        },
      ],
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped></style>
