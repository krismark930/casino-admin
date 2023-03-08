<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>報表</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item label="真人账号">
        <el-input
          clearable
          v-model="formData.liveAccount"
          placeholder=""
        ></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-date-picker
          v-model="formData.dateRange"
          type="datetimerange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </el-form-item>
      <el-form-item label="平台">
        <el-select v-model="formData.platformOption" style="width: 100px;">
          <el-option
            v-for="item in platformOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="投注类型">
        <el-select v-model="formData.typeOption" style="width: 150px;">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary">确认</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="reportData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column type="index" label="编号" align="center" />
      <el-table-column property="liveAccount" label="真人帐号" align="center" />
      <el-table-column property="penCount" label="笔数" align="center" />
      <el-table-column property="betAmount" label="投注金额" align="center" />
      <el-table-column
        property="validStake"
        label="有效投注额"
        align="center"
      />
      <el-table-column
        property="memberResult"
        label="会员结果"
        align="center"
      />
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
        dateRange: '',
        liveAccount: '',
        platformOption: '',
        typeOption: '',
      },
      reportData: [
        {
          liveAccount: '',
          penCount: '',
          memberResult: '',
          betAmount: '',
          validStake: '',
        },
      ],
      platformOptions: [
        {
          value: '全部',
          label: '全部',
        },
        {
          value: 'AG真人',
          label: 'AG真人',
        },
        {
          value: 'AG电子',
          label: 'AG电子',
        },
        {
          value: 'OG平台',
          label: 'OG平台',
        },
        {
          value: 'BBIN平台',
          label: 'BBIN平台',
        },
        {
          value: 'MG平台',
          label: 'MG平台',
        },
        {
          value: 'PT平台',
          label: 'PT平台',
        },
        {
          value: 'YOPLAY电子',
          label: 'YOPLAY电子',
        },
      ],
      typeOptions: [
        {
          value: '全部',
          label: '全部',
        },
        {
          value: '视讯',
          label: '视讯',
        },
        {
          value: '电子游艺',
          label: '电子游艺',
        },
        {
          value: '捕鱼',
          label: '捕鱼',
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
</style>
