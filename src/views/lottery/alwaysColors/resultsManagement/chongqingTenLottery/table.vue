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
        <el-button type="primary" @click="getCQSFResultByFilter">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="cqsfResultList"
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
          <img :src="numberImageArray[scope.row.ball_1 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num2" label="第二球" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_2 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num3" label="第三球" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_3 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num4" label="第四球" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_4 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="第五球" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_5 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="第六球" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_6 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="第七球" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_7 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="第八球" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_8 - 1]" />
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
import { cqsfResultStore } from "@/pinia/modules/always_color/cqsf_result.js";
import cqsfNumberImage1 from "@/assets/Ball_1/1.png";
import cqsfNumberImage2 from "@/assets/Ball_1/2.png";
import cqsfNumberImage3 from "@/assets/Ball_1/3.png";
import cqsfNumberImage4 from "@/assets/Ball_1/4.png";
import cqsfNumberImage5 from "@/assets/Ball_1/5.png";
import cqsfNumberImage6 from "@/assets/Ball_1/6.png";
import cqsfNumberImage7 from "@/assets/Ball_1/7.png";
import cqsfNumberImage8 from "@/assets/Ball_1/8.png";
import cqsfNumberImage9 from "@/assets/Ball_1/9.png";
import cqsfNumberImage10 from "@/assets/Ball_1/10.png";
import cqsfNumberImage11 from "@/assets/Ball_1/11.png";
import cqsfNumberImage12 from "@/assets/Ball_1/12.png";
import cqsfNumberImage13 from "@/assets/Ball_1/13.png";
import cqsfNumberImage14 from "@/assets/Ball_1/14.png";
import cqsfNumberImage15 from "@/assets/Ball_1/15.png";
import cqsfNumberImage16 from "@/assets/Ball_1/16.png";
import cqsfNumberImage17 from "@/assets/Ball_1/17.png";
import cqsfNumberImage18 from "@/assets/Ball_1/18.png";
import cqsfNumberImage19 from "@/assets/Ball_1/19.png";
import cqsfNumberImage20 from "@/assets/Ball_1/20.png";

export default {
  props: {
    refresh: Boolean,
  },
  setup() {
    const { dispatchCQSFResultList } = cqsfResultStore();
    const { dispatchCheckoutCQSFResult } = cqsfResultStore();
    return {
      dispatchCQSFResultList,
      dispatchCheckoutCQSFResult,
    };
  },
  data() {
    return {
      numberImageArray: [
        cqsfNumberImage1,
        cqsfNumberImage2,
        cqsfNumberImage3,
        cqsfNumberImage4,
        cqsfNumberImage5,
        cqsfNumberImage6,
        cqsfNumberImage7,
        cqsfNumberImage8,
        cqsfNumberImage9,
        cqsfNumberImage10,
        cqsfNumberImage11,
        cqsfNumberImage12,
        cqsfNumberImage13,
        cqsfNumberImage14,
        cqsfNumberImage15,
        cqsfNumberImage16,
        cqsfNumberImage17,
        cqsfNumberImage18,
        cqsfNumberImage19,
        cqsfNumberImage20,
      ],
      loading: false,
      formData: {
        g_type: "CQSF",
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
    getCQSFResultByFilter: async function () {
      this.formData.query_time = moment(this.formData.query_time).format("YYYY-MM-DD");
      this.loading = true;
      await this.dispatchCQSFResultList(this.formData);
      this.loading = false;
    },
    reSettlement: async function (lottery_type, qishu) {
      let formData = {
        qishu: qishu,
        jsType: 1,
        type: lottery_type,
        g_type: "CQSF",
        title: "重新结算",
      };
      this.loading = true;
      await this.dispatchCheckoutCQSFResult(formData);
      await this.dispatchCQSFResultList(this.formData);
      this.successResult();
      this.loading = false;
    },
    checkout: async function (lottery_type, qishu) {
      let formData = {
        qishu: qishu,
        jsType: 0,
        type: lottery_type,
        g_type: "CQSF",
        title: "点击结算",
      };
      this.loading = true;
      await this.dispatchCheckoutCQSFResult(formData);
      await this.dispatchCQSFResultList(this.formData);
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
    cqsfResultList: function () {
      const { getCQSFResultList } = cqsfResultStore();
      return getCQSFResultList;
    },
    success: function () {
      const { getSuccess } = cqsfResultStore();
      return getSuccess;
    },
  },
  watch: {
    refresh: async function () {
      this.loading = true;
      await this.dispatchCQSFResultList(this.formData);
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.dispatchCQSFResultList(this.formData);
    this.loading = false;
  },
};
</script>
<style lang="scss" scoped></style>
