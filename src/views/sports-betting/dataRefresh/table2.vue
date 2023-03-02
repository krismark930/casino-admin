<template>
  <el-table
    :data="dataRefresh2"
    style="width: 100%; margin-top: 1rem;"
    border
    stripe
  >
    <el-table-column property="title" label="刷新设置" align="center" />
    <el-table-column label="单式繁体" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.singleTraditional"
          placeholder=""
          :value="scope.row.handicap"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="单式" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.single"
          placeholder=""
          :value="scope.row.single"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="上半场" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.firstHalf"
          placeholder=""
          :value="scope.row.firstHalf"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="走地" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.runningGround"
          placeholder=""
          :value="scope.row.runningGround"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="波胆" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.cholesterol"
          placeholder=""
          :value="scope.row.cholesterol"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="入球" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.toScore"
          placeholder=""
          :value="scope.row.toScore"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="半全场" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.halfTime"
          placeholder=""
          :value="scope.row.halfTime"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="让球过关" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.passBall"
          placeholder=""
          :value="scope.row.passBall"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="标准过关" align="center">
      <template #default="scope">
        <el-input
          v-model="scope.row.standardPass"
          placeholder=""
          :value="scope.row.standardPass"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="" align="center" width="80px">
      <template #default="scope">
        <el-button
          type="primary"
          size="small"
          @click="confirmData(scope.$index, scope.row)"
        >
          确定
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      dataRefresh2: [
        {
          title: '足球',
          singleTraditional: '150',
          single: '155',
          firstHalf: '156',
          runningGround: '30',
          cholesterol: '170',
          toScore: '220',
          halfTime: '20',
          passBall: '280',
          standardPass: '260',
        },
        {
          title: '棒球',
          singleTraditional: '150',
          single: '155',
          firstHalf: '156',
          runningGround: '30',
          cholesterol: '170',
          toScore: '220',
          halfTime: '20',
          passBall: '280',
          standardPass: '260',
        },
        {
          title: '其他',
          singleTraditional: '150',
          single: '155',
          firstHalf: '156',
          runningGround: '30',
          cholesterol: '170',
          toScore: '220',
          halfTime: '20',
          passBall: '280',
          standardPass: '260',
        },
      ],
    }
  },
  methods: {
    confirmData() {},
  },
}
</script>

<style lang="scss" scoped></style>
