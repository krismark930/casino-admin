<template>
  <div
    style="
      border: 1px solid #eee;
      padding: 0.75rem;
      margin-top: 0.75rem;
      text-align: left;
    "
  >
    <h3>报表明细</h3>
    <el-form :inline="true" :model="formData">
      <div>
        <el-form-item label="日期">
          <el-date-picker v-model="formData.s_time" type="date" placeholder="开始日期" />
          &nbsp;~&nbsp;
          <el-date-picker v-model="formData.e_time" type="date" placeholder="结束日期" />
        </el-form-item>
        <el-form-item label="" style="display: inline-flex">
          <el-button type="primary" @click="setDate('today')">今日</el-button>
          <el-button type="primary" @click="setDate('yesterday')">昨日</el-button>
          <el-button type="primary" @click="setDate('thisWeek')">本周</el-button>
          <el-button type="primary" @click="setDate('lastWeek')">上周</el-button>
          <el-button type="primary" @click="setDate('thisMonth')">本月</el-button>
          <el-button type="primary" @click="setDate('lastMonth')">上月</el-button>
          <el-button type="primary" @click="setDate('lastSeven')">最近7天</el-button>
          <el-button type="primary" @click="setDate('lastThirty')">最近30天</el-button>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="">
          <el-select v-model="monthOption" style="width: 100px" placeholder="选择月份">
            <el-option
              v-for="item in monthOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input
            v-model="formData.user_group"
            placeholder="(多个用户用 , 隔开)"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="忽略用户名">
          <el-input
            v-model="formData.user_ignore_group"
            placeholder="(多个用户用 , 隔开)"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" @click="getHistoryListByFilter">搜索</el-button>
          <el-button type="danger" @click="back" v-if="!lotteryHistoryAllShow">
            返回上一页
          </el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-table
      :data="lotteryHistoryAllList"
      v-loading="loading"
      style="width: 100%"
      border
      header-align="center"
      show-summary
      stripe
      v-if="lotteryHistoryAllShow"
    >
      <el-table-column property="g_type" label="游戏名称" align="center">
        <template #default="scope">
          <font
            color="red"
            style="cursor: pointer"
            @click="getUserLottery(scope.row.gtype)"
          >
            <b>{{ scope.row.g_type }}</b>
          </font>
        </template>
      </el-table-column>
      <el-table-column property="bet_count" label="下注笔数" align="center" />
      <el-table-column property="bet_money" label="下注金额" align="center" />
      <el-table-column property="valid_bet_money" label="有效金额" align="center" />
      <el-table-column property="bet_money_diff_1" label="会员结果" align="center" />
      <el-table-column property="bet_money_diff_2" label="赢取金额" align="center" />
    </el-table>
    <el-table
      :data="userLotteryList"
      v-loading="loading"
      style="width: 100%"
      border
      header-align="center"
      stripe
      v-if="userLotteryShow"
    >
      <el-table-column property="lottery_name" label="游戏名称" align="center">
      </el-table-column>
      <el-table-column property="bet_count" label="游戏名称" align="center">
        <template #default="scope">
          <font
            color="red"
            style="cursor: pointer"
            @click="getDetailLottery(scope.row.UserName)"
          >
            <b>{{ scope.row.UserName }}</b>
          </font>
          <font>({{ scope.row.Alias }})</font>
        </template>
      </el-table-column>
      <el-table-column property="bet_count" label="下注笔数" align="center" />
      <el-table-column property="bet_money_total" label="下注金额" align="center" />
      <el-table-column property="bet_money_total_valid" label="有效金额" align="center" />
      <el-table-column label="会员结果" align="center">
        <template #default="scope">
          {{ (scope.row.win_total - scope.row.bet_money_total_valid).toFixed(2) }}
        </template>
      </el-table-column>
      <el-table-column label="赢取金额" align="center">
        <template #default="scope">
          {{ (scope.row.bet_money_total_valid - scope.row.win_total).toFixed(2) }}
        </template>
      </el-table-column>
    </el-table>
    <el-table
      :data="detailLotteryList"
      v-loading="loading"
      style="width: 100%"
      border
      header-align="center"
      stripe
      v-if="detailLotteryShow"
    >
      <el-table-column
        property="order_sub_num"
        label="订单号"
        align="center"
        width="180px"
      />
      <el-table-column property="lottery_name" label="彩票类别" align="center" />
      <el-table-column property="qishu" label="彩票期号" align="center" />
      <el-table-column property="rtype_str" label="投注玩法" align="center" />
      <el-table-column property="content_name" label="投注内容" align="center" />
      <el-table-column property="bet_money_one" label="投注金额" align="center" />
      <el-table-column property="fs" label="反水" align="center" />
      <el-table-column property="bet_rate_one" label="赔率" align="center" />
      <el-table-column property="win_sub" label="可赢金额" align="center" />
      <el-table-column property="money_result" label="会员结果" align="center" />
      <el-table-column label="投注时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon>
              <timer />
            </el-icon>
            <span style="margin-left: 10px">{{ scope.row.bet_time }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="username" label="投注账号" align="center" />
      <el-table-column label="状态" align="center">
        <template #default="scope">
          <div v-if="scope.row.status == 0">
            <font color="#0000FF">未结算</font>
          </div>
          <div v-if="scope.row.status == 1">
            <font color="#FF0000">已结算</font>
          </div>
          <div v-if="scope.row.status == 2">
            <font color="#FF0000">已重算</font>
          </div>
          <div v-if="scope.row.status == 3">
            <font color="#FFcccc">作废</font>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div style="text: center" v-if="lotteryHistoryAllShow">
      赢取金额=下注金额-下注结果。如果是正数，说明赢钱，如果是负数，则为输钱。
    </div>
    <div style="text: center" v-if="userLotteryShow || detailLotteryShow">
      当前页总投注金额:{{ totalItem.t_allmoney }}元 当前页会员结果:{{ totalItem.t_sy }}元
    </div>
    <div class="pagination" v-if="userLotteryShow">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totalItem.count"
        :page-size="20"
        @current-change="onPageChange"
        v-model:current-page="formData.page"
      />
    </div>
  </div>
</template>
<script>
import { manageHomeStore } from "@/pinia/modules/always_color/manage_home.js";
import { ElNotification } from "element-plus";
import moment from "moment-timezone";
export default {
  setup() {
    const { dispatchLotteryHistoryAll } = manageHomeStore();
    const { dispatchUserLottery } = manageHomeStore();
    const { dispatchDetailLottery } = manageHomeStore();
    return {
      dispatchLotteryHistoryAll,
      dispatchUserLottery,
      dispatchDetailLottery,
    };
  },
  data() {
    return {
      monthOption: "",
      loading: false,
      userLotteryShow: false,
      detailLotteryShow: false,
      lotteryHistoryAllShow: true,
      formData: {
        s_time: moment("2021-06-01").format("YYYY-MM-DD"),
        e_time: moment().format("YYYY-MM-DD"),
        user_group: "",
        user_ignore_group: "",
        page: 1,
        gtype: "",
      },
      monthOptions: [
        {
          value: "1",
          label: "1月",
        },
        {
          value: "2",
          label: "2月",
        },
        {
          value: "3",
          label: "3月",
        },
        {
          value: "4",
          label: "4月",
        },
        {
          value: "5",
          label: "5月",
        },
        {
          value: "6",
          label: "6月",
        },
        {
          value: "7",
          label: "7月",
        },
        {
          value: "8",
          label: "8月",
        },
        {
          value: "9",
          label: "9月",
        },
        {
          value: "10",
          label: "10月",
        },
        {
          value: "11",
          label: "11月",
        },
        {
          value: "12",
          label: "12月",
        },
      ],
    };
  },
  computed: {
    lotteryHistoryAllList: function () {
      const { getLotteryHistoryAllList } = manageHomeStore();
      return getLotteryHistoryAllList;
    },
    userLotteryList: function () {
      const { getUserLotteryList } = manageHomeStore();
      return getUserLotteryList;
    },
    detailLotteryList: function () {
      const { getDetailLotteryList } = manageHomeStore();
      return getDetailLotteryList;
    },
    totalItem: function () {
      const { getUserTotalItem } = manageHomeStore();
      return getUserTotalItem;
    },
  },
  watch: {
    monthOption: function (newValue) {
      Date.prototype.Format = function (fmt) {
        //author: meizz
        var o = {
          "M+": this.getMonth() + 1, //月份
          "d+": this.getDate(), //日
          "h+": this.getHours(), //小时
          "m+": this.getMinutes(), //分
          "s+": this.getSeconds(), //秒
          "q+": Math.floor((this.getMonth() + 3) / 3), //季度
          S: this.getMilliseconds(), //毫秒
        };
        if (/(y+)/.test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            (this.getFullYear() + "").substr(4 - RegExp.$1.length)
          );
        for (var k in o)
          if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
            );
        return fmt;
      };
      Date.prototype.addDays = function (d) {
        this.setDate(this.getDate() + d);
      };

      Date.prototype.addWeeks = function (w) {
        this.addDays(w * 7);
      };

      Date.prototype.addMonths = function (m) {
        var d = this.getDate();
        this.setMonth(this.getMonth() + m);

        if (this.getDate() < d) this.setDate(0);
      };

      Date.prototype.addYears = function (y) {
        var m = this.getMonth();
        this.setFullYear(this.getFullYear() + y);

        if (m < this.getMonth()) {
          this.setDate(0);
        }
      };
      //测试 var now = new Date(); now.addDays(1);//加减日期操作 alert(now.Format("yyyy-MM-dd"));

      Date.prototype.dateDiff = function (interval, endTime) {
        switch (interval) {
          case "s": //計算秒差
            return parseInt((endTime - this) / 1000);
          case "n": //計算分差
            return parseInt((endTime - this) / 60000);
          case "h": //計算時差
            return parseInt((endTime - this) / 3600000);
          case "d": //計算日差
            return parseInt((endTime - this) / 86400000);
          case "w": //計算週差
            return parseInt((endTime - this) / (86400000 * 7));
          case "m": //計算月差
            return (
              endTime.getMonth() +
              1 +
              (endTime.getFullYear() - this.getFullYear()) * 12 -
              (this.getMonth() + 1)
            );
          case "y": //計算年差
            return endTime.getFullYear() - this.getFullYear();
          default:
            //輸入有誤
            return undefined;
        }
      };
      if (newValue == "") {
        return;
      }
      var dateNow = new Date();
      var dateStart;
      var dateEnd;

      dateNow.addDays(-dateNow.getDate() + 1);
      dateNow.addMonths(-dateNow.getMonth() + parseInt(newValue) - 1);
      dateStart = dateNow.Format("yyyy-MM-dd");
      dateNow.addMonths(1);
      dateNow.addDays(-1);
      dateEnd = dateNow.Format("yyyy-MM-dd");
      this.formData.s_time = dateStart;
      this.formData.e_time = dateEnd;
    },
  },
  methods: {
    back: function () {
      this.lotteryHistoryAllShow = true;
      this.userLotteryShow = false;
      this.detailLotteryShow = false;
    },
    getDetailLottery: async function (userName) {
      this.formData.user_group = userName;
      this.userLotteryShow = false;
      this.detailLotteryShow = true;
      this.loading = true;
      await this.dispatchDetailLottery(this.formData);
      this.loading = false;
    },
    getUserLottery: async function (gtype) {
      this.lotteryHistoryAllShow = false;
      this.userLotteryShow = true;
      this.formData.gtype = gtype;
      this.loading = true;
      await this.dispatchUserLottery(this.formData);
      this.loading = false;
    },
    getHistoryListByFilter: async function () {
      this.loading = true;
      this.formData.s_time = moment(this.formData.s_time).format("YYYY-MM-DD");
      this.formData.e_time = moment(this.formData.e_time).format("YYYY-MM-DD");
      if (this.lotteryHistoryAllShow) {
        await this.dispatchLotteryHistoryAll(this.formData);
      } else if (this.userLotteryShow) {
        await this.dispatchUserLottery(this.formData);
      } else if (this.detailLotteryShow) {
        await this.dispatchDetailLottery(this.formData);
      }
      this.loading = false;
    },
    setDate: function (dateType) {
      Date.prototype.Format = function (fmt) {
        //author: meizz
        var o = {
          "M+": this.getMonth() + 1, //月份
          "d+": this.getDate(), //日
          "h+": this.getHours(), //小时
          "m+": this.getMinutes(), //分
          "s+": this.getSeconds(), //秒
          "q+": Math.floor((this.getMonth() + 3) / 3), //季度
          S: this.getMilliseconds(), //毫秒
        };
        if (/(y+)/.test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            (this.getFullYear() + "").substr(4 - RegExp.$1.length)
          );
        for (var k in o)
          if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
            );
        return fmt;
      };
      Date.prototype.addDays = function (d) {
        this.setDate(this.getDate() + d);
      };
      var dateNow = new Date();
      var dateStart;
      var dateEnd;
      if (dateType == "today") {
        dateStart = dateNow.Format("yyyy-MM-dd");
        dateEnd = dateNow.Format("yyyy-MM-dd");
      } else if (dateType == "yesterday") {
        dateNow.addDays(-1);
        dateStart = dateNow.Format("yyyy-MM-dd");
        dateEnd = dateNow.Format("yyyy-MM-dd");
      } else if (dateType == "lastSeven") {
        //最近7天
        dateEnd = dateNow.Format("yyyy-MM-dd");
        dateNow.addDays(-6);
        dateStart = dateNow.Format("yyyy-MM-dd");
      } else if (dateType == "lastThirty") {
        //最近30天
        dateEnd = dateNow.Format("yyyy-MM-dd");
        dateNow.addDays(-29);
        dateStart = dateNow.Format("yyyy-MM-dd");
      } else if (dateType == "thisWeek") {
        //本周
        dateEnd = dateNow.Format("yyyy-MM-dd");
        dateNow.addDays(-dateNow.getDay());
        dateStart = dateNow.Format("yyyy-MM-dd");
      } else if (dateType == "lastWeek") {
        //上周
        dateNow.addDays(-dateNow.getDay() - 1);
        dateEnd = dateNow.Format("yyyy-MM-dd");
        dateNow.addDays(-6);
        dateStart = dateNow.Format("yyyy-MM-dd");
      } else if (dateType == "thisMonth") {
        //本月
        dateEnd = dateNow.Format("yyyy-MM-dd");
        dateNow.addDays(-dateNow.getDate() + 1);
        dateStart = dateNow.Format("yyyy-MM-dd");
      } else if (dateType == "lastMonth") {
        //上月
        dateNow.addDays(-dateNow.getDate());
        dateEnd = dateNow.Format("yyyy-MM-dd");
        dateNow.addDays(-dateNow.getDate() + 1);
        dateStart = dateNow.Format("yyyy-MM-dd");
      }
      console.log(dateStart);
      this.formData.s_time = dateStart;
      this.formData.e_time = dateEnd;
    },
  },
  async mounted() {
    this.loading = true;
    this.formData.s_time = moment(this.formData.s_time).format("YYYY-MM-DD");
    this.formData.e_time = moment(this.formData.e_time).format("YYYY-MM-DD");
    await this.dispatchLotteryHistoryAll(this.formData);
    this.loading = false;
  },
};
</script>
<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}
</style>
