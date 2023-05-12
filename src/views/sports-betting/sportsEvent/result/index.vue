<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <h3>结果</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item label="日期">
        <el-select
          v-model="formData.dateOption"
          style="width: 80px;"
          @change="getItems"
        >
          <el-option
            v-for="item in dateOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="赛程">
        <el-select
          v-model="formData.sportsOption"
          style="width: 80px;"
          @change="getItems"
        >
          <el-option
            v-for="item in sportsOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-table
      style="width: 100%;"
      :data="tableData"
      border
      header-align="center"
      stripe
      v-loading="loading"
    >
      <el-table-column
        v-for="index in 5"
        :label="labelList[index - 1]"
        align="center"
      >
        <template #default="scope">
          <div v-html="scope.row[propertyList[index - 1]]"></div>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="100" />
    </div>
  </div>
</template>
<script>
import { GetResultData as GetItems } from '@/api/sports/real-wagger'
export default {
  props: ['isCurrentTab'],
  data() {
    return {
      formData: {
        dateOption: '',
        sportsOption: 'FT',
      },
      tableData: [],
      dateOptions: [
        {
          value: '',
          label: '今日',
        },
        {
          value: 'Y',
          label: '昨日',
        },
      ],
      sportsOptions: [
        {
          value: 'FT',
          label: '足球',
        },
        {
          value: 'BK',
          label: '篮球',
        },
        {
          value: 'TN',
          label: '网球',
        },
        {
          value: 'VB',
          label: '排球',
        },
        {
          value: 'BS',
          label: '棒球',
        },
        {
          value: 'OP',
          label: '其他',
        },
      ],
      loading: false,
      labelList: ['时间', '场次', '队伍', '上半', '完赛'],
      propertyList: ['time', 'sessions', 'team', 'topHalf', 'finishTheRace'],
    }
  },
  mounted() {
    this.getItems()
  },
  watch: {
    isCurrentTab(newProp, oldProp) {
      this.getItems()
    },
  },
  methods: {
    getItems() {
      if (!this.isCurrentTab) return
      this.loading = true
      GetItems({
        gtype: this.formData.sportsOption,
        flag: this.formData.dateOption,
      })
        .then(res => {
          this.tableData = [...res]
        })
        .catch(err => {})
        .finally(() => {
          this.loading = false
        })
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
