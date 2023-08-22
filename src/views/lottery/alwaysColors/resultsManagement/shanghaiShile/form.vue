<template>
  <div
    style="
      border: 1px solid #eee;
      padding: 0.75rem;
      margin-top: 0.75rem;
      text-align: left;
    "
  >
    <el-form :model="lotteryResultItem" inline="true">
      <div>
        <el-form-item label="开奖期号">
          <el-input v-model="lotteryResultItem.qishu" placeholder="" clearable></el-input>
        </el-form-item>
        <el-form-item label="开奖时间">
          <el-date-picker
            v-model="lotteryResultItem.datetime"
            type="datetime"
            placeholder="开奖时间"
          />
        </el-form-item>
      </div>
      <div>
        <el-form-item label="开奖号码">
          <el-space>
            <el-select
              v-model="lotteryResultItem.ball_1"
              placeholder="第一球"
              style="width: 90px"
            >
              <el-option
                v-for="item in numberOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select
              v-model="lotteryResultItem.ball_2"
              placeholder="第二球"
              style="width: 90px"
            >
              <el-option
                v-for="item in numberOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select
              v-model="lotteryResultItem.ball_3"
              placeholder="第三球"
              style="width: 90px"
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
          <el-button type="primary" @click="saveResult">确认发布</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import moment from "moment-timezone";
import { b3ResultStore } from "@/pinia/modules/always_color/b3_result.js";
import { ElLoading } from "element-plus";
import { ElNotification } from "element-plus";
export default {
  props: {
    resultId: Number,
  },
  setup() {
    const { dispatchGetResultById } = b3ResultStore();
    const { dispatchSaveLotteryResult } = b3ResultStore();
    const { dispatchResultItemInitial } = b3ResultStore();
    return {
      dispatchGetResultById,
      dispatchSaveLotteryResult,
      dispatchResultItemInitial,
    }
  },
  data() {
    return {
      numberOptions: [],
      g_type: "t3",
    }
  },
  computed: {
    lotteryResultItem: function () {
      const { getLotteryResultData } = b3ResultStore();
      return getLotteryResultData;
    },
    success: function () {
      const { getSuccess } = b3ResultStore();
      return getSuccess;
    },
    errMessage: function () {
      const { getErrMessage } = b3ResultStore();
      return getErrMessage;
    },
  },
  watch: {
    resultId: async function (newValue) {
      if (newValue != 0) {
        const loading = ElLoading.service({
          lock: true,
          text: "加载中...",
          background: "rgba(0, 0, 0, 0.7)",
        });
        await this.dispatchGetResultById({ id: this.resultId, g_type: this.g_type });
        loading.close();
      }
    },
  },
  methods: {
    saveResult: async function () {
      this.lotteryResultItem.id = this.resultId;
      this.lotteryResultItem.g_type = this.g_type;
      this.lotteryResultItem.datetime = moment(this.lotteryResultItem.datetime).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      if (this.resultId === 0) {
        this.lotteryResultItem.action = "add";
      } else {
        this.lotteryResultItem.action = "edit";
      }
      if (this.lotteryResultItem.qishu === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖期号！",
          type: "error",
        });
        return;
      }
      if (this.lotteryResultItem.ball_1 === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖号码_1！",
          type: "error",
        });
        return;
      }
      if (this.lotteryResultItem.ball_2 === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖号码_2！",
          type: "error",
        });
        return;
      }
      if (this.lotteryResultItem.ball_3 === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖号码_3！",
          type: "error",
        });
        return;
      }
      const loading = ElLoading.service({
        lock: true,
        text: "加载中...",
        background: "rgba(0, 0, 0, 0.7)",
      });
      await this.dispatchSaveLotteryResult(this.lotteryResultItem);
      if (this.success) {
        ElNotification({
          title: "成功",
          message: "操作成功。",
          type: "success",
        });
      } else {
        ElNotification({
          title: "错误",
          message: this.errMessage,
          type: "error",
        });
      }
      this.lotteryResultItem.qishu = "";
      this.lotteryResultItem.ball_1 = "";
      this.lotteryResultItem.ball_2 = "";
      this.lotteryResultItem.ball_3 = "";
      loading.close();
      this.$emit("initialId");
      this.$emit("tableRefresh");
    },
    successResult: function () {
      if (this.success) {
        ElNotification({
          title: "成功",
          message: "操作成功。",
          type: "success",
        });
      } else {
        ElNotification({
          title: "错误",
          message: "操作失败。",
          type: "error",
        });
      }
    },
  },
  beforeMount() {
    for (let i = 0; i < 10; i++) {
      this.numberOptions.push({ value: i, label: i });
    }
  },
  unmounted() {
    console.log("unmounted");
    this.dispatchResultItemInitial();
  },
};
</script>
