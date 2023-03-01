<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>{{ $t('menu.checkScores2') }}</h3>
    <el-form :inline="true" :model="formData">
      <div>
        <el-form-item label="类别">
          <el-select v-model="formData.option1" placeholder="Select type">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="查看方式">
          <el-select v-model="formData.option2" placeholder="Select type">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="比赛日期">
          <el-date-picker
            v-model="formData.gameDate"
            placeholder="Select game date"
            value-format="YYYY-MM-DD"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">全部显示</el-button>
          <el-button type="danger">全部关闭</el-button>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="选择联盟">
          <el-select v-model="formData.option3" placeholder="Select type">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="关键字">
          <el-input
            clearable
            v-model="formData.keyword"
            placeholder=""
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-table
      :data="checkScoresData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column
        property="competition"
        :label="formData.gameDate + '--赛事'"
        align="center"
      />
      <el-table-column label="时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.datetime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="homeTeam" label="主场队伍" align="center" />
      <el-table-column
        property="fullTimeScore"
        label="全场比分"
        align="center"
      />
      <el-table-column property="awayTeam" label="客场队伍" align="center" />
      <el-table-column
        property="halfTimeScore"
        label="半场比分"
        align="center"
      />
      <el-table-column
        property="receiveScore"
        label="接收比分"
        align="center"
      />
      <el-table-column
        property="eventCanceled"
        label="赛事取消"
        align="center"
      />
      <el-table-column property="betSlip" label="注单" align="center" />
      <el-table-column property="operate" label="操作" align="center" />
      <el-table-column property="show" label="显示" align="center" />
      <el-table-column property="state" label="状态" align="center" />
      <!-- <el-table-column fixed="right" label="操作" width="70">
          <template #default="scope">
            <el-button
              type="primary"
              icon="delete"
              @click="deleteDepositData(scope.$index, scope.row)"
            ></el-button>
          </template>
        </el-table-column> -->
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
        gameDate: '',
        keyword: '',
        option1: '',
        option2: '',
        option3: '',
      },
      checkScoresData: [
        {
          id: 1,
          competition: '',
          datetime: '',
          homeTeam: '',
          fullTimeScore: '',
          awayTeam: '',
          halfTimeScore: '',
          receiveScore: '',
          eventCanceled: '',
          betSlip: '',
          operate: '',
          show: '',
          state: '',
        },
      ],
      options1: [
        {
          value: '足球',
          label: '足球',
        },
        {
          value: '篮球',
          label: '篮球',
        },
        {
          value: '棒球',
          label: '棒球',
        },
        {
          value: '网球',
          label: '网球',
        },
        {
          value: '排球',
          label: '排球',
        },
      ],
      options2: [
        {
          value: '显示全部',
          label: '显示全部',
        },
        {
          value: '只显示有投注',
          label: '只显示有投注',
        },
        {
          value: '二次比分',
          label: '二次比分',
        },
      ],
      options3: [
        {
          value: '全部',
          label: '全部',
        },
        {
          value: '克罗地亚杯',
          label: '克罗地亚杯',
        },
        {
          value: '英格兰超级联赛',
          label: '英格兰超级联赛',
        },
        {
          value: '西班牙杯',
          label: '西班牙杯',
        },
        {
          value: '荷兰KNVB杯',
          label: '荷兰KNVB杯',
        },
      ],
    }
  },
  methods: {
    deleteDepositData(index, row) {
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
