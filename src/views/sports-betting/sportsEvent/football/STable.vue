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
    :data="tableData"
    border
    header-align="center"
    stripe
    v-loading="loading"
  >
    <el-table-column
      v-for="index in 8"
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
</template>
<script>
import { GetSData as GetItems } from '@/api/sports/real-wagger'

export default {
  props: ['onlineTrading', 'leagueList', 'isActive'],
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
      allianceOptions: [...this.leagueList],
      labelList: [
        '时间',
        '联盟',
        '场次',
        '队伍',
        '独赢 / 注单',
        '让球 / 注单',
        '大小盘 / 注单',
        '单双 / 注单',
      ],
      propertyList: [
        'dateTime',
        'alliance',
        'sessions',
        'team',
        'winBet',
        'handicapBet',
        'bigSmallPlateBetSlip',
        'oddEvenBet',
      ],
      tableData: [],
      loading: false,
    }
  },
  mounted() {
    this.getItems()
  },
  watch: {
    onlineTrading(newProp, oldProp) {
      this.getItems()
    },
    isActive(newProp, oldProp) {
      this.getItems()
    },
  },
  methods: {
    getItems() {
      if (!this.isActive) return
      this.loading = true
      this.tableData = []
      GetItems({
        league_id: this.formData.alliance,
        set_account: this.formData.view,
        ltype: this.onlineTrading,
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
