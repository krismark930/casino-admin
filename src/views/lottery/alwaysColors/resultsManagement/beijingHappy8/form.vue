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
        <el-scrollbar>
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
              <el-select
                v-model="lotteryResultItem.ball_4"
                placeholder="第四球"
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
                placeholder="第五球"
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
                placeholder="第六球"
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
                placeholder="第七球"
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
                placeholder="第八球"
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
                placeholder="第九球"
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
                placeholder="第十球"
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
                v-model="lotteryResultItem.ball_11"
                placeholder="第十一球"
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
                v-model="lotteryResultItem.ball_12"
                placeholder="第十二球"
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
                v-model="lotteryResultItem.ball_13"
                placeholder="第十三球"
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
                v-model="lotteryResultItem.ball_14"
                placeholder="第十四球"
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
                v-model="lotteryResultItem.ball_15"
                placeholder="第十五球"
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
                v-model="lotteryResultItem.ball_16"
                placeholder="第十六球"
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
                v-model="lotteryResultItem.ball_17"
                placeholder="第十七球"
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
                v-model="lotteryResultItem.ball_18"
                placeholder="第十八球"
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
                v-model="lotteryResultItem.ball_19"
                placeholder="第十九球"
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
                v-model="lotteryResultItem.ball_20"
                placeholder="第二十球"
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
        </el-scrollbar>
        <el-form-item label="">
          <el-button type="primary" @click="saveResult">确认发布</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import moment from "moment-timezone";
import { bjknResultStore } from "@/pinia/modules/always_color/bjkn_result.js";
import { ElLoading } from "element-plus";
import { ElNotification } from "element-plus";
export default {
  props: {
    resultId: Number,
  },
  setup() {
    const { dispatchGetResultById } = bjknResultStore();
    const { dispatchSaveLotteryResult } = bjknResultStore();
    const { dispatchResultItemInitial } = bjknResultStore();
    return {
      dispatchGetResultById,
      dispatchSaveLotteryResult,
      dispatchResultItemInitial,
    };
  },
  data() {
    return {
      numberOptions: [],
      g_type: "BJKN",
    };
  },
  computed: {
    lotteryResultItem: function () {
      const { getLotteryResultData } = bjknResultStore();
      return getLotteryResultData;
    },
    success: function () {
      const { getSuccess } = bjknResultStore();
      return getSuccess;
    },
    errMessage: function () {
      const { getErrMessage } = bjknResultStore();
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
      if (this.lotteryResultItem.ball_11 === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖号码_11！",
          type: "error",
        });
        return;
      }
      if (this.lotteryResultItem.ball_12 === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖号码_12！",
          type: "error",
        });
        return;
      }
      if (this.lotteryResultItem.ball_13 === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖号码_13！",
          type: "error",
        });
        return;
      }
      if (this.lotteryResultItem.ball_14 === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖号码_14！",
          type: "error",
        });
        return;
      }
      if (this.lotteryResultItem.ball_15 === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖号码_15！",
          type: "error",
        });
        return;
      }
      if (this.lotteryResultItem.ball_16 === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖号码_16！",
          type: "error",
        });
        return;
      }
      if (this.lotteryResultItem.ball_17 === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖号码_17！",
          type: "error",
        });
        return;
      }
      if (this.lotteryResultItem.ball_18 === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖号码_18！",
          type: "error",
        });
        return;
      }
      if (this.lotteryResultItem.ball_19 === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖号码_19！",
          type: "error",
        });
        return;
      }
      if (this.lotteryResultItem.ball_20 === "") {
        ElNotification({
          title: "错误",
          message: "请输入开奖号码_20！",
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
      this.lotteryResultItem.ball_11 = "";
      this.lotteryResultItem.ball_12 = "";
      this.lotteryResultItem.ball_13 = "";
      this.lotteryResultItem.ball_14 = "";
      this.lotteryResultItem.ball_15 = "";
      this.lotteryResultItem.ball_16 = "";
      this.lotteryResultItem.ball_17 = "";
      this.lotteryResultItem.ball_18 = "";
      this.lotteryResultItem.ball_19 = "";
      this.lotteryResultItem.ball_20 = "";
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
    for (let i = 1; i < 81; i++) {
      this.numberOptions.push({ value: i, label: i });
    }
  },
  unmounted() {
    console.log("unmounted");
    this.dispatchResultItemInitial();
  },
};
</script>
