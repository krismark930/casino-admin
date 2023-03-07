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
            style="width: 100px; margin: 5px;"
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
          value: '第一球',
        },
        {
          id: '2',
          value: '第二球',
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
        {
          id: '6',
          value: '第六球',
        },
        {
          id: '7',
          value: '第七球',
        },
        {
          id: '8',
          value: '第八球',
        },
        {
          id: '9',
          value: '第九球',
        },
        {
          id: '10',
          value: '第十球',
        },
        {
          id: '11',
          value: '第十一球',
        },
        {
          id: '12',
          value: '第十二球',
        },
        {
          id: '13',
          value: '第十三球',
        },
        {
          id: '14',
          value: '第十四球',
        },
        {
          id: '15',
          value: '第十五球',
        },
        {
          id: '16',
          value: '第十六球',
        },
        {
          id: '17',
          value: '第十七球',
        },
        {
          id: '18',
          value: '第十八球',
        },
        {
          id: '19',
          value: '第十九球',
        },
        {
          id: '20',
          value: '第二十球',
        },
      ],
    }
  },
  methods: {},
  beforeMount() {
    for (let i = 0; i < 81; i++) {
      this.numberOptions.push({ value: i, label: i })
    }
  },
}
</script>
