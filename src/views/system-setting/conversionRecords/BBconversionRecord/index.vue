<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <h3>{{ $t('menu.BBconveresionRecord') }}</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item label="关键字查找">
        <el-input
          clearable
          v-model="formData.keyword"
          placeholder=""
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">确认</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="BBconversionRecordData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column type="index" label="编号" />
      <el-table-column property="accountNumber" label="帐号" />
      <el-table-column property="AGrealAccount" label="AG真人帐号" />
      <el-table-column property="name" label="姓名" />
      <el-table-column property="amount" label="金额" />
      <el-table-column property="orderNumber" label="定单号" />
      <el-table-column label="日期时间" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.datetime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="conversionType" label="转换类型" />
      <el-table-column property="state" label="状态" />
      <el-table-column fixed="right" label="操作" width="70">
        <template #default="scope">
          <el-button
            type="primary"
            icon="delete"
            @click="deleteBBData(scope.$index, scope.row)"
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
      },
      BBconversionRecordData: [
        {
          id: 1,
          accountNumber: 'aa123',
          AGrealAccount: 'TT_AAA1230',
          name: 'hello',
          amount: '2636.1',
          orderNumber: 'order',
          datetime: '2023-02-22 12:48:27',
          conversionType: '转入',
          state: '成功',
        },
        {
          id: 2,
          accountNumber: 'aa123',
          AGrealAccount: 'TT_AAA1230',
          name: 'hello',
          amount: '2636.1',
          orderNumber: 'order',
          datetime: '2023-02-22 12:48:27',
          conversionType: '转入',
          state: '成功',
        },
        {
          id: 3,
          accountNumber: 'aa123',
          AGrealAccount: 'TT_AAA1230',
          name: 'hello',
          amount: '2636.1',
          orderNumber: 'order',
          datetime: '2023-02-22 12:48:27',
          conversionType: '转入',
          state: '成功',
        },
      ],
    }
  },
  methods: {
    deleteBBData(index, row) {
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
</style>
