<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin: 1rem; text-align: center;"
  >
    <h3>{{ $t('menu.dividendDetails') }}</h3>
    <el-form :inline="true" :model="formData">
      <div>
        <el-form-item label="" style="padding: 10px;">
          <div class="statistic-card">
            <el-statistic precision="2" :value="25960.92" suffix="元">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  总盈利
                  <el-tooltip effect="dark" content="利润总额" placement="top">
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
            <el-statistic precision="2" :value="12346.35" suffix="元">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  彩金
                  <el-tooltip effect="dark" content="总奖金" placement="top">
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
        <el-form-item label="">
          <div class="statistic-card">
            <el-statistic precision="2" :value="25960.92" suffix="元">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  佣金
                  <el-tooltip effect="dark" content="总佣金" placement="top">
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
      </div>
      <div>
        <el-form-item label="選擇代理商">
          <el-select v-model="formData.agent" placeholder="">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-date-picker
            v-model="formData.daterange"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查詢</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">上个月</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-table
      :data="dividendDetailsData"
      style="width: 100%; text-align: center; display: inline-block;"
      border
      header-align="center"
      stripe
    >
      <el-table-column property="type" label="类型" align="center" />
      <el-table-column property="totalStake" label="总投注额" align="center" />
      <el-table-column
        property="validStake"
        label="有效投注额"
        align="center"
      />
      <el-table-column property="profit" label="盈利" align="center" />
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        daterange: '',
        agent: '',
      },
      dividendDetailsData: [
        {
          type: '体育博弈',
          totalStake: '0.00元',
          validStake: '0.00元',
          profit: '0.00元',
        },
        {
          type: '时时彩',
          totalStake: '0.00元',
          validStake: '0.00元',
          profit: '0.00元',
        },
        {
          type: '六合彩',
          totalStake: '0.00元',
          validStake: '0.00元',
          profit: '0.00元',
        },
        {
          type: '真人',
          totalStake: '0.00元',
          validStake: '0.00元',
          profit: '0.00元',
        },
        {
          type: 'AG捕鱼王',
          totalStake: '0.00元',
          validStake: '0.00元',
          profit: '0.00元',
        },
      ],
      options: [
        {
          value: '4',
          label: 'ddm999',
        },
        {
          value: '95',
          label: 'csk8899',
        },
        {
          value: '96',
          label: 'csaa123',
        },
        {
          value: '97',
          label: 'dd123',
        },
        {
          value: '98',
          label: '1231238qq',
        },
      ],
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
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
