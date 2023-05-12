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
        <el-button type="primary" @click="getGD11ResultByFilter">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="gd11ResultList"
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
import { gd11ResultStore } from "@/pinia/modules/always_color/gd11_result.js";
import gd11NumberImage1 from "@/assets/Ball_0/1.png";
import gd11NumberImage2 from "@/assets/Ball_0/2.png";
import gd11NumberImage3 from "@/assets/Ball_0/3.png";
import gd11NumberImage4 from "@/assets/Ball_0/4.png";
import gd11NumberImage5 from "@/assets/Ball_0/5.png";
import gd11NumberImage6 from "@/assets/Ball_0/6.png";
import gd11NumberImage7 from "@/assets/Ball_0/7.png";
import gd11NumberImage8 from "@/assets/Ball_0/8.png";
import gd11NumberImage9 from "@/assets/Ball_0/9.png";
import gd11NumberImage10 from "@/assets/Ball_0/10.png";
import gd11NumberImage11 from "@/assets/Ball_0/11.png";
import gd11NumberImage12 from "@/assets/Ball_0/12.png";
import gd11NumberImage13 from "@/assets/Ball_0/13.png";
import gd11NumberImage14 from "@/assets/Ball_0/14.png";
import gd11NumberImage15 from "@/assets/Ball_0/15.png";
import gd11NumberImage16 from "@/assets/Ball_0/16.png";
import gd11NumberImage17 from "@/assets/Ball_0/17.png";
import gd11NumberImage18 from "@/assets/Ball_0/18.png";
import gd11NumberImage19 from "@/assets/Ball_0/19.png";
import gd11NumberImage20 from "@/assets/Ball_0/20.png";
import gd11NumberImage21 from "@/assets/Ball_0/21.png";
import gd11NumberImage22 from "@/assets/Ball_0/22.png";
import gd11NumberImage23 from "@/assets/Ball_0/23.png";
import gd11NumberImage24 from "@/assets/Ball_0/24.png";
import gd11NumberImage25 from "@/assets/Ball_0/25.png";
import gd11NumberImage26 from "@/assets/Ball_0/26.png";
import gd11NumberImage27 from "@/assets/Ball_0/27.png";
import gd11NumberImage28 from "@/assets/Ball_0/28.png";
import gd11NumberImage29 from "@/assets/Ball_0/29.png";
import gd11NumberImage30 from "@/assets/Ball_0/30.png";
import gd11NumberImage31 from "@/assets/Ball_0/31.png";
import gd11NumberImage32 from "@/assets/Ball_0/32.png";
import gd11NumberImage33 from "@/assets/Ball_0/33.png";
import gd11NumberImage34 from "@/assets/Ball_0/34.png";
import gd11NumberImage35 from "@/assets/Ball_0/35.png";
import gd11NumberImage36 from "@/assets/Ball_0/36.png";
import gd11NumberImage37 from "@/assets/Ball_0/37.png";
import gd11NumberImage38 from "@/assets/Ball_0/38.png";
import gd11NumberImage39 from "@/assets/Ball_0/39.png";
import gd11NumberImage40 from "@/assets/Ball_0/40.png";
import gd11NumberImage41 from "@/assets/Ball_0/41.png";
import gd11NumberImage42 from "@/assets/Ball_0/42.png";
import gd11NumberImage43 from "@/assets/Ball_0/43.png";
import gd11NumberImage44 from "@/assets/Ball_0/44.png";
import gd11NumberImage45 from "@/assets/Ball_0/45.png";
import gd11NumberImage46 from "@/assets/Ball_0/46.png";
import gd11NumberImage47 from "@/assets/Ball_0/47.png";
import gd11NumberImage48 from "@/assets/Ball_0/48.png";
import gd11NumberImage49 from "@/assets/Ball_0/49.png";

export default {
  props: {
    refresh: Boolean,
  },
  setup() {
    const { dispatchGD11ResultList } = gd11ResultStore();
    const { dispatchCheckoutGD11Result } = gd11ResultStore();
    return {
      dispatchGD11ResultList,
      dispatchCheckoutGD11Result,
    };
  },
  data() {
    return {
      numberImageArray: [
        gd11NumberImage1,
        gd11NumberImage2,
        gd11NumberImage3,
        gd11NumberImage4,
        gd11NumberImage5,
        gd11NumberImage6,
        gd11NumberImage7,
        gd11NumberImage8,
        gd11NumberImage9,
        gd11NumberImage10,
        gd11NumberImage11,
        gd11NumberImage12,
        gd11NumberImage13,
        gd11NumberImage14,
        gd11NumberImage15,
        gd11NumberImage16,
        gd11NumberImage17,
        gd11NumberImage18,
        gd11NumberImage19,
        gd11NumberImage20,
        gd11NumberImage21,
        gd11NumberImage22,
        gd11NumberImage23,
        gd11NumberImage24,
        gd11NumberImage25,
        gd11NumberImage26,
        gd11NumberImage27,
        gd11NumberImage28,
        gd11NumberImage29,
        gd11NumberImage30,
        gd11NumberImage31,
        gd11NumberImage32,
        gd11NumberImage33,
        gd11NumberImage34,
        gd11NumberImage35,
        gd11NumberImage36,
        gd11NumberImage37,
        gd11NumberImage38,
        gd11NumberImage39,
        gd11NumberImage40,
        gd11NumberImage41,
        gd11NumberImage42,
        gd11NumberImage43,
        gd11NumberImage44,
        gd11NumberImage45,
        gd11NumberImage46,
        gd11NumberImage47,
        gd11NumberImage48,
        gd11NumberImage49,
      ],
      loading: false,
      formData: {
        g_type: "GD11",
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
    getGD11ResultByFilter: async function () {
      this.formData.query_time = moment(this.formData.query_time).format("YYYY-MM-DD");
      this.loading = true;
      await this.dispatchGD11ResultList(this.formData);
      this.loading = false;
    },
    reSettlement: async function (lottery_type, qishu) {
      let formData = {
        qishu: qishu,
        jsType: 1,
        type: lottery_type,
        g_type: "GD11",
        title: "重新结算",
      };
      this.loading = true;
      await this.dispatchCheckoutGD11Result(formData);
      await this.dispatchGD11ResultList(this.formData);
      this.successResult();
      this.loading = false;
    },
    checkout: async function (lottery_type, qishu) {
      let formData = {
        qishu: qishu,
        jsType: 0,
        type: lottery_type,
        g_type: "GD11",
        title: "点击结算",
      };
      this.loading = true;
      await this.dispatchCheckoutGD11Result(formData);
      await this.dispatchGD11ResultList(this.formData);
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
    gd11ResultList: function () {
      const { getGD11ResultList } = gd11ResultStore();
      return getGD11ResultList;
    },
    success: function () {
      const { getSuccess } = gd11ResultStore();
      return getSuccess;
    },
  },
  watch: {
    refresh: async function () {
      this.loading = true;
      await this.dispatchGD11ResultList(this.formData);
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.dispatchGD11ResultList(this.formData);
    this.loading = false;
  },
};
</script>
<style lang="scss" scoped></style>
