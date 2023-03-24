<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center;"
  >
    <h3>赛程数据</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item label="类别">
        <el-select v-model="formData.gtype" @change="reload">
          <el-option
            v-for="item in gtypeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker
          v-model="formData.dateStart"
          placeholder=""
          value-format="YYYY-MM-DD"
          style="width: 150px;"
          @change="reload"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="选择联盟">
        <el-select v-model="formData.alliance" @change="getItems">
          <el-option
            v-for="item in allianceOptions"
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
      v-loading="loading"
    >
      <el-table-column label="时间" width="130" align="center">
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
          <div v-html="scope.row.team"></div>
        </template>
      </el-table-column>
      <el-table-column property="winner" label="全场独赢" align="center">
        <template #default="scope">
          <div v-html="scope.row.winner"></div>
        </template>
      </el-table-column>
      <el-table-column property="handicap" label="全场让球" align="center">
        <template #default="scope">
          <div v-html="scope.row.handicap"></div>
        </template>
      </el-table-column>
      <el-table-column
        property="fullFieldGoal"
        label="全场大小球"
        align="right"
        width="120"
      >
        <template #default="scope">
          <div v-html="scope.row.fullFieldGoal"></div>
        </template>
      </el-table-column>
      <el-table-column property="odd" label="全场单双" align="right">
        <template #default="scope">
          <div v-html="scope.row.odd"></div>
        </template>
      </el-table-column>
      <el-table-column property="winAtHalfTime" label="半场独赢" align="right">
        <template #default="scope">
          <div v-html="scope.row.winAtHalfTime"></div>
        </template>
      </el-table-column>
      <el-table-column
        property="halfTimeHandicap"
        label="半场让球"
        align="center"
      >
        <template #default="scope">
          <div v-html="scope.row.halfTimeHandicap"></div>
        </template>
      </el-table-column>
      <el-table-column property="winAtHalfTime" label="半场独赢" align="right">
        <template #default="scope">
          <div v-html="scope.row.winAtHalfTime"></div>
        </template>
      </el-table-column>
      <el-table-column
        property="halfCourtSize"
        label="半场大小"
        align="right"
        width="130"
      >
        <template #default="scope">
          <div v-html="scope.row.halfCourtSize"></div>
        </template>
      </el-table-column>
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
import {
  GetAllianceTypes,
  GetItems,
  CloseBet,
  DeleteEvent,
} from '@/api/sports/data-manipulation/schedule-data'

export default {
  data() {
    return {
      formData: {
        alliance: '',
        gtype: 'FT',
        dateStart: new Date().toISOString().split('T')[0],
      },
      gtypeOptions: [
        {
          label: '足球',
          value: 'FT',
        },
        {
          label: '篮球',
          value: 'BK',
        },
        {
          label: '棒球',
          value: 'BS',
        },
        {
          label: '网球',
          value: 'TN',
        },
        {
          label: '排球',
          value: 'VB',
        },
        {
          label: '其它',
          value: 'OP',
        },
        {
          label: '特殊',
          value: 'FS',
        },
        {
          label: '足球早餐',
          value: 'FU',
        },
        {
          label: '篮球早餐',
          value: 'BU',
        },
        {
          label: '棒球早餐',
          value: 'BE',
        },
        {
          label: '网球早餐',
          value: 'TU',
        },
        {
          label: '排球早餐',
          value: 'VU',
        },
        {
          label: '其它早餐',
          value: 'OM',
        },
      ],
      allianceOptions: [],
      scheduleData: [],
      loading: false,
    }
  },
  mounted() {
    this.getAllianceTypes()
    this.getItems()
  },
  methods: {
    testfunc() {
      console.log(this.formData.alliance)
    },
    reload() {
      this.getAllianceTypes()
      this.getItems()
    },
    getItems() {
      this.loading = true
      GetItems({
        gtype: this.formData.gtype,
        date_start: this.formData.dateStart,
        league: this.formData.alliance,
      })
        .then(data => {
          this.scheduleData = [...data]
          this.loading = false
        })
        .catch(err => {
          this.loading = false
        })
    },
    getAllianceTypes() {
      GetAllianceTypes({
        gtype: this.formData.gtype,
        date_start: this.formData.dateStart,
      })
        .then(data => {
          this.allianceOptions = [...data]
          this.formData.alliance = data[0].value
        })
        .catch(err => {
          console.error('get alliance types error', err)
        })
    },
    changeOdds(index, row) {
      this.$router.push({
        name: 'DataManipulation.Retime',
        params: { id: row.sessions, type: this.formData.gtype },
      })
    },
    closeBet(index, row) {
      CloseBet({
        id: row.sessions,
        type: this.formData.gtype,
      })
        .then(res => {
          this.getItems()
        })
        .catch(err => {
          console.error('close bet error', err)
        })
    },
    relatedList(index, row) {
      this.$router.push({
        name: 'DataManipulation.BetCheck',
        params: { id: row.sessions, type: this.formData.gtype },
      })
    },
    deleteEvent(index, row) {
      if (confirm('确实要删除本场赛事吗?')) {
        DeleteEvent({
          id: row.sessions,
          type: this.formData.gtype,
        })
          .then(res => {
            this.getItems()
          })
          .catch(err => {
            console.error('delete event error', err)
          })
      }
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
