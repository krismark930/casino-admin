<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <h3>结果</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item label="日期">
        <el-select v-model="formData.dateOption" style="width: 80px;">
          <el-option
            v-for="item in dateOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="赛程">
        <el-select v-model="formData.sportsOption" style="width: 80px;">
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
      :data="footballData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column label="时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.time }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="sessions" label="场次" align="center" />
      <el-table-column property="team" label="队伍" align="center" />
      <el-table-column property="topHalf" label="上半" align="center" />
      <el-table-column property="finishRace" label="完赛" align="center" />
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
        dateOption: '今日',
        sportsOption: '',
      },
      resultData: [
        {
          id: 1,
          time: '',
          sessions: '',
          team: '',
          topHalf: '',
          finishRace: '',
        },
      ],
      dateOptions: [
        {
          value: '今日',
          label: '今日',
        },
        {
          value: '昨日',
          label: '昨日',
        },
      ],
      sportsOptions: [
        {
          value: '足球',
          label: '足球',
        },
        {
          value: '篮球',
          label: '篮球',
        },
        {
          value: '网球',
          label: '网球',
        },
        {
          value: '排球',
          label: '排球',
        },
        {
          value: '棒球',
          label: '棒球',
        },
        {
          value: '其他',
          label: '其他',
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
