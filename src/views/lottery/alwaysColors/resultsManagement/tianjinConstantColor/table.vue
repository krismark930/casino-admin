<template>
  <div
    style="
      border: 1px solid #eee;
      padding: 0.75rem;
      margin-top: 0.75rem;
      text-align: center;
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
        <el-button type="primary" @click="getB5ResultByFilter">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="b5ResultList"
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
      <el-table-column property="num1" label="第一球" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_1]" />
        </template>
      </el-table-column>
      <el-table-column property="num2" label="第二球" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_2]" />
        </template>
      </el-table-column>
      <el-table-column property="num3" label="第三球" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_3]" />
        </template>
      </el-table-column>
      <el-table-column property="num4" label="第四球" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_4]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="第五球" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_5]" />
        </template>
      </el-table-column>
      <el-table-column property="sum" label="总和" align="center" />
      <el-table-column property="dragon_tiger" label="龙虎" align="center" />
      <el-table-column property="top_middle_last" label="前三/中三/后三" align="center" />
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
import { b5ResultStore } from "@/pinia/modules/always_color/b5_result.js";
import b5NumberImage0 from "@/assets/Ball_2/0.png";
import b5NumberImage1 from "@/assets/Ball_2/1.png";
import b5NumberImage2 from "@/assets/Ball_2/2.png";
import b5NumberImage3 from "@/assets/Ball_2/3.png";
import b5NumberImage4 from "@/assets/Ball_2/4.png";
import b5NumberImage5 from "@/assets/Ball_2/5.png";
import b5NumberImage6 from "@/assets/Ball_2/6.png";
import b5NumberImage7 from "@/assets/Ball_2/7.png";
import b5NumberImage8 from "@/assets/Ball_2/8.png";
import b5NumberImage9 from "@/assets/Ball_2/9.png";

export default {
  props: {
    refresh: Boolean,
  },
  setup() {
    const { dispatchB5ResultList } = b5ResultStore();
    const { dispatchCheckoutB5Result } = b5ResultStore();
    return {
      dispatchB5ResultList,
      dispatchCheckoutB5Result,
    };
  },
  data() {
    return {
      numberImageArray: [
        b5NumberImage0,
        b5NumberImage1,
        b5NumberImage2,
        b5NumberImage3,
        b5NumberImage4,
        b5NumberImage5,
        b5NumberImage6,
        b5NumberImage7,
        b5NumberImage8,
        b5NumberImage9,
      ],
      loading: false,
      formData: {
        g_type: "tj",
        qishu_query: "",
        query_time: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
      },
    };
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
    getB5ResultByFilter: async function () {
      this.formData.query_time = moment(this.formData.query_time).format("YYYY-MM-DD");
      this.loading = true;
      await this.dispatchB5ResultList(this.formData);
      this.loading = false;
    },
    reSettlement: async function (lottery_type, qishu) {
      let formData = {
        qishu: qishu,
        jsType: 1,
        type: lottery_type,
        g_type: "tj",
        title: "重新结算",
      };
      this.loading = true;
      await this.dispatchCheckoutB5Result(formData);
      await this.dispatchB5ResultList(this.formData);
      this.successResult();
      this.loading = false;
    },
    checkout: async function (lottery_type, qishu) {
      let formData = {
        qishu: qishu,
        jsType: 0,
        type: lottery_type,
        g_type: "tj",
        title: "点击结算",
      };
      this.loading = true;
      await this.dispatchCheckoutB5Result(formData);
      await this.dispatchB5ResultList(this.formData);
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
    b5ResultList: function () {
      const { getB5ResultList } = b5ResultStore();
      return getB5ResultList;
    },
    success: function () {
      const { getSuccess } = b5ResultStore();
      return getSuccess;
    },
  },
  watch: {
    refresh: async function () {
      this.loading = true;
      await this.dispatchB5ResultList(this.formData);
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.dispatchB5ResultList(this.formData);
    this.loading = false;
  },
};
</script>
<style lang="scss" scoped></style>
