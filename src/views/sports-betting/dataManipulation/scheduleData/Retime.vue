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
      style="width: 100%"
      align="center"
      v-loading="loading"
    >
      <el-table-column label="时间" align="center" width="260">
        <el-date-picker v-model="formData.mDate" placeholder="Select Date" />
        <br />
        <el-time-picker
          v-model="formData.mTime"
          placeholder="Select Time"
          @change="testfunc"
        />
      </el-table-column>
      <el-table-column label="主客队伍" align="left" width="180">
        纽西兰
        <br />
        中国
      </el-table-column>
      <el-table-column label="全场盘口" align="center">
        <el-input v-model="formData.mLetb" />
      </el-table-column>
      <el-table-column label="全场赔率" align="center">
        <el-input v-model="formData.mbLetbRate" />
        <br />
        <el-input v-model="formData.tgLetbRate" />
      </el-table-column>
      <el-table-column label="全场大小" align="center">
        <el-input v-model="formData.mbDime" />
        <br />
        <el-input v-model="formData.tgDime" />
      </el-table-column>
      <el-table-column label="全场大小" align="center">
        <el-input v-model="formData.mbDimeRate" />
        <br />
        <el-input v-model="formData.tgDimeRate" />
      </el-table-column>
      <el-table-column label="半场盘口" align="center">
        <el-input v-model="formData.mLetbH" />
      </el-table-column>
      <el-table-column label="半场赔率" align="center">
        <el-input v-model="formData.mbLetbRateH" />
        <br />
        <el-input v-model="formData.tgLetbRateH" />
      </el-table-column>
      <el-table-column label="半场大小" aligtype="center">
        <el-input v-model="formData.mbDimeH" />
        <br />
        <el-input v-model="formData.tgDimeH" />
      </el-table-column>
      <el-table-column label="半场大小" align="center">
        <el-input v-model="formData.mbDimeRateH" />
        <br />
        <el-input v-model="formData.tgDimeRateH" />
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { GetItem, SetItem } from '@/api/sports/data-manipulation/schedule-data'

export default {
  data() {
    return {
      formData: {},
      initialProperties: {},
      allianceRestrictionsData: [
        {
          tournamentLeague: '黑山甲组联赛',
          limit1: '全场让球',
          limit2: '全场滚球让球',
          limit3: '全场独赢',
          limit4: '单双',
        },
      ],
      loading: false,
    }
  },
  mounted() {
    this.getItem()
  },
  methods: {
    testfunc() {
      console.log(this.formData.mTime)
    },
    getItem() {
      this.loading = true
      GetItem({
        id: this.$route.params.id,
        type: this.$route.params.type,
      })
        .then(data => {
          data.mTime = new Date(
            2000,
            1,
            1,
            data.mTime.split(':')[0],
            data.mTime.split(':')[1]
          )
          this.formData = { ...data }
          this.initialProperties = { ...data }
          this.loading = false
        })
        .catch(err => {
          console.error('get items error', err)
          this.loading = false
        })
    },
    submitItem() {
      SetItem({
        id: this.$route.params.id,
        data: {
          ...this.formData,
          mTime: this.formData.mTime
            .toISOString()
            .split('T')[1]
            .slice(0, 5),
        },
      })
        .then(() => {
          this.getItem()
        })
        .catch(err => {
          console.error('submit error', err)
        })
    },
    reset() {
      this.formData = { ...this.initialProperties }
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
