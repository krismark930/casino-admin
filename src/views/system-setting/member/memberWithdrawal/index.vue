<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <h3>{{ $t('menu.memberWithdrawal') }}</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item label="关键字查找">
        <el-input
          clearable
          v-model="formData.keyword"
          placeholder=""
        ></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="formData.option" placeholder="Select type">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">确认</el-button>
      </el-form-item>
      <el-form-item label="">
        <div class="statistic-card">
          <el-statistic precision="2" :value="25960.92">
            <template #title>
              <div style="display: inline-flex; align-items: center">
                总存款
                <el-tooltip effect="dark" content="入金总额" placement="top">
                  <el-icon style="margin-left: 4px" :size="12">
                    <Warning />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
          </el-statistic>
          <div class="statistic-footer">
            <div class="footer-item">
              <span>than yesterday</span>
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
                总提款
                <el-tooltip effect="dark" content="取款总额" placement="top">
                  <el-icon style="margin-left: 4px" :size="12">
                    <Warning />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
          </el-statistic>
          <div class="statistic-footer">
            <div class="footer-item">
              <span>month on month</span>
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
    </el-form>
    <el-table
      :data="memberWithdrawalData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column type="index" label="编号" />
      <el-table-column property="accountNumber" label="帐号" />
      <el-table-column property="amount" label="金额" />
      <el-table-column property="balanceBefore" label="操作前余额" />
      <el-table-column property="balanceAfter" label="操作后余额" />
      <el-table-column label="日期时间" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.datetime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="remark" label="备注" />
      <el-table-column property="bankofDeposit" label="开户银行" />
      <el-table-column property="bankAccount" label="银行账号" />
      <el-table-column property="name" label="姓名" />
      <el-table-column property="orderNumber" label="定单号" />
      <el-table-column fixed="right" label="操作" width="70">
        <template #default="scope">
          <el-button
            type="primary"
            icon="delete"
            @click="deleteWithdrawalData(scope.$index, scope.row)"
          ></el-button>
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
        keyword: '',
        option: '',
      },
      memberWithdrawalData: [
        {
          id: 1,
          accountNumber: 'aa123',
          amount: '4.22',
          balanceBefore: '2598.36',
          balanceAfter: '2636.1',
          datetime: '2023-02-22 12:48:27',
          remark: '测试会员',
          bankofDeposit: '微信',
          bankAccount: '彩票返水',
          name: '测试会员',
          orderNumber: 'order',
        },
        {
          id: 1,
          accountNumber: 'aa123',
          amount: '4.22',
          balanceBefore: '2598.36',
          balanceAfter: '2636.1',
          datetime: '2023-02-22 12:48:27',
          remark: '测试会员',
          bankofDeposit: '微信',
          bankAccount: '彩票返水',
          name: '测试会员',
          orderNumber: 'order',
        },
        {
          id: 1,
          accountNumber: 'aa123',
          amount: '4.22',
          balanceBefore: '2598.36',
          balanceAfter: '2636.1',
          datetime: '2023-02-22 12:48:27',
          remark: '测试会员',
          bankofDeposit: '微信',
          bankAccount: '彩票返水',
          name: '测试会员',
          orderNumber: 'order',
        },
      ],
      options: [
        {
          value: '会员',
          label: '会员',
        },
        {
          value: '代理',
          label: '代理',
        },
        {
          value: '总代理',
          label: '总代理',
        },
        {
          value: '股东',
          label: '股东',
        },
        {
          value: '公司',
          label: '公司',
        },
      ],
    }
  },
  methods: {
    deleteWithdrawalData(index, row) {
      console.log(index, row)
    },
  },
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
