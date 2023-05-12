<template>
  <el-form :inline="true">
    <div>
      <el-form-item label="观看方式">
        <el-select
          v-model="formData.view"
          style="width: 80px;"
          @change="getItems"
        >
          <el-option
            v-for="item in viewOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
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
    </div>
  </el-form>
  <el-table
    style="width: 100%;"
    :data="tableData.slice((page - 1) * 20, page * 20)"
    border
    header-align="center"
    stripe
    v-loading="loading"
  >
    <el-table-column
      v-for="index in 7"
      :label="labelList[index - 1]"
      align="center"
    >
      <template #default="scope">
        <div v-html="scope.row[propertyList[index - 1]]"></div>
      </template>
    </el-table-column>
    <el-table-column label="功能">
      <template #default="scope">
        <el-button type="primary" link>更多的</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="pagination">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="tableData.length"
      :page-size="20"
      @current-change="onPageChange"
      v-model:current-page="page"
    />
  </div>
  <el-backtop :right="60" :bottom="60" target=".main" />
</template>
<script>
import { GetTData as GetItems } from '@/api/sports/real-wagger'
import { GetLeagueList } from '@/api/sports/real-wagger'

export default {
  props: ['onlineTrading', 'leagueList', 'isActive', 'updateTime', 'gtype'],
  data() {
    return {
      formData: {
        view: '0',
        alliance: '',
      },
      viewOptions: [
        {
          value: '0',
          label: '全部',
        },
        {
          value: '1',
          label: '自己',
        },
      ],
      allianceOptions: [
        {
          value: '',
          label: '全部',
        },
      ],
      labelList: ['时间', '联盟', '主客队伍', '0~1', '2~3', '4~6', '7UP'],
      propertyList: [
        'mid',
        'dateTime',
        'alliance',
        'team',
        'range_0_1',
        'range_2_3',
        'range_4_6',
        'range_7OrMore',
      ],
      tableData: [],
      loading: false,
      totalCount: 0,
      page: 1,
    }
  },
  mounted() {
    this.getItems()
    this.getLeagueList()
  },
  watch: {
    onlineTrading(newProp, oldProp) {
      this.getItems()
    },
    isActive(newProp, oldProp) {
      this.getItems()
      this.getLeagueList()
    },
  },
  methods: {
    getItems() {
      if (!this.isActive) return
      this.loading = true
      // this.tableData = []
      GetItems({
        league_id: this.formData.alliance,
        set_account: this.formData.view,
        ltype: this.onlineTrading,
        gtype: this.gtype,
        page: this.page,
      })
        .then(res => {
          this.tableData = [...res]
        })
        .catch(err => {})
        .finally(() => {
          this.loading = false
          this.updateTime()
        })
    },
    getLeagueList() {
      if (!this.isActive) return
      GetLeagueList({
        ltype: this.onlineTrading,
        gtype: this.gtype,
        ptype: 'T',
      })
        .then(res => {
          this.allianceOptions = [...this.allianceOptions, ...res]
        })
        .catch(err => {})
    },
    onPageChange(currentPage) {
      // this.getItems()
    },
  },
}
</script>
