<template>
  <div
    style="
      border: 1px solid #eee;
      padding: 0.75rem;
      margin-top: 0.75rem;
      text-align: center;
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
              placeholder="冠军"
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
              placeholder="亚军"
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
              placeholder="第三名"
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
              v-model="lotteryResultItem.ball_4"
              placeholder="第四名"
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
              v-model="lotteryResultItem.ball_5"
              placeholder="第五名"
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
              v-model="lotteryResultItem.ball_6"
              placeholder="第六名"
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
              v-model="lotteryResultItem.ball_7"
              placeholder="第七名"
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
              v-model="lotteryResultItem.ball_8"
              placeholder="第八名"
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
              v-model="lotteryResultItem.ball_9"
              placeholder="第九名"
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
              v-model="lotteryResultItem.ball_10"
              placeholder="第十名"
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
import { azxy10ResultStore } from "@/pinia/modules/always_color/azxy10_result.js";
import { ElLoading } from "element-plus";
import { ElNotification } from "element-plus";
export default {
  props: {
    resultId: Number,
  },
  setup() {
    const { dispatchGetResultById } = azxy10ResultStore();
    const { dispatchSaveLotteryResult } = azxy10ResultStore();
    const { dispatchResultItemInitial } = azxy10ResultStore();
    return {
      dispatchGetResultById,
      dispatchSaveLotteryResult,
      dispatchResultItemInitial,
    };
  },
  data() {
    return {
      numberOptions: [],
      g_type: "AZXY10",
    };
  },
  computed: {
    lotteryResultItem: function () {
      const { getLotteryResultData } = azxy10ResultStore();
      return getLotteryResultData;
    },
    success: function () {
      const { getSuccess } = azxy10ResultStore();
      return getSuccess;
    },
    errMessage: function () {
      const { getErrMessage } = azxy10ResultStore();
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
      if (this.lotteryResultItem.ball_4 === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖号码_4！",
          type: "error",
        });
        return;
      }
      if (this.lotteryResultItem.ball_5 === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖号码_5！",
          type: "error",
        });
        return;
      }
      if (this.lotteryResultItem.ball_6 === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖号码_6！",
          type: "error",
        });
        return;
      }
      if (this.lotteryResultItem.ball_7 === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖号码_7！",
          type: "error",
        });
        return;
      }
      if (this.lotteryResultItem.ball_8 === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖号码_8！",
          type: "error",
        });
        return;
      }
      if (this.lotteryResultItem.ball_9 === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖号码_9！",
          type: "error",
        });
        return;
      }
      if (this.lotteryResultItem.ball_10 === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖号码_10！",
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
      this.lotteryResultItem.ball_4 = "";
      this.lotteryResultItem.ball_5 = "";
      this.lotteryResultItem.ball_6 = "";
      this.lotteryResultItem.ball_7 = "";
      this.lotteryResultItem.ball_8 = "";
      this.lotteryResultItem.ball_9 = "";
      this.lotteryResultItem.ball_10 = "";
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
    for (let i = 1; i < 11; i++) {
      this.numberOptions.push({ value: i, label: i });
    }
  },
  unmounted() {
    console.log("unmounted");
    this.dispatchResultItemInitial();
  },
};
</script>
