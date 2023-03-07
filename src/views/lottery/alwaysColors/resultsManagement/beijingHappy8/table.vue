<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <el-form :inline="true" :model="formData">
      <el-form-item label="开奖期号">
        <el-input
          v-model="formData.lotteryNumber"
          placeholder=""
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker
          v-model="formData.date"
          type="date"
          placeholder=""
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="settingData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column
        property="lotteryCategory"
        label="彩票类别"
        align="center"
      />
      <el-table-column
        property="lotteryNumber"
        label="彩票期号"
        align="center"
      />
      <el-table-column label="开奖时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.drawTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        v-for="item in tableLabel"
        :key="item.id"
        :label="item.value"
        align="center"
      >
        <template #default="scope">{{ scope.row.num[item.id - 1] }}</template>
      </el-table-column>
      <el-table-column property="size" label="大小" align="center" />
      <el-table-column property="singleandDouble" label="单双" align="center" />
      <el-table-column property="parity" label="奇偶" align="center" />
      <el-table-column property="upAndDown" label="上下" align="center" />
      <el-table-column property="sum" label="总和" align="center" />
      <el-table-column property="settlement" label="结算" align="center" />
      <el-table-column property="recalculate" label="重算" align="center" />
      <el-table-column fixed="right" label="操作" width="120" align="center">
        <template #default="scope">
          <el-button-group>
            <el-button
              type="primary"
              link
              @click="editData(scope.$index, scope.row)"
            >
              编辑
            </el-button>
            <el-button
              type="primary"
              link
              @click="viewData(scope.$index, scope.row)"
            >
              查看记录
            </el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        lotteryNumber: '',
        date: '',
      },
      tableLabel: [
        {
          id: '1',
          value: '一',
        },
        {
          id: '2',
          value: '二',
        },
        {
          id: '3',
          value: '三',
        },
        {
          id: '4',
          value: '四',
        },
        {
          id: '5',
          value: '五',
        },
        {
          id: '6',
          value: '六',
        },
        {
          id: '7',
          value: '七',
        },
        {
          id: '8',
          value: '八',
        },
        {
          id: '9',
          value: '九',
        },
        {
          id: '10',
          value: '十',
        },
        {
          id: '11',
          value: '十一',
        },
        {
          id: '12',
          value: '十二',
        },
        {
          id: '13',
          value: '十三',
        },
        {
          id: '14',
          value: '十四',
        },
        {
          id: '15',
          value: '十五',
        },
        {
          id: '16',
          value: '十六',
        },
        {
          id: '17',
          value: '十七',
        },
        {
          id: '18',
          value: '十八',
        },
        {
          id: '19',
          value: '十九',
        },
        {
          id: '20',
          value: '二十',
        },
      ],
      settingData: [
        {
          lotteryCategory: '北京快乐8',
          lotteryNumber: '20230306038',
          drawTime: '2023-02-21',
          num: [
            '1',
            '12',
            '15',
            '3',
            '7',
            '8',
            '13',
            '20',
            '5',
            '2',
            '6',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
          ],
          size: '',
          singleandDouble: '',
          parity: '',
          upAndDown: '',
          sum: '',
          settlement: '已结算',
          recalculate: '×',
        },
      ],
    }
  },
  methods: {
    editData(index, row) {
      console.log(index, row)
    },
    viewData(index, row) {
      console.log(index, row)
    },
  },
}
</script>
<style lang="scss" scoped></style>
