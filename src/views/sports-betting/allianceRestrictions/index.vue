<template>
  <div
    style="border: 1px solid #eee; padding: 0.75rem; margin-top: 0.75rem; text-align: center; margin: 1rem;"
  >
    <h3>{{ $t('menu.allianceRestrictions') }}</h3>
    <el-form :inline="true" :model="formData">
      <el-form-item label="联盟单注限制 -- 类别">
        <el-select v-model="formData.option" placeholder="">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary">自动接新联盟</el-button>
      </el-form-item>
      <el-form-item label="联盟快速查找">
        <el-input
          clearable
          v-model="formData.keyword"
          placeholder=""
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
        <el-button type="info">回上一頁</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="allianceRestrictionsData"
      style="width: 100%;"
      border
      header-align="center"
      stripe
    >
      <el-table-column type="index" label="序号" align="center" />
      <el-table-column property="alliance" label="联盟" align="center" />
      <el-table-column property="handicap" label="让球" align="center" />
      <el-table-column property="ballsize" label="大小球" align="center" />
      <el-table-column
        property="halfTimeHandicap"
        label="半场让球"
        align="center"
      />
      <el-table-column
        property="halfCourtSize"
        label="半场大小"
        align="center"
      />
      <el-table-column
        property="rollringBallHandicap"
        label="滚球让球"
        align="center"
      />
      <el-table-column
        property="rollringBallSize"
        label="滚球大小球"
        align="center"
      />
      <el-table-column
        property="bocceHalfHandicap"
        label="上半滚球让球"
        align="center"
      />
      <el-table-column
        property="bocceHalfBallSize"
        label="上半滚球大小球"
        align="center"
      />
      <el-table-column property="specialClass" label="特殊类" align="center" />
      <el-table-column fixed="right" label="操作" width="120" align="center">
        <template #default="scope">
          <el-button-group>
            <el-button
              type="primary"
              icon="edit"
              @click="editAllianceData(scope.$index, scope.row)"
            ></el-button>
            <el-button
              type="primary"
              icon="delete"
              @click="deleteAllianceData(scope.$index, scope.row)"
            ></el-button>
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
        option: '',
      },
      allianceRestrictionsData: [
        {
          id: 1,
          alliance: '黑山甲组联赛',
          handicap: '15000',
          ballsize: '15000',
          halfTimeHandicap: '12000',
          halfCourtSize: '10000',
          rollringBallHandicap: '20000',
          rollringBallSize: '16000',
          bocceHalfHandicap: '15000',
          bocceHalfBallSize: '13000',
          specialClass: '3000',
        },
        {
          id: 2,
          alliance: '黑山甲组联赛',
          handicap: '15000',
          ballsize: '15000',
          halfTimeHandicap: '12000',
          halfCourtSize: '10000',
          rollringBallHandicap: '20000',
          rollringBallSize: '16000',
          bocceHalfHandicap: '15000',
          bocceHalfBallSize: '13000',
          specialClass: '3000',
        },
        {
          id: 3,
          alliance: '黑山甲组联赛',
          handicap: '15000',
          ballsize: '15000',
          halfTimeHandicap: '12000',
          halfCourtSize: '10000',
          rollringBallHandicap: '20000',
          rollringBallSize: '16000',
          bocceHalfHandicap: '15000',
          bocceHalfBallSize: '13000',
          specialClass: '3000',
        },
      ],
      options: [
        {
          value: 'FT',
          label: '足球联盟',
        },
        {
          value: 'BK',
          label: '篮球联盟',
        },
        {
          value: 'BS',
          label: '棒球联盟',
        },
        {
          value: 'TN',
          label: '网球联盟',
        },
        {
          value: 'VB',
          label: '排球联盟',
        },
        {
          value: 'OP',
          label: '其它联盟',
        },
        {
          value: 'FU',
          label: '指数联盟',
        },
        {
          value: 'FS',
          label: '特殊联盟',
        },
      ],
    }
  },
  methods: {
    editAllianceData(index, row) {
      console.log(index, row)
    },
    deleteAllianceData(index, row) {
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
