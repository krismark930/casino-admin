<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <h3>彩票注单查询</h3>
    <el-form :inline="true" :model="formData">
      <div>
        <el-form-item label="">
          <div class="statistic-card">
            <el-statistic precision="2" :value="1363.0" suffix="元">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  当前页总投注金额
                  <el-tooltip
                    effect="dark"
                    content="当前页总投注金额"
                    placement="top"
                  >
                    <el-icon style="margin-left: 4px" :size="12">
                      <Warning />
                    </el-icon>
                  </el-tooltip>
                </div>
              </template>
            </el-statistic>
            <div class="statistic-footer">
              <div class="footer-item">
                <span>比昨天</span>
                <span class="green">
                  24%
                  <el-icon>
                    <CaretTop />
                  </el-icon>
                </span>
              </div>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="">
          <div class="statistic-card">
            <el-statistic precision="2" :value="12346.35">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  当前页输赢统计
                  <el-tooltip
                    effect="dark"
                    content="当前页输赢统计(会员结果)"
                    placement="top"
                  >
                    <el-icon style="margin-left: 4px" :size="12">
                      <Warning />
                    </el-icon>
                  </el-tooltip>
                </div>
              </template>
            </el-statistic>
            <div class="statistic-footer">
              <div class="footer-item">
                <span>逐月</span>
                <span class="red">
                  12%
                  <el-icon>
                    <CaretBottom />
                  </el-icon>
                </span>
              </div>
            </div>
          </div>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="">
          <el-select
            v-model="formData.option1"
            placeholder=""
            style="width: 130px;"
          >
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select
            v-model="formData.option2"
            placeholder=""
            style="width: 130px;"
          >
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="会员">
          <el-input
            clearable
            v-model="formData.member"
            placeholder=""
          ></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker
            v-model="formData.daterange"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
        </el-form-item>
        <el-form-item label="期数">
          <el-input
            clearable
            v-model="formData.period"
            placeholder=""
          ></el-input>
        </el-form-item>
        <el-form-item label="订单号">
          <el-input
            clearable
            v-model="formData.orderNumber"
            placeholder=""
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-table
      :data="lotteryQueryData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column
        property="orderNumber"
        label="订单号"
        align="center"
        width="180px"
      />
      <el-table-column
        property="lotteryCategory"
        label="彩票类别"
        align="center"
      />
      <el-table-column
        property="lotteryNumber"
        label="彩票期号"
        align="center"
      />
      <el-table-column property="betting" label="投注玩法" align="center" />
      <el-table-column
        property="bettingContent"
        label="投注内容"
        align="center"
      />
      <el-table-column property="betAmount" label="投注金额" align="center" />
      <el-table-column property="betrayal" label="反水" align="center" />
      <el-table-column property="odds" label="赔率" align="center" />
      <el-table-column
        property="winableAmount"
        label="可赢金额"
        align="center"
      />
      <el-table-column
        property="memberResult"
        label="会员结果"
        align="center"
      />
      <el-table-column
        property="winableAmount"
        label="可赢金额"
        align="center"
      />
      <el-table-column label="投注时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.bettingTime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        property="bettingAccount"
        label="投注账号"
        align="center"
      />
      <el-table-column fixed="right" align="center" width="170px">
        <template #header>
          <el-space>
            <span>状态</span>
            <el-button type="primary" size="small">批量作废</el-button>
            <el-checkbox v-model="formData.state" />
          </el-space>
        </template>
        <template #default="scope">
          {{ scope.row.state }}
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="100" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        option1: '全部彩票',
        option2: '全部注单',
        daterange: '',
        period: '',
        orderNumber: '',
        member: '',
        state: '',
      },
      lotteryQueryData: [
        {
          orderNumber: '202302140837131316',
          lotteryCategory: '五分彩',
          lotteryNumber: '2598.36',
          betting: '快速-五分彩',
          bettingContent: '第一球-0',
          betAmount: '11.00',
          betrayal: '0.00',
          odds: '9.50',
          winableAmount: '104.50',
          memberResult: '-11',
          bettingTime: '02-14 08:37:13',
          bettingAccount: 'aa123',
          state: '已结算',
        },
        {
          orderNumber: '202302140837131316',
          lotteryCategory: '五分彩',
          lotteryNumber: '2598.36',
          betting: '快速-五分彩',
          bettingContent: '第一球-0',
          betAmount: '11.00',
          betrayal: '0.00',
          odds: '9.50',
          winableAmount: '104.50',
          memberResult: '-11',
          bettingTime: '02-14 08:37:13',
          bettingAccount: 'aa123',
          state: '已结算',
        },
        {
          orderNumber: '202302140837131316',
          lotteryCategory: '五分彩',
          lotteryNumber: '2598.36',
          betting: '快速-五分彩',
          bettingContent: '第一球-0',
          betAmount: '11.00',
          betrayal: '0.00',
          odds: '9.50',
          winableAmount: '104.50',
          memberResult: '-11',
          bettingTime: '02-14 08:37:13',
          bettingAccount: 'aa123',
          state: '已结算',
        },
      ],
      options1: [
        {
          value: 'ALL_LOTTERY',
          label: '全部彩票',
        },
        {
          value: 'CQ',
          label: '重庆时时彩',
        },
        {
          value: 'JX',
          label: '新疆时时彩',
        },
        {
          value: 'TJ',
          label: '天津时时彩',
        },
        {
          value: 'GDSF',
          label: '广东十分彩',
        },
        {
          value: 'GXSF',
          label: '广西十分彩',
        },
        {
          value: 'TJSF',
          label: '天津十分彩',
        },
        {
          value: 'CQSF',
          label: '重庆十分彩',
        },
        {
          value: 'BJKN',
          label: '北京快乐8',
        },
        {
          value: 'BJPK',
          label: '北京PK拾',
        },
        {
          value: 'GD11',
          label: '广东11选5',
        },
        {
          value: 'D3',
          label: '3D彩',
        },
        {
          value: 'P3',
          label: '排列三',
        },
        {
          value: 'T3',
          label: '上海时时乐',
        },
        {
          value: 'XYFT',
          label: '幸运飞艇',
        },
        {
          value: 'FFC5',
          label: '五分彩',
        },
        {
          value: 'TXSSC',
          label: '腾讯时时彩',
        },
        {
          value: 'TWSSC',
          label: '台湾时时彩',
        },
        {
          value: 'AZXY5',
          label: '澳洲幸运5',
        },
        {
          value: 'AZXY10',
          label: '澳洲幸运10',
        },
      ],
      options2: [
        {
          value: '0',
          label: '未结算注单',
        },
        {
          value: '1',
          label: '已结算注单',
        },
        {
          value: '2',
          label: '已重算注单',
        },
        {
          value: '3',
          label: '作废注单',
        },
        {
          value: '0,1,2,3',
          label: '全部注单',
        },
      ],
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
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
  padding-left: 20px;
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
</style>
