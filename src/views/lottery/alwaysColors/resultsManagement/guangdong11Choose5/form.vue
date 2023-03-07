<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <el-form :model="formData" inline="true">
      <div>
        <el-form-item label="开奖期号">
          <el-input
            v-model="formData.lotteryNumber"
            placeholder=""
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="开奖时间">
          <el-date-picker
            v-model="formData.dateTime"
            type="datetime"
            placeholder="开奖时间"
          />
        </el-form-item>
      </div>
      <div style="margin-left: 35px;">
        <el-form-item label="开奖号码">
          <el-select
            v-for="item in placeHolder"
            :key="item.id"
            v-model="formData.winningNum[item.id]"
            :placeholder="item.value"
            style="width: 90px; margin: 5px;"
          >
            <el-option
              v-for="item in numberOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary">确认发布</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        lotteryNumber: '',
        dateTime: '',
        winningNum: [],
      },
      numberOptions: [],
      placeHolder: [
        {
          id: '1',
          value: '冠军',
        },
        {
          id: '2',
          value: '亚军',
        },
        {
          id: '3',
          value: '第三球',
        },
        {
          id: '4',
          value: '第四球',
        },
        {
          id: '5',
          value: '第五球',
        },
      ],
    }
  },
  methods: {},
  beforeMount() {
    for (let i = 1; i < 11; i++) {
      this.numberOptions.push({ value: i, label: i })
    }
  },
}
</script>
