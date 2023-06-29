<template>
  <div style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;">
    <h3>{{ $t('menu.memberDeposit') }}</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item label="关键字查找">
        <el-input clearable v-model="formData.search" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="formData.rtype" placeholder="">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getAccessDataByFilter">确认</el-button>
      </el-form-item>
      <el-form-item label="">
        <div class="statistic-card">
          <el-statistic precision="2" :value="CK">
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
        </div>
      </el-form-item>
      <!-- <el-form-item label="">
        <div class="statistic-card">
          <el-statistic precision="2" :value="TK">
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
        </div>
      </el-form-item> -->
    </el-form>
    <el-table :data="accessList" v-loading="loading" style="width: 100%;" border header-align="center" stripe>
      <el-table-column type="index" label="编号" />
      <el-table-column property="UserName" label="帐号">
        <template #default="scope">
          <Font color="red">{{ scope.row.UserName }}</Font>
        </template>
      </el-table-column>
      <el-table-column property="Gold" label="金额" />
      <el-table-column property="previousAmount" label="操作前余额" />
      <el-table-column property="currentAmount" label="操作后余额" />
      <el-table-column label="日期时间" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon>
              <timer />
            </el-icon>
            <span style="margin-left: 10px">{{ scope.row.Date }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="Memo" label="备注">
        <template #default="scope">
          <div v-html="scope.row.Memo"></div>
        </template>
      </el-table-column>
      <el-table-column property="BankName" label="开户银行">
        <template #default="scope">
          <div v-html="scope.row.BankName"></div>
        </template>
      </el-table-column>
      <el-table-column property="Bank_Account" label="银行账号" />
      <el-table-column property="Name" label="姓名" />
      <el-table-column property="Order_Code" label="定单号" />
      <el-table-column fixed="right" label="操作" width="70">
        <template #default="scope">
          <div v-html="scope.row.other"></div>
          <el-button type="primary" link @click="deleteAccessData(scope.row.ID)" v-if="scope.row.Cancel == 0 && scope.row.Type == 'T' && !scope.row.Bank_Account.includes('会员余额')">恢复</el-button>
          <el-button type="danger" link @click="deleteAccessData(scope.row.ID)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="totalCount" @current-change="onPageChange" :page-size="20"
        v-model:current-page="formData.page_no" />
    </div>
  </div>
</template>
<script>
import { accessStore } from "@/pinia/modules/access.js";
export default {
  setup() {
    const { dispatchAccessData } = accessStore();
    const { dispatchDeleteAccessData } = accessStore();
    return {
      dispatchAccessData,
      dispatchDeleteAccessData
    }
  },
  data() {
    return {
      formData: {
        search: '',
        rtype: '',
        action: "S",
        page_no: 1
      },
      loading: false,
      options: [
        {
          value: '',
          label: '全部',
        },
        {
          value: 1,
          label: '普通',
        },
        {
          value: 2,
          label: '赠送',
        },
        {
          value: 4,
          label: '返水',
        },
        {
          value: 3,
          label: '额度转换',
        },
      ],
    }
  },
  computed: {
    accessList: function () {
      const { getAccessList } = accessStore();
      return getAccessList
    },
    totalCount: function () {
      const { getTotalCount } = accessStore();
      return getTotalCount
    },
    CK: function() {
      const {getCK} = accessStore();
      return getCK;
    },
    TK: function() {
      const {getTK} = accessStore();
      return getTK;
    }
  },
  methods: {
    async getAccessDataByFilter() {
      this.loading = true;
      await this.dispatchAccessData(this.formData);
      this.loading = false
    },
    async deleteAccessData(ID) {
      this.loading = true;
      await this.dispatchDeleteAccessData({ ID });
      await this.dispatchAccessData(this.formData);
      this.loading = false
    },
    async onPageChange() {
      this.loading = true;
      await this.dispatchAccessData(this.formData);
      this.loading = false
    }
  },
  async mounted() {
    this.loading = true;
    await this.dispatchAccessData(this.formData);
    this.loading = false
  }
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
