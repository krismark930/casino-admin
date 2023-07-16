<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: left; margin: 1rem;"
  >
    <h3>查询注单</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item label="真人账号">
        <el-input
          clearable
          v-model="formData.user"
          placeholder=""
        ></el-input>
      </el-form-item>
      <el-form-item label="注单日期">
        <el-date-picker
          v-model="formData.date"
          placeholder=""
          value-format="YYYY-MM-DD"
          style="width: 150px;"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="getQueryResultByFilter">确认</el-button>
      </el-form-item>
      <el-form-item label="平台">
        <el-select v-model="formData.platformType" style="width: 100px;">
          <el-option
            v-for="item in platformOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="formData.type" style="width: 150px;">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-table
      :data="queryList"
      v-loading="loading"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column type="index" :index="indexMethod" label="编号" align="center" />
      <el-table-column property="playerName" label="真人帐号" align="center" />
      <el-table-column label="投注时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.betTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="派彩时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.recalcuTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="GameName" label="投注类型" align="center" />
      <el-table-column
        property="playType"
        label="投注内容"
        align="center"
      />
      <el-table-column
        label="返水状态"
        align="center"
      >
        <template #default="scope">
          <font color=blue v-if="scope.row.isFS == 1">已返水</font>
          <font color=red v-else>未返水</font>
        </template>
      </el-table-column>
      <el-table-column property="betAmount" label="投注金额" align="center" />
      <el-table-column
        property="validBetAmount"
        label="有效投注额"
        align="center"
      />
      <el-table-column property="netAmount" label="结果" align="center" />
      <el-table-column property="billNo" label="定单号" align="center" />
      <el-table-column property="gameCode" label="游戏局号" align="center" />
      <el-table-column property="tableCode" label="桌号" align="center" />
      <el-table-column property="platformType" label="平台" align="center" />
      <el-table-column property="loginIP" label="玩家IP" align="center" />
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="totalCount" 
        :page-size="20"
        @current-change="onPageChange"
        v-model:current-page="formData.page_no" />
    </div>
  </div>
</template>
<script>
import { humanManagementStore } from "@/pinia/modules/human_management.js";
import moment from "moment-timezone";
export default {
  setup() {
    const {dispatchQuery} = humanManagementStore();
    return {
      dispatchQuery
    }
  },
  data() {
    return {
      loading: false,
      formData: {
        date: moment().tz("Asia/Hong_Kong").format("YYYY-MM-DD"),
        user: '',
        platformType: '',
        type: '',
        page_no: 1,
      },
      platformOptions: [
        {
          value: '',
          label: '全部',
        },
        {
          value: 'AGIN',
          label: 'AG真人',
        },
        {
          value: 'XIN',
          label: 'AG电子',
        },
        {
          value: 'OG',
          label: 'OG平台',
        },
        {
          value: 'BBIN',
          label: 'BBIN平台',
        },
        {
          value: 'MG',
          label: 'MG平台',
        },
        {
          value: 'PT',
          label: 'PT平台',
        },
        {
          value: 'YOPLAY',
          label: 'YOPLAY电子',
        },
      ],
      typeOptions: [
        {
          value: '',
          label: '全部',
        },
        {
          value: '百家乐',
          label: '百家乐',
        },
        {
          value: '包桌百家乐',
          label: '包桌百家乐',
        },
        {
          value: '连环百家乐',
          label: '连环百家乐',
        },
        {
          value: '标准百家乐',
          label: '标准百家乐',
        },
        {
          value: '免佣百家乐',
          label: '免佣百家乐',
        },
        {
          value: '超级百家乐',
          label: '超级百家乐',
        },
        {
          value: '标准连环百家乐',
          label: '标准连环百家乐',
        },
        {
          value: '免佣连环百家乐',
          label: '免佣连环百家乐',
        },
        {
          value: '德州',
          label: '德州',
        },
        {
          value: '龙虎',
          label: '龙虎',
        },
        {
          value: '骰宝',
          label: '骰宝',
        },
        {
          value: '轮盘',
          label: '轮盘',
        },
        {
          value: '番摊',
          label: '番摊',
        },
        {
          value: '竞咪百家乐',
          label: '竞咪百家乐',
        },
        {
          value: '终极德州扑克',
          label: '终极德州扑克',
        },
        {
          value: '保險百家樂',
          label: '保險百家樂',
        },
        {
          value: '牛牛',
          label: '牛牛',
        },
        {
          value: '21点',
          label: '21点',
        },
        {
          value: '炸金花',
          label: '炸金花',
        },
        {
          value: '电子游艺',
          label: '电子游艺',
        },
      ],
    }
  },
  methods: {
    getQueryResultByFilter: async function() {
      this.loading = true;
      await this.dispatchQuery(this.formData);
      this.loading = false;
    },
    onPageChange: async function() {
      this.loading = true;
      await this.dispatchQuery(this.formData);
      this.loading = false;
    },
    indexMethod: function(index) {
      return index + 1 + (this.formData.page_no - 1) * 20;
    }
  },
  computed: {
    queryList: function() {
      const {getQueryList} = humanManagementStore();
      return getQueryList;
    },
    totalCount: function() {
      const {getTotalCount} = humanManagementStore();
      return getTotalCount;
    }
  },
  async mounted() {
    this.loading = true;
    await this.dispatchQuery(this.formData);
    this.loading = false;
  }
}
</script>
<style lang="scss" scoped>
.pagination {
  margin-top: 10px;
  text-align: center;
  display: inline-flex;
}
</style>
