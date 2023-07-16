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
        <el-button type="primary" @click="getBJKNResultByFilter">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="bjknResultList"
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
      <el-table-column property="num1" label="一" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_1 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num2" label="二" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_2 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num3" label="三" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_3 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num4" label="四" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_4 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="五" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_5 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="六" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_6 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="七" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_7 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="八" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_8 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="九" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_9 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="十" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_10 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="十一" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_11 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="十二" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_12 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="十三" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_13 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="十四" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_14 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="十五" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_15 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="十六" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_16 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="十七" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_17 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="十八" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_18 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="十九" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_19 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="num5" label="二十" align="center">
        <template #default="scope">
          <img :src="numberImageArray[scope.row.ball_20 - 1]" />
        </template>
      </el-table-column>
      <el-table-column property="other_1" label="大小" align="center"> </el-table-column>
      <el-table-column property="other_2" label="单双" align="center"> </el-table-column>
      <el-table-column property="other_3" label="奇偶" align="center"> </el-table-column>
      <el-table-column property="other_4" label="上下" align="center"> </el-table-column>
      <el-table-column property="other_5" label="总和" align="center"> </el-table-column>
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
import { bjknResultStore } from "@/pinia/modules/always_color/bjkn_result.js";
import bjknNumberImage1 from "@/assets/Ball_4/1.png";
import bjknNumberImage2 from "@/assets/Ball_4/2.png";
import bjknNumberImage3 from "@/assets/Ball_4/3.png";
import bjknNumberImage4 from "@/assets/Ball_4/4.png";
import bjknNumberImage5 from "@/assets/Ball_4/5.png";
import bjknNumberImage6 from "@/assets/Ball_4/6.png";
import bjknNumberImage7 from "@/assets/Ball_4/7.png";
import bjknNumberImage8 from "@/assets/Ball_4/8.png";
import bjknNumberImage9 from "@/assets/Ball_4/9.png";
import bjknNumberImage10 from "@/assets/Ball_4/10.png";
import bjknNumberImage11 from "@/assets/Ball_4/11.png";
import bjknNumberImage12 from "@/assets/Ball_4/12.png";
import bjknNumberImage13 from "@/assets/Ball_4/13.png";
import bjknNumberImage14 from "@/assets/Ball_4/14.png";
import bjknNumberImage15 from "@/assets/Ball_4/15.png";
import bjknNumberImage16 from "@/assets/Ball_4/16.png";
import bjknNumberImage17 from "@/assets/Ball_4/17.png";
import bjknNumberImage18 from "@/assets/Ball_4/18.png";
import bjknNumberImage19 from "@/assets/Ball_4/19.png";
import bjknNumberImage20 from "@/assets/Ball_4/20.png";
import bjknNumberImage21 from "@/assets/Ball_4/21.png";
import bjknNumberImage22 from "@/assets/Ball_4/22.png";
import bjknNumberImage23 from "@/assets/Ball_4/23.png";
import bjknNumberImage24 from "@/assets/Ball_4/24.png";
import bjknNumberImage25 from "@/assets/Ball_4/25.png";
import bjknNumberImage26 from "@/assets/Ball_4/26.png";
import bjknNumberImage27 from "@/assets/Ball_4/27.png";
import bjknNumberImage28 from "@/assets/Ball_4/28.png";
import bjknNumberImage29 from "@/assets/Ball_4/29.png";
import bjknNumberImage30 from "@/assets/Ball_4/30.png";
import bjknNumberImage31 from "@/assets/Ball_4/31.png";
import bjknNumberImage32 from "@/assets/Ball_4/32.png";
import bjknNumberImage33 from "@/assets/Ball_4/33.png";
import bjknNumberImage34 from "@/assets/Ball_4/34.png";
import bjknNumberImage35 from "@/assets/Ball_4/35.png";
import bjknNumberImage36 from "@/assets/Ball_4/36.png";
import bjknNumberImage37 from "@/assets/Ball_4/37.png";
import bjknNumberImage38 from "@/assets/Ball_4/38.png";
import bjknNumberImage39 from "@/assets/Ball_4/39.png";
import bjknNumberImage40 from "@/assets/Ball_4/40.png";
import bjknNumberImage41 from "@/assets/Ball_4/41.png";
import bjknNumberImage42 from "@/assets/Ball_4/42.png";
import bjknNumberImage43 from "@/assets/Ball_4/43.png";
import bjknNumberImage44 from "@/assets/Ball_4/44.png";
import bjknNumberImage45 from "@/assets/Ball_4/45.png";
import bjknNumberImage46 from "@/assets/Ball_4/46.png";
import bjknNumberImage47 from "@/assets/Ball_4/47.png";
import bjknNumberImage48 from "@/assets/Ball_4/48.png";
import bjknNumberImage49 from "@/assets/Ball_4/49.png";
import bjknNumberImage50 from "@/assets/Ball_4/50.png";
import bjknNumberImage51 from "@/assets/Ball_4/51.png";
import bjknNumberImage52 from "@/assets/Ball_4/52.png";
import bjknNumberImage53 from "@/assets/Ball_4/53.png";
import bjknNumberImage54 from "@/assets/Ball_4/54.png";
import bjknNumberImage55 from "@/assets/Ball_4/55.png";
import bjknNumberImage56 from "@/assets/Ball_4/56.png";
import bjknNumberImage57 from "@/assets/Ball_4/57.png";
import bjknNumberImage58 from "@/assets/Ball_4/58.png";
import bjknNumberImage59 from "@/assets/Ball_4/59.png";
import bjknNumberImage60 from "@/assets/Ball_4/60.png";
import bjknNumberImage61 from "@/assets/Ball_4/61.png";
import bjknNumberImage62 from "@/assets/Ball_4/62.png";
import bjknNumberImage63 from "@/assets/Ball_4/63.png";
import bjknNumberImage64 from "@/assets/Ball_4/64.png";
import bjknNumberImage65 from "@/assets/Ball_4/65.png";
import bjknNumberImage66 from "@/assets/Ball_4/66.png";
import bjknNumberImage67 from "@/assets/Ball_4/67.png";
import bjknNumberImage68 from "@/assets/Ball_4/68.png";
import bjknNumberImage69 from "@/assets/Ball_4/69.png";
import bjknNumberImage70 from "@/assets/Ball_4/70.png";
import bjknNumberImage71 from "@/assets/Ball_4/71.png";
import bjknNumberImage72 from "@/assets/Ball_4/72.png";
import bjknNumberImage73 from "@/assets/Ball_4/73.png";
import bjknNumberImage74 from "@/assets/Ball_4/74.png";
import bjknNumberImage75 from "@/assets/Ball_4/75.png";
import bjknNumberImage76 from "@/assets/Ball_4/76.png";
import bjknNumberImage77 from "@/assets/Ball_4/77.png";
import bjknNumberImage78 from "@/assets/Ball_4/78.png";
import bjknNumberImage79 from "@/assets/Ball_4/79.png";
import bjknNumberImage80 from "@/assets/Ball_4/80.png";

export default {
  props: {
    refresh: Boolean,
  },
  setup() {
    const { dispatchBJKNResultList } = bjknResultStore();
    const { dispatchCheckoutBJKNResult } = bjknResultStore();
    return {
      dispatchBJKNResultList,
      dispatchCheckoutBJKNResult,
    };
  },
  data() {
    return {
      numberImageArray: [
        bjknNumberImage1,
        bjknNumberImage2,
        bjknNumberImage3,
        bjknNumberImage4,
        bjknNumberImage5,
        bjknNumberImage6,
        bjknNumberImage7,
        bjknNumberImage8,
        bjknNumberImage9,
        bjknNumberImage10,
        bjknNumberImage11,
        bjknNumberImage12,
        bjknNumberImage13,
        bjknNumberImage14,
        bjknNumberImage15,
        bjknNumberImage16,
        bjknNumberImage17,
        bjknNumberImage18,
        bjknNumberImage19,
        bjknNumberImage20,
        bjknNumberImage21,
        bjknNumberImage22,
        bjknNumberImage23,
        bjknNumberImage24,
        bjknNumberImage25,
        bjknNumberImage26,
        bjknNumberImage27,
        bjknNumberImage28,
        bjknNumberImage29,
        bjknNumberImage30,
        bjknNumberImage31,
        bjknNumberImage32,
        bjknNumberImage33,
        bjknNumberImage34,
        bjknNumberImage35,
        bjknNumberImage36,
        bjknNumberImage37,
        bjknNumberImage38,
        bjknNumberImage39,
        bjknNumberImage40,
        bjknNumberImage41,
        bjknNumberImage42,
        bjknNumberImage43,
        bjknNumberImage44,
        bjknNumberImage45,
        bjknNumberImage46,
        bjknNumberImage47,
        bjknNumberImage48,
        bjknNumberImage49,
        bjknNumberImage50,
        bjknNumberImage51,
        bjknNumberImage52,
        bjknNumberImage53,
        bjknNumberImage54,
        bjknNumberImage55,
        bjknNumberImage56,
        bjknNumberImage57,
        bjknNumberImage58,
        bjknNumberImage59,
        bjknNumberImage60,
        bjknNumberImage61,
        bjknNumberImage62,
        bjknNumberImage63,
        bjknNumberImage64,
        bjknNumberImage65,
        bjknNumberImage66,
        bjknNumberImage67,
        bjknNumberImage68,
        bjknNumberImage69,
        bjknNumberImage70,
        bjknNumberImage71,
        bjknNumberImage72,
        bjknNumberImage73,
        bjknNumberImage74,
        bjknNumberImage75,
        bjknNumberImage76,
        bjknNumberImage77,
        bjknNumberImage78,
        bjknNumberImage79,
        bjknNumberImage80,
      ],
      loading: false,
      formData: {
        g_type: "BJKN",
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
    getBJKNResultByFilter: async function () {
      this.formData.query_time = moment(this.formData.query_time).format("YYYY-MM-DD");
      this.loading = true;
      await this.dispatchBJKNResultList(this.formData);
      this.loading = false;
    },
    reSettlement: async function (lottery_type, qishu) {
      let formData = {
        qishu: qishu,
        jsType: 1,
        type: lottery_type,
        g_type: "BJKN",
        title: "重新结算",
      };
      this.loading = true;
      await this.dispatchCheckoutBJKNResult(formData);
      await this.dispatchBJKNResultList(this.formData);
      this.successResult();
      this.loading = false;
    },
    checkout: async function (lottery_type, qishu) {
      let formData = {
        qishu: qishu,
        jsType: 0,
        type: lottery_type,
        g_type: "BJKN",
        title: "点击结算",
      };
      this.loading = true;
      await this.dispatchCheckoutBJKNResult(formData);
      await this.dispatchBJKNResultList(this.formData);
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
    bjknResultList: function () {
      const { getBJKNResultList } = bjknResultStore();
      return getBJKNResultList;
    },
    success: function () {
      const { getSuccess } = bjknResultStore();
      return getSuccess;
    },
  },
  watch: {
    refresh: async function () {
      this.loading = true;
      await this.dispatchBJKNResultList(this.formData);
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.dispatchBJKNResultList(this.formData);
    this.loading = false;
  },
};
</script>
<style lang="scss" scoped></style>
