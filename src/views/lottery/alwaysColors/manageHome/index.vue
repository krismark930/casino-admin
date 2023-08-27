<template>
  <div
    style="
      border: 1px solid #eee;
      padding: 0.75rem;
      margin-top: 0.75rem;
      text-align: left;
    "
  >
    <h3>彩票注单查询</h3>
    <el-form :inline="true" :model="formData">
      <div style="margin-bottom: 20px">
        <el-form-item label="">
          <div class="statistic-card">
            <el-statistic precision="2" :value="totalItem.t_allmoney" suffix="元">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  当前页总投注金额
                </div>
              </template>
            </el-statistic>
          </div>
        </el-form-item>
        <el-form-item label="">
          <div class="statistic-card">
            <el-statistic precision="2" :value="totalItem.t_sy" suffix="元">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  当前页输赢统计（会员结果）
                </div>
              </template>
            </el-statistic>
          </div>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="">
          <el-select v-model="formData.type" placeholder="" style="width: 130px">
            <el-option
              v-for="item in typeOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="formData.js" placeholder="" style="width: 130px">
            <el-option
              v-for="item in jsOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="会员">
          <el-input clearable v-model="formData.user_name" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker v-model="formData.s_time" type="date" placeholder="开始日期" />
          &nbsp;~&nbsp;
          <el-date-picker v-model="formData.e_time" type="date" placeholder="结束日期" />
        </el-form-item>
        <el-form-item label="期数">
          <el-input clearable v-model="formData.qishu" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="订单号">
          <el-input clearable v-model="formData.tf_id" placeholder=""></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getOrderListByFilter">搜索</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-table
      :data="orderList"
      :row-class-name="tableRowClassName"
      v-loading="loading"
      style="width: 100%"
      border
      header-align="center"
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
      <el-table-column property="money_result" label="会员结果" align="center">
        <template #default="scope">
          <Font color="red" v-if="scope.row.is_win == 1">{{scope.row.money_result}}</Font>
          <Font v-else>{{scope.row.money_result}}</Font>
        </template>
      </el-table-column>
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
      <el-table-column fixed="right" align="center" width="170px">
        <template #header>
          <el-space>
            <span>状态</span>
            <el-button type="primary" size="small" @click="orderCancelAll"
              >批量作废</el-button
            >
            <el-checkbox v-model="allChecked" />
          </el-space>
        </template>
        <template #default="scope">
          <div v-if="scope.row.status == 0">
            <el-space>
              <font color="#0000FF">未结算</font>--<font
                color="#ffcccc"
                style="cursor: pointer"
                @click="cancelOrder(scope.row.id)"
                >作废</font
              >
              <el-checkbox v-model="scope.row.checked" />
            </el-space>
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
    <div class="pagination">
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
    const tableRowClassName = ({
      row
    }) => {
      if (row.is_win == 1) {
        console.log(row.is_win);
        return 'warning-row'
      }
      return ''
    }
    const { dispatchOrderList } = manageHomeStore();
    const { dispatchCancelOrderAll } = manageHomeStore();
    const { dispatchAllChecked } = manageHomeStore();
    return {
      dispatchOrderList,
      dispatchCancelOrderAll,
      dispatchAllChecked,
      tableRowClassName
    };
  },
  data() {
    return {
      loading: false,
      allChecked: false,
      formData: {
        page: 1,
        status: 0,
        type: "ALL_LOTTERY",
        js: "0,1,2,3",
        user_name: "",
        s_time: moment("2021-06-01").format("YYYY-MM-DD"),
        e_time: moment().format("YYYY-MM-DD"),
        qishu: "",
      },
      typeOption: [
        {
          value: "ALL_LOTTERY",
          label: "全部彩票",
        },
        {
          value: "CQ",
          label: "重庆时时彩",
        },
        {
          value: "JX",
          label: "新疆时时彩",
        },
        {
          value: "TJ",
          label: "天津时时彩",
        },
        {
          value: "GDSF",
          label: "广东十分彩",
        },
        {
          value: "GXSF",
          label: "广西十分彩",
        },
        {
          value: "TJSF",
          label: "天津十分彩",
        },
        {
          value: "CQSF",
          label: "重庆十分彩",
        },
        {
          value: "BJKN",
          label: "北京快乐8",
        },
        {
          value: "BJPK",
          label: "北京PK拾",
        },
        {
          value: "GD11",
          label: "广东11选5",
        },
        {
          value: "D3",
          label: "3D彩",
        },
        {
          value: "P3",
          label: "排列三",
        },
        {
          value: "T3",
          label: "上海时时乐",
        },
        {
          value: "XYFT",
          label: "幸运飞艇",
        },
        {
          value: "FFC5",
          label: "五分彩",
        },
        {
          value: "TXSSC",
          label: "腾讯时时彩",
        },
        {
          value: "TWSSC",
          label: "台湾时时彩",
        },
        {
          value: "AZXY5",
          label: "澳洲幸运5",
        },
        {
          value: "AZXY10",
          label: "澳洲幸运10",
        },
      ],
      jsOption: [
        {
          value: "0",
          label: "未结算注单",
        },
        {
          value: "1",
          label: "已结算注单",
        },
        {
          value: "2",
          label: "已重算注单",
        },
        {
          value: "3",
          label: "作废注单",
        },
        {
          value: "0,1,2,3",
          label: "全部注单",
        },
      ],
    };
  },
  computed: {
    orderList: function () {
      const { getOrderList } = manageHomeStore();
      return getOrderList;
    },
    totalItem: function () {
      const { getTotalItem } = manageHomeStore();
      return getTotalItem;
    },
  },
  watch: {
    allChecked: function (newValue) {
      this.dispatchAllChecked(newValue);
    },
  },
  methods: {
    onPageChange: async function () {
      this.loading = true;
      this.formData.s_time = moment(this.formData.s_time).format("YYYY-MM-DD");
      this.formData.e_time = moment(this.formData.e_time).format("YYYY-MM-DD");
      await this.dispatchOrderList(this.formData);
      this.loading = false;
    },
    getOrderListByFilter: async function () {
      this.loading = true;
      this.formData.s_time = moment(this.formData.s_time).format("YYYY-MM-DD");
      this.formData.e_time = moment(this.formData.e_time).format("YYYY-MM-DD");
      await this.dispatchOrderList(this.formData);
      this.loading = false;
    },
    cancelOrder: async function (id) {
      var sResult = prompt("请在下面输入作废的理由", "");
      this.loading = true;
      let data = {
        ...this.formData,
        zf: 1,
        id: id,
        cancel_reason: sResult,
      };
      await this.dispatchOrderList(data);
      this.loading = false;
    },
    orderCancelAll: async function () {
      if (!this.allChecked) {
        ElNotification({
          title: "错误",
          message: "您未选中任何复选框。",
          type: "error",
        });
        return;
      }
      var sResult = prompt("请在下面输入作废的理由", "");
      let ids = this.orderList
        .filter((item) => Number(item.status) === 0)
        .map((item) => item.id)
        .toString();
      this.loading = true;
      await this.dispatchCancelOrderAll({ ids: ids, cancel_reason: sResult });
      this.formData.s_time = moment(this.formData.s_time).format("YYYY-MM-DD");
      this.formData.e_time = moment(this.formData.e_time).format("YYYY-MM-DD");
      await this.dispatchOrderList(this.formData);
      this.loading = false;
      this.allChecked = false;
    },
  },
  async mounted() {
    this.loading = true;
    this.formData.s_time = moment(this.formData.s_time).format("YYYY-MM-DD");
    this.formData.e_time = moment(this.formData.e_time).format("YYYY-MM-DD");
    await this.dispatchOrderList(this.formData);
    this.loading = false;
  },
};
</script>
<style lang="scss">
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}

:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--el-fill-color) !important;
}

.el-statistic {
  --el-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding: 10px;
  border-radius: 4px;
  background-color: var(--el-bg-color-overlay);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--el-text-color-regular);
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--el-color-success);
}

.red {
  color: var(--el-color-error);
}

.el-table .warning-row {
  background-color: #ffff00 !important;
}
</style>
