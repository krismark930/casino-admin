<template>
  <div
    style="
      border: 1px solid #eee;
      padding: 0.75rem;
      margin-top: 0.75rem;
      text-align: left;
    "
  >
    <el-form :inline="true" :model="formData">
      <el-form-item label="开奖期号">
        <el-input v-model="formData.qishu_query" placeholder="" clearable></el-input>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker
          v-model="formData.query_time"
          type="date"
          placeholder=""
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="getXYFTResultByFilter">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="xyftResultList"
      v-loading="loading"
      style="width: 100%"
      border
      header-align="center"
      stripe
    >
      <el-table-column property="lottery_type" label="彩票类别" align="center" />
      <el-table-column property="qishu" label="彩票期号" align="center" />
      <el-table-column label="开奖时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.datetime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="num1" label="冠军" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_1 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num2" label="亚军" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_2 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num3" label="第三名" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_3 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num4" label="第四名" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_4 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="第五名" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_5 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="第六名" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_6 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="第七名" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_7 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="第八名" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_8 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="第九名" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_9 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="第十名" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_10 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="settlement" label="结算" align="center">
        <template #default="scope">
          <el-button
            link
            v-if="Number(scope.row.state) === 0"
            @click="checkout(scope.row.lottery_type, scope.row.qishu)"
          >
            <font color="#0000FF">未结算</font>
          </el-button>
          <el-button
            link
            v-else
            @click="reSettlement(scope.row.lottery_type, scope.row.qishu)"
          >
            <font color="#FF0000">已结算</font>
          </el-button>
        </template>
      </el-table-column>
      <el-table-column property="recalculate" label="重算" align="center">
        <template #default="scope">
          <el-button link v-if="Number(scope.row.state) === 2">
            <font color="#FF0000" style="font-size: 18px"> √ </font>
          </el-button>
          <el-button link v-else>
            <font color="#0000FF" style="font-size: 20px">×</font>
          </el-button>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120" align="center">
        <template #default="scope">
          <el-button-group>
            <el-button type="primary" link @click="editResult(scope.row.id)">
              编辑
            </el-button>
            <el-button type="danger" link @click="viewRecords(scope.row.prev_text)">
              查看记录
            </el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import moment from "moment-timezone";
import { ElNotification } from "element-plus";
import { xyftResultStore } from "@/pinia/modules/always_color/xyft_result.js";
import xyftNumberImage1 from "@/assets/Ball_3/1.png";
import xyftNumberImage2 from "@/assets/Ball_3/2.png";
import xyftNumberImage3 from "@/assets/Ball_3/3.png";
import xyftNumberImage4 from "@/assets/Ball_3/4.png";
import xyftNumberImage5 from "@/assets/Ball_3/5.png";
import xyftNumberImage6 from "@/assets/Ball_3/6.png";
import xyftNumberImage7 from "@/assets/Ball_3/7.png";
import xyftNumberImage8 from "@/assets/Ball_3/8.png";
import xyftNumberImage9 from "@/assets/Ball_3/9.png";
import xyftNumberImage10 from "@/assets/Ball_3/10.png";

export default {
  props: {
    refresh: Boolean,
  },
  setup() {
    const { dispatchXYFTResultList } = xyftResultStore();
    const { dispatchCheckoutXYFTResult } = xyftResultStore();
    return {
      dispatchXYFTResultList,
      dispatchCheckoutXYFTResult,
    }
  },
  data() {
    return {
      numberImageArray: [
        xyftNumberImage1,
        xyftNumberImage2,
        xyftNumberImage3,
        xyftNumberImage4,
        xyftNumberImage5,
        xyftNumberImage6,
        xyftNumberImage7,
        xyftNumberImage8,
        xyftNumberImage9,
        xyftNumberImage10,
      ],
      loading: false,
      formData: {
        g_type: "XYFT",
        qishu_query: "",
        query_time: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
      },
    }
  },
  methods: {
    editResult(id) {
      this.formData.id = id;
      this.$emit("editLotteryResult", this.formData);
    },
    viewRecords(prev_text) {
      if (prev_text == null || prev_text === "") {
        alert("该条记录未被修改过。");
      } else {
        alert(prev_text);
      }
    },
    getXYFTResultByFilter: async function () {
      this.formData.query_time = moment(this.formData.query_time).format("YYYY-MM-DD");
      this.loading = true;
      await this.dispatchXYFTResultList(this.formData);
      this.loading = false;
    },
    reSettlement: async function (lottery_type, qishu) {
      let formData = {
        qishu: qishu,
        jsType: 1,
        type: lottery_type,
        g_type: "XYFT",
        title: "重新结算",
      }
      this.loading = true;
      await this.dispatchCheckoutXYFTResult(formData);
      await this.dispatchXYFTResultList(this.formData);
      this.successResult();
      this.loading = false;
    },
    checkout: async function (lottery_type, qishu) {
      let formData = {
        qishu: qishu,
        jsType: 0,
        type: lottery_type,
        g_type: "XYFT",
        title: "点击结算",
      }
      this.loading = true;
      await this.dispatchCheckoutXYFTResult(formData);
      await this.dispatchXYFTResultList(this.formData);
      this.successResult();
      this.loading = false;
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
  computed: {
    xyftResultList: function () {
      const { getXYFTResultList } = xyftResultStore();
      return getXYFTResultList;
    },
    success: function () {
      const { getSuccess } = xyftResultStore();
      return getSuccess;
    },
  },
  watch: {
    refresh: async function () {
      this.loading = true;
      await this.dispatchXYFTResultList(this.formData);
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.dispatchXYFTResultList(this.formData);
    this.loading = false;
  },
};
</script>
<style lang="scss" scoped></style>
