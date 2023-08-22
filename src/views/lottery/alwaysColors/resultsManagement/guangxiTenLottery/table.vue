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
        <el-button type="primary" @click="getGXSFResultByFilter">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="gxsfResultList"
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
      <el-table-column property="num5" label="特别号" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_5 - 1]" />
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
import { gxsfResultStore } from "@/pinia/modules/always_color/gxsf_result.js";
import gxsfNumberImage1 from "@/assets/Ball_0/1.png";
import gxsfNumberImage2 from "@/assets/Ball_0/2.png";
import gxsfNumberImage3 from "@/assets/Ball_0/3.png";
import gxsfNumberImage4 from "@/assets/Ball_0/4.png";
import gxsfNumberImage5 from "@/assets/Ball_0/5.png";
import gxsfNumberImage6 from "@/assets/Ball_0/6.png";
import gxsfNumberImage7 from "@/assets/Ball_0/7.png";
import gxsfNumberImage8 from "@/assets/Ball_0/8.png";
import gxsfNumberImage9 from "@/assets/Ball_0/9.png";
import gxsfNumberImage10 from "@/assets/Ball_0/10.png";
import gxsfNumberImage11 from "@/assets/Ball_0/11.png";
import gxsfNumberImage12 from "@/assets/Ball_0/12.png";
import gxsfNumberImage13 from "@/assets/Ball_0/13.png";
import gxsfNumberImage14 from "@/assets/Ball_0/14.png";
import gxsfNumberImage15 from "@/assets/Ball_0/15.png";
import gxsfNumberImage16 from "@/assets/Ball_0/16.png";
import gxsfNumberImage17 from "@/assets/Ball_0/17.png";
import gxsfNumberImage18 from "@/assets/Ball_0/18.png";
import gxsfNumberImage19 from "@/assets/Ball_0/19.png";
import gxsfNumberImage20 from "@/assets/Ball_0/20.png";
import gxsfNumberImage21 from "@/assets/Ball_0/21.png";

export default {
  props: {
    refresh: Boolean,
  },
  setup() {
    const { dispatchGXSFResultList } = gxsfResultStore();
    const { dispatchCheckoutGXSFResult } = gxsfResultStore();
    return {
      dispatchGXSFResultList,
      dispatchCheckoutGXSFResult,
    }
  },
  data() {
    return {
      numberImageArray: [
        gxsfNumberImage1,
        gxsfNumberImage2,
        gxsfNumberImage3,
        gxsfNumberImage4,
        gxsfNumberImage5,
        gxsfNumberImage6,
        gxsfNumberImage7,
        gxsfNumberImage8,
        gxsfNumberImage9,
        gxsfNumberImage10,
        gxsfNumberImage11,
        gxsfNumberImage12,
        gxsfNumberImage13,
        gxsfNumberImage14,
        gxsfNumberImage15,
        gxsfNumberImage16,
        gxsfNumberImage17,
        gxsfNumberImage18,
        gxsfNumberImage19,
        gxsfNumberImage20,
        gxsfNumberImage21,
      ],
      loading: false,
      formData: {
        g_type: "GXSF",
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
    getGXSFResultByFilter: async function () {
      this.formData.query_time = moment(this.formData.query_time).format("YYYY-MM-DD");
      this.loading = true;
      await this.dispatchGXSFResultList(this.formData);
      this.loading = false;
    },
    reSettlement: async function (lottery_type, qishu) {
      let formData = {
        qishu: qishu,
        jsType: 1,
        type: lottery_type,
        g_type: "GXSF",
        title: "重新结算",
      }
      this.loading = true;
      await this.dispatchCheckoutGXSFResult(formData);
      await this.dispatchGXSFResultList(this.formData);
      this.successResult();
      this.loading = false;
    },
    checkout: async function (lottery_type, qishu) {
      let formData = {
        qishu: qishu,
        jsType: 0,
        type: lottery_type,
        g_type: "GXSF",
        title: "点击结算",
      }
      this.loading = true;
      await this.dispatchCheckoutGXSFResult(formData);
      await this.dispatchGXSFResultList(this.formData);
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
    gxsfResultList: function () {
      const { getGXSFResultList } = gxsfResultStore();
      return getGXSFResultList;
    },
    success: function () {
      const { getSuccess } = gxsfResultStore();
      return getSuccess;
    },
  },
  watch: {
    refresh: async function () {
      this.loading = true;
      await this.dispatchGXSFResultList(this.formData);
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.dispatchGXSFResultList(this.formData);
    this.loading = false;
  },
};
</script>
<style lang="scss" scoped></style>
