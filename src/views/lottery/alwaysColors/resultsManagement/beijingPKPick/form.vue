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
              v-model="formData.championNum"
              placeholder="冠军"
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
              v-model="formData.runnerUpNum"
              placeholder="亚军"
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
            <el-select
              v-model="formData.winningNum4"
              placeholder="第四球"
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
              v-model="formData.winningNum5"
              placeholder="第五球"
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
              v-model="formData.winningNum6"
              placeholder="第六球"
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
              v-model="formData.winningNum7"
              placeholder="第七球"
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
              v-model="formData.winningNum8"
              placeholder="第八球"
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
              v-model="formData.winningNum9"
              placeholder="第九名"
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
              v-model="formData.winningNum10"
              placeholder="第十名"
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
        championNum: '',
        runnerUpNum: '',
        winningNum3: '',
        winningNum4: '',
        winningNum5: '',
        winningNum6: '',
        winningNum7: '',
        winningNum8: '',
        winningNum9: '',
        winningNum10: '',
      },
      numberOptions: [
        {
          value: '1',
          label: '1',
        },
        {
          value: '2',
          label: '2',
        },
        {
          value: '3',
          label: '3',
        },
        {
          value: '4',
          label: '4',
        },
        {
          value: '5',
          label: '5',
        },
        {
          value: '6',
          label: '6',
        },
        {
          value: '7',
          label: '7',
        },
        {
          value: '8',
          label: '8',
        },
        {
          value: '9',
          label: '9',
        },
        {
          value: '10',
          label: '10',
        },
      ],
    }
  },
}
</script>
