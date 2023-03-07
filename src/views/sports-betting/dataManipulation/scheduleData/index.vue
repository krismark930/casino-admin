<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <h3>赛程数据</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item label="选择联盟">
        <el-select v-model="formData.option" placeholder="">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-table
      :data="scheduleData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column label="时间" width="180" align="center">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.datetime }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        property="sessions"
        label="场次"
        width="100px"
        align="center"
      />
      <el-table-column
        property="team"
        label="队伍"
        align="center"
        width="210px"
      >
        <template #default="scope">
          <span>{{ scope.row.team.firstTeam }}</span>
          <br />
          <span>{{ scope.row.team.secondTeam }}</span>
        </template>
      </el-table-column>
      <el-table-column property="winner" label="全场独赢" align="center" />
      <el-table-column property="handicap" label="全场让球" align="center" />
      <el-table-column
        property="fullFieldGoal"
        label="全场大小球"
        align="center"
      />
      <el-table-column property="odd" label="全场单双" align="center" />
      <el-table-column
        property="winAtHalfTime"
        label="半场独赢"
        align="center"
      />
      <el-table-column
        property="halfTimeHandicap"
        label="半场让球"
        align="center"
      />
      <el-table-column
        property="winAtHalfTime"
        label="半场独赢"
        align="center"
      />
      <el-table-column
        property="halfCourtSize"
        label="半场大小"
        align="center"
      />
      <el-table-column fixed="right" label="操作" width="150" align="center">
        <template #default="scope">
          <el-button-group>
            <el-button
              type="primary"
              @click="changeOdds(scope.$index, scope.row)"
              link
            >
              变更赔率
            </el-button>
            <el-button
              type="danger"
              @click="closeBet(scope.$index, scope.row)"
              link
            >
              关闭投注
            </el-button>
          </el-button-group>
          <el-button-group>
            <el-button
              type="primary"
              @click="relatedList(scope.$index, scope.row)"
              link
            >
              相关注单
            </el-button>
            <el-button
              type="danger"
              @click="deleteEvent(scope.$index, scope.row)"
              link
            >
              删除赛事
            </el-button>
          </el-button-group>
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
      options: [
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
      scheduleData: [
        {
          id: 1,
          sessions: '5975175',
          team: {
            firstTeam: 'Bayern Munich (Val) Esports',
            secondTeam: 'Liverpool (Aibothard) Esports',
          },
          winner: '',
          handicap: '',
          fullFieldGoal: '',
          datetime: '2023-02-22 12:48:27',
          odd: '',
          winAtHalfTime: '',
          halfTimeHandicap: '',
          halfCourtSize: '',
        },
        {
          id: 2,
          sessions: '5975175',
          team: {
            firstTeam: 'Bayern Munich (Val) Esports',
            secondTeam: 'Liverpool (Aibothard) Esports',
          },
          winner: '',
          handicap: '',
          fullFieldGoal: '',
          datetime: '2023-02-22 12:48:27',
          odd: '',
          winAtHalfTime: '',
          halfTimeHandicap: '',
          halfCourtSize: '',
        },
        {
          id: 3,
          sessions: '5975175',
          team: {
            firstTeam: 'Bayern Munich (Val) Esports',
            secondTeam: 'Liverpool (Aibothard) Esports',
          },
          winner: '',
          handicap: '',
          fullFieldGoal: '',
          datetime: '2023-02-22 12:48:27',
          odd: '',
          winAtHalfTime: '',
          halfTimeHandicap: '',
          halfCourtSize: '',
        },
      ],
    }
  },
  methods: {
    changeOdds(index, row) {
      console.log(index, row)
    },
    closeBet(index, row) {
      console.log(index, row)
    },
    relatedList(index, row) {
      console.log(index, row)
    },
    deleteEvent(index, row) {
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
