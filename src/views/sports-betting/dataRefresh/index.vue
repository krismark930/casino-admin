<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>{{ $t('menu.dataRefresh') }}</h3>
    <el-form :model="formData">
      <el-form-item label="" style="display: inline-flex;">
        <el-button type="primary" link>滚球确认</el-button>
        <el-button type="primary" link>自动刷水</el-button>
        <el-button type="primary" link>早餐自动刷水</el-button>
        <el-button type="primary" link>自动刷比分</el-button>
        <el-button type="primary" link>更新UID</el-button>
        <el-button type="primary" link>刷水速度测试</el-button>
      </el-form-item>
    </el-form>
    <Table1 />
    <Table2 />
    <Table3 />
    <Table4 />
  </div>
</template>
<script>
import Table1 from '@/views/sports-betting/dataRefresh/table1.vue'
import Table2 from '@/views/sports-betting/dataRefresh/table2.vue'
import Table3 from '@/views/sports-betting/dataRefresh/table3.vue'
import Table4 from '@/views/sports-betting/dataRefresh/table4.vue'
export default {
  formData: {},
  components: {
    Table1,
    Table2,
    Table3,
    Table4,
  },
}
</script>

<style lang="scss" scoped></style>
