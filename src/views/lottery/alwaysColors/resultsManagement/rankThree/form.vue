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
      <div>
        <el-form-item label="开奖号码">
          <el-space>
            <el-select
              v-model="formData.winningNum1"
              placeholder="第一球"
              style="width: 90px;"
            >
              <el-option
                v-for="item in numberOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select
              v-model="formData.winningNum2"
              placeholder="第二球"
              style="width: 90px;"
            >
              <el-option
                v-for="item in numberOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select
              v-model="formData.winningNum3"
              placeholder="第三球"
              style="width: 90px;"
            >
              <el-option
                v-for="item in numberOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-space>
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
        winningNum1: '',
        winningNum2: '',
        winningNum3: '',
      },
      numberOptions: [],
    }
  },
  beforeMount() {
    for (let i = 0; i < 10; i++) {
      this.numberOptions.push({ value: i, label: i })
    }
  },
}
</script>
