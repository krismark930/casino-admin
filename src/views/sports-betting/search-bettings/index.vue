<template>
  <div
    style="
      border: 1px solid #eee;
      padding: 0.75rem;
      margin-top: 0.75rem;
      text-align: center;
      margin: 1rem;
    "
  >
    <h3>{{ $t("menu.searchBettings") }}</h3>
    <el-form :inline="true" :model="formData">
      <div>
        <el-form-item label="">
          <el-button type="primary" @click="getItems">手动更新</el-button>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="formData.timeOption" style="width: 80px" @change="getItems">
            <el-option
              v-for="item in timeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <span style="margin-left: 10px">{{ timerCount + "秒" }}</span>
        </el-form-item>
        <el-form-item label="会员帐号">
          <el-input clearable v-model="formData.keyword" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="注单日期">
          <el-date-picker
            v-model="formData.betDate"
            placeholder=""
            value-format="YYYY-MM-DD"
            style="width: 150px"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" @click="getItems">确认</el-button>
        </el-form-item>
        <el-form-item label="投注状态">
          <el-select v-model="formData.betStatusOption" style="width: 80px">
            <el-option
              v-for="item in betStatusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div>
        <el-form-item>
          <el-select
            v-model="formData.sortOption"
            style="width: 100px"
            @change="getItems"
          >
            <el-option
              v-for="item in sortOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="formData.ballOption" style="width: 80px" @change="getItems">
            <el-option
              v-for="item in ballOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select
            v-model="formData.typeOption"
            style="width: 150px"
            @change="getItems"
          >
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
    </el-form>
    <el-table
      :data="searchBettingData"
      style="width: 100%"
      border
      header-align="center"
      stripe
      v-loading="loading"
    >
      <el-table-column property="userName" label="用户名称" align="center">
        <template #default="scope">
          <div style="cursor: pointer" @click="goCountUserPage(scope.row.userName)">
            {{ scope.row.userName }}<br />
            <font color="#cc0000">
              {{ scope.row.OpenType }}&nbsp;&nbsp;{{ scope.row.TurnRate }}
            </font>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="minutes" label="分钟数" align="center">
        <template #default="scope">
          <div v-html="scope.row.minutes"></div>
        </template>
      </el-table-column>
      <el-table-column label="投注时间" width="130" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon>
              <timer />
            </el-icon>
            <span style="margin-left: 10px" v-html="scope.row.bettingTime"></span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="开始时间" width="130" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon>
              <timer />
            </el-icon>
            <span style="margin-left: 10px">{{ scope.row.startingTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="gameType" label="球赛种类" align="center">
        <template #default="scope">
          <div v-html="scope.row.gameType"></div>
          <div style="color: blue; font-weight: bold">{{ scope.row.OrderID }}</div>
        </template>
      </el-table-column>
      <el-table-column property="content" label="內容" align="center" width="200">
        <template #default="scope">
          <div v-html="scope.row.content"></div>
        </template>
      </el-table-column>
      <el-table-column property="state" label="状态" align="center">
        <template #default="scope">
          <div v-html="scope.row.state" @click="toOperation(scope.row)" style="cursor: pointer;"></div>
        </template>
      </el-table-column>
      <el-table-column property="betAmount" label="投注金额" align="center">
        <template #default="scope">
          <div v-html="scope.row.betAmount"></div>
        </template>
      </el-table-column>
      <el-table-column property="winableAmount" label="可赢金额" align="center" />
      <el-table-column property="memberResult" label="会员结果" align="center">
        <template #default="scope">
          <div v-html="scope.row.memberResult"></div>
        </template>
      </el-table-column>
      <el-table-column property="betSlip" label="注单" align="center">
        <template #default="scope">
          <div v-html="scope.row.betSlip"></div>
        </template>
      </el-table-column>
      <el-table-column property="function" label="功能" align="center" width="180">
        <template #default="scope">
          <el-select style="width: 110px" v-model="functions[scope.$index]">
            <el-option
              v-for="(item, index) in functionOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              @click="($event) => handleClick(scope.row, index)"
            ></el-option>
          </el-select>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totalCount"
        :page-size="20"
        @current-change="onPageChange"
        v-model:current-page="page"
      />
    </div>
  </div>
  <el-backtop :right="60" :bottom="60" target=".main" />
</template>
<script>
import {
  GetItems,
  GetFunctionItems,
  ResumeEvent,
  CancelEvent,
  BalanceEvent,
} from "@/api/sports/search-betting";
import { useRouter } from "vue-router";
import { formatDate } from "@/utils";

const keyValues = [
  { key: "", confirmed: "" },
  {
    key: "resume",
    confirmed: "",
  },
  {
    key: "cancel",
    confirmed: "-1",
  },
  {
    key: "cancel",
    confirmed: "-2",
  },
  {
    key: "cancel",
    confirmed: "-3",
  },
  {
    key: "cancel",
    confirmed: "-4",
  },
  {
    key: "cancel",
    confirmed: "-5",
  },
  {
    key: "cancel",
    confirmed: "-6",
  },
  {
    key: "cancel",
    confirmed: "-7",
  },
  {
    key: "cancel",
    confirmed: "-8",
  },
  {
    key: "cancel",
    confirmed: "-9",
  },
  {
    key: "cancel",
    confirmed: "-10",
  },
  {
    key: "cancel",
    confirmed: "-11",
  },
  {
    key: "cancel",
    confirmed: "-12",
  },
  {
    key: "cancel",
    confirmed: "-13",
  },
  {
    key: "cancel",
    confirmed: "-14",
  },
  {
    key: "cancel",
    confirmed: "-15",
  },
  {
    key: "cancel",
    confirmed: "-16",
  },
  {
    key: "cancel",
    confirmed: "-17",
  },
  {
    key: "cancel",
    confirmed: "-18",
  },
  {
    key: "cancel",
    confirmed: "-19",
  },
  {
    key: "cancel",
    confirmed: "-20",
  },
  {
    key: "cancel",
    confirmed: "-21",
  },
  {
    key: "balance",
    confirmed: "11",
  },
  {
    key: "balance",
    confirmed: "12",
  },
  {
    key: "balance",
    confirmed: "13",
  },
  {
    key: "balance",
    confirmed: "14",
  },
  {
    key: "balance",
    confirmed: "15",
  },
];

export default {
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  data() {
    return {
      formData: {
        betDate: formatDate(new Date()),
        keyword: "",
        typeOption: "",
        betStatusOption: "all",
        sortOption: "",
        ballOption: "",
        timeOption: 180,
      },
      searchBettingData: [
        {
          userName: "",
          minutes: "",
          bettingTime: "",
          startingTime: "",
          gameType: "",
          content: "",
          state: "",
          betAmount: "",
          winableAmount: "",
          memberResult: "",
          betSlip: "",
          function: "",
        },
      ],
      betStatusOptions: [
        {
          value: "all",
          label: "全部",
        },
        {
          value: "Y",
          label: "有结果",
        },
        {
          value: "N",
          label: "未有结果",
        },
        {
          value: "W",
          label: "客户赢钱",
        },
        {
          value: "W>=500",
          label: "赢钱>=500",
        },
        {
          value: ">=100",
          label: ">=100",
        },
        {
          value: ">=500",
          label: ">=500",
        },
        {
          value: ">=1000",
          label: ">=1000",
        },
        {
          value: ">=5000",
          label: ">=5000",
        },
        {
          value: ">=10000",
          label: ">=10000",
        },
      ],
      sortOptions: [
        {
          label: "投注时间",
          value: "BetTime",
        },
        {
          label: "投注金额",
          value: "Gwin",
        },
        {
          label: "取消注单",
          value: "Cancel",
        },
        {
          label: "危险注单",
          value: "Danger",
        },
      ],
      ballOptions: [
        {
          value: "",
          label: "全部",
        },
        {
          value: "1",
          label: "足球",
        },
        {
          value: "2",
          label: "篮球",
        },
        {
          value: "3",
          label: "棒球",
        },
        {
          value: "4",
          label: "网球",
        },
        {
          value: "5",
          label: "排球",
        },
        {
          value: "6",
          label: "其它",
        },
      ],
      typeOptions: [
        {
          value: "",
          label: "全部",
        },
        {
          value: "M",
          label: "全场獨贏",
        },
        {
          value: "R",
          label: "全场讓球",
        },
        {
          value: "OU",
          label: "全场大小球",
        },
        {
          value: "EO",
          label: "全场單雙",
        },
        {
          value: "VM",
          label: "上半場獨贏",
        },
        {
          value: "VR",
          label: "上半場讓球",
        },
        {
          value: "VOU",
          label: "上半場大小",
        },
        {
          value: "VEO",
          label: "上半場單雙",
        },
        {
          value: "QR",
          label: "单节讓球",
        },
        {
          value: "QOU",
          label: "单节大小",
        },
        {
          value: "QEO",
          label: "单节單雙",
        },
        {
          value: "RM",
          label: "滾球獨贏",
        },
        {
          value: "RE",
          label: "滾球讓球",
        },
        {
          value: "ROU",
          label: "滾球大小",
        },
        {
          value: "VRM",
          label: "滾球上半場獨贏",
        },
        {
          value: "VRE",
          label: "滾球上半場讓球",
        },
        {
          value: "VROU",
          label: "滾球上半場大小",
        },
        {
          value: "URE",
          label: "滾球下半場讓球",
        },
        {
          value: "UROU",
          label: "滾球下半場大小球",
        },
        {
          value: "PD",
          label: "波膽",
        },
        {
          value: "VPD",
          label: "上半場波膽",
        },
        {
          value: "T",
          label: "總入球",
        },
        {
          value: "F",
          label: "半全場",
        },
        {
          value: "PC",
          label: "混合過關",
        },
        {
          value: "CS",
          label: "冠軍賽",
        },
      ],
      timeOptions: [
        {
          value: 10,
          label: "10秒",
        },
        {
          value: 30,
          label: "30秒",
        },
        {
          value: 60,
          label: "60秒",
        },
        {
          value: 90,
          label: "90秒",
        },
        {
          value: 120,
          label: "120秒",
        },
        {
          value: 180,
          label: "180秒",
        },
      ],

      functionOptions: [{ value: "注单处理", label: "注单处理" }],
      functions: [],
      loading: false,
      timerCount: 180,
      timer: null,
      totalCount: 0,
      page: 1,
    };
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          this.timer = setTimeout(() => {
            this.timerCount--;
          }, 1000);
        } else {
          this.getItems();
          this.timerCount = this.formData.timeOption;
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
    "formData.timeOption": {
      handler(value) {
        this.restartCountdown();
      },
    },
  },
  beforeUnmount() {
    clearTimeout(this.timer);
  },
  mounted() {
    this.getItems();
    this.getFunctionItems();
  },
  methods: {
    goCountUserPage(userName) {
      this.router.push({ name: "agents.count_user", query: { userName: userName } });
    },
    deleteDepositData(index, row) {
      console.log(index, row);
    },
    toOperation: function (item) {
      console.log(item.g_type);
      if (item.memberResult == "<font></font>") {
        this.router.push({ path: '/check-scores2/operate/' + item.m_id, query: { gtype: item.g_type, title: "审核比分" } })
      }
    },
    restartCountdown() {
      clearTimeout(this.timer);
      if (this.timerCount !== this.formData.timeOption) {
        this.timerCount = this.formData.timeOption;
      } else {
        this.timer = setTimeout(() => {
          this.timerCount--;
        }, 1000);
      }
    },
    handleClick(item, index) {
      if (index) {
        if (keyValues[index].key === "resume") {
          if (confirm("确实恢复本场注单吗?")) {
            ResumeEvent({
              id: item.id,
              gid: item.gid,
              confirmed: keyValues[index].confirmed,
            })
              .then((res) => {
                if (res) {
                  alert(res);
                }
                this.getItems();
              })
              .catch((err) => {
                alert(err?.response?.data);
                console.error("resume event error", err?.response?.data);
              });
          }
        } else if (keyValues[index].key === "cancel") {
          if (confirm("确实取消本注单吗?")) {
            CancelEvent({
              id: item.id,
              gid: item.gid,
              confirmed: keyValues[index].confirmed,
            })
              .then((res) => {
                if (res) {
                  alert(res);
                }
                this.getItems();
              })
              .catch((err) => {
                alert(err?.response?.data);
                console.error("cancel event error", err?.response?.data);
              });
          }
        } else if (keyValues[index].key === "balance") {
          if (confirm("确实结算本场注单吗?")) {
            BalanceEvent({
              id: item.id,
              gid: item.gid,
              confirmed: keyValues[index].confirmed,
            })
              .then((res) => {
                if (res) {
                  alert(res);
                }
                this.getItems();
              })
              .catch((err) => {
                alert(err?.response?.data);
                console.error("balance event error", err?.response?.data);
              });
          }
        }
      }
    },
    getItems() {
      this.loading = true;
      GetItems({
        m_date: this.formData.betDate,
        username: this.formData.keyword,
        result_type: this.formData.betStatusOption,
        sort: this.formData.sortOption,
        ball: this.formData.ballOption,
        type: this.formData.typeOption,
        page: this.page,
      })
        .then((res) => {
          this.searchBettingData = [...res.data];
          this.totalCount = res.totalCount;
          this.loading = false;
          this.functions = [...Array(data.length)].map((_) => "注单处理");
          this.restartCountdown();
        })
        .catch((err) => {
          this.loading = false;
          this.restartCountdown();
        });
    },
    getFunctionItems() {
      GetFunctionItems()
        .then((data) => {
          this.functionOptions = [...this.functionOptions, ...data];
        })
        .catch((err) => console.error("get function items", err));
    },
    onPageChange(currentPage) {
      this.getItems();
    },
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
