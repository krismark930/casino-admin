<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>{{ $t('menu.allianceRestrictions') }}</h3>
    <el-form :inline="true" :model="formData">
      <!-- <el-form-item label="">
        <el-button type="primary">自动接新联盟</el-button>
      </el-form-item> -->
      <el-form-item>
        <el-button type="success" @click="submitItem">提交</el-button>
        <el-button type="primary" @click="reset">提交</el-button>
        <el-button type="info" @click="goBack">回上一頁</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="allianceRestrictionsData"
      border
      :span-method="arraySpanMethod"
      style="width: 100%"
      align="center"
      v-loading="loading"
    >
      <el-table-column label="ID" align="center">
        <template #default="scope">
          <div v-if="!scope.$index">{{ properties['ID'] }}</div>
        </template>
      </el-table-column>
      <el-table-column
        property="tournamentLeague"
        label="赛事联盟"
        align="center"
        width="180"
      >
        <template #default="scope">
          <div
            v-if="scope.$index === 3"
            style="display: flex; align-items: center;"
          >
            <div style="white-space: nowrap">特殊类</div>
            <el-input v-model="properties['CS']"></el-input>
          </div>
        </template>
      </el-table-column>
      <el-table-column property="limit1" label="类型" align="center" />
      <el-table-column limit1 label="单注限制" align="center">
        <template #default="scope">
          <el-input
            v-model="properties[indexToName[scope.$index][0]]"
            :placeholder="indexToName[scope.$index][0]"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column property="limit2" label="类型" align="center" />
      <el-table-column label="单注限制" align="center">
        <template #default="scope">
          <el-input
            v-model="properties[indexToName[scope.$index][1]]"
            :placeholder="indexToName[scope.$index][1]"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column property="limit3" label="类型" align="center" />
      <el-table-column label="单注限制" align="center">
        <template #default="scope">
          <el-input
            v-model="properties[indexToName[scope.$index][2]]"
            :placeholder="indexToName[scope.$index][2]"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column property="limit4" label="类型" aligtype="center" />
      <el-table-column label="单注限制" align="center">
        <template #default="scope">
          <el-input
            v-model="properties[indexToName[scope.$index][3]]"
            :placeholder="indexToName[scope.$index][3]"
          ></el-input>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { GetItem, SetItem } from '@/api/sports/alliance-restriction'

export default {
  data() {
    return {
      properties: {},
      initialProperties: {},
      allianceRestrictionsData: [
        {
          tournamentLeague: '黑山甲组联赛',
          limit1: '全场让球',
          limit2: '全场滚球让球',
          limit3: '全场独赢',
          limit4: '单双',
        },
        {
          limit1: '全场大小球',
          limit2: '全场滚球大小',
          limit3: '上半独赢',
          limit4: '波胆',
        },
        {
          limit1: '上半让球',
          limit2: '上半滚球让球',
          limit3: '全场滚球独赢',
          limit4: '总入球',
        },
        {
          limit1: '上半大小球',
          limit2: '上半滚球大小',
          limit3: '上半滚球独赢',
          limit4: '半全场',
        },
      ],
      loading: false,
      indexToName: [
        ['R', 'RB', 'M', 'EO'],
        ['OU', 'ROU', 'VM', 'PD'],
        ['VR', 'VRB', 'RM', 'T'],
        ['VOU', 'VROU', 'VRM', 'F'],
      ],
      id: null,
    }
  },
  mounted() {
    this.getItem()
  },
  methods: {
    getItem() {
      this.loading = true
      GetItem({
        id: this.$route.params.id,
      })
        .then(data => {
          this.properties = { ...data }
          this.initialProperties = { ...data }
          this.loading = false
        })
        .catch(err => {
          console.error('get items error', err)
          this.loading = false
        })
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex === 0) return [4, 1]
        else return [0, 1]
      } else if (columnIndex === 1) {
        if (rowIndex === 0) return [3, 1]
        else if (rowIndex === 3) return [1, 1]
        else return [0, 1]
      }
    },
    submitItem() {
      SetItem(this.properties)
        .then(() => {
          this.getItem()
        })
        .catch(err => {
          console.error('submit error', err)
        })
    },
    reset() {
      this.properties = { ...this.initialProperties }
    },
    goBack() {
      this.$router.go(-1)
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
.container {
  position: relative;
  background-color: #fff;
  padding: 20px;
  overflow-x: auto;
}
</style>
